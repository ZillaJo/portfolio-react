import { useEffect, useState } from "react";
import { Container, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const activeLink = "home";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", key: "home" },
    { label: "About", href: "#about", key: "about" },
    { label: "Experiences", href: "#experiences", key: "experiences" },
    { label: "Portfolio", href: "#portfolio", key: "portfolio" },
    { label: "Contact", href: "#contact", key: "contact" },
  ];

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full">
      <nav
        className={`
          max-w-6xl mx-auto
          px-6
          backdrop-blur-md
          rounded-2xl
          transition-all duration-300
          ${
            scrolled
              ? "bg-base-100/90 shadow-xl ring-1 ring-base-300/50"
              : "bg-base-100/70"
          }
        `}
      >
        <div className="flex items-center justify-between py-3">
          {/* Logo - left */}
          <a href="#home" className="flex items-center text-2xl font-bold">
            <div className="mr-2">
              <Container />
            </div>
            Jon<span className="text-accent">Mdh</span>
          </a>

          {/* Desktop menu - right */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={`
                    btn btn-sm rounded-xl transition-all
                    ${
                      activeLink === item.key
                        ? "bg-accent text-accent-content shadow-md"
                        : "btn-ghost hover:bg-base-200"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu - right */}
          <div className="md:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-xl">
              <Menu />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-4 p-2
                         bg-base-100 rounded-xl shadow-lg w-52"
            >
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className={
                      activeLink === item.key
                        ? "bg-accent text-accent-content"
                        : ""
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
