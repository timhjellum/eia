import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ProtoSixColumnsEven from "./ProtoSixColumnsEven"
import Legend from "../Placeholders/Legend"
import LoremIpsum from "../Placeholders/LoremIpsum"
import ContainerWrapper from "../Containers/ContainerWrapper"
import ContainerLayout from "../Containers/ContainerLayout"
/*
	import SixColumnsEven from "./Layouts/SixColumnsEven"
	<span id={"l-six-col-even"}>			
<SixColumnsEven />
          </span>
		  <Top />
		  		  */

class SixColumnsEven extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="l-row l-full-width-col">\n  <div class="l-col">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n  </div>\n  <div class="l-col">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc.\n  </div>\n</div>`
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
				<h3 className="_h3">Six Columns Even (16% 16% 16% 16% 16% 16%)</h3>
				<p className="_p">Actual: 16.666% | 16.666% | 16.666% | 16.666% | 16.666% | 16.666%</p>
				<p className="_p">
					This layout should only be used as a<a href="nested-examples.html">nested layouts</a>.
				</p>
				<ProtoSixColumnsEven />
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov">Footer on every converted page</a>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/">Interactive Visualizations, Data, & Multimedia</a>
					</li>
				</ul>

				<Legend />
				<ContainerWrapper>
					<ContainerLayout>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
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
export default SixColumnsEven
