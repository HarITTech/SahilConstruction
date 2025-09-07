import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo_white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to apply active styles
  const linkClasses = (path) =>
    currentPath === path
      ? "text-golden-yellow font-semibold"
      : "hover:text-golden-yellow transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#043252f1] backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={Logo}
            className="h-[60px] lg:h-[60px] my-2 w-auto"
            alt="Sahil Construction"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <Link to="/" className={linkClasses("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" className={linkClasses("/work")}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/services" className={linkClasses("/services")}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkClasses("/about")}>
              About us
            </Link>
          </li>
        </ul>

        {/* Contact (Desktop) */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a
            href="#contact"
            className="bg-transparent border border-white px-4 py-2 rounded-md hover:bg-golden-yellow hover:border-golden-yellow hover:text-navy-blue transition"
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-white px-6 py-4 space-y-4" onClick={() => setIsOpen(false)}>
          <Link to="/" className={`${linkClasses("/")} block`}>
            Home
          </Link>
          <Link to="/work" className={`${linkClasses("/work")} block`}>
            Work
          </Link>
          <Link to="/services" className={`${linkClasses("/services")} block`}>
            Services
          </Link>
          <Link to="/about" className={`${linkClasses("/about")} block`}>
            About us
          </Link>
          <a
            href="#contact"
            className="block bg-golden-yellow text-navy-blue px-4 py-2 rounded-md text-center"
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
