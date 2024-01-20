/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    options: {
      safelist: [
        'bg-red-50', 'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900',
        'bg-green-50', 'bg-green-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900'
      ],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}