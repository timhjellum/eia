<?php include_once('../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>Heating Oil and Propane Update</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Heating Oil and Propane Update '; ?>
<?php include('./includes/hopu_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h3>Maps of states participating in Winter Fuels Survey</h3>
<span><a href="images/propane_map.png" class="lightbox" style="float:left"><img src="images/propane_map.png" alt="Residential propane PADD map" width="310"/></a>
<a href="images/heating_oil_map.png" class="lightbox" style="float:right"><img src="images/heating_oil_map.png" alt="Residential heating oil PADD map" width="310"/></a></span>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/hopu_side.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
