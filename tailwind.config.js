/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages_0/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        yellow: '#F5E8A7',
        pink: '#FFF7FF',
        buttonPink: '#F89BEF',
        buttonColor: '#2C2F2F',
        red_button: '#FE5E5E',
        green_color: '#06AA16',
        gray_color: '#888D8D',
        green_open_color:'#A7F7A5'
      },
      fontFamily: {
        DM: ['DM Sans', 'san-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
