import React, { Component } from "react"

import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class ThemeListIncorrectNesting extends Component {
	constructor() {
		super()
		const initialCodeString = `<ul>\n  <li>Lorem ipsum dolor sit amet</li>\n  \n    <ul>\n      <li>Lorem ipsum dolor sit amet</li>\n      <li>Lorem ipsum dolor sit amet</li>\n      <li>Lorem ipsum dolor sit amet</li>\n    </ul>\n  \n  <li>Lorem ipsum dolor sit amet</li>\n</ul>`
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
			<div className="_example">
				<h4 className="_h4">HTML Code Example</h4>
				<SyntaxHighlighter language="html" style={this.state.selected}>
					{this.state.code}
				</SyntaxHighlighter>
			</div>
		)
	}
}

export default ThemeListIncorrectNesting
