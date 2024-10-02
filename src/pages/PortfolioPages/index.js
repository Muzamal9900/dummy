import React, { useState } from 'react';
import "./index.css"
import NavBar from '../../components/NavBar'
import { useInView } from 'react-intersection-observer';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useNavigate } from 'react-router-dom';
import { Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../../components/Button';
import SkeletonLoader from '../../components/SkeletonLoader';
const scopityData = [
   "https://app.designifyservices.com/caseStudy/scoopity/slides/02.png",
  "https://app.designifyservices.com/caseStudy/scoopity/slides/10.png",
  "https://app.designifyservices.com/caseStudy/scoopity/slides/05.png",
  "https://app.designifyservices.com/caseStudy/scoopity/slides/03.png",
  "https://app.designifyservices.com/caseStudy/scoopity/slides/08.png",
  "https://app.designifyservices.com/caseStudy/scoopity/slides/07.png",
  "https://app.designifyservices.com/caseStudy/scoopity/slides/06.png",
  "https://app.designifyservices.com/caseStudy/scoopity/slides/09.png",
  "https://app.designifyservices.com/caseStudy/scoopity/slides/04.png",
];
const yooGoodData = [
  "https://app.designifyservices.com/caseStudy/YooGood/01.png",
  "https://app.designifyservices.com/caseStudy/YooGood/02.png",
  "https://app.designifyservices.com/caseStudy/YooGood/03.png",
  "https://app.designifyservices.com/caseStudy/YooGood/04.png",
  "https://app.designifyservices.com/caseStudy/YooGood/05.png",

];
const HappySips = [
  "https://app.designifyservices.com/caseStudy/HappySips/01.png",
  "https://app.designifyservices.com/caseStudy/HappySips/02.png",
  "https://app.designifyservices.com/caseStudy/HappySips/03.png",
  "https://app.designifyservices.com/caseStudy/HappySips/05.png",
  "https://app.designifyservices.com/caseStudy/HappySips/04.png",
  "https://app.designifyservices.com/caseStudy/HappySips/06.png",
  "https://app.designifyservices.com/caseStudy/HappySips/07.png",
  "https://app.designifyservices.com/caseStudy/HappySips/08.png",
  "https://app.designifyservices.com/caseStudy/HappySips/09.png",
  "https://app.designifyservices.com/caseStudy/HappySips/10.png",
];
const littleData = [
  "https://app.designifyservices.com/caseStudy/littlethreads/01.png",
  "https://app.designifyservices.com/caseStudy/littlethreads/04.png",
  "https://app.designifyservices.com/caseStudy/littlethreads/09.png",
  "https://app.designifyservices.com/caseStudy/littlethreads/07.png",
  "https://app.designifyservices.com/caseStudy/littlethreads/08.png",
  "https://app.designifyservices.com/caseStudy/littlethreads/06.png",
];
const BRISKOData = [
  "https://app.designifyservices.com/caseStudy/BRISKO/01.jpg",
  "https://app.designifyservices.com/caseStudy/BRISKO/04.jpg",
  "https://app.designifyservices.com/caseStudy/BRISKO/06.jpg",
  "https://app.designifyservices.com/caseStudy/BRISKO/09.jpg",
  "https://app.designifyservices.com/caseStudy/BRISKO/10.jpg",
];
const MAYAMOData = [
  "https://app.designifyservices.com/caseStudy/MAYAMO/01 (1).png",
  "https://app.designifyservices.com/caseStudy/MAYAMO/02 (2).png",
  "https://app.designifyservices.com/caseStudy/MAYAMO/03 (1).png",
  "https://app.designifyservices.com/caseStudy/MAYAMO/05 (1).png",
];
const UMMEData = [
  "https://app.designifyservices.com/caseStudy/UMME/01.png",
  "https://app.designifyservices.com/caseStudy/UMME/02.png",
  "https://app.designifyservices.com/caseStudy/UMME/03.png",
  "https://app.designifyservices.com/caseStudy/UMME/05.png",
  "https://app.designifyservices.com/caseStudy/UMME/06.png",
];
const VICARRYData = [
   "https://app.designifyservices.com/caseStudy/VICARRY/01 (10).png",
  "https://app.designifyservices.com/caseStudy/VICARRY/01 (11).png",
  "https://app.designifyservices.com/caseStudy/VICARRY/02 (9).png",
  "https://app.designifyservices.com/caseStudy/VICARRY/03 (11).png",
  "https://app.designifyservices.com/caseStudy/VICARRY/04 (9).png",
  "https://app.designifyservices.com/caseStudy/VICARRY/05 (7).png",
  "https://app.designifyservices.com/caseStudy/VICARRY/08 (4).png",
];
const SKINXData = [
  "https://app.designifyservices.com/caseStudy/SKINX/SKINX/01-21.png",
  "https://app.designifyservices.com/caseStudy/SKINX/SKINX/02-23.png",
  "https://app.designifyservices.com/caseStudy/SKINX/SKINX/03-16.png",
  "https://app.designifyservices.com/caseStudy/SKINX/SKINX/04-13.png",
  "https://app.designifyservices.com/caseStudy/SKINX/SKINX/05-7.png",
  "https://app.designifyservices.com/caseStudy/SKINX/SKINX/Hair-Remover-3D.jpg",
];
const PLIXOData = [
  "https://app.designifyservices.com/caseStudy/PLIXO 3D/BN.png",
   "https://app.designifyservices.com/caseStudy/PLIXO 3D/J.png",
  "https://app.designifyservices.com/caseStudy/PLIXO 3D/J4.png",
    "https://app.designifyservices.com/caseStudy/PLIXO 3D/J5.png",
];

const websiteData = [
  "https://app.designifyservices.com/caseStudy/casestudy 03/Artboard 10@2x-100.pg",
  "https://app.designifyservices.com/caseStudy/casestudy 03/Artboard 2@2x-100.jg",
  "https://app.designifyservices.com/caseStudy/casestudy 03/Artboard 3@2x-100.jg",
  "https://app.designifyservices.com/caseStudy/casestudy 03/Artboard 4@2x-100.jg",
  "https://app.designifyservices.com/caseStudy/casestudy 03/Artboard 5@2x-100.jg",
  "https://app.designifyservices.com/caseStudy/casestudy 03/Artboard 6@2x-100.jg",
  "https://app.designifyservices.com/caseStudy/casestudy 03/Artboard 7@2x-8.png",
  "https://app.designifyservices.com/caseStudy/casestudy 03/Artboard 8@2x-100.jg",
  "https://app.designifyservices.com/caseStudy/casestudy 03/Artboard 9@2x-100.jg",

];

const kittyData = [
  "https://app.designifyservices.com/caseStudy/KITTY (2)/Artboard 10@2x.jpg",
 "https://app.designifyservices.com/caseStudy/KITTY (2)/Artboard 2@2x-100.jpg",
  "https://app.designifyservices.com/caseStudy/KITTY (2)/Artboard 3@2x-100.jpg",
  "https://app.designifyservices.com/caseStudy/KITTY (2)/Artboard 4@2x-100.jpg",
  "https://app.designifyservices.com/caseStudy/KITTY (2)/Artboard 5@2x-100.jpg",
  "https://app.designifyservices.com/caseStudy/KITTY (2)/Artboard 6@2x-100.jpg",
  "https://app.designifyservices.com/caseStudy/KITTY (2)/Artboard 9@2x-100.jpg",
];

const locusData = [
  "https://app.designifyservices.com/caseStudy/locus (1)/Artboard 10@4x-100.jpg",
  "https://app.designifyservices.com/caseStudy/locus (1)/Artboard 1@4x-100.jpg",
  "https://app.designifyservices.com/caseStudy/locus (1)/Artboard 2@4x-100.jpg",
  "https://app.designifyservices.com/caseStudy/locus (1)/Artboard 3@4x-100.jpg",
  "https://app.designifyservices.com/caseStudy/locus (1)/Artboard 4@4x-100.jpg",
  "https://app.designifyservices.com/caseStudy/locus (1)/Artboard 5@4x-100.jpg",
  "https://app.designifyservices.com/caseStudy/locus (1)/Artboard 6@4x-100.jpg",
  "https://app.designifyservices.com/caseStudy/locus (1)/Artboard 7@4x-100.jpg",
  "https://app.designifyservices.com/caseStudy/locus (1)/Artboard 8@4x-100.jpg",
  "https://app.designifyservices.com/caseStudy/locus (1)/Artboard 9@4x-100.jpg",
];


const slidesData = [
  {
    id:1,
      title: "Scopity",
      image: "https://app.designifyservices.com/mainImages/main-01.jpg",
      data:scopityData,
      main:  require("../../assets/gif/Final - Trim.mp4"),
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:2,
      title: "yooGoodData",
      image: "https://app.designifyservices.com/mainImages/main-02.jpg",
      data:yooGoodData,
      main:require("../../assets/gif/HD 2 - Trim.mp4"),
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:3,
      title: "HappySips",
      image: "https://app.designifyservices.com/mainImages/main-03.jpg",
      data:HappySips,
      main:  require("../../assets/gif/HD - Trim.mp4"),
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:4,
      title: "littleData",
      image: "https://app.designifyservices.com/mainImages/main-04.jpg",
      data:littleData,
      main:  require("../../assets/caseStudy/littlethreads/01.png"),
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:5,
    title: "website",
    image: "https://app.designifyservices.com/mainImages/main-05.jpg",
    data:websiteData,
    main:   require("../../assets/caseStudy/casestudy 03/Artboard 10@2x-100.jpg"),
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
  id:6,
  title: "locusData",
  image: "https://app.designifyservices.com/mainImages/main-06.jpg",
  data:locusData,
  main:   require("../../assets/caseStudy/locus (1)/Artboard 10@4x-100.jpg"),
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
id:7,
title: "Brisko",
image: "https://app.designifyservices.com/mainImages/main-07.jpg",
data:BRISKOData,
main:  require("../../assets/caseStudy/BRISKO/01.jpg"),
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
id:8,
title: "KITTY",
image: "https://app.designifyservices.com/mainImages/main-08.jpg",
data:kittyData,
main:    require("../../assets/caseStudy/KITTY (2)/Artboard 10@2x.jpg"),
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
id:9,
title: "Brisko",
image: "https://app.designifyservices.com/mainImages/main-09.jpg",
data:VICARRYData,
main:  require("../../assets/caseStudy/VICARRY/01 (10).png"),
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

},
{
id:10,
title: "Brisko",
image: "https://app.designifyservices.com/mainImages/main-10.jpg",
data:UMMEData,
main:   require("../../assets/caseStudy/UMME/01.png"),
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
id:11,
title: "PLIXOData",
image: "https://app.designifyservices.com/mainImages/main-11.jpg",
data:PLIXOData,
main:   require("../../assets/caseStudy/PLIXO 3D/BN.png"),
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

},
{
id:12,
title: "MAYAMOData",
image: "https://app.designifyservices.com/mainImages/main-12.jpg",
data:MAYAMOData,
main:  require("../../assets/caseStudy/MAYAMO/01 (1).png"),
text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
  // ... add more slides here
];

const PortfolioPages = () => {
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [loaded, setLoaded] = useState(new Array(slidesData.length).fill(false));

  // useEffect(() => {
  //   // Define a function to call when an interaction is detected
  //   const handleUserInteraction = () => {
  //     setUserHasInteracted(true); // Update the state to true

  //     // Remove event listeners after the first interaction
  //     // to avoid unnecessary updates and to clean up resources
  //     ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
  //       window.removeEventListener(event, handleUserInteraction);
  //     });
  //   };

  //   // Attach event listeners to the window object for different interaction types
  //   ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
  //     window.addEventListener(event, handleUserInteraction);
  //   });

  //   // Cleanup function to remove event listeners when the component unmounts
  //   return () => {
  //     ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
  //       window.removeEventListener(event, handleUserInteraction);
  //     });
  //   };
  // }, []); 

  const navigate = useNavigate();
  const handleNavigationProject = (page,event,data,main,text) => {
    console.log("data",data,main,text)
    const finalArray=[
      {
        data,
        main,
        text
      }
    ]
    event.preventDefault(); // Prevent default anchor behavior
    event.stopPropagation(); // Stop event from propagating to parent elements
    navigate(
       `/${page}`,
      {state: { myArray: finalArray }
    });
  }
  



    const handleImageLoaded = (index) => {
      setLoaded(currentLoaded => {
        const updatedLoaded = [...currentLoaded];
        updatedLoaded[index] = true;
        return updatedLoaded;
      });
    }
  return (
    <>
    <div className='protfolio' >
      
            <NavBar color={"#000000"} type={"case-study"} />
            <div className='protfolio-item'>
            <div className="grid-gallery">
          {slidesData.map((slide, index) => (
         <div key={index} className="grid-item" onClick={(e) => handleNavigationProject('Project-item', e, slide.data, slide.main, slide.text)}>
         {!loaded[index] && <SkeletonLoader />}
         <img
           src={slide.image}
           alt={slide.title}
           onLoad={() => handleImageLoaded(index)}
           loading="lazy"
           style={{ display: loaded[index] ? 'block' : 'none' }}
         />
       </div>
          ))}
        </div>

            </div>
        
    </div>

    </>
  )
}

export default PortfolioPages
