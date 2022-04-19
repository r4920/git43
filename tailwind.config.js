module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_700: "#595959",
        gray_400: "#c4c4c4",
        gray_500: "#8f8f8f",
        deep_purple_100_4f: "#ccc9ff4f",
        gray_500_2b: "#a1a1a12b",
        deep_purple_100: "#ccc9ff",
        gray_300: "#e3e3e3",
        gray_50: "#fafafa",
        gray_100: "#f2f5f5",
        indigo_400_85: "#6663db85",
        indigo_400: "#6663db",
        gray_500_40: "#91919140",
        black_900: "#0a0a0a",
        gray_500_21: "#9c9c9c21",
        bluegray_400: "#8c8c8c",
        gray_900_0a: "#1414140a",
        black_901: "#000000",
        deep_purple_100_5c: "#ccc9ff5c",
        white_A700: "#ffffff",
        indigo_600: "#242ed1",
      },
      borderWidth: { bw5: "5px" },
      boxShadow: {
        bs3: "0px 2px  4px 0px #a1a1a12b",
        bs: "0px 4px  100px 0px #ccc9ff5c",
        bs1: "0px 6px  100px 0px #ccc9ff4f",
        bs4: "0px 2px  4px 0px #9c9c9c21",
        bs6: "0px 2px  10px 0px #6663db85",
        bs2: "0px -2px  8px 0px #1414140a",
        bs5: "0px 2px  10px 0px #91919140",
      },
      borderRadius: {
        radius6: "6px",
        radius8: "8px",
        radius12: "12px",
        radius16: "16px",
        radius20: "20px",
        radius32: "32px",
        radius48: "48px",
        radius50: "50%",
        radius100: "100px",
        radius17495: "17.495px",
      },
      fontSize: {
        fs5: "5px",
        fs6: "6px",
        fs7: "7px",
        fs8: "8px",
        fs9: "9px",
        fs10: "10px",
        fs11: "11px",
        fs12: "12px",
        fs13: "13px",
        fs14: "14px",
        fs15: "15px",
        fs16: "16px",
        fs18: "18px",
        fs20: "20px",
      },
      lineHeight: {
        lh9: "9px",
        lh10: "10px",
        lh12: "12px",
        lh14: "14px",
        lh1600: "16.00px",
      },
      fontFamily: { inter: "Inter", koho: "KoHo" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
