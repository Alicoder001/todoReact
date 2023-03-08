import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { GloabalStyle } from "./GlobalStyles/global.style";
function App() {
	return (
		<div className="App">
			<GloabalStyle>
				<Header />
				<Main />
			</GloabalStyle>
		</div>
	);
}
export default App;
