import React from "react";
import { FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Fabrice B. Mpogazi",
    role: "Founder & Research Engineer",
    image: "https://via.placeholder.com/150",
    linkedin: "#"
  },
  {
    name: "Francis Mutabazi",
    role: "Developer",
    image: "linkedin.com/in/francis-mutabazi-4a212130b",
    linkedin: "#"
  }
];

function TeamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="zoom-in">
      {team.map((member, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-xl transition transform hover:scale-105">
          <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
          <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
          <p className="text-sm text-gray-500 mb-2">{member.role}</p>
          <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin size={24} className="mx-auto" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default TeamGrid;
