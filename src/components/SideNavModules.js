import React from "react"
import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom"
function SideNavModules() {
	return (
		<div className="modules">
			<ul>
				<li>
					<NavLink to="/style-guide/modules/home">Modules Home</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/modules/banners">Banners</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/modules/contact">Contact</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/modules/energy-education">Energy Education</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/modules/modals">Modals</NavLink>
				</li>

				<li>
					<NavLink to="/style-guide/modules/images">Images</NavLink>
				</li>

				<li>
					<NavLink to="/style-guide/modules/page-titles">Page Titles</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/modules/report-headers">Report Headers</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/modules/visulizations">Visulizations</NavLink>
				</li>
			</ul>
		</div>
	)
}
export default SideNavModules
