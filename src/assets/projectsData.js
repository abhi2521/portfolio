// src/data/projectsData.js
import thunderbike from "../assets/bike.png";
import grocery from "../assets/gro.png";
import travel from "../assets/travel.jpg";
import blood from "../assets/blood.jpg";

export const projects = [
  {
    id: 1,
    name: "THUNDERBIKE GARAGE",
    image: thunderbike,
    description: "A responsive and dynamic web app to showcase premium bikes.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    name: "Grocery Delivery Tracker",
    image: grocery,
    description: "Traceability of groceries from farmers to consumers.",
    technologies: ["HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    id: 3,
    name: "Dream Destination Travel",
    image: travel,
    description: "A travel booking platform for all age groups.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    name: "Blood Donation Management",
    image: blood,
    description: "Connects blood donors with recipients. Easy UI with admin control.",
    technologies: ["Python", "Django"],
  },
];
