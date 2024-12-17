import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">
        Have a project in mind? Contact us to get a custom price quote. We're here to help!
      </p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Tell us about your project..." rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Or Reach Out Directly</h3>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
