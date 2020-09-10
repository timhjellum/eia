import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"

import IconicListItemsExample from "./IconicListItemsExample"

import ListIcoPDF from "./PDF"
import ListIcoXLS from "./XLS"
import ListIcoCSV from "./CSV"
import ListIcoDOC from "./DOC"
import ListIcoPPT from "./PPT"
import ListIcoInteractive from "./Interactive"
import ListIcoHTML from "./HTML"
import ListIcoTXT from "./TXT"
import ListIcoImage from "./Image"
import ListIcoJSON from "./JSON"
import ListIcoEFILE from "./EFILE"
import ListIcoPEDRO from "./Pedro"

class IconicListItems extends Component {
	render() {
		return (
			<span className="iconic-list-item">
				<ContainerLayout>
					<IconicListItemsExample />
				</ContainerLayout>

				<div className="_source-icon">
					<ListIcoPDF />
				</div>
				<div className="_source-icon">
					<ListIcoXLS />
				</div>
				<div className="_source-icon">
					<ListIcoCSV />
				</div>
				<div className="_source-icon">
					<ListIcoInteractive />
				</div>
				<div className="_source-icon">
					<ListIcoPPT />
				</div>
				<div className="_source-icon">
					<ListIcoHTML />
				</div>
				<div className="_source-icon">
					<ListIcoDOC />
				</div>
				<div className="_source-icon">
					<ListIcoImage />
				</div>
				<div className="_source-icon">
					<ListIcoJSON />
				</div>
				<div className="_source-icon">
					<ListIcoEFILE />
				</div>
				<div className="_source-icon">
					<ListIcoTXT />
				</div>
				<div className="_source-icon">
					<ListIcoPEDRO />
				</div>
			</span>
		)
	}
}

export default IconicListItems
