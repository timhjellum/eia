<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>Gasoline and Diesel Fuel Update</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Gasoline and Diesel Fuel Update'; ?>
<?php include('./includes/report-details.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<p>
<a href="images/paddmap-diesel-m2.png" class="lightbox"><img src="images/paddmap-diesel-m2.png" width="620" title="states in each PADD region"/></a>
</p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/gdu_side3.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
