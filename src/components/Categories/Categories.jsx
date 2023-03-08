import React from "react";
import useLocalContext from "../../hooks/useLocalContext";
import { CategoriesStyled } from "./Categories.style";

const Categories = () => {
	const { filterF } = useLocalContext();
	return (
		<CategoriesStyled>
			<p
				onClick={() => {
					filterF("all");
				}}
				className="category-text">
				All
			</p>
			<p
				onClick={() => {
					filterF("active");
				}}
				className="category-text">
				Active
			</p>
			<p
				onClick={() => {
					filterF("complete");
				}}
				className="category-text">
				Complete
			</p>
		</CategoriesStyled>
	);
};

export default Categories;
