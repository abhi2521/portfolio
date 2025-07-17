import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiDjango, SiMysql } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'from-orange-500 to-yellow-400' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'from-blue-500 to-blue-300' },
    { name: 'JavaScript', icon: <FaJs />, color: 'from-yellow-400 to-yellow-200' },
    { name: 'React.js', icon: <FaReact />, color: 'from-blue-400 to-cyan-300' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'from-cyan-500 to-teal-300' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'from-green-500 to-lime-400' },
    { name: 'Express.js', icon: <SiExpress />, color: 'from-gray-700 to-gray-500' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'from-green-600 to-green-400' },
    { name: 'Python', icon: <FaPython />, color: 'from-yellow-400 to-blue-400' },
    { name: 'Django', icon: <SiDjango />, color: 'from-green-900 to-green-700' },
    { name: 'MySQL', icon: <SiMysql />, color: 'from-blue-600 to-yellow-400' },
    { name: 'Git & GitHub', icon: <FaGitAlt />, color: 'from-orange-500 to-red-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">My Skills 🚀</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 bg-gradient-to-tr ${skill.color}`}
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="font-semibold text-lg text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
