﻿import React, { Component } from "react";

import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";

class Alert extends Component {
	render() {
		return (
			<div className="right-content">
				<h3 className="_h3">Alert</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="alert">
							<p>
								The <strong>five boxing</strong> wizards jump quickly{" "}
								<a href="/">jump quickly</a>.
							</p>
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />
			</div>
		);
	}
}
export default Alert;
