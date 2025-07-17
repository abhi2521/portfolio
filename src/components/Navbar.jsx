// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Fallback icons (no antd)
const MenuOutlined = () => <span className="text-2xl">☰</span>;
const CloseOutlined = () => <span className="text-2xl">×</span>;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Branding Title */}
        <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
         WELCOME ❤️
        </Link>

        {/* Desktop Nav */}
        <div className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "hover:text-blue-300 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none">
          {isOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="block text-white hover:text-blue-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
