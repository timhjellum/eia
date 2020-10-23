import React, { Component } from "react"
import Page from "./Page"
import Top from "./Placeholders/Top.js"
import Placeholder from "./Placeholders/Placeholder"
import PetroleumWeekly from "./Modules/PetroleumWeekly"
import ContainerLayout from "./Containers/ContainerLayout"

class ModulesReportHeaders extends Component {
	render() {
		return (
			<Page title="Report Headers">
				<span className="modules">
					<h1 className="_h1">Report Header</h1>

					<ContainerLayout>
						<div className="l-row l-report-header">
							<div className="l-col">
								<div className="see-all">
									<a href="/petroleum/reports.php">SEE ALL REPORTS</a>
								</div>
								<h1>Weekly Petroleum Status Report</h1>
								<div className="release-dates">
									<span className="responsive-container">Data for week ending Oct. 4, 2019</span>
									<span className="responsive-container">
										<span className="label">Release Date:</span>
										<span className="date">Oct. 9, 2019</span>
									</span>
									<span className="responsive-container">
										<span className="label">Next Release Date:</span>
										<span className="date">Oct. 17, 2019</span>
									</span>
									<span className="responsive-container">
										<a href="./pdf/wpsrall.pdf">
											full report
											<span className="ico pdf">
												<span>PDF</span>
											</span>
										</a>
									</span>
								</div>
							</div>
							<div className="l-col">
								<div className="form-container do-not-print">
									<fieldset>
										<legend>Previous reports</legend>
										<div className="dropdown-container no-js">
											<div className="dropdown-button">
												<span className="text">Select Year</span>
												<span className="ico d-arrow">
													<span>dropdown arrow</span>
												</span>
											</div>
											<div className="dropdown-menu">
												<ul>
													<li>
														<a href="./2019_10_09.php">October 9, 2019</a>
													</li>
													<li>
														<a href="./2019_10_02.php">October 2, 2019</a>
													</li>
													<li>
														<a href="./2019_09_25.php">September 25, 2019</a>
													</li>
													<li>
														<a href="./2019_09_18.php">September 18, 2019</a>
													</li>
													<li>
														<a href="./2019_09_11.php">September 11, 2019</a>
													</li>
													<li>
														<a href="./2019_09_05.php">September 5, 2019</a>
													</li>
													<li>
														<a href="./2019_08_28.php">August 28, 2019</a>
													</li>
													<li>
														<a href="./2019_08_21.php">August 21, 2019</a>
													</li>
													<li>
														<a href="./2019_08_14.php">August 14, 2019</a>
													</li>
													<li>
														<a href="./2019_08_07.php">August 7, 2019</a>
													</li>
													<li>
														<a href="./archive/">prior issues</a>
													</li>
												</ul>
											</div>
										</div>
									</fieldset>
								</div>
							</div>
						</div>
					</ContainerLayout>

					<Placeholder />
					<Top />

					<h3 className="_h3">Report Header</h3>

					<ContainerLayout>
						<div className="l-row l-report-header">
							<div className="l-col">
								<div className="see-all"></div>
								<h1>Annual Energy Review</h1>
								<div className="release-dates">
									<div className="publish-metadata">Superseded -- see MER for key annual tables</div>
								</div>
							</div>
							<div className="l-col">
								<div className="form-container do-not-print">
									<fieldset>
										<legend>Annual Energy Review archives</legend>
										<div className="dropdown-container no-js">
											<div className="dropdown-button">
												<span className="text">Select Year</span>
												<span className="ico d-arrow">
													<span>dropdown arrow</span>
												</span>
											</div>
											<div className="dropdown-menu">
												<ul>
													<li className="ico pdf">
														<a href="/038411.pdf">2011</a>
													</li>
													<li className="ico pdf">
														<a href="/038410.pdf">2010</a>
													</li>
													<li className="ico pdf">
														<a href="/038409.pdf">2009</a>
													</li>
													<li className="ico pdf">
														<a href="/038408.pdf">2008</a>
													</li>
													<li>
														<a href="/">all archives</a>
													</li>
												</ul>
											</div>
										</div>
									</fieldset>
								</div>
							</div>
						</div>
					</ContainerLayout>

					<Placeholder />
					<Top />
					<h3 className="_h3">Nested</h3>
					<p className="_p">
						When nested within a <code>primary</code>
						<span className="not-used">
							, <code>primary-alt</code>, <code>secondary</code>,<code>secondary-alt</code>, or <code>article-alt</code>
						</span>
						column.
						<br />
						Example:
						<a href="http://www.eia.gov/totalenergy/data/monthly/whatsnew.php">http://www.eia.gov/totalenergy/data/monthly/whatsnew.php</a>
					</p>

					<ContainerLayout>
						<div className="primary">
							<h1>What's New in Monthly Energy Review</h1>
							<div className="l-row l-report-header">
								<div className="l-col">
									<div className="release-dates">
										<span className="responsive-container">
											September 2019
											<a href="pdf/mer.pdf">
												<span className="ico pdf">
													<span>PDF</span>
												</span>
											</a>
											<span className="pipe">|</span>
											<a href="previous.php">previous editions</a>
										</span>
									</div>
									<div className="release-dates">
										<span className="responsive-container">
											<span className="label">Release Date:</span>
											<span className="date">September 25, 2019</span>
										</span>
										<span className="responsive-container">
											<span className="label">Next Release Date:</span>
											<span className="date">October 25, 2019</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</ContainerLayout>
					<Placeholder />
					<Top />
					<PetroleumWeekly />
					<Top />
				</span>
			</Page>
		)
	}
}

export default ModulesReportHeaders
