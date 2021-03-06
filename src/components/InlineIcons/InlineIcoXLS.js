import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class InlineIcoXLS extends Component {
	constructor() {
		super()
		const initialCodeString = `<a>Lorem ipsum dolor sit amet <span className="ico xls">\n    <span>XLS</span>\n  </span> consectetur adipiscing elit</a>`
		this.state = {
			selected: tomorrow,
			//style: require("../../assets/styles/hljs/tomorrow").default,
			code: initialCodeString,
			showLineNumbers: true,
			copied: false
		}
	}
	render() {
		return (
			<>
				<div className="_source-icon">
					<a>
						Lorem ipsum dolor sit amet{" "}
						<span className="ico xls">
							<span>XLS</span>
						</span>{" "}
						consectetur adipiscing elit
					</a>

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
				</div>
			</>
		)
	}
}

export default InlineIcoXLS
