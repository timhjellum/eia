<?php include_once('../config.php'); ?>
<?php $L2T = 'Petroleum & Other Liquids'; ?>
<?php $locale = 'overview'; ?>
<?php $l2page = 'page_pet'; ?>
<!doctype html>
<html>
<head>
<meta http-equiv='X-UA-Compatible' content='IE=edge'/>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('./includes/sub-navigation.inc'); ?>
<div class='alert'><p><strong>What's changed?</strong> &nbsp; See <a href='/about/eia_explained.cfm#l2_enhancements' id='enhance' style='background:none; padding-right:0; margin-right:0'>highlights of new features</a> or <a href='#video' id='youtube' style='background:none; padding-right:0; margin-right:0'>take a 60 second video tour</a>.
</p></div>
<?php include(ROOT.'global/includes/issuestrends/carousel.inc'); ?>
<div class='l-row'>
<div class='l-two-column'>
<?php include('./includes/data_table.inc'); ?>
<?php include('./includes/updated-data-series.inc'); ?>
<?php include('./includes/survey-forms-changes-announcements.inc'); ?>
</div>
<div class='l-two-column'>
<?php include(ROOT.'global/includes/issuestrends/recent_AP_schedule.inc'); ?>
<?php include('./includes/upcoming-releases.inc'); ?>
</div>
</div>
<?php include('./includes/interactive-visualizations-data-multimedia.inc'); ?>
<?php include('./includes/energy-education.inc'); ?>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
