import React,{useState} from "react";
import "./index.css";
import { Typography } from "@mui/material";
import Button from "../Button";
import ContactForm from "../ContactForm";
import ClutchProtfolio from "../../assets/images/clutchProtfolio.png";
import FiveStar from "../../assets/svg/FiveStar";
import layer from "../../assets/images/layer.png";
import avatar from "../../assets/images/managerphoto.png"
import linkedin from "../../assets/images/Layer_1.png"
import GoodForms from "../../assets/svg/GoodForms";
import Linkedin from "../../assets/svg/Linkedin";

const ContactUsSection = ({location}) => {
  const [selected, setSelected] = useState([]);
  const emailAddress = "bookacall@designifyservices.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  // Function to handle button click, allowing for multiple selections
  const handleButtonClick = (buttonText) => {
    setSelected(prevSelected => {
      if (prevSelected.includes(buttonText)) {
        // Remove item from selection if already selected
        return prevSelected.filter(item => item !== buttonText);
      } else {
        // Add item to selection if not already selected
        return [...prevSelected, buttonText];
      }
    });
  };
  return (
    <div className="ContactUsWrapper">
  <div className="ContactUsSection">
      <div className="ContactUsSection-parent">
        <Typography
          fontSize={"28px"}
          fontWeight={400}
          fontStyle={"italic"}
          color={"#fff"}
        >
          Share your ideas, receive stunning designs
        </Typography>
        <div className="ContactUsSection-parent-text">
        <Typography fontSize={"60px"} fontWeight={700} color={"#fff"}>
          Lets start a project
        </Typography>
        </div>
      
      </div>
      <div className="ContactUsSection-parent-details">
        <Typography fontSize={"28px"} fontWeight={400} color={"#fff"}>
          You need to do
        </Typography>
        <div className="ContactUsSection-parent-details-button" >
            {["UX / UI Design", "Product Packaging", "Branding", "Logo Design", "Others"].map((text) => (
              <Button
                key={text}
                text={text}
                type={selected.includes(text) ? "selected" : "white"}
                onClick={() => handleButtonClick(text)}
              />
            ))}
          </div>
        <div className="ContactUsSection-parent-details-form">
          <div className="ContactUsSection-parent-details-formparent">
          <ContactForm  location={location} selected={selected}/>

          </div>
          <div className="ContactUsSection-company">
            <div className="ContactUsSection-company-clutch" >
            <a href="https://clutch.co/profile/designify-services#highlights" target="_blank">
  <img src={ClutchProtfolio} alt="clutch" />
</a>
              <div className="review-star">
                <div className="review-star-number">
                  <Typography fontSize={"22px"} fontWeight={600} color={"#fff"}>
                    4.9
                  </Typography>
                  <FiveStar color={"#FF2303"} />
                </div>
                <Typography
                  fontSize={"11px"}
                  fontWeight={600}
                  color={"#B3B3B3"}
                >
                  Based on 77 clutch reviews
                </Typography>
              </div>
            </div>
            <div className="ContactUsSection-company-five-star">
              <div className="ContactUsSection-company-five-star-excellent">
                <Typography fontSize={"19px"} fontWeight={700} color={"#fff"}>
                  EXCELLENT
                </Typography>
                <FiveStar color={"#FFB803"} />
              </div>
             
              <GoodForms/>
            </div>
            <div className="ContactUsSection-person-detail">
             <div className="ContactUsSection-person-detail-avatar">
                <div className="ContactUsSection-person-detail-avatar-image">
                       <img src={avatar} alt="avatar"/>
                </div>
                <div className="ContactUsSection-person-detail-avatar-image-text">
                    <Typography fontSize={"18px"} fontWeight={700} color={"#FFF"}>
                    Muhammad Waqas
                    </Typography>
                    <Typography fontSize={"18px"} fontWeight={700} color={"#B7B4B4"}>
                    Manager, Customer Success
                    </Typography>
                    <Typography fontSize={"18px"} fontWeight={400} color={"#B7B4B4"} onClick={handleEmailClick}>
                    {emailAddress}                  </Typography>
                    <Typography fontSize={"18px"} fontWeight={400} color={"#B7B4B4"}>
                    +1 703 794 2082
                    </Typography>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default ContactUsSection;
