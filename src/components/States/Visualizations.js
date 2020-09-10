import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class Visualizations extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="l-row l-six-col-even visualizations">\n  <h1>Interactive Visualizations, Data, &amp; Multimedia</h1>\n  <div class="l-col">\n    <ul>\n      <li>\n        <a href="/">\n          <div class="circle">\n            <img src="https://www.eia.gov/global/images/interactive/petroleum-map.png" alt="U.S. Petroleum Infrastructure Map" />\n          </div>\n          <h3>U.S. Petroleum Infrastructure Map</h3>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class="l-col">\n    <ul>\n      <li>\n        <a href="/">\n          <div class="circle">\n            <img src="https://www.eia.gov/global/images/interactive/fossil-fuel-map.png" alt="U.S. Fossil Fuel Resource Map" />\n          </div>\n          <h3>U.S. Fossil Fuel Resource Map</h3>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class="l-col">\n    <ul>\n      <li>\n        <a href="/">\n          <div class="circle">\n            <img src="https://www.eia.gov/global/images/interactive/crude-oil-import-data.png" alt="U.S. Crude Import Tracking Tool" />\n          </div>\n          <h3>U.S. Crude Import Tracking Tool</h3>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class="l-col">\n    <ul>\n      <li>\n        <a href="/">\n          <div class="circle>\n            <img src="https://www.eia.gov/global/images/interactive/steo-data-browser.png" alt="STEO Data Browser" />\n          </div>\n          <h3>STEO Data Browser</h3>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class="l-col">\n    <ul>\n      <li>\n      </li>\n    </ul>\n  </div>\n  <div class="l-col">\n    <ul>\n      <li>\n      </li>\n    </ul>\n  </div>\n</div>`
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

export default Visualizations
