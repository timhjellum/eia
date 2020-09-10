import React, { Component } from "react"

import ContainerLayout from "../Containers/ContainerLayout"
import AccessibilityLinkLabelAriaExample from "./AccessibilityLinkLabelAriaExample"
import AccessibilityLinkDescriptionAriaExample from "./AccessibilityLinkDescriptionAriaExample"

class AccessibilityLinks extends Component {
	render() {
		return (
			<>
				<h2 className="_h2">Accessible Links</h2>
				<h2 className="_h2">Links</h2>
				{/*
					<p className="_accessibility _p">
						<strong>How People with Disabilities Use Links</strong>
					</p>
					<p className="_accessibility _p">While screen readers can read a full page to a user, screen reader users may prefer to instead listen to a list of links. In that case, a screen reader may only read the link text and not the surrounding text.</p>
					<p className="_accessibility _p">Speech recognition software allows a user to avoid using a mouse. Users can speak the text of the link that they would like to follow.</p>
					<p className="_accessibility _p">Keyboard-only users may not be able to use a mouse to click links. They use a keyboard’s tab button to navigate through a page’s links, buttons, and form inputs. For such users, it is very important for them to see which item has focus at all times.</p>
					<p className="_accessibility _p">Colorblind users may not be able to perceive color cues. Typically, pages present links as a different color than their surrounding text. Adding underlines or other non-color indicators help users who may not see color. Users who are not comfortable with technology may also appreciate having links underlined.</p>
					<p className="_accessibility _p">https://usability.yale.edu/web-Accessibilityarticles/links</p>

					<ul className="_accessibility _ul _bullet">
						<li className="_accessibility _li">
							<span className="eia-accessibility-link-link">Accessable Link</span>
						</li>
						<li className="_accessibility _li">
							<span className="eia-accessibility-link-active">Accessable Link Active</span>
						</li>
						<li className="_accessibility _li">
							<span className="eia-accessibility-link-visited">Accessable Link Visited</span>
						</li>
						<li className="_accessibility _li">
							<span className="eia-accessibility-link-hover">Accessable Link Hover</span>
						</li>
						<li className="_accessibility _li">
							<span className="eia-accessibility-link-focus">Accessable Link Focus</span>
						</li>
					</ul>
					*/}

				<h3 className="_h3">Screen-reader Only Link with Description</h3>
				<p className="_accessibility _p">It’s most important for link text to make sense without the surrounding sentences or content. The link text alone should convey the function and purpose of the link. Link text should also be unique and easy to speak out loud.</p>
				<p className="_accessibility _p">Consider these guidelines when writing link text:</p>
				<ul className="_accessibility _ul _bullet">
					<li className="_accessibility _li">Avoid link text like “Click Here,” “More,” and “Read More.” These kinds of links can be confusing when a screen reader reads them out of context.</li>
					<li className="_accessibility _li">Use unique link text where possible. Speech recognition software users may have a bad experience with duplicated link text.</li>
					<li className="_accessibility _li">It is OK to link a full sentence, but avoid longer.</li>
					<li className="_accessibility _li">Use judgment when linking full URLs. When linking a URL, consider users who must speak it out loud and who must listen to a screen reader announce it.</li>
				</ul>
				{/*
					<p className="_accessibility _p">
						<strong>Fallbacks</strong>
					</p>
					<p className="_accessibility _p">Occasionally, it may not be possible to make link text alone convey the link’s purpose out of context. In those cases, a few fallback strategies are available:</p>
					<ul className="_accessibility _ul _bullet">
						<li className="_accessibility _li">The link together with the surrounding sentence, paragraph, or list item should be enough to convey a link’s meaning or purpose.</li>
						<li className="_accessibility _li">You may give more context through the link’s title attribute.</li>
						<li className="_accessibility _li">These approaches create a worse experience for users with disabilities, so they should a last resort.</li>
					</ul>
					<p className="_accessibility _p">https://usability.yale.edu/web-Accessibilityarticles/links</p>
					*/}

				<p className="_accessibility _p">
					<a href="https://usability.yale.edu/web-Accessibilityarticles/links">https://usability.yale.edu/web-Accessibilityarticles/links</a>
				</p>
				<AccessibilityLinkLabelAriaExample />
				<AccessibilityLinkDescriptionAriaExample />
			</>
		)
	}
}

export default AccessibilityLinks
