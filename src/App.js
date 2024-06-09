import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import HeroSlider from './components/HeroSection/HeroSection';
import Home from './components/Home/Home';
import IconsServices from './components/IconsLayout/IconsServices';

function App() {
  return (
    <div>
      <Home />
      <IconsServices />
    </div>
  );
}

export default App;
