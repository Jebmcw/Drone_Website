import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  // State to track character counts
  const [nameCount, setNameCount] = useState(0);
  const [emailCount, setEmailCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  return (
    <section className="contact-container">
      {/* Section Title and Description */}
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Send us a message, and we'll get back to you as soon as possible.
      </p>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <h4>Address</h4>
            <p>146 Yuma Street<br />Denver CO, 80223</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <h4>Phone</h4>
            <p>303.428.2011<br />24/7 Emergency: Press 2</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <h4>Email</h4>
            <p>
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                maxLength="50"
                onChange={(e) => setNameCount(e.target.value.length)} /* Update state */
              />
              <small className="char-count">{nameCount}/50</small>
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                maxLength="100"
                onChange={(e) => setEmailCount(e.target.value.length)} /* Update state */
              />
              <small className="char-count">{emailCount}/100</small>
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">Comments</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                maxLength="500"
                onChange={(e) => setMessageCount(e.target.value.length)} /* Update state */
              ></textarea>
              <small className="char-count">{messageCount}/500</small>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

