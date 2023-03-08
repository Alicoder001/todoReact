import React, { useEffect, useState } from "react";
import useLocalContext from "../../hooks/useLocalContext";

import { FormStyled } from "./Form.style";

let itemData = localStorage.getItem("data")
	? JSON.parse(localStorage.getItem("data"))
	: [];
const randomId = () => {
	return Math.trunc(Math.random() * 10 ** 10);
};
const setLocal = (data) => {
	localStorage.setItem("data", JSON.stringify(data));
};
let itemDataa = [];
const Form = () => {
	const { getLocal, formValue, editId, itemText } = useLocalContext();
	itemData = localStorage.getItem("data")
		? JSON.parse(localStorage.getItem("data"))
		: [];
	useEffect(() => {
		getLocal(JSON.parse(localStorage.getItem("data")));
	}, []);

	const [text, setText] = useState("");
	const hour = new Date().getHours();
	const minutes = new Date().getMinutes();
	const day = new Date().getDate();
	const month = new Date().getMonth();
	const year = new Date().getFullYear();

	const id = randomId();
	const handleSubmit = (e) => {
		const time =
			`${hour >= 10 ? hour : `0${hour}`}` +
			":" +
			`${minutes >= 10 ? minutes : `0${minutes}`}` +
			"      " +
			`${day >= 10 ? day : `0${day}`}` +
			"." +
			`${month >= 10 ? month : `0${month}`}` +
			"." +
			`${year}`;
		e.preventDefault();
		if (!formValue) {
			itemData.unshift({ id, item: text, selected: false, time });
			setLocal(itemData);
			getLocal(JSON.parse(localStorage.getItem("data")));
			setText("");
		} else {
			itemData = [...itemData];
			itemData.forEach((item) => {
				if (item.id == editId) {
					item.item = text;
					item.time = time;
				}
			});
			setLocal(itemData);
			getLocal(JSON.parse(localStorage.getItem("data")));
			setText("");
			itemText(null);
		}
	};
	useEffect(() => {
		formValue && setText(formValue);
	}, [formValue]);
	return (
		<FormStyled onSubmit={handleSubmit}>
			<div className="form_block">
				<input
					onChange={(e) => {
						setText(e.target.value);
					}}
					className="form_input"
					type="text"
					placeholder="Create a new todo…"
					value={text}
				/>
			</div>
		</FormStyled>
	);
};
export default Form;
