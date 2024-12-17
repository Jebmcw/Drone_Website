import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import './App.css';
function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch backend data
    axios.get('http://localhost:5000/api/message')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

export default App;