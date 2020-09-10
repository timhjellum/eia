import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"

class InformationExample extends Component {
	render() {
		return (
			<ContainerLayout>
				<div className="info">
					<p>
						The <strong>five boxing</strong> wizards jump quickly <a href="/">jump quickly</a>.
					</p>
				</div>
			</ContainerLayout>
		)
	}
}
export default InformationExample
