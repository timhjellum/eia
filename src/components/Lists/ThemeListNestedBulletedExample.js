import React, { Component } from "react"
import LoremIpsumUL from "../Placeholders/LoremIpsumUL"

class ThemeListNestedBulletedExample extends Component {
	render() {
		return (
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li>
					<LoremIpsumUL />
				</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
			</ul>
		)
	}
}

export default ThemeListNestedBulletedExample
