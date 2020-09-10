import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"

class Name extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">Name</h3>

				<code>name</code>
				<p className="_p">Defines the unique identifier for that input within the form. It allows the server to access each input's value when submitted.</p>
				<span className="attribute-is-required">Required.</span>
				<span className="attribute-values">
					<code>"first_name"</code>
				</span>
				<p className="_p">
					The name value must be unique within the context of a <code>form</code> container.
				</p>
				<p className="_p">
					It can only contain alphanumeric characters <code>a-z</code> <code>A-Z</code> <code>0-9</code> and some special characters like <code>-</code> <code>_</code>… but no space.
				</p>
			</>
		)
	}
}
export default Name
