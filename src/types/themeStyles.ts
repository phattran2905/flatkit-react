declare module "@mui/material/styles" {
	interface Theme {}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		custom?: {
			color?: any;
			bgColor?: any;
		};
	}
}
