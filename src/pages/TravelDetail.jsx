// src/pages/TravelDetail.jsx
import React from 'react';
import travel from '../assets/travel.jpg';

const TravelDetail = () => (
  <div className="p-8 max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold text-blue-700 mb-4">Dream Destination Tours</h1>
    <img src={travel} alt="Travel" className="w-full rounded-lg mb-6" />
    <p className="text-gray-700 mb-4">
      A travel booking platform offering customizable packages and seamless user experience, designed for all age groups.
    </p>
    <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, React.js</p>
  </div>
);

export default TravelDetail;
