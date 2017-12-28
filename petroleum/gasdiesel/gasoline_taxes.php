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
                <h2>Gasoline Taxes</h2>
<p>Information on tax rates for   gasoline and diesel are available from the Federal Highway Administration's web   site. To access these, click on the URL below, select a month, and then select   the file, &quot;Tax Rates on Motor Fuel&quot; under the heading &quot;Contents&quot;.
</p>
<p>
<a href="http://www.fhwa.dot.gov/ohim/mmfr/mmfrpage.htm" target="_blank">http://www.fhwa.dot.gov/ohim/mmfr/mmfrpage.htm</a></p>
<p>
To   access historical gasoline and diesel state tax rate information, click on the   URL below:</p>
<p>
<a href="http://www.fhwa.dot.gov/policy/ohim/hs03/xls/mf121t.xls" target="_blank">http://www.fhwa.dot.gov/policy/ohim/hs03/xls/mf121t.xls</a>.
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
