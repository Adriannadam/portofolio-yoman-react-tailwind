// src/components/SkillsSection.js
import React from "react";
import Sectiontitle from "./Sectiontitle";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TailwindCSS",
  "MySQL",
  "Git",
  "Figma",
];

function SkillBadge({ skill }) {
  return (
    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-sm font-medium mr-2 mb-2 px-3 py-1.5 rounded-full">
      {skill}
    </span>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <Sectiontitle>Keahlian</Sectiontitle>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
