import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Title Section */}
      <h1 className="about-title">About Us</h1>

      {/* About Us Description */}
      <p className="about-text">
        At <strong>CW Aerial Solutions</strong>, we specialize in capturing breathtaking drone footage and stunning aerial photographs that bring your business to life. Whether you're showcasing real estate properties, documenting events, or elevating your marketing strategy, our team combines state-of-the-art technology with creative expertise to deliver unparalleled results.
      </p>
      <p className="about-text">
        We’re passionate about storytelling through the lens of a drone. Our high-resolution imagery and cinematic videos are tailored to meet your unique needs, giving you a perspective that wows your audience and sets your brand apart. Let us help you reach new heights—literally.
      </p>
    </div>
  );
};

export default AboutPage;
