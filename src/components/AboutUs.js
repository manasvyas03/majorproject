// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Ensure the CSS file is linked
import aboutImage from '../Assets/about.jpg'; // Correct path to the image

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          AI Health Nexus is dedicated to integrating mental and physical health services into one cohesive platform. Our mission is to provide comprehensive, accessible, and high-quality healthcare solutions that cater to both mental and physical well-being.
        </p>
        <p>
          Our team consists of experienced healthcare professionals, data scientists, and technologists who are passionate about improving healthcare delivery through advanced AI and technology.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
