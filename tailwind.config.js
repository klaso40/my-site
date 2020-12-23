module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#f05454',
        secondary: '#30475e',
        textColor: '#433D3C',
        bgColor: '#E8E8E8',
      },
      fontFamily: {
        Montserrat: 'Montserrat',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
