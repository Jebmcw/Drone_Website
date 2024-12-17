import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Drone Media</div>
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
          <li><Link to="/work" className="nav-link">Our Work</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
