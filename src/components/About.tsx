import Title from "./Title";
import img from "../assets/jo.png";
import { User, Target, Code } from "lucide-react";
import ProfileTable from "./ProfileTable";

// import { title } from "process";

const aboutSection = [
  {
    id: 1,
    title: "Who am I?",
    description:
      "I'm Jonathan Mdh, a passionate fullstack software developer with expertise in building dynamic and responsive web applications. With a strong foundation in both frontend and backend technologies, I thrive on creating seamless user experiences and efficient server-side solutions.",
    icon: <User className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "My Mission",
    description:
      "My mission is to leverage technology to solve real-world problems and enhance people's lives. I am committed to continuous learning and staying updated with the latest industry trends to deliver innovative solutions that meet client needs.",
    icon: <Target className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "What I Do",
    description:
      "I specialize in developing fullstack applications using modern frameworks and tools. From designing intuitive user interfaces to implementing robust backend systems, I handle all aspects of the development process to ensure high-quality deliverables.",
    icon: <Code className="text-accent scale-150" />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-0" id="about">
      <Title title="About Me" />
      <div className=" flex justify-center items-center gap-10 flex-col md:flex-row">
        <div className="hidden md:block mr-10 md:w-1/3">
          <img
            src={img}
            alt="Jonathan Mdh"
            className=" object-cover rounded-xl"
          />
        </div>

        <div className="md:ml-4 space-y-5 md:w-2/3">
          {aboutSection.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center md:items-start bg-base-100 p-5 rounded-xl shadow-xl"
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}

          {/* Profile Table Component */}
          <ProfileTable />
        </div>
      </div>
    </div>
  );
};

export default About;
