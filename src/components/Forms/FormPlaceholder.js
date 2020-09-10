import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"

class FormPlaceholder extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">Placeholder</h3>

				<h4 className="_h4">placeholder</h4>
				<p className="_p">Defines a non-selectable placeholder text that only appears when the input is empty.</p>
				<code>"e.g. alex@smith.com"</code>
				<p className="_p">You can hint at the format expected for the input.</p>

				<p className="_p">As a best practice, it is recommended to have a label to describe the input, and use the placeholder to showcase an example:</p>
				<p className="_p">Notice how the placeholder disappears on focus, hence the need to maintain a separate label.</p>
				<FormLayout>
					<fieldset>
						<div className="form-container">
							<label>Email</label>
							<input type="email" name="email" placeholder="e.g. alex@smith.com" />
						</div>
						<div className="button-container">
							<button type="submit" id="submitFeedback" tabIndex="0" role="button" className="submit">
								ok
							</button>
						</div>
					</fieldset>
				</FormLayout>
			</>
		)
	}
}
export default FormPlaceholder
