<?php$pageTitle = "Explaining EIA Crude Oil and Petroleum Product Price Data and Comparing with Other U.S. Government Data Sources, 2001 to 2010";
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
<h1>Explaining EIA Crude Oil and Petroleum Product Price Data and Comparing with Other U.S. Government Data Sources, 2001 to 2010</h1>
<p class="date">November 30, 2012<br />
</p>
<p>This article describes the sampling frames and basic data collection methods for petroleum price data reported by Energy Information Administration (EIA) and other Government agencies. In addition, it compares and contrasts annual average prices reported by EIA with comparable prices from the Bureau of Labor Statistics (BLS) CPI (Consumer Price Indexes) for the retail prices of residential No. 2 distillate, on-highway diesel fuel and motor gasoline (all grades.) Further, it compares refiner wholesale/resale prices for No. 2 fuel oil, No. 2 diesel fuel, motor gasoline (all grades,) kerosene-type jet fuel and residual fuel oil reported by EIA with comparable prices from the BLS PPI (Producer Price Index.) A discussion of the various crude oil prices and spot/futures prices published by EIA and other Government agencies is also included in the article.
</p>
<p><a href="/petroleum/feature/price-comparison092012_article.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
</div>
</div>
</div>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/side-nav_pricecompare.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>