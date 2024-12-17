import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">What we stand for</h2>
      <div className="features-container">
        <div className="feature">
          <div className="feature-icon" style={{ color: '#ff0066' }}>■</div>
          <h3>Responsive</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nunc eu lacus vulputate.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon" style={{ color: '#00bfff' }}>■</div>
          <h3>Quality</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nunc eu lacus vulputate.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon" style={{ color: '#33cc33' }}>■</div>
          <h3>Support</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nunc eu lacus vulputate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;