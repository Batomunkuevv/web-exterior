import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            lg: {
                max: "1439px",
            },
            md: {
                max: "1279px",
            },
            tb: {
                max: "1023px",
            },
            sm: {
                max: "767px",
            },
            s: {
                max: "479px",
            },
            xs: {
                max: "359px",
            },
        },
        extend: {
            colors: {
                black: "var(--general-black)",
                yellow: "var(--general-yellow)",
                blue: "var(--general-blue)",
                "floor-panel": "var(--panel-background)",
                overlay: "var(--overlay-background)",
                apartament: "var(--apartament)",
                "apartament-active": "var(--apartament-active)",
            },
            boxShadow: {
                button: "0 4px 4px var(--shadow-button-color)",
            },
            fill: {
                blue: "var(--general-blue)",
            },
        },
        fontFamily: {
            inter: "var(--font-inter)",
        },
    },
    plugins: [],
};
export default config;
