<?php include_once('../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>Heating Oil and Propane Update - Energy Information Administration</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php  if(!isset($no_titling)) include"../../global/includes/titling.inc"; ?>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script>
$( function() {
$("#tabs").tabs();
} );
</script>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Heating Oil and Propane Update '; ?>
<?php include('./includes/hopu_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<?php //p class="grey_side"><strong><strong>Note:</strong>strong> Last release of the Heating Season.  ?>
<div class="notice">
<p><strong>Note:</strong> <a href="/survey/notice/marketing2017.cfm">Petroleum Marketing Survey Form Changes Proposed for 2017</a>
<!--br>The heating season is over. Data for residential and wholesale prices for heating oil and propane will return in October 2017. -->
</p>
</div>
<p>
Weekly heating oil and propane prices are only collected during the heating season, which extends from October through March.
</p>
<!--
<div id="tabs">
<ul>
<li><a href="#itn-tabs-1"></a></li>
<li><a href="#itn-tabs-2"></a></li>
</ul>
</div>
<div id="itn-tabs-1"></div>
<div id="itn-tabs-2"></div>
-->
<div id="tabs">
<ul>
<li><a href="#tabs-1">Propane</a></li>
<li><a href="#tabs-2">Heating oil</a></li>
</ul>
<div id="tabs-1"><?php include('./includes/propane.inc'); ?></div>
<div id="tabs-2"><?php include('./includes/heating.inc'); ?>                </div>
</div>
<p>
<strong>Release Schedule:</strong></a> The data are published weekly and are updated every Wednesday after 1:00 p.m. (Eastern time). For weeks that include Monday holidays, publication is delayed by one day.
</p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/hopu_side.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
<script type="text/javascript">
function changeSelection(new_row, which_table){
$("#"+which_table+" tbody tr.selected").removeClass("selected");
$(new_row).addClass("selected");
};
//show/hide function
$(document).ready(function() {
$("tr[class^='padd']").toggle();
$('.toggle').click(function(){
var padd=$(this).parent().parent().next('tr').attr('class'); $(this).parent().parent().siblings("."+padd).toggle();
$(this).toggleClass('active');
if($(this).hasClass('active')){
$(this).children('img').attr('src', '/global/images/icons/minus.png');
}
else {
$(this).children('img').attr('src', '/global/images/icons/plus.png');
}
});
$("table.basic_table tbody tr").click(function(){
switch (this.id) {
case "rh_us":
$("#residential_heating img").attr("src","images/horesus.gif");
changeSelection(this, "rh");
break;
case "rh_padd1":
$("#residential_heating img").attr("src","images/horesec.gif");
changeSelection(this, "rh");
break;
case "rh_padd2":
$("#residential_heating img").attr("src","images/horesmid.gif");
changeSelection(this, "rh");
break;
case "wh_us":
$("#wholesale_heating img").attr("src","images/howhsus.gif");
changeSelection(this, "wh");
break;
case "wh_padd1":
$("#wholesale_heating img").attr("src","images/howhsec.gif");
changeSelection(this, "wh");
break;
case "wh_padd2":
$("#wholesale_heating img").attr("src","images/howhsmid.gif");
changeSelection(this, "wh");
break;
case "rp_us":
$("#residential_propane img").attr("src","images/prresus.gif");
changeSelection(this, "rp");
break;
case "rp_padd1":
$("#residential_propane img").attr("src","images/prresec.gif");
changeSelection(this, "rp");
break;
case "rp_padd2":
$("#residential_propane img").attr("src","images/prresmid.gif");
changeSelection(this, "rp");
break;
case "rp_padd3":
$("#residential_propane img").attr("src","images/prresgc.gif");
changeSelection(this, "rp");
break;
case "rp_padd4":
$("#residential_propane img").attr("src","images/prresrm.gif");
changeSelection(this, "rp");
break;
case "wp_us":
$("#wholesale_propane img").attr("src","images/prwhsus.gif");
changeSelection(this, "wp");
break;
case "wp_padd1":
$("#wholesale_propane img").attr("src","images/prwhsec.gif");
changeSelection(this, "wp");
break;
case "wp_padd2":
$("#wholesale_propane img").attr("src","images/prwhsmid.gif");
changeSelection(this, "wp");
break;
case "wp_padd3":
$("#wholesale_propane img").attr("src","images/prwhsgc.gif");
changeSelection(this, "wp");
break;
case "wp_padd4":
$("#wholesale_propane img").attr("src","images/prwhsrm.gif");
changeSelection(this, "wp");
break;
case "ds_stock":
$("#distillate_supply img").attr("src","images/disstkus.gif");
changeSelection(this, "ds");
break;
case "ds_prod":
$("#distillate_supply img").attr("src","images/disprodus.gif");
changeSelection(this, "ds");
break;
case "ds_demand":
$("#distillate_supply img").attr("src","images/disdemus.gif");
changeSelection(this, "ds");
break;
case "ps_stock":
$("#propane_supply img").attr("src","images/prostkus.gif");
changeSelection(this, "ps");
break;
case "ps_prod":
$("#propane_supply img").attr("src","images/proprodus.gif");
changeSelection(this, "ps");
break;
case "ps_demand":
$("#propane_supply img").attr("src","images/prodemus.gif");
changeSelection(this, "ps");
break;
}
});
});
</script>
</html>
