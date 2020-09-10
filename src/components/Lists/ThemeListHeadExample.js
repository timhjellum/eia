import React, { Component } from "react"

class ThemeListHeadExample extends Component {
	render() {
		return (
			<ul className="_module-bg-wrapper">
				<li className="head">Lorem ipsum dolor sit amet</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li className="head">
					<a href="/">Lorem ipsum dolor sit amet</a>
				</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
			</ul>
		)
	}
}

export default ThemeListHeadExample
