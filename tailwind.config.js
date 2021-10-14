module.exports = {
  purge: {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
   ],
   safeList: [
     /^bg-/,
     /^to-/,
     /^from-/,
   ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
