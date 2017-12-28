<?php $locale = 'pub'; ?>
<?php $url['filter'] = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : ''; ?>
<?php include_once('../../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include(ROOT.'petroleum/includes/sub-navigation.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1>Advanced Biofuels Workshop</h1>
<h4>Thanks you for registering.</h4>
<p>You will receive Webex / call information before each meeting registered at this email address.
</p>
<p><a href="/petroleum/heatingoilpropane/webinar/index.cfm">Return to registration page</a></p>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
