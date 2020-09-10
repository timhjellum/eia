import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"

class NoticeExample extends Component {
	render() {
		return (
			<ContainerLayout>
				<div className="notice">
					<p>
						The <strong>five boxing</strong> wizards jump quickly <a href="/">jump quickly</a>.
					</p>
				</div>
			</ContainerLayout>
		)
	}
}
export default NoticeExample
