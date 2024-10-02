import React from 'react'

const NavBarIcon = ({color}) => {
  return (
    <svg width="48" height="18" viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="21" width="27" height="2" fill={color}/>
    <rect y="8" width="48" height="2" fill={color}/>
    <rect y="16" width="48" height="2" fill={color}/>
    </svg>
    
  )
}

export default NavBarIcon
