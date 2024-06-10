/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#f6d7d4",
                background: "#fcf3e6",
                secondary: "#30312f",
                tertiary: "#f6ebd5",
            },
        },
    },
    plugins: [],
}