import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ContainerLayout from "../Containers/ContainerLayout"

class TablesStackedExample extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="table-wrapper">\n   <table class="basic-table full-width">\n      <caption>Table One</caption>\n      <thead>\n         <tr>...</tr>\n      </thead>\n      <tbody>\n         <tr>...</tr>\n      </tbody>\n   </table>\n\n   <table class="basic-table full-width">\n      <caption>Table Two</caption>\n      <thead>\n         <tr>...</tr>\n      </thead>\n      <tbody>\n         <tr>...</tr>\n      </tbody>\n   </table>\n\n   <table class="basic-table full-width">\n      <caption>Table Three</caption>\n      <thead>\n         <tr>...</tr>\n      </thead>\n      <tbody>\n         <tr>...</tr>\n      </tbody>\n   </table>\n</div>`
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
				<h3 className="_h3">Multiple Tables (stacked)</h3>
				<ContainerLayout>
					<div className="table-wrapper">
						<table className="basic-table full-width">
							<caption>Table One</caption>
							<thead>
								<tr>
									<th scope="col">...</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>...</td>
								</tr>
								<tr>
									<td>...</td>
								</tr>
							</tbody>
						</table>

						<table className="basic-table full-width">
							<caption>Table Two</caption>
							<thead>
								<tr>
									<th scope="col">...</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>...</td>
								</tr>
								<tr>
									<td>...</td>
								</tr>
							</tbody>
						</table>

						<table className="basic-table full-width">
							<caption>Table Three</caption>
							<thead>
								<tr>
									<th scope="col">...</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>...</td>
								</tr>
								<tr>
									<td>...</td>
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
export default TablesStackedExample
