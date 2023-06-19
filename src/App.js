import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Browse from "./components/Browse.js";
import Arrived from "./components/Arrived.js";
import Client from "./components/Client.js";
import AsideMenu from "./components/AsideMenu.js";
import Footer from "./components/Footer.js";
import Detail from "./pages/Detail.js";
import Product from "./pages/Product.js";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Browse />
			<Arrived />
			<Client />
			<AsideMenu />
			<Footer />
		</>
	);
}

export default function Routes() {
	return (
		<Router>
			<Route path="/" exact component={App} />
			<Route path="/detail" exact component={Detail} />
			<Route path="/products" exact component={Product} />
			<Route path="/contact" exact component={Detail} />
		</Router>
	);
}
