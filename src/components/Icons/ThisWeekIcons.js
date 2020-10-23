import React, { Component } from "react"

import ContainerLayout from "../Containers/ContainerLayout"

class ThisWeekIcons extends Component {
	render() {
		return (
			<>
				<div className="_this-week-icons">
					<h2 className="_h2">This Week in...</h2>

					<h4 className="_h4">Inactive</h4>
					<div className="_source-icon">
						<a href="/" className="ico this-week-analysis">
							<span>Analysis</span>
						</a>
					</div>

					<div className="_source-icon">
						<a href="/" className="ico crude-oil">
							<span>Crude Oil</span>
						</a>
					</div>

					<div className="_source-icon">
						<a href="/" className="ico gasoline">
							<span>Gasoline</span>
						</a>
					</div>

					<div className="_source-icon">
						<a href="/" className="ico distillate">
							<span>Distillate</span>
						</a>
					</div>

					<div className="_source-icon">
						<a href="/" className="ico propane">
							<span>Propane</span>
						</a>
					</div>

					<h4 className="_h4">Tabs</h4>
					<div className="_source-icon">
						<a href="/" className="ico this-week-analysis active">
							<span>Analysis</span>
						</a>
					</div>

					<div className="_source-icon">
						<a href="/" className="ico crude-oil active">
							<span>Crude Oil</span>
						</a>
					</div>

					<div className="_source-icon">
						<a href="/" className="ico gasoline active">
							<span>Gasoline</span>
						</a>
					</div>

					<div className="_source-icon">
						<a href="/" className="ico distillate active">
							<span>Distillate</span>
						</a>
					</div>

					<div className="_source-icon">
						<a href="/" className="ico propane active">
							<span>Propane</span>
						</a>
					</div>
				</div>
				<div className="_icon-vertical">
					<div className="_source-icon">
						<h4 className="_h4">Tabs</h4>
						<div className="g_container">
							<div className="tabs petroleum-weekly">
								<ul>
									<li className="ui-state-active">
										<a href="/">
											<span className="ico grid-line">
												<span>Graph</span>
											</span>
											Contract 1
										</a>
									</li>
									<li>
										<a href="/">
											<span className="ico grid-line">
												<span>Graph</span>
											</span>
											Contract 2
										</a>
									</li>
									<li>
										<a href="/">
											<span className="ico grid-line">
												<span>Graph</span>
											</span>
											Contract 3
										</a>
									</li>
									<li>
										<a href="/">
											<span className="ico grid-line">
												<span>Graph</span>
											</span>
											Contract 4
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="_source-icon">
						<div className="l-row l-report-header-petroleum-weekly">
							<h4 className="_h4">Tabs</h4>
							<div className="release-dates">
								<span className="responsive-container">
									<a href="/" className="ico download iframe">
										Download data
									</a>
								</span>

								<span className="responsive-container">
									<a href="/" className="ico printer">
										Print
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default ThisWeekIcons
