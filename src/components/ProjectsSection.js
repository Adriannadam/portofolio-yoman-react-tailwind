// src/components/ProjectsSection.js
import React from "react";
import SectionTitle from "./Sectiontitle";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Proyek 1: Portofolio Website",
    description:
      "Website Portofolio simple yang dibangun dengan React dan state management dasar.",
    // Ganti dengan URL gambar yang relevan atau placeholder
    imageUrl: "/1.png",
    codeLink: "https://github.com/Adriannadam/portofolio-yoman-react-tailwind",
    liveLink: "#", // Jika ada live demo
    technologies: ["React", "JavaScript", "CSS"],
  },
  // Tambahkan proyek lainnya
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-850">
      {" "}
      {/* Sedikit beda bg */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Proyek Saya</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
          {/* Placeholder jika belum ada proyek */}
          {projectsData.length === 0 && <p>Proyek akan segera ditambahkan!</p>}
        </div>
      </div>
    </section>
  );
}
export default ProjectsSection;
