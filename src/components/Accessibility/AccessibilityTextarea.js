import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import FormLayout from "../Containers/FormLayout"

import TextareaConfig from "../Forms/TextareaConfig"

class AccessibilityTextarea extends Component {
	constructor() {
		super()
		const initialCodeString = `<fieldset>\n   <legend>Contact:</legend>\n   <div class="form-container">\n      <label for="address">Enter your address:</label>\n      <br />\n      <textarea id="address" autocomplete="street-address"></textarea>\n   </div>\n</fieldset>`
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
				<h3 className="_h3">Accessible Label and Input</h3>

				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility-requirement">Accessibility requirement: </span>
					</strong>
				</p>
				<ul className="_accessibility _ul _bullet">
					<li className="_accessibility _li">
						The <code>for="name"</code> associates the label with the form input
					</li>
					<li className="_accessibility _li">
						the <code>id="name"</code> should reference the label <code>for="name"</code>
					</li>
					<li className="_accessibility _li">
						The <code>&lt;fieldset&gt;...&lt;/fieldset&gt;</code> and <code>&lt;legend&gt;&lt;/legend&gt;</code> should be utilized
					</li>
				</ul>
				<p className="_note _p">The user can click on the label to set focus to the form control. This is useful on small screens and to some people with motor disabilities, particularly when targeting small checkboxes and radio buttons. Clicking on labels is also an easy way to check for proper form labeling. If clicking the label sets focus to or activates the form control, then that label is programmatically associated.</p>

				<FormLayout>
					<fieldset>
						<legend>Contact:</legend>
						<div className="form-container">
							<label htmlFor="address">Enter your address:</label>
							<br />
							<textarea id="address" autoComplete="street-address"></textarea>
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

export default AccessibilityTextarea
