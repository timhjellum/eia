import React, { Component } from "react"

import IconGridColumn from "./IconGridColumn"
import IconGridLine from "./IconGridLine"
import IconGridMap from "./IconGridMap"
import IconGridParentColumn from "./IconGridParentColumn"
import IconGridParentLine from "./IconGridParentLine"
import IconGridParentMap from "./IconGridParentMap"
import IconGridParentPin from "./IconGridParentPin"

class GeneralIcons extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">General Icons</h3>

				<span className="general-icons">
					<IconGridColumn />
					<IconGridLine />
					<IconGridMap />
					<IconGridParentMap />
					<IconGridParentLine />
					<IconGridParentPin />
					<IconGridParentColumn />
				</span>
			</>
		)
	}
}

export default GeneralIcons
