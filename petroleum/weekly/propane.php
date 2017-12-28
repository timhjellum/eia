<?php $locale = 'ap';$twip_page = 'propane'; ?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>This Week In Petroleum Propane Section</title>
<meta name="keywords"
content="petroleum, propane, liquefied gases, heating fuel, alternative fuels, liquefied petroleum gas, prices, sales, supply, natural gas plant liquids">
<meta name="description"
content="Propane and Other Liquefied Petroleum Gases Production, Imports, Stocks, Supply, Prices, Sales Volumes Data and Analysis from the Energy Information Administration.">
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
<div class="l-full-width-column">
<?php include('./includes/propane_template.html'); ?>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
