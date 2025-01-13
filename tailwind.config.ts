import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1A1F2C",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0EA5E9",
          foreground: "#1A1F2C",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#403E43",
          foreground: "#8B5CF6",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          foreground: "#FFFFFF",
        },
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px #9b87f5" },
          "50%": { boxShadow: "0 0 40px #8B5CF6" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        }
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "glow": "glow 3s ease-in-out infinite",
        "pulse": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;