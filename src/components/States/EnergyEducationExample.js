import React, { Component } from "react"

class EnergyEducationExample extends Component {
	render() {
		return (
			<div className="l-row l-three-col-even energy-education">
				<h1>Energy Education</h1>
				<div className="l-col">
					<span className="ico energy-education petroleum"></span>
					<ul>
						<li className="head">
							<h2>
								<a href="somelink.html">Oil: Crude &amp; Petroleum Products Explained</a>
							</h2>
						</li>
						<li className="sub-head">
							<a href="somelink.html">Gasoline Prices and Outlook</a>
						</li>
						<li className="foot">
							<a href="somelink.html">See more petroleum topics</a>
						</li>
					</ul>
				</div>
				<div className="l-col">
					<span className="ico energy-education faq"></span>
					<ul>
						<li className="head">
							<h2>
								<a href="somelink.html">FAQs</a>
							</h2>
						</li>
						<li className="sub-head">
							<a href="somelink.html">What are Mcf, Btu, and therms? How do I convert prices in Mcf to Btu's and therms?</a>
						</li>
						<li className="foot">
							<a href="somelink.html">See all petroleum FAQs</a>
						</li>
					</ul>
				</div>
				<div className="l-col">
					<span className="ico energy-education energy-kids"></span>
					<ul>
						<li className="head">
							<h2>
								<a href="/">Energy Kids</a>
							</h2>
						</li>
						<li className="sub-head">
							<a href="/">How was oil formed?</a>
						</li>
						<li className="foot">
							<a href="/">See nonrenewable sources on Energy Kids</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
export default EnergyEducationExample
