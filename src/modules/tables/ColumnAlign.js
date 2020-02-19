import React, { Component } from "react";
import TableColumnAlign from "../../assets/examples/TableColumnAlign";

class ColumnAlign extends Component {
	render() {
		return (
			<div class="right-content">
				<h3 className="_h3">Column Align</h3>
				<p className="_p">
					Overiding the column alignment (head, body and foot) can be
					accomplished by adding a <code>align-left-col-x</code> or{" "}
					<code> align-right-col-x</code> to the{" "}
					<code>table class</code>.
				</p>

				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="table-wrapper full-width">
								<table className="basic-table full-width align-left-col-2 align-center-col-3">
									<caption>
										Table Example
										<br />
										<em>(This is table example</em>
									</caption>
									<thead>
										<tr>
											<th></th>
											<th colspan="3">Aligned Center</th>
										</tr>
										<tr>
											<th>Align-Left</th>
											<th>Align-Left</th>
											<th>Align-Center</th>
											<th>Align-Right</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Align-Left</td>
											<td>Align-Left</td>
											<td>Align-center</td>
											<td>Align-right</td>
										</tr>
										<tr>
											<td>Align-Left</td>
											<td>Align-Left</td>
											<td>Align-center</td>
											<td>Align-right</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td colspan="4">Align-Left</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</div>
				</div>
				<TableColumnAlign />
			</div>
		);
	}
}
export default ColumnAlign;
