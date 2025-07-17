// src/pages/BloodDetail.jsx
import React from 'react';
import blood from '../assets/blood.jpg';

const BloodDetail = () => (
  <div className="p-8 max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold text-red-700 mb-4">Blood Donation Management System</h1>
    <img src={blood} alt="Blood Donation" className="w-full rounded-lg mb-6" />
    <p className="text-gray-700 mb-4">
      A user-friendly web app that connects blood donors with recipients. Includes donor registration, search functionality, and admin control.
    </p>
    <p><strong>Tech Stack:</strong> Python, Django</p>
  </div>
);

export default BloodDetail;
