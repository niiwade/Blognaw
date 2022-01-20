module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')]
}