import React, { Component } from "react"

import Page from "./Page"
import Top from "./Placeholders/Top.js"

import TextareaConfig from "./Forms/TextareaConfig"

import AccessibilityInput from "./Accessibility/AccessibilityInput"
import AccessibilityButton from "./Accessibility/AccessibilityButton"
import AccessibilityFieldset from "./Accessibility/AccessibilityFieldset"
import AccessibilityCheckboxGroup from "./Accessibility/AccessibilityCheckboxGroup"
import AccessibilityCheckbox from "./Accessibility/AccessibilityCheckbox"
import AccessibilityCheckboxStandAlone from "./Accessibility/AccessibilityCheckboxStandAlone"
import AccessibilityRadiobuttonGroup from "./Accessibility/AccessibilityRadiobuttonGroup"
import AccessibilityTextarea from "./Accessibility/AccessibilityTextarea"
import AccessibilitySelectItemDropdown from "./Accessibility/AccessibilitySelectItemDropdown"
import Select from "./Forms/Select"

import Placeholder from "./LayoutsThumbs/Placeholder"

class Forms extends Component {
	render() {
		return (
			<Page title="Forms">
				<span className="base">
					<h1 className="_h1">Forms</h1>
					<h4 className="_h4">Form Buttons</h4>
					<AccessibilityButton />
					<h4 className="_h4">Form Containers</h4>
					<AccessibilityFieldset />
					<Top />
					<h4 className="_h4">Select</h4>
					<Select />
					<AccessibilitySelectItemDropdown />
					<Top />
					<h4 className="_h4">Single-line Input</h4>
					<AccessibilityInput />
					<Top />
					<h4 className="_h4">Radiobuttons and Checkboxes</h4>
					<p className="_p">Radiobuttons and Checkboxes must be clearly organized into groups and generally aligned uniformly with a corresponding textual label.</p>
					<AccessibilityCheckboxGroup />
					<AccessibilityCheckboxStandAlone />
					<AccessibilityCheckbox />
					<AccessibilityRadiobuttonGroup />
					<Top />
					<h4 className="_h4">Multi-line Input or Textarea</h4>
					<AccessibilityTextarea />
					<TextareaConfig />

					<Top />
					<h4 className="_h4">Validation</h4>
					<Placeholder />
					{/*
					<Validation />
					<Disabled />
					<Autocomplete />
					<Target />
					<Enctype />
					<NoValidate />
					<Name />
					<Required />
					<InputAutocomplete />
					<InputAutofocus />
					*/}
					<Top />
				</span>
			</Page>
		)
	}
}

export default Forms
