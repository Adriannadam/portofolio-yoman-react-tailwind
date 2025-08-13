import React from "react";

function HeroSection() {
  return (
    <section id="hero" className="py-20 text-center">
      {/* Ganti logo React dengan foto Anda atau ilustrasi yang relevan jika mau */}
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400">
        Adam Adrian Yulianto
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
        Web Developer | React & TailwindCSS Enthusiast
      </p>
      <div className="mt-8">
        <a
          href="#project"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mr-4"
        >
          Lihat Proyek
        </a>
        <a
          href="#contact"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
