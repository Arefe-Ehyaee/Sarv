/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        tight190: '-0.019em', // Equivalent to -1.9%
      },
      fontFamily: {
        myVazirRegular: ["myvazir-regular", "sans-serif"],
        myVazirMedium: ["myvazir-medium", "sans-serif"],
        myVazirSemibold: ["myvazir-semibold", "sans-serif"],
        myVazirFaNumRegular: ["myvazirFaNum-regular", "sans-serif"],
        myVazirFaNumMedium: ["myvazirFaNum-medium", "sans-serif"],
        myVazirFaNumSemibold: ["myvazirFaNum-semibold", "sans-serif"],

        myPeydaRegular: ["mypeyda-regular", "sans-serif"],
        myPeydaMedium: ["mypeyda-medium", "sans-serif"],
        myPeydaSemibold: ["mypeyda-semibold", "sans-serif"],
        myPeydaFaNumRegular: ["mypeydaFaNum-regular", "sans-serif"],
        myPeydaFaNumMedium: ["mypeydaFaNum-medium", "sans-serif"],
        myPeydaFaNumSemibold: ["mypeydaFaNum-semibold", "sans-serif"],

        myYekanRegular: ["myYekan-regular", "sans-serif"],
        myYekanMedium: ["myYekan-medium", "sans-serif"],
        myYekanDemibold: ["myYekan-demibold", "sans-serif"],
        myYekanFaNumRegular : ["myYekanFaNum-regular", "sans-serif"],
        myYekanFaNumMedium : ["myYekanFaNum-medium", "sans-serif"],
        myYekanFaNumDemiBold : ["myYekanFaNum-demiBold", "sans-serif"]
      },
      colors: {
        primary: {
          50:  "#F2F7F2",
          100: "#E0ECDF",
          200: "#C2D9C1",
          300: "#98BD99",
          400: "#5E8C61",
          500: "#4B7E50",
          600: "#37643C",
          700: "#2C5031",
          800: "#254029",
          900: "#1F3522",
          950: "#111D13"
        },
        secondary: {
          50:  "#FBF7F1",
          100: "#F6EDDE",
          200: "#EBD8BD",
          300: "#DEBC93",
          400: "#D6A77A",
          500: "#C68149",
          600: "#B86D3E",
          700: "#995635",
          800: "#7B4631",
          900: "#643B2A",
          950: "#361D14"
        },
        success: {
          50:  "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          950: "#052E16"
        },
        info: {
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554"
        },
        error: {
          50:  "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A"
        },
        warning: {
          50:  "#FEFCE8",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
          950: "#422006"
        },
        Gray: {
          50:  "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#26262",
          900: "#171717",
          950: "#0A0A0A"
        },
        background: {
          BG: "#FEFFFE",
          white: "#FFFFFF",
          Black: "#000000",
        },
      },
      screens: {
        xs: '320px',
        mobile: '390px',   // Mobile: 390px and up
        tablet: '744px',   // Tablet: 744px and up
        desktop: '1440px', // Desktop: 1440px and up
        doublexl : '1920px'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} 