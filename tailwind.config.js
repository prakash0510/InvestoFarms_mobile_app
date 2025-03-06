// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/*/.{html,ts}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         'smallphone': {'max': '375px'},
//       } 
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'smallphone': {'max': '375px'},
      } 
    },
  },
  plugins: [],
}