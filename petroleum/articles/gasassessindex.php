<?php$pageTitle = "Assessment of Summer 1997 Motor Gasoline Price Increase";
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
<h1>Assessment of Summer 1997 Motor Gasoline Price Increase</h1>
<p class="date">May 1, 1998<br />
</p>
<p>Gasoline markets in 1996 and 1997 provided several spectacular examples of petroleum market
dynamics. The first occurred in spring 1996, when tight markets, following a long winter of high
demand, resulted in rising crude oil prices just when gasoline prices exhibit their normal spring rise ahead of the summer driving season. Rising crude oil prices again pushed gasoline prices up at the end of 1996, but a warm winter and growing supplies weakened world crude oil markets, pushing
down crude oil and gasoline prices during spring 1997. The 1996 and 1997 spring markets provided good examples of how crude oil prices can move gasoline prices both up and down, regardless of the state of the gasoline market in the United States. Both of these spring events were covered in prior Energy Information Administration (EIA) reports.
</p>
<p>As the summer of 1997 was coming to a close, consumers experienced yet another surge in gasoline
prices. Unlike the previous increase in spring 1996, crude oil was not a factor. The late summer
1997 price increase was brought about by the supply/demand fundamentals in the gasoline markets,
rather than the crude oil markets.
</p>
<p>The nature of the summer 1997 gasoline price increase raised questions regarding production and
imports. Given very strong demand in July and August, the seemingly limited supply response
required examination. In addition, the price increase that occurred on the West Coast during late
summer exhibited behavior different than the increase east of the Rocky Mountains. Thus, the
Petroleum Administration for Defense District (PADD) 5 region needed additional analysis
(Appendix A). This report is a study of this late summer gasoline market and some of the important
issues surrounding that event.
</p>
<p><a href="/petroleum/archive/0621.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/side-nav_gasassess.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>