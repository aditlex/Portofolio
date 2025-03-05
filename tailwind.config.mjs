/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        move1: "move 15s infinite alternate ease-in-out",
        move2: "move 18s infinite alternate ease-in-out",
        move3: "move 12s infinite alternate ease-in-out",
        move4: "move 20s infinite alternate ease-in-out",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(60px)" },
          "100%": { transform: "translateY(40px) translateX(-60px)" },
        },
      },
    },
  },
  plugins: [],
};
