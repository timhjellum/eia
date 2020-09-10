import React, { Component } from "react"
import Page from "./Page"

import AccordionsAllClosed from "./Accordions/AccordionsAllClosed"
import AccordionsAllOpen from "./Accordions/AccordionsAllOpen"
import AccordionsFirstOpen from "./Accordions/AccordionsFirstOpen"
import AccordionsTargetedOpen from "./Accordions/AccordionsTargetedOpen"

class ThemesAccordions extends Component {
	render() {
		return (
			<Page title="Accordions">
				<span className="themes">
					<h1 className="_h1">Accordions</h1>
					<AccordionsAllClosed />
					<AccordionsAllOpen />
					<AccordionsFirstOpen />
					<AccordionsTargetedOpen />
				</span>
			</Page>
		)
	}
}
export default ThemesAccordions
