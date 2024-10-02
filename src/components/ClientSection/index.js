import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import { Typography } from "@mui/material";
import clientArrowRight from "../../assets/images/rigtharrow.png";
import clientArrowLeft from "../../assets/images/leftarrow.png";
import videoSrc1 from "../../assets/images/client1.mp4";
import videoSrc2 from "../../assets/video/client2.mp4";
import videoSrc3 from "../../assets/video/client3.mp4";
import videoSrc4 from "../../assets/video/client4.mp4";

const testimonials = [
  {
    text: "Hey guys, I want to share my experience with Designify. It was a pleasure working with them. They come up with a creative concept for us, the delivery of the product was really fast. I was really amazed with the design. I would definitely recommend their services 100%.",
    name: "Vinacas",
    title: "Ceo at Vessence",
    video: videoSrc1,
  },
  {
    text: "Just got the services from designify. the timeline were amazing. they really cared about the customer and i really appreciate them. I honestly would give them 5 star review. Overall 100% great experience. shout out to everybody in the team. they did product service for me and honestly they killed it !",
    name: "Victor",
    title: "Youtuber (VicInTheGame)",
    video: videoSrc2,
  },
  {
    text: "Designify helps me create custom packaging and branding for my product. we had a few iteration. they are extremely detailed oriented, creative and easy to work with. I can't recommend them enough. I am going to continue to work with them for future products and for social media management and content creation. I love the work these guys do.",
    name: "Bruce",  
    title: "CEO of Beerisen",
    video: videoSrc3,
  },
  {
    text: "They did some great design for us, they design logo, products and photos for our cyber security company. this time they design our cyber security game. they created really beautiful designs. Go do business with these guys, they do great job for really good price. don't doubt, just do it.",
    name: "Stan",
    title: "dailyday Security",
    video: videoSrc4,
  },
];

const ClientSection = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
    }
  }, [testimonialIndex]);

  const togglePlay = () => {
    const video = videoRef.current;
    const playButton = playButtonRef.current;
    if (video && video.paused) {
      video.play();
      playButton.style.display = 'none'; // Hide play button when video is playing
    } else if (video) {
      video.pause();
      playButton.style.display = 'block'; // Show play button when video is paused
    }
  };

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    } else {
      setTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const { text, name, title, video } = testimonials[testimonialIndex];

  return (
    <div className="client-wrapper">
      <div className="ClientSection">
        <div className="ClientSection-text">
          <Typography color="#FFF" fontSize="60px" fontWeight="700">
            Our happy clients
          </Typography>
        </div>
        <div className="ClientSection-details">
          <div className="ClientSection-details-text">
            <Typography fontSize="28px" fontWeight={400} color="#B5B5B5">
              {text}
            </Typography>
            <div className="ClientSection-details-name">
              <Typography fontSize="24px" fontWeight={600} color="#FFFFFF">
                {name}
              </Typography>
              <Typography fontSize="24px" fontWeight={600} color="#B7B4B4">
                {title}
              </Typography>
            </div>
            <div className="arrow-parent">
              <div className="ClientSection-details-arrow" onClick={() => handleArrowClick('left')}>
                <img src={clientArrowLeft} alt="client arrow" />
              </div>
              <div className="ClientSection-details-arrow" onClick={() => handleArrowClick('right')}>
                <img src={clientArrowRight} alt="client arrow" />
              </div>
            </div>
          </div>
          <div className="parent-video">
            <video className="ClientSection-details-Video"  loopq onClick={togglePlay} ref={videoRef}>
              <source src={video} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <div className="ClientSection-details-PlayButton" ref={playButtonRef} onClick={togglePlay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
