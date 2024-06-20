/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./index.vue",
  "./error.vue",
];
export const theme = {
  extend: {
    colors : {
      base: '#f9f9f9',
      primary: '#f7d3df',
      logo_text: '#edb9c0',
      text_default: '#575656',
      text_on_primary: '#333333'
    },
    fontFamily : {
      sans: ['Quicksand', 'sans-serif'],
    }
  },
};
export const plugins = [];