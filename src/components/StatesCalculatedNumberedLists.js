import React, { Component } from "react"
import Page from "./Page"
import ContainerLayout from "./Containers/ContainerLayout"
import Top from "./Placeholders/Top.js"
import CalculatedNumberedListsExample from "./Lists/CalculatedNumberedListsExample"
import CalculatedNumberedLists from "./Lists/CalculatedNumberedLists"

class StatesCalculatedNumberedLists extends Component {
	render() {
		return (
			<Page title="States Numbered Lists">
				<span className="states">
					<h1 className="_h1">States Numbered Lists</h1>
					<ContainerLayout>
						<div className="article">
							<div className="accordion-content">
								<CalculatedNumberedListsExample />
								<CalculatedNumberedLists />
							</div>
						</div>
					</ContainerLayout>
					<Top />
				</span>
			</Page>
		)
	}
}

export default StatesCalculatedNumberedLists
