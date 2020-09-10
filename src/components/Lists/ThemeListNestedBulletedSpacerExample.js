import React, { Component } from "react"
import LoremIpsumUL from "../Placeholders/LoremIpsumUL"

class ThemeListNestedBulletedSpacerExample extends Component {
	render() {
		return (
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li className="list-spacer">
					<LoremIpsumUL />
				</li>
				<li className="list-spacer">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
			</ul>
		)
	}
}

export default ThemeListNestedBulletedSpacerExample
