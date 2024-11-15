import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import DoctorsList from './components/DoctorsList';
import MedicalAssistant from './components/virtualchatbot';
import MentalAssistant from './components/mentalchatbot';
import MedicalFileUpload from './components/MedicalFileUpload';
import './App.css';

// Import images for the carousel
import image1 from './Assets/Background.jpg';
import image2 from './Assets/appointment.jpg';
import image3 from './Assets/5815.jpg';



const App = () => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);  // Change image every 5 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <header id="home">
                <div className="carousel-container">
                  <img 
                    src={images[currentImageIndex]} 
                    alt="carousel" 
                    className="carousel-image animate" 
                  />
                  <div className="hero-text">
                    <h1>Welcome to AI Health Nexus</h1>
                    <p>Integrating Mental and Physical Health for Your Well-being</p>
                  </div>
                </div>
              </header>
              <AboutUs />
              <Services />
              <Contact />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointments" element={<DoctorsList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/diagnosis" element={<MedicalAssistant/>} />
          <Route path="/mental-health" element={<MentalAssistant/>} />
          <Route path="/records" element={<MedicalFileUpload/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
