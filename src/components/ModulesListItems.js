import React, { Component } from "react"
import Page from "./Page"
import Top from "./Placeholders/Top.js"
import Visualizations from "./Modules/Visualizations"
import EnergyEducation from "./Modules/EnergyEducation"
import Secondary from "./Modules/Secondary"
import Primary from "./Modules/Primary"
import SecondaryAlt from "./Modules/SecondaryAlt"
import PrimaryAlt from "./Modules/PrimaryAlt"
//import ThemeUpdatedDataSeries from "./Lists/ThemeUpdatedDataSeries"

class ModulesListItems extends Component {
	render() {
		return (
			<Page title="Modules List Items">
				<span className="modules">
					<h1 className="_h1">List Items</h1>
					<Primary />
					<Top />
					<PrimaryAlt />
					<Top />
					<Secondary />
					<Top />
					<SecondaryAlt />
					<Top />
					<Visualizations />
					<Top />
					<EnergyEducation />
					<Top />
					{/* 
					<ThemeUpdatedDataSeries />
					<Top />
					*/}
				</span>
			</Page>
		)
	}
}

export default ModulesListItems
