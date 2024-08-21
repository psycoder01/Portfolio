/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "light": {
                    "background": "#FBF1C9",
                    "foreground": "#3C3836",
                    "yellow": "#D79921",
                    "green": "#98971A",
                    "gray": "#7C6F64",
                    "blue": "#458588",
                    "red": "#CA2124"
                },
                "dark": {
                    "background": "#1c1c1c",
                    "foreground": "#EBDBB2",
                    "yellow": "#D79921",
                    "green": "#98971A",
                    "gray": "#A89984",
                    "blue": "#458588",
                    "red": "#CA2124"
                },
            }
        },
    },
    plugins: [],
}
