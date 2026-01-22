import Title from "./Title";

import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";
import img6 from "../assets/projects/6.png";
import { Github, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description for project one.",
    technologies: ["React", "TypeScript", "CSS"],
    demoLink: "#",
    repoLink: "#",
    image: img1,
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for project two.",
    technologies: ["Node.js", "Express", "MongoDB"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description for project three.",
    technologies: ["Python", "Django", "PostgreSQL"],
    demoLink: "#",
    repoLink: "#",
    image: img3,
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description for project four.",
    technologies: ["Vue", "JavaScript", "HTML"],
    demoLink: "#",
    repoLink: "#",
    image: img4,
  },
  {
    id: 5,
    title: "Project Five",
    description: "Description for project five.",
    technologies: ["Angular", "TypeScript", "Sass"],
    demoLink: "#",
    repoLink: "#",
    image: img5,
  },
  {
    id: 6,
    title: "Project Six",
    description: "Description for project six.",
    technologies: ["Ruby on Rails", "SQLite"],
    demoLink: "#",
    repoLink: "#",
    image: img6,
  },
];

const Portfolio = () => {
  return (
    <div className="" id="portfolio">
      <Title title="Portfolio" />
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project,idx) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-56 object-cover"
            />
            <div>
              <h1 className="text-xl font-bold my-2">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              {project.technologies.map((tech,index) => (
                <span key={index} className="badge badge-accent badge-sm">{tech}</span>
              ))}
            </div>
            <div className="flex gap-2 mt-4 justify-center">
              <a
                href={project.demoLink}
                className="btn bg-[#E0A15E] text-[#150C0C] w-2/3 "
                target="_blank"
              >
                Live Demo
                <Video className="w-5" />
              </a>
              <a
                href={project.repoLink}
                className="btn btn-neutral w-1/3"
                target="_blank"
              >
                Code
                <Github className="w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
