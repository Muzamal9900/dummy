import React, { useState, useEffect } from "react";
import "./index.css";
import LogoImage from "../../assets/svg/LogoImage";
import Typography from "@mui/material/Typography";
import NavBarIcon from "../../assets/svg/NavBarIcon";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ color, type,iconColor }) => {
  const [isActive, setIsActive] = useState(false);
  const [isColor, setIsColor] = useState(color);
  const [activeMenuItem, setActiveMenuItem] = useState("");


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 2) { // Adjust this value based on when you want to activate the styling
        if(type==="banner" || type==="case-study" ){
          setIsActive(true);
          setIsColor("#ffffff")
        }else {
          setIsActive(false);
          setIsColor(color)
        }
   
      } else {
        setIsActive(false);
  
        setIsColor(color)
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navigate = useNavigate();
  const handleNavigation = (page, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    event.stopPropagation(); // Stop event from propagating to parent elements
    setActiveMenuItem(page); // Set the active menu item
    navigate(`/${page}`);
  };
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const handleToggleNavBar = (event) => {
    event.stopPropagation(); // Consider adding this if you want to prevent event propagation here as well
    setToggleNavBar(!toggleNavBar);
  };

  const svgColor = type === "ContactUS" ? '#FFFFFF' :type === "banner" ? "#FFFFFF" : "#000000";
  const backgroundColor = color === '#FFFFFF' && type === "ContactUS" ? '#0F0F0F' : color === '#FFFFFF' && type === "banner" ? "" : 'white';

  return (
    <div className={`${isActive ? "navBarScrollActive" : ""}`}>
  <div className={`navBar ${toggleNavBar ? "active" : ""}`} style={{ backgroundColor: isActive ? "#000000" : backgroundColor }}
 onClick={handleToggleNavBar}>
      <div className="navBar-logo" onClick={(e) => handleNavigation('', e)}>
        <LogoImage color={isColor} />
      </div>
      <nav className="navHeader" 
>
        <ul className="navBar-item">
          {/* Updated onClick handlers to include event parameter */}
          <li  >
            <Typography variant="subtitle1" fontSize={ "18px"} color={isActive ? "#fff" : color} fontWeight={400} onClick={(e) => handleNavigation('', e)}>Home</Typography>
          </li>
          <li >
            <Typography variant="subtitle1" fontSize={"18px"} color={isActive ? "#fff" : color} fontWeight={400} onClick={(e) => handleNavigation('portfolio-page', e)}>Projects</Typography>
          </li>
          <li >
            <Typography variant="subtitle1"  fontSize={ "18px"}color={isActive ? "#fff" : color} fontWeight={400} onClick={(e) => handleNavigation('faq-section', e)}>FAQ</Typography>
          </li>
          <li>
            <Typography variant="subtitle1"  fontSize={"18px"}color={isActive ? "#fff" : color} fontWeight={400}  onClick={(e) => handleNavigation('contact-us', e)}>Contact Us</Typography>
          </li>
        </ul>
      </nav>
      <div className="mobile-icon" >
        {toggleNavBar ? <CloseIcon style={{color:isColor}} /> : <NavBarIcon color={isActive&& type==="case-study" ? "#FFFFFF" : svgColor}  />}
      </div>
    </div>
    </div>
  
  );
};

export default NavBar;
