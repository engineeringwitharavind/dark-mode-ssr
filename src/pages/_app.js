import React from "react";
import { ThemeProvider } from "../components/Theme/ThemeContext";

export default function App({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
