import React,{useState} from "react";
import "./index.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fverr from "../../assets/svg/Fverr";
import Borjan from "../../assets/svg/Borjan";
import BorjanBlack from "../../assets/svg/BorjanBlack";
import Lego from "../../assets/svg/lego";
import BullProof from "../../assets/svg/BullProof";
import DilaraBlack from "../../assets/svg/dilaraBlack";
import FiverrGreen from "../../assets/svg/fiverrGreen";
import LegoColor from "../../assets/svg/LegoColor";
import AleemBeauty from "../../assets/svg/aleemBeauty";
import Avon from "../../assets/svg/Avon";
import BullProofWhite from "../../assets/svg/BullProofWhite";
import Crossfit from "../../assets/svg/crossfit";
import Rivaj from "../../assets/svg/Rivaj";
const BrandSection = () => {
  const [hoverStates, setHoverStates] = useState({});
  const handleMouseEnter = (clientId) => {
    setHoverStates(prev => ({ ...prev, [clientId]: true }));
  };
  
  const handleMouseLeave = (clientId) => {
    setHoverStates(prev => ({ ...prev, [clientId]: false }));
  };
  const settings = {
    dots: false,
    infinite: true, // Enable infinite looping
    speed: 2000, // Adjust the speed of the transition between slides
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay to automatically cycle through slides
    autoplaySpeed: 0, // Set to 0 for continuous scrolling effect
    cssEase: "linear", // Use linear animation for smooth continuous scrolling
    pauseOnHover: true,
    responsive: [
      {
  breakpoint: 1400, // At 1024px and below
        settings: {
          slidesToShow: 4, // Show 5 slides
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1024, // At 1024px and below
        settings: {
          slidesToShow: 3, // Show 5 slides
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600, // At 600px and below
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // At 480px and below
        settings: {
          slidesToShow: 2, // Show 1 slide
          slidesToScroll: 1
        }
      }
    ]
  };
  const handleClientClick = (client) => {
    if(client==="client1"){
      window.open('https://www.lego.com/en-us', '_blank');
    }else if (client==="client2") {
      window.open('https://fiverr.com', '_blank');
    }else if (client==="client3") {
      window.open('http://bullproof.com.au/', '_blank');
    }else if (client==="client5") {
      window.open('https://www.instagram.com/di1ara/', '_blank');
    }else if (client==="client6") {
      window.open('https://www.borjan.com.pk', '_blank');
    }
    else if (client==="client7") {
      window.open('https://www.alezem.com/', '_blank');
    }
    else if (client==="client8") {
      window.open('https://www.avon.com/', '_blank');
    }
    else if (client==="client9") {
      window.open('https://www.crossfit.com/', '_blank');
    }
    else if (client==="client10") {
      window.open('https://rivaj-uk.com/', '_blank');
    }


  };
  return (
    <div className="mainContainer">
    <Slider {...settings}>
      <div className="container" >
        <div onClick={() => handleClientClick("client1")}  onMouseEnter={() => handleMouseEnter("client1")} onMouseLeave={() => handleMouseLeave("client1")}>
        {hoverStates["client1"] ? <LegoColor className="svg-hovered" /> : <Lego className={!hoverStates["client1"] ? "not-hovered" : ""} />} 
        </div>

      {/* <LegoColor/>  */}
        
      </div>
      <div className="container">
        <div className="fiverr" onClick={() => handleClientClick("client2")} onMouseEnter={() => handleMouseEnter("client2")} onMouseLeave={() => handleMouseLeave("client2")}>
        {hoverStates["client2"] ? <FiverrGreen className="svg-hovered"/> : <Fverr/>}
          <div>

          </div>

        </div>
      </div>
      <div className="container" onClick={() => handleClientClick("client3")} >
        <div onMouseEnter={() => handleMouseEnter("client3")} onMouseLeave={() => handleMouseLeave("client3")}>

        {hoverStates["client3"] ? <BullProof className="svg-hovered"/> : <BullProofWhite/>}
        </div>
      </div>
      <div className="container">
        <div  onClick={() => handleClientClick("client5")}  onMouseEnter={() => handleMouseEnter("client5")} onMouseLeave={() => handleMouseLeave("client5")}>

        <DilaraBlack className="svg-hovered" color={hoverStates["client5"] ?  "#C3C3C3" :"#FDFDFD"}/>
        </div>
      </div>
      <div className="container" >
        <div  onClick={() => handleClientClick("client6")} onMouseEnter={() => handleMouseEnter("client6")} onMouseLeave={() => handleMouseLeave("client6")}>
        {hoverStates["client6"] ? <Borjan className="svg-hovered"/> : <BorjanBlack/>}

        </div>
      </div>
      <div className="container" >
        <div onClick={() => handleClientClick("client7")} onMouseEnter={() => handleMouseEnter("client7")} onMouseLeave={() => handleMouseLeave("client7")}>
  <AleemBeauty className="svg-hovered" color={hoverStates["client7"] ?  "st1-aleem" :"st1-aleem-hovered"}/> 

        </div>
      </div>
      <div className="container" >
        <div onClick={() => handleClientClick("client8")} onMouseEnter={() => handleMouseEnter("client8")} onMouseLeave={() => handleMouseLeave("client8")}>
  <Avon className="svg-hovered" color={hoverStates["client8"] ?   "st1-aleem" :"st1-aleem-hovered"} /> 

        </div>
      </div>
      <div className="container" >
        <div onClick={() => handleClientClick("client9")} onMouseEnter={() => handleMouseEnter("client9")} onMouseLeave={() => handleMouseLeave("client9")}>

  <Crossfit className="svg-hovered" color={hoverStates["client9"] ?   "st1-aleem" :"st1-aleem-hovered"} /> 
        </div>
      </div>
      <div className="container" >
        <div onClick={() => handleClientClick("client10")} onMouseEnter={() => handleMouseEnter("client10")} onMouseLeave={() => handleMouseLeave("client10")}>

  <Rivaj className="svg-hovered"   color={hoverStates["client10"] ?   "st1-aleem" :"st1-aleem-hovered"}/> 
        </div>
      </div>
    </Slider>
  </div>
  );
};

export default BrandSection;
