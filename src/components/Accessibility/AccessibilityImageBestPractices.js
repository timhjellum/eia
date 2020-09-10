import React, { Component } from "react"
import AccessibilityImageLabelAriaExample from "./AccessibilityImageLabelAriaExample"
import Top from "../Placeholders/Top"
import ImageAlt from "../Images/ImageAlt"
import ImageFigure from "../Images/ImageFigure"
import AccessibilityDecorativeImages from "./AccessibilityDecorativeImages"

class AccessibilityImageBestPractices extends Component {
	render() {
		return (
			<>
				<h2 className="_h2">Accessible Images Best&nbsp;Practices</h2>
				<ImageAlt />
				<Top />
				<AccessibilityImageLabelAriaExample />
				<Top />
				<ImageFigure />
				<Top />
				<AccessibilityDecorativeImages />
			</>
		)
	}
}

export default AccessibilityImageBestPractices
