<?phprequire_once 'global/includes/utils/utils.inc';
require_once 'global/includes/utils/Neic.inc';
$neic      = new NEIC();
?>
<style type="text/css">
div.slick-slider div.one-container div.one-slide div.one-contentarea p::before, p.tags::before {
content: "tags: ";
color: #333;
}
/* For the more details page */
ul.analysis-projections li span > h3+em::after {
content: " | tags: ";
padding: 0 0 0 2px;
font-style: normal;
}
a.capsule::after {
content: ", ";
color: #333333;
}
a.capsule:last-child::after {
content: "";
}
/* This is for the Recent Analyis & Projections part (to override EIA_global.css) */
p.tags {
margin-top:0;
}
</style>
<?php
switch($l2page){
case 'page_nat':
$CorrespondingTag = 202;
break;
case 'page_pet':
$CorrespondingTag = 122;
break;
case 'page_ele':
$CorrespondingTag = 194;
break;
case 'page_con':
$CorrespondingTag = 72;
break;
case 'page_tot':
$CorrespondingTag = 120;
break;
case 'page_nuc':
$CorrespondingTag = 204;
break;
case 'page_ren':
$CorrespondingTag = 1099;
break;
case 'page_coa':
$CorrespondingTag = 192;
break;
case 'page_ana':
$CorrespondingTag = 186;
break;
case 'page_fin':
$CorrespondingTag = 235;
break;
case 'page_env':
$CorrespondingTag = 76;
break;
}
//hsh_sql:
//associated with query name cntry
$bindVariables = array();
$neic->sql = "  select
it.id,
it.bsrec,
it.active,
it.imgurl,
it.active_dte,
ar_list.title,
ar_list.LINK_HTML,
it.TAGS,
it.LINKTITLE,
it.LINKURL,
listagg(ar_lu.tagid, ',') within group (order by ar_tag.tag asc) as reporttags,
listagg(ar_tag.tag, ',') within group (order by ar_tag.tag asc) as reporttagnames
from
NEIC.ISSUESTRENDS it
left join
NEIC.ARCHIVES_REPORT_LIST ar_list
on  it.REFID = ar_list.ID
left join
(select distinct tagid, id from NEIC.ARCHIVES_REPORT_LU) ar_lu
on it.REFID = ar_lu.ID
left join
neic.TAGS ar_tag
on ar_lu.tagid = ar_tag.id
WHERE
it.".$l2page." = 1
and NEIC.ar_tag.ID <> :CorrespondingTag
group by
it.id,
it.bsrec,
it.active,
it.imgurl,
it.active_dte,
ar_list.title,
ar_list.LINK_HTML,
it.TAGS,
it.LINKTITLE,
it.LINKURL
order by to_date(to_char(it.active_dte, 'DD-MON-YY')) desc, it.id desc ";
$bindVariables[":CorrespondingTag"] = $CorrespondingTag;
//hsh_sql:
//storing this sql and bindVariables - to be used in other in-line queries > i.e. file:it_archive_inc.inc
$sqlStrored = array();
$sqlStrored['sql'] = $neic->sql;
$sqlStrored['bindVariables'] = $bindVariables;
//print $neic->sql;
//print_r($bindVariables);
$IssuesTrendsQuery = $neic->get($bindVariables);