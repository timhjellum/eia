<?php include_once('../../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>Petroleum Supply Monthly - Energy Information Administration</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include(ROOT.'petroleum/includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Petroleum Supply Monthly'; $data_series = 'With Data for August 2017'; $release = 'October 31, 2017'; $next = 'November 30, 2017'; ?>
<?php include('./includes/psm_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<p>
<strong>Notice:</strong>&nbsp;&nbsp; <a href="releasenote.php">Release notes for Petroleum Supply Monthly (PSM) and Petroleum Supply Annual (PSA)</a></br>
Petroleum Supply Monthly (PSM) and Petroleum Supply Annual (PSA) interactive (petroleum navigator) data for the period from January 2007-June 2017 are being re-released today (September 13, 2017) in order to correct errors that were accidentally introduced when we released the data on August 31, 2017.  Errors included missing data, incorrect values, and duplicated data series affecting some or all months of data from January 2007-June 2017.  We apologize for the inconvenience and recommend that users of petroleum supply data re-run queries and otherwise refresh data files that were downloaded from the U.S. Energy Information Administration web site on or after August 31, 2017.</br></br>
<strong>PSM tables for June 2017 and PSA tables for 2016 in portable document format (PDF) and comma-separated-value (CSV) files are currently unavailable.</strong>  Tables in PDF and CSV formats currently posted on the EIA website contain PSM data for May 2017 and PSA data for 2015.  Updated tables in PDF and CVS formats will be released at a later date.
</p>
<p>
Supply and disposition of crude oil and petroleum products on a national and regional level. The data series describe production, imports and exports, movements and inventories.
PDF and CSV files are released first and Petroleum Data Tables are released later on the same day.
</p>
<table class="zebra highlight-col-3 highlight-col-4">
<caption></caption>
<thead>
<tr>
<th colspan="2">Tables</th>
<th style="width: 100px;"><a href="/petroleum/supply/monthly/pdf/psmall.pdf"><i class="ico pdf">PDF</i>All&#160;Tables</a></th>
<th style="width: 100px;"><a href="/petroleum/supply/monthly/csv/psm_csv.exe"><i class="ico csv">CSV</i>All&#160;Tables</a></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4"><h4>Detailed Statistics Tables</h4></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">National Statistics</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">1</td>
<td><a href="/dnav/pet/pet_sum_snd_d_nus_mbbl_m_cur.htm">U.S. Supply, Disposition, and Ending Stocks of Crude Oil and Petroleum Products</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table1.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table1.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">2</td>
<td>U.S. Year-to-Date Supply, Disposition, and Ending Stocks of Crude Oil and Petroleum Products</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table2.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table2.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">3</td>
<td><a href="/dnav/pet/pet_sum_snd_d_nus_mbblpd_m_cur.htm">U.S. Daily Average Supply and Disposition of Crude Oil and Petroleum Products</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table3.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table3.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">4</td>
<td>U.S. Year-to-Date Daily Average Supply and Disposition of Crude Oil and Petroleum Products</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table4.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table4.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Supply and Disposition of Crude Oil and Petroleum Products</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">5</td>
<td><a href="/dnav/pet/pet_sum_snd_d_r10_mbbl_m_cur.htm">PAD District 1</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table5.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table5.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">6</td>
<td>Year-to-Date PAD District 1</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table6.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table6.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">7</td>
<td><a href="/dnav/pet/pet_sum_snd_d_r10_mbblpd_m_cur.htm">Daily Average PAD District 1</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table7.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table7.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">8</td>
<td>Year-to-Date Daily Average PAD District 1</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table8.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table8.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">9</td>
<td><a href="/dnav/pet/pet_sum_snd_d_r20_mbbl_m_cur.htm">PAD District 2</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table9.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table9.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">10</td>
<td>Year-to-Date PAD District 2</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table10.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table10.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">11</td>
<td><a href="/dnav/pet/pet_sum_snd_d_r20_mbblpd_m_cur.htm">Daily Average PAD District 2</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table11.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table11.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">12</td>
<td>Year-to-Date Daily Average PAD District 2</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table12.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table12.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">13</td>
<td><a href="/dnav/pet/pet_sum_snd_d_r30_mbbl_m_cur.htm">PAD District 3</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table13.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table13.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">14</td>
<td>Year-to-Date PAD District 3</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table14.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table14.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">15</td>
<td><a href="/dnav/pet/pet_sum_snd_d_r30_mbblpd_m_cur.htm">Daily Average PAD District 3</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table15.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table15.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">16</td>
<td>Year-to-Date Daily Average PAD District 3</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table16.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table16.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">17</td>
<td><a href="/dnav/pet/pet_sum_snd_d_r40_mbbl_m_cur.htm">PAD District 4</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table17.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table17.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">18</td>
<td>Year-to-Date PAD District 4</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table18.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table18.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">19</td>
<td><a href="/dnav/pet/pet_sum_snd_d_r40_mbblpd_m_cur.htm">Daily Average PAD District 4</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table19.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table19.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">20</td>
<td>Year-to-Date Daily Average PAD District 4</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table20.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table20.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">21</td>
<td><a href="/dnav/pet/pet_sum_snd_d_r50_mbbl_m_cur.htm">PAD District 5</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table21.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table21.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">22</td>
<td>Year-to-Date PAD District 5</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table22.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table22.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">23</td>
<td><a href="/dnav/pet/pet_sum_snd_d_r50_mbblpd_m_cur.htm">Daily Average PAD District 5</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table23.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table23.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">24</td>
<td>Year-to-Date Daily Average PAD District 5</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table24.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table24.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Crude Oil</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">25</td>
<td><a href="/dnav/pet/pet_sum_crdsnd_k_m.htm">Crude Oil Supply, Disposition, and Ending Stocks by PAD District</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table25.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table25.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">26</td>
<td><a href="/dnav/pet/pet_crd_crpdn_adc_mbbl_m.htm">Production of Crude Oil by PAD District and State</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table26.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table26.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Natural Gas Processing</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">27</td>
<td>Natural Gas Plant Net Production and Stocks of Petroleum Products by PAD and Refining District</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table27.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table27.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td></td>
<td><a href="/dnav/pet/pet_pnp_gp_dc_nus_mbbl_m.htm">Production</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href="/dnav/pet/pet_stoc_typ_d_nus_SKN_mbbl_m.htm">Stocks</a></td>
<td></td>
<td></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Refinery Operations</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">28</td>
<td><a href="/dnav/pet/pet_pnp_inpt_dc_nus_mbbl_m.htm">Refinery and Blender Net Inputs of Crude Oil and Petroleum Products by PAD and Refining Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table28.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table28.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">29</td>
<td><a href="/dnav/pet/pet_pnp_refp_dc_nus_mbbl_m.htm">Refinery and Blender Net Production of Finished Petroleum Products by PAD and Refining Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table29.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table29.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">30</td>
<td><a href="/dnav/pet/pet_pnp_inpt2_dc_nus_mbbl_m.htm">Refinery Net Input of Crude Oil and Petroleum Products by PAD and Refining Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table30.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table30.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td></td>
<td><a href="/dnav/pet/pet_pnp_unc_dcu_nus_m.htm">Refinery Utilization and Capacity</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href="/dnav/pet/pet_pnp_crq_dcu_nus_m.htm">Crude Oil Input Qualities</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href="/dnav/pet/pet_pnp_dwns_dc_nus_mbblpd_m.htm">Downstream Processing of Fresh Feed Input</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td class="align-center bold">31</td>
<td><a href="/dnav/pet/pet_pnp_refp2_dc_nus_mbbl_m.htm">Refinery Net Production of Finished Petroleum Products by PAD and Refining Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table31.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table31.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">32</td>
<td><a href="/dnav/pet/pet_pnp_inpt3_dc_nus_mbbl_m.htm">Blender Net Inputs of Petroleum Products by PAD District</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table32.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table32.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">33</td>
<td><a href="/dnav/pet/pet_pnp_refp3_dc_nus_mbbl_m.htm">Blender Net Production of Petroleum Products by PAD District</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table33.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table33.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">34</td>
<td><a href="/dnav/pet/pet_stoc_typ_d_nus_SKR_mbbl_m.htm">Refinery Stocks of Crude Oil and Petroleum Products by PAD and Refining Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table34.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table34.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">35</td>
<td><a href="/dnav/pet/pet_pnp_pct_dc_nus_pct_m.htm">Percent Yield of Petroleum Products by PAD and Refining Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table35.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table35.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Imports of Crude Oil and Petroleum Products State of Entry</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">36</td>
<td><a href="/dnav/pet/pet_move_res_a_EPPR_IM0_mbbl_m.htm">Imports of Residual Fuel Oil by Sulfur Content</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table36.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table36.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">PAD District</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">37</td>
<td><a href="/dnav/pet/pet_move_imp_dc_NUS-Z00_mbbl_m.htm">Imports of Crude Oil and Petroleum Products</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table37.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table37.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">38</td>
<td>Year-to-Date Imports of Crude Oil and Petroleum Products</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table38.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table38.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Country of Origin</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">39</td>
<td><a href="/dnav/pet/pet_move_impcus_a2_nus_ep00_im0_mbbl_m.htm">United States</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table39.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table39.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">40</td>
<td>Year-to-Date United States</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table40.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table40.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">41</td>
<td><a href="/dnav/pet/pet_move_impcp_a2_r10_ep00_ip0_mbbl_m.htm">PAD District 1</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table41.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table41.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">42</td>
<td><a href="/dnav/pet/pet_move_impcp_a2_r20_ep00_ip0_mbbl_m.htm">PAD District 2</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table42.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table42.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">43</td>
<td><a href="/dnav/pet/pet_move_impcp_a2_r30_ep00_ip0_mbbl_m.htm">PAD District 3</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table43.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table43.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">44</td>
<td>PAD Districts 4 and 5</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table44.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table44.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td></td>
<td><a href="/dnav/pet/pet_move_impcp_a2_r40_ep00_ip0_mbbl_m.htm">PADD 4</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href="/dnav/pet/pet_move_impcp_a2_r50_ep00_ip0_mbbl_m.htm">PADD 5</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td class="align-center bold">45</td>
<td>Year-to-Date PAD District 1</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table45.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table45.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">46</td>
<td>Year-to-Date PAD District 2</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table46.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table46.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">47</td>
<td>Year-to-Date PAD District 3</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table47.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table47.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">48</td>
<td>Year-to-Date PAD Districts 4 and 5</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table48.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table48.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Exports of Crude Oil and Petroleum Products</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">49</td>
<td><a href="/dnav/pet/pet_move_exp_dc_NUS-Z00_mbbl_m.htm">Exports of Crude Oil and Petroleum Products by PAD District</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table49.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table49.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">50</td>
<td>Year-to-Date Exports of Crude Oil and Petroleum Products by PAD District</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table50.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table50.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">51</td>
<td><a href="/dnav/pet/pet_move_expc_a_EP00_EEX_mbbl_m.htm">Exports of Crude Oil and Petroleum Products by Destination</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table51.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table51.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">52</td>
<td>Year-to-Date Exports of Crude Oil and Petroleum Products by Destination</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table52.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table52.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Net Imports</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">53</td>
<td><a href="/dnav/pet/pet_move_neti_a_EP00_IMN_mbblpd_m.htm">Net Imports of Crude Oil and Petroleum Products into the United States by Country</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table53.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table53.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">54</td>
<td>Year-to-Date Net Imports of Crude Oil and Petroleum Products into the United States by Country</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table54.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table54.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Stocks</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">55</td>
<td><a href="/dnav/pet/pet_stoc_typ_d_nus_SAE_mbbl_m.htm">Stocks of Crude Oil and Petroleum Products by PAD District</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table55.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table55.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">56</td>
<td><a href="/dnav/pet/pet_stoc_st_a_EPM0F_STR_mbbl_m.htm">Refinery, Bulk Terminal, and Natural Gas Plant Stocks of Selected Petroleum Products by PAD District and State</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table56.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table56.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Movements of Crude Oil and Petroleum Products</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">57</td>
<td><a href="/dnav/pet/pet_move_ptb_dc_R20-R10_mbbl_m.htm">Movements of Crude Oil and Petroleum Products by Pipeline, Tanker, Barge, and Rail Between PAD Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table57.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table57.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">58</td>
<td><a href="/dnav/pet/pet_move_pipe_dc_R20-R10_mbbl_m.htm">Movements of Crude Oil and Petroleum Products by Pipeline Between PAD Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table58.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table58.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">59</td>
<td><a href="/dnav/pet/pet_move_tb_dc_R20-R10_mbbl_m.htm">Movements of Crude Oil and Petroleum Products by Tanker and Barge Between PAD Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table59.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table59.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">60</td>
<td><a href="/dnav/pet/pet_move_rail_a_epc0_rail_mbbl_m.htm">Movements of Crude Oil and Selected Products by Rail Between PAD Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table60.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table60.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<tr>
<td class="align-center bold">61</td>
<td><a href="/dnav/pet/pet_move_ptb_a_epc0_tnr_mbbl_m.htm">Movements of Crude Oil by Pipeline, Tanker, Barge, and Rail between PAD Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table61.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table61.csv"><i class="ico csv">CSV</i></a></td>
</tr>
<!--tr>
<td></td>
<td><a href="/dnav/pet/pet_move_rail_a_epc0_rail_mbbl_m.htm">Movements of Crude Oil and Selected Products by Rail</a></td>
<td></td>
<td></td>
</tr-->
<tr>
<td class="align-center bold">62</td>
<td><a href="/dnav/pet/pet_move_netr_d_r10-z0p_VNR_mbbl_m.htm">Net Movements of Crude Oil and Petroleum Products by Pipeline, Tanker, Barge, and Rail Between PAD Districts</a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/table62.pdf"><i class="ico pdf">PDF</i></a></td>
<td class="align-center"><a href="/petroleum/supply/monthly/csv/table62.csv"><i class="ico csv">CSV</i></a></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99"><strong>Appendices</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-center bold">A</td>
<td>District Descriptions and Maps</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/append.pdf"><i class="ico pdf">PDF</i></a></td>
<td></td>
</tr>
<tr>
<td class="align-center bold">B</td>
<td>Detailed Statistics Explanatory Notes</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/psmnotes.pdf"><i class="ico pdf">PDF</i></a></td>
<td></td>
</tr>
<tr>
<td class="align-center bold">C</td>
<td><a href="/petroleum/supply/monthly/xls/appendixc.xlsx" class="ico_xls_right">Impact of Revisions on Major Series, 2016 - 2017</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td class="align-center bold">D</td>
<td>Northeast Home Heating Oil Reserve</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/heatresv.pdf"><i class="ico pdf">PDF</i></a></td>
<td></td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="99">Glossary</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>Petroleum Supply Monthly Definitions of Petroleum Products and Other Terms</td>
<td class="align-center"><a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"><i class="ico pdf">PDF</i></a></td>
<td></td>
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
<?php include('./includes/psm_side.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
