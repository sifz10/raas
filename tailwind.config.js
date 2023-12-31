module.exports = {
  content: ["./**/*.html", "./assets/js/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {

      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        66: "66%",
        88: "88%",
        70: "70%",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "5xl": "48px",
      },
      colors: {
        darkblue:{
          100: "#1E2F95",
        },
        darkblack:{
          300: "#747681",
          400: "#2A313C",
          500: "#23262B",
          600: "#1D1E24",
          700: "#151515",
        },
        success: {
          50: "#1E2F95",
          100: "#1E2F95",
          200: "#1E2F95",
          300: "#1E2F95",
          400: "#1E2F95",
        },
        warning: {
          100: "#1E2F95",
          200: "#1E2F95",
          300: "#1E2F95",
        },
        error: {
          50: "#FCDEDE",
          100: "#FF7171",
          200: "#FF4747",
          300: "#DD3333",
        },
        bgray: {
          50: "#FAFAFA",
          100: "#F7FAFC",
          200: "#EDF2F7",
          300: "#E2E8F0",
          400: "#CBD5E0",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          800: "#2D3748",
          900: "#1A202C",
        },
        orange: "#FF784B",
        bamber: {
          50: "#FFFBEB",
          100: "#FFC837",
          500: "#F6A723",
        },
        purple: "#936DFF",
      },
      backgroundImage: {
        'bgc-dark': "url('/assets/images/background/comming-soon-dark.svg')",
        'bgc-light': "url('/assets/images/background/coming-soon-bg.svg')",
        'notfound-dark': "url('/assets/images/background/404-dark.jpg')",
        'notfound-light': "url('/assets/images/background/404-bg.png')",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
