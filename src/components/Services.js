import React from 'react';
import './Services.css';

// Images for the services (replace with actual image paths in your assets folder)
import diagnoseImage from './diagnose.jpg';
import mentalHealthImage from './mental_health.jpg';
import appointmentImage from './appointment.jpg';
import recordsImage from './records.jpg';


function Services() {
  return (
    <section className="services">
      <h1>Our Services</h1>
      <div className="services-list">
        <div className="service-item">
          <img src={diagnoseImage} alt="AI Disease Diagnosis" />
          <h2>Disease Diagnosis</h2>
          <p>Our AI analyzes symptoms and medical data to provide a preliminary diagnosis, helping patients understand their conditions early.</p>
          <a href="/diagnosis" className="learn-more">Learn More</a>
        </div>

        <div className="service-item">
          <img src={mentalHealthImage} alt="Mental Health Support" />
          <h2>Mental Health Support</h2>
          <p>Through our NLP chatbot, users receive emotional support and advice tailored to their mental health status, ensuring timely care.</p>
          <a href="/mental-health" className="learn-more">Learn More</a>
        </div>

        <div className="service-item">
          <img src={appointmentImage} alt="Appointment Booking" />
          <h2>Appointment Booking</h2>
          <p>Schedule your doctor appointments easily using our platform's integrated booking system, with reminders for important follow-ups.</p>
          <a href="/appointments" className="learn-more">Learn More</a>
        </div>

        <div className="service-item">
          <img src={recordsImage} alt="Access Medical Records" />
          <h2>Access Medical Records</h2>
          <p>Patients can securely access and manage their medical records online, ensuring up-to-date information is always available to them and their doctors.</p>
          <a href="/records" className="learn-more">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Services;
