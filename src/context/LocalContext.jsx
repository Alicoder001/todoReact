import { createContext, useReducer } from "react";
const LocalContext = createContext();
const localReducer = (state, action) => {
	switch (action.type) {
		case "get-local":
			return { ...state, data: action.payload };
		case "changeCount":
			return { ...state, count: action.payload };
		case "changeValue":
			return { ...state, formValue: action.payload };
		case "editId":
			return { ...state, editId: action.payload };
		case "itemType":
			return { ...state, filter: action.payload };
		case "changeMode":
			return { ...state, isDark: action.payload };
		case "error":
			return { ...state, isError: action.payload };
	}
};
const LocalContextProveder = ({ children }) => {
	const [state, dispatch] = useReducer(localReducer, {
		firstData: null,
		data: null,
		count: 0,
		formValue: null,
		editId: null,
		filter: "all",
		isDark: localStorage.getItem("isDark")
			? JSON.parse(localStorage.getItem("isDark"))
			: true,
		isError: null,
	});

	const getLocal = (data) => {
		dispatch({ type: "get-local", payload: data });
	};
	const selected = (id) => {
		let data = [...state.data];
		data &&
			data.forEach((item) => {
				if (item.id == id) {
					item.selected = !item.selected;
				}
			});
		localStorage.setItem("data", JSON.stringify(data));
	};
	const deleteF = (id) => {
		let data = [...state.data];
		const newData = data && data.filter((item) => item.id !== id);
		localStorage.setItem("data", JSON.stringify(newData));
	};
	const itemText = (text, id) => {
		dispatch({ type: "changeValue", payload: text });
		dispatch({ type: "editId", payload: id });
	};
	const filterF = (itemType) => {
		dispatch({ type: "itemType", payload: itemType });
	};
	const changeError = (error) => {
		dispatch({ type: "error", payload: error });
	};
	const changeMode = (mode) => {
		localStorage.setItem("isDark", JSON.stringify(mode));
		dispatch({
			type: "changeMode",
			payload: localStorage.getItem("isDark")
				? JSON.parse(localStorage.getItem("isDark"))
				: true,
		});
	};
	return (
		<LocalContext.Provider
			value={{
				...state,
				getLocal,
				selected,
				deleteF,
				itemText,
				filterF,
				changeMode,
				changeError,
			}}>
			{children}
		</LocalContext.Provider>
	);
};
export { LocalContext, LocalContextProveder };
