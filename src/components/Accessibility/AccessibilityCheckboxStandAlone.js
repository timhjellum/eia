import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class AccessibilityCheckboxStandAlone extends Component {
	constructor() {
		super()
		const initialCodeString = `<fieldset>\n   <legend>Terms:</legend>\n   <div class="form-container">\n      <input id="terms" type="checkbox" name="terms" value="Terms" />\n      <label for="terms">Terms</label>\n   </div>\n</fieldset>`
		this.state = {
			selected: tomorrow,
			code: initialCodeString,
			showLineNumbers: true,
			copied: false
		}
	}
	render() {
		return (
			<>
				<h3 className="_h3">Accessible Stand-alone Check-Box</h3>

				<p className="_p">A stand-alone checkbox should be utilized when the user has a single option to choose from. The label should always be positive and never negative. For example: "Active rather than Not Active," or "Yes rather than No."</p>

				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility _accessibility-requirement">Accessibility requirement: </span>
					</strong>
				</p>
				<ul className="_accessibility _ul _bullet">
					<li className="_accessibility _li">
						The <code>for="itemX"</code> associates the label with the form input
					</li>
					<li className="_accessibility _li">
						The <code>id="itemX"</code> should reference the label <code>for="itemX"</code>
					</li>
					<li className="_accessibility _li">
						The <code>&lt;fieldset&gt;...&lt;/fieldset&gt;</code> and <code>&lt;legend&gt;&lt;/legend&gt;</code> should be utilized
					</li>
				</ul>
				<p className="_note _p">The user can click on the label to set focus to the form control. This is useful on small screens and to some people with motor disabilities, particularly when targeting small checkboxes and radio buttons. Clicking on labels is also an easy way to check for proper form labeling. If clicking the label sets focus to or activates the form control, then that label is programmatically associated.</p>

				<FormLayout>
					<fieldset>
						<legend>Terms:</legend>
						<div className="form-container">
							<input type="checkbox" name="lists" value="Terms" id="Terms" />
							<label htmlFor="Terms">I accept the terms</label>
						</div>
					</fieldset>
				</FormLayout>

				<div className="_example">
					<h4 className="_h4">HTML Code Example</h4>
					<SyntaxHighlighter language="html" style={this.state.selected}>
						{this.state.code}
					</SyntaxHighlighter>
					<input hidden value={this.state.code} onChange={({ target: { value } }) => this.setState({ value, copied: false })} />
					<CopyToClipboard text={this.state.code} onCopy={() => this.setState({ copied: true })}>
						<button>Copy to clipboard</button>
					</CopyToClipboard>

					{this.state.copied ? <span className="copied">The HTML has been copied to your clipboard.</span> : null}
				</div>
			</>
		)
	}
}
export default AccessibilityCheckboxStandAlone
