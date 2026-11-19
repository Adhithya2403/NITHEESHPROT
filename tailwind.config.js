/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        atelier: {
          ivory: '#F9F7F2',
          cream: '#F4EFE6',
          sand: '#E9E2D5',
          stone: '#D5CBBF',
          muted: '#8C857B',
          charcoal: '#1C1B19',
          obsidian: '#121211',
          black: '#0A0A09',
          olive: '#4D563E',
          deepOlive: '#343B2A',
          forest: '#263428',
          rust: '#9E4733',
          crimson: '#8C1D24',
          ochre: '#C1883F',
          camel: '#B58D67'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Didot', 'Bodoni MT', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Italiana"', '"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      letterSpacing: {
        'luxury': '0.25em',
        'haute': '0.35em'
      },
      aspectRatio: {
        'board': '16 / 9',
        'fashion': '4 / 5',
        'editorial': '3 / 4'
      }
    },
  },
  plugins: [],
}
