// src/pages/ThunderbikeDetail.jsx
import React from 'react';
import bike from '../assets/bike.png';

const ThunderbikeDetail = () => (
  <div className="p-8 max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold text-indigo-700 mb-4">THUNDERBIKE GARAGE</h1>
    <img src={bike} alt="Thunderbike" className="w-full rounded-lg mb-6" />
    <p className="text-gray-700 mb-4">
      A responsive and dynamic web application built to showcase premium bikes with detailed information and sleek user interface.
    </p>
    <p><strong>Tech Stack:</strong> React.js, Tailwind CSS, Node.js, MongoDB, Express.js</p>
  </div>
);

export default ThunderbikeDetail;
