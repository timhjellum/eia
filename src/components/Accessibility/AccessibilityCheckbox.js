import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import FormLayout from "../Containers/FormLayout"

class AccessibilityCheckbox extends Component {
	constructor() {
		super()
		const initialCodeString = `<fieldset>\n   <legend>Select your elements:</legend>\n   <ul class="checkbox-container">\n      <li class="custom-checkbox">\n         <input type="checkbox" name="elements" class="custom-checkbox-input" value="Item One" id="elementOne" />\n         <label for="elementOne" class="custom-checkbox-label">\n            <span class="custom-checkbox-label-inside">\n               Item One\n            </span>\n         </label>\n      </li>\n      <li class="custom-checkbox">\n         <input type="checkbox" name="elements" class="custom-checkbox-input" value="Item Two" id="elementTwo" />\n         <label for="elementTwo" class="custom-checkbox-label">\n            <span class="custom-checkbox-label-inside">\n               Item Two\n            </span>\n         </label>\n      </li>\n   </ul>\n</fieldset>`
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
				<h3 className="_h3">EIA Branded Checkbox</h3>
				<h5>Checkboxes</h5>
				<p className="_p">A toggle checkbox that can only be one of two states: checked or unchecked. The value is only submitted by the form if the checkbox is checked.</p>
				<FormLayout>
					<fieldset>
						<legend>Select your elements:</legend>
						<ul className="checkbox-container">
							<li className="custom-checkbox">
								<input type="checkbox" name="elements" className="custom-checkbox-input" value="Item One" id="elementOne" />
								<label htmlFor="elementOne" className="custom-checkbox-label">
									<span className="custom-checkbox-label-inside"> Item One</span>
								</label>
							</li>
							<li className="custom-checkbox">
								<input type="checkbox" name="elements" className="custom-checkbox-input" value="Item Two" id="elementTwo" />
								<label htmlFor="elementTwo" className="custom-checkbox-label">
									<span className="custom-checkbox-label-inside"> Item Two</span>
								</label>
							</li>
						</ul>
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

export default AccessibilityCheckbox
