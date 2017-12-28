<?php$pageTitle = "Aspects of Holly Corporation's Acquisition of Sunoco Inc.'s Tulsa, Oklahoma Refinery ";
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
<h1>Aspects of Holly Corporation's Acquisition of Sunoco Inc.'s Tulsa, Oklahoma Refinery </h1>
<p class="date">April 22, 2009<br />
</p>
<p>On April 16, 2009, the Wall Street Journal reported ("Sunoco to Sell Refinery to Holly for $65 Million") that Sunoco Inc. agreed to sell its Tulsa, Oklahoma refinery to Holly Corporation for $65 million in cash. Although no debt was reportedly acquired by Holly, Holly did agree to make an undisclosed amount of environmental upgrade investments in the refinery. The transaction is expected to close June 1, 2009 and to move Holly from the twenty-eighth-largest domestic refiner at the outset of 2008 to the eighteenthlargest refiner, and the fifth-largest non-vertically integrated, publicly traded U.S. refiner. The acquisition provides Holly with a midwestern presence and increases its national significance.
</p>
<p><a href="/petroleum/archive/holly_tulsaref.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/side-nav_holly.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>