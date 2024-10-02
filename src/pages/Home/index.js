import React,{useEffect, useState} from 'react'
import Banner from "../../components/Banner"
import ProjectSection from '../../components/ProjectsSection'
import AboutUsSection from '../../components/AboutUsSection'
import ServiceSection from '../../components/ServiceSection'
import PerformanceSection from '../../components/PerformanceSection'
import ClientSection from '../../components/ClientSection'
import ContactUsSection from '../../components/ContactUsSection'
import Footer from '../../components/Footer'
import BrandSection from '../../components/BrandSection'

const Home = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null, error: null });
  console.log("location",location)
useEffect(()=>{
  getLocation()
},[])
  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation({ ...location, error: 'Geolocation is not supported by your browser.' });
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        ...location,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      });
    }, () => {
      setLocation({ ...location, error: 'Unable to retrieve your location.' });
    });
  };
  return (
    <>
      <Banner />
      <ProjectSection />
      <AboutUsSection />
      <ServiceSection />
      <PerformanceSection/>
      <ClientSection />
      <ContactUsSection  location={location} />
      </>
  )
}

export default Home
