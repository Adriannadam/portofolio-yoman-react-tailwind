// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-950 text-center py-8">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Adam Adrian Yulianto. Dibuat dengan React &
        TailwindCSS.
      </p>
      {/* Tambahkan ikon sosial media jika perlu */}
    </footer>
  );
}
export default Footer;
