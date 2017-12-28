<?php$pageTitle = "Comparison of Selected EIA-782 Data With Other Data Sources";
$L2Title = "Petroleum and Other Liquids";
?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<?php
if(isset($pageTitle) && $pageTitle) {
print "<title>" . $pageTitle . "</title>"; print PHP_EOL;
$pageTitle = '';
}
?>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1>Comparison of Selected EIA-782 Data With Other Data Sources</h1>
<p class="date">December 12, 2012<br />
</p>
<p>This article compares annual average prices reported from the EIA-782 survey series for residential No. 2 distillate, on-highway diesel fuel, retail regular motor gasoline, refiner No. 2 fuel oil for resale, refiner No. 2 diesel fuel for resale, refiner regular motor gasoline for resale, and refiner kerosene-type jet fuel for resale with annual average prices reported by other sources. In terms of volume, it compares EIA-782C Prime Supplier annual volumes for motor gasoline (all grades), distillate fuel oil, kerosene-type jet fuel and residual fuel oil with annual volumes from other sources.
</p>
<p><a href="/petroleum/archive/price-comparison092012_article.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/side-nav_fullreport.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>