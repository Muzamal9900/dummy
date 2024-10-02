import React from "react";
import "./index.css";
import { Typography } from "@mui/material";
import ContactForm from "../../components/ContactForm";
import Button from "../../components/Button";
import NavBar from "../../components/NavBar";


const ContactUs = () => {
  return (
    <div className="contact-us-page" >
    <NavBar color={"#FFFFFF"} type={"ContactUS"}/>
    <div className="ContactUsWrapper">
    <div className="ContactUsSection">
        
        <div className="ContactUsSection-parent">
       
          <Typography fontSize={"60px"} fontWeight={700} color={"#fff"}>
          Contact Us
          </Typography>
        </div>
        <div className="ContactUsSection-parent-details">
          <Typography fontSize={"28px"} fontWeight={400} color={"#fff"}>
            You need to do
          </Typography>
          <div className="ContactUsSection-parent-details-button">
            <Button text={"UX / UI Design"} type={"white"} />
            <Button text={"Product Packaging"} type={"white"} />
            <Button text={"Branding"} type={"white"} />
            <Button text={"Logo Design"} type={"white"} />
            <Button text={"Others"} type={"white"} />
          </div>
          <div className="ContactUsSection-parent-details-formparent" style={{marginTop:"80px"}}>
          <ContactForm />

          </div>
        </div>
      </div>
    </div>
    </div>
   
  
  );
};

export default ContactUs;
