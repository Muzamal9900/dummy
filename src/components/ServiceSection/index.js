import React, { useState ,useEffect } from "react";
import "./index.css";
import Button from "../Button";
import { Typography } from "@mui/material";
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const ServiceSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelector('.service-section').classList.add('visible');
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.3 // Adjust this value based on when you want the animation to start
    });

    const section = document.getElementById('animatedSection');
    if (section) {
      observer.observe(section);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
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
  const brandPackagingServicesDescription = (
    <div className="gap">
    
    <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
       
At Designify Services, we have a strategy for your upcoming success. Whether  you are  a new business or a well growing company, our strategic process reveals the hidden  potential of your business or brand.
      </Typography>
      {/* <Typography fontSize={"20px"} fontWeight={700} color={"#fff"}>
          identity establishment:
        </Typography> */}
      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
       
       <strong>identity establishment:</strong> We work closely with you to determine your company’s vision, mission,
        and core values to develop a unique and modern brand identity for your
        brand. From creating a brand logo to defining your brand identity, we
        make sure that it aligns with your brand goals.
      </Typography>
     
      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
        <strong>
        Brand Guidelines:
          </strong>Our team designs complete and comprehensive brand guidelines files which
        include brand colors, typography, patterns, business card, letterhead,
        social media template, icons, packaging layout of the brand which shows
        how to use your brand elements across all platforms.
      </Typography>
    </div>
  );
  const modelingPackagingServicesDescription = (
    <div className="gap">
    
      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
        <strong>
        Concept art:
          </strong>share your product idea with us and see our magic incorporating in the
        concept art of the 3d model , whether it is for a car model, product
        model or a house structure, our concept artist are there to bring the
        game up.
      </Typography>


      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
      <strong>Texture rendering:</strong> Our texture team specialised in state of the art 3d software to bring
        your product into life by developing realistic textures and skins for
        your next digital artwork.
      </Typography>

     
      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
      <strong> 3D Rendering and Product Modelling:</strong>  we have experts of 3d artwork which develop 3d renders for your
        packaging designs for realistic visualizations allowing you to review
        and refine them before going into production phase
      </Typography>
    </div>
  );
  const uiuxServicesDescription = (
    <div className="gap">
   

  
      
      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
       <strong> App Design:</strong>  In the realm where innovation meets intuition, our app design services redefine digital experiences. We go beyond pixels, crafting interfaces that not only captivate but also function flawlessly.
      </Typography>
   
      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
       <strong> Website Design:</strong>  Digital doorways to your brand, our website design services merge aesthetics with functionality. We believe in creating more than just websites; we create immersive online experiences. Navigating beyond clicks, our designs are intuitive, user-friendly, and tailored to reflect the unique identity of your brand.
      </Typography>

      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}> 
        <strong>Digital branding:</strong>Crafting identities and building legacies, our digital branding expertise goes beyond the superficial. We understand the essence of your brand and strategically mold it into a digital narrative that resonates.
      </Typography>
      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}> 
        <strong>User stories:</strong> Beyond code and pixels, our user stories drive the heart of user-centric design. We believe in crafting experiences that resonate with real people. Through empathetic narratives, we uncover the needs, motivations, and challenges of your users, shaping a design that goes beyond aesthetics to deliver meaningful solutions. 
      </Typography>
    </div>
  );
  const productPackagingServicesDescription = (
    <div className="gap">
    

    
      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
        <strong> Material identification:</strong>We suggest you the most suitable and cost effective material for your
        next big product to ensure the quality, durability and eco-friendliness
        of your product.
      </Typography>

      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
      <strong>
      Market Research:
        </strong>  Our team conduct your competitors brand appearance research and consumer
        trends to make the favourite product packaging for your product.
      </Typography>
      
      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
       <strong> 3D Rendering and Product Modelling:</strong> we have experts of 3d artwork which develop 3d renders for your
        packaging designs for realistic visualizations allowing you to review
        and refine them before going into production phase
      </Typography>
   
      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}>
       <strong> Print ready delivery:</strong> we provide print ready files for production phase for hassle-free
        printing.
      </Typography>

      <Typography fontSize={"20px"} fontWeight={500} color={"#fff"} lineHeight={1.2}> 
        <strong>Creative Writing :</strong>the best text always be short and concise and based on our market
        research, we provide FDA compliance content for your product so you dont
        have to worry about the text for the packaging. We proof read and edit
        text once it apply to design to ensure error-free content
      </Typography>
    </div>
  );
  const services = [
    {
      id: 1,
      name: "Branding",
      component: brandPackagingServicesDescription,
    },
    {
      id: 2,
      name: "Product Packaging",
      component: productPackagingServicesDescription,
    },
    {
      id: 3,
      name: "3D Modeling",
      component: modelingPackagingServicesDescription,
    },
    {
      id: 4,
      name: "UI/UX",
      description: "UI/UX description...",
      component: uiuxServicesDescription,
    },
  ];
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showAfterDiv, setShowAfterDiv] = useState(false);

  const changeService = (service) => {
    if (service.id !== selectedService.id) {
      setIsTransitioning(true);
      setSelectedService(service);
  
    }
  };
  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100); // This timeout should be the same as the CSS transition
    }
  }, [isTransitioning]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTransitioning('');
    }, 100); // This should be longer than the CSS transition time
    return () => clearTimeout(timeoutId);
  }, [selectedService]);
  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100); // This timeout should be the same as the CSS transition
    }
  }, [isTransitioning]);
  return (
    <div >
        <div className="service-section-wrapper" id="animatedSection">
<div className="service-section" ref={ref}>
      <div className={`service-section-parent ${ 'animateInView' }`}>
        <div className="service-section-parent-text">
          <Typography
            variant="h2"
            fontStyle={"italic"}
            fontWeight={400}
            color={"#fff"}
          >
            Our services
          </Typography>
          <div className="service-section-parent-text-heading">
          <Typography fontSize={"60px"} fontWeight={700} color={"#fff"} lineHeight={1.3}>
            We create a genuine feeling that last
          </Typography>
          </div>
          
        </div>
        <div className="service-section-parent-button">
          <Button text={"Contact Us"} type={"white"}  onClick={(e) => handleNavigation('contact-us', e)}/>
        </div>
      </div>
      <div className="service-section-detail">
        <ul className={`services-list ${ 'animateInView' }`}>
          {services?.map((service) => (
            <li
              key={service.id}
              className={`service-item ${
                selectedService.id === service.id ? "activeItem" : ""
              }`}
              onClick={() => changeService(service)}
            >
              <div className="mobile-row">
              <Typography
                variant="h3"
                fontWeight={500}
                fontStyle={"italic"}
                sx={{ paddingTop: "52px", paddingBottom: "52px" }}
              >
                0{service.id}
              </Typography>
              <Typography
                variant="h1"
                fontWeight={500}
                lineHeight={1.6}
                sx={{ paddingTop: "40px", paddingBottom: "56px" }}
              >
                {service.name}
              </Typography>
              </div>
           
              {
              selectedService.id === service.id &&     <div
              className={`branding-services-mobile ${
                isTransitioning ? "branding-services-exit" : 'animateInView' 
              }`}
            >
              {isTransitioning ? null : selectedService.component}
            </div>
                   }
            </li>
          ))}
          
        </ul>
        <div
          className={`branding-services ${
            isTransitioning ? "branding-services-exit" : 'animateInView' 
          }`}
        >
          {isTransitioning ? null : selectedService.component}
        </div>
      </div>
    </div>
    </div>
    
    </div>

  );
};
export default ServiceSection;
