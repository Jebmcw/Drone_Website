import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content" data-aos="fade-down">
        <h1 className="hero-title">CW Aerial Solutions</h1>
        <p className="hero-subtitle" data-aos="fade-up">
          Beautiful, Elegantly Coded, One-Page Theme for Your Business
        </p>
        <Link to="/explained">
          <button className="hero-button" data-aos="zoom-in">Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
