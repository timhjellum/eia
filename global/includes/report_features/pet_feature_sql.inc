<?phprequire_once 'global/includes/utils/utils.inc';
require_once 'global/includes/utils/Neic.inc';
$neic      = new NEIC();
//hsh_sql:
//associated with query name featured_pics
$bindVariables = array();
$neic->sql = " Select * from (
select * from NEIC.archives_report_list
where has_feature = :has_feature
and feature_img is not null
order by RELEASE_DATE
)
where rownum <=2 ";
$bindVariables[":has_feature"] = "Y";
//print $neic->sql;
//print_r($bindVariables);
$featured_pics = $neic->get($bindVariables);
//hsh_sql:
//associated with query name featured_nopics
$bindVariables = array();
$neic->sql = "Select * From (
select * from NEIC.archives_report_list
where has_feature = :has_feature
and feature_img is null
order by RELEASE_DATE
)
where rownum <=3 ";
$bindVariables[":has_feature"] = "Y";
//print $neic->sql;
//print_r($bindVariables);
$featured_nopics = $neic->get($bindVariables);
?>
<div class="report_feature">
<?php
if(!empty($featured_pics) && count($featured_pics) == 2) {
foreach($featured_pics as $k1=>$v1) {
?>
<div>
<a href ="<?php echo $v1['link_html']; ?>">
<img src="<?php echo $v1['feature_img']; ?>" width="300" height="140">
<h3>
<?php echo $v1['feature_text']; ?>
</h3>
</a>
</div>
<?php
}
}
if(!empty($featured_nopics) && count($featured_nopics) == 3) {
?>
<div>
<h3 class="fln">Featured Analysis & Projections</h3>
<?php
foreach($featured_nopics as $k1=>$v1) {
?>
<li class="header">
<h2>
<a href="<?php echo $v1['link_html']; ?>">
<?php echo $v1['feature_text']; ?>
</a>
</h2>
</li>
<?php
}
?>
</div>
<?php
}
?>