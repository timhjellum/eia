import React, { Component } from "react"
import Page from "./Page"
import Top from "./Placeholders/Top.js"
import ContainerLayout from "./Containers/ContainerLayout"
import VisualizationsExample from "./States/VisualizationsExample"
import Visualizations from "./States/Visualizations"
import EnergyEducationExample from "./States/EnergyEducationExample"
import EnergyEducation from "./States/EnergyEducation"

class StatesEmptyListItems extends Component {
	render() {
		return (
			<Page title="States Empty List Items">
				<span className="states">
					<h1 className="_h1">Empty List Items</h1>
					{/*
				<h3 className="_h3">.hide-mt</h3>
				<ContainerLayout>
					<div className="primary hide-mt">
						<ul>
							<li className="head">
								<h2>Lorem ipsum dolor sit amet consectetur</h2>
							</li>
							<li>
								<a href="somelink.html" title="">
									1) Lorem ipsum dolor sit amet
								</a>
							</li>
							<li>
								<a href="/">2) This should be hidden</a>
							</li>
							<li>
								<a href="somelink.html" title="">
									3) Lorem ipsum dolor sit amet
								</a>
							</li>
							<li>
								<a href="/">4) This should be hidden</a>
							</li>
							<li>
								<a href="somelink.html" title="">
									5) Lorem ipsum dolor sit amet
								</a>
							</li>
						</ul>
					</div>
				</ContainerLayout>

				<Top />
				<h3 className="_h3">.secondary.hide-mt a</h3>

				<ContainerLayout>
					<div className="secondary hide-mt">
						<ul>
							<li className="head">
								<h2>Lorem ipsum dolor sit amet consectetur</h2>
							</li>
							<li>
								<a href="somelink.html" title="">
									1) Lorem ipsum dolor sit amet
								</a>
							</li>
							<li>
								<a href="/">2) This should be hidden</a>
							</li>
							<li>
								<a href="somelink.html" title="">
									3) Lorem ipsum dolor sit amet
								</a>
							</li>
							<li>
								<a href="/">4) This should be hidden</a>
							</li>
							<li>
								<a href="somelink.html" title="">
									5) Lorem ipsum dolor sit amet
								</a>
							</li>
						</ul>
					</div>
				</ContainerLayout>

				<Top />
				<h3 className="_h3">.primary-alt.hide-mt a</h3>

				<ContainerLayout>
					<div className="primary-alt hide-mt">
						<ul>
							<li className="head">
								<h2>Lorem ipsum dolor sit amet consectetur</h2>
							</li>
							<li>
								<a href="somelink.html" title="">
									1) Lorem ipsum dolor sit amet
								</a>
							</li>
							<li>
								<a href="/">2) This should be hidden</a>
							</li>
							<li>
								<a href="somelink.html" title="">
									3) Lorem ipsum dolor sit amet
								</a>
							</li>
							<li>
								<a href="/">4) This should be hidden</a>
							</li>
							<li>
								<a href="somelink.html" title="">
									5) Lorem ipsum dolor sit amet
								</a>
							</li>
						</ul>
					</div>
				</ContainerLayout>

				<Top />
				<h3 className="_h3">.secondary-alt.hide-mt a</h3>

				<ContainerLayout>
					<div className="secondary-alt hide-mt">
						<ul>
							<li className="head">
								<h2>Lorem ipsum dolor sit amet consectetur</h2>
							</li>
							<li>
								<a href="somelink.html" title="">
									1) Lorem ipsum dolor sit amet
								</a>
							</li>
							<li>
								<a href="/">2) This should be hidden</a>
							</li>
							<li>
								<a href="somelink.html" title="">
									3) Lorem ipsum dolor sit amet
								</a>
							</li>
							<li>
								<a href="/">4) This should be hidden</a>
							</li>
							<li>
								<a href="somelink.html" title="">
									5) Lorem ipsum dolor sit amet
								</a>
							</li>
						</ul>
					</div>
				</ContainerLayout>

				<Top />
				<h3 className="_h3">.updated-data-series a</h3>

				<ContainerLayout>
					<ul className="updated-data-series">
						<li className="head">
							<h2>Lorem ipsum dolor sit amet consectetur</h2>
						</li>
						<li>
							<a href="somelink.html" title="">
								1) Lorem ipsum dolor sit amet
							</a>
						</li>
						<li>
							<a href="/">2) This should be hidden</a>
						</li>
						<li>
							<a href="somelink.html" title="">
								3) Lorem ipsum dolor sit amet
							</a>
						</li>
						<li>
							<a href="/">4) This should be hidden</a>
						</li>
						<li>
							<a href="somelink.html" title="">
								5) Lorem ipsum dolor sit amet
							</a>
						</li>
					</ul>
				</ContainerLayout>

				<Top />
				<h3 className="_h3">Updated Data Series Module</h3>

				<ContainerLayout>
					<div className="primary hide-mt">
						<ul className="updated-data-series">
							<li className="head">
								<h2>Lorem ipsum dolor sit amet consectetur</h2>
							</li>
							<li>
								<a href="somelink.html" title="">
									1) Lorem ipsum dolor sit amet
								</a>
							</li>
							<li>
								<a href="/">2) This should be hidden</a>
							</li>
							<li>
								<a href="somelink.html" title="">
									3) Lorem ipsum dolor sit amet
								</a>
							</li>
							<li>
								<a href="/">4) This should be hidden</a>
							</li>
							<li>
								<a href="somelink.html" title="">
									5) Lorem ipsum dolor sit amet
								</a>
							</li>
						</ul>
					</div>
				</ContainerLayout>

				<Top />
				*/}
					<h3 className="_h3">Visualizations</h3>
					<ContainerLayout>
						<VisualizationsExample />
					</ContainerLayout>
					<Visualizations />
					<Top />

					<h3 className="_h3">Energy Education</h3>
					<ContainerLayout>
						<EnergyEducationExample />
					</ContainerLayout>
					<EnergyEducation />
					<Top />
				</span>
			</Page>
		)
	}
}

export default StatesEmptyListItems
