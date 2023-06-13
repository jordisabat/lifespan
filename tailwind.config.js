module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        silka: ["silka", "sans-serif"],
        silkabold: ["Silka Bold", "sans-serif"],
        silkamedium: ["Silka Medium", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
