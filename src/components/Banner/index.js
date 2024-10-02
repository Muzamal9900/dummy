import React,{useEffect, useState} from "react";
import "./index.css";
import NavBar from "../NavBar";
import { Typography } from "@mui/material";
import FiveStar from "../../assets/svg/FiveStar";
import clutchImage from "../../assets/images/clutch.png";
import BrandSection from "../BrandSection";
import video from "../../assets/gif/video.mp4"
import loadingPlaceholder from "../../assets/images/banner-background.png"; // Placeholder image path
import Button from "../Button";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const emailAddress = "bookacall@designifyservices.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  useEffect(() => {
    const handleScroll = () => {
      const button = document.querySelector('.project-button');
      const footer = document.querySelector('.Footer-Section-wrapper');
      
      if (!button || !footer) return;

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const footerTopInView = footerRect.top - viewportHeight;

      if (footerTopInView < 100) { // Start adjusting when footer is 100px into view
        button.style.marginBottom = `${ 40 - footerTopInView}px`;
      } else {
        button.style.marginBottom = '0px';
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount // Empty dependency array means this effect runs once on mount
  const handleNavigation = (page, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    event.stopPropagation(); // Stop event from propagating to parent elements
    navigate(`/${page}`);
  }
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="banner-background" >
     {!videoLoaded && (
        <img
          src={loadingPlaceholder}
          alt="Loading..."
          className="banner-video-placeholder"
          style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      <div className="video-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="banner-video"
        onLoadedData={() => setVideoLoaded(true)}
        
        style={{ display: videoLoaded ? "block" : "none" }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
   
      {/* <img src={bannerBackgroung} /> */}
      <div className="banner-navBar">
        <NavBar color={"#FFFFFF"} type={"banner"} iconColor={"#fff"}/>
      </div>
      <div>
      <div className="textSectionParent">
      
      <div className="banner-text-wrapper">
      <div className="banner-text">
              <Typography
                fontSize={"60px"}
                fontWeight={600}
                color={"#fff"}
                maxWidth={"910px"}
                lineHeight={1.35}
              >
                We are strategic design agency offering top-rated services.
              </Typography>
            </div>
      
            <div className="review-section-parent">
              <Typography fontSize={"12px"} fontWeight={600} color={"#fff"}>
                REVIEWED ON
              </Typography>
              <FiveStar color={"#FF2303"}/>
            </div>
          
            <div className="review-section-image">
            <a href="https://clutch.co/profile/designify-services#highlights" target="_blank">
  <img src={clutchImage} alt="clutch" />
</a>
              <Typography fontSize={"12px"} fontWeight={600} color={"#B3B3B3"}>
                Excellent Rating
              </Typography>
            </div>
      </div>
      <div className="banner-text-wrapper-button">
      <div className="banner-text-email" onClick={handleEmailClick}>
              <Typography
                fontSize={"22px"}
                fontWeight={500}
                color={"#fff"}
              >
                {emailAddress}
              </Typography>
             
            </div>
            <div className="project-button">
      
      <Button text={"New Project?"} type={"white"}   onClick={(e) => handleNavigation('contact-us', e)}/>
            </div>
      
      </div>
      
            </div>
          
            <div className="client-section">
             <BrandSection/>
            </div>
      </div>
     
    </div>
  );
};

export default Banner;
