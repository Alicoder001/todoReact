import React from "react";
import useLocalContext from "../../hooks/useLocalContext";
import Item from "../Item/Item";
import ListFooter from "../ListFooter/ListFooter";
import { ItemListStyled } from "./ItemList.styled";
let count = null;
const ItemList = () => {
	const { data, filter } = useLocalContext();
	const countBig = data && data.length;
	const ItemType = () => {
		if (filter === "all") {
			count = data && data.length;
			return data.map((item) => {
				return <Item key={item.id} item={item} />;
			});
		} else if (filter === "active") {
			const newData = data.filter((item) => !item.selected);
			count = newData.length;
			return newData.map((item) => {
				return <Item key={item.id} item={item} />;
			});
		} else if (filter == "complete") {
			const newData = data.filter((item) => item.selected);
			count = newData.length;
			return newData.map((item) => {
				return <Item key={item.id} item={item} />;
			});
		}
	};
	return (
		<>
			{countBig !== 0 && (
				<ItemListStyled>
					<div className="listBlock">{data && ItemType()}</div>
					<ListFooter count={count} />
				</ItemListStyled>
			)}
		</>
	);
};

export default ItemList;
