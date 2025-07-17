// src/pages/GroceryDetail.jsx
import React from 'react';
import gro from '../assets/gro.png';

const GroceryDetail = () => (
  <div className="p-8 max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold text-green-700 mb-4">Farm-to-Consumer Grocery System</h1>
    <img src={gro} alt="Grocery" className="w-full rounded-lg mb-6" />
    <p className="text-gray-700 mb-4">
      A web-based grocery ordering system enabling direct farm-to-consumer delivery. Features real-time tracking, transparency, and fair pricing.
    </p>
    <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, SQL</p>
  </div>
);

export default GroceryDetail;
