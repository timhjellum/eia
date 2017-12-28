<?php include_once('../../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>Prime Supplier Report - Energy Information Administration</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<script type="text/javascript" src="jquery.ui.datepicker.js"></script>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<!-- start header -->
<?php include(ROOT.'petroleum/includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Prime Supplier Report'; ?>
<?php $data_series = 'With Data for June 2017'; ?>
<?php $release = 'August 21, 2017'; ?>
<?php $next = 'September 22, 2017'; ?>
<?php include('./includes/psr_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<div class="clear"></div>
<div id="tabs">
<br />
<ul>
<li><a href="#tabs-volumes">Gasoline</a></li>
<li><a href="#tabs-volumes-1">No. 2 distillate</a></li>
<li><a href="#tabs-volumes-2">Kerosene-type jet fuel</a></li>
<li><a href="#tabs-volumes-3">Propane</a></li>
<li><a href="#tabs-volumes-4">Residual fuel</a></li>
</ul>
<div id="tabs-volumes">
<?php include('./includes/psr_gasoline.inc'); ?> </div>
<div id="tabs-volumes-1">
<?php include('./includes/psr_distillate.inc'); ?>
</div>
<div id="tabs-volumes-2">
<?php include('./includes/psr_kerojet.inc'); ?>
</div>
<div id="tabs-volumes-3">
<?php include('./includes/psr_propane.inc'); ?>
</div>
<div id="tabs-volumes-4">
<?php include('./includes/psr_residual.inc'); ?>
</div>
</div>
<p>  <br />
&#0150; = No data reported. <br />
NA = Not available. <br />
W = Withheld to avoid disclosure of individual company data. <br />
<sup>1</sup> Calculated on a per day basis. <br />
Notes: In January 2007, oxygenated was combined with conventional gasoline and ultra low sulfur diesel was added. Values shown for the current month are preliminary. Values shown for the previous month may be revised. <br />
Source: U.S. Energy Information Administration, Form EIA-782C, "Monthly Report of Prime Supplier Sales of Petroleum Products Sold for Local Consumption."
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/psr_side.inc'); ?>
</div><!-- /l-column -->
</div><!-- /l-row -->
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
