import React from "react";

function Section({ id, title, children }) {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center px-6 py-24 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6" data-aos="fade-down">{title}</h2>
      <div className="max-w-3xl text-lg leading-relaxed text-gray-600" data-aos="fade-up">
        {children}
      </div>
    </section>
  );
}

export default Section;
