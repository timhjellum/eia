import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import ThemesHome from "./Home";
import Article from "./Article";
import FAQs from "./FAQs";

class Themes extends Component {
	render() {
		return (
			<Router>
				<ul className="left-content">
					<li>
						<NavLink to="/themes/">Themes Home</NavLink>
					</li>
					<li>
						<NavLink to="/themes/article">
							Article Pages Theme
						</NavLink>
					</li>
					<li>
						<NavLink to="/themes/faqs">FAQs Pages These</NavLink>
					</li>
				</ul>

				<Route
					exact
					path={`${this.props.match.path}/`}
					component={ThemesHome}
				/>
				<Route
					path={`${this.props.match.path}/Article`}
					component={Article}
				/>
				<Route
					path={`${this.props.match.path}/FAQs`}
					component={FAQs}
				/>
			</Router>
		);
	}
}

export default Themes;
