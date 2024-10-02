import React from 'react'
import DropDownArrow from '../../assets/svg/dropDownArrow'
import {  Typography } from '@mui/material';
import "./index.css"
import DownArrow from '../../assets/svg/downArrow';
const QuestionCard = ({text,onClick,isOpen}) => {

  return (
    <div className='question-card' onClick={onClick}>
        <Typography fontSize={"20px"} fontWeight={700} color={"#000"}>
        {text}
        </Typography>
       {isOpen ? <DownArrow/> : <DropDownArrow />}
        </div>
  )
}

export default QuestionCard