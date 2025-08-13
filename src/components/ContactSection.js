// src/components/ContactSection.js

import React, { useRef, useState } from "react"; // <-- 1. IMPORT hooks yang diperlukan
import SectionTitle from "./Sectiontitle";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    setStatus("Mengirim...");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Pesan berhasil terkirim!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Gagal mengirim pesan. Coba lagi.");
        }
      );
  };

  return (
    <section id="kontak" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Mari Terhubung</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mt-4 mb-12">
          Saya selalu terbuka untuk diskusi mengenai proyek baru atau peluang
          kolaborasi. Jangan ragu untuk mengirimkan pesan.
        </p>
        <div className="max-w-xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* ... bagian input form tetap sama ... */}
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                required
                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="pesan"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows="4"
                required
                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Kirim Pesan
              </button>
              {status && (
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  {status}
                </p>
              )}
            </div>
          </form>

          {/* --- IKON SOSIAL MEDIA --- */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Atau hubungi saya melalui:
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Adriannadam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="#"
                /* Ganti dengan URL LinkedIn Anda */ target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="mailto:adrianadam120@gmail.com"
                /* Ganti dengan email Anda */ className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FaEnvelope size={30} />
              </a>
              <a
                href="#"
                /* Ganti dengan URL Instagram Anda */ target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://wa.me/628123456789"
                /* Ganti dengan nomor WhatsApp Anda */ target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>
        </div>{" "}
        {/* <-- 2. Ini adalah penutup untuk <div className="max-w-xl mx-auto"> */}
      </div>
    </section>
  );
}

export default ContactSection;
