import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import './App.css';
import ExplainedPage from './components/ExplainedPage'; // New page component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <FeaturesSection />
          </>
        } />
        <Route path="/explained" element={<ExplainedPage />} />
      </Routes>
    </Router>
  );
}

export default App;