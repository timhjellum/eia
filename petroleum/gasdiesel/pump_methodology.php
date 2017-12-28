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
                <h2>Methodology For Gasoline and Diesel Fuel Pump Components</h2>
<p>The components for the gasoline and diesel fuel pumps are calculated in the following manner in cents per gallon and then converted into a percentage:</p>
<p><strong>Crude Oil</strong> - the monthly average of the composite refiner acquisition cost, which is the average price of crude oil purchased by refiners.
</p>
<p><strong>Refining Costs &amp; Profits</strong> - the difference between the monthly average of the spot price of gasoline or diesel fuel (used as a proxy for the value of gasoline or diesel fuel as it exits the refinery) and the average price of crude oil purchased by refiners (the crude oil component).
</p>
<p><strong>Distribution &amp; Marketing Costs &amp; Profits</strong> - the difference between the average retail price of gasoline or diesel fuel as computed from EIA's weekly survey and the sum of the other 3 components.
</p>
<p><strong>Taxes</strong> - a monthly national average of federal and state taxes applied to gasoline or diesel fuel.
</p>
<p>It should be noted that the second and third components can vary widely, depending on the time when the components are being calculated. Since there is typically a lag between when the spot price changes to when the retail price changes, the refining costs &amp; profits component and the distribution &amp; marketing costs &amp; profits component can vary from month to month. For example, as prices increase on the spot market, often the retail prices take time to adjust. Thus, at this point in the cycle, the refining costs &amp; profits component (assuming no corresponding increase in crude oil prices) would be relatively large while the distribution &amp; marketing costs &amp; profits component would be relatively small. However, later on, as retail prices "catch-up" with the previous spot price increases, the distribution &amp; marketing costs &amp; profits component would increase while the refining costs &amp; profits component would decrease.
</p>
<p> Historical monthly pump data:<br />
&nbsp; &nbsp; &bull; <a href="gaspump_hist.php">Gasoline</a><br />
&nbsp; &nbsp; &bull; <a href="dieselpump_hist.php">Diesel Fuel</a>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/gdu_side3.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
