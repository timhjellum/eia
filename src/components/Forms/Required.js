import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"

class Required extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">Required</h3>

				<code>required</code>
				<p className="_p">
					Tells the browser that this input is <strong>required</strong>. Leaving it empty will show a warning.
				</p>
				<p className="_p">
					You simply need to add the <code>required</code> attribute with no value:
				</p>
				<p className="_p">The browser should show a warning if you try to submit the form with an empty text input.</p>
				<FormLayout>
					<fieldset>
						<div className="form-container">
							<input type="text" required="" />
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
export default Required
