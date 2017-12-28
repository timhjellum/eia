<?php include_once('../../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>Weekly Petroleum Status Report</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<link rel="stylesheet" href="/petroleum/supply/weekly/includes/greyicons.css" type="text/css" media="screen, projection">
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include(ROOT.'petroleum/includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Weekly Petroleum Status Report'; ?>
<?php include('./includes/wpsr_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<p>
The petroleum supply situation in the context of historical information and selected prices.
</p>
<table class="data highlight-col-3 highlight-col-4">
<caption></caption>
<thead class="nested-header">
<tr>
<th colspan="2" class="no-border"></th>
<th colspan="3" class="no-wrap no-border align-center">Released after</th>
</tr>
<tr>
<th></th>
<th></th>
<th class="no-wrap align-center">10:30&#160;a.m.</th>
<th class="no-wrap align-center">10:30&#160;a.m.</th>
<th class="no-wrap align-center">1:00&#160;p.m.</th>
</tr>
</thead>
<thead class="nested-header">
<tr>
<th colspan="5">Highlights</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td class="align-left">Weekly Petroleum Status Report Highlights</td>
<td></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/wpsrsummary.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/highlights.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td></td>
<td class="align-left">Data Overview (Combined Table 1 and Table 9)</td>
<td></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/overview.pdf"><i class="ico pdf">PDF</i></a></td>
<td></td>
</tr>
</tbody>
<thead class="nested-header">
<tr>
<th colspan="5">Tables</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center">1</td>
<td class="align-left">U.S. Petroleum Balance Sheet</td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table1.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw01.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table1.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">2</td>
<td class="align-left"><a href="/dnav/pet/pet_sum_sndw_dcus_nus_w.htm">U.S. Inputs and Production by PAD District</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table2.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw02.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table2.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">3</td>
<td class="align-left"><a href="/dnav/pet/pet_pnp_wprodr_s1_w.htm">Refiner</a> and <a href="/dnav/pet/pet_pnp_wprodb_s1_w.htm">Blender</a> Net Production</td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table3.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw03.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table3.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">4</td>
<td class="align-left"><a href="/dnav/pet/pet_stoc_wstk_dcu_nus_w.htm">Stocks of Crude Oil by PAD District, and Stocks of Petroleum Products, U.S. Totals</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table4.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw04.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table4.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">5</td>
<td class="align-left"><a href="/dnav/pet/pet_stoc_wstk_a_epm0_sae_mbbl_w.htm">Stocks of Total Motor Gasoline and Fuel Ethanol by PAD District</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table5.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw05.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table5.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">5A</td>
<td class="align-left">Stocks of Total Motor Gasoline and Fuel Ethanol by PAD District with Total Gasoline by Sub-PADD</td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table5a.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw05a.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td></td>
</tr>
<tr>
<td class="align-center">6</td>
<td class="align-left"><a href="/dnav/pet/pet_stoc_wstk_a_epd0_sae_mbbl_w.htm">Stocks of Distillate, Kerosene-Type Jet Fuel, Residual Fuel Oil, and Propane/Propylene by PAD District</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table6.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw06.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table6.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">7</td>
<td class="align-left"><a href="/dnav/pet/pet_move_wkly_dc_NUS-Z00_mbblpd_w.htm">Imports of Crude Oil and Total Products by PAD District</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table7.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw07.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table7.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">8</td>
<td class="align-left"><a href="/dnav/pet/pet_move_wimpc_s1_w.htm">Preliminary Crude Imports by Country of Origin</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table8.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw08.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table8.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">9</td>
<td class="align-left"><a href="/dnav/pet/pet_sum_sndw_dcus_nus_w.htm">U.S. and PAD District Weekly Estimates</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table9.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw09.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table9.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">10</td>
<td class="align-left"><a href="/dnav/pet/pet_pri_wco_k_w.htm"><span class="line-through disabled">U.S. World Crude Oil Prices</span><span class="disabled"> - Discontinued</SPAN></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table10.csv"><i class="ico csv disabled">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw10.xls" target="_blank"><i class="ico xls grey">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table10.pdf"><i class="ico pdf disabled">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">11</td>
<td class="align-left"><a href="/dnav/pet/pet_pri_spt_s1_d.htm">Spot Prices of Crude Oil, Motor Gasoline, and Heating Oil</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table11.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw11.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table11.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">12</td>
<td class="align-left"><a href="/dnav/pet/pet_pri_spt_s1_d.htm">Spot Prices of Ultra-Low Sulfur Diesel Fuel, Kerosene-Type Jet Fuel, and Propane</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table12.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw12.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table12.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">13</td>
<td class="align-left"><a href="/dnav/pet/pet_pri_fut_s1_d.htm">NYMEX Futures Prices of Crude Oil, Motor Gasoline, and No. 2 Heating Oil</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table13.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw13.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table13.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">14</td>
<td class="align-left"><a href="/dnav/pet/pet_pri_gnd_dcus_nus_w.htm">U.S. Retail Motor Gasoline and On-Highway Diesel Fuel Prices</a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/table14.csv"><i class="ico csv">CSV</i></a></td>
<td class="align-center"><a href="http://ir.eia.gov/wpsr/psw14.xls" target="_blank"><i class="ico xls">XLS</i></a></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table14.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
</tbody>
<thead class="nested-header">
<tr>
<th colspan="5">Figures</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center">1</td>
<td class="align-left">Stocks of Crude Oil by PAD District</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/figure1.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">2</td>
<td class="align-left">Stocks of Total Motor Gasoline by PAD District</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/figure2.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">3</td>
<td class="align-left">Stocks of Distillate Fuel Oil by PAD District</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/figure3.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">4</td>
<td class="align-left">Stocks of Kerosene-Type Jet Fuel by PAD District</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/figure4.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">5</td>
<td class="align-left">Stocks of Residual Fuel Oil by PAD District</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/figure5.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">6</td>
<td class="align-left">Stocks of Propane/Propylene by PAD District</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/figure6.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">7</td>
<td class="align-left">Daily Crude Oil and Petroleum Product Spot Prices</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/figure7_8.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">8</td>
<td class="align-left"><span class="line-through disabled">Daily Trans-Atlantic Spot Product Price Differentials: New York Harbor less Rotterdam (ARA)</span><span class="disabled"> - Discontinued</span></a></td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/figure7_8.pdf"><i class="ico pdf disabled"></i></a></td>
</tr>
<tr>
<td class="align-center">9</td>
<td class="align-left">Daily Futures Price Differentials: First Delivery Month Less Second Delivery Month</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/table13.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">10</td>
<td class="align-left">U.S. Average Retail Regular Motor Gasoline and On-Highway Diesel Fuel Prices</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/figure10.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
</tbody>
<thead class="nested-header">
<tr>
<th colspan="5">Appendices</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center">A</td>
<td class="align-left">Petroleum Supply Summary</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/appendixa.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">B</td>
<td class="align-left">Explanatory Notes &nbsp;&nbsp;(<a href="stockranges.xlsx">Stock Ranges</a>)</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/appendixb.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">C</td>
<td class="align-left"><a href="nehor.cfm">Northeast Reserves</a></td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/appendixc.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td class="align-center">D</td>
<td class="align-left">Statistical Methodology of Estimating Petroleum Exports Using Data from U.S. Customs and Border Protection</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/appendixd.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td></td>
<td class="align-left"><a href="/petroleum/heatingoilpropane/">Heating Oil and Propane Update</a>&nbsp;&nbsp;(October - March)</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
<thead class="nested-header">
<tr>
<th colspan="5">Sources and Glossary</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td class="align-left">Weekly Petroleum Status Report Sources</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/sources.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
<tr>
<td></td>
<td class="align-left">Weekly Petroleum Status Report Glossary</td>
<td></td>
<td></td>
<td class="align-center"><a href="/petroleum/supply/weekly/pdf/glossary.pdf"><i class="ico pdf">PDF</i></a></td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="99"></td>
</tr>
</tfoot>
</table>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/wpsr_side.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
