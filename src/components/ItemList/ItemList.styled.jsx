import styled from "styled-components";

export const ItemListStyled = styled.ul`
	list-style: none;
	row-gap: 1px;
	background-color: #e3e4f1;
	box-shadow: ${(props) =>
		props.theme.isDark
			? "0px 35px 50px -15px rgba(2, 2, 7, 0.5)"
			: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};

	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 4rem;
	max-height: 60vh;
	height: 100%;
	.listBlock {
		list-style: none;
		display: flex;
		flex-direction: column;
		row-gap: 1px;
		background-color: ${(props) =>
			props.theme.isDark ? "#393A4B" : "#e3e4f1"};
		box-shadow: ${(props) =>
			props.theme.isDark
				? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
				: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
		border-radius: 5px;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
	}
`;
