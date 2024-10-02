import React, { useState } from 'react';
import './index.css';
import Button from '../Button';
import axios from 'axios'; // Import axios

const ContactForm = ({ selected, location }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // URL of the API endpoint
    const apiUrl = 'https://app.designifyservices.com/services'; // Change this to your actual API URL
    const apiData={
      ...formData,
      services:selected,
      longitude:location.longitude,
      latitude:location.latitude

    }
    try {
      // Sending the form data to the server
      const response = await axios.post(apiUrl, apiData);
      console.log('Form submitted:', response.data);
      alert('Form submitted successfully!'); // Display success message
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form.'); // Display error message
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            placeholder='Contact Number'
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className='send-button'>
          <Button type="submit" text={"Let’s talk!"}>Let’s talk!</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
