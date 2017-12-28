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
                <h2>Diesel Taxes</h2>
<p>Information on tax rates for   gasoline and diesel are available in the Explanatory Notes of the Petroleum Marketing Monthly   Publications by the Energy Information Administration.
</p>
<p><span><a href="images/padd_map-lg.jpg" class="lightbox"><img src="images/padd_map-sm.jpg" alt="PADD Map." /></a></span></p>
<h4>Explanatory Notes</h4>
<p>            The Explanatory Notes contain descriptions of the
survey forms, sampling frames, sample design, sampling
variability, imputation and estimation, and other<br />
technical information concerning the surveys. You may
obtain a complete set of the Explanatory Notes for the
Petroleum Marketing Monthly through the following<br />
sources:</p>
<p>            1) Visit the EIA Website, Petroleum Marketing Annual,
Explanatory Notes<br />
2) The National Energy Information Center on (202)
586-8800 or infoctr@eia.doe.gov.
</p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/gdu_side2.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
