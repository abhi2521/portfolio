import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { Link, NavLink } from 'react-router-dom';

function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-4">
            👋 Hi, I'm Abhishek Kumar R
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            A <span className="text-pink-600 font-semibold">Full Stack Developer</span> passionate about building modern web applications using <strong className="text-indigo-600">MERN & Python</strong>.
          </p>
         
            <Link to="about"  className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition transform">
            🚀 Explore More
            </Link>
          
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-50 h-80 md:w- md:h-80 rounded-full overflow-hidden shadow-xl border-1"
        >
          <img
            src={profileImg}
            alt="Abhishek"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Welcome;
