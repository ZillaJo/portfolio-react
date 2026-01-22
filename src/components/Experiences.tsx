import Title from "./Title";

import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgTS from "../assets/techno/typescript.svg";
import imgReact from "../assets/techno/react.png";
import imgTail from "../assets/techno/tailwind.png";
import imgGit from "../assets/techno/git1.png";
import imgNext from "../assets/techno/next-js.webp";
import imgNode from "../assets/techno/node-js.png";

const skills = [
  
  {
    id: 1,
    name: "TypeScript",
    Image: imgTS,
  },
  {
    id: 2,
    name: "React",
    Image: imgReact,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    Image: imgTail,
  },
  {
    id: 4,
    name: "Next.js",
    Image: imgNext,
  },
  {
    id: 5,
    name: "Git",
    Image: imgGit,
  },
  {
    id: 6,
    name: "Node-js",
    Image: imgNode,
  },
];

const Experiences = () => {
  return (
    <div className=" p-10 mb-10 md:mb-0" id="experiences">
      <Title title="Experiences" />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4 items-center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex justify-center flex-col items-center"
            >
              <div className="w-20 h-20 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.Image}
                  alt={skill.name}
                  className="object-cover rounded-full w-full h-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="md:w-2/3 space-y-4 bg-base-300 p-6 rounded-xl shadow-xl">
          <h2 className="text-center text-lg text-accent md:text-xl  font-bold mb-4">
            I Work Hard to improve My Skills Regularly in :
          </h2>
          <p className="text-center text-sm md:text-base">
            TypeScript, React, Next.js, Tailwind CSS,
            Node.js, Express.js, MongoDB, Git, GitHub, Responsive
            Web Design, Agile Methodologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
