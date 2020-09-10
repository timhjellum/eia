import React, { useState } from "react"
import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom"

function MainNav(props) {
	const [sideNav, setSideNav] = useState()
	return (
		<ul>
			<li>
				<NavLink to="/style-guide/base/home" onClick={() => setSideNav("base")}>
					Base
				</NavLink>
			</li>
			<li>
				<NavLink
					onClick={() => {
						setSideNav("layouts")
					}}
					to="/style-guide/layouts/home"
				>
					Layouts
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/style-guide/modules/home"
					onClick={() => {
						setSideNav("modules")
					}}
				>
					Modules
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/style-guide/themes/home"
					onClick={() => {
						setSideNav("themes")
					}}
				>
					States
				</NavLink>
			</li>

			<li>
				<NavLink
					to="/style-guide/states/home"
					onClick={() => {
						setSideNav("states")
					}}
				>
					Themes
				</NavLink>
			</li>
		</ul>
	)
}
export default MainNav
