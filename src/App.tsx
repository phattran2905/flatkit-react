import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { useMemo } from "react";
import { useAppSelector } from "./hooks";
import { themeSettings } from "./theme";

function App() {
	const mode = useAppSelector((state) => state.global.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div className="app">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<button>Click here</button>
			</ThemeProvider>
		</div>
	);
}

export default App;
