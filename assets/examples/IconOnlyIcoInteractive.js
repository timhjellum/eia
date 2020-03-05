import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";

class IconOnlyIcoiINTERACTIVE extends Component {
	constructor() {
		super();
		const initialCodeString = `<span class="ico icon-only interactive">\n	<span>iINTERACTIVE</span>\n</span>`;
		this.state = {
			selected: "tomorrow",
			style: require("../../assets/styles/hljs/tomorrow").default,
			code: initialCodeString,
			showLineNumbers: true,
			copied: false
		};
	}
	render() {
		return (
			<div className="_example">
				<h4 className="_h4">HTML Code Example</h4>
				<SyntaxHighlighter language="html">
					{this.state.code}
				</SyntaxHighlighter>
				<input
					hidden
					value={this.state.code}
					onChange={({ target: { value } }) =>
						this.setState({ value, copied: false })
					}
				/>
				<CopyToClipboard
					text={this.state.code}
					onCopy={() => this.setState({ copied: true })}
				>
					<button>Copy to clipboard</button>
				</CopyToClipboard>

				{this.state.copied ? (
					<span style={{ color: "red" }}>Copied.</span>
				) : null}
			</div>
		);
	}
}

export default IconOnlyIcoiINTERACTIVE;
