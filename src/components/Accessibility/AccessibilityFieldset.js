import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class AccessibilityFieldset extends Component {
	constructor() {
		super()
		const initialCodeString = `<fieldset>\n  <legend></legend>\n</fieldset>`
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
				<h3 className="_h3">Fieldset</h3>
				<p className="_p">
					Defines a <strong>group of controls</strong> within a form.
				</p>
				<FormLayout>
					<fieldset>
						<br />
						<br />
					</fieldset>
				</FormLayout>
				<h3 className="_h3">Legend</h3>
				<p className="_p">
					Defines a <strong>caption</strong> for the fieldset.
				</p>
				<FormLayout>
					<fieldset>
						<legend>Subscribe to the Newsletter</legend>
						<br />
						<br />
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
export default AccessibilityFieldset
