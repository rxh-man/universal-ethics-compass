import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				// Apple-like system font stack
				'sans': [
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif'
				]
			},
			colors: {
				border: '#d9d3c7',
				input: '#ede8dd',
				ring: '#c7b78b',
				background: '#ede8dd',
				foreground: '#1a1a1a',
				primary: {
					DEFAULT: '#b8b3a7',
					foreground: '#1a1a1a'
				},
				secondary: {
					DEFAULT: '#e4e0d5',
					foreground: '#565249'
				},
				destructive: {
					DEFAULT: '#a45a46',
					foreground: '#fff'
				},
				muted: {
					DEFAULT: '#ece7df',
					foreground: '#746e68'
				},
				accent: {
					DEFAULT: '#f3ece1',
					foreground: '#444034'
				},
				popover: {
					DEFAULT: '#f6f3eb',
					foreground: '#363528'
				},
				card: {
					DEFAULT: '#f5f4ed',
					foreground: '#312c28'
				},
				sidebar: {
					DEFAULT: '#ece9e3',
					foreground: '#7a7a71',
					primary: '#b8b3a7',
					'primary-foreground': '#1a1a1a',
					accent: '#f7f5f2',
					'accent-foreground': '#2d624d',
					border: '#ebe6df',
					ring: '#c7b78b'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
