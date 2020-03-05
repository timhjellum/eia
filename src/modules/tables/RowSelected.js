import React, { Component } from "react";
import TableRowSelected from "../../assets/examples/TableRowSelected";

class RowSelected extends Component {
	render() {
		return (
			<div className="right-content">
				<h3 className="_h3">Row Selected</h3>
				<p className="_p">
					Overiding the column alignment (head, body and foot) can be
					accomplished by adding a <code>selector</code> to the table class.
				</p>
				<div className="_example _html">
					<pre>
						<code className="html">
							<p className="_p">Example:</p>
							&lt;!-- tbd --&gt; &lt;table className="basic-table full-width
							highlight-col-2 selector"&gt;&lt;/table&gt;
						</code>
					</pre>
				</div>
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="table-wrapper">
								<table
									className="basic-table full-width highlight-col-2 selector"
									id="rp"
								>
									<caption>
										<a href="/dnav/pet/pet_pri_wfr_a_EPLLPA_PRS_dpgal_w.htm">
											Residential Propane <em>(dollars per gallon)</em>
											<div className="right">more price data ›</div>
										</a>
									</caption>
									<thead className="double-header">
										<tr>
											<th>&nbsp;</th>
											<th>&nbsp;</th>
											<th colSpan="2">change from</th>
										</tr>
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
												<span
													className="icon linechart"
													title="Click to chart this series"
												>
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
												<span
													className="icon linechart"
													title="Click to chart this series"
												>
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
												<span
													className="icon linechart"
													title="Click to chart this series"
												>
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
												<span
													className="icon linechart"
													title="Click to chart this series"
												>
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
										<tr id="rp_pad4">
											<td>
												<span
													className="icon linechart"
													title="Click to chart this series"
												>
													<span>LINECHART</span>
												</span>
												Rhode Island
											</td>
											<td>3.654</td>
											<td>
												-0.049
												<span className="ico down-arrow">
													<span>DOWN</span>
												</span>
											</td>
											<td>
												0.138
												<span className="ico up-arrow">
													<span>UP</span>
												</span>
											</td>
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
				<TableRowSelected />
			</div>
		);
	}
}
export default RowSelected;
