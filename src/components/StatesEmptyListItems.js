import React, { Component } from "react"
import Page from "./Page"
import Top from "./Placeholders/Top.js"
import VisualizationsExample from "./States/VisualizationsExample"
import EnergyEducationExample from "./States/EnergyEducationExample"
import SecondaryExample from "./States/SecondaryExample"
import PrimaryExample from "./States/PrimaryExample"
import SecondaryAltExample from "./States/SecondaryAltExample"
import PrimaryAltExample from "./States/PrimaryAltExample"
import ThemeUpdatedDataSeries from "./Lists/ThemeUpdatedDataSeries"

class StatesEmptyListItems extends Component {
	componentDidMount() {
		//import Visualizations from "../assets/scripts/modules/_visualizations-hide-mt"
		//new Visualizations()
		/* === ON DEMAND SCRIPT === */
		let visualizations
		var isVisualizations = document.getElementsByClassName("visualizations")
		if (isVisualizations.length > 0) {
			if (typeof visualizations == "undefined") {
				import("../assets/scripts/modules/_visualizations-hide-mt")
					.then(x => {
						visualizations = new x.default()
						setTimeout(() => visualizations.runVisualizations())
					})
					.catch(() => console.log("visualizations-hide-mt"))
			} else {
				visualizations.runVisualizations()
			}
		}

		//import EnergyEducation from "../assets/scripts/modules/_energy-education-hide-mt"
		//new EnergyEducation()
		/* === ON DEMAND SCRIPT === */
		let energyEducation
		var isEnergyEducation = document.getElementsByClassName("energy-education")
		if (isEnergyEducation.length > 0) {
			if (typeof energyEducation == "undefined") {
				import("../assets/scripts/modules/_energy-education-hide-mt")
					.then(x => {
						energyEducation = new x.default()
						setTimeout(() => energyEducation.runEnergyEducation())
					})
					.catch(() => console.log("energy-education-hide-mt"))
			} else {
				energyEducation.runEnergyEducation()
			}
		}

		//import UpdatedDataSeries from "../assets/scripts/modules/_updated-data-series-hide-mt"
		//new UpdatedDataSeries()
		// === ON DEMAND SCRIPT ===
		let updatedDataSeries
		var isUpdatedDataSeries = document.getElementsByClassName("updated-data-series")
		if (isUpdatedDataSeries.length > 0) {
			if (typeof updatedDataSeries == "undefined") {
				import("../assets/scripts/modules/_updated-data-series-hide-mt")
					.then(x => {
						updatedDataSeries = new x.default()
						setTimeout(() => updatedDataSeries.runUpdatedDataSeries())
					})
					.catch(() => console.log("updated-data-series-hide-mt"))
			} else {
				updatedDataSeries.runUpdatedDataSeries()
			}
		}

		//import PrimaryHide from "../assets/scripts/modules/_primary-hide-mt"
		//new PrimaryHide()
		// === ON DEMAND SCRIPT ===
		let primaryHide
		var isPrimaryHide = document.getElementsByClassName("primary")
		if (isPrimaryHide.length > 0) {
			if (typeof primaryHide == "undefined") {
				import("../assets/scripts/modules/_primary-hide-mt")
					.then(x => {
						primaryHide = new x.default()
						setTimeout(() => primaryHide.runPrimaryHide())
					})
					.catch(() => console.log("primary-hide-mt"))
			} else {
				primaryHide.runPrimaryHide()
			}
		}

		//import PrimaryAltHide from "../assets/scripts/modules/_primary-alt-hide-mt"
		//new PrimaryAltHide()
		// === ON DEMAND SCRIPT ===
		let primaryAltHide
		var isPrimaryAltHide = document.getElementsByClassName("primary-alt")
		if (isPrimaryAltHide.length > 0) {
			if (typeof primaryAltHide == "undefined") {
				import("../assets/scripts/modules/_primary-alt-hide-mt")
					.then(x => {
						primaryAltHide = new x.default()
						setTimeout(() => primaryAltHide.runPrimaryAltHide())
					})
					.catch(() => console.log("primary-alt-hide-mt"))
			} else {
				primaryAltHide.runPrimaryAltHide()
			}
		}

		//import SecondaryHide from "../assets/scripts/modules/_secondary-hide-mt"
		//new SecondaryHide()
		// === ON DEMAND SCRIPT ===
		let secondaryHide
		var isSecondaryHide = document.getElementsByClassName("secondary")
		if (isSecondaryHide.length > 0) {
			if (typeof secondaryHide == "undefined") {
				import("../assets/scripts/modules/_secondary-hide-mt")
					.then(x => {
						secondaryHide = new x.default()
						setTimeout(() => secondaryHide.runSecondaryHide())
					})
					.catch(() => console.log("secondary-hide-mt"))
			} else {
				secondaryHide.runSecondaryHide()
			}
		}

		//import SecondaryAltHide from "../assets/scripts/modules/_secondary-alt-hide-mt"
		//new SecondaryAltHide()
		// === ON DEMAND SCRIPT ===
		let secondaryAltHide
		var isSecondaryAltHide = document.getElementsByClassName("secondary-alt")
		if (isSecondaryAltHide.length > 0) {
			if (typeof secondaryAltHide == "undefined") {
				import("../assets/scripts/modules/_secondary-alt-hide-mt")
					.then(x => {
						secondaryAltHide = new x.default()
						setTimeout(() => secondaryAltHide.runSecondaryAltHide())
					})
					.catch(() => console.log("secondary-alt-hide-mt"))
			} else {
				secondaryAltHide.runSecondaryAltHide()
			}
		}
	}
	render() {
		return (
			<Page title="States Empty List Items">
				<span className="states">
					<h1 className="_h1">Empty List Items</h1>

					<PrimaryExample />
					<PrimaryAltExample />
					<SecondaryExample />
					<SecondaryAltExample />
					<Top />

					<VisualizationsExample />

					<Top />

					<EnergyEducationExample />

					<Top />

					<ThemeUpdatedDataSeries />
					<Top />
				</span>
			</Page>
		)
	}
}

export default StatesEmptyListItems
