<?php include_once('../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>Heating Oil and Propane Update - Revision report</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>($_SERVER['DOCUMENT_ROOT'].'/petroleum/includes/subnav_petroleum.inc') ;
$headtitle = 'Heating Oil and Propane Update'; ?>
<?php include('./includes/hopu_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<table class="data" width="50%">
<tbody>
<tr>
<th colspan="1" style="font-weight: bold; font-size:14px;">Revision reports</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><a href="/petroleum/heatingoilpropane/xls/revision-report-2015-16.xlsx" class="ico_xls_right" style="white-space:nowrap;">Revision report 2015-2016</a></td>
</tr>
<tr>
<td style="text-align: left;"><a href="/petroleum/heatingoilpropane/xls/revision-report-2014-15.xlsx" class="ico_xls_right" style="white-space:nowrap;">Revision report 2014-2015</a></td>
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
<?php include('./includes/hopu_side.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
