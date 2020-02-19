import React, { Component } from "react";

import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";

class ModulesBannersError extends Component {
	render() {
		return (
			<div class="right-content">
				<h3 class="_h3">Error</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						{/*start */}
						<div class="error">
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
			</div>
		);
	}
}
export default ModulesBannersError;
