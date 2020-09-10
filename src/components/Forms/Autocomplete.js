import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"

class Autocomplete extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">Autocomplete</h3>

				<h4 className="_h4">autocomplete</h4>
				<p className="_p">Determines if the browser can autocomplete all the form's controls.</p>
				<code>"off"</code>
				<p className="_p">
					The browser will <strong>disable</strong> autocomplete functions. This can however be overriden for each control individually.
				</p>
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

				<Top />
				<code>"on"</code>
				<p className="_p">
					The browser will <strong>enable</strong> autocomplete functions. This can however be overriden for each control individually.
				</p>
				<p className="_p">Try pressing "down" in this input. It will show previously entered email addresses.</p>
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
export default Autocomplete
