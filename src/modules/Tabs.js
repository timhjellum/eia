import React, { Component } from "react";

import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";
import LoremIpsumParagraph from "../assets/containers/LoremIpsumParagraph.js";
import LoremIpsumH1 from "../assets/containers/LoremIpsumH1.js";
import LoremIpsumH2 from "../assets/containers/LoremIpsumH2.js";
import LoremIpsumH4 from "../assets/containers/LoremIpsumH4.js";

class Tabs extends Component {
	render() {
		return (
			<div className="section-container">
				<h1 className="_h1">Tabs</h1>
				<p className="_p">
					Jquery UI Tabs - A single content area with multiple panels,
					each associated with a header in a list.
				</p>

				<h3 className="_h3">Default</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right-narrow">
							<div className="l-col">
								<span className="_module-bg">
									<div className="tabs">
										<ul>
											<li>
												<a href="#tab-1">tab-1</a>
											</li>
											<li>
												<a href="#tab-2">tab-2</a>
											</li>
											<li>
												<a href="#tab-3">tab-3</a>
											</li>
											<li>
												<a href="#tab-4">tab-4</a>
											</li>
										</ul>
										<div id="tab-1">
											<div className="tab-content primary">
												<LoremIpsumH1 />
												<LoremIpsumH2 />
												<LoremIpsumParagraph />
												<ul>
													<li className="head">
														List Head
													</li>
													<li>
														Lorem ipsum dolor sit
														amet, consectetur
														adipiscing elit.
													</li>
													<li>
														Proin faucibus neque ut
														nisl finibus
														consectetur.
													</li>
													<li>
														In euismod diam molestie
														turpis commodo, eu
														faucibus erat faucibus.
													</li>
													<li className="list-item">
														<ul>
															<li>
																Lorem ipsum
																dolor sit amet,
																consectetur
																adipiscing elit.
																Integer magna
																est, tincidunt
																eget feugiat sit
																amet,
																consectetur sit
																amet mauris.
															</li>
														</ul>
													</li>
													<li className="list-item">
														<ul>
															<li>
																Lorem ipsum
																dolor sit amet,
																consectetur
																adipiscing elit.
																Integer magna
																est, tincidunt
																eget feugiat sit
																amet,
																consectetur sit
																amet mauris.
															</li>
														</ul>
													</li>
													<li className="list-item">
														<ul>
															<li>
																Lorem ipsum
																dolor sit amet,
																consectetur
																adipiscing elit.
																Integer magna
																est, tincidunt
																eget feugiat sit
																amet,
																consectetur sit
																amet mauris.
															</li>
														</ul>
													</li>
													<li>
														Morbi vel lorem ut erat
														varius pharetra a quis
														libero.
													</li>
													<li>
														Cras iaculis dolor vitae
														lacus facilisis
														ullamcorper.
													</li>
												</ul>

												<LoremIpsumParagraph />
												<ul>
													<li className="head">
														List Head
													</li>
													<li>
														Lorem ipsum dolor sit
														amet, consectetur
														adipiscing elit.
													</li>
													<li>
														Proin faucibus neque ut
														nisl finibus
														consectetur.
													</li>
													<li>
														In euismod diam molestie
														turpis commodo, eu
														faucibus erat faucibus.
													</li>
													<li>
														<ul>
															<li className="sub-head">
																Lorem Ipsum
																Dolor Sit Amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
														</ul>
													</li>
													<li>
														Morbi vel lorem ut erat
														varius pharetra a quis
														libero.
													</li>
													<li>
														Cras iaculis dolor vitae
														lacus facilisis
														ullamcorper.
													</li>
												</ul>

												<LoremIpsumH2 />

												<LoremIpsumH4 />
												<LoremIpsumParagraph />

												<LoremIpsumH4 />
												<LoremIpsumParagraph />
											</div>
										</div>
										<div id="tab-2">
											<div className="tab-content secondary">
												<LoremIpsumH1 />
												<LoremIpsumH2 />
												<LoremIpsumParagraph />
												<ul>
													<li className="head">
														List Head
													</li>
													<li>
														Lorem ipsum dolor sit
														amet, consectetur
														adipiscing elit.
													</li>
													<li>
														Proin faucibus neque ut
														nisl finibus
														consectetur.
													</li>
													<li>
														In euismod diam molestie
														turpis commodo, eu
														faucibus erat faucibus.
													</li>
													<li className="list-item">
														<ul>
															<li>
																Lorem ipsum
																dolor sit amet,
																consectetur
																adipiscing elit.
																Integer magna
																est, tincidunt
																eget feugiat sit
																amet,
																consectetur sit
																amet mauris.
															</li>
														</ul>
													</li>
													<li className="list-item">
														<ul>
															<li>
																Lorem ipsum
																dolor sit amet,
																consectetur
																adipiscing elit.
																Integer magna
																est, tincidunt
																eget feugiat sit
																amet,
																consectetur sit
																amet mauris.
															</li>
														</ul>
													</li>
													<li className="list-item">
														<ul>
															<li>
																Lorem ipsum
																dolor sit amet,
																consectetur
																adipiscing elit.
																Integer magna
																est, tincidunt
																eget feugiat sit
																amet,
																consectetur sit
																amet mauris.
															</li>
														</ul>
													</li>
													<li>
														Morbi vel lorem ut erat
														varius pharetra a quis
														libero.
													</li>
													<li>
														Cras iaculis dolor vitae
														lacus facilisis
														ullamcorper.
													</li>
												</ul>

												<LoremIpsumParagraph />
												<ul>
													<li className="head">
														List Head
													</li>
													<li>
														Lorem ipsum dolor sit
														amet, consectetur
														adipiscing elit.
													</li>
													<li>
														Proin faucibus neque ut
														nisl finibus
														consectetur.
													</li>
													<li>
														In euismod diam molestie
														turpis commodo, eu
														faucibus erat faucibus.
													</li>
													<li>
														<ul>
															<li className="sub-head">
																Lorem Ipsum
																Dolor Sit Amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
														</ul>
													</li>
													<li>
														Morbi vel lorem ut erat
														varius pharetra a quis
														libero.
													</li>
													<li>
														Cras iaculis dolor vitae
														lacus facilisis
														ullamcorper.
													</li>
												</ul>

												<LoremIpsumH2 />

												<LoremIpsumH4 />
												<LoremIpsumParagraph />

												<LoremIpsumH4 />
												<LoremIpsumParagraph />
											</div>
										</div>
										<div id="tab-3">
											<div className="tab-content article">
												<LoremIpsumH1 />
												<LoremIpsumH2 />
												<LoremIpsumParagraph />
												<ul>
													<li>
														Lorem Ipsum Dolor Sit
														Amet
													</li>
													<li>
														Lorem ipsum dolor sit
														amet, consectetur
														adipiscing elit.
													</li>
													<li>
														Proin faucibus neque ut
														nisl finibus
														consectetur.
													</li>
													<li>
														In euismod diam molestie
														turpis commodo, eu
														faucibus erat faucibus.
													</li>
													<li>
														Morbi vel lorem ut erat
														varius pharetra a quis
														libero.
													</li>
													<li>
														Cras iaculis dolor vitae
														lacus facilisis
														ullamcorper.
													</li>
												</ul>

												<LoremIpsumH2 />

												<LoremIpsumH4 />
												<LoremIpsumParagraph />

												<LoremIpsumH4 />
												<LoremIpsumParagraph />
											</div>
										</div>
										<div id="tab-4">
											<div className="tab-content">
												<LoremIpsumH1 />
												<LoremIpsumH2 />
												<LoremIpsumParagraph />
												<ul>
													<li className="head">
														List Head
													</li>
													<li>
														Lorem ipsum dolor sit
														amet, consectetur
														adipiscing elit.
													</li>
													<li>
														Proin faucibus neque ut
														nisl finibus
														consectetur.
													</li>
													<li>
														In euismod diam molestie
														turpis commodo, eu
														faucibus erat faucibus.
													</li>
													<li className="list-item">
														<ul>
															<li>
																Lorem ipsum
																dolor sit amet,
																consectetur
																adipiscing elit.
																Integer magna
																est, tincidunt
																eget feugiat sit
																amet,
																consectetur sit
																amet mauris.
															</li>
														</ul>
													</li>
													<li className="list-item">
														<ul>
															<li>
																Lorem ipsum
																dolor sit amet,
																consectetur
																adipiscing elit.
																Integer magna
																est, tincidunt
																eget feugiat sit
																amet,
																consectetur sit
																amet mauris.
															</li>
														</ul>
													</li>
													<li className="list-item">
														<ul>
															<li>
																Lorem ipsum
																dolor sit amet,
																consectetur
																adipiscing elit.
																Integer magna
																est, tincidunt
																eget feugiat sit
																amet,
																consectetur sit
																amet mauris.
															</li>
														</ul>
													</li>
													<li>
														Morbi vel lorem ut erat
														varius pharetra a quis
														libero.
													</li>
													<li>
														Cras iaculis dolor vitae
														lacus facilisis
														ullamcorper.
													</li>
												</ul>

												<LoremIpsumParagraph />
												<ul>
													<li className="head">
														List Head
													</li>
													<li>
														Lorem ipsum dolor sit
														amet, consectetur
														adipiscing elit.
													</li>
													<li>
														Proin faucibus neque ut
														nisl finibus
														consectetur.
													</li>
													<li>
														In euismod diam molestie
														turpis commodo, eu
														faucibus erat faucibus.
													</li>
													<li>
														<ul>
															<li className="sub-head">
																Lorem Ipsum
																Dolor Sit Amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
															<li>
																Lorem ipsum
																dolor sit amet
															</li>
														</ul>
													</li>
													<li>
														Morbi vel lorem ut erat
														varius pharetra a quis
														libero.
													</li>
													<li>
														Cras iaculis dolor vitae
														lacus facilisis
														ullamcorper.
													</li>
												</ul>

												<LoremIpsumH2 />

												<LoremIpsumH4 />
												<LoremIpsumParagraph />

												<LoremIpsumH4 />
												<LoremIpsumParagraph />
											</div>
										</div>
									</div>
								</span>
							</div>
							<div className="l-col">
								<LoremIpsumParagraph />
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
export default Tabs;
