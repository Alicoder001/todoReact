import React from "react";
import { Navbarr } from "./NavbarStyle";
import moon from "../../images/moon.svg";
import useLocalContext from "../../hooks/useLocalContext";
import { BsSunFill } from "react-icons/bs";
const Navbar = () => {
	const { changeMode, isDark } = useLocalContext();
	return (
		<Navbarr>
			<div className="container nav_container">
				<h1 className="title">TODO</h1>
				<div
					onClick={() => {
						changeMode(!isDark);
					}}
					className="mode">
					{!isDark && <img src={moon} alt="" />}
					{isDark && (
						<BsSunFill size={32} color={'white'} />
					)}
				</div>
			</div>
		</Navbarr>
	);
};

export default Navbar;
