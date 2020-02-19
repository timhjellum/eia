import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import StatesHome from "./Home";
import EmptyListItems from "./EmptyListItems";
import LinkLists from "./LinkLists";
import StickyTableHeaders from "./StickyTableHeaders";
import Toggle from "./Toggle";
class States extends Component {
	render() {
		return (
			<Router>
				<ul className="left-content">
					<li>
						<NavLink to="/states/">States Home</NavLink>
					</li>
					<li>
						<NavLink to="/states/empty-list-iItems">
							Empty List Items
						</NavLink>
					</li>
					<li>
						<NavLink to="/states/link-lists">Link Lists</NavLink>
					</li>
					<li>
						<NavLink to="/states/sticky-table-headers">
							Sticky Table Headers
						</NavLink>
					</li>
					<li>
						<NavLink to="/states/toggle">Toggle</NavLink>
					</li>
				</ul>

				<Route
					exact
					path={`${this.props.match.path}/`}
					component={StatesHome}
				/>
				<Route
					path={`${this.props.match.path}/EmptyListItems`}
					component={EmptyListItems}
				/>
				<Route
					path={`${this.props.match.path}/LinkLists`}
					component={LinkLists}
				/>
				<Route
					path={`${this.props.match.path}/StickyTableHeaders`}
					component={StickyTableHeaders}
				/>
				<Route
					path={`${this.props.match.path}/Toggle`}
					component={Toggle}
				/>
			</Router>
		);
	}
}

export default States;
