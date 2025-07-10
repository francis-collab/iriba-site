import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "vision", label: "Vision" },
    { to: "approach", label: "Approach" },
    { to: "openness", label: "Openness" },
    { to: "progress", label: "Progress" },
    { to: "team", label: "Team" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-indigo-700 font-bold text-xl">IRIBA</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              className="hover:text-blue-600 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 font-medium bg-white shadow">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

