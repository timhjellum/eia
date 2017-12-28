ï»¿<?php include_once('../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<?php $hct = 'y'; ?>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<?php  if(!isset($no_titling)) include"../../global/includes/titling.inc"; ?>
<style>
.report_header p a {
text-transform: none;
font-size: 8pt;
line-height: 1.75em;
}
.report_header p .ico_xls {
padding: 3px 0px 2px 16px;
}
</style>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<!-- start header -->
<?php $headtitle = 'US Oil and Gas Wells by Production Rate '; ?>
<?php $release = 'June xx, 2017'; ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php include('./includes/drilling_selector.inc'); ?>
</div>
</div>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<div class="l-full-width-column">
<?php include('./includes/static_vars_include.inc'); ?>
<?php include('./includes/rsb.inc'); ?>
<div id="tabs">
<ul>
<li><a href="#tabs-summary-1">Oil wells</a></li>
<li><a href="#tabs-summary-2">Gas wells</a></li>
<li><a href="#tabs-summary-3">Total wells</a></li>
</ul>
<div id="tabs-summary-1">
<?php include('./includes/table01_oil_wells.inc'); ?>
</div>
<div id="tabs-summary-2">
<?php include('./includes/table02_gas_wells.inc'); ?>
</div>
<div id="tabs-summary-3">
<?php include('./includes/table03_total_wells.inc'); ?>
</div>
<p>This report includes four sections: an explanation of what a well is, methodology, frequently asked questions, and suggestions for querying the downloadable Excel data file of individual state data. The distribution tables for the production rates of all U.S. oil and natural gas wellsâ€”including marginal wellsâ€”cover the years 2000 through 2015.  The Appendix provides summary breakouts for four regions: the total United States, the Lower 48 states excluding the Federal Gulf of Mexico, the Federal Gulf of Mexico, and the state of Alaska.
</p>
</div>
</div><!-- /.l-column -->
</div><!-- /.l-row -->
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
