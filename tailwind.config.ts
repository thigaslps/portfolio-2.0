import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/view/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
        anton: ["Anton", "sans-serif"],
      },
      boxShadow: {
        custom: "0 5px 30px rgba(0, 0, 0, 0.30)",
      },
      colors: {
        GreyDarkerBgColor: "#3D3D3D",
        BgLightColor: "#FFFFFF",
        BgColorDark: "#0A0A0A",
        primary: {
          DEFAULT: "#1A1A1A",
        },
        secondary: {
          DEFAULT: "#1E1E1E",
        },
        generalText: "#F5A623",
        lightText: "#FFFFFF",
        middleGrayColor: "#DEDEDE",
        subtitleColor: "#B5B5B5",
      },
    },
  },
  plugins: [],
} satisfies Config;
