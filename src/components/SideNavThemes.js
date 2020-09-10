import React from "react"
import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom"
function SideNavThemes() {
	return (
		<div className="themes">
			<ul>
				<li>
					<NavLink to="/style-guide/themes/home">Themes Home</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/themes/accordions">Accordions</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/themes/article">Article Page</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/themes/faqs">FAQs Page</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/themes/lists">Lists (ul)</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/themes/tables">Tables</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/themes/tabs">Tabs</NavLink>
				</li>
			</ul>
		</div>
	)
}
export default SideNavThemes
