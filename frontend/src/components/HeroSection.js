import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">CW Aerial Solutions
        </h1>
        <p className="hero-subtitle">
          Beautiful, Elegantly Coded, One-Page Theme for Your Business
        </p>
        {/* Link the button to the "/explained" route */}
        <Link to="explained">
          <button className="hero-button">Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
