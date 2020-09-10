import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"

class Enctype extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">Enctype</h3>

				<h4 className="_h4">enctype</h4>
				<p className="_p">
					Defines the <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">MIME type</a> of the information sent to the server. Only works if the method is <code>post</code>.
				</p>
				<code>"application/x-www-form-urlencoded"</code>
				<strong className="value-is-default">Default.</strong>
				<p className="_p">
					The <strong>default</strong> value.
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

				<code>"text/plain"</code>
				<p className="_p">For HTML5 plain text.</p>
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

				<code>"multipart/form-data"</code>
				<p className="_p">
					Needed when using an <code>&lt;input type="file"&gt;</code> element.
				</p>
				<FormLayout>
					<fieldset>
						<div className="form-container">
							<label>Upload</label>
							<input type="file" />
						</div>
					</fieldset>
				</FormLayout>
			</>
		)
	}
}
export default Enctype
