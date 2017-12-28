<?php
include_once('../config.php');
include(ROOT.'global/includes/utils/utils.inc');
include(ROOT.'global/includes/utils/Neic.inc');
$neic      = new NEIC();
$locale = 'ap';
$twip_page = 'analysis';
?>

<!DOCTYPE html>
<html>
<head>
<title>This Week in Petroleum</title>
<!-- No Cache Code  -->
<META HTTP-EQUIV="Expires" CONTENT="0">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php include('./includes/twip_header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<?php
include ('includes/analysis_text.inc') ;
//hsh_sql:
//associated with query name LatestTWIPTags
$bindVariables = array();
$neic->sql = "
select TAGID, TAG
from (
select ID
from (
select ID
from NEIC.ARCHIVES_REPORT_LIST
where PARENTID = :parentid and VERSION = :version
order by RELEASE_DATE desc
)
where ROWNUM <= 1
) LatestTWIP
inner join NEIC.ARCHIVES_REPORT_LU
on LatestTWIP.ID = ARCHIVES_REPORT_LU.ID
inner join NEIC.ARCHIVES_REPORT_TAG
on ARCHIVES_REPORT_LU.TAGID = ARCHIVES_REPORT_TAG.ID
order by Lower(TAG)
";
$bindVariables[":parentid"] = 3887;
$bindVariables[":version"] = "pastissue";
//print $neic->sql;
//print_r($bindVariables);
$LatestTWIPTags = $neic->get($bindVariables);
//print_r($LatestTWIPTags);
//$tmp = array_unique($LatestTWIPTags);
//print_r($tmp);
?>
<p class="tags">Tags:
<?php
$i = 0;
$total = count($LatestTWIPTags);
$tmpArr = array();
foreach($LatestTWIPTags as $k1=>$v1) {
$i++;
if(in_array($v1, $tmpArr)) {
continue;
}
$tmpArr[] = $v1;
?>
<a href="/petroleum/reports.cfm#/T<?php echo $v1['tagid']; ?>"><?php echo $v1['tag']; ?></a>
<?php
if ($i < $total) {
print ", ";
}
}
?>
</p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/analysis_template.html'); ?>
<div class="blue_top">
<p>
<a class="ico_email sidecol_icon_pad" href="/tools/emailupdates/">Sign up for email updates</a>
<a href="includes/week_in_petroleum_rss.xml"><i class="ico rss"></i>This Week in Petroleum RSS feed</a>
</p>
</div>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
<script type="text/javascript">
function changeSelection(new_row, which_table){
$(".l-side-column div #"+which_table+" tbody tr.selected").removeClass("selected");
$(new_row).addClass("selected");
};
$(document).ready(function(){
$(".l-side-column div table.basic_table tbody tr").click(function(){
switch (this.id) {
case "rp_gasoline":
$("#retail_prices img").attr("src","images/gcprrets.gif");
changeSelection(this, "rp");
break;
case "rp_diesel":
$("#retail_prices img").attr("src","images/dlprrets.gif");
changeSelection(this, "rp");
break;
case "rp_heating":
$("#retail_prices img").attr("src","images/diress.gif");
changeSelection(this, "rp");
break;
case "rp_propane":
$("#retail_prices img").attr("src","images/prress.gif");
changeSelection(this, "rp");
break;
case "fp_crude":
$("#futures_prices img").attr("src","images/crprfuts.gif");
changeSelection(this, "fp");
break;
case "fp_gasoline":
$("#futures_prices img").attr("src","images/gcprfutnys.gif");
changeSelection(this, "fp");
break;
case "fp_heating":
$("#futures_prices img").attr("src","images/dhprfutnys.gif");
changeSelection(this, "fp");
break;
case "s_crude":
$("#stocks img").attr("src","images/crstuss.gif");
changeSelection(this, "s");
break;
case "s_gasoline":
$("#stocks img").attr("src","images/gtstuss.gif");
changeSelection(this, "s");
break;
case "s_distillate":
$("#stocks img").attr("src","images/disstuss.gif");
changeSelection(this, "s");
break;
case "s_propane":
$("#stocks img").attr("src","images/prstuss.gif");
changeSelection(this, "s");
break;
}
});
});
</script>
