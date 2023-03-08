import styled from "styled-components";

const Navbarr = styled.nav`
	.nav_container {
		display: flex;
		justify-content: space-between;
	}
	.mode {
		height: 100%;
		&:hover {
			cursor: pointer;
		}
	}
	img {
		margin-bottom: 10px;
	}
	.title {
		color: white;
		font-size: 4rem;
		font-family: "Josefin Sans";
		font-weight: 700;
		font-family: "Josefin Sans";
	}
`;
export { Navbarr };
