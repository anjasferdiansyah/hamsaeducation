/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);",
        slideOut: "slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1);",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },

  plugins: [],
};
