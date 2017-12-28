<?php $locale = 'ap'; ?><?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>EIA-914 monthly production report</title>
<?php $widgets="n"; ?>
<?php $jvm2="y"; ?>
<?php $hct="y"; ?>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<link rel="stylesheet" href="css/styles.css" type="text/css">
<link rel="stylesheet" href="css/print.css" type="text/css" media="print">
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<!-- end sub-nav -->
<?php include('./includes/page_header.inc'); ?>
</div>
</div>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<div class="feature">
<span>
<h3>Revision/Correction</h3>
<p>Revisions made to the November 2015 Monthly Crude Oil and Natural Gas Production:</p>
<p>December 7, 2015</p>
<ul>
<li>EIA revised September 2015 crude oil production to accommodate a revision made by the Alaska Oil and Gas Conservation Commission to Alaska's reported production.</li>
</ul>
</span>
</div>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
</div><!-- /l-column -->
</div><!-- /l-row -->
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
