import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from './components/Features';
import About from './components/About';



function App() {
  return (
    <>
      
       <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Features/>}/>
          <Route path="/About" element={<About/>}/>
      
        </Routes>
       </Router>
      
    </>
  )
}

export default App
