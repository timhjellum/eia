import React, { Component } from "react"

class ThemeUpcomingReleasesExample extends Component {
	render() {
		return (
			<div className="primary hide-mt">
				<ul className="upcoming-releases">
					<li className="head">
						<h2>Upcoming Releases </h2>
					</li>
					<li>
						<a href="/petroleum/gasdiesel/" title="Gasoline and Diesel Fuel Update" className="link-label">
							Gasoline and Diesel Fuel Update<em>: 5:00 p.m. ET, Monday</em>
						</a>
					</li>
					<li>
						<a href="/petroleum/supply/weekly/" title="Weekly Petroleum Status Report" className="link-label">
							Weekly Petroleum Status Report<em>: 10:30 a.m. ET, Wednesday</em>
						</a>
					</li>
					<li>
						<a href="/petroleum/heatingoilpropane/" title="Heating Oil and Propane Update" className="link-label">
							Heating Oil and Propane Update<em>: After 1:00 p.m. ET, Wednesday (Oct - March only)</em>
						</a>
					</li>
					<li>
						<a href="/petroleum/weekly/" title="This Week in Petroleum" className="link-label">
							This Week in Petroleum<em>: After 1:00 p.m. ET, Wednesday</em>
						</a>
					</li>
					<li style={{ display: "none" }}>
						<a href="" title="" className="link-label">
							<em>: </em>
						</a>
					</li>
					<li style={{ display: "none" }}>
						<a href="" title="" className="link-label">
							<em>: </em>
						</a>
					</li>
					<li className="foot">
						<a href="/reports/upcoming.php">See all upcoming</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default ThemeUpcomingReleasesExample
