export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      _sm: { max: "1023px" },
      _md: { min: "600px" },
    },
    extend: {
      backgroundImage: {
        'page-on': "url('@/assets/image/pageOn.svg')",
        'page-off': "url('@/assets/image/pageOff.svg')",
      },
      colors: {
        blueColor: '#242771',
        textBlackColor: '#111111',
        textGrayColor: '#767676',
        textGray2Color: '#808080',
        textRedColor: '#E53939',
        textBrownColor: '#E53939',
        textDarkLiverColor: '#E53939',
        bgColor: `#F4EFE9`
      },
      fontSize: {
        fz1: "4.8rem",
        fz2: "3.2rem",
        fz3: "2.4rem",
      },
    },
  },
  plugins: [],
}
