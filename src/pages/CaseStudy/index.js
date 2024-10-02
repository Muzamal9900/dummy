import React from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Typography } from "@mui/material";
import CaseImage from "../../assets/svg/CaseImage";
import casestudy1 from "../../assets/images/casestudy1.png"
import casestudy2 from "../../assets/images/casestudy2.png"
import casestudy3 from "../../assets/images/casestudy3.png"
import casestudy4 from "../../assets/images/casestudy4.png"
import casestudy5 from "../../assets/images/casestudy5.png"
import casestudy6 from "../../assets/images/casestudy6.png"
import casestudy7 from "../../assets/images/casestudy7.png"
import casestudy8 from "../../assets/images/casestudy8.png"
import Button from "../../components/Button";
import { useInView } from 'react-intersection-observer';

import { useNavigate } from 'react-router-dom';

const CaseStudy = () => {
  const navigate = useNavigate();
  const handleNavigation = (page, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    event.stopPropagation(); // Stop event from propagating to parent elements
    navigate(`/${page}`);
  }
    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.3, // Component should be 30% visible before triggering
      });
  return (
    <div className="case-study" ref={ref}>
      <NavBar color={"#000000"} type={"case-study"} />
      <div  className={`case-study-main ${inView ? 'animateInView' : ''}`}  >
    
        <Typography
          color={"#000"}
          fontSize={"40px"}
          fontWeight={400}
          sx={{ marginTop: "10px" }}
        >
          Time tracking application
        </Typography>
        <div className="case-study-main-detail">
          <div className="case-main-image">
          <CaseImage />

          </div>
          <div className={`case-study-main-detail-parent ${inView ? 'animateInView' : ''}`}>
            <div className={`case-study-main-detail-parent-text ${inView ? 'animateInView' : ''}` }>
              <Typography fontSize={"40px"} color={"#000"} fontWeight={700}>
                Time Redefined
              </Typography>
              <Typography fontSize={"24px"} color={"#373940"} fontWeight={400}>
                In the bustling realm of productivity, MMTracker emerges as a
                beacon of efficiency, redefining the landscape of time tracking
                applications. This innovative tool serves as a meticulous
                guardian, capturing every fleeting moment to empower users in
                managing their time with unparalleled precision.<br/> The MMTracker
                logo encapsulates the essence of time itself – a seamless fusion
                of modern aesthetics and functional simplicity. A dynamic
                hourglass at the core symbolizes the continuous flow of time,
                while sleek, minimalist lines radiate outward, reflecting the
                app's commitment to clarity and user-friendly design.
              </Typography>
            </div>
            <img src={casestudy1} alt="caseStudy"/>
          </div>
          <div className={`case-study-main-detail-parent-images ${inView ? 'animateInView' : ''}`} >
          <img src={casestudy2} alt="casestudy2"/>
           <div className={`flex-row ${inView ? 'animateInView' : ''}`} >
           <img src={casestudy3} alt="casestudy2"/>
           <img src={casestudy4} alt="casestudy2"/>
           </div>
           <div  className={`flex-row-secound ${inView ? 'animateInView' : ''}`} >
           <img src={casestudy5} alt="casestudy2"/>
            <div  className={`flex-row-text ${inView ? 'animateInView' : ''}`} >
             <Typography fontSize={"24px"} fontWeight={400} color={"#373940"}>
             MMTracker simplifies time management. Effortlessly track, manage, and optimize your time with our intuitive app. A sleek interface and dynamic features empower you to seize every moment efficiently.
             </Typography>
            </div>
           </div>
           <img src={casestudy6} alt="casestudy"/>
           <div  className={`flex-row ${inView ? 'animateInView' : ''}`}>
           <img src={casestudy7} alt="casestudy2"/>
           <img src={casestudy8} alt="casestudy2"/>
           </div>
          </div>
<div  className={`case-study-end ${inView ? 'animateInView' : ''}`} >
 <Typography color={"#000"} fontSize={"40px"} fontWeight={"400"} sx={{maxWidth:"825px",marginBottom:"70px",textAlign:"center"}}>
 If you want to know more about this project, we would be happy talk
 </Typography>
<div className="button">
<Button text={"Contact Us"}  onClick={(e) => handleNavigation('contact-us', e)} />   
</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
