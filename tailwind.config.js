/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        display: ['Rubik', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      colors: {
        // Brand palette — warm industrial (stone + amber).
        // Existing components use `primary` and `accent`; we redefine those
        // tokens so the restyle propagates without renaming every class.
        primary: {
          DEFAULT: '#0c0a09', // stone-950 — used as dark surfaces
          light: '#1c1917',   // stone-900
        },
        accent: {
          DEFAULT: '#f59e0b', // amber-500 — welding spark
          hover: '#d97706',   // amber-600
        },
        // New semantic tokens (use in new components).
        ink: {
          950: '#0c0a09',
          900: '#1c1917',
          800: '#292524',
          700: '#44403c',
          500: '#78716c',
          300: '#d6d3d1',
          100: '#f5f5f4',
          50:  '#fafaf9',
        },
      },
    },
  },
  plugins: [],
}
