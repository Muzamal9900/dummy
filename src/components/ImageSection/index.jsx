import React from 'react'
import { Parallax } from 'react-parallax';

const ImageSection = ({text,image}) => {
  return (
    <Parallax className='image' blur={0} bgImage={image} strength={800} bgImageStyle={{minHeight:"100vh"}}>
    <div className='content'>
        <span className="img-txt">{text}</span>
    </div>
</Parallax> 
  )
}

export default ImageSection
