import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Sahil Construction</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/work">Our Work</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
