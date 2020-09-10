import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"

class CallOutExample extends Component {
	render() {
		return (
			<ContainerLayout>
				<div className="call-out">
					<p>
						The <strong>five boxing</strong> wizards jump quickly <a to="/">jump quickly</a>.
					</p>
				</div>
			</ContainerLayout>
		)
	}
}
export default CallOutExample
