import { Typography } from "@mui/material";
import React from "react";
import "./index.css"
const Button = ({ text,type ,onClick}) => {
  const className =
  type === "white" ? "button-components-contactUs" :  type === "selected" ? "button-selected" :"button-components";
  
  return (
    <button className={className} onClick={onClick}>
    
      <Typography color="inherit" fontSize={"16px"} fontWeight={500}>
  {text}
</Typography>
  
    </button>
  );
};

export default Button;
