import React from "react";
import "./index.css";
import clientImage from "../../assets/images/perfomance.png"
import { Typography } from "@mui/material";
import Arrow from "../../assets/images/arrow.png";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import clientImage2 from "../../assets/images/clientperformance.png"

const PerformanceSection = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.3, // Component should be 30% visible before triggering
  });
  return (
    <div className="Performance-Section" ref={ref}>
  
      <div className="Performance-Section-details">
      <div  className={`Performance-Section-Parent ${inView ? 'animateInView' : ''}`}>
        <Typography fontStyle={"italic"} variant="h2" fontWeight={400} color={"#0F0F0F"}>
        From startups to fortune 500 companies
        </Typography>
        <Typography fontSize={"60px"} fontWeight={700} color={"#0F0F0F"}>
        Performance Analytics
          </Typography> 
          <div className="Performance-Section-details-text">
        <Typography fontSize={"40px"} fontWeight={500}  color={"#0F0F0F"}>
        Trusted by
        </Typography>
        <div className="flex-row-performance">
           <img src={Arrow} alt="client" />
           <Typography fontSize={"32px"} fontWeight={800}  color={"#0F0F0F"}>
           {inView ?  <CountUp end={400} duration={1} 
  suffix=" +" /> : null}
          
        </Typography>
        <Typography fontSize={"32px"} fontWeight={700}  color={"#727272"}>
        Companies
        </Typography>
        </div>
        </div>
      </div>
   
        <div className="Performance-Section-Cost">
          <div className="Performance-Section-Cost-text">
          <Typography fontSize={"60px"} fontWeight={600}  color={"#18BD32"}>
        {inView ?   <CountUp end={87} duration={1} 
  suffix="%" prefix={"+"} />: null}
       
     
        </Typography>
          </div>
      
        <Typography fontSize={"22px"} fontWeight={400}  color={"#373940"}>
        Increased revenue of our clients in last 6-12 months
        </Typography>
        <div className="marginTop">
          <div className="Performance-Section-Cost-text">
          <Typography fontSize={"60px"} fontWeight={600} color={"#18BD32"}>
        {inView ?  <CountUp end={1.2} duration={1} 
  suffix="M" prefix={"$"} /> : null}
  </Typography>
          </div>
       
       
        
        <Typography fontSize={"22px"} fontWeight={400}  color={"#373940"}>
        Revenue generated by our top clients in this time span        </Typography>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
