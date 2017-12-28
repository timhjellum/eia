<?php $locale = 'ap';$hct='y'; ?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>U.S. Movements of Crude Oil by Rail</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<script type="text/javascript">
$(function() {
$( "#padd_regions" ).buttonset();
function switchRegion(whichRegion){
$("div.padd").removeClass('active');
$('#'+whichRegion).addClass('active');
};
$( "#padd_regions input" ).change(function() {
console.log($(this).attr('id'));
var active_region = $(this).attr('id');
switch (active_region) {
case 'padd1':
switchRegion('pr1');
break;
case 'padd2':
switchRegion('pr2');
break;
case 'padd3':
switchRegion('pr3');
break;
case 'padd4':
switchRegion('pr4');
break;
case 'padd5':
switchRegion('pr5');
break;
}
});
});
</script>
<style>
span.padd_label {
font-family: Times New Roman, Times, serif;
font-style: italic;
font-size: 14pt;
}
#tabs-summary-3 span {
float: none;
}
#padd_regions {
display: inline;
}
#padd_regions > label.ui-button {
-webkit-border-radius: 50px;
-moz-border-radius: 50px;
border-radius: 50px;
height: 20px;
padding: 5px 2px 5px 2px;
}
#padd_regions > label.ui-state-default {
background: #ffffff;
border: 1px solid #189bd7;
color: #189bd7;
}
#padd_regions > label.ui-state-hover {
background: #ccefff;
border: 1px solid #189bd7;
color: #189bd7;
cursor: pointer;
}
#padd_regions > label.ui-state-active, #padd_regions > label.ui-state-active:hover {
background: #189bd7;
border: 1px solid #189bd7;
color: #ffffff;
cursor: default;
}
#padd_regions > label.ui-button span {
width: 20px;
text-align: center;
}
div.padd {
display: none;
}
div.padd.active {
display: block;
}
</style>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php include('./includes/crudbyrail_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<div id="tabs">
<ul>
<li><a href="#tabs-summary-1">Summary - mbbl/d</a></li>
<li><a href="#tabs-summary-2">Summary - mbbl</a></li>
<li><a href="#tabs-summary-3">Changes by PADD </a></li>
</ul>
<div id="tabs-summary-1">
<?php include('./includes/data_table_mbbld.php'); ?>
</div>
<div id="tabs-summary-2">
<?php include('./includes/data_table_mbbl.php'); ?>
</div>
<div id="tabs-summary-3">
<span class="padd_label">PADD region:</span>
<div id="padd_regions">
<input type="radio" id="padd1" name="region" checked="checked">
<label for="padd1">1</label>
<input type="radio" id="padd2" name="region">
<label for="padd2">2</label>
<input type="radio" id="padd3" name="region">
<label for="padd3">3</label>
<input type="radio" id="padd4" name="region">
<label for="padd4">4</label>
<input type="radio" id="padd5" name="region">
<label for="padd5">5</label>
</div>
<div id="pr1" class="padd active">
<?php include('./includes/data_table_padd1.php'); ?>
</div>
<div id="pr2" class="padd">
<?php include('./includes/data_table_padd2.php'); ?>
</div>
<div id="pr3" class="padd">
<?php include('./includes/data_table_padd3.php'); ?>
</div>
<div id="pr4" class="padd">
<?php include('./includes/data_table_padd4.php'); ?>
</div>
<div id="pr5" class="padd">
<?php include('./includes/data_table_padd5.php'); ?>
</div>
</div>
<br />
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/transrail_side.inc'); ?>
</div><!-- /l-column -->
</div><!-- /l-row -->
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
