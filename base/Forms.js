import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";

class Forms extends Component {
	render() {
		return (
			<div className="right-content">
				<h1 className="_h1">Forms</h1>
				<h3 className="_h3">No Javascript</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-even">
							<div className="l-col">
								<div className="dropdown-container no-js">
									<div className="dropdown-button">
										<span className="text">Need to add archive</span>
										<span className="ico d-arrow">
											<span>dropdown arrow</span>
										</span>
									</div>
									<div className="dropdown-menu">
										<ul>
											<li>Lorem ipsum dolor sit amet</li>
											<li>Consectetur adipiscing elit</li>
											<li>Cras dictum</li>
											<li>Orci quis aliquet hendrerit</li>
											<li>Lorem ipsum dolor sit amet</li>
											<li>Consectetur adipiscing elit</li>
											<li>Cras dictum</li>
											<li>Orci quis aliquet hendrerit</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="l-col">
								<div className="dropdown-container no-js">
									<div className="dropdown-button">
										<span className="text">Need to add archive</span>
										<span className="ico d-arrow">
											<span>dropdown arrow</span>
										</span>
									</div>
									<div className="dropdown-menu">
										<ul>
											<li className="ico pdf">
												<a href="/totalenergy/data/annual/archive/038411.pdf">
													2011
												</a>
											</li>
											<li className="ico pdf">
												<a href="/totalenergy/data/annual/archive/038410.pdf">
													2010
												</a>
											</li>
											<li className="ico pdf">
												<a href="/totalenergy/data/annual/archive/038409.pdf">
													2009
												</a>
											</li>
											<li className="ico pdf">
												<a href="/totalenergy/data/annual/archive/038408.pdf">
													2008
												</a>
											</li>
											<li>
												<a href="/totalenergy/data/annual/archive/">
													all archives
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Javascript</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col">
								<div className="form-container do-not-print">
									<fieldset>
										<legend>Archive</legend>
										<div className="dropdown-container js">
											<div className="dropdown-button">
												<span className="text">Need to add archive</span>
												<span className="ico d-arrow">
													<span>dropdown arrow</span>
												</span>
											</div>
											<div className="dropdown-menu">
												<ul>
													<li>Lorem ipsum dolor sit amet</li>
													<li>Consectetur adipiscing elit</li>
													<li>Cras dictum</li>
													<li>Orci quis aliquet hendrerit</li>
													<li>Lorem ipsum dolor sit amet</li>
													<li>Consectetur adipiscing elit</li>
													<li>Cras dictum</li>
													<li>Orci quis aliquet hendrerit</li>
												</ul>
											</div>
										</div>
									</fieldset>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Placeholder</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col">
								<div className="dropdown-container">
									<h4>Label</h4>
									<div className="dropdown-button">
										<span className="text">All available</span>
										<span className="ico d-arrow">
											<span>dropdown arrow</span>
										</span>
									</div>
									<div className="dropdown-menu">
										<ul>
											<li className="head">
												<h2>Most requested data</h2>
											</li>
											<li className="ico pdf">
												<a href="/">Item</a>
											</li>
											<li className="ico xls">
												<a href="/">Item</a>
											</li>
											<li className="ico csv">
												<a href="/">Item</a>
											</li>
											<li className="ico html">
												<a href="/">Item</a>
											</li>
											<li className="ico json">
												<a href="/">Item</a>
											</li>
											<li className="ico doc">
												<a href="/">Item</a>
											</li>
											<li className="ico ppt">
												<a href="/">Item</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
			</div>
		);
	}
}

export default Forms;
