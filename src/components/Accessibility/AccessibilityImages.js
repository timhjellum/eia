import React, { Component } from "react"

import Top from "./Placeholders/Top"
import SVGBestPractices from "../Images/SVGBestPractices.js"
import AccessibilityImageBestPractices from "../Accessibility/AccessibilityImageBestPractices.js"
import ImageDescriptions from "../Images/ImageDescriptions.js"
import ImageGuidelines from "../Images/ImageGuidelines.js"
import ImageIntroduction from "../Images/ImageIntroduction.js"

class AccessibilityImages extends Component {
	render() {
		return (
			<>
				<ImageIntroduction />
				<ImageGuidelines />
				<ImageDescriptions />
				<AccessibilityImageBestPractices />
				<SVGBestPractices />
				<Top />
			</>
		)
	}
}

export default AccessibilityImages
