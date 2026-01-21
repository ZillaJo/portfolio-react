import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2" />
        Jon<span className="text-accent">Mdh</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        <li><a href="#home" className="btn btn-sm btn-ghost">Home</a></li>
        <li><a href="#about" className="btn btn-sm btn-ghost">About</a></li>
        <li><a href="#portfolio" className="btn btn-sm btn-ghost">Portfolio</a></li>
        <li><a href="#projects" className="btn btn-sm btn-ghost">My project</a></li>

      </ul>
    </div>
  );
};

export default Navbar;
