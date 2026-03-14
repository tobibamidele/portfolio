/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                geist: ['Geist', 'sans-serif'],
            },
            colors: {
                'card-border': '#808080',
                'muted': '#808080',
                'btn-bg': '#d9d9d9',
            },
            borderRadius: {
                'card': '16px',
                'btn': '32px',
                'tag': '10px',
            },
        },
    },
    plugins: [],
}
