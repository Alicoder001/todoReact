import React from "react";
import useLocalContext from "../../hooks/useLocalContext";
import Categories from "../Categories/Categories";
import { ListFooterStyled } from "./ListFooter.styled";

const ListFooter = ({ count, data }) => {
	const { getLocal } = useLocalContext();
	return (
		<ListFooterStyled>
			<p className="countText">
				<span className="countNumber">{count} </span>items left
			</p>
			<Categories />
			<p
				onClick={() => {
					const newData = data.filter((item) => !item.selected);
					localStorage.setItem("data", JSON.stringify(newData));
					getLocal(JSON.parse(localStorage.getItem("data")));
				}}>
				Clear Completed
			</p>
		</ListFooterStyled>
	);
};

export default ListFooter;
