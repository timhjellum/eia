import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"

class AlertExample extends Component {
	render() {
		return (
			<ContainerLayout>
				<div className="alert">
					<p>
						The <strong>five boxing</strong> wizards jump quickly <a to="/">jump quickly</a>.
					</p>
				</div>
			</ContainerLayout>
		)
	}
}
export default AlertExample
