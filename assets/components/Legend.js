import React, { Component } from "react";

class Legend extends Component {
	render() {
		return (
			<ul className="_legend">
				<li>
					<div className="_page"></div>Page margin (Laptop or greater
					only)
				</li>
				<li>
					<div className="_row"></div> Row margin or padding
				</li>
				<li>
					<div className="_col"></div> Column margin or padding
				</li>
				<li>
					<div className="_module"></div> Module margin or padding
				</li>
			</ul>
		);
	}
}

export default Legend;
