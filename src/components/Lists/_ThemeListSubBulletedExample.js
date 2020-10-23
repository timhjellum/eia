import React, { Component } from "react"
import ThemeListBulletedExample from "./ThemeListBulletedExample"

class ThemeListSubExample extends Component {
	render() {
		return (
			<ul>
				<li>Lorem ipsum dolor sit amet</li>
				<li className="sub-list">
					<ThemeListBulletedExample />
				</li>
				<li>Lorem ipsum dolor sit amet</li>
			</ul>
		)
	}
}

export default ThemeListSubExample
