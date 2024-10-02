import React from 'react'
import {  Typography } from '@mui/material';
import "./index.css"
import MinusIcon from '../../assets/svg/minusIcon';
import PlusIcon from '../../assets/svg/plusIcon';
const QusSection = ({text,onClick,isOpen}) => {
  return (
    <div className='qus-section' onClick={onClick}>
       {isOpen ? <MinusIcon/> : <PlusIcon />}

       <Typography fontSize={"20px"} fontWeight={700} color={"#000"}>
        {text}
        </Typography>
    </div>
  )
}

export default QusSection
