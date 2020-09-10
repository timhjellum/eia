import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class AccessibilityRadiobuttonGroup extends Component {
	constructor() {
		super()
		const initialCodeString = `<fieldset>\n   <legend>Select an items:</legend>\n   <div class="form-container">\n      <input id="radioItemOne" type="radio" name="radioItems" value="Item One" />\n      <label for="radioItemOne">Item One</label>\n   </div>\n   <div class="form-container">\n      <input id="radioItemTwo" type="radio" name="radioItems" value="Item Two" />\n      <label for="radioItemTwo">Item Two</label>\n   </div>\n   <div class="form-container">\n      <input id="radioItemThr" type="radio" name="radioItems" value="Item Thr" />\n      <label for="radioItemThr">Item Thr</label>\n   </div>\n   <div class="form-container">\n      <input id="radioItemFou" type="radio" name="radioItems" value="Item Fou" />\n      <label for="radioItemFou">Item Fo</label>\n   </div>\n</fieldset>`
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
				<h3 className="_h3">Accessible Radiobutton Group</h3>

				<p className="_p">Radiobuttones should be utilized when the user has a list of options to choose from. Radiobuttones should always allow for multiple selections.</p>

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
						The <code>id="itemX"</code> should reference the label <code>for="radioItemX"</code>
					</li>
					<li className="_accessibility _li">
						The <code>&lt;fieldset&gt;...&lt;/fieldset&gt;</code> and <code>&lt;legend&gt;&lt;/legend&gt;</code> should be utilized
					</li>
				</ul>
				<p className="_note _p">The user can click on the label to set focus to the form control. This is useful on small screens and to some people with motor disabilities, particularly when targeting small checkboxes and radio buttons. Clicking on labels is also an easy way to check for proper form labeling. If clicking the label sets focus to or activates the form control, then that label is programmatically associated.</p>

				<FormLayout>
					<fieldset>
						<legend>Select your radioItems:</legend>
						<div className="form-container">
							<input id="radioItemOne" type="radio" name="radioItems" value="Item One" />
							<label htmlFor="radioItemOne">Item One</label>
						</div>
						<div className="form-container">
							<input id="radioItemTwo" type="radio" name="radioItems" value="Item Two" />
							<label htmlFor="radioItemTwo">Item Two</label>
						</div>
						<div className="form-container">
							<input id="radioItemThr" type="radio" name="radioItems" value="Item Thr" />
							<label htmlFor="radioItemThr">Item Thr</label>
						</div>
						<div className="form-container">
							<input id="radioItemFou" type="radio" name="radioItems" value="Item Fou" />
							<label htmlFor="radioItemFou">Item Fo</label>
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
export default AccessibilityRadiobuttonGroup
