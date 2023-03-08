import styled from "styled-components";
import regularWoff from "../fonts/josefin-sans-v25-latin-regular.woff";
import regularWoff2 from "../fonts/josefin-sans-v25-latin-regular.woff2";
import boldWoff from "../fonts/josefin-sans-v25-latin-700.woff";
import boldWoff2 from "../fonts/josefin-sans-v25-latin-700.woff2";
export const GloabalStyle = styled.div`
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
	}
	font-family: "Josefin Sans";
	background-color: #f2f2f2;
	font-size: 1.8rem;
	line-height: 1;
`;
