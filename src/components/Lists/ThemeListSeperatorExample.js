import React, { Component } from "react"
import LoremIpsumUL from "../Placeholders/LoremIpsumUL"

class ThemeListSeperatorExample extends Component {
	render() {
		return (
			<ul>
				<li className="head">Lorem ipsum dolor sit amet</li>
				<li>Lorem ipsum dolor sit amet</li>
				<li>Lorem ipsum dolor sit amet</li>
				<li className="list-seperator"></li>
				<li className="head">Lorem ipsum dolor sit amet</li>
				<li>Lorem ipsum dolor sit amet</li>
				<li>Lorem ipsum dolor sit amet</li>
			</ul>
		)
	}
}

export default ThemeListSeperatorExample
