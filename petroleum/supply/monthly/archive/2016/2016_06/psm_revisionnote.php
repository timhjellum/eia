<?php $locale = 'overview'; ?>
<?php include_once('../../../../../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>

<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>

<?php /* Outer Wrapper */ ?>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<section class="content">
    <div class="l-outer-wrapper">
      <div class="l-inner-wrapper">
        <div class="content">
          <div class="l-row header">
	          <div class="l-full-width-column">
<?php include(ROOT.'global/petroleum/includes/subnav_petroleum.inc'); ?>
<?php /* Page/Body Content */ ?>

	  
            </div>
          </div>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>





     
<h3>Petroleum Supply Monthly Re-release of data for April 2016</h3>

<p style="font-size:11px;margin:0px;padding:4px 0px;color:#7d7d7d;">
<strong>Released: July 1, 2016</strong></p>


<dl class="survey"> 
 
<p>
<a href="/petroleum/supply/monthly/">Petroleum Supply Monthly (PSM)</a> data for April 2016 released by EIA on Thursday, June 30, 2016 were missing data for stock changes, product supplied, and certain balancing quantities reported as adjustments in petroleum and biofuel supply and disposition tables.  In addition, a table of oxygenate production in Petroleum Navigator was not updated with data for April 2016.  PSM data released today (Friday, July 1, 2016) include the data that were missing from the release on June 30 and the table of oxygenate production was updated to include data for April 2016.
</p>


</dl>


        </div>
<?php /* END Left Column */ ?>

      </div>
<?php /*/ Page/Body Content */ ?>
      </div><?php /* end .content */ ?>
    </div><?php /* end .l-inner-wrapper */ ?>
  </div><?php /* end .l-outer-wrapper */ ?>
</section><?php /* end section */ ?>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>

<?php /*/ Outer Wrapper */ ?>

</body>
</html>