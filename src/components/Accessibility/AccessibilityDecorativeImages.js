import React, { Component } from "react"

class AccessibilityDecorativeImages extends Component {
	render() {
		return (
			<>
				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility _accessibility-requirement">Accessibility requirement: </span>
					</strong>
				</p>
				<h4 className="_accessibility _h4">Hiding Decorative Images from Assistive Technology</h4>
				<p className="_accessibility _p">Images that have no function or information content whatsoever are decorative images. These images can include stock photos included just for “eye candy.” Such images should be hidden from assistive technologies.</p>
				<p className="_accessibility _p">Decorative images can be hidden from screen readers in multiple ways:</p>
				<ul className="_accessibility _ul bullet">
					<li className="_accessibility _li">
						using a null <code>alt</code> attribute
					</li>
					<li className="_accessibility _li">
						using ARIA <code>role="presentation"</code>
					</li>
					<li className="_accessibility _li">using a CSS background image</li>
				</ul>
			</>
		)
	}
}
export default AccessibilityDecorativeImages
