import styled from "styled-components";

export const CategoriesStyled = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1.8rem;
	width: 100%;
	padding-left: 9.6rem;
	padding-right: 5.6rem;
	max-width: 31.8rem;
	.category-text {
		font-weight: 700;
		&:hover {
			cursor: pointer;
			color: #3a7cfd;
		}
	}
`;
