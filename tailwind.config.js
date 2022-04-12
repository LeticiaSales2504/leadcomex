module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2x1': '1.5rem',
      '3x1': '1.875rem',
      '4x1': '2.25rem',
      '5x1': '3rem',
      '6x1': '4rem',
      '7x1': '5rem'
    },
    textColor: {
      white: "#FFF", 
      black: "#000",
      green: '#3e9c38',
      slate: '#363636',
      blue:  '#1d3163'
    },
    colors: {
      green: '#3e9c38',
      slate: '#ebeceb',
      white: "#FFF",
      gray: "#989898",
      black: "#000",
      blue:  '#1d3163',
      darkblue: '#182b49'
    },
    backgroundImage : {
      section0: "url('/background-01.png')",
      section1: "url('/background-02.png')",
      section3: "url('/background-03.png')",
    },
    fontFamily: {
      montSerratMedium: ["MontSerrat-Medium"],
      montSerratBlack: ["MontSerrat-Black"],
      montSerratRegular: ["MontSerrat-Regular"],
      montSerratBold: ["montSerrat-Bold"],
      montSerratBoldItalic: ["montSerrat-BoldItalic"]
    },
  },
  plugins: [],
}
