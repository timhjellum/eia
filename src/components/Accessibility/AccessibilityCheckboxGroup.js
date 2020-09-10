import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class AccessibilityCheckboxGroup extends Component {
	constructor() {
		super()
		const initialCodeString = `<fieldset>\n   <legend>Select your items:</legend>\n   <div class="form-container">\n      <input id="itemOne" type="checkbox" name="items" value="Item One" />\n      <label for="itemOne">Item One</label>\n   </div>\n   <div class="form-container">\n      <input id="itemTwo" type="checkbox" name="items" value="Item Two" />\n      <label for="itemTwo">Item Two</label>\n   </div>\n   <div class="form-container">\n      <input id="itemThr" type="checkbox" name="items" value="Item Thr" />\n      <label for="itemThr">Item Thr</label>\n   </div>\n   <div class="form-container">\n      <input id="itemFou" type="checkbox" name="items" value="Item Fou" />\n      <label for="itemFou">Item Fo</label>\n   </div>\n</fieldset>`
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
				<h3 className="_h3">Accessible Checkbox Group</h3>
				<p className="_p">Checkboxes should be utilized when the user has a list of options to choose from. Checkboxes should always allow for multiple selections.</p>
				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility-requirement">Accessibility requirement:</span>
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
						<legend>Select your items:</legend>
						<div className="form-container">
							<input id="itemOne" type="checkbox" name="items" value="Item One" />
							<label htmlFor="itemOne">Item One</label>
						</div>
						<div className="form-container">
							<input id="itemTwo" type="checkbox" name="items" value="Item Two" />
							<label htmlFor="itemTwo">Item Two</label>
						</div>
						<div className="form-container">
							<input id="itemThr" type="checkbox" name="items" value="Item Thr" />
							<label htmlFor="itemThr">Item Thr</label>
						</div>
						<div className="form-container">
							<input id="itemFou" type="checkbox" name="items" value="Item Fou" />
							<label htmlFor="itemFou">Item Fo</label>
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
export default AccessibilityCheckboxGroup
