import React, { Component } from "react";
import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";

class ModulesReportHeader extends Component {
	render() {
		return (
			<li class="section-container">
				<h1 class="_h1">Report Header</h1>
				<h3 class="_h3">Header 1</h3>

				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<span class="_module-bg">
							<div class="l-row l-report-header">
								<div class="l-col">
									<div class="see-all">
										<a href="/petroleum/reports.php">
											SEE ALL REPORTS
										</a>
									</div>
									<h1>Weekly Petroleum Status Report</h1>
									<div class="release-dates">
										<span class="responsive-container">
											Data for week ending Oct. 4, 2019
										</span>{" "}
										<span class="responsive-container">
											<span class="label">
												Release Date:
											</span>{" "}
											<span class="date">
												Oct. 9, 2019
											</span>
										</span>
										<span class="responsive-container">
											<span class="label">
												Next Release Date:
											</span>{" "}
											<span class="date">
												Oct. 17, 2019
											</span>
										</span>
										<span class="responsive-container">
											<a href="./pdf/wpsrall.pdf">
												full report{" "}
												<span class="ico pdf">
													<span>PDF</span>
												</span>
											</a>
										</span>
									</div>
								</div>
								<div class="l-col">
									<div class="form-container do-not-print">
										<fieldset>
											<legend>Previous reports</legend>
											<div class="dropdown-container no-js">
												<div class="dropdown-button">
													<span class="text">
														Select Year
													</span>
													<span class="ico d-arrow">
														<span>
															dropdown arrow
														</span>
													</span>
												</div>
												<div class="dropdown-menu">
													<ul>
														<li>
															<a href="./2019_10_09.php">
																October 9, 2019
															</a>
														</li>
														<li>
															<a href="./2019_10_02.php">
																October 2, 2019
															</a>
														</li>
														<li>
															<a href="./2019_09_25.php">
																September 25,
																2019
															</a>
														</li>
														<li>
															<a href="./2019_09_18.php">
																September 18,
																2019
															</a>
														</li>
														<li>
															<a href="./2019_09_11.php">
																September 11,
																2019
															</a>
														</li>
														<li>
															<a href="./2019_09_05.php">
																September 5,
																2019
															</a>
														</li>
														<li>
															<a href="./2019_08_28.php">
																August 28, 2019
															</a>
														</li>
														<li>
															<a href="./2019_08_21.php">
																August 21, 2019
															</a>
														</li>
														<li>
															<a href="./2019_08_14.php">
																August 14, 2019
															</a>
														</li>
														<li>
															<a href="./2019_08_07.php">
																August 7, 2019
															</a>
														</li>
														<li>
															<a href="./archive/">
																prior issues
															</a>
														</li>
													</ul>
												</div>
											</div>
										</fieldset>
									</div>
								</div>
							</div>
						</span>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<h1 class="_h1">Report Header</h1>
				<h3 class="_h3">Stand alone</h3>

				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<span class="_module-bg">
							<div class="l-row l-report-header">
								<div class="l-col">
									<div class="see-all"></div>
									<h1>Annual Energy Review</h1>
									<div class="release-dates">
										<div class="publish-metadata">
											Superseded -- see MER for key annual
											tables
										</div>
									</div>
								</div>
								<div class="l-col">
									<div class="form-container do-not-print">
										<fieldset>
											<legend>
												Annual Energy Review archives
											</legend>
											<div class="dropdown-container no-js">
												<div class="dropdown-button">
													<span class="text">
														Select Year
													</span>
													<span class="ico d-arrow">
														<span>
															dropdown arrow
														</span>
													</span>
												</div>
												<div class="dropdown-menu">
													<ul>
														<li class="ico pdf">
															<a href="/038411.pdf">
																2011
															</a>
														</li>
														<li class="ico pdf">
															<a href="/038410.pdf">
																2010
															</a>
														</li>
														<li class="ico pdf">
															<a href="/038409.pdf">
																2009
															</a>
														</li>
														<li class="ico pdf">
															<a href="/038408.pdf">
																2008
															</a>
														</li>
														<li>
															<a href="/">
																all archives
															</a>
														</li>
													</ul>
												</div>
											</div>
										</fieldset>
									</div>
								</div>
							</div>
						</span>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<h3 class="_h3">Nested</h3>
				<p class="_p">
					When nested within a <code>primary</code>
					<span class="not-used">
						, <code>primary-alt</code>, <code>secondary</code>,{" "}
						<code>secondary-alt</code>, or <code>article-alt</code>
					</span>{" "}
					column.
					<br />
					Example:{" "}
					<a href="http://www.eia.gov/totalenergy/data/monthly/whatsnew.php">
						http://www.eia.gov/totalenergy/data/monthly/whatsnew.php
					</a>
				</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<span class="_module-bg">
							<div class="primary">
								<h1>What's New in Monthly Energy Review</h1>
								<div class="l-row l-report-header">
									<div class="l-col">
										<div class="release-dates">
											<span class="responsive-container">
												September 2019{" "}
												<a href="pdf/mer.pdf">
													<span class="ico pdf">
														<span>PDF</span>
													</span>
												</a>
												<span class="pipe">|</span>
												<a href="previous.php">
													previous editions
												</a>
											</span>
										</div>
										<div class="release-dates">
											<span class="responsive-container">
												<span class="label">
													Release Date:
												</span>{" "}
												<span class="date">
													September 25, 2019
												</span>
											</span>
											<span class="responsive-container">
												<span class="label">
													Next Release Date:
												</span>{" "}
												<span class="date">
													October 25, 2019
												</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</span>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
			</li>
		);
	}
}

export default ModulesReportHeader;
