import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    color: var(--color-text);
    background: var(--color-background);
    accent-color: var(--color-secondary);
    line-height: 1.5;
  	text-rendering: optimizeSpeed;
	  -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  #root,
  #__next,
  .App {
    height: 100%;
    min-width: 300px;
    font-family: "Gill Sans", "Gill Sans MT", sans-serif;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  ul,
  ol {
    list-style: none;
  }

  a,
  a:hover,
  a:active,
  a:focus {
    text-decoration: none;
    font: inherit;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  @media (prefers-reduced-motion: reduce) {
	*,
	*::before,
	*::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}
`;

export default GlobalStyles;
