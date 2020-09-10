import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"

class Disabled extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">Disabled</h3>

				<code>disabled</code>
				<p className="_p">Disables the controls the fieldset contains.</p>

				<code>n/a</code>
				<FormLayout>
					<fieldset disabled="">
						<legend>Subscribe to the Newsletter</legend>

						<div className="form-container">
							<input type="email" name="email" />
							<input type="email" name="email" placeholder="e.g. alex@smith.com" />
						</div>
						<div className="button-container">
							<button type="submit" id="submitFeedback" tabIndex="0" role="button" className="submit">
								ok
							</button>
						</div>
					</fieldset>
				</FormLayout>

				<code>disabled</code>
				<p className="_p">Disables the input.</p>
				<FormLayout>
					<fieldset>
						<div className="form-container">
							<input disabled="" />
							<input type="email" name="email" placeholder="e.g. alex@smith.com" />
						</div>
					</fieldset>
				</FormLayout>
			</>
		)
	}
}
export default Disabled
