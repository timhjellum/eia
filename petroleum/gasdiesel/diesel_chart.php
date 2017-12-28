ï»¿<?php include_once('../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title></title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<script type="text/javascript" src="highcharts.src.js"></script>
<script type="text/javascript" src="eia-theme.js"></script>
<script type="text/javascript" src="jquery.ui.datepicker.js"></script>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php include('./includes/diesel_static_vars_include.inc') ;
include ('includes/global_dates.inc') ;
include ('includes/diesel_output.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
