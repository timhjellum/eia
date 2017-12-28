<?phprequire_once 'global/includes/utils/utils.inc';
require_once 'global/includes/utils/Neic.inc';
$neic      = new NEIC();
$subjectids = isset($subjectids) ? $subjectids : "";
//hsh_sql:
//associated with query name featured_pics
$bindVariables = array();
$neic->sql = "
Select * from (
Select ARCHIVES_REPORT_FEATURES.title, ARCHIVES_REPORT_FEATURES.image,ARCHIVES_REPORT_FEATURES.linkurl, archives_report_list.release_date,
archives_report_list.link_html
From NEIC.archives_report_list INNER JOIN NEIC.ARCHIVES_REPORT_FEATURES
ON archives_report_list.id = ARCHIVES_REPORT_FEATURES.refid
where ARCHIVES_REPORT_FEATURES.active = :active
and ARCHIVES_REPORT_FEATURES.image is not null
";
if($subjectids == 180) {
$neic->sql .= "  and ARCHIVES_REPORT_FEATURES.page_pet = :page_pet ";
$bindVariables['page_pet'] = 1;
}
$neic->sql .= "
order by RELEASE_DATE
)
where rownum <= :num_rows
";
$bindVariables["num_rows"] = "2";
$bindVariables["active"] = "Y";
$featured_pics = $neic->get($bindVariables);
//hsh_sql:
//associated with query name featured_nopics
$bindVariables = array();
$neic->sql = "
Select * from (
Select ARCHIVES_REPORT_FEATURES.title, ARCHIVES_REPORT_FEATURES.image,ARCHIVES_REPORT_FEATURES.linkurl, archives_report_list.release_date,
archives_report_list.link_html
From NEIC.archives_report_list INNER JOIN NEIC.ARCHIVES_REPORT_FEATURES
ON archives_report_list.id = ARCHIVES_REPORT_FEATURES.refid
where ARCHIVES_REPORT_FEATURES.active = :active
and ARCHIVES_REPORT_FEATURES.image is null
";
if($subjectids == 180) {
$neic->sql .= "  and ARCHIVES_REPORT_FEATURES.page_pet = :page_pet ";
$bindVariables['page_pet'] = 1;
}
$neic->sql .= "
order by RELEASE_DATE
)
where rownum <= :num_rows
";
$bindVariables["num_rows"] = "3";
$bindVariables["active"] = "Y";
$featured_nopics = $neic->get($bindVariables);
?>
<div class="report_feature">
<h2 class="fln">Featured Analysis & Projections</h2>
<?php
if(!empty($featured_pics) && count($featured_pics) == 2) {
foreach($featured_pics as $k1=>$v1) {
?>
<div>
<a href ="<?php echo $v1['link_html']; ?>">
<img src="<?php echo $v1['image']; ?>">
<h3>
<?php echo $v1['title']; ?>
</h3>
</a>
</div>
<?php
}
}
if(!empty($featured_nopics) && count($featured_nopics) == 3) {
?>
<div class="title-only">
<?php
foreach($featured_nopics as $k1=>$v1) {
?>
<a href="<?php echo $v1['link_html']; ?>">
<h3>
<?php echo $v1['title']; ?>
</h3>
</a>
<?php
}
?>
</div>
<?php
}
?>