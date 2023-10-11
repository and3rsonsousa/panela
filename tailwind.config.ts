import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				pa: "#F5C223",
				nela: "#0E1415",
			},
		},
	},
	plugins: [],
} satisfies Config;
