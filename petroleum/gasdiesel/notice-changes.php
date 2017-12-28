<?php include_once('../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>Gasoline and Diesel Fuel Update Notice</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php /* include('petroleum/ */ include('../includes/subnav_petroleum.inc') ;
$headtitle = 'Gasoline and Diesel Fuel Update Notice';
include ('includes/subnav_gdunotice.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h3>Notice: Upcoming Changes to the Gasoline and Diesel Fuel Update, the Weekly U.S. Retail Gasoline and the Weekly Retail On-Highway Diesel Price reports</h3>
<p>On Monday, December 5, 2011, EIA will launch a redesigned Gasoline and Diesel Fuel Update. The redesigned Gasoline and Diesel Fuel Update will include the current Weekly On-Highway Diesel Prices and the Weekly U.S. Retail Gasoline Prices reports.</p>
<p><a href ="gdumainpage.gif">See a preview</a> of the new Gasoline and Diesel Fuel Update.</p>
<p>Below is a detailed walk-through of the upcoming changes.</p>
<table class="data">
<caption>Website Changes</caption>
<tbody>
<tr>
<td colspan="4" style="border: none;">We will discontinue the current <a href ="/oil_gas/petroleum/data_publications/wrgp/mogas_home_page.html">Weekly U.S. Retail Gasoline Prices</a> and the <a href="http://www.eia.gov/oog/info/wohdp/diesel.asp">Weekly Retail On-Highway Diesel Prices</a> as stand-alone products. All the information contained in these products will be retained and combined into the redesigned version of the <a href ="gdumainpage.gif">Gasoline and Diesel Fuel Update</a>.<br />
The new Gasoline and Diesel Fuel Update will be at this url: (preview - <a href ="gdumainpage.gif">/petroleum/gasdiesel/</a>). You will be automatically redirected to this page if you use the links to the discontinued products.<br />
The <a href="/oil_gas/petroleum/data_publications/wrgp/padd_page.html">map</a> that leads to gasoline price information on States in each region will no longer be hyperlinked. All the information will still be available in Petroleum Navigator (see the corresponding links below).<br />
We will add a new series on diesel prices (West Coast Less California) in the near future. The statistical methodology will be revised appropriately to reflect the addition of the new diesel series.
</td>
</tr>
<tr>
<td style="border: none;"><strong>Discontinued in this format:</strong></td>
<td style="border: none;"><strong>Data now available:</strong></td>
<td style="border: none;">&nbsp;</td>
</tr>
<tr>
<td style="border: none;"><a href="/oog/info/wohdp/diesel_detail_report_combined.asp">Weekly Retail On-Highway Diesel Prices Last 53 weeks (html)</a></td>
<td style="border: none;"><a href="/dnav/pet/pet_pri_gnd_a_epd2d_pte_dpgal_w.htm">Petroleum Navigator</a></td>
<td style="border: none;">&nbsp;</td>
</tr>
<tr>
<td style="border: none;"><a href="/oog/info/wohdp/List_Serve_report_All.txt">Weekly Retail On-Highway Diesel Prices Last 53 weeks (txt)</a></td>
<td style="border: none;"><a href="/dnav/pet/pet_pri_gnd_a_epd2d_pte_dpgal_w.htm">Petroleum Navigator</a></td>
<td style="border: none;">&nbsp;</td>
</tr>
<tr>
<td style="border: none;"><a href="/oil_gas/petroleum/data_publications/wrgp/mogas_detailed_reports.html">Weekly Retail Gasoline Prices Detailed Formulation and Grade Reports</a></td>
<td style="border: none;"><a href="/dnav/pet/pet_pri_gnd_dcus_nus_w.htm">Petroleum Navigator</a></td>
<td style="border: none;">&nbsp;</td>
</tr>
<tr>
<td style="border: none;"><a href="/oil_gas/petroleum/data_publications/wrgp/mogas_history.html">Weekly Retail Gasoline Historical Prices</a></td>
<td style="border: none;"><a href="/dnav/pet/pet_pri_gnd_dcus_nus_w.htm">Petroleum Navigator</a></td>
<td style="border: none;">&nbsp;</td>
</tr>
<tr>
<td style="border: none;">Weekly Retail Gasoline Coefficient of Variation of Price Report <a href="/oil_gas/petroleum/data_publications/wrgp/sampling_error.html">(html)</a> and <a href="/oil_gas/petroleum/data_publications/wrgp/sampling_error.rtf">(rtf)</a> files </td>
<td style="border: none;"><a href="/oil_gas/petroleum/data_publications/wrgp/mogas_recent_prices_and_CVs.xls">XLS</a></td>
<td style="border: none;">&nbsp;</td>
</tr>
<tr>
<td style="border: none;"><a href="/oil_gas/petroleum/data_publications/wrgp/printer_friendly_version.html">Weekly U.S. Retail Gasoline Prices, Printer Friendly Version</a></td>
<td style="border: none;"><a href="/dnav/pet/pet_pri_gnd_dcus_nus_w.htm">Petroleum Navigator</a></td>
<td style="border: none;">&nbsp;</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="99"></td>
</tr>
</tfoot>
</table>
<table class="data"><caption></caption><thead><tr><th colspan="3" align="left">Email and Wireless Notice Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3" style="border: none;">
The gasoline and diesel email notification formats will change slightly. The gasoline email notification will now match the current diesel email notification in terms of only showing the last three weeks of data. The message will provide a link for you to get historical data. <br /><br />
Preview the new email formats:
<ul>
<li><a href="dieseltext.txt">Weekly On-Highway Diesel Prices</a></li>
<li><a href="gasolinetext.txt">Weekly Retail Gasoline Prices</a></li>
</ul>
</td>
</tr>
<tr>
<td colspan="3" style="border: none;">
When the new series on West Coast less California is added in the future, the cell phone notification for diesel prices will include this series. <br /><br />
Preview the new format: <a href="cellphonetext.txt">Weekly On-Highway Diesel Prices for Wireless Devices</a><br />
</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="99"></td>
</tr>
</tfoot>
</table>
<p>
<strong>For questions or comments concerning these changes, please contact:</strong> <a href="mailto:infoctr@eia.gov">InfoCtr@eia.gov</a></p>
<?php /* end main content */ ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
