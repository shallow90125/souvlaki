import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
				mono: ['Noto Sans Mono', ...defaultTheme.fontFamily.mono]
			},
			animation: {
				gradient: 'gradient 60s linear infinite',
				'main-fade': 'main-fade 2s'
			},
			keyframes: {
				gradient: {
					to: { 'background-position': '600% center' }
				},
				'main-fade': {
					from: {
						opacity: 0
					},
					to: {
						opacity: 1
					}
				}
			}
		}
	},
	plugins: []
};
