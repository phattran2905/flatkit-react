import "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {}
	interface ThemeOptions {}

	interface PaletteOptions {
		white?: any;
		warn?: any;
		dark?: any;
		black?: any;
	}
}
