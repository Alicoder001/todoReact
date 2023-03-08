import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LocalContextProveder } from "./context/LocalContext";
ReactDOM.createRoot(document.getElementById("root")).render(
	<LocalContextProveder>
		<App />
	</LocalContextProveder>
);
