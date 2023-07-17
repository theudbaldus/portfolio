/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                "darkBg": "#111111"
            },
            backgroundImage: {
                "noise": "url('/assets/noise.png')"
            },
            keyframes: {
                blobRotate: {
                    'from': {
                        'rotate': '0deg',
                    },
                    '50%': {
                        'scale': '1 1.1',
                    },
                    'to': {
                        'rotate': '360deg',
                    },
                },
                blobEnlarge: {
                    'from': {
                        'scale': '1 1',
                    },
                    '50%': {
                        'scale': '1.2 1'
                    },
                    'to': {
                        'scale': '1 1'
                    }
                }
            },
            animation: {
                'blobSpin': 'blobRotate 20s infinite',
                'blobGrow': 'blobEnlarge 10s infinite'
            },
        },
    },
    plugins: [],
}
