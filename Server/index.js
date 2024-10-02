const express = require('express');
const { google } = require('googleapis');
const query = require('./db/db'); // Assuming your MySQL setup is in a file named db.js
const app = express();
const credentials = require('./credentials.json');

app.use(express.json());
const cors = require('cors');
app.use(cors()); // This will allow all CORS requests
const nodemailer = require('nodemailer');

// Load credentials from a file (you can securely store these credentials)

// Create OAuth2 client

const oAuth2Client = new google.auth.OAuth2(
    credentials.client_id,
    credentials.client_secret,
    credentials.redirect_uris
  );
  
  // Set up nodemailer transporter
  async function createTransporter() {
    const accessToken = await oAuth2Client.getAccessToken(); // Asynchronously get the access token
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: credentials.gmail_user,
        clientId: credentials.client_id,
        clientSecret: credentials.client_secret,
        refreshToken: credentials.refresh_token,
        accessToken: accessToken.token  // Use the token from the resolved promise
      },
    });
  
    return transporter;
  }
  
// Function to send email
async function sendEmail(formData) {
  const transporter = await createTransporter(); // Ensure the transporter is created with valid access token
  const { name, email, contactNumber, servicesCSV, latitude, longitude } = formData;
  const mailOptions = {
    from: '"Designify Services" <bookacall@designifyservices.com>',
    to: 'shehzadaammadali1234@gmail.com',
    subject: 'New Service Request',
    html: `
      <h1>New Service Request</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact Number:</strong> ${contactNumber}</p>
      <p><strong>Services:</strong> ${servicesCSV}</p>
      <p><strong>Location:</strong> Latitude ${latitude}, Longitude ${longitude}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

app.post('/services', async (req, res) => {
  try {
    const { name, email, contactNumber, services, latitude, longitude } = req.body;
    const servicesCSV = services.join(', ');

    const sql = 'INSERT INTO services (name, email, contact_number, services, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)';
    const results = await query(sql, [name, email, contactNumber, servicesCSV, latitude, longitude]);

    // Sending email after successful insertion
    const emailSent = await sendEmail({ name, email, contactNumber, servicesCSV, latitude, longitude });
    if (emailSent) {
      console.log("hii")
      res.status(201).json({ id: results.insertId, name, email, contactNumber, message: 'Data inserted and email sent' });
    } else {
      console.log("hidddi")

      res.status(201).json({ id: results.insertId, name, email, contactNumber, message: 'Data inserted but email failed' });
    }
  } catch (error) {
    console.log("hiddddsdi")

    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
