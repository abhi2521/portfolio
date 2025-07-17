import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="text-center text-2xl text-red-500">Project Not Found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-6">
      <div className="max-w-5xl mx-auto bg-white/10 rounded-xl shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-72 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{project.name}</h1>
          <p className="text-lg text-white/90 mb-6">{project.description}</p>
          <div>
            <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
            <ul className="list-disc pl-6 space-y-1 text-white/80">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
