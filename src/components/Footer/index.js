  import React from 'react'
  import "./index.css"
  import { Typography } from '@mui/material'
  import Facebook from '../../assets/svg/Facebook'
  import Dibble from '../../assets/svg/Dibble'
  import Behance from '../../assets/svg/Behance'
  import InstagramIcon from '../../assets/svg/InstagramIcon'
  import { useTheme } from '@mui/material/styles';
  import useMediaQuery from '@mui/material/useMediaQuery';

  const Footer = ({getFooterColor}) => {
    const emailAddress = "bookacall@designifyservices.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 'sm' is typically 600px
const marginBottom=isMobile ? "10px" : "14px"
const marginMain=isMobile ? "20px" : "33px"
const marginHead=isMobile ? "4px" : "6px"

    const backgroundColor = getFooterColor === '#FFFFFF' ? '#000' : '#FBFBFB';
    const handleIconClick = (url) => {
      window.open(url, '_blank');
    };
  
    return (
      <div className='Footer-Section-wrapper' style={{ backgroundColor }}>
    <div className='Footer-Section' >
        <div className='Footer-Section-first'>
  <Typography fontSize={"18px"} fontWeight={500} color={"#0F0F0F"} mb={marginBottom}>
  Head Quarter
  </Typography>
  <Typography fontSize={"18px"} fontWeight={500} color={getFooterColor} mb={marginHead}>
  United States
  </Typography>
  <Typography fontSize={"18px"} fontWeight={500} color={getFooterColor} mb={marginMain}>
  45714 Oakbrook Ct Unit 170, Sterling, VA 20166
  </Typography>
  <Typography fontSize={"18px"} fontWeight={500} color={"#0F0F0F"} mb={marginBottom}>
  Start a conversation
  </Typography>
  <Typography fontSize={"18px"} fontWeight={500} color={getFooterColor} onClick={handleEmailClick}>
  bookacall@designifyservices.com
  </Typography>
        </div>
        <div className='Footer-Section-first'>
  <Typography fontSize={"18px"} fontWeight={500} color={"#0F0F0F"} mb={marginBottom}>
  Office
  </Typography>
  <Typography fontSize={"18px"} fontWeight={500} color={getFooterColor} mb={marginHead}>
  Dubai
  </Typography>
  <Typography fontSize={"18px"} fontWeight={500} color={getFooterColor} mb={marginMain}>
  506, Tulip Way. Green Community Motor City
  </Typography>
  <Typography fontSize={"18px"} fontWeight={500} color={getFooterColor} mb={marginBottom}>
  Pakistan
  </Typography>
  <Typography fontSize={"18px"} fontWeight={500} color={getFooterColor}>
  J Heights, Block C, Nawab Town, Lahore
  </Typography>
        </div>
        <div className='Footer-Section-third'>
        <Typography fontSize={"18px"} fontWeight={500} color={getFooterColor} >
        © 2023 P2H Inc, All rights reserved.</Typography>
        </div>
        <div className='Footer-Section-last'>
        {/* Instagram */}
        <div className='flex-row-insta' onClick={() => handleIconClick('https://www.instagram.com/designifyservices/')}>
          <Typography fontSize={"18px"} color={getFooterColor} fontWeight={400}>
          <div className="icon-container">
          <InstagramIcon getFooterColor={getFooterColor}/>
</div>
          
            Instagram
          </Typography>
        </div>
        {/* Facebook */}
        <div className='flex-row-fb' onClick={() => handleIconClick('https://www.facebook.com/designifyservices')}>
          <Facebook getFooterColor={getFooterColor}/>
          <Typography fontSize={"18px"} color={getFooterColor} fontWeight={400}>
            Facebook
          </Typography>
        </div>
        {/* Dribble - Assuming typo in original Dibble, should be Dribble */}
        <div className='flex-row-dip' onClick={() => handleIconClick('https://dribbble.com/designifyservices')}>
         
          <Typography fontSize={"18px"} color={getFooterColor} fontWeight={400}>
          <Dibble getFooterColor={getFooterColor}/>
            Dribble
          </Typography>
        </div>
        {/* Behance */}
        <div className='flex-row-beh' onClick={() => handleIconClick('https://www.behance.net/designiservice1')}>
          
          <Typography fontSize={"18px"} color={getFooterColor} fontWeight={400}>
          <Behance getFooterColor={getFooterColor}/>
            Behance
          </Typography>
        </div>
      </div>
        <div className='Footer-Section-third-mobile'>
        <Typography fontSize={"18px"} fontWeight={500} color={getFooterColor} >
        © 2023 P2H Inc, All rights reserved.</Typography>
        </div>
      </div>
      </div>
  
    )
  }

  export default Footer
