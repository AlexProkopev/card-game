/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        explode: {
          "0%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
          "30%": { transform: "scale(1.3) rotate(15deg)", opacity: "1" },
          "100%": { transform: "scale(0) rotate(720deg)", opacity: "0" },
        },
        shardFly: {
          "0%": { transform: "translate3d(0,0,0) rotate(0deg)", opacity: "1" },
          "100%": {
            transform:
              "translate3d(var(--x), var(--y), var(--z)) rotate(var(--rot))",
            opacity: "0",
          },
        },
         coinFlyUp: {
          '0%': {
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
            opacity: '1',
          },
          '30%': {
            transform: 'translate(calc(var(--dx) * 0.3), calc(var(--dy) * 0.3)) scale(1.2) rotate(calc(var(--rot) * 0.3))',
            opacity: '1',
          },
          '70%': {
            transform: 'translate(calc(var(--dx) * 0.7), calc(var(--dy) * 0.7)) scale(1) rotate(calc(var(--rot) * 0.7))',
            opacity: '1',
          },
          '100%': {
            transform: 'translate(var(--dx), var(--dy)) scale(0.8) rotate(var(--rot))',
            opacity: '0',
          },
        },
      },
      animation: {
        explode: "explode 1.5s ease-out forwards",
        shardFly: "shardFly 1s ease-out forwards",
       coinFlyUp: 'coinFlyUp 1.8s ease-out forwards'
      },
    },
  },
  plugins: [],
};
