import { Typography } from "@mui/material";
import React from "react";
import "./index.css";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.3, // Component should be 30% visible before triggering
  });

  return (
    <div ref={ref}>
      {inView && (
        <div className="projects-about-wrapper">
          <div className="projects-about">
            <div className={`flex-row-projects-column ${inView ? 'animateInView' : ''}`}>
              <Typography fontSize={"60px"} fontWeight={700} color={"#FFF"}>
                About Us
              </Typography>
            </div>

            <div className="projects-about-text-parent">
              <div className={`flex-row-projects ${inView ? 'animateInView' : ''}`}>
                <div className="projects-gap">
                  <div className="projects-about-text-completed">
                    <Typography variant="h1" fontWeight={500} color={"#FFF"}>
                      Completed Projects
                    </Typography>
                    <Typography fontSize={"60px"} fontWeight={600} color={"#18BD32"}>
                      {inView ? <CountUp end={1500} duration={1} suffix=" +" /> : null}
                    </Typography>
                  </div>
                  <div className="projects-about-text-completed">
                    <Typography variant="h1" fontWeight={500} color={"#FFF"}>
                      Team Members
                    </Typography>
                    <Typography fontSize={"60px"} fontWeight={600} color={"#18BD32"}>
                      {inView ? <CountUp end={50} duration={1} suffix=" +" /> : null}
                    </Typography>
                  </div>
                </div>

                <div className="projects-gap">
                  <div className="projects-about-text-clients">
                    <Typography variant="h1" fontWeight={500} color={"#FFF"}>
                      Unique Clients
                    </Typography>
                    <Typography fontSize={"60px"} fontWeight={600} color={"#18BD32"}>
                      {inView ? <CountUp end={400} duration={1} /> : null}
                    </Typography>
                  </div>
                  <div className="projects-about-text-clients">
                    <Typography variant="h1" fontWeight={500} color={"#FFF"}>
                      World Domination
                    </Typography>
                    <Typography fontSize={"60px"} fontWeight={600} color={"#18BD32"}>
                      {inView ? <CountUp end={43} duration={1} suffix=" %" /> : null}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={`flex-column-para ${inView ? 'animateInView' : ''}`}>
                <Typography variant="h1" fontWeight={600} color={"#FFF"} lineHeight={1.6}>
                  We mix our genuine love for design with our tenacious dedication to detail and craft.
                </Typography>
                <Typography fontSize={"22px"} fontWeight={400} color={"#FFF"} lineHeight={1.4}>
                  Designify is a premier design agency committed to delivering excellence in visual communication. With a focus on precision and creativity, our seasoned team of designers transforms concepts into sophisticated and impactful designs. Specializing in brand development, web design, and print materials, we bring a professional touch to every project. Partner with Designify to enhance your brand's visual identity and make a lasting impression in today's competitive landscape.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsSection;
