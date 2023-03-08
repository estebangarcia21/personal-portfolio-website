const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				softwhite: '#eaeaea',
				...colors
			},
			fontFamily: {
				sans: ['"Sora"', 'sans-serif'],
				body: ['"Karla"', 'sans-serif'],
				mono: ['"Jetbrains Mono", mono']
			}
		}
	},
	plugins: []
};
