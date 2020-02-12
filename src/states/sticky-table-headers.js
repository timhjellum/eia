﻿import React, { Component } from "react";

class StatesSticky extends Component {
	render() {
		return (<ul class="style-guide">
			<li class="section-container">
				<h1 class="_h1">Sticky Table Headers</h1>

				{/*h3 class="_h3"></h3 */}
				<div class="_module-wrapper">
					<div class="_module-container">
						{/*start */}
						{/*start */}
						{/*start */}
						<div class="l-row l-two-col-right-narrow">
							<div class="l-col">



								<div class="table-wrapper">
									<table class="sticky basic-table highlight-col-3 highlight-col-4">
										<thead>
											<tr>
												<th colspan="2" rowspan="2" style="border-bottom:2px solid #ccc;"></th>
												<th colspan="3" style="border:none; text-align:center;">Released after</th>
											</tr>
											<tr>
												<th colspan="2" style="border-bottom:2px solid #ccc; text-align:center;">10:30 a.m.</th>
												<th colspan="1" style="border-bottom:2px solid #ccc; text-align:center;" width="55">1:00 p.m.</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td colspan="99" style="text-align: center"><strong>Highlights</strong></td>
											</tr>
											<tr>
												<td></td>
												<td style="text-align:left;">Weekly Petroleum Status Report Highlights</td>
												<td></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/wpsrsummary.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/highlights.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td></td>
												<td style="text-align:left;">Data Overview (Combined Table 1 and Table 9)</td>
												<td></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/overview.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
												<td></td>
											</tr>
											<tr>
												<td colspan="99" style="text-align: center"><strong>Tables</strong></td>
											</tr>
											<tr>
												{/*<i class="ico xls"><span>XLS</span></i> */}
												<td><strong>1</strong></td>
												<td style="text-align:left;">U.S. Petroleum Balance Sheet</td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table1.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw01.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table1.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												{/*table 2 */}
												<td><strong>2</strong></td>
												<td style="text-align:left;">U.S. Inputs and Production by PAD District by
<a href="./table.php?show_by=2_series&amp;period=W&amp;table_key=PET_SUM_SNDW_DCUS_NUS_W">Data series</a>
													{/*<a href="./table.php?show_by=2_area&period=W&table_key=PET_SUM_SNDW_A_EPC0_FPF_MBBLPD_W">Area</a> */}
													{/*<a href="./?controller=wpsr&view=table&table_number=2&show_by=2&period=W&table_key=PET_SUM_SNDW_DCUS_NUS_W">Data series</a> or
<a href="./?controller=wpsr&view=table&table_number=2&show_by=2area&period=W&table_key=PET_SUM_SNDW_A_EPC0_FPF_MBBLPD_W">Area</a> */}


													{/*<a href="./?url=wpsr/table/2/W/PET_SUM_SNDW_DCUS_NUS_W">Data series</a> or */}
													{/*<a href="./?table=2&table_key=PET_SUM_SNDW_DCUS_NUS_W&period=W&history=false">Data series</a> or */}
													{/*<a href="./?table=2area&table_key=PET_SUM_SNDW_A_EPC0_FPF_MBBLPD_W&period=W&history=false">Area</a> */}
												</td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table2.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="download.php?table=2&amp;table_key=PET_SUM_SNDW_DCUS_NUS_W&amp;period=W&amp;history=false&amp;type=xlsx"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table2.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>3</strong></td>
												<td style="text-align:left;"><a href="./table.php?show_by=3_refiner&amp;period=W&amp;table_key=PET_PNP_WPRODR_S1_W">Refiner</a> and
<a href="./table.php?show_by=3_blender&amp;period=W&amp;table_key=PET_PNP_WPRODB_S1_W">Blender</a> Net Production
</td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table3.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw03.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table3.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>4</strong></td>
												<td style="text-align:left;">
													<a href="./table.php?show_by=4_series&amp;period=W&amp;table_key=PET_STOC_WSTK_DCU_NUS_W">Stocks of Crude Oil by PAD District, and Stocks of Petroleum Products, U.S. Totals</a>
												</td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table4.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw04.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table4.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>


											<tr>
												<td><strong>5</strong></td>
												<td style="text-align:left;"><a href="./table.php?show_by=5_series&amp;period=W&amp;table_key=PET_STOC_WSTK_DCU_NUS_W">Stocks of Total Motor Gasoline and Fuel Ethanol by PAD District</a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table5.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw05.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table5.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>5A</strong></td>
												<td style="text-align:left;">Stocks of Total Motor Gasoline and Fuel Ethanol by PAD District with Total Gasoline by Sub-PADD</td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table5a.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw05a.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td></td>
											</tr>


											<tr>
												<td><strong>6</strong></td>
												<td style="text-align:left;"><a href="./table.php?show_by=6_series&amp;period=W&amp;table_key=PET_STOC_WSTK_DCU_NUS_W">Stocks of Distillate, Kerosene-Type Jet Fuel, Residual Fuel Oil, and Propane/Propylene by PAD District</a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table6.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw06.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table6.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>


											<tr>
												<td><strong>7</strong></td>
												<td style="text-align:left;"><a href="./table.php?show_by=7_series&amp;period=W&amp;table_key=PET_MOVE_WKLY_DC_NUS-Z00_MBBLPD_W">Imports of Crude Oil and Total Products by PAD District</a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table7.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw07.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table7.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>


											<tr>
												<td><strong>8</strong></td>
												<td style="text-align:left;"><a href="./table.php?show_by=8_series&amp;period=W&amp;table_key=PET_MOVE_WIMPC_S1_W">Preliminary Crude Imports by Country of Origin</a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table8.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw08.xls"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table8.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>9</strong></td>
												<td style="text-align:left;"><a href="./table.php?show_by=9_series&amp;period=W&amp;table_key=PET_SUM_SNDW_DCUS_NUS_W">U.S. and PAD District Weekly Estimates</a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table9.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw09.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table9.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>10</strong></td>
												<td style="text-align:left;"><a href="#"><span style="text-decoration: line-through; color:#a2a2a2;">U.S. World Crude Oil Prices</span><font color="#C0C0C0"> - Discontinued</font></a></td>
												<td style="text-align:center;">
													<a href="https://ir.eia.gov/wpsr/table10.csv" class="ico_csv_grey">
														<i class="ico csv"><span>CSV</span></i>
													</a>
												</td>
												<td style="text-align:center;">
													<a href="https://ir.eia.gov/wpsr/psw10.xls" class="ico_xls_grey" target="_blank">
														<i class="ico xls"><span>XLS</span></i>
													</a>
												</td>
												<td>
													<a href="/petroleum/supply/weekly/pdf/table10.pdf">
														<i class="ico pdf"><span>PDF</span></i>
													</a>
												</td>
											</tr>
											<tr>
												<td><strong>11</strong></td>
												<td style="text-align:left;"><a href="./table.php?show_by=11_series&amp;period=D&amp;table_key=PET_PRI_SPT_S1_D">Spot Prices of Crude Oil, Motor Gasoline, and Heating Oil</a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table11.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw11.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table11.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>12</strong></td>
												<td style="text-align:left;"><a href="./table.php?show_by=12_series&amp;period=D&amp;table_key=PET_PRI_SPT_S1_D">Spot Prices of Ultra-Low Sulfur Diesel Fuel, Kerosene-Type Jet Fuel, and Propane</a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table12.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw12.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table12.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>13</strong></td>
												<td style="text-align:left;"><a href="./table.php?show_by=13_series&amp;period=D&amp;table_key=PET_PRI_FUT_S1_D">NYMEX Futures Prices of Crude Oil, Motor Gasoline, and No. 2 Heating Oil</a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table13.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw13.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table13.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>14</strong></td>
												<td style="text-align:left;"><a href="./table.php?show_by=14_series&amp;period=W&amp;table_key=PET_PRI_GND_DCUS_NUS_W">U.S. Retail Motor Gasoline and On-Highway Diesel Fuel Prices</a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/table14.csv"><i class="ico csv"><span>CSV</span></i></a></td>
												<td style="text-align:center;"><a href="https://ir.eia.gov/wpsr/psw14.xls" target="_blank"><i class="ico xls"><span>XLS</span></i></a></td>
												<td><a href="/petroleum/supply/weekly/pdf/table14.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<th colspan="99" style="text-align: center"><strong>Figures</strong></th>
											</tr>
											<tr>
												<td><strong>1</strong></td>
												<td style="text-align:left;">Stocks of Crude Oil by PAD District</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/figure1.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>2</strong></td>
												<td style="text-align:left;">Stocks of Total Motor Gasoline by PAD District</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/figure2.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>3</strong></td>
												<td style="text-align:left;">Stocks of Distillate Fuel Oil by PAD District</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/figure3.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>4</strong></td>
												<td style="text-align:left;">Stocks of Kerosene-Type Jet Fuel by PAD District</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/figure4.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>5</strong></td>
												<td style="text-align:left;">Stocks of Residual Fuel Oil by PAD District</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/figure5.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>6</strong></td>
												<td style="text-align:left;">Stocks of Propane/Propylene by PAD District</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/figure6.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>7</strong></td>
												<td style="text-align:left;">Daily Crude Oil and Petroleum Product Spot Prices</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/figure7_8.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>8</strong></td>
												<td style="text-align:left;"><span style="text-decoration: line-through; color:#a2a2a2;">Daily Trans-Atlantic Spot Product Price Differentials: New York Harbor less Rotterdam (ARA)</span>
													<font color="#C0C0C0"> - Discontinued</font>
												</td>
												<td></td>
												<td></td>
												<td>
													<a href="/petroleum/supply/weekly/pdf/figure7_8.pdf">
														<i class="ico pdf"><span>PDF</span></i>
													</a>
												</td>
											</tr>
											<tr>
												<td><strong>9</strong></td>
												<td style="text-align:left;">Daily Futures Price Differentials: First Delivery Month Less Second Delivery Month
</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/table13.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>10</strong></td>
												<td style="text-align:left;">U.S. Average Retail Regular Motor Gasoline and On-Highway Diesel Fuel Prices</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/figure10.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td colspan="99" style="text-align: center">Appendices</td>
											</tr>
											<tr>
												<td><strong>A</strong></td>
												<td style="text-align:left;">Petroleum Supply Summary</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/appendixa.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>B</strong></td>
												<td style="text-align:left;">Explanatory Notes &nbsp;&nbsp;(<a href="stockranges.xls">Stock Ranges</a>)</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/appendixb.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>C</strong></td>
												<td style="text-align:left;"><a href="nehor.cfm">Northeast Reserves</a></td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/appendixc.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td><strong>D</strong></td>
												<td style="text-align:left;">Statistical Methodology of Estimating Petroleum Exports Using Data from U.S. Customs and Border Protection</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/appendixd.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td style="border: none;"><strong></strong></td>
												<td colspan="4" style="text-align:left; border: none;"><a href="/petroleum/heatingoilpropane/">Heating Oil and Propane Update</a>&nbsp;&nbsp;(October - March)
</td>
											</tr>
											<tr>
												<th colspan="5">Sources and Glossary</th>
											</tr>
											<tr>
												<td></td>
												<td style="text-align:left;">Weekly Petroleum Status Report Sources</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/sources.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
											<tr>
												<td></td>
												<td style="text-align:left;">Weekly Petroleum Status Report Glossary</td>
												<td></td>
												<td></td>
												<td><a href="/petroleum/supply/weekly/pdf/glossary.pdf"><i class="ico pdf"><span>PDF</span></i></a></td>
											</tr>
										</tbody>
									</table>
								</div>

							</div>
							<div class="l-col">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
						</div>
						{/*end */}
						{/*end */}
						{/*end */}
					</div>
				</div>
				{/*end section */}
				{/*end section */}
				{/*end section */}

				<div class="_example _html">
					<h4>HTML Code Example</h4>
					{/*Target */}
					{/*
<textarea class="_copy-textarea" rows="20"><div class="table-wrapper">
						<table class="sticky">
							<thead>
								<tr>
									<th>THEAD doesn't scroll</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>TBODY scrolls</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td>TFOOT scrolls</td>
								</tr>
							</tfoot>
						</table>
					</div></textarea>
*/}
					{/*Trigger */}
					<div class="_button-container">
						<button type="button" class="_copy">Copy to clipboard</button>
					</div>
				</div>
			</li>
		</ul>);
	}
}

export default StatesSticky;