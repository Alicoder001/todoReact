import React from "react";
import Form from "../Form/Form";
import ItemList from "../ItemList/ItemList";

const Main = () => {
	return (
		<main>
			<div className="container">
				<Form />
				<ItemList />
			</div>
		</main>
	);
};

export default Main;
