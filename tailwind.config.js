const colors = {
    black: '#0C103A',
    orange: '#F36437',
    grey: '#F3F1EF',
}

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors,
            backgroundColors: colors,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
