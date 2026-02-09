/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-blue-dark': '#0A607E',
                'primary-blue-light': '#2B8AAF',
                'teal-blue': '#2186AB',
                'warning-green': '#A9CF73',
                'warning-green-dark': '#8AB860',
                'dark-blue': '#1A3A5C',
                'primary-bg': '#0D4A63',
                'white': '#FFFFFF',
                'grey-100': '#F5F7FA',
                'grey-500': '#9CA3AF',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                geist: ['Space Mono', 'monospace'],
                'geist-mono': ['Space Mono', 'monospace'],
                'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
                display: ['Raleway', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1.5rem',
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out',
                'infinite-scroll': 'infinite-scroll 80s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                shimmer: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                }
            },
        },
    },
    plugins: [],
}
