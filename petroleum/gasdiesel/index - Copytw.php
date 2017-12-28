<?php $hct = 'y'; ?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>Gasoline and Diesel Fuel Update - Energy Information Administration</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<script type="text/javascript" src="jquery.ui.datepicker.js"></script>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Gasoline and Diesel Fuel Update'; ?>
<?php include('./includes/report-details.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<p class="grey_side"><strong>Notice:</strong> We are currently experiencing technical issues that are delaying todayÃ¢â‚¬â„¢s release of the motor gasoline price data.  We will update this page as soon as possible once those issues are resolved. We apologize for the inconvenience.
</p>
<strong>Note:</strong> <a href="/survey/notice/marketing2017.cfm">Petroleum Marketing Survey Form Changes Proposed for 2017</a>
</p>
<?php include('./includes/gdu_gas.php'); ?>
<?php include('./includes/gdu_diesel.php'); ?>
<em>*prices include all taxes</em>
<table width="600">
<tr>
<td colspan="2"><a name="pumps"></a>
<h3>What we pay for in a gallon of:</h3></td>
<tr>
<td><?php include('./includes/gdu_gaspump.php'); ?></td>
<td><?php include('./includes/gdu_dieselpump.php'); ?></td>
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
<?php include('./includes/gdu_side-home.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
