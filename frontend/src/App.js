import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import About_US from './About us/About_Us';
function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch backend data
    axios.get('http://localhost:5000/api/message')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <FeaturesSection />
          </>
        } />
        <Route path="/explained" element={<ContactPage/>} />
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;