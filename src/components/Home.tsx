import { Mail } from "lucide-react";
import img from "../assets/jo.png";

const Home = () => {
  return (
    <div id="home">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0">
            Hello , <br /> I'm{" "}
            <span className=" font-bold text-accent">Jonathan Mdh</span>
          </h1>
          <p className="my-4 text-md text-center md:text-left mt-4">
            I'm a fullstack software developer
          </p>
          <a href="#contact" className="btn btn-accent md:w-fit">
            <Mail className="w-5 h-5" /> Contact Me
          </a>
        </div>
        <div className="md:ml-16 mb-8 md:mb-0">
          <img
            src={img}
            alt="Jonathan Mdh"
            className="w-80 h-90 object-cover mt-10 border-8 border-accent shadow-xl md:w-85 md:h-100"
            style={{
                borderRadius: "51% 49% 48% 52% / 35% 35% 65% 65%"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
