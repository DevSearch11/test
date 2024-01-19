/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",
    content: [
      "./src/**/*.{html,ts}",
      "./node_modules/flowbite/**/*.js"
    ],
    plugins: [
      require('flowbite/plugin')({
        charts: true,
    }),
    require('@tailwindcss/forms')
    ],
    theme: {
      }
  }
