export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                streamTheme: {
                    "primary": "#E50914",
                    "secondary": "#ffffff",
                    "accent": "#bfbfbf",
                    "neutral": "#000000",
                    "base-100": "#141414",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
            "dark",
        ],
    },
}
