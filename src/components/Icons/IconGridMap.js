import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class IconGridMap extends Component {
	constructor() {
		super()
		const initialCodeString = `<span class="ico grid-map"><span>grid map</span></span>`
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
				<td>
					<SyntaxHighlighter language="html" style={this.state.selected}>
						{this.state.code}
					</SyntaxHighlighter>
				</td>
				<td>
					<input hidden value={this.state.code} onChange={({ target: { value } }) => this.setState({ value, copied: false })} />
					<CopyToClipboard text={this.state.code} onCopy={() => this.setState({ copied: true })}>
						<span className="text-button">Copy</span>
					</CopyToClipboard>

					{this.state.copied ? <span className="copied">The HTML has been copied to your clipboard.</span> : null}
				</td>
			</>
		)
	}
}

export default IconGridMap
