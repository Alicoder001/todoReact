import styled from "styled-components";

export const FormStyled = styled.form`
	.form_block {
		box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
		margin-top: -142px;
		margin-bottom: 1.2rem;
		border-radius: 5px;
		height: 64px;
		display: flex;
		align-items: center;
		background-color: ${(props) =>
			props.theme.isDark ? "#25273D" : "white"};
		padding: 2.3rem 7.2rem;
	}
	.error {
		color: red;
		margin-bottom: 1.2rem;
	}
	.form_input {
		font-family: "Josefin Sans";
		font-weight: 400;
		font-size: 1.8rem;
		line-height: 1.8rem;
		border: none;
		color: ${(props) => (props.theme.isDark ? "#aaacbc" : "#494C6B")};
		background-color: ${(props) =>
			props.theme.isDark ? "#25273D" : "white"};
		&::placeholder {
			font-family: "Josefin Sans";
		}
		&:focus {
			outline: none;
		}
	}
`;
