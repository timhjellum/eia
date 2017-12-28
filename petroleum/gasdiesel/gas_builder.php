ï»¿<?php $hct = 'y'; ?><?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<script type="text/javascript" src="jquery.ui.datepicker.js"></script>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<?php include('./includes/global_dates.inc'); ?>
<?php include('./includes/gas_buildvar.inc'); ?>
<?php include('./includes/gas_output.inc'); ?>
<?php include('./includes/gas_write_static_vars.inc'); ?>
<h1>Loaded.</h1>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
<script type="text/javascript">
$(document).ready(function() {
$("#various1").fancybox({
'titlePosition'		: 'inside',
'transitionIn'		: 'none',
'transitionOut'		: 'none'
});
});
</script>