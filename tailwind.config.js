module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        xxsmall: "380px",
        xsmall: "512px",
        uxsmall: "768px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      colors: {
        theme: {
          light: "#F4EADF",
          DEFAULT: "#D3B9A2",
          dark: "#232323",
        },
        bg: {
          light: "#FFF",
          DEFAULT: "#F1F1F0",
          dark: "#EBEBEA",
        },
        typography: {
          light: "#9C9C9C",
          DEFAULT: "#303030",
          dark: "#111111",
        },
        icons: {
          light: "#BFBFBF",
          dark: "#A8A9A5",
        },
      },
    },
  },
  plugins: [],
}
