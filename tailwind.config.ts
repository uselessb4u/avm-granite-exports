import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 10vw, 7rem)', { lineHeight: '1.07', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0066cc",
          focus: "#0071e3",
          "on-dark": "#2997ff",
          foreground: "#ffffff",
        },
        ink: {
          DEFAULT: "#1d1d1f",
          muted: "#cccccc",
          "muted-80": "#333333",
          "muted-48": "#7a7a7a",
        },
        canvas: {
          DEFAULT: "#ffffff",
          parchment: "#f5f5f7",
        },
        surface: {
          pearl: "#fafafc",
          "tile-1": "#272729",
          "tile-2": "#2a2a2c",
          "tile-3": "#252527",
          black: "#000000",
          "chip-translucent": "rgba(210, 210, 215, 0.64)",
        },
        divider: {
          soft: "#f0f0f0",
        },
        hairline: "#e0e0e0",
      },
      borderRadius: {
        none: "0px",
        xs: "5px",
        sm: "8px",
        md: "11px",
        lg: "18px",
        pill: "9999px",
        full: "9999px",
      },
      boxShadow: {
        product: "0 3px 5px 30px rgba(0, 0, 0, 0.22)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
