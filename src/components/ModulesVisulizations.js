import React, { Component } from "react"
import Page from "./Page"
import { Link } from "react-router-dom"
import Top from "./Placeholders/Top.js"
import Visualizations from "./States/Visualizations"
import VisualizationsExample from "./States/VisualizationsExample"
import ContainerLayout from "./Containers/ContainerLayout"

class Visulizations extends Component {
	render() {
		return (
			<Page title="Coming Soon">
				<span className="modules">
					<h1 className="_h1">Visualizations</h1>
					<p className="_p">
						If any of the <code>h3</code> anchors are empty, the closest <code>&lt;li class="l-col"&gt;</code>
						will be hidden programatically.{" "}
						<p className="_p">
							(See {/* <Link to="/states/link-lists">Link Lists</Link> and */}
							<Link to="/style-guide/states/empty-list-items">Empty List-items</Link> for more information)
						</p>
					</p>

					<ContainerLayout>
						<VisualizationsExample />
					</ContainerLayout>
					<Visualizations />

					<Top />
					<h3 className="_h3">General Icons</h3>
					<span className="_visualizations-icons">
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/aeo.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/afv.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/afv-orig.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/api.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/bulk-download.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/calc.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/coal-data-browser.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/coal-infrastructure-map.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/crude-oil-import-data.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/disruptions.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/electricity-data-browser.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/electricity-infrastructure-map.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/electricity-map.jpg" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/embed.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/energy-infrastructure-map.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/excel.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/fossil-fuel-map.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/google-sheets.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/ieo.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/ies.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/international.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/natural-gas-nav.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/natural-gas-map.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/natural-gas-query.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/nuclear-outages-v1.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/nuclear-outages-v2.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/petroleum-map.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/petroleum-infrastructure-map.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/play.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/radio.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/renewables-map.jpg" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/renewables-plant-map.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/steo.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/total-energy-mer.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/us.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/video.png" alt="" />
							</div>
						</div>
						<div className="_source-icon">
							<div className="circle">
								<img src="https://www.eia.gov/global/images/interactive/wind-map.png" alt="" />
							</div>
						</div>
					</span>
					<Top />
				</span>
			</Page>
		)
	}
}
export default Visulizations
