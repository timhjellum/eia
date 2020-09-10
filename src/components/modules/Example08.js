import React, { Component } from "react"

import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

class Example08 extends Component {
	constructor() {
		super()
		const initialCodeString = `.module-name > h2 {\n  padding: 5px;\n}\n.module-name span {\n  padding: 5px;\n}`
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
				<p className="_p">With sub-classing the module, both the base module and the sub-module class names get applied to the HTML element.</p>
				<div class="_example">
					<pre>
						<SyntaxHighlighter language="css">{this.state.code}</SyntaxHighlighter>
					</pre>
				</div>
			</>
		)
	}
}
export default Example08
