import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ProtoTwoColumns4258 from "./ProtoTwoColumns4258"
import ContainerWrapper from "../Containers/ContainerWrapper"
import ContainerLayout from "../Containers/ContainerLayout"

class TwoColumns4258 extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="l-row l-full-width-col">\n  <div class="l-col">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n  </div>\n  <div class="l-col">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n  </div>\n</div>`
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
				<h3 className="_h3">Two Columns (42% 58%)</h3>
				<p className="_p">Actual: 41.666% | 58.333%</p>
				<ProtoTwoColumns4258 />
				<div className="notice">
					<p>This layout has not been approved for use.</p>
				</div>
				{/*
		<ul className="live-examples">
		  <li className="_li">
			<strong>Live example(s)</strong>
		  </li>

		  <li>This layout has not been used on any converted pages yet.</li>
		</ul>
		<Legend />
		<ContainerWrapper>
		  <ContainerLayout>
			<div className="l-row l-two-col-right-wide">
			  <LoremIpsum />
			  <LoremIpsum />
			</div>
					</ContainerWrapper>
					</ContainerLayout>
      <div className="_example">
        <h4 className="_h4">HTML Code Example</h4>
        <SyntaxHighlighter language="html" style={this.state.selected}>{this.state.code}</SyntaxHighlighter>
        <input hidden value={this.state.code} onChange={({ target: { value } }) => this.setState({ value, copied: false })} />
        <CopyToClipboard text={this.state.code} onCopy={() => this.setState({ copied: true })}>
          <button>Copy to clipboard</button>
        </CopyToClipboard>

        {this.state.copied ? <span className="copied">The HTML has been copied to your clipboard.</span> : null}
	  </div>
		*/}
			</>
		)
	}
}

export default TwoColumns4258
