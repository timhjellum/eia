import React from "react"
import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom"
function SideNavLayouts() {
	return (
		<div className="layouts">
			<ul>
				<li>
					<NavLink to="/style-guide/layouts/home">Layouts Home</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/layouts/default-layouts">Default Layouts</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/layouts/rows">Rows</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/layouts/nested-rows">Nested Rows</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/layouts/full-page">Full Page</NavLink>
				</li>
			</ul>
		</div>
	)
}
export default SideNavLayouts
