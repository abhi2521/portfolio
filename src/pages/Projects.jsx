// src/pages/Projects.jsx
import { Link } from 'react-router-dom';
import thunderbike from '../assets/bike.png';
import grocery from '../assets/gro.png';
import travel from '../assets/travel.jpg';
import blood from '../assets/blood.jpg';

const projectList = [
  {
    id: 'thunderbike',
    title: 'THUNDERBIKE GARAGE',
    tech: 'React, Tailwind, Node, MongoDB, Express',
    image: thunderbike,
  },
  {
    id: 'grocery',
    title: 'Farm-to-Consumer Grocery System',
    tech: 'HTML, CSS, JavaScript, SQL',
    image: grocery,
  },
  {
    id: 'travel',
    title: 'Dream Destination Tours',
    tech: 'HTML, CSS, JavaScript, ReactJS',
    image: travel,
  },
  {
    id: 'blood',
    title: 'Blood Donation Management',
    tech: 'Python, Django',
    image: blood,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-200 via-white to-indigo-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectList.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div className="bg-white rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-indigo-700">{project.title}</h2>
                <p className="text-sm mt-2 text-gray-600">{project.tech}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
