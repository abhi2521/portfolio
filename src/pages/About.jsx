import React from 'react';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/resume.pdf';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w- h- md:w-70 md:h-90 rounded-full overflow-hidden shadow-xl border-1"
        >
          <img
            src={profileImg}
            alt="Abhishek Kumar R"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-2xl"
        >
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">👋 About Me</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            I'm <span className="font-bold text-indigo-600">Abhishek Kumar R</span>, a passionate <span className="text-pink-600 font-semibold">Full Stack Developer</span> currently working at <strong className="text-indigo-700">Hurryep Technologies</strong>.
          </p>
          <p className="text-gray-700 text-base mb-3">
            I build modern web applications using the <strong>MERN Stack</strong>, and enjoy working on both frontend & backend development.
          </p>
          <p className="text-gray-700 mb-3">
            📚 I’ve completed:
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 font-medium mb-4">
            <li>Python Full Stack – QSpiders, Chennai</li>
            <li>MERN Stack – Shikshaa Simple Learn, Madurai</li>
          </ul>

          <a
            href={resumePdf}
            download="Abhishek_Resume.pdf"
            className="inline-block mt-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition transform"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
