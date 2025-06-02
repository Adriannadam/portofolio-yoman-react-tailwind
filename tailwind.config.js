// tailwind.config.js
module.exports = {
  darkMode: "class", // atau 'media'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Anda bisa menambahkan warna kustom di sini
        // Misalnya untuk dark mode yang lebih spesifik
        gray: {
          850: "#182133", // contoh warna antara 800 dan 900
          950: "#0b0f1a", // contoh warna lebih gelap dari 900
        },
      },
    },
  },
  plugins: [],
};
