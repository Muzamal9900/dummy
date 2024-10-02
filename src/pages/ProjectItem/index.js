import React ,{useState}from "react";
import "./index.css";
import video from "../../assets/gif/Final - Trim.mp4";
import { Typography } from "@mui/material";
import SkeletonLoader from "../../components/SkeletonLoader";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";

const ProjectItem = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  let location = useLocation();
  const isVideo = (fileName) => {
    return /\.(mp4)$/i.test(fileName);
};

const isImage = (fileName) => {
    return /\.(png|jpg|jpeg)$/i.test(fileName);
};

  const dataState = location.state.myArray;
  
  console.log("dataState",dataState)
  const handleVideoLoad = () => {
    setLoading(false);
  };
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
  return (
    <>
         <NavBar color={"#000000"} type={"case-study"} />

    <div className="protfolio-item">
     
        { 
          dataState.map((data)=>{
            return (<>
             <div className="protfolio-main-project-item">
               <div className="projects-part-first-item">
            {loading && <div className="skeleton-loader-project"></div>}
  
            {isVideo(data.main) && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={handleVideoLoad}
                    className="projects-part-first-item-video"
                >
                    <source src={data.main} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            
            {isImage(data.main) && (
                <img
                    src={data.main}
                    alt={"graphics"}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onLoad={handleVideoLoad}

                />
            )}
          </div>
            <div className="protfolio-main-text">
            <Typography fontSize={"14px"} fontWeight={600} color={"#000"}>
             {data.text}
            </Typography>
          </div></div>
          <div>
  {data.data.map((slide, index) => {
    // Determine if the current index is for a banner (even index) or part of a two-image row (odd index)
    const isBanner = index % 3 === 0;
    const isFirstOfTwo = (index - 1) % 3 === 0; // Check if it's the first image of a two-image set

    if (isBanner) {
      return (
        <div key={index} className="banner-image">
          <img src={slide} alt={`Banner ${index}`} onLoad={() => setLoaded(true)} />
        </div>
      );
    } else if (isFirstOfTwo) {
      return (
        <div key={index} className="top-two-images" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <img src={slide} alt={`Slide ${index}`} onLoad={() => setLoaded(true)} style={{ width: 'calc(50% - 10px)' }} />
          {data.data[index + 1] && (
            <img src={data.data[index + 1]} alt={`Slide ${index + 1}`} onLoad={() => setLoaded(true)} style={{ width: 'calc(50% - 10px)' }} />
          )}
        </div>
      );
    } else {
      // For odd indices that are not the first of a two-image set, return null to avoid duplicating images
      return null;
    }
  })}
</div>
            </>)
          
          })
        
        }
      
      </div>
  

    </>
  );
};

export default ProjectItem;
