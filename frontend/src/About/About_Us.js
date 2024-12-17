import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Title with Animation */}
      <h1 className="about-title">About Us</h1>

      {/* About Us Text */}
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis 
        sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      </p>
    </div>
  );
};

export default AboutPage;
