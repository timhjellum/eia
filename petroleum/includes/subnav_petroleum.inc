<?php /* Section-specific variables */ ?>
<?php $l2id = 0; ?>
<?php $sectionname = "Petroleum & Other Liquids"; ?>

<script>
<?php /* Fire when jQuery is ready */ ?>
$(document).ready(function(){
    $('.dropdown').dd();
    $("div.dat_block a").click(function(){
		 $("table.contable").children("tbody").hide();
		$("table.contable th").removeClass("active");
		var sID = this.href.substring(this.href.indexOf("#") + 1);
		$("[name$='" + sID + "']").click();
  });
});	
</script>
<?php /*cfinclude template="/global/includes/sub_menu_fix.cfm"*/ ?>
<?php /* Page/Section Title */ ?>
<div class="title bg_petroleum">
  <h1><?php echo "$sectionname"?></h1>
</div>

<div class="subnav"><?php /* Page/Sub Nav */ ?>
  <span class="right"><a href="<?php echo "$glossary_path"?>?id=petroleum">Glossary &rsaquo;</a> <a href="<?php echo "$faqs_path"?>#crudeoil">FAQS &rsaquo;</a></span>
  <ul>
    <li <?php if ( $locale == 'overview') {?>class="active"<?php  } // end if ?>><a href="/petroleum/">Overview</a></li>
    <li class="dropdown <?php if ( $locale == 'data') {?>active<?php  } // end if ?>"><a href="/petroleum/data.php">Data</a></li>
    <?php /* Data Menu Drop Down */ ?>
    <div class="dat_block dat_links">
        <ul>
          <li><a href="/petroleum/data.php#summary">Summary</a></li>
          <li><a href="/petroleum/data.php#prices">Prices</a></li>
          <li><a href="/petroleum/data.php#crude">Crude reserves and production</a></li>
          <li><a href="/petroleum/data.php#refining">Refining and processing</a></li>
          <li><a href="/petroleum/data.php#imports">Imports/exports & movements</a></li>
          <li><a href="/petroleum/data.php#stocks" target="_parent">Stocks</a></li>
          <li><a href="/petroleum/data.php#consumption">Consumption/sales</a></li>
          <li><a href="/petroleum/data.php">All petroleum & other liquids data reports</a></li>
        </ul>
    </div>
    <?php /*/ Data Menu Drop Down */ ?>

    <li class="dropdown <?php if ( $locale == 'ap') {?>active<?php  } // end if ?>"><a href="/petroleum/reports.php">Analysis & Projections</a></li>

    <?php /* Reports Menu Drop Down */ ?>
    <div id="analysis-projections" class="dat_block dat_links" style="width:600px;">

      <?php /* Left side */ ?>
      <div style="float:left; width:400px;">
        <h4 style="margin: 12px 20px 6px 20px;border-bottom:1px solid #CCC;padding-bottom:2px;">Major Topics</h4>
        <ul class="split_2columns" style="margin-bottom:16px;">
          <?php /* Analysis & Projections Menu Include */ ?>
          <?php include ('global/includes/menu_ap.inc') ; ?>
        </ul>
      </div>

      <?php /* Right side */ ?>
      <div class="listContainer2" style="width:200px; float:right">
        <h4 style="margin: 12px 20px 6px 20px; border-bottom:1px solid #ccc; padding-bottom:2px;">Browse by Tag</h4>
        <ul>
          <li><a href="/petroleum/browsebytag.php">Alphabetical</a></li>
          <li><a href="/petroleum/browsebytag.php?frequency">Frequency</a></li>
          <li><a href="/petroleum/browsebytag.php?tagcloud">Tag Cloud</a></li>
        </ul>
      </div>
    </div>
    <?php /*/ Data Menu Drop Down */ ?>
  </ul>
</div><?php /*/ Page/Sub Nav */ ?>
