import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class Select extends Component {
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
				<h3 className="_h3">Select Dropdown</h3>

				<FormLayout>
					<fieldset>
						<legend>Select your Items:</legend>
						<select name="cars" id="cars">
							<option value="ItemOne">Item One</option>
							<option value="ItemOne">Item Two</option>
							<option value="ItemOne">Item Thr</option>
							<option value="ItemOne">Item Fou</option>
						</select>
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
export default Select
