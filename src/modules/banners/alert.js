﻿import React, { Component } from "react";
import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";

class ModulesBannersAlert extends Component {
	render() {
		return (
			<li class="section-container">
				<h3 class="_h3">Alert</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						{/*start */}
						<div class="alert">
							<p>
								The <strong>five boxing</strong> wizards jump
								quickly <a href="/">jump quickly</a>.
							</p>
						</div>
						{/*end */}
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />
			</li>
		);
	}
}
export default ModulesBannersAlert;
