import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";

class SpanIcoPDF extends Component {
	constructor() {
		super();
		const initialCodeString = `<a>\n	<span class="ico pdf">\n		<span>PDF</span>\n	</span>\n</a>`;
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
			<div className="_source-icon">
				<h4 className="_h4">Live Example</h4>
				<span class="formats">Available formats:</span> <a><span className="ico pdf"><span>PDF</span></span></a>


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
			</div>
		);
	}
}

export default SpanIcoPDF;