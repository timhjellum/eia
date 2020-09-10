import React, { Component } from "react"

import Page from "./Page"
import Top from "./Placeholders/Top"
import Legend from "./Placeholders/Legend"
import Placeholder from "./Placeholders/Placeholder"
import LoremIpsum from "./Placeholders/LoremIpsum"
import ContainerWrapper from "./Containers/ContainerWrapper"
import ContainerLayout from "./Containers/ContainerLayout"

class LayoutsFullPage extends Component {
	render() {
		return (
			<Page title="Coming Soon">
				<h3 className="_h3">Visualizations</h3>
				<span className="layouts">
					<h1 className="_h1">Nested Layouts</h1>
					<h3 className="_h3">Introduction</h3>

					<h2 className="_h2">Single Columns</h2>
					<Legend />
					<ContainerWrapper>
						<ContainerLayout></ContainerLayout>
					</ContainerWrapper>
				</span>
			</Page>
		)
	}
}
export default LayoutsFullPage
