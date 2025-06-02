import React from "react";

function Sectiontitle({ children }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-10 text-center">
      {children}
    </h2>
  );
}
export default Sectiontitle;
