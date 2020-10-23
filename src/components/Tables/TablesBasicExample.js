import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ContainerLayout from "../Containers/ContainerLayout"

class TablesBasicExample extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="table-wrapper">\n   <table class="basic-table">\n      <thead>\n         <tr>\n            <th scope="col">Align-Left</th>\n            <th scope="col">Align-Right</th>\n            <th scope="col">Align-Right</th>\n            <th scope="col">Align-Right</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr>\n            <th scope="row">Align-left</th>\n            <td>Align-right</td>\n            <td>Align-right</td>\n            <td>Align-right</td>\n         </tr>\n         <tr>\n            <th scope="row">Align-left</th>\n            <td>Align-right</td>\n            <td>Align-right</td>\n            <td>Align-right</td>\n         </tr>\n      </tbody>\n   </table>\n</div>`
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
				<a name="TablesBasicExample"></a>
				<h3 className="_h3">Basic Table</h3>
				<p className="_p">
					The basic EIA styled table can created by nesting the table in a div with the style: <code>class="table-wrapper"</code>, and adding the style <code>class="basic-table"</code> to the <code>table</code> tag. It's also important to use the HTML table structure of <code>&lt;head&gt;&lt;/head&gt;</code>, <code>&lt;body&gt;&lt;/body&gt;</code>, and <code>&lt;foot&gt;&lt;/foot&gt;</code> as needed.
				</p>
				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility-requirement">Accessibility requirement:</span>
					</strong>
				</p>
				<p className="_accessibility _p">
					Header cells must be marked up with <code>&lt;th&gt;</code>, and data cells with <code>&lt;td&gt;</code>, along with a <code>scope</code> to make tables accessible.
				</p>
				<ContainerLayout>
					<div className="table-wrapper">
						<table className="basic-table">
							<thead>
								<tr>
									<th scope="col">Align-Left</th>
									<th scope="col">Align-Right</th>
									<th scope="col">Align-Right</th>
									<th scope="col">Align-Right</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td scope="row">Align-Left</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
								</tr>
								<tr>
									<td scope="row">Align-Left</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
								</tr>
								<tr>
									<td scope="row">Align-Left</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
								</tr>
								<tr>
									<td scope="row">Align-Left</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colSpan="4" scope="colgroup">
										Align-Left
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</ContainerLayout>

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

export default TablesBasicExample
