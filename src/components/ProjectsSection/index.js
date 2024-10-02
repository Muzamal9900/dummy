import { Typography } from "@mui/material";
import React,{useState} from "react";
import Button from "../Button";
import "./index.css";
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import video from "../../assets/gif/Final - Trim.mp4"
import videoProjectFirst from "../../assets/gif/HD - Trim.mp4"
import videoProjectSecound from "../../assets/gif/HD 2 - Trim.mp4"

const ProjectSection = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loadingt, setLoadingt] = useState(true);

  const handleVideoLoad = () => {
    setLoading(false);
  };
  
  const handleVideoLoad2 = () => {
    setLoading2(false);
  };
  const handleVideoLoadt = () => {
    setLoadingt(false);
  };
  const data = [
    require("../../assets/caseStudy/HappySips/01.png"),
    require("../../assets/caseStudy/HappySips/02.png"),
    require("../../assets/caseStudy/HappySips/03.png"),
    require("../../assets/caseStudy/HappySips/04.png"),
    require("../../assets/caseStudy/HappySips/05.png"),
    require("../../assets/caseStudy/HappySips/06.png"),
    require("../../assets/caseStudy/HappySips/07.png"),
    require("../../assets/caseStudy/HappySips/08.png"),
    require("../../assets/caseStudy/HappySips/09.png"),
    require("../../assets/caseStudy/HappySips/10.png"),
  ];
  const scopityData = [
    require("../../assets/caseStudy/scoopity/slides/01.png"),
    require("../../assets/caseStudy/scoopity/slides/02.png"),
    require("../../assets/caseStudy/scoopity/slides/03.png"),
    require("../../assets/caseStudy/scoopity/slides/04.png"),
    require("../../assets/caseStudy/scoopity/slides/05.png"),
    require("../../assets/caseStudy/scoopity/slides/06.png"),
    require("../../assets/caseStudy/scoopity/slides/07.png"),
    require("../../assets/caseStudy/scoopity/slides/08.png"),
    require("../../assets/caseStudy/scoopity/slides/09.png"),
    require("../../assets/caseStudy/scoopity/slides/10.png"),
  ];
  const yooGoodData = [
    require("../../assets/caseStudy/YooGood/01.png"),
    require("../../assets/caseStudy/YooGood/02.png"),
    require("../../assets/caseStudy/YooGood/03.png"),
    require("../../assets/caseStudy/YooGood/04.png"),
    require("../../assets/caseStudy/YooGood/05.png"),
  ];
  
  const navigate = useNavigate();
  const handleNavigation = (page, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    event.stopPropagation(); // Stop event from propagating to parent elements
    navigate(`/${page}`);
  }
  const handleNavigationProject = (page, event,data) => {
    console.log("data",data)
    event.preventDefault(); // Prevent default anchor behavior
    event.stopPropagation(); // Stop event from propagating to parent elements
    navigate(
       `/${page}`,
      {state: { myArray: data }
    });
  }
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.4, // Component should be 30% visible before triggering
  
  });
  return (
    <div className="projects-section">
      <div  className={`projects-section-parent ${inView ? 'animateInView' : ''}`} ref={ref}>
        <div className="projects-section-parent-text">
          <Typography variant="h2" fontWeight={400} color={"#0F0F0F"}>
            what we do
          </Typography>
          <Typography fontSize={"60px"} fontWeight={700} color={"#0F0F0F"}>
            Fresh Projects
          </Typography>
        </div>
        <div className="projects-section-parent-button">
          <Button text={"Explore more"} onClick={(e) => handleNavigation('portfolio-page', e)} />
        </div>
      </div>
      <div className="projects-show">
        <div className="projects-show-first" ref={ref}  onClick={(e) => handleNavigationProject('project-show', e,data)}>
        {loadingt && <div className="skeleton-loader-project"></div>}

        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onLoadedData={handleVideoLoadt}

        >
          <source src={videoProjectFirst} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
     
        </div>
        <div className="projects-part">
          <div className="projects-part-first"  onClick={(e) => handleNavigationProject('project-show', e,scopityData)}>
          {loading && <div className="skeleton-loader-project"></div>}

          <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}

        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            
          </div>
          <div className="projects-part-first" onClick={(e) => handleNavigationProject('project-show', e,yooGoodData)}>
          {loading2 && <div className="skeleton-loader-project"></div>}

  <video
    autoPlay
    loop
    muted
    playsInline
    onLoadedData={handleVideoLoad2}

    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  >
    <source src={videoProjectSecound} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
