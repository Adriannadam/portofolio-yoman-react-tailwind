// src/components/Footer.js

import React from "react";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animasi scroll yang mulus
    });
  };

  return (
    <footer className="bg-gray-800 dark:bg-slate-850 text-gray-400 py-6 relative">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Adam Adrian Yulianto. All Rights
          Reserved.
        </p>
      </div>

      {/* --- TOMBOL KEMBALI KE ATAS --- */}
      <button
        onClick={scrollToTop}
        className="absolute right-8 bottom-6 bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Kembali ke atas"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
