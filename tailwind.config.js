/** @type {import('tailwindcss').Config} */
module.exports = {
  //...
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "blue",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
}