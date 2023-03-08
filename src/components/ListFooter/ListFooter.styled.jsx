import styled from "styled-components";

export const ListFooterStyled = styled.div`
	background-color: ${(props) => (props.theme.isDark ? "#25273D" : "white")};
	width: 100%;
	height: 5rem;
	display: flex;
	align-items: center;
	padding: 2.4rem 1.6rem;
	font-size: 1.4rem;
	color: #9495a5;
	.countText {
		line-height: -0.19px;
	}
	p {
		&:hover {
			cursor: pointer;
			color: black;
		}
	}
`;
