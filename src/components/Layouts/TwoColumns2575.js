import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ProtoTwoColumns2575 from "./ProtoTwoColumns2575"
import Legend from "../Placeholders/Legend"
import LoremIpsum from "../Placeholders/LoremIpsum"
import ContainerWrapper from "../Containers/ContainerWrapper"
import ContainerLayout from "../Containers/ContainerLayout"

class TwoColumns2575 extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="l-row l-two-col-left-narrow">\n  <div class="l-col">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n  </div>\n  <div class="l-col">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n  </div>\n</div>`
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
				<h3 className="_h3">Two Columns (25% 75%)</h3>
				<p className="_p">
					<code>l-two-col-left-narrow</code>
				</p>
				<ProtoTwoColumns2575 />
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/nuclear/data.php">https://www.eia.gov/nuclear/data.php</a>
					</li>
				</ul>

				<Legend />
				<ContainerWrapper>
					<ContainerLayout>
						<div className="l-row l-two-col-left-narrow">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</ContainerLayout>
				</ContainerWrapper>

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
export default TwoColumns2575
