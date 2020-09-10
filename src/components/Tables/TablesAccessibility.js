import React, { Component } from "react"

import TablesBasicExample from "./TablesBasicExample"
import TablesHeadDoubleExample from "./TablesHeadDoubleExample"
import TablesRowSectionHeadExample from "./TablesRowSectionHeadExample"
import Top from "../Placeholders/Top"
class TablesAccessibility extends Component {
	render() {
		return (
			<>
				<h2 className="_h2">Accessible Tables</h2>
				<p className="_p">Data tables are used to organize data with a logical relationship in grids. Accessible tables need HTML markup that indicates header cells and data cells and defines their relationship. Assistive technologies use this information to provide context to users.</p>

				<TablesBasicExample />
				<Top />
				<TablesRowSectionHeadExample />
				<Top />
				<TablesHeadDoubleExample />
			</>
		)
	}
}
export default TablesAccessibility
