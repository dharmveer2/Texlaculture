import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Mainpage from './Components/Mainpage';
import Secondpage from './Components/Secondpage';
import Mobileview from './Components/Mobileview';
import Otpveri from './Components/Otpveri';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} /> 
        <Route path="/next" element={<Secondpage />} /> 
        <Route path="/mobile" element={<Mobileview />} /> 
        <Route path="/otp" element={<Otpveri />} /> 
      </Routes>
    </>
  );
}

export default App;
