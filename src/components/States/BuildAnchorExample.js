import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class BuildAnchorExample extends Component {
	constructor() {
		super()
		const initialCodeString = `<ul class="numbered build-anchor">\n  <li>\n    <span class="number">ES1.A</span>\n    <span class="report-name">Total Electric Power Industry</span>\n  </li>\n  <li>\n    <span class="formats">Available formats:</span>\n    <a href="xls/table_es1a.xlsx" class="ico xls" title="ES1.A Total Electric Power Industry">\n      <span>XLS</span>\n    </a>\n  </li>\n</ul>`
		this.state = {
			selected: tomorrow,
			code: initialCodeString,
			showLineNumbers: true,
			copied: false
		}
	}
	render() {
		return (
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
		)
	}
}

export default BuildAnchorExample
