import "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {}
	interface ThemeOptions {}

	interface PaletteOptions {
		custom?: any;
	}
	interface Palette {
		custom?: any;
	}
}
