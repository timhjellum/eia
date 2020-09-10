import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ContainerLayout from "../Containers/ContainerLayout"

class TablesRowHead extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="table-wrapper">\n   <table class="basic-table full-width">\n      <caption>Caption</caption>\n      <thead>\n         <tr>\n            <th scope="col">Aligned-left</th>\n            <th scope="col">Aligned-right</th>\n            <th scope="col">Aligned-right</th>\n            <th scope="col">Aligned-right</th>\n         </tr>\n      </thead>\n	  <tbody>\n         <tr>\n            <th scope="row">Aligned-left</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n		 </tr>\n         <tr>\n            <th scope="row">Aligned-left</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n		 </tr>\n         <tr>\n            <th scope="row">Aligned-left</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n         </tr>\n         <tr>\n            <th scope="row">Aligned-left</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n		 </tr>\n         <tr>\n            <td colSpan="4" scope="colgroup">Aligned-left</td>\n         </tr>\n         <tr>\n            <th scope="row">Aligned-left</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n         </tr>\n      </tbody>\n   </table>\n</divh`
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
				<h3 className="_h3">
					Table Row Head (<span className="_accessibility-requirement">Accessibility requirement</span>)
				</h3>

				<p className="_p">
					Adding a <code>&lt;th scope="row"&gt;&lt;/th&gt;</code> to the first cell (&lt;th&gt; or &lt;td&gt;) in a table row.
					<br />
					<strong>Note:</strong> This does not change the appearance and is ony added for accessibility.
				</p>

				<ContainerLayout>
					<div className="table-wrapper">
						<table className="basic-table full-width">
							<thead>
								<tr>
									<th scope="col">...</th>
									<th scope="col">...</th>
									<th scope="col">...</th>
									<th scope="col">...</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Aligned-left</th>
									<td>Aligned-right</td>
									<td>Aligned-right</td>
									<td>Aligned-right</td>
								</tr>
								<tr>
									<th scope="row">Aligned-left</th>
									<td>Aligned-right</td>
									<td>Aligned-right</td>
									<td>Aligned-right</td>
								</tr>
								<tr>
									<th scope="row">Aligned-left</th>
									<td>Aligned-right</td>
									<td>Aligned-right</td>
									<td>Aligned-right</td>
								</tr>
								<tr>
									<th scope="row">Aligned-left</th>
									<td>Aligned-right</td>
									<td>Aligned-right</td>
									<td>Aligned-right</td>
								</tr>
								<tr>
									<th scope="row">Aligned-left</th>
									<td>Aligned-right</td>
									<td>Aligned-right</td>
									<td>Aligned-right</td>
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
export default TablesRowHead
