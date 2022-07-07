import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../components/Theme/ThemeContext";

const Home = () => {
	const { colorMode, setColorMode } = React.useContext(ThemeContext);

	return (
		<Wrapper>
			<Toggle>
				<label>
					<input
						type="checkbox"
						checked={colorMode === "dark"}
						onChange={(ev) => {
							setColorMode(ev.target.checked ? "dark" : "light");
						}}
					/>
					Dark
				</label>
			</Toggle>
			<Text>
				Next.js <HighLightedText>theming</HighLightedText> with server-side
				rendering.
			</Text>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	gap: 1rem;
`;

const Toggle = styled.button`
	background: none;
	border: none;
	color: inherit;
`;

const Text = styled.h1`
	color: var(--color-text);
	font-size: 1.3rem;
	font-weight: 600;
`;

const HighLightedText = styled.span`
	color: var(--color-secondary);
	font-size: 1.3rem;
	font-weight: 600;
`;

export default Home;
