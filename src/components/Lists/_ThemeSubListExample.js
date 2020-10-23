import React, { Component } from "react"
import ThemeListDefaultExample from "./ThemeListDefaultExample"
class ThemeSubListExample extends Component {
	render() {
		return (
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li className="sub-list">
					<ThemeListDefaultExample />
				</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
			</ul>
		)
	}
}

export default ThemeSubListExample
