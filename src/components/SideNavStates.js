import React from "react"
import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom"
function SideNavStates() {
	return (
		<div className="states">
			<ul>
				<li>
					<NavLink to="/style-guide/states/home">States Home</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/states/build-anchor">Build Anchor</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/states/calculated-numbered-lists">Calculated Numbered Lists</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/states/empty-list-iItems">Empty List Items</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/states/link-lists">Link Lists</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/states/sticky-table-headers">Sticky Table Headers</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/states/toggle">Toggle</NavLink>
				</li>
			</ul>
		</div>
	)
}
export default SideNavStates
