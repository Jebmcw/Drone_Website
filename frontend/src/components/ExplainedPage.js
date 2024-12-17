import React from 'react';
import './ExplainedPage.css';

const ExplainedPage = () => {
  return (
    <div className="explained-container">
      <h1 className="explained-title">Choose Your Drone Photo Plan</h1>
      <div className="plans-container">
        {/* Low Price Plan */}
        <div className="plan-box">
          <img
            src="https://via.placeholder.com/300x200" 
            alt="Low Plan"
            className="plan-image"
          />
          <h2 className="plan-title">Low Price Plan</h2>
          <p className="plan-description">
            Basic aerial photos, perfect for small projects.
          </p>
          <p className="plan-price">$99</p>
          <button className="plan-button">See More</button>
        </div>

        {/* Mid Price Plan */}
        <div className="plan-box">
          <img
            src="https://via.placeholder.com/300x200" 
            alt="Mid Plan"
            className="plan-image"
          />
          <h2 className="plan-title">Mid Price Plan</h2>
          <p className="plan-description">
            Standard aerial photos with higher quality and editing.
          </p>
          <p className="plan-price">$299</p>
          <button className="plan-button">See More</button>
        </div>

        {/* High Price Plan */}
        <div className="plan-box">
          <img
            src="https://via.placeholder.com/300x200" 
            alt="High Plan"
            className="plan-image"
          />
          <h2 className="plan-title">High Price Plan</h2>
          <p className="plan-description">
            Premium aerial photos and videos with professional editing.
          </p>
          <p className="plan-price">$599</p>
          <button className="plan-button">See More</button>
        </div>
      </div>
    </div>
  );
};

export default ExplainedPage;

