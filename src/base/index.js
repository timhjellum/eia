import React, { Component } from "react";
import BaseHome from "./Home";
import Icons from "./Icons";
import ColorPalette from "./ColorPalette";
import Typography from "./Typography";
import BaseForms from "./Forms";
import SizeConversions from "./SizeConversions";

class Base extends Component {
	render() {
		return (
			<ul className="style-guide">
				<BaseHome />
				<Icons />
				<ColorPalette />
				<Typography />
				<BaseForms />
				<SizeConversions />
			</ul>
		);
	}
}

export default Base;
