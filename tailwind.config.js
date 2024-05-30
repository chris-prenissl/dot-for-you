/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./app.vue",
  "./error.vue",
];
export const theme = {
  extend: {
    colors : {
      primary: '#f7d3df',
      logo_text: '#edb9c0',
      text_default: '#575656'
    },
  },
};
export const plugins = [];