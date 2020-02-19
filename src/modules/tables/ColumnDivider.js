import React, { Component } from "react";
import TableColumnDivider from "../../assets/examples/TableColumnDivider";
class ColumnDivider extends Component {
	render() {
		return (
			<div class="right-content">
				<h3 className="_h3">Column Divider</h3>

				<p className="_p">
					Adding a <code>className="divider"</code> to the table cell
					before where you want the divider to go.
				</p>

				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="table-wrapper">
								<table className="basic-table full-width">
									<thead>
										<tr>
											<th className="divider"></th>
											<th colspan="3">
												Aligned center by default
											</th>
										</tr>
										<tr>
											<th className="divider">
												Align left
											</th>
											<th>Aligned right</th>
											<th>Aligned right</th>
											<th>Aligned right</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="divider">
												Align left
											</td>
											<td>Aligned right</td>
											<td>Aligned right</td>
											<td>Aligned right</td>
										</tr>
										<tr>
											<td className="divider">Col-1</td>
											<td>Col-2</td>
											<td>Col-3</td>
											<td>Col-4</td>
										</tr>
										<tr className="total">
											<td className="divider">
												Total Row
											</td>
											<td>Total Row</td>
											<td>Total Row</td>
											<td>Total Row</td>
										</tr>
										<tr>
											<td className="divider">Col-1</td>
											<td>Col-2</td>
											<td>Col-3</td>
											<td>Col-4</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td
												colspan="99"
												className="footnotes"
											>
												Footnotes
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</div>
				</div>
				<TableColumnDivider />
			</div>
		);
	}
}
export default ColumnDivider;
