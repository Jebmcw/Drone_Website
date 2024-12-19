import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // State for character counts
  const [nameCount, setNameCount] = useState(0);
  const [emailCount, setEmailCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  // State for form submission status
  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }), // Send the form data
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setNameCount(0);
        setEmailCount(0);
        setMessageCount(0);
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

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
            <p>
              146 Yuma Street
              <br />
              Denver CO, 80223
            </p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <h4>Phone</h4>
            <p>
              303.428.2011
              <br />
              24/7 Emergency: Press 2
            </p>
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
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                maxLength="50"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameCount(e.target.value.length);
                }}
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailCount(e.target.value.length);
                }}
              />
              <small className="char-count">{emailCount}/100</small>
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">Comments</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                maxLength="500"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setMessageCount(e.target.value.length);
                }}
              ></textarea>
              <small className="char-count">{messageCount}/500</small>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;


