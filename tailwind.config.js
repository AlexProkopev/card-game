/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
         keyframes: {
        explode: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '30%': { transform: 'scale(1.3) rotate(15deg)', opacity: '1' },
          '100%': { transform: 'scale(0) rotate(720deg)', opacity: '0' },
        },
        shardFly: {
          '0%': { transform: 'translate3d(0,0,0) rotate(0deg)', opacity: '1' },
          '100%': {
            transform: 'translate3d(var(--x), var(--y), var(--z)) rotate(var(--rot))',
            opacity: '0',
          },
        },
      },
      animation: {
        explode: 'explode 1.5s ease-out forwards',
        shardFly: 'shardFly 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}