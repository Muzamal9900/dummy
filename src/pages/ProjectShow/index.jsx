import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import "./index.css";
import { useLocation } from 'react-router-dom';

const data = [
  require("../../assets/caseStudy/HappySips/01.png"),
  require("../../assets/caseStudy/HappySips/02.png"),
  require("../../assets/caseStudy/HappySips/03.png"),
  require("../../assets/caseStudy/HappySips/04.png"),
  require("../../assets/caseStudy/HappySips/05.png"),
  require("../../assets/caseStudy/HappySips/06.png"),
  require("../../assets/caseStudy/HappySips/07.png"),
  require("../../assets/caseStudy/HappySips/08.png"),
  require("../../assets/caseStudy/HappySips/09.png"),
  require("../../assets/caseStudy/HappySips/10.png"),
];

const ProjectShow = () => {
  let location = useLocation();
const dataState=location.state.myArray
  const [currentIndex, setCurrentIndex] = useState(0);
console.log("location",dataState)
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const currentPage = Math.round(window.scrollY / windowHeight);
    setCurrentIndex(currentPage % dataState.length);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    window.scrollTo({ top: window.innerHeight * index, behavior: 'smooth' });
  };

  return (
    <>
     <NavBar color={"#000000"} type={"case-study"} />
     <div className='project-show'>
     
     <div className='main-and-thumbnails'>
     <div className='images-show' style={{ height: `${dataState.length * 100}vh` }}>
      
  {dataState?.map((src, index) => (
    <img
      key={index} // Consider using a more dynamic key if images can change
      src={dataState[currentIndex]}
      alt="Project Image"
      loading={"lazy"}
      style={{
        display: currentIndex === index ? 'block' : 'none', // Only display the current image
        position: 'fixed',
        top: 92,
        left: 0,
        width: 'calc(100% - 120px)',
        height: '100%',
        objectFit: 'contain',
      }}
    />
  ))}
</div>

<div className='thumbnails' style={{ position: 'fixed', right: 0, top: 92, height: '100%', overflowY: 'scroll' }}>
  {dataState.map((src, index) => (
    <img key={index} src={src} alt={`Thumbnail ${index + 1}`} loading={"lazy"} className={currentIndex === index ? 'active-thumbnail' : ''} style={{ width: '100px', margin: '10px', cursor: 'pointer' }} onClick={() => handleThumbnailClick(index)} />
  ))}
</div>

     </div>
   </div>
    </>
   
  );
};

export default ProjectShow;
