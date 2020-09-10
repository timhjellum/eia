import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ContainerWrapper from "../Containers/ContainerWrapper"
import ContainerLayout from "../Containers/ContainerLayout"

class TablesHeadDoubleExample extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="table-wrapper">\n   <table class="basic-table">\n      <caption>Caption</caption>\n      <thead class="double-header">\n         <tr>\n            <th scope="col">Align-Left</th>\n            <th scope="colgroup" colspan="2">Align-Left</th>\n            <th scope="colgroup" colspan="2">Align-Left</th>\n         </tr>\n         <tr>\n            <th scope="col">Align-Left</th>\n            <th scope="col">Align-Left</th>\n            <th scope="col">Align-Righ</th>\n            <th scope="col">Align-Righ</th>\n            <th scope="col">Align-Righ</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr>\n            <td>Align-Left</td>\n            <td>Align-Right</td>\n            <td>Align-Right</td>\n			<td>Align-Right</td>\n            <td>Align-Right</td>\n         </tr>\n         <tr>\n            <td>Align-Left</td>\n            <td>Align-Right</td>\n            <td>Align-Right</td>\n			<td>Align-Right</td>\n            <td>Align-Right</td>\n         </tr>\n      </tbody>\n   </table>\n</div>`
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
				<h3 className="_h3">Double Header</h3>
				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility-requirement">Accessibility requirement:</span>
					</strong>
				</p>
				<p className="_accessibility _p">
					Add a <code>scope="colgroup"</code> whenever you use a <code>colspan="x"</code>.
				</p>
				<ContainerLayout>
					<div className="table-wrapper">
						<table className="basic-table full-width">
							<thead className="double-header">
								<tr scope="colgroup">
									<th scope="col"></th>
									<th colSpan="2" scope="colgroup">
										Align-Left
									</th>
									<th colSpan="2" scope="colgroup">
										Align-Left
									</th>
								</tr>
								<tr>
									<th scope="col">Align-Left</th>
									<th scope="col">Align-Right</th>
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
									<td>Align-Right</td>
								</tr>
								<tr>
									<td scope="row">Align-Left</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
									<td>Align-Right</td>
								</tr>
							</tbody>
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

export default TablesHeadDoubleExample
