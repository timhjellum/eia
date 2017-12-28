<?php$pageTitle = "International Oil and Gas Exploration and Development ";
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
<h1>International Oil and Gas Exploration and Development </h1>
<p class="date"> November 1, 1993<br />
</p>
<p>It is important to understand the changes taking place in the
global oil industry and their effects on the U.S. economy.
While the world appears to have adequate oil supplies, our
domestic production is declining and is projected to continue
to decline. U.S. dependence on oil imports is nearly 45
percent and is projected to increase. These ever increasing
imports come from a diverse group of countries, each with its
own unique endowment of oil and gas resources. These
foreign resources play a fundamental and increasing role in
U.S. energy markets, the economy, and the direction of
government policy and planning. Understanding the extent
and availability of these foreign resources is essential.
</p>
<p>Economic hard times have forced many industry
organizations, publishers, and companies to reduce or
discontinue publication of compiled basic international
activity data. The time and expense of the necessary research
are no longer affordable. EIA through its Foreign Energy
Supply Assessment Program (FESAP) is attempting to fill
this gap. By researching as many sources as possible and
sorting out data conflicts, EIA intends to provide consistent
and accurate historical data series.
</p>
<p>This report starts where previous quarterly reporting ended.
The<em> International Oil and Gas Exploration and Development
Activities </em>quarterly report presented information through
1990 before being discontinued. This first publication of a
new annual series contains most of the same data, plus some
new material, through 1991. It also presents historical data
covering a longer period of time than the previous quarterly
report. Country-level data on oil reserves, oil production,
active drilling rigs, seismic crews, wells drilled, oil reserve
additions, and oil reserve-to-production ratios (R/P ratios)
are listed for about 85 countries, where available, from 1970
through 1991. World and regional summaries are given in
both tabular and graphical form. Also, a much longer history
is available upon request for some items on a supplemental
computer diskette. The most popular table in the previous
quarterly report, a listing of new discoveries, continues in
this annual report as Appendix A.
</p>
<p><a href="/petroleum/archive/0577.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/side-nav_oilgasexpl.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>