import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import CaseStudy from './pages/CaseStudy';
import FaqSection from './components/FaqSection';
import PortfolioPages from './pages/PortfolioPages';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import ScrollToTop from './components/scroll';
import ProjectShow from './pages/ProjectShow';
import ProjectItem from './pages/ProjectItem';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black
    },
    secondary: {
      main: '#ffffff', // White
    },
  },
  typography: {
    fontFamily:"Plus Jakarta Sans",
    // You can customize the typography here
    h1: {
      fontSize: 32, 
    },
    h2: {
      fontSize: 28, 
  
    },
    h3: {
      fontSize: 24,  
    
    },
    h4: {
      fontSize: 20,
  
    },
    h5: {
      fontSize: 14,
  
    },
    subtitle1: {
      fontSize: 18,
      color: '#ffffff', // White for secondary text
    },
    // Add other custom typography as needed
  },
});

function App() {

  const currentPage = "/home";
  const getFooterColor = () => {
    if (currentPage.includes('/case-study')) {
      return '#FFFFFF'; 
    }
    return '#818080';
  };
  function Inner() {
    const { pathname, hash, key } = useLocation();
    //function using pathname hash and key
  
    return(
      pathname !== "/project-show" && <Footer getFooterColor={getFooterColor()}/>  

    )
  }
  return (
    <ThemeProvider theme={theme}>
          <Router>
       <ScrollToTop /> 
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="portfolio-page" element={<PortfolioPages />} />
          <Route path="faq-section" element={<FaqSection />} />
          <Route path="project-show" element={<ProjectShow />} />
          <Route path="Project-item" element={<ProjectItem />} />

        </Routes>
        <Inner/>
        </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
