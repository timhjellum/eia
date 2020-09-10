import React, { Component } from "react"

import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

class Example07 extends Component {
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
				<p className="_p">
					We are doubling up on our selectors to be able to override the specificity of <code>#sidebar</code>.
				</p>

				<p className="_p">What we should do instead is recognize that the constrained layout in the sidebar is a subclass of the pod and style it accordingly.</p>
				<div class="_example">
					<pre>
						<SyntaxHighlighter language="css">{this.state.code}</SyntaxHighlighter>
					</pre>
				</div>
			</>
		)
	}
}
export default Example07
