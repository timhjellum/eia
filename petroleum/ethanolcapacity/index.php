<?php include_once('../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>U.S. Fuel Ethanol Plant Production Capacity</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php $headtitle = 'U.S. Fuel Ethanol Plant Production Capacity'; ?>
<?php $release = 'June 20, 2017'; ?>
<?php $next = 'June 2018'; ?>
<?php include('./includes/prodcap_selector.inc'); ?>
<div class="l-row">
<div class="l-two-third-column">
<p>
The U.S. Energy Information Administration released its annual fuel ethanol production capacity report.   The new report contains data for all operating U.S. fuel ethanol production plants as of January 1, 2017.
</p>
<p>Detailed nameplate capacity of fuel ethanol plants by Petroleum Administration for Defense District (PADD District) are available in  <a href="ethanolcapacity.xlsx" class="ico_xls_right">XLS</a>.
</p>
<table class="data">
<caption>U.S. Nameplate Fuel Ethanol Plant Production Capacity as of  January 1, 2017</caption>
<thead>
<tr>
<th rowspan="2">PAD District</th>
<th rowspan="2">Number of Plants</th>
<th rowspan="2" class="divider"></th>
<th colspan="2">2017<br /> Nameplate Capacity</th>
<th rowspan="2" class="divider"></th>
<th colspan="2">2016<br /> Nameplate Capacity</th>
</tr>
<tr>
<th>(MMgal/year)</th>
<th>(mb/d)</th>
<th>(MMgal/year)</th>
<th>(mb/d)</th>
</tr>
</thead>
<tbody>
<tr>
<td>PADD 1</td>
<td>7</td>
<td rowspan="5" class="divider"></td>
<td>507</td>
<td>33</td>
<td rowspan="5" class="divider"></td>
<td>442</td>
<td>29</td>
</tr>
<tr>
<td>PADD 2</td>
<td>175</td>
<td>14,074</td>
<td>918</td>
<td>13,537</td>
<td>883</td>
</tr>
<tr>
<td>PADD 3</td>
<td>5</td>
<td>439</td>
<td>29</td>
<td>439</td>
<td>29</td>
</tr>
<tr>
<td>PADD 4</td>
<td>4</td>
<td>200</td>
<td>13</td>
<td>200</td>
<td>13</td>
</tr>
<tr>
<td>PADD 5</td>
<td>7</td>
<td>285</td>
<td>19</td>
<td>285</td>
<td>19</td>
</tr>
</tbody>
<tfoot>
<tr class="total">
<td>U.S. Total</td>
<td>198</td>
<td class="divider"></td>
<td>15,505</td>
<td>1,011</td>
<td class="divider"></td>
<td>14,903</td>
<td>973</td>
</tr>
<tr class="foot-note">
<td colspan="99">
<br />Nameplate Capacity: &nbsp;is the volume of fuel ethanol that can be produced during a period of 12 months under normal operating conditions.<br />
<br /><strong>Note:</strong> &nbsp;In previous reports, EIA also reported plant maximum sustainable production capacity, a relatively subjective measure driven by individual operating decisions and applied efficiency techniques.  In 2013, EIA ceased collecting data on plant maximum sustainable capacity and began publishing only nameplate production capacity, an inherently more objective measure of available capacity.<br />
<br />Source: Form EIA-819M Monthly Oxygenate Report
</td>
</tr>
</tfoot>
</table>
</div>
<div class="l-one-third-column">                </div>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
