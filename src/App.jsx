import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { GloabalStyle } from "./GlobalStyles/global.style";
import useLocalContext from "./hooks/useLocalContext";
function App() {
	const { isDark } = useLocalContext();

	return (
		<ThemeProvider theme={{ isDark }}>
			<div className="App">
				<GloabalStyle>
					<Header />
					<Main />
				</GloabalStyle>
			</div>
		</ThemeProvider>
	);
}
export default App;
