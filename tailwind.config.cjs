/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        second: "#1163bc",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
