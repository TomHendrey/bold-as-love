/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)', 'sans-serif'], // Default text
                orbitron: ['var(--font-orbitron)', 'sans-serif'], // Nice 80's
                caveat: ['var(--font-caveat)', 'cursive'], // Thin clean 80s
                kalam: ['var(--font-kalam)', 'cursive'], // Thin clean 80s
                courgette: ['var(--font-courgette)', 'cursive'], // 60's
                'mr-dafoe': ['var(--font-mr-dafoe)', 'cursive'], // Slanted 80s
                'russo-one': ['var(--font-russo-one)', 'sans-serif'], // Nice Elegant thick 80's
                'press-start': ['var(--font-press-start)', 'cursive'], // Arcade style
                'share-tech-mono': ['var(--font-share-tech-mono)', 'monospace'], // Nice 80's mono spaced
                audiowide: ['var(--font-audiowide)', 'display'], // Elegant 80s Art Deco style

                // Locally saved downloaded fonts
                brat: ['Brat', 'sans-serif'],
                'dead-stock': ['Dead-Stock', 'sans-serif'],
                'flash-back': ['Flash-Back', 'sans-serif'],
                indelible: ['Indelible', 'sans-serif'],
                'last-feast': ['Last-Feast', 'sans-serif'],
                streamster: ['Streamster', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
