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
<h1>Motor Gasoline Market Spring 2007 and Implications for Spring 2008</h1>
<p class="date">April 8, 2008<br />
</p>
<p>Gasoline prices have risen substantially since the 1990s, driven mainly by crude oil price
increases, which pushed up wholesale and retail gasoline prices. While crude oil prices,
which are set in the world market, continue to be a major factor behind gasoline price
increases, other factors impact the wholesale price of gasoline relative to crude oil.
Changes in wholesale gasoline prices relative to crude oil are determined by the tightness
between new gasoline supply (production and net imports) and demand. Demand varies
seasonally and depends on economic factors. New gasoline supply is affected by refinery
outages, refinery run decisions, and import variations. This report focuses on the major
factors that drove the widening difference between wholesale gasoline and crude oil
prices in 2007 and explores how those factors might impact gasoline prices in 2008.
</p>
<p>In particular, and responsive to Section 804 of the Energy Independence and Security Act
of 2007, the Energy Information Administration (EIA) reviewed and analyzed
information that was available from commercial reporting services on scheduled refinery
outages for 2008, and assessed the expected effects of those outages on the prices and
supplies of gasoline. Much of this report focuses on a review of 2007 in order to
establish a basis for determining how planned refinery outages and other factors might
impact gasoline markets in 2008. EIA&#8482;s future reports on planned refinery outages under
Section 804 will evolve as additional information becomes available and EIA develops
new methodologies for analysis.
</p>
<p>Toward the end of 2006, crude oil prices began to decline, and with the transition from
methyl tertiary butyl ether (MTBE) to ethanol completed and the end of the summer
driving season drawing near, gasoline prices dropped even faster than crude oil prices.
Both crude oil and gasoline prices bottomed out toward the end of January 2007, before
reversing and climbing again. From late January through the middle of May 2007,
average U.S. retail gasoline prices rose $1.05 per gallon, starting from $2.17 and peaking
at $3.22 per gallon. Retail prices rose with wholesale (spot) gasoline prices. Crude oil,
however, only rose about 30 cents per gallon during this same time period.
Two primary supply factors contributed to the gasoline price increases over crude oil prices in the first half of 2007: large refinery outages in the United States and inadequate import increases to make up for the U.S. refinery production losses.
</p>
<p><a href="/petroleum/archive/spgmogas2008.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column"><?php include('./includes/side-nav_spgmogas.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
