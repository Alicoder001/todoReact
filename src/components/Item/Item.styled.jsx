import styled from "styled-components";

export const ItemStyled = styled.li`
	height: 64px;
	background-color: ${(props) => (props.theme.isDark ? "#25273D" : "white")};
	width: 100%;
	display: flex;
	align-items: center;
	padding: 2.4rem 2rem;
	position: relative;

	.time {
		font-size: 1.3rem;

		position: absolute;
		right: 8rem;
		bottom: 0.1rem;
		color: ${(props) => (!props.theme.isDark ? " #0d0d56" : "#7b7bf1")};
	}
	.year {
		margin-left: 30px;
	}
	.checkIcon {
		margin-right: 2.4rem;
		&:hover {
			cursor: pointer;
			scale: 1.03;
			transition: 0.3s;
		}
	}
	.oval {
		width: 2.4rem;
		height: 2.4rem;
		border: 1px solid #959090;
		border-radius: 50%;
		margin-right: 2.4rem;
		margin-bottom: 0.5rem;
		&:hover {
			cursor: pointer;
			scale: 1.03;
			transition: 0.3s;
		}
	}
	.checkBLock {
	}
	.item-text {
		font-size: 1.8rem;
		line-height: 1;
		width: 100%;
		transition: 0.4s;
	}
	.penIcon {
		margin-right: 4rem;
		color: #c58d26;
	}
	.trashIcon {
		color: #a00d0d;
	}

	i {
		opacity: 0.5;
		transition: 0.3s;
		scale: 1.2;
		&:hover {
			cursor: pointer;
			opacity: 1;
		}
	}
	.selected {
		text-decoration-line: line-through;
		opacity: 0.5;
	}
`;
