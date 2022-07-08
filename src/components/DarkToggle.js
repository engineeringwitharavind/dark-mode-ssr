import React from "react";
import { ThemeContext } from "./Theme/ThemeContext";

const DarkToggle = () => {
	const { setColorMode } = React.useContext(ThemeContext);
	const theme = localStorage.getItem("color-mode");

	if (!theme) {
		return null;
	}

	return (
		<label>
			<input
				type="checkbox"
				checked={theme === "dark"}
				onChange={(ev) => {
					setColorMode(ev.target.checked ? "dark" : "light");
				}}
			/>{" "}
			Dark
		</label>
	);
};

export default DarkToggle;
