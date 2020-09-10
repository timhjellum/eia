import React, { Component } from "react"
import Page from "./Page"

import Top from "./Placeholders/Top"
import ContainerLayout from "./Containers/ContainerLayout"

import TablesAccessibility from "./Tables/TablesAccessibility"

import AccessibilityLinks from "./Accessibility/AccessibilityLinks"

import AccessibilityImageBestPractices from "./Accessibility/AccessibilityImageBestPractices"
import ImageDescriptions from "./Images/ImageDescriptions"
import ImageGuidelines from "./Images/ImageGuidelines"

import AccessibilityInput from "./Accessibility/AccessibilityInput"
import AccessibilityButton from "./Accessibility/AccessibilityButton"
import AccessibilityFieldset from "./Accessibility/AccessibilityFieldset"
import AccessibilityCheckboxGroup from "./Accessibility/AccessibilityCheckboxGroup"
import AccessibilityCheckbox from "./Accessibility/AccessibilityCheckbox"
import AccessibilityCheckboxStandAlone from "./Accessibility/AccessibilityCheckboxStandAlone"
import AccessibilityRadiobuttonGroup from "./Accessibility/AccessibilityRadiobuttonGroup"
import AccessibilityTextarea from "./Accessibility/AccessibilityTextarea"
import AccessibilitySelectItemDropdown from "./Accessibility/AccessibilitySelectItemDropdown"

import Placeholder from "./LayoutsThumbs/Placeholder"

class Accessibility extends Component {
	render() {
		return (
			<Page title="Accessibility">
				<span className="base">
					<h1 className="_h1">Accessibility</h1>
					<h2 className="_h2">Forms</h2>

					<AccessibilityButton />
					<Top />
					<h4 className="_h4">Form Containers</h4>
					<AccessibilityFieldset />
					<Top />
					<h4 className="_h4">Radiobuttons and Checkboxes</h4>
					<p className="_p">Radiobuttons and Checkboxes must be clearly organized into groups and generally aligned uniformly with a corresponding textual label.</p>
					<AccessibilityCheckboxGroup />
					<Top />
					<AccessibilityCheckboxStandAlone />
					<Top />
					{/* <AccessibilityCheckbox />
										<Top />*/}
					<AccessibilityRadiobuttonGroup />
					<Top />
					<AccessibilityInput />
					<Top />
					<AccessibilityTextarea />
					<Top />
					<AccessibilitySelectItemDropdown />
					<Top />
					<h4 className="_h4">Validation</h4>
					<Placeholder />
					<Top />
					<AccessibilityLinks />
					<Top />
					<AccessibilityImageBestPractices />
					<Top />
					<TablesAccessibility />
				</span>
			</Page>
		)
	}
}

export default Accessibility
