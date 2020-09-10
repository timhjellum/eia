import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class ThemeUpdatedDataSeries extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="primary hide-mt">\n  <ul class="updated-data-series">\n    <li class="head">\n      <h2>Updated Data Series</h2>\n    </li>\n    <li>\n      <span class="date">1/15/2020</span>\n      <a href="/dnav/pet/pet_sum_sndw_dcus_nus_w.htm" title="Weekly supply estimates">Weekly supply estimates</a>\n    </li>\n    <li>\n      <span class="date"></span>\n      <a href="" title=""></a>\n    </li>\n  </ul>\n</div>`
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

export default ThemeUpdatedDataSeries
