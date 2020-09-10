import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerWrapper from "../Containers/ContainerWrapper"
import ContainerLayout from "../Containers/ContainerLayout"
class TablesFullWidthExample extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="table-wrapper">\n   <table class="basic-table full-width">\n      <thead>\n         <tr>\n            <th scope="col">Align-Left</th>\n            <th scope="col">Align-Right</th>\n            <th scope="col">Align-Right</th>\n            <th scope="col">Align-Right</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr>\n            <td scope="row">Align-left</td>\n            <td scope="col">Align-right</td>\n            <td scope="col">Align-right</td>\n            <td scope="col">Align-right</td>\n         </tr>\n         <tr>\n            <td scope="row">Align-left</td>\n            <td scope="col">Align-right</td>\n            <td scope="col">Align-right</td>\n            <td scope="col">Align-right</td>\n         </tr>\n      </tbody>\n   </table>\n</div>`
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
				<h3 className="_h3">Full Width Table</h3>
				<p className="_p">
					Adding a <code>&lt;full-width&gt;</code> to the table class (&lt;table class="basic-table full-width&gt;).
				</p>
				<ContainerLayout>
					<div className="table-wrapper">
						<table className="basic-table full-width">
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

export default TablesFullWidthExample
