import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ProtoTwoColumnsEven from "./ProtoTwoColumnsEven"
import Legend from "../Placeholders/Legend"
import LoremIpsum from "../Placeholders/LoremIpsum"
import ContainerWrapper from "../Containers/ContainerWrapper"
import ContainerLayout from "../Containers/ContainerLayout"
/*
import TwoColumnsEven from "./Layouts/TwoColumnsEven"

<span id={"l-two-col-even"}>
<TwoColumnsEven />
</span>
<Top />
*/

class TwoColumnsEven extends Component {
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
				<h3 className="_h3">Two Columns (50% 50%)</h3>
				<ProtoTwoColumnsEven />
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/">https://www.eia.gov/petroleum/</a>
					</li>
				</ul>
				<Legend />
				<ContainerWrapper>
					<ContainerLayout>
						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</ContainerLayout>
				</ContainerWrapper>
			</>
		)
	}
}
export default TwoColumnsEven
