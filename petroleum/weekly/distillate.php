<?php $locale = 'ap';$twip_page = 'distillate'; ?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>This Week In Petroleum Distillate Section</title>
<meta name="keywords"
content="petroleum, heating oil, fuel oil, diesel fuel, distillate, prices, spot prices, futures prices, wholesale prices, sales, fuel oil use, heating oil use, distillate use, consumption, imports, supply, demand">
<meta name="description"
content="Heating Oil, Diesel Fuel, and Distillate Fuel Oil Production, Imports, Stocks, Supply, Wholesale and Residential Prices, Weekly On-Highway Diesel Prices, Data and Analysis from the Energy Information Administration.">
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<!-- No Cache Code  -->
<META HTTP-EQUIV="Expires" CONTENT="0">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php include('./includes/twip_header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<?php include('./includes/distillate_template.html'); ?>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
