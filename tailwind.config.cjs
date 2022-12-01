module.exports = {
  content: [
    "./src/*.vue",
    "./src/components/*.vue"
    ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        slg: "978px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        border: "hsl(0, 0%, 1%)",
        nav: "hsla(0, 0%, 10%, 0.95)",
        background: "hsl(0, 0%, 10%)",
        card: "hsl(0, 0%, 12%)",
        button: "hsl(0, 0%, 15%)",
        content: "hsl(0, 0%, 60%)",
        text: "hsl(0, 0%, 65%)",
      },
      fontFamily: {
        normal: ["MonoLisa", "Source Code Pro", "sans-serif"],
        bold: ["MonoLisaBold", "Source Code Pro", "serif"],
      },
    },
  },
}
