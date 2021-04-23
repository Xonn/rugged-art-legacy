module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        greyDarker: 'var(--color-grey-darker)',
        greyDark: 'var(--color-grey-dark)',
        grey: 'var(--color-grey)',
        greyLight: 'var(--color-grey-light)',
        greyLighter: 'var(--color-grey-lighter)',
      },
      fontFamily: {
        openSans: ['OpenSans'],
        bebas: ['Bebas'],
        minion: ['Minion'],
        futura: ['Futura'],
      }
    },
  },
  variants: {
    extend: {
      display: ['dark', 'responsive']
    },
  },
  plugins: [],
}
