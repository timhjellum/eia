import React, { Component } from "react"

import Page from "./Page"

class BaseFormsNoScript extends Component {
	render() {
		return (
			<Page title="Coming Soon">
				<span className="base">
					<h1 className="_h1">Forms</h1>
					<h3 className="_h3">No Javascript</h3>

					<div className="l-row l-full-width-col">
						<div className="l-col">
							<div className="form-container js do-not-print">
								<fieldset>
									<legend>Archive</legend>
									<div className="dropdown-container">
										<div className="dropdown-button">
											<span className="text">Need to add archive</span>
											<span className="ico d-arrow">
												<span>DOWN ARROW</span>
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
							{/* end form */}
						</div>
					</div>

					<h3 className="_h3">Javascript</h3>
					<div className="l-row l-full-width-col">
						<div className="l-col">
							<div className="form-container js do-not-print">
								<fieldset>
									<legend>Archive</legend>
									<div className="dropdown-container">
										<div className="dropdown-button">
											<span className="text">Need to add archive</span>
											<span className="ico d-arrow">
												<span>DOWN ARROW</span>
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

					<h3 className="_h3">///</h3>

					<div className="l-row l-full-width-col">
						<div className="l-col">
							<div className="dropdown-container">
								<h4>Label</h4>
								<div className="dropdown-button">
									<span className="text">All available</span>
									<span className="ico d-arrow">
										<span>DOWN ARROW</span>
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
				</span>
			</Page>
		)
	}
}

export default BaseFormsNoScript
