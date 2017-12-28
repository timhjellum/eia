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
<!--
<p class="grey_side">
<strong> Notice:</strong> We are currently experiencing technical issues that are delaying todayÃ¢â‚¬â„¢s release of the motor gasoline price data.  We will update this page as soon as possible once those issues are resolved. We apologize for the inconvenience.</a> </p>
<p class="grey_side"><strong>Note:</strong> Due to insufficient response related to Hurricane Irma, Miami gasoline price estimates are unavailable for September 11, 2017. <br/> <br/> <a href="/survey/notice/marketing2017.cfm">Petroleum Marketing Survey Form Changes Proposed for 2017</a>
</p>
-->
<?php include('./includes/gdu_gas.php'); ?>
<?php include('./includes/gdu_diesel.php'); ?>
<em>*prices include all taxes</em>
<div class="l-row">
<h3><a name="pumps"></a>What we pay for in a gallon of:</h3>
<div class="l-split-column"><?php include('./includes/gdu_gaspump.php'); ?></div>
<div class="l-split-column"><?php include('./includes/gdu_dieselpump.php'); ?>                </div>
</div>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/gdu_side-home.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
