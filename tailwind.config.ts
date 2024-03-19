import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "media-partner": "url('/images/mediaBackground.svg')",
      },
      colors: {
        bodyBg: {
          default: "#111827",
        },
        primary: {
          default: "#3e7afb",
          lighter: "#64d1ff",
          light: "#064CC6",
          main: "#2F78F7",
        },
        secondary: {
          default: "#ffffff",
          lighter: "#d0d0d0",
          main: "#1C1C1C",
          dark: "#474747",
        },
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeOut: "fadeOut 0.5s ease-out",
        fadeIn: "fadeIn 0.5s ease-in",
      },
    },
  },
  plugins: [],
} satisfies Config;
export default config;

// lighter: "#F5F6FA",
// light: "#EEEEEE",
// main: "#DDE1E5",
// dark: "#898989",
// darker: "#787878",
// darkest: "#999",
// default: "#333333"
