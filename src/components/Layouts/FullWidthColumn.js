import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ProtoFullWidthColumn from "./ProtoFullWidthColumn"
import Legend from "../Placeholders/Legend"
import LoremIpsum from "../Placeholders/LoremIpsum"
import ContainerWrapper from "../Containers/ContainerWrapper"
import ContainerLayout from "../Containers/ContainerLayout"

class FullWidthColumn extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="l-row l-full-width-col">\n  <div class="l-col">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n  </div>\n</div>`
		this.state = {
			selected: tomorrow,
			code: initialCodeString,
			showLineNumbers: true,
			copied: false
		}
	}
	render() {
		return (
			<>
				<h3 className="_h3">Full-Width Column</h3>
				<ProtoFullWidthColumn />
				{/*
			<ul className="live-examples">
              <li className="_li">
                <strong>Live example(s)</strong>
              </li>
              <li></li>
			</ul>
			*/}
				<p className="_p">
					The fullpage row is similar to the <code>className="l-row l-header</code> but can be applied to the entire section. An example might include a 'dashboard' page with multiple rows and columns.
				</p>

				<Legend />
				<ContainerWrapper>
					<ContainerLayout>
						<div className="l-row l-full-width-col">
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
export default FullWidthColumn
