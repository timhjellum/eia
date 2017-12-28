<?php $locale = 'ap';$twip_page = 'crude'; ?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>This Week In Petroleum Crude Oil Section</title>
<meta name="keywords" content="petroleum, crude oil, prices, stocks, production, imports, refinery inputs, supply">
<meta name="description"
content="U.S. Crude Oil Production, Imports, Exports, Stocks, Supply, Prices, Data and Analysis from Energy Information Administration (U.S. Dept. of Energy)">
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
<?php include('./includes/crude_template.html'); ?>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
