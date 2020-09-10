import React, { Component } from "react"

import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

class Example02 extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="title-banner bg-coal"></div>`
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
				<h3 class="_h3">Avoid element selectors</h3>
				<p class="_p">
					Use child or descendant selectors with element selectors if the element selectors will and can be predictable. Using <code>.module-name span</code> is great if a span will predictably be used and styled the same way every time while within that module-name.
				</p>{" "}
				<div class="_example">
					<p class="_example-caption _p">Proper module examples</p>
					<pre>
						<SyntaxHighlighter language="css">{this.state.code}</SyntaxHighlighter>
					</pre>
				</div>
			</>
		)
	}
}
export default Example02
