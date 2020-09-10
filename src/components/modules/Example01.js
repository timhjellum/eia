import React, { Component } from "react"

import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class Example01 extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="title-banner"></div>`
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
				<h3 className="_h3">Module Rules</h3>

				<p className="_p">A module is a more discrete component of the page. It is your navigation bars and your carousels and your dialogs and your widgets and so on. This is the meat of the page. Modules sit inside Layout components. Modules can sometimes sit within other Modules, too. Each Module should be designed to exist as a standalone component. In doing so, the page will be more flexible. If done right, Modules can easily be moved to different parts of the layout without breaking.</p>
				<p class="_p">When defining the rule set for a module, avoid using IDs and element selectors, sticking only to class names. A module will likely contain a number of elements and there is likely to be a desire to use descendent or child selectors to target those elements. </p>
				<div class="_example">
					<p class="_example-caption _p">Proper module examples</p>
					<pre>
						<SyntaxHighlighter language="html" style={this.state.selected}>
							{this.state.code}
						</SyntaxHighlighter>
					</pre>
				</div>
			</>
		)
	}
}
export default Example01
