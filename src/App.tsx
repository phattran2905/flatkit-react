import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { useAppSelector } from "./hooks";
import { themeSettings } from "./theme";
import Layout from "./scences/layout";
import Dashboard from "./scences/dashboard";

function App() {
	const mode = useAppSelector((state) => state.global.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route element={<Layout />}>
							<Route
								path="/"
								element={
									<Navigate
										to="/dashboard"
										replace
									/>
								}
							/>
							<Route
								path="/dashboard"
								element={<Dashboard />}
							/>
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
