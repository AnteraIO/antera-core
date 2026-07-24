/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components_legacy/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fffaeb",
        surface: "#fdf8e6",
        brand: {
          orange: "#FA520F",
          cream: "#fffaeb",
          dark: "#1F1F1F",
          gray: {
            400: "#71717A",
            500: "#52525B",
            600: "#3F3F46",
            700: "#27272A",
            800: "#18181B",
            900: "#09090B",
          }
        },
        primary: {
          DEFAULT: "#FA520F",
          foreground: "#fffaeb",
        },
        border: "rgba(31, 31, 31, 0.1)",
      },
      fontFamily: {
        sans: ['var(--font-williwaw)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'Menlo', 'monospace'],
        serif: ['var(--font-instrument-serif)', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(250, 82, 15, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 82, 15, 0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      },
      animation: {
        marquee: 'marquee 70s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
