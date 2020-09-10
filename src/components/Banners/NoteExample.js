import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"

class NoteExample extends Component {
	render() {
		return (
			<ContainerLayout>
				<p className="note">
					The <strong>five boxing</strong> wizards jump quickly <a href="/">jump quickly</a>.
				</p>
			</ContainerLayout>
		)
	}
}
export default NoteExample
