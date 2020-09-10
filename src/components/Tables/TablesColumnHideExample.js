import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ContainerLayout from "../Containers/ContainerLayout"

class TablesColumnHideExample extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="table-wrapper">\n   <table class="basic-table full-width hide-col-2 hide-col-4 highlight-col-2  highlight-col-4">\n      <caption>Caption</caption>\n      <thead>\n         <tr>\n            <th scope="col">Aligned-left</th>\n            <th scope="col">Aligned-right</th>\n            <th scope="col">Aligned-right</th>\n            <th scope="col">Aligned-right</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr class="bold">\n            <th scope="row">Aligned-left</th>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n         </tr>\n         <tr>\n            <th scope="row">Aligned-left</th>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n         </tr>\n         <tr class="totals">\n            <th scope="row">Aligned-left</th>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n            <td>Aligned-right</td>\n         </tr>\n      </tbody>\n   </table>\n</div>`
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
				<h3 className="_h3">Hide Columns</h3>
				<p className="_p">
					Hiding a column (head, body and foot) can be accomplished by adding a <code>class="hide-col-1/2/3/4/5..."</code> to the table class.
				</p>
				<h4 className="_h4">Before</h4>

				<ContainerLayout>
					<div className="table-wrapper">
						<table className="basic-table full-width highlight-col-2  highlight-col-4">
							<thead>
								<tr>
									<th scope="col">Col-1</th>
									<th scope="col">Col-2</th>
									<th scope="col">Col-3</th>
									<th scope="col">Col-4</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Col-1</td>
									<td>Col-2</td>
									<td>Col-3</td>
									<td>Col-4</td>
								</tr>
								<tr>
									<td>Col-1</td>
									<td>Col-2</td>
									<td>Col-3</td>
									<td>Col-4</td>
								</tr>
							</tbody>
						</table>
					</div>
				</ContainerLayout>

				<h4 className="_h4">After</h4>

				<ContainerLayout>
					<div className="table-wrapper">
						<table className="basic-table full-width hide-col-2 hide-col-4 highlight-col-2  highlight-col-4">
							<thead>
								<tr>
									<th scope="col">Col-1</th>
									<th scope="col">Col-2</th>
									<th scope="col">Col-3</th>
									<th scope="col">Col-4</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Col-1</td>
									<td>Col-2</td>
									<td>Col-3</td>
									<td>Col-4</td>
								</tr>
								<tr>
									<td>Col-1</td>
									<td>Col-2</td>
									<td>Col-3</td>
									<td>Col-4</td>
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
export default TablesColumnHideExample
