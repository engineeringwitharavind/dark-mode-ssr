import React from "react";
import Terser from "terser";

const colors = {
	text: {
		light: "hsl(222deg, 22%, 5%)",
		dark: "hsl(0deg, 0%, 100%)",
	},
	background: {
		light: "hsl(225deg, 25%, 95%)",
		dark: "hsl(210deg, 30%, 8%)",
	},
	"blurred-background": {
		light: "hsla(225deg, 0%, 100%, 0.85)",
		dark: "hsla(210deg, 30%, 8%, 0.85)",
	},
	"hero-background": {
		light: "hsl(184, 90%, 90%)",
		dark: `linear-gradient(
      0deg,
      hsla(184deg, 67%, 85%, 0.05),
      hsla(184deg, 67%, 85%, 0)
    )`,
	},
	primary: {
		light: "hsl(184deg, 100%, 25%)",
		dark: "hsl(184deg, 100%, 75%)",
	},
	secondary: {
		light: "hsl(333deg, 100%, 52%)",
		dark: "hsl(333deg, 100%, 52%)",
	},
	tertiary: {
		light: "hsl(53deg, 100%, 50%)",
		dark: "hsl(53deg, 100%, 50%)",
	},
	decorative: {
		light: "hsl(200deg, 75%, 65%)",
		dark: "hsl(200deg, 75%, 65%)",
	},
	black: {
		light: "hsl(0deg, 0%, 0%)",
		dark: "hsl(0deg, 0%, 0%)",
	},
	white: {
		light: "hsl(0deg, 100%, 100%)",
		dark: "hsl(0deg, 100%, 100%)",
	},
	gold: {
		light: "hsl(50deg, 100%, 50%)",
		dark: "hsl(50deg, 100%, 50%)",
	},
	success: {
		light: "hsl(160deg, 100%, 40%)",
		dark: "hsl(160deg, 100%, 40%)",
	},
	warning: {
		light: "hsl(37deg, 100%, 50%)",
		dark: "hsl(37deg, 100%, 50%)",
	},
	error: {
		light: "hsl(340deg, 95%, 50%)",
		dark: "hsl(340deg, 95%, 50%)",
	},
	gray300: {
		light: "hsl(0deg, 0%, 70%)",
		dark: "hsl(0deg, 0%, 30%)",
	},
	gray500: {
		light: "hsl(0deg, 0%, 50%)",
		dark: "hsl(0deg, 0%, 50%)",
	},
	gray700: {
		light: "hsl(0deg, 0%, 30%)",
		dark: "hsl(0deg, 0%, 70%)",
	},
};

function setColorsByTheme() {
	const mql = window.matchMedia("(prefers-color-scheme: dark)");
	const prefersDarkFromMQ = mql.matches;
	const persistedPreference = localStorage.getItem("color-mode");

	let colorMode = "light";

	const hasUsedToggle = typeof persistedPreference === "string";

	if (hasUsedToggle) {
		colorMode = persistedPreference;
	} else {
		colorMode = prefersDarkFromMQ ? "dark" : "light";
	}

	let root = document.documentElement;
	root.style.setProperty("--persisted-preference", colorMode);
	root.style.setProperty(
		"--color-text",
		colorMode === "light" ? "hsl(222deg, 22%, 5%)" : "hsl(0deg, 0%, 100%)"
	);
	root.style.setProperty(
		"--color-background",
		colorMode === "light" ? "hsl(225deg, 25%, 95%)" : "hsl(210deg, 30%, 8%)"
	);
	root.style.setProperty(
		"--color-blurred-background",
		colorMode === "light"
			? "hsla(225deg, 0%, 100%, 0.85)"
			: "hsla(210deg, 30%, 8%, 0.85)"
	);
	root.style.setProperty(
		"--color-hero-background",
		colorMode === "light"
			? "hsl(184, 90%, 90%)"
			: `linear-gradient(
      0deg,
      hsla(184deg, 67%, 85%, 0.05),
      hsla(184deg, 67%, 85%, 0)
    )`
	);
	root.style.setProperty(
		"--color-primary",
		colorMode === "light" ? "hsl(184deg, 100%, 25%)" : "hsl(184deg, 100%, 75%)"
	);
	root.style.setProperty(
		"--color-secondary",
		colorMode === "light" ? "hsl(333deg, 100%, 52%)" : "hsl(333deg, 100%, 52%)"
	);
	root.style.setProperty(
		"--color-tertiary",
		colorMode === "light" ? "hsl(53deg, 100%, 50%)" : "hsl(53deg, 100%, 50%)"
	);
	root.style.setProperty(
		"--color-decorative",
		colorMode === "light" ? "hsl(200deg, 75%, 65%)" : "hsl(200deg, 75%, 65%)"
	);
	root.style.setProperty(
		"--color-black",
		colorMode === "light" ? "hsl(0deg, 0%, 0%)" : "hsl(0deg, 0%, 0%)"
	);
	root.style.setProperty(
		"--color-white",
		colorMode === "light" ? "hsl(0deg, 100%, 100%)" : "hsl(0deg, 100%, 100%)"
	);
	root.style.setProperty(
		"--color-gold",
		colorMode === "light" ? "hsl(50deg, 100%, 50%)" : "hsl(50deg, 100%, 50%)"
	);
	root.style.setProperty(
		"--color-success",
		colorMode === "light" ? "hsl(160deg, 100%, 40%)" : "hsl(160deg, 100%, 40%)"
	);
	root.style.setProperty(
		"--color-warning",
		colorMode === "light" ? "hsl(37deg, 100%, 50%)" : "hsl(37deg, 100%, 50%)"
	);
	root.style.setProperty(
		"--color-error",
		colorMode === "light" ? "hsl(340deg, 95%, 50%)" : "hsl(340deg, 95%, 50%)"
	);
	root.style.setProperty(
		"--color-grey-300",
		colorMode === "light" ? "hsl(0deg, 0%, 70%)" : "hsl(0deg, 0%, 70%)"
	);
	root.style.setProperty(
		"--color-grey-500",
		colorMode === "light" ? "hsl(0deg, 0%, 50%)" : "hsl(0deg, 0%, 50%)"
	);
	root.style.setProperty(
		"--color-grey-700",
		colorMode === "light" ? "hsl(0deg, 0%, 30%)" : "hsl(0deg, 0%, 70%)"
	);
}

export const MagicScriptTag = () => {
	const boundFn = String(setColorsByTheme);

	let calledFunction = `(${boundFn})()`;
	calledFunction = Terser.minify(calledFunction).code;

	// eslint-disable-next-line react/no-danger
	return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const FallbackStyles = () => {
	const cssVariableString = Object.entries(colors).reduce(
		(acc, [name, colorByTheme]) => {
			return `${acc}\n--color-${name}: ${colorByTheme.dark};`;
		},
		""
	);

	const wrappedInSelector = `html { ${cssVariableString} }`;

	return <style>{wrappedInSelector}</style>;
};
