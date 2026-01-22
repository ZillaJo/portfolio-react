import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2" />
        Jon<span className="text-accent">Mdh</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#home" className="btn btn-sm btn-active btn-accent">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="btn btn-sm btn-ghost">
            About
          </a>
        </li>
        <li>
          <a href="#experiences" className="btn btn-sm btn-ghost">
            Experiences
          </a>
        </li>
        <li>
          <a href="#portfolio" className="btn btn-sm btn-ghost">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="btn btn-sm btn-ghost">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
