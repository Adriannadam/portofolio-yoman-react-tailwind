import React from "react";

function ProjectCard({
  title,
  description,
  imageUrl,
  codeLink,
  liveLink,
  technologies,
}) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {description}
        </p>
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex space-x-4">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Lihat Kode
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:underline font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
