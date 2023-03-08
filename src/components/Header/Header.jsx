import React from "react";
import Navbar from "../Navbar/Navbar";
import { HeaderStyled } from "./HeaderStyled";
const Header = () => {
	return (
		<HeaderStyled>
			<Navbar />
		</HeaderStyled>
	);
};

export default Header;
