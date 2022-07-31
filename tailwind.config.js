module.exports = {
	content: ["./src/components/**/*.{js,jsx}", "./src/screens/**/*.{js,jsx}"],
	layers: ["base", "utilities"],

	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: { DEFAULT: "#01b193", dark: "#0b7670", light: "#e1fdf8" },
				secondary: { DEFAULT: "#d9dd28" },
				warning: { DEFAULT: "#fb8903", light: "#fff0ca" },
				danger: { DEFAULT: "#ff0000", light: "#ffebeb" },
				success: { DEFAULT: "#5cb85c", light: "#ecffef" },
				gray: {
					dark: "#464646",
					DEFAULT: "#3c4858",
					medium: "#818181",
					light: "#b7b7b7",
					lightest: "#F4F4F4"
				}
			},

			fontSize: {
				xs: ["0.75rem", "1rem"], //12,16
				sm: ["0.8125rem", "1.125rem"], //13,18
				base: ["0.875rem", "1.25rem"], //14,20
				md: ["1rem", "1.375rem"] //16,22
			},

			spacing: {
				12.5: "3.125rem"
			},
			zIndex: {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				6: 6,
				7: 7,
				8: 8,
				9: 9,
				10: 10,
				20: 20,
				25: 25,
				30: 30,
				40: 40,
				50: 50,
				75: 75,
				80: 80,
				90: 90,
				100: 100,
				auto: "auto"
			}
		}
	},
	plugins: []
};
