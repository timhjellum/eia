<?php
$pageTitle = "Accuracy of Petroleum Supply Data ";
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
<?php include(ROOT.'global/includes/_css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1>Accuracy of Petroleum Supply Data </h1>
<p class="date">February 27, 2009<br />
</p>
<p>Accuracy of published data in the Weekly Petroleum Status Report, the Petroleum Supply Monthly, and the Petroleum Supply Annual.
</p>
<p>Petroleum supply data collected by the Petroleum Division
(PD) in the Office of Oil and Gas (OOG) of the Energy
Information Administration (EIA) showed an improvement
in the accuracy of the 2007 data from initial estimates, to
interim values, to final values. These data were presented in
a series of PD products: the Weekly Petroleum Status
Report (WPSR), This Week in Petroleum (TWIP), the
Petroleum Supply Monthly (PSM), and the Petroleum
Supply Annual (PSA). Weekly estimates in the WPSR and
TWIP were the first values available.
</p>
<p><a href="/petroleum/archive/art0902.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/side-nav_accuracy.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
