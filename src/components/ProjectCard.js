import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Pastikan props yang diterima adalah 'tags', bukan 'technologies'
function ProjectCard({ title, description, imageUrl, tags, codeUrl, liveUrl }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`
        bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col
        transition-all duration-700 ease-in-out  // Durasi dan tipe transisi
        ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } // Efek animasi
      `}
    >
      <img
        src={imageUrl}
        alt={`Tampilan Proyek ${title}`}
        className="w-full h-48 object-cover object-top"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">
          {description}
        </p>
        <div className="mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-300 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-start space-x-5">
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
          >
            <FaGithub size={20} />
            <span>Kode</span>
          </a>
          {liveUrl !== "#" && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 font-medium transition-colors"
            >
              <FaExternalLinkAlt size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
