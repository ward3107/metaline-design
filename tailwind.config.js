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
        sans: ['Heebo', 'sans-serif'],
        display: ['Heebo', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      colors: {
        // Trellidor-inspired palette: confident royal blue + slate greys, with
        // a restrained gold as the single signature accent. Existing components
        // reference `primary` / `accent`, so redefining these tokens propagates
        // the restyle without renaming classes.
        primary: {
          DEFAULT: '#14223f', // deep navy — dark surfaces
          light: '#24346c',   // indigo-navy
        },
        accent: {
          DEFAULT: '#104f9a', // Trellidor royal blue — links, buttons, eyebrows
          hover: '#0d3f7c',   // darker blue on hover
        },
        // Signature gold accent (Trellidor CTA colour); use sparingly.
        gold: {
          DEFAULT: '#f7d538',
          hover: '#e9c21f',
        },
        sky: '#78aeef', // soft secondary blue
        // Semantic palette for new components. Aliased to `ink` so existing
        // ink-* classes from the previous iteration keep compiling, but the
        // color values are now slate.
        ink: {
          950: '#020617', // slate-950
          900: '#0f172a', // slate-900
          800: '#1e293b', // slate-800
          700: '#334155', // slate-700
          500: '#64748b', // slate-500
          400: '#94a3b8', // slate-400
          300: '#cbd5e1', // slate-300
          100: '#f1f5f9', // slate-100
          50:  '#f8fafc', // slate-50
        },
        steel: {
          DEFAULT: '#64748b',
          light: '#94a3b8',
          dark: '#475569',
        },
      },
    },
  },
  plugins: [],
}
