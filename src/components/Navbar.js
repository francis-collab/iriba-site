import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="flex justify-center gap-8 py-4 text-gray-700 font-medium">
        <Link to="vision" smooth duration={600} className="hover:text-blue-600 cursor-pointer">Vision</Link>
        <Link to="approach" smooth duration={600} className="hover:text-blue-600 cursor-pointer">Approach</Link>
        <Link to="openness" smooth duration={600} className="hover:text-blue-600 cursor-pointer">Openness</Link>
        <Link to="progress" smooth duration={600} className="hover:text-blue-600 cursor-pointer">Progress</Link>
        <Link to="team" smooth duration={600} className="hover:text-blue-600 cursor-pointer">Team</Link>
        <Link to="contact" smooth duration={600} className="hover:text-blue-600 cursor-pointer">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
