import React, { Component } from "react";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./home"; // case sensitive
import Layouts from "./layouts";
import Base from "./base";
import Modules from "./modules";
//import ModulesAccordion from "./modules/accordion/";
//import ModulesBanners from "./modules/banners/";
//import ModulesBasicTables from "./modules/basic-tables/";
import States from "./states";
import Themes from "./themes";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="site-header">
					<nav className="navigation">
						<NavLink to="/" className="logo"></NavLink>
						<ul id="navList">
							<li className="primary-nav-item">
								<NavLink to="/base/">Base</NavLink>
							</li>
							<li className="primary-nav-item">
								<NavLink to="/layouts">Layouts</NavLink>
							</li>
							<li className="primary-nav-item">
								<NavLink to="/modules">Modules</NavLink>
							</li>
							<li className="primary-nav-item">
								<NavLink to="/themes">Themes</NavLink>
							</li>
							<li className="primary-nav-item">
								<NavLink to="/states">States</NavLink>
							</li>
						</ul>
						<div className="_resolution _mobile">Mobile</div>
						<div className="_resolution _mobile-landscape">
							Mobile Landscape
						</div>
						<div className="_resolution _tablet">Tablet</div>
						<div className="_resolution _tablet-landscape">
							Tablet Landscape
						</div>
						<div className="_resolution _laptop">Laptop +</div>
					</nav>
				</div>
				<div className="content">
					<Route exact path="/" component={Home} />
					<Route path="/layouts" component={Layouts} />
					<Route path="/base" component={Base} />
					<Route path="/modules" component={Modules} />
					<Route path="/states" component={States} />
					<Route path="/themes" component={Themes} />
				</div>
			</Router>
		);
	}
}
export default App;
