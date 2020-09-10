import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class EnergyEducation extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="l-row l-three-col-even energy-education">\n  <h1>Energy Education</h1>\n  <div class="l-col">\n    <span class="ico energy-education petroleum"></span>\n      <ul>\n        <li class="head">\n          <h2>\n            <a href="/">Oil: Crude &amp; Petroleum Products Explained</a>\n          </h2>\n        </li>\n        <li class="sub-head">\n            <a href="/">Gasoline Prices and Outlook</a>\n        </li>\n        <li class="foot">\n            <a href="/">See more petroleum topics</a>\n        </li>\n      </ul>\n  </div>\n  <div class="l-col">\n    <span class="ico energy-education faq"></span>\n      <ul>\n        <li class="head">\n          <h2>\n            <a href="/">FAQs</a>\n          </h2>\n        </li>\n        <li class="sub-head">\n            <a href="/">What are Mcf, Btu, and therms? How do I convert prices in Mcf to Btu's and therms?</a>\n        </li>\n        <li class="foot">\n            <a href="/">See all petroleum FAQs</a>\n        </li>\n      </ul>\n  </div>\n  <div class="l-col">\n    <span class="ico energy-education energy-kids"></span>\n      <ul>\n        <li class="head">\n          <h2>\n          <a href="/">Energy Kids</a>\n          </h2>\n        </li>\n        <li class="sub-head">\n          <a href="/">How was oil formed?</a>\n        </li>\n        <li class="foot">\n          <a href="/">See nonrenewable sources on Energy Kids</a>\n        </li>\n      </ul>\n  </div>\n</div>`
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

export default EnergyEducation
