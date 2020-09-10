import React, { Component } from "react"
import ThemeListDefault from "./ThemeListDefault"

class ThemeSubListExample extends Component {
	render() {
		return (
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li className="sub-list">
					<ThemeListDefault />
				</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
			</ul>
		)
	}
}

export default ThemeSubListExample
