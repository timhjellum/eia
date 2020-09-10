import React, { Component } from "react"

class ThemeListSingleBulletExample extends Component {
	render() {
		return (
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</li>
				<li className="list-item">
					<ul>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					</ul>
					<ul>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					</ul>
				</li>
				<li>Lorem ipsum dolor sit amet</li>
			</ul>
		)
	}
}

export default ThemeListSingleBulletExample
