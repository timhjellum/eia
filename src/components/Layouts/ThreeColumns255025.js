import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import Legend from "../Placeholders/Legend"
import LoremIpsum from "../Placeholders/LoremIpsum"
import ProtoThreeColumns255025 from "./ProtoThreeColumns255025"
import ContainerWrapper from "../Containers/ContainerWrapper"
import ContainerLayout from "../Containers/ContainerLayout"

class ThreeColumns255025 extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="l-row l-three-col l-reorder"">\n  <div class="l-col">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n  </div>\n  <div class="l-col">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n  </div>\n</div>`
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
				<h3 className="_h3">Three Columns (25% 50% 25%)</h3>
				<p className="_p">
					<code>l-row l-three-col l-reorder</code>
				</p>
				<ProtoThreeColumns255025 />
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li></li>
					<li>This layout has not been used on any converted pages yet.</li>
				</ul>
				<Legend />
				<ContainerWrapper>
					<ContainerLayout>
						<div className="l-row l-three-col l-reorder">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</ContainerLayout>
				</ContainerWrapper>
				<ProtoThreeColumns255025 />
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
export default ThreeColumns255025
