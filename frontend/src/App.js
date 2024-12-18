import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About_US from './About/About_Us';
import './App.css';
import ContactPage from './components/ContactPage';
import FeaturesSection from './components/FeaturesSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Our_Work from './Our_Work/Our_Work';
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
        <Route path="/about" element={<About_US/>}/>
        <Route path="/work" element={<Our_Work/>}/>
      </Routes>
    </Router>
  );
}

export default App;