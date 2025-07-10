import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Timeline from "./components/Timeline";
import TeamGrid from "./components/TeamGrid";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />

      <Section id="vision" title="Our Vision">
        <p>
          We envision a world where machines and humans work together to solve life's most complex problems. Science and technology have always been the engines of societal advancement—from the invention of agriculture and the printing press to the development of vaccines and computing. These achievements, while transformative, represent only a fraction of what is possible. We see science and technology as a vast, branching tree—each new discovery revealing further complexities and opportunities. However, the pace of exploration is constrained by human capacity: time, attention, and limited cognitive bandwidth. Iriba seeks to overcome these limitations by developing AI systems that augment human capabilities, allowing for a broader and deeper exploration of the scientific and technological landscape.
        </p>
      </Section>

      <Section id="approach" title="Our Approach">
        <p>
          Our design philosophy draws inspiration from one of nature's most powerful problem-solving processes: evolution. Evolution has, over millions of years, crafted diverse life forms capable of thriving in complex, dynamic environments. This process has yielded solutions to challenges in cognition, perception, coordination, decision-making, and adaption—areas critical to artificial intelligence. By studying and understanding design principles from nature, we believe we can create AI systems that are adaptable and capable of solving complex problems in a non-stationary world.
        </p>
      </Section>

      <Section id="openness" title="Open Research & Collaboration">
        <p>
          As part of our core beliefs, we believe that the best way to pursue our mission is to share our methods with the world. We plan to publish technical articles, papers, and code. We think feedback from the community is essential to refining our ideas and ensuring that our work has a meaningful impact.
        </p>
      </Section>

      <Section id="progress" title="Our Progress">
        <Timeline />
      </Section>

      <Section id="team" title="Meet the Team">
        <TeamGrid />
      </Section>

      <Section id="contact" title="Join Us">
        <p className="mb-4">
          We are looking for talented and passionate individuals to join our team.
        </p>
        <a href="mailto:hello@iriba.ai">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Apply or Say Hello
          </button>
        </a>
      </Section>
    </div>
  );
}

export default App;

