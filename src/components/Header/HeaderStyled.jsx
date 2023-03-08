import React from "react";
import styled from "styled-components";
import bg from "../../images/Bitmap.png";
import bgDark from "../../images/BitmapDark.jpg";
export const HeaderStyled = styled.header`
	height: 300px;
	padding-top: 7rem;
	background: ${(props) =>
			props.theme.isDark ? `url(${bgDark})` : `url(${bg})`},
		${(props) =>
			props.theme.isDark
				? "linear-gradient(10deg, #040e20 0%, #070309 0%)"
				: "linear-gradient(225deg, #5596ff 0%, #ac2deb 100%)"};

	background-repeat: no-repeat;
	background-size: cover;
`;
