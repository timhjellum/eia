import React, { Component } from "react";
import TableRowSectionDivider from "../../assets/examples/TableRowSectionDivider";
class RowSectionDivider extends Component {
	render() {
		return (
			<div className="right-content">
				<h3 className="_h3">Row Section Divider</h3>

				<p className="_p">
					Adding a <code>className="section"</code> to the table row.
				</p>
				<div className="_module-wrapper">
					<div className="_module-container">
						{/*start */}
						{/*start */}
						{/*start */}
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
										<tr className="section">
											<td>Section Row</td>
											<td>Section Row</td>
											<td>Section Row</td>
											<td>Section Row</td>
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
						</div>
					</div>
				</div>
				<TableRowSectionDivider />
			</div>
		);
	}
}
export default RowSectionDivider;
