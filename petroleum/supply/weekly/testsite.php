<?php include_once('../../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>WPSR Testsite for upcoming change to weekly crude oil inventory data series</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include(ROOT.'petroleum/includes/sub-navigation.inc'); ?>
<?php include('./includes/testsite_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<div class="notice">
<p><strong> Notice:</strong> EIA's <a href="/petroleum/supply/weekly/"><em>Weekly Petroleum Status Report</em> (WPSR)</a> will no longer include crude oil lease stocks in the U.S. total commercial crude oil inventory data series starting on October 13, 2016.</p>
</div>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
