import React, { Component } from "react";
import Scrollchor from "react-scrollchor";

class SectionContainer extends Component {
	render() {
		return (
			<div className="container">
				<Scrollchor to="#top" className="top">
					Top
				</Scrollchor>
			</div>
		);
	}
}

export default SectionContainer;
