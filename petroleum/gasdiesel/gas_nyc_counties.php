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
                <h2>Counties included in New York City metro area</h2>
<p>
The list below includes the counties in the EIA-878 definition for New York City Metro Area.
<ul>
<li>Bergen County, NJ</li>
<li>Bronx County, NY</li>
<li>Essex County, NJ</li>
<li>Fairfield County, CT</li>
<li>Hudson County, NJ</li>
<li>Hunterdon County, NJ</li>
<li>Kings County, NY</li>
<li>Litchfield County (partial), CT</li>
<li>Middlesex County, NJ</li>
<li>Monmouth County, NJ</li>
<li>Morris County, NJ</li>
<li>Nassau County, NY</li>
<li>New Haven County (partial), CT</li>
<li>New York County, NY</li>
<li>Ocean County, NJ</li>
<li>Orange County, NY</li>
<li>Passaic County, NJ</li>
<li>Putnam, NY</li>
<li>Queens County, NY</li>
<li>Richmond County, NY</li>
<li>Rockland County, NY</li>
<li>Somerset County, NJ</li>
<li>Suffolk County, NY</li>
<li>Sussex County, NJ</li>
<li>Union County, NJ</li>
<li>Westchester County, NY</li>
</ul>
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
