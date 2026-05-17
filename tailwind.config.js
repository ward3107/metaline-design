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
        // Cold-steel palette. Slate neutrals + steel-blue accent — reads as
        // a serious metalwork ("מסגריה") shop, not a warm interiors brand.
        // Existing components use `primary` and `accent`; we redefine those
        // tokens so the restyle propagates without renaming every class.
        primary: {
          DEFAULT: '#0f172a', // slate-900 — page surface dark
          light: '#1e293b',   // slate-800
        },
        accent: {
          DEFAULT: '#3b82f6', // blue-500 — steel-blue accent
          hover: '#2563eb',   // blue-600
        },
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
