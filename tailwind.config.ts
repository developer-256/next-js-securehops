import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navGray: '#C7C7C7CC',
        newGray: '#f5f5f5',
        borderGray: '#C7C7C7',
        newDarkGray: '#888888',
        hoverGray: '#9B9B9B',
        hoverGreen: '#e2f5f2',
        newGreen: '#16B198',
        BanUndGrdGreen: "#16B198E5",
        regularText: '#333333'
      },
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif'], /*second one is for case when 1st is not supported*/
      },
    },
  },
  plugins: [],
}
export default config
