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
                <h2>Diesel Fuel Price Data Collection Procedures</h2>
<p>Every Monday, cash self-serve on-highway diesel prices (including taxes) are collected from a sample of approximately 400 retail diesel outlets in the continental U.S. The sample includes a combination of truck stops and service stations that sell on-highway diesel fuel. The data represent the price of ultra low sulfur diesel (ULSD) which contains less than 15 parts-per-million sulfur.
</p>
<p>The prices are collected via telephone, fax, email, or the internet from participating outlets. All collected prices are subjected to automated edit checks during data collection and data processing. Data flagged by the edits are verified with the respondents. Imputation is used for companies that cannot be contacted and for reported prices that are extreme outliers. The average survey response rate for 2010 was 99.6%.
</p>
<p>Average national and regional prices are released around 5:00 p.m. ET on Mondays, except on government holidays, in which case the data are released on Tuesday (but still represent Monday's price). These data are made available through EIA's hotline (202-586-6966), EIA's web page, and through EIA's email notification, regular and wireless.
</p>
<p></p>
<p><a href="diesel_procedure_archive.php">Previous Diesel Fuel Price Data Collection Procedures</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/gdu_side2.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
