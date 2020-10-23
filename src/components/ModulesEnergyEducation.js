import React, { Component } from "react"
import { Link } from "react-router-dom"
import Page from "./Page"
import EnergyEducationExample from "./States/EnergyEducationExample"

class ModulesEnergyEducation extends Component {
	render() {
		return (
			<Page title="Energy Education">
				<span className="modules">
					<h1 className="_h1">Energy Education</h1>
					<p className="_p">
						If any of the <code>h3</code> anchors are empty, the closest <code>&lt;li class="l-col"&gt;</code> will be hidden programatically. (See <Link to="/style-guide/states/empty-list-items">Empty List-items</Link> for more information)
					</p>

					<EnergyEducationExample />
				</span>
			</Page>
		)
	}
}

export default ModulesEnergyEducation
