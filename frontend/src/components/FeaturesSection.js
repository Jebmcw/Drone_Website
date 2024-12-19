import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import React, { useEffect } from "react";
import { FaCheckCircle, FaHeadset, FaMobileAlt } from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="features-section">
      <h2 className="features-title" data-aos="fade-up">What we stand for</h2>
      <div className="features-container">
        <div className="feature" data-aos="zoom-in">
          <FaMobileAlt className="feature-icon" style={{ color: "#ff0066" }} />
          <h3>Responsive</h3>
          <p>
            Our websites are fully responsive, adapting seamlessly to all
            devices.
          </p>
        </div>
        <div className="feature" data-aos="zoom-in" data-aos-delay="200">
          <FaCheckCircle className="feature-icon" style={{ color: "#00bfff" }} />
          <h3>Quality</h3>
          <p>
            We ensure top-notch quality in design and code, making your
            business shine.
          </p>
        </div>
        <div className="feature" data-aos="zoom-in" data-aos-delay="400">
          <FaHeadset className="feature-icon" style={{ color: "#33cc33" }} />
          <h3>Support</h3>
          <p>
            Our support team is available 24/7 to assist with any queries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

