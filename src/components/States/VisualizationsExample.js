import React, { Component } from "react"

class VisualizationsExample extends Component {
	render() {
		return (
			<div className="l-row l-six-col-even visualizations">
				<h1>Interactive Visualizations, Data, &amp; Multimedia</h1>

				<div className="l-col">
					<ul>
						<li>
							<a href="/">
								<div className="circle">
									<img src="https://www.eia.gov/global/images/interactive/petroleum-map.png" alt="U.S. Petroleum Infrastructure Map" />
								</div>
								<h3>U.S. Petroleum Infrastructure Map </h3>
							</a>
						</li>
					</ul>
				</div>
				<div className="l-col">
					<ul>
						<li>
							<a href="/">
								<div className="circle">
									<img src="https://www.eia.gov/global/images/interactive/fossil-fuel-map.png" alt="U.S. Fossil Fuel Resource Map" />
								</div>
								<h3>U.S. Fossil Fuel Resource Map </h3>
							</a>
						</li>
					</ul>
				</div>
				<div className="l-col">
					<ul>
						<li>
							<a href="/">
								<div className="circle">
									<img src="https://www.eia.gov/global/images/interactive/crude-oil-import-data.png" alt="U.S. Crude Import Tracking Tool" />
								</div>
								<h3>U.S. Crude Import Tracking Tool </h3>
							</a>
						</li>
					</ul>
				</div>
				<div className="l-col">
					<ul>
						<li>
							<a href="/">
								<div className="circle">
									<img src="https://www.eia.gov/global/images/interactive/steo-data-browser.png" alt="STEO Data Browser" />
								</div>
								<h3>STEO Data Browser </h3>
							</a>
						</li>
					</ul>
				</div>
				<div className="l-col">
					<ul>
						<li>
							<a href="/">
								<div className="circle">
									<img src="https://www.eia.gov/global/images/interactive/radio.png" alt="Radio Spot" />
								</div>
								<h3>Radio Spot </h3>
							</a>
						</li>
					</ul>
				</div>
				<div className="l-col">
					<ul>
						<li>
							<a href="/">
								<div className="circle">
									<img src="https://www.eia.gov/global/images/interactive/video.png" alt="Trends in Energy Video" />
								</div>
								<h3>Trends in Energy Video </h3>
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
export default VisualizationsExample
