<?php /*
File: Universal L2 Issue and Trends Archive Include.
Desc: this file uses the variable (#l2page#) set on the <root>/<L2 Page>/issuestrends/index.cfm page to render the correct Issues and Trends Archive page
Created: 2014-07-15
Authors: christian.stauffer@eia.gov & steven.waters@eia.gov
==
To do: N/A
*/ ?>
<?php
require_once 'global/includes/utils/utils.inc';
require_once 'global/includes/utils/Neic.inc';
$neic = new NEIC();
$locale = 'issuestrends'; ?>
<?php /*choose which subnav include to insert based off of the #l2page# var set in the index.cfm page this is included on. */ ?>
<?php
switch($l2page) {
case 'page_pet':
$subnav = 'petroleum/includes/subnav_petroleum.inc';
break;
case 'page_nat':
$subnav = 'naturalgas/includes/subnav_naturalgas.inc';
break;
case 'page_coa':
$subnav = 'coal/includes/subnav_coal.inc';
break;
case 'page_ele':
$subnav = 'electricity/includes/subnav_electricity.inc';
break;
case 'page_con':
$subnav = 'consumption/includes/subnav_consumption.inc';
break;
case 'page_ren':
$subnav = 'renewable/includes/subnav_renewable.inc';
break;
case 'page_nuc':
$subnav = 'nuclear/includes/subnav_nuclear.inc';
break;
case 'page_tot':
$subnav = 'totalenergy/includes/subnav_allsources.inc';
break;
case 'page_ana':
$subnav = 'analysis/includes/subnav_analysis.inc';
break;
case 'page_fin':
$subnav = 'finance/includes/subnav_finance.inc';
break;
case 'page_env':
$subnav = 'environment/includes/subnav_environment.inc';
break;
default:
header('error_subnav.inc');
break;
}
?>
<!doctype html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<?php
if(isset($pageTitle) && $pageTitle) {
print "<title>" . $pageTitle . "</title>"; print PHP_EOL;
$pageTitle = '';
}
?>
<?php include ('global/includes/eia_head_info.inc') ; ?>
<?php
/* What in the world is this? It's causing errors. -SNW
<link rel="stylesheet" type="text/css" href="../css/gallery.prefixed.css" />
<link rel="stylesheet" type="text/css" href="../css/gallery_fixes.css" />
<link rel="stylesheet" type="text/css" href="../css/styles_mv.css" />
*/
?>
<style>
.archive img {
width: 100px;
border: 1px solid ##ddd;
}
.item { width: 270px; background-color:#e7e7e7; margin:0 1px 10px 0; padding:10px }
.item:hover { width: 270px; background-color:#dffac4; margin:0 1px 10px 0; padding:10px }
.item img {border: 1px solid #CCC;border-top: 3px solid #5e9c30;}
.item.w2 { width: 50%; }
.eqcol_temp .main .item p.tags { font-size:11px; margin:0 0 5px 0; }
.arcItem:hover {background-color:#dffac4;padding:8px;}
.arcItem td { padding-bottom:20px; }
</style>
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?>
</head>
<?php /* Run the queries to get all possible tags, and the Issues & Trends */ ?>
<?php include ('it_universal.inc') ; ?>
<body>
<div id="outerX">
<?php /* Outer Wrapper */ ?>css_rehab_eia-header.inc
<?php include ('global/includes/eia_header.inc') ; ?>
<?php include ($subnav) ; ?>
<script src="/global/scripts/jquery/masonry.pkgd.min.js">
</script>
<?php /* Page/Body Content */ ?>
<div class="pagecontent eqcol_temp">
<?php /* Main */ ?>
<div class="main">
<?php /* Subquery to get only the Issues/Trends that should be displayed in the "Current Issues & Trends" section (if any) */ ?>
<?php //include('act_database_connect.php'); ?>
<?php
//hsh_sql:
//associated with query name cntry
$bindVariables = array();
if(!empty($sqlStrored)) {
$bindVariables = $sqlStrored['bindVariables'];
$neic->sql = " select *
from (" . $sqlStrored['sql'] . ")
where Upper(ACTIVE) = :active_y or Upper(ACTIVE) = :active_c ";
$bindVariables[":active_y"] = 'Y';
$bindVariables[":active_c"] = 'C';
//print $neic->sql;
//print_r($bindVariables);
$CurrentITs = $neic->get($bindVariables);
}
?>
<?php /* Only display this section if there is at least one current Issue/Trend */ ?>
<?php if (!empty($CurrentITs)) {?>
<?php /* dev
Records=<?php echo "$CurrentITs.RecordCount"?>
<br>
<cfdump var=#CurrentITs#>
*/ ?>
<h1>Current Issues & Trends</h1>
<div id="container">
<?php /* Iterate through all the CURRENT Issues & Trends */ ?>
<?php for($j=0; $j<count($CurrentITs); $j++) {
?>
<?php /* If this Issue & Trend is linked to a Bookshelf report */ ?>
<?php if ($CurrentITs['bsrec'] == 1) {?>
<?php /* Use the concatenated list of tags associated with this report */ ?>
<?php $thetags = $CurrentITs[$j]['reporttags']; ?>
<?php /* Use the report fields from the table ARCHIVES_REPORT_LIST */ ?>
<?php $thetitle_tmp = $CurrentITs[$j]['title']; ?>
<?php $thetitle = $CurrentITs[$j]['title']; ?>
<?php $thelink = $CurrentITs[$j]['link_html']; ?>
<?php /* Otherwise, this is a custom Issue & Trend */ ?>
<?php  } else { ?>
<?php /* Use the tags saved with this custom Issue/Trend */ ?>
<?php $thetags = $CurrentITs[$j]['reporttags']; ?>
<?php /* Use the custom issue/trend fields from the table ISSUESTRENDS */ ?>
<?php $thetitle_tmp = $CurrentITs[$j]['title']; ?>
<?php $thetitle = $CurrentITs[$j]['linktitle']; ?>
<?php $thelink = $CurrentITs[$j]['link_html']; ?>
<?php  } // end if ?>
<?php $thetagnames = $CurrentITs[$j]['reporttagnames']; ?>
<?php $imgurl = $CurrentITs[$j]['imgurl']; ?>
<?php $id = $CurrentITs[$j]['id']; ?>
<?php $active_dte = date('n/j/Y', strtotime($CurrentITs[$j]['active_dte']) ); ?>
<?php /* Now using ACTIVE instead of ACTIVE_DTE
If this report is dated within the past 60 days
<?php if ( $ACTIVE_DTE > Now()$- - ) {?>
*/ ?>
<div class="item">
<a href="<?php echo "$thelink"?>" title="<?php echo "$thetitle"?>">
<img src="<?php echo "$imgurl"?>" height="140" width="270">
</a>
<br>
<p style="font-size:14px; font-weight: bold; line-height:16px">
<a href="<?php echo "$thelink"?>">
<?php echo "$thetitle_tmp"?>
</a>
<?php /* THIS IS FOR DEV/DEMO PURPOSES ONLY:
<?php if ( $BSREC == 1) {?>
(Bookshelf)
<?php  } else { ?>
(Custom)
<?php  } // end if ?>
*/ ?>
<?php /* If this is the DEV or TEST server */ ?>
<?php if (strchr($_SERVER['HTTP_HOST'], 'wwwdev') || strchr($_SERVER['HTTP_HOST'], 'wwwtest')) { ?>
<span style="font-size:10px;">- <a href="/global/admin/it_edit.cfm?id=<?php echo "$id"?>">Edit</a>
</span>
<?php  } // end if ?>
</p>
<p class="tags">
<?php /* Get all the tag details (sorted by number of reports), then display the tags */ ?>
<?php include ('it_displaytags.inc') ; ?>
</p>
<?php /* Display the issue/trend date */ ?>
<span style="float:right;margin-bottom:-10px; background-color:#0196da; padding:3px 6px 3px 6px; color:#FFF;">
<?php echo "$active_dte"?>
</span>
</div>
<?php /*div class="item">...</div>
<div class="item">...</div>
<div class="item">...</div>
<div class="item">...</div>
<div class="item">...</div>
<div class="item">...</div>
<div class="item">...</div>
<div class="item">...ACTIVE_DTE</div*/ ?>
<?php /* Now using ACTIVE instead of ACTIVE_DTE
<?php  } // end if ?>
*/ ?>
<?php } ?>
</div>
<br>
<?php  } // end if ?>
<?php /* END of Current Issues & Trends section */ ?>
<?php /* Subquery to get only the Issues/Trends that should be displayed in the "Past Issues & Trends" section (if any) */ ?>
<?php
//hsh_sql:
//associated with query name cntry
$bindVariables = array();
if(!empty($sqlStrored)) {
$bindVariables = $sqlStrored['bindVariables'];
$neic->sql = " select *
from (" . $sqlStrored['sql'] . ")
where Upper(ACTIVE) = :active_p ";
$bindVariables[":active_p"] = 'P';
//print $neic->sql;
//print_r($bindVariables);
$PastITs = $neic->get($bindVariables);
//print_r($PastITs);
//exit;
}
?>
<?php /* Only display this section if there is at least one past Issue/Trend */ ?>
<?php if (!empty($PastITs)) {?>
<h2>Past Issues & Trends</h2>
<table width="100%">
<?php /* Iterate through all the PAST Issues & Trends */ ?>
<?php for($j=0; $j<count($PastITs); $j++) { ?>
<?php /* Now using ACTIVE instead of ACTIVE_DTE
If this report is older than 60 days
<?php if ( $ACTIVE_DTE ACTIVE_DTE Now()$- - ) {?>
*/ ?>
<tr class="arcItem">
<td>
<?php /* If this Issue & Trend is linked to a Bookshelf report */ ?>
<?php if ( $PastITs[$j]['bsrec'] == 1) {?>
<?php /* Use the concatenated list of tags associated with this report */ ?>
<?php $thetags = $PastITs[$j]['reporttags']; ?>
<?php /* Use the report fields from the table ARCHIVES_REPORT_LIST */ ?>
<?php $thetitle = $PastITs[$j]['title']; ?>
<?php $thelink = $PastITs[$j]['link_html']; ?>
<?php /* Otherwise, this is a custom Issue & Trend */ ?>
<?php  } else { ?>
<?php /* Use the tags saved with this custom Issue/Trend */ ?>
<?php $thetags = $PastITs[$j]['reporttags']; ?>
<?php /* Use the custom issue/trend fields from the table ISSUESTRENDS */ ?>
<?php $thetitle = $PastITs[$j]['title']; ?>
<?php $thelink = $PastITs[$j]['link_html']; ?>
<?php  } // end if ?>
<?php $thetagnames = $PastITs[$j]['reporttagnames']; ?>
<?php $imgurl = $PastITs[$j]['imgurl']; ?>
<?php $id = $PastITs[$j]['id']; ?>
<?php $active_dte = date('F j, Y', strtotime($PastITs[$j]['active_dte']) ); ?>
<strong>
<a href="<?php echo "$thelink"?>">
<?php echo "$thetitle"?>
</a>
</strong>
<?php /* THIS IS FOR DEV/DEMO PURPOSES ONLY:
<?php if ( $BSREC == 1) {?>
(Bookshelf)
<?php  } else { ?>
(Custom)
<?php  } // end if ?>
*/ ?>
<?php /* If this is the DEV or TEST server */ ?>
<?php if (strchr($_SERVER['HTTP_HOST'], 'wwwdev') || strchr($_SERVER['HTTP_HOST'], 'wwwtest')) { ?>
<span style="font-size:10px;">- <a href="/global/admin/it_edit.cfm?id=<?php echo "$id"?>">Edit</a>
</span>
<?php  } // end if ?>
<span style="float:right;">
<?php echo "$active_dte"?>
</span>
<br>
<?php /* previous mask: m/d/yyyy */ ?>
<p class="tags">
<?php /* Get all the tag details (sorted by number of reports), then display the tags */ ?>
<?php include ('it_displaytags.inc') ; ?>
</p>
</td>
</tr>
<?php /* Now using ACTIVE instead of ACTIVE_DTE
<?php  } // end if ?>
*/ ?>
<?php } ?>
</table>
<?php  } // end if ?>
<?php /* END of Past Issues & Trends section */ ?>
</div>
<?php /* END of <div class="main"> */ ?>
<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/css_rehab_eia-footer.inc') ; ?>
</div>
<?php /*/ Outer Wrapper */ ?>
</body>
<?php /* No longer used
<script type="text/javascript" src="/global/scripts/qtip/jquery.qtip-1.0.min.js">
</script>
*/ ?>
<script>
$(document).ready(function() {
var $container = $('#container');
// initialize
$container.masonry({
columnWidth: 100,
itemSelector: '.item'
});
var msnry = $container.data('masonry');
//////////////////////////////////////
$('.feature-item p a').contents().filter(function(){
return this.textContent === 'Issues & Trends';
}).replaceWith('Natural Gas');
<?php /* No longer used
$('.feature-item p a[alt]').qtip({
style: {
background: '#ffffff',
color: '#189bd7',
border: {
width: 1,
color: '#5e9c30',
radius: 4
},
name: 'light', tip: true
},
position: {
corner: {
target: 'topMiddle',
tooltip: 'bottomMiddle'
}
},
hide: {
when: 'mouseout',
fixed: true,
delay: 400
}
})
*/ ?>
}); // END of jQuery ready
</script>
</html>
