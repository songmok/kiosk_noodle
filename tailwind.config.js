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
      colors: {
        mainColor: '#005F73',
        mainLightColor: '#94D2BD',
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
