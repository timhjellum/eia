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
                <h2>Gasoline Price Data Collection Procedures </h2>
<p>Every Monday, retail prices for all three grades of gasoline are collected by telephone from a sample of approximately 800 retail gasoline outlets. The prices are  published around 5:00 p.m. ET Monday, except on government holidays, when the  data are released on Tuesday (but still represent Monday's price). The reported price includes all taxes and is the pump price paid by a consumer as of 8:00 A.M. Monday. This price represents the self-serve price except in areas having only full-serve. The price data are used to calculate weighted average price estimates at the city, state, regional and national levels using sales and delivery volume data from other EIA surveys and population estimates from the Bureau of Census.
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
