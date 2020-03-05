import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";

class TableColumnHighlight extends Component {
	constructor() {
		super();
		const initialCodeString = `<thead className="double-head">\n	<tr>\n	  <th>Align left</th>\n	  <th colSpan="3">Aligned Left</th>\n	  <th>Aligned right</th>\n	</tr>\n	<tr>\n	  <th>Aligned Left</th>\n	  <th>Aligned right</th>\n	  <th>Aligned right</th>\n	  <th>Aligned right</th>\n	  <th>Aligned right</th>\n	</tr>\n  </thead>`;
		this.state = {
			selected: "tomorrow",
			style: require("../../assets/styles/hljs/tomorrow").default,
			code: initialCodeString,
			showLineNumbers: true,
			copied: false
			//width: window.innerWidth,
			//height: window.innerHeight
		};
	}
	//state = {
	//value: '<div class="l-row l-header">\n Dilly\n </div>',
	//copied: false
	//};
	render() {
		return (
			<div className="_example">
				<h4 className="_h4">HTML Code Example</h4>
				<SyntaxHighlighter language="html">{this.state.code}</SyntaxHighlighter>
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

export default TableColumnHighlight;
