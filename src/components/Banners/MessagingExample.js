import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"
import MessagingAlert from "./MessagingAlert"
import MessagingNote from "./MessagingNote"

class MessagingExample extends Component {
	render() {
		return (
			<>
				<h3 className="_h3 modules">Alert</h3>
				<ContainerLayout>
					<p className="alert">
						The <strong>five boxing</strong> wizards jump quickly <a href="/">jump quickly</a>.
					</p>
				</ContainerLayout>
				<MessagingAlert />

				{/*

						<div className="no-styles-defined">No styles defined</div>
						<p className="call-out disabled">
							The <strong>five boxing</strong> wizards jump quickly <a href="/">jump quickly</a>.
						</p>


						<div className="no-styles-defined">No styles defined</div>
						<p className="error disabled">
							The <strong>five boxing</strong> wizards jump quickly <a href="/">jump quickly</a>.
						</p>


						<div className="no-styles-defined">No styles defined</div>
						<p className="info disabled">
							The <strong>five boxing</strong> wizards jump quickly <a href="/">jump quickly</a>.
						</p>

					*/}
				<h3 className="_h3 modules">Note</h3>
				<ContainerLayout>
					<p className="note">
						The <strong>five boxing</strong> wizards jump quickly <a href="/">jump quickly</a>.
					</p>
				</ContainerLayout>

				<MessagingNote />

				{/*

						<div className="no-styles-defined">No styles defined</div>
						<p className="notice disabled">
							The <strong>five boxing</strong> wizards jump quickly <a href="/">jump quickly</a>.
						</p>


						<div className="no-styles-defined">No styles defined</div>
						<p className="success disabled">
							The <strong>five boxing</strong> wizards jump quickly <a href="/">jump quickly</a>.
						</p>

					*/}
			</>
		)
	}
}
export default MessagingExample
