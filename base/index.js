import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import BaseHome from "./Home";
import Icons from "./Icons";
import ColorPalette from "./ColorPalette";
import Typography from "./Typography";
import Forms from "./Forms";
import SizeConversions from "./SizeConversions";

class Base extends Component {
	render() {
		return (
			<Router>
				<ul className="left-content">
					<li>
						<NavLink to="/base/">Modules Home</NavLink>
					</li>
					<li>
						<NavLink to="/base/Icons">Icons</NavLink>
					</li>
					<li>
						<NavLink to="/base/ColorPalette">Color Palette</NavLink>
					</li>
					<li>
						<NavLink to="/base/Typography">Typography</NavLink>
					</li>
					<li>
						<NavLink to="/base/Forms">Forms</NavLink>
					</li>
					<li>
						<NavLink to="/base/SizeConversions">
							Size Conversions
						</NavLink>
					</li>
				</ul>

				<Route
					exact
					path={`${this.props.match.path}/`}
					component={BaseHome}
				/>
				<Route
					path={`${this.props.match.path}/Icons`}
					component={Icons}
				/>
				<Route
					path={`${this.props.match.path}/ColorPalette`}
					component={ColorPalette}
				/>
				<Route
					path={`${this.props.match.path}/Typography`}
					component={Typography}
				/>
				<Route
					path={`${this.props.match.path}/Forms`}
					component={Forms}
				/>
				<Route
					path={`${this.props.match.path}/SizeConversions`}
					component={SizeConversions}
				/>
			</Router>
		);
	}
}

export default Base;
