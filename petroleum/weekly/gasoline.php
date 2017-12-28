<?php $locale = 'ap';
$twip_page = 'gasoline'; ?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>This Week In Petroleum Gasoline Section</title>
<meta name="keywords"
content="petroleum, gas, gasoline, gas prices, gasoline prices, gasoline grades, oxygenated, reformulated, gasoline blending components, production, imports, stocks, demand, supply, inventories, prices, retail prices, storage, sales, spot prices, future prices">
<meta name="description"
content="Gasoline Production, Imports, Stocks, Supply, Prices by Grade and Sales Type, Retail City Average Prices, Data and Analysis from the Energy Information Administration.">
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
<?php include('./includes/gasoline_template.html'); ?>
</div>
<?php
if(file_exists($_SERVER['DOCUMENT_ROOT']."/global/includes/css_rehab_eia-footer.inc")) {
include(ROOT.'global/includes/css_rehab_eia-footer.inc');
include(ROOT.'global/includes/css_rehab_eia-footer.inc');
}
?>
</body>
</html>
<script type="text/javascript">
$(document).ready(function(){
$(".page_tabs").tabs();
});
</script>
