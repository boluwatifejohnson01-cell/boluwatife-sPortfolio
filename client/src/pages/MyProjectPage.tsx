import React from "react";
import spaceTourism from "../assets/Screenshot 2026-11-09 075506.png";
import snapImg from "../assets/snap.png";
import adviceImg from "../assets/Advice.png";
import audiophileImg from "../assets/audiophile.png";

type Project = {
  title: string;
  description: string;
  tech: string[];
  url: string; // live site
  repo?: string; // optional GitHub link
  image?: string; // optional screenshot
};

const projects: Project[] = [
  {
    title: "Instant Advice",
    description:
      "This is a frontend, Javascript, CSS project. This apps develops new advice after ever click on the middle icon.. it was built in the beginning stages of my learning period",
    tech: ["React", "Tailwind CSS"],
    url: "https://advice-three-mu.vercel.app/",
    repo: "https://github.com/your-username/project-one",
    image: adviceImg,
  },
  {
    title: "Audiophile",
    description:
      "Creating the AudioPhile website was an exciting and practical web development project. The main goal was to build a modern, attractive, and user-friendly e-commerce platform where customers can explore and purchase different audio products, including headphones, speakers, and earphones.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
    url: "https://final-audiophile-three.vercel.app/",
    image: audiophileImg,
  },
  {
    title: "Space Tourism",
    description:
      "The Space Tourism website is an informative and interactive website designed to introduce visitors to the exciting world of space exploration. It provides information about different planets in our solar system, allowing users to learn more about their features, environments, sizes, and unique characteristics",
    tech: ["JavaScript", "Tailwind CSS"],
    url: "https://space-tourism-owog.vercel.app/",
    image: spaceTourism,
  },
  {
    title: "Snap",
    description:
      "This is a frontend project that shows my skill in Javascript and CSS",
    tech: ["JavaScript", "CSS"],
    url: "https://intro-section-one-chi.vercel.app/",
    image: snapImg,
  },
];

const MyProjectPage: React.FC = () => {
  return (
    <div className="mx-auto w-90 md:w-360 my-15 gap-15 md:mt-10 flex flex-col md:px-5 md:items-center md:pb-20">
      {/* Section header (same pattern as My Skills) */}
      <div className="flex flex-col gap-0.5">
        <p className="text-[#1f0000] font-medium text-[14px] md:text-[16px] tracking-tight uppercase">
          My Projects
        </p>
        <div className="relative">
          <h3 className="text-[#eb7e14] font-bold text-[20px] md:text-[24px]">
            Things I've Built
          </h3>
          <span className="w-10 bg-[#1f0000] h-0.5 absolute -bottom-1.5 left-40 md:left-20" />
        </div>
      </div>

      {/* Project grid */}
      <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-12">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col border-2 border-[#1f0000] rounded-2xl overflow-hidden bg-white"
          >
            {/* Screenshot, or an orange block with the first letter as a fallback */}
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-40 md:h-48 object-cover border-b-2 border-[#1f0000]"
              />
            ) : (
              <div
                aria-hidden="true"
                className="w-full h-40 md:h-48 bg-[#eb7e14] border-b-2 border-[#1f0000] flex items-center justify-center text-[#1f0000] font-bold text-[48px]"
              >
                {project.title.charAt(0)}
              </div>
            )}

            <div className="flex flex-col gap-3 p-4 grow">
              <h4 className="text-[#1f0000] text-[16px] md:text-[18px] font-bold">
                {project.title}
              </h4>

              <p className="text-[#1f0000] text-[13px] md:text-[14px]">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="text-[#1f0000] text-[12px] font-bold border border-[#1f0000] rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 mt-auto pt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#eb7e14] text-[#1f0000] text-[13px] md:text-[14px] font-bold rounded-full px-4 py-2 border-2 border-[#1f0000] hover:bg-[#1f0000] hover:text-[#eb7e14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb7e14] transition-colors"
                >
                  Visit site
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1f0000] text-[13px] md:text-[14px] font-bold rounded-full px-4 py-2 border-2 border-[#1f0000] hover:bg-[#1f0000] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb7e14] transition-colors"
                  >
                    View code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MyProjectPage;
