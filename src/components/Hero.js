import React from "react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 to-blue-100 text-center px-6">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-6">IRIBA</h1>
      <p className="text-xl max-w-3xl text-gray-700 mb-8">
        Iriba is a research and product company dedicated to shaping a future where machines collaborate with humans to accelerate scientific and technological innovation. We believe that artificial intelligence can unlock new frontiers in knowledge and creativity, ultimately enhancing the quality of life on Earth and beyond.
      </p>
      <Link to="vision" smooth duration={600}>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
          Discover Our Vision ↓
        </button>
      </Link>
    </section>
  );
}

export default Hero;
