import React, { Component } from "react";

import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";

class ModulesBannersNotice extends Component {
	render() {
		return (
			<div class="right-content">
				<h3 class="_h3">Notice</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						{/*start */}
						<div class="notice">
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
export default ModulesBannersNotice;
