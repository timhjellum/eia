import React, { Component } from "react"

class ThemeListNumberedExample extends Component {
	render() {
		return (
			<ul className="numbered">
				<li>
					<span className="number">001</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</li>
				<li>
					<span className="number">002</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</li>
				<li>
					<span className="number">003</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</li>
			</ul>
		)
	}
}

export default ThemeListNumberedExample
