module.exports = {
  darkMode: 'class',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        colorDesfoque: 'rgba(19, 19, 31, 0.637)',
        colorPiscina: 'rgb(40, 148, 236)',
        colorAzulEscuro:'rgb(19, 19, 31)',
        colorDark:' #506182',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '22ch' },
        },
        blinking: {
          '0%, 100%': { borderColor: 'rgb(40, 148, 236)' },
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        typing: 'typing 3s steps(22) forwards',
        blinking: 'blinking 1s step-end infinite',
      },
    },
  },
  plugins: [],
};