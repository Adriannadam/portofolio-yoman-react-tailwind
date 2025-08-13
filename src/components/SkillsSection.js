// src/components/SkillsSection.js
import React from "react";
import Sectiontitle from "./Sectiontitle";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiMysql,
  DiGit,
} from "react-icons/di";
import { SiTailwindcss, SiFigma } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <DiHtml5 size={40} /> },
  { name: "CSS", icon: <DiCss3 size={40} /> },
  { name: "JavaScript", icon: <DiJavascript1 size={40} /> },
  { name: "React", icon: <DiReact size={40} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
  { name: "MySQL", icon: <DiMysql size={40} /> },
  { name: "Git", icon: <DiGit size={40} /> },
  { name: "Figma", icon: <SiFigma size={40} /> },
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
    <section id="skills">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg w-32 h-32 transition-transform transform hover:-translate-y-2"
          >
            <div className="text-blue-400 mb-2">{skill.icon}</div>
            <p className="text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
