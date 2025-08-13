// src/components/ProjectsSection.js

import React from "react";
import SectionTitle from "./Sectiontitle";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/project"; // <-- 1. IMPORT DATA DARI FILE YANG BENAR

function ProjectsSection() {
  return (
    // Kita gunakan bg-slate-900 untuk dark mode agar lebih menyatu
    <section id="project" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle>My Project</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projectsData.map((project) => (
            // 2. Sekarang 'project' berisi 'tags', 'imageUrl', dll. yang akan dikirim ke ProjectCard
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
