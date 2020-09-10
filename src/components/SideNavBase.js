import React from "react"
import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom"

function SideNavBase() {
	return (
		<div className="base">
			<ul>
				<li>
					<NavLink to="/style-guide/base/home">Base</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/base/accessibility">Accessibility</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/base/base-icons">Icons</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/base/logos">Logos</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/base/document-icons">Document Icons</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/base/forms">Forms</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/base/color-palette">Color Palette</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/base/typography">Typography</NavLink>
				</li>
				<li>
					<NavLink to="/style-guide/base/size-conversions">Size Conversions</NavLink>
				</li>
			</ul>
		</div>
	)
}
export default SideNavBase
