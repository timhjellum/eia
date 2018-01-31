<?php /* NEW Sub NAv */ ?>
<?php
require_once 'global/includes/utils/utils.inc';
require_once 'global/includes/utils/Neic.inc';
$neic      = new NEIC();

$sect = 'Coal';
?>
<?php
//hsh_sql:
//associated with query name Utags2
$bindVariables = array();
$neic->sql = "  SELECT distinct archives_report_lu.tagid, archives_report_lu.sid, archives_report_subject.subject,
  archives_report_tag.tag,
    count(ARCHIVES_REPORT_LIST.HAS_DATA) as D, count(ARCHIVES_REPORT_LIST.HAS_FORECAST) as F,
    count(ARCHIVES_REPORT_LIST.HAS_ANALYSIS) as A
          FROM neic.archives_report_lu, neic.archives_report_subject, neic.archives_report_tag, NEIC.ARCHIVES_REPORT_LIST
          WHERE ( archives_report_subject.id = archives_report_lu.sid )
            AND ( archives_report_tag.id = archives_report_lu.tagid )
            AND ( archives_report_lu.id = archives_report_list.id)
            AND ( archives_report_subject.subject = :subject )
            group by archives_report_lu.tagid, archives_report_lu.sid, archives_report_subject.subject, archives_report_tag.tag
            order by tag ";
$bindVariables[":subject"] = $sect;
//print $neic->sql;
//print_r($bindVariables);
$Utags2 = $neic->get($bindVariables);
?>
<script>
	$(function(){
		$('.dropdown').dd();
	});

$(document).ready(function(){
    $("div.dat_block a").click(function(){
		 $("table.contable").children("tbody").hide();
		$("table.contable th").removeClass("active");
		var sID = this.href.substring(this.href.indexOf("#") + 1);
		$("[name$='" + sID + "']").click();
  });
});	
</script>
<?php /*cfinclude template="/global/includes/sub_menu_fix.cfm"*/ ?>
	<?php $L2Title = "Gulf of Mexico Fact Sheet"; ?>
    <div class="title bg_coal"><?php /* Page/Section Title */ ?>
      <h1><?php echo "$L2Title"?></h1>
    </div><?php /*/ Page/Section Title */ ?>
    
    <div class="subnav"><?php /* Page/Sub Nav */ ?>
    <span class="right"><a href="<?php echo "$glossary_path"?>?id=coal">Glossary &rsaquo;</a> <a href="<?php echo "$faqs_path"?>#coal">FAQS &rsaquo;</a></span>
       <ul>
        <li <?php if ( $locale == 'overview') {?>class="active"<?php  } // end if ?>><a href="/special/new_gom/">Overview</a></li>
        <li class="dropdown <?php if ( $locale == 'data') {?>active<?php  } // end if ?>"><a href="/special/new_gom/data.cfm">Energy Data</a></li>
        <?php /* Data Menu Drop Down */ ?><?php /*/ Data Menu Drop Down */ ?>
        <li class="dropdown <?php if ( $locale == 'ap') {?>active<?php  } // end if ?>"><a href="/coal/reports.cfm">Map</a></li>
        <?php /* Reports Menu Drop Down */ ?><?php /*/ Data Menu Drop Down */ ?>
        <li class="dropdown <?php if ( $locale == 'ap') {?>active<?php  } // end if ?>"><a href="/coal/reports.cfm">Hurricane Season Outlook</a></li>
        <?php /* Reports Menu Drop Down */ ?><?php /*/ Data Menu Drop Down */ ?>
        <li class="dropdown <?php if ( $locale == 'ap') {?>active<?php  } // end if ?>"><a href="/coal/reports.cfm">Current Tropical Outlook</a></li>
        <?php /* Reports Menu Drop Down */ ?><?php /*/ Data Menu Drop Down */ ?>
      </ul>
    </div><?php /*/ Page/Sub Nav */ ?>