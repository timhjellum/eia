<?php$pageTitle = "An Analysis of Gasoline Markets Spring 1996";
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
<h1>An Analysis of Gasoline Markets Spring 1996</h1>
<p class="date">June 1, 1996<br />
</p>
<p>Retail gasoline prices in the United States rose sharply over the early months of 1996, impacting
consumers&#8482; pocketbooks and raising questions as to the causes behind the increases. The national
average retail price of regular self-serve gasoline, according to weekly data collected by the Energy 1
Information Administration (EIA), increased from a low of $1.08 per gallon in mid-February to
almost $1.29 by May 17. While gasoline prices usually rise somewhat at this time of
year, the rapidity and size of the 1996 increase made it more visible and caught consumers by
surprise. In response to public concern, President Clinton, on April 29, 1996, requested that the
Department of Energy investigate the causes of the gasoline price runup and prepare a report on the
situation within 45 days. This document is the result of that effort.
</p>
<p>Research and analysis performed by EIA reveal that the gasoline price increases experienced by
consumers in early 1996 resulted from a confluence of factors, but that crude oil price increases and
normal seasonal gasoline price increases account for most of the change. Unusual factors in gasoline
markets also played a role, and include: a late-winter cold spell causing refiners to focus on distillate instead of gasoline longer than usual; lower-than-normal gasoline stocks; continuing high gasoline
demand and high refinery capacity utilization; and persistent expectations that both crude oil and
gasoline prices would fall several months in the future, which discouraged production in excess of
demand to build stocks.
</p>
<p><a href="/petroleum/archive/gasoline_45day.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column"><?php include('./includes/side-nav_gasanalaysis96.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
