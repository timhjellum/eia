import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class ThemeUpcomingReleases extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="primary hide-mt">\n    <ul class="upcoming-releases">\n    <li class="head">\n      <h2>Upcoming Releases</h2>\n    </li>\n    <li>\n      <a href="/" title="Gasoline and Diesel Fuel Update" class="link-label">\n        Gasoline and Diesel Fuel Update<em>: 5:00 p.m. ET, Monday</em>\n      </a>\n    </li>\n    <li>\n      <a href="" title="" class="link-label">\n        <em>: </em>\n      </a>\n    </li>\n    <li class="foot"><a href="/">See all upcoming</a></li>\n  </ul>\n</div>`
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

export default ThemeUpcomingReleases
