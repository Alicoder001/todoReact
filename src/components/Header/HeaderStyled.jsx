import React from "react";
import styled from "styled-components";
import bg from "../../images/Bitmap.png";
export const HeaderStyled = styled.header`
	height: 300px;
	padding-top: 7rem;
	background: url(${bg}),
		${(props) =>
			props.theme.isDark
				?  "linear-gradient(10deg, #040e20 50%, #070309 100%)"
				: "linear-gradient(225deg, #5596ff 0%, #ac2deb 100%)"};

	background-repeat: no-repeat;
	background-size: cover;
`;
