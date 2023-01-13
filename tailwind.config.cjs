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
				mono: "'Jetbrains Mono', monospace"
			}
		}
	},
	plugins: []
};
