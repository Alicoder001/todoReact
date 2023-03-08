import styled from "styled-components";
import regularWoff from "../fonts/josefin-sans-v25-latin-regular.woff";
import regularWoff2 from "../fonts/josefin-sans-v25-latin-regular.woff2";
import boldWoff from "../fonts/josefin-sans-v25-latin-700.woff";
import boldWoff2 from "../fonts/josefin-sans-v25-latin-700.woff2";

export const GloabalStyle = styled.div`
	transition: 0.5s;
	/* Firefox */
	* {
		scrollbar-width: auto;
		scrollbar-color: #0b5ed7 #ffffff;
	}

	/* Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: 16px;
	}

	*::-webkit-scrollbar-track {
		background: ${(props) => (props.theme.isDark ? "#1d1b32" : "#f2f2f2")};
	}

	*::-webkit-scrollbar-thumb {
		background-color: #0b5ed7;
		border-radius: 10px;
		border: 3px solid #ffffff;
	}
	/* josefin-sans-regular - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: "Josefin Sans";
		font-style: normal;
		font-weight: 400;
		src: url(${regularWoff2}) format("woff2"),
			/* Chrome 36+, Opera 23+, Firefox 39+ */ url(${regularWoff})
				format("woff"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: "Josefin Sans";
		font-style: normal;
		font-weight: 700;
		src: url(${boldWoff2}) format("woff2"),
			/* Chrome 36+, Opera 23+, Firefox 39+ */ url(${boldWoff})
				format("woff"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	.container {
		max-width: 600px;
		width: 100%;
		margin: 0 auto;
		padding: 0 30px;
	}
	main {
		padding-bottom: 4rem;
		width: 100%;
		min-height: 100vh;
		height: 100%;
	}
	font-family: "Josefin Sans";
	background-color: ${(props) =>
		props.theme.isDark ? "#03001C" : "#f2f2f2"};
	color: ${(props) => (props.theme.isDark ? "#aaacbc" : "#494C6B")};
	font-size: 1.8rem;
	line-height: 1;
`;
