<?php
include_once('../config.php');
include(ROOT.'global/includes/bookshelf_legacy_redirects.inc');
include(ROOT.'global/includes/utils/utils.inc');
include(ROOT.'global/includes/utils/Neic.inc');
$neic = new NEIC();
$locale = 'ap';
?>
<!DOCTYPE html>
<html>
<head>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('./includes/sub-navigation.inc'); ?>
<div class="l-row">
<div class="l-full-width-column">
<?php include(ROOT.'global/includes/report_features/pet_feature_sql.inc'); ?>
<?php include(ROOT.'global/includes/bookshelf_results_sub3.inc'); ?>
</div><!-- /column -->
</div><!-- /l-row -->
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
