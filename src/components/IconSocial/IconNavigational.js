import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"

class IconNavigational extends Component {
	/*
	componentDidMount() {
		var isSourceIcon = document.getElementsByClassName("_source-icon")
		if (isSourceIcon.length > 0) {
			const items = document.querySelectorAll("._source-icon")
			var i
			for (i = 0; i < items.length; i++) {
				var linkLabelText = items[i].getElementsByClassName("._h4-label").innerHTML
				var itemLabel = items[i].getElementsByTagName("h4")
				itemLabel.innerHTML = linkLabelText
			}
		}
	}
	*/
	render() {
		return (
			<>
				<h3 className="_h3">Navigational Icons</h3>
				<span className="_navigational-icons">
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu analysis-projections-icon">
								<span>Analysis &amp; Projections</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu a-z-index-icon">
								<span>A-Z Index</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu beta-icon">
								<span>EIA Beta</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu coal-icon">
								<span>Coal</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu upcoming-icon">
								<span>Coming Up</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu consumption-icon">
								<span>Consumption &amp; Efficiency</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu data-tools-model-icon">
								<span>Data Tools &amp; Models</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu electricity-icon">
								<span>Electricity</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu email-complex-icon">
								<span>Email Updates</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu email-simple">
								<span>RSS Feeds</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu energy-explained-icon">
								<span>Energy Explained</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu energy-in-brief-icon">
								<span>Energy in Brief</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu environment-icon">
								<span>Environment</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu disruptions-icon">
								<span>Disruptions</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu faq-icon">
								<span>FAQs</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu featured-reports-icon">
								<span>Featured Reports</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu markets-finance-icon">
								<span>Markets &amp; Finance</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu follow-us-icon">
								<span>Follow us. . .</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu eia-glossary-icon">
								<span>Glossary</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu international-icon">
								<span>International</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu maps-icon">
								<span>Maps</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu natural-gas-icon">
								<span>Natural Gas</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu nuclear-icon">
								<span>Nuclear &amp; Uranium</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu open-data-icon">
								<span>Open Data</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu petroleum-icon">
								<span>Petroleum &amp; Other Liquids</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu press-room-icon">
								<span>Press Room</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu regional-icon">
								<span>regional-icon</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu renewable-icon">
								<span>Renewable &amp; Alternative Fuels</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu reports-icon">
								<span>All Reports &amp; Publications</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu rss-complex-icon">
								<span>RSS Feeds</span>
							</span>
						</ContainerLayout>
					</div>

					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu survey-forms-icon">
								<span>EIA Survey Forms</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu teachers-icon">
								<span>For Teachers</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu today-in-energy-icon">
								<span>Today in Energy</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu total-energy-icon">
								<span>Total Energy</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu states-icon">
								<span>U.S. States</span>
							</span>
						</ContainerLayout>
					</div>
					<div className="_source-icon">
						<h4 className="_h4"></h4>
						<ContainerLayout>
							<span className="ico-menu whats-new-icon">
								<span>What's New?</span>
							</span>
						</ContainerLayout>
					</div>
				</span>
			</>
		)
	}
}

export default IconNavigational
{
	/*
				<h3 className="_h3">Large Secondary Icons</h3>

				<div className="_source-icon">
					<h4 className="_h4"></h4>
					<ContainerLayout>
						<ul className="icon-list">
							<li className="ico rss-complex-icon">
								<a href="/">Get the What's New RSS feed</a>
							</li>
						</ul>
					</ContainerLayout>
				</div>
				<div className="_source-icon">
					<h4 className="_h4"></h4>
					<ContainerLayout>
						<ul className="icon-list">
							<li className="ico email-simple">
								<a href="/">Sign up for email notifications </a>
							</li>
						</ul>
					</ContainerLayout>
				</div>
				<div className="_source-icon">
					<h4 className="_h4"></h4>
					<ContainerLayout>
						<ul className="icon-list">
							<li className="ico reports-icon">
								<a href="/">Full list of upcoming reports</a>
							</li>
						</ul>
					</ContainerLayout>
				</div>
*/
}
