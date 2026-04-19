/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#FFF3EC',
          100: '#FFE2CC',
          200: '#FFC49A',
          400: '#FF8A45',
          500: '#FF6E18',
          600: '#FF6019',
          700: '#E04E08',
        },
        charcoal: {
          400: '#5A5A5A',
          500: '#383838',
          600: '#2A2A2A',
          700: '#1A1A1A',
        },
        warm: {
          50:  '#FFFAF7',
          100: '#FFF3EC',
        },
      },
      fontFamily: {
        sans:    ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'brand': '0 4px 24px -4px rgba(255, 110, 24, 0.35)',
        'brand-lg': '0 8px 40px -8px rgba(255, 110, 24, 0.45)',
      },
    },
  },
  plugins: [],
}
