import React, { Component } from "react";
import TableRowIndent from "../../assets/examples/TableRowIndent";
class RowIndent extends Component {
	render() {
		return (
			<div className="right-content">
				<h3 className="_h3">Row Indent</h3>
				<p className="_p">
					Adding a <code>className="level-(1, 2, 3)-indent"</code> to the first
					table cell.
				</p>
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="table-wrapper">
								<table className="basic-table full-width">
									<tbody>
										<tr>
											<td>Align left</td>
											<td>Aligned right</td>
											<td>Aligned right</td>
											<td>Aligned right</td>
										</tr>
										<tr>
											<td className="level-1-indent">Indent One</td>
											<td>Align-Right</td>
											<td>Align-Right</td>
											<td>Align-Right</td>
										</tr>
										<tr>
											<td className="level-2-indent">Indent Two</td>
											<td>Align-Right</td>
											<td>Align-Right</td>
											<td>Align-Right</td>
										</tr>
										<tr>
											<td className="level-3-indent">Indent Three</td>
											<td>Align-Right</td>
											<td>Align-Right</td>
											<td>Align-Right</td>
										</tr>
										<tr>
											<td>Col-1</td>
											<td>Col-2</td>
											<td>Col-3</td>
											<td>Col-4</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td colSpan="99" className="footnotes">
												Footnotes
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</div>
				</div>
				<TableRowIndent />
			</div>
		);
	}
}
export default RowIndent;
