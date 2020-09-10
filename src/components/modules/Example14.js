import React, { Component } from "react"

import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

class Example14 extends Component {
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
				<p className="_p">Now we are in a pickle. We don’t want the icon to appear on both elements within our folder module. Which leads me to my next point:</p>
				<p className="_p">Only include a selector that includes semantics. A span or div holds none. A heading has some. A class defined on an element has plenty.</p>
				<div class="_example">
					<p class="_example-caption _p">Proper module examples</p>
					<pre>
						<SyntaxHighlighter language="css">{this.state.code}</SyntaxHighlighter>
					</pre>
				</div>
				<p className="_p">By adding the classes to the elements, we have increased the semantics of what those elements mean and removed any ambiguity when it comes to styling them.</p>
				<p className="_p">If you do wish to use an element selector, it should be within one level of a class selector. In other words, you should be in a situation to use child selectors. Alternatively, you should be extremely confident that the element in question will not be confused with another element. The more semantically generic the HTML element (like a span or div), the more likely it will create a conflict down the road. Elements with greater semantics like headings are more likely to appear by themselves within a container and you are more likely able to use an element selector successfully.</p>

				<p className="_p">Using the module approach also allows us to better understand where context changes are likely to occur. The need for a new positioning context, for example, is likely to happen at either the layout level or at the root of a module.</p>
			</>
		)
	}
}
export default Example14
