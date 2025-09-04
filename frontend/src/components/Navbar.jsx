import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy-blue/20 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/"><img src={Logo} className="h-[70px] lg:h-[100px] w-auto" alt="Sahil Construction" /></Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><Link to="/" className="hover:text-golden-yellow transition">Home</Link></li>
          <li><Link to="/work" className="hover:text-golden-yellow transition">Work</Link></li>
          <li><Link to="/services" className="hover:text-golden-yellow transition">Services</Link></li>
          <li><Link to="/about" className="hover:text-golden-yellow transition">About us</Link></li>
    
        </ul>
        <div className="hidden md:flex space-x-8 text-white font-medium">
            <Link to="/contact" className="bg-transparent border border-white px-4 py-2 rounded-md hover:bg-golden-yellow hover:border-golden-yellow hover:text-navy-blue transition">
              Contact us
            </Link>
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
        <div className="md:hidden bg-navy-blue text-white px-6 py-4 space-y-4">
          <Link to="/work" className="block hover:text-golden-yellow">Work</Link>
          <Link to="/home" className="block hover:text-golden-yellow">Home</Link>
          <Link to="/services" className="block hover:text-golden-yellow">Services</Link>
          <Link to="/about" className="block hover:text-golden-yellow">About us</Link>
          <Link to="/contact" className="block bg-golden-yellow text-navy-blue px-4 py-2 rounded-md text-center">
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
