import React from 'react'

const Facebook = ({getFooterColor}) => {
  const color=getFooterColor === "#FFFFFF" ? "#ffffff" : "#141613"
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="15" viewBox="0 0 7 15" fill="none">
  <g clip-path="url(#clip0_420_262)">
    <path d="M1.59008 14.7343H4.6423V7.30208H6.77459L7 4.81677H4.6423V3.40251C4.6423 2.81669 4.76414 2.58591 5.349 2.58591H7V0H4.88599C2.61358 0 1.59008 0.970455 1.59008 2.83444V4.81677H0V7.33758H1.59008V14.7343Z" fill={color}/>
  </g>
  <defs>
    <clipPath id="clip0_420_262">
      <rect width="7" height="14.7343" fill={color}/>
    </clipPath>
  </defs>
</svg>
  )
}

export default Facebook
