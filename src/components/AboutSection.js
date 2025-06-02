// src/components/AboutSection.js
import React from "react";
import SectionTitle from "./Sectiontitle"; // Asumsi Anda sudah punya komponen ini

function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Tentang Saya</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Kolom untuk Foto (Opsional tapi bagus) */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <img
              src="/Adam.jpg" // Ganti dengan URL foto Anda
              alt="Adam Adrian Yulianto"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
            />
          </div>

          {/* Kolom untuk Teks */}
          <div className="md:col-span-2 text-gray-700 dark:text-gray-300 space-y-4 text-base md:text-lg">
            <p>
              Halo! Saya Adam, seorang web developer yang bersemangat dalam
              menciptakan solusi digital yang inovatif dan ramah pengguna. Saya
              memiliki ketertarikan mendalam pada bagaimana teknologi dapat
              memecahkan masalah dan meningkatkan interaksi manusia dengan dunia
              digital.
            </p>
            <p>
              Perjalanan saya di dunia pengembangan web dimulai dari rasa
              penasaran tentang bagaimana website dan aplikasi dibangun. Saya
              jatuh cinta pada React karena kemampuannya untuk membangun
              antarmuka yang dinamis dan efisien, serta TailwindCSS yang
              mempercepat proses styling dengan pendekatan utility-first yang
              modern.
            </p>
            <p>
              Saya selalu berusaha untuk menulis kode yang bersih, mudah
              dipelihara, dan mengikuti praktik terbaik. Belajar hal baru dan
              terus berkembang adalah bagian penting dari perjalanan saya
              sebagai developer.
            </p>
            {/* <p>
              Di luar jam kerja, saya menikmati [sebutkan hobi Anda di sini jika mau].
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
