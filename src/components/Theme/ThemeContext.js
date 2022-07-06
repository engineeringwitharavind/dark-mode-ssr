import React from "react";
import GlobalStyles from "./GlobalStyles";
import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from "./colors";

export const getInitialColorMode = () => {
	const persistedColorPreference = window.localStorage.getItem(COLOR_MODE_KEY);
	const hasPersistedPreference = typeof persistedColorPreference === "string";

	if (hasPersistedPreference) {
		return persistedColorPreference;
	}

	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	const hasMediaQueryPreference = typeof mediaQuery.matches === "boolean";

	if (hasMediaQueryPreference) {
		return mediaQuery.matches ? "dark" : "light";
	}

	return "light";
};

export const ThemeContext = React.createContext(getInitialColorMode);

export const ThemeProvider = ({ children }) => {
	const [colorMode, rawSetColorMode] = React.useState(undefined);

	React.useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue(
			INITIAL_COLOR_MODE_CSS_PROP
		);
		rawSetColorMode(initialColorValue);
	}, []);

	const contextValue = React.useMemo(() => {
		function setColorMode(newValue) {
			const root = window.document.documentElement;
			localStorage.setItem(COLOR_MODE_KEY, newValue);

			Object.entries(COLORS).forEach(([name, colorByTheme]) => {
				const cssVarName = `--color-${name}`;

				root.style.setProperty(cssVarName, colorByTheme[newValue]);
			});

			rawSetColorMode(newValue);
		}

		return {
			colorMode,
			setColorMode,
		};
	}, [colorMode, rawSetColorMode]);

	return (
		<ThemeContext.Provider value={contextValue}>
			<GlobalStyles />
			{children}
		</ThemeContext.Provider>
	);
};
