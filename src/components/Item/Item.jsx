import React from "react";
import { ItemStyled } from "./Item.styled";
import checkOff from "../../images/checkoff.svg";
import checkOn from "../../images/checkOn.svg";
import useLocalContext from "../../hooks/useLocalContext";
const Item = ({ item }) => {
	const { selected, getLocal, deleteF, itemText } = useLocalContext();

	console.log(item);
	return (
		<ItemStyled>
			<div
				onClick={() => {
					selected(item.id);
					getLocal(JSON.parse(localStorage.getItem("data")));
				}}
				className="checkBLock">
				{!item.selected && <div className="oval"></div>}
				{item.selected && (
					<img className="checkIcon" src={checkOn} alt="" />
				)}
			</div>
			<p className={item.selected ? "selected item-text" : "item-text"}>
				{item.item}
			</p>
			<i
				onClick={() => {
					itemText(item.item, item.id);
				}}
				className="fa-solid fa-pen-to-square penIcon"></i>
			<i
				onClick={() => {
					deleteF(item.id);
					getLocal(JSON.parse(localStorage.getItem("data")));
				}}
				className="fa-solid fa-trash trashIcon"></i>
		</ItemStyled>
	);
};

export default Item;
