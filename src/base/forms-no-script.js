import React, { Component } from "react";

class BaseFormsNoScript extends Component {
	render() {
		return (
			<div class="right-content">
				<h1 class="_h1">Forms</h1>
				<h3 class="_h3">No Javascript</h3>

				<div class="l-row l-full-width-col">
					<div class="l-col">
						<div class="form-container js do-not-print">
							<fieldset>
								<legend>Archive</legend>
								<div class="dropdown-container">
									<div class="dropdown-button">
										<span class="text">
											Need to add archive
										</span>
										<span class="ico d-arrow">
											<span>DOWN ARROW</span>
										</span>
									</div>
									<div class="dropdown-menu">
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

				<h3 class="_h3">Javascript</h3>
				<div class="l-row l-full-width-col">
					<div class="l-col">
						<div class="form-container js do-not-print">
							<fieldset>
								<legend>Archive</legend>
								<div class="dropdown-container">
									<div class="dropdown-button">
										<span class="text">
											Need to add archive
										</span>
										<span class="ico d-arrow">
											<span>DOWN ARROW</span>
										</span>
									</div>
									<div class="dropdown-menu">
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

				<h3 class="_h3">///</h3>

				<div class="l-row l-full-width-col">
					<div class="l-col">
						<div class="dropdown-container">
							<h4>Label</h4>
							<div class="dropdown-button">
								<span class="text">All available</span>
								<span class="ico d-arrow">
									<span>DOWN ARROW</span>
								</span>
							</div>
							<div class="dropdown-menu">
								<ul>
									<li class="head">
										<h2>Most requested data</h2>
									</li>
									<li class="ico pdf">
										<a href="/">Item</a>
									</li>
									<li class="ico xls">
										<a href="/">Item</a>
									</li>
									<li class="ico csv">
										<a href="/">Item</a>
									</li>
									<li class="ico html">
										<a href="/">Item</a>
									</li>
									<li class="ico json">
										<a href="/">Item</a>
									</li>
									<li class="ico doc">
										<a href="/">Item</a>
									</li>
									<li class="ico ppt">
										<a href="/">Item</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BaseFormsNoScript;
