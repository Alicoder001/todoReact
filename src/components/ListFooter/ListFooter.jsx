import React from "react";
import useLocalContext from "../../hooks/useLocalContext";
import Categories from "../Categories/Categories";
import { ListFooterStyled } from "./ListFooter.styled";

const ListFooter = ({ count }) => {
	const { getLocal } = useLocalContext();
	return (
		<ListFooterStyled>
			<p className="countText">
				<span className="countNumber">{count} </span>items left
			</p>
			<Categories />
			<p
				onClick={() => {
					localStorage.clear();
					getLocal();
				}}>
				Clear Completed
			</p>
		</ListFooterStyled>
	);
};

export default ListFooter;
