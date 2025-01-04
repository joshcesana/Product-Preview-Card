/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "dark-cyan": "#3c8067",
                "very-dark-cyan": "#1A4032",
                cream: "#f2ebe3",
                "dark-blue": "#1c232b",
                "gray-blue": "#6c7289",
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                fraunces: ["Fraunces", "serif"],
            },
        },
    },
    plugins: [],
}
