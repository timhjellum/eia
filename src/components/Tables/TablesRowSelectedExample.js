import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerWrapper from "../Containers/ContainerWrapper"
import ContainerLayout from "../Containers/ContainerLayout"
class TablesRowSelectedExample extends Component {
	constructor() {
		super()
		const initialCodeString = `<tr class="selected">\n  <td>Connecticut</td>\n  <td>2.969</td>\n  <td>-0.019</td>\n  <td>0.457</td>\n</tr>`
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
				<a name="TablesRowSelectedExample"></a>
				<h3 className="_h3">Row Selected</h3>
				<p className="_p">
					Overiding the column alignment (head, body and foot) can be accomplished by adding a <code>selector</code> to the table class.
				</p>

				<ContainerLayout>
					<div className="l-row l-full-width-col">
						<div className="table-wrapper">
							<table className="basic-table full-width highlight-col-2 selector">
								<thead>
									<tr>
										<th>&nbsp;</th>
										<th>03/27/19</th>
										<th>week ago</th>
										<th>year ago</th>
									</tr>
								</thead>
								<tbody>
									<tr className="selected" id="rp_us">
										<td>
											<span className="icon linechart" title="Click to chart this series">
												<span>LINECHART</span>
											</span>
											Connecticut
										</td>
										<td>2.969</td>
										<td>
											-0.019
											<span className="ico down-arrow">
												<span>DOWN</span>
											</span>
										</td>
										<td>
											0.457
											<span className="ico up-arrow">
												<span>UP</span>
											</span>
										</td>
									</tr>
									<tr id="rp_padd1">
										<td>
											<span className="icon linechart" title="Click to chart this series">
												<span>LINECHART</span>
											</span>
											Maine
										</td>
										<td>2.596</td>
										<td>
											-0.011
											<span className="ico down-arrow">
												<span>DOWN</span>
											</span>
										</td>
										<td>
											0.335
											<span className="ico up-arrow">
												<span>UP</span>
											</span>
										</td>
									</tr>
									<tr id="rp_padd2">
										<td>
											<span className="icon linechart" title="Click to chart this series">
												<span>LINECHART</span>
											</span>
											Massachusetts
										</td>
										<td>3.120</td>
										<td>
											-0.011
											<span className="ico down-arrow">
												<span>DOWN</span>
											</span>
										</td>
										<td>
											0.208
											<span className="ico up-arrow">
												<span>UP</span>
											</span>
										</td>
									</tr>
									<tr id="rp_padd3">
										<td>
											<span className="icon linechart" title="Click to chart this series">
												<span>LINECHART</span>
											</span>
											New Hampshire
										</td>
										<td>3.579</td>
										<td>
											-0.003
											<span className="ico down-arrow">
												<span>DOWN</span>
											</span>
										</td>
										<td>
											0.598
											<span className="ico up-arrow">
												<span>UP</span>
											</span>
										</td>
									</tr>
								</tbody>
							</table>
							<table className="basic-table full-width selector">
								<tbody>
									<tr>
										<td>
											<span className="ico grid-column">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-line">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-map">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-parent-column">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-parent-line">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-parent-map">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-parent-pin">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-pin">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-key">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td className="sectionhead" colSpan="3">
											Selected
										</td>
									</tr>
									<tr>
										<td>
											<span className="ico grid-column">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-line">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-map">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-parent-column">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-parent-line">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-parent-map">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-parent-pin">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-pin">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>

									<tr>
										<td>
											<span className="ico grid-key">
												<span></span>
											</span>
											Lorem ipsum
										</td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
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

export default TablesRowSelectedExample
