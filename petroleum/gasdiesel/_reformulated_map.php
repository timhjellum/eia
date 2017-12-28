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
<a name="reformulatedmap"></a>
<p>
                <h2>Reformulated Gasoline</h2>
<span><a href="images/formulation_map-lg.gif" class="lightbox"><img src="images/formulation_map-sm.gif" /></a></span></p>
<p>
                <h2><a name="statesmap"></a>States in each PADD Region</h2>
<span><a href="images/paddmapb-st-c_lg.png" class="lightbox"><img src="images/paddmapb-st-c_sm.png" /></a></span></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/gdu_side2.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
