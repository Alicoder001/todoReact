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

	const id = randomId();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formValue) {
			itemData.unshift({ id, item: text, selected: false });
			setLocal(itemData);
			getLocal(JSON.parse(localStorage.getItem("data")));
			setText("");
		} else {
			itemData = [...itemData];
			itemData.forEach((item) => {
				if (item.id == editId) {
					item.item = text;
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
