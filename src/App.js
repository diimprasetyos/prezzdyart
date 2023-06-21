import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet/es/Helmet";

import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Browse from "./components/Browse.js";
import Arrived from "./components/Arrived.js";
import Client from "./components/Client.js";
import AsideMenu from "./components/AsideMenu.js";
import Footer from "./components/Footer.js";
import Detail from "./pages/Detail.js";
import Product from "./pages/Product.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";

function App() {
	return (
		<>
			<React.Fragment>
				<Helmet>
					<title>Prezzdy Art</title>
					<link rel="icon" href={"path"} />
					<meta
						name="description"
						content={
							"Website Penjualan Trophy & Accessories Golf dengan desain elegan"
						}
					/>
					<meta
						name="keywords"
						content={"Trophy, Golf Accessories, Golf, Medals"}
					/>
					<meta property="og:title" content={"og:Prezzdy Art"} />
					<meta
						property="og:description"
						content={"og:Website Penjualan Trophy & Accessories Golf"}
					/>
				</Helmet>
				<Header />
				<Hero />
				<Browse />
				<Arrived />
				<Client />
				<AsideMenu />
				<Footer />
			</React.Fragment>
		</>
	);
}

export default function Routes() {
	return (
		<Router>
			<Route path="/" exact component={App} />
			<Route path="/detail" exact component={Detail} />
			<Route path="/products" exact component={Product} />
			<Route path="/contact" exact component={Contact} />
			<Route path="/about" exact component={About} />
		</Router>
	);
}
