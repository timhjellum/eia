import React, { Component } from "react";

import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";

class ModulesEnergyEducation extends Component {
	render() {
		return (
			<div class="right-content">
				<h1 class="_h1">Visualizations</h1>
				<p class="_p">
					If any of the <code>h3</code> anchors are empty, the closest{" "}
					<code>&lt;li class="l-col"&gt;</code>
					will be hidden programatically.
				</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-three-col-even energy-education">
							<span class="_module-bg">
								<h1>Energy Education</h1>
							</span>
							<div class="l-col">
								<i class="ico energy-education petroleum"></i>
								<ul>
									<li class="head">
										<h2>
											<a href="/">
												Oil: Crude &amp; Petroleum
												Products Explained
											</a>
										</h2>
									</li>
									<li class="sub-head">
										<a href="/">
											Gasoline Prices and Outlook{" "}
										</a>
									</li>
									<li class="foot">
										<a href="/">
											See more petroleum topics{" "}
										</a>
									</li>
								</ul>
							</div>

							<div class="l-col">
								<i class="ico energy-education faq"></i>
								<ul>
									<li class="head">
										<h2>
											<a href="/">FAQs </a>
										</h2>
									</li>
									<li class="sub-head">
										<a href="/">
											What are Mcf, Btu, and therms? How
											do I convert prices in Mcf to Btu's
											and therms?{" "}
										</a>
									</li>
									<li class="foot">
										<a href="/">See all petroleum FAQs </a>
									</li>
								</ul>
							</div>

							<div class="l-col">
								<i class="ico energy-education energy-kids"></i>
								<ul>
									<li class="head">
										<h2>
											<a href="/kids/">Energy Kids </a>
										</h2>
									</li>
									<li class="sub-head">
										<a href="/">How was oil formed? </a>
									</li>
									<li class="foot">
										<a href="/">
											See nonrenewable sources on Energy
											Kids{" "}
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/*end module */}
						{/*end module */}
						{/*end module */}
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
			</div>
		);
	}
}

export default ModulesEnergyEducation;
