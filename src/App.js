
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// JSX FILES 
import Header from './components/portfolioComponents/Header'; // IMPORTING THE HEADER FROM COMP FILE 
import Hero from './components/portfolioComponents/Hero';
import Projects from './components/portfolioComponents/Projects';
import Skills from './components/portfolioComponents/Skills';
import Experience from './components/portfolioComponents/Experience';
import Footer from './components/portfolioComponents/Footer';
import Arcade from './components/arcadeComponents/Arcade';
import Snake from './pages/ArcadeFrame';





// CSS FILES 
import './components/portfolioComponents/header.css'
import './components/portfolioComponents/hero.css'
import './components/portfolioComponents/projects.css'
import './components/portfolioComponents/skills.css'
import './components/portfolioComponents/experience.css'
import './components/portfolioComponents/footer.css'
import './components/arcadeComponents/Arcade.css'
import './App.css';
import ArcadeFrame from './pages/ArcadeFrame';


function App() {
  return (
    <Router>
      <Routes>
        {/* Main Portfolio Routes */}
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <Footer />

          </>
        } />

        {/* Route for the Arcade Page */}
        <Route path="/arcade" element={<Arcade />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="/ArcadeFrame" element={<ArcadeFrame />} />
      </Routes>
    </Router>
  );
}

export default App;