/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "575px",
      md: "768px",
      lg: "1025px",
      xl: "1312px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    boxShadow: {
      none: "none",
      sm: "0 1px 6px rgba(61,65,84,.15)",
      md: "0 5px 15px rgba(61,65,84,.15)",
      lg: "0 20px 40px rgba(61,65,84,.15)",
    },
    fontSize: {
      xxs: ["0.75rem"],
      xs: ["0.875rem"],
      sm: ["0.9375rem"],
      base: ["1rem"],
      md: ["1.125rem"],
      lg: ["1.25rem"],
      xl: ["1.5rem"],
      "2xl": ["1.75rem", { lineHeight: "normal" }],
      "3xl": ["2.125rem", { lineHeight: "normal" }],
      "4xl": ["2.5rem", { lineHeight: "normal" }],
      "5xl": ["3rem", { lineHeight: "normal" }],
      "6xl": ["3.5rem", { lineHeight: "normal" }],
      "7xl": ["4rem", { lineHeight: "normal" }],
    },
    extend: {
      colors: {
        slate: {
          base: "#64748B",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          850: "#141C2E",
          900: "#0F172A",
          950: "#020617",
        },
        yellow: "#fbc02d",
        green: "rgb(var(--primary) / <alpha-value>)",
        border: "#B3C3B8",
        input: "#B3C3B8",
        ring: "rgb(var(--primary) / <alpha-value>)",
        background: "#FAFBF9",
        foreground: "#1A1F1B",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "#5C7364",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#FFB366",
          soft: "#FFF3E6",
        },
        tertiary: {
          DEFAULT: "#F8875F",
        },
        quaternary: {
          DEFAULT: "#B939E5",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "#f7f9fa",
          foreground: "#6a798c",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(224 71.4% 4.1%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.secondary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.DEFAULT"),
              },
            },
            "--tw-prose-bold": theme("colors.foreground"),
            "--tw-prose-quotes": theme("colors.foreground"),
          },
        },
      }),
      borderRadius: {
        xl: "1.25rem",
        lg: "1rem",
        md: "0.625rem",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDuration: {
        1600: "1600ms",
      },
      keyframes: {
        fly: {
          "0%, 100%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(-4px)" },
          to: { opacity: 100, transform: "translateY(0)" },
        },
        "fade-out": {
          from: { opacity: 100, transform: "translateY(0)" },
          to: { opacity: 0, transform: "translateY(-4px)" },
        },
      },
      animation: {
        fly: "fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-in-out",
        "fade-out": "fade-out 0.2s ease-in-out",
      },
    },
  },
  plugins: [
    require('lightswind/plugin'),require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
