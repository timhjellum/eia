import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"

class ErrorExample extends Component {
	render() {
		return (
			<ContainerLayout>
				<div className="error">
					<p>
						The <strong>five boxing</strong> wizards jump quickly <a to="/">jump quickly</a>.
					</p>
				</div>
			</ContainerLayout>
		)
	}
}
export default ErrorExample
