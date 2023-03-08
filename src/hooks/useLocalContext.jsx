import { useContext } from "react";
import { LocalContext } from "../context/LocalContext";

const useLocalContext = () => {
	const context = useContext(LocalContext);
	return context;
};
export default useLocalContext;
