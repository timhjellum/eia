import React, { Component } from "react"

import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

class Example10 extends Component {
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
				<h3 className="_h3">Examples of modules</h3>

				<ul className="_ul bullet">
					<li>Navigation elements</li>
					<li>Sliders</li>
					<li>Dialogs</li>
					<li>Content Containers</li>
				</ul>

				<h3 className="_h3">Naming Best-Practices</h3>
				<p className="_p">Unlike layouts that have a designation within the class name to indicate it's a layout element, Modules do not and instead have symantec names to indicate what the module is.</p>

				<p className="_p">When defining the rule set for a module, Avoid using IDs and element selectors, sticking only to class names. A module will likely contain a number of elements and there is likely to be a desire to use descendent or child selectors to target those elements.</p>
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
export default Example10
