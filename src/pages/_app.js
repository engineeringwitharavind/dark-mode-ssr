import React from "react";
import { ThemeProvider } from "../components/Theme/ThemeContext";

export default function App({ Component, pageProps }) {
	const [hasMounted, setHasMounted] = React.useState(false);

	React.useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<>
			<ThemeProvider>
				{hasMounted && <Component {...pageProps} />}
			</ThemeProvider>
		</>
	);
}
