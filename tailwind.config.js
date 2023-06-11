module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        silka: ["silka", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
