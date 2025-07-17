// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Welcome from './pages/Welcome.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

import ThunderbikeDetail from "./pages/ThunderbikeDetail.jsx";
import GroceryDetail from "./pages/GroceryDetail.jsx";
import TravelDetail from "./pages/TravelDetail.jsx";
import BloodDetail from "./pages/BloodDetail.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />

            {/* Project Detail Pages */}
            <Route path="/project/thunderbike" element={<ThunderbikeDetail />} />
            <Route path="/project/grocery" element={<GroceryDetail />} />
            <Route path="/project/travel" element={<TravelDetail />} />
            <Route path="/project/blood" element={<BloodDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
