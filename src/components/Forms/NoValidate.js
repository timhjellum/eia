import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"

class NoValidate extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">No Validate</h3>
				<code>novalidate</code>
				<p className="_p">Tells the browser to not validate the form on submission.</p>
			</>
		)
	}
}
export default NoValidate
