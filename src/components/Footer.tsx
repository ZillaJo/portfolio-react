import { Container, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
          <Container className="w-8 h-8" />
          Jon<span className="text-accent">Mdh</span>
        </a>
        <p> © 2026 - All right reserved -</p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com" className="hover:text-accent" target="_blank">
            <Twitter className="w-7 h-7 text-current"/>
          </a>
          <a href="https://linkedin.com" className="hover:text-accent" target="_blank">
            <Linkedin className="w-7 h-7 text-current"/>
          </a>
          <a href="https://github.com" className="hover:text-accent" target="_blank">
            <Github className="w-7 h-7 text-current"/>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
