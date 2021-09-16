import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./componenets/navbar";
import Hero from "./componenets/Hero";
import About from "./componenets/About";
import Projects from "./componenets/Porjects";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";

function App() {
	return (
		<BrowserRouter className="App">
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
