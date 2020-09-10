import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ProtoTwoColumns7525 from "./ProtoTwoColumns7525"
import Legend from "../Placeholders/Legend"
import LoremIpsum from "../Placeholders/LoremIpsum"

class TwoColumns7525 extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="l-row l-full-width-col">\n	<div class="l-col">\n		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n	</div>\n	<div class="l-col">\n		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n	</div>\n</div>`
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
				<ProtoTwoColumns7525 />
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/data.php">https://www.eia.gov/petroleum/data.php</a>
					</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right-narrow">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
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
			</>
		)
	}
}

export default TwoColumns7525
