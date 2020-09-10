import React, { Component } from "react"

import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

class Example19 extends Component {
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
				<p className="_p">Try to Avoid conditional styling based on location. If you are changing the look of a module for usage elsewhere on the page or site, sub-class the module instead.</p>
				<p className="_p">To help battle against specificity (and if IE6 isn’t a concern), then you can double up on your class names like in the next example.</p>
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
export default Example19
