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





     
<h3>Revision Notice - Petroleum Supply Monthly Data for September 2015</h3>

<p style="font-size:11px;margin:0px;padding:4px 0px;color:#7d7d7d;">
<strong>Released: December 7, 2015</strong></p>


<dl class="survey"> 
 
<p>
Alaskan crude oil production data for September 2015 have been revised in this re-release of the <a href="/petroleum/supply/monthly/">Petroleum Supply Monthly (PSM)</a>.  Alaskan crude oil production in the PSM released on November 30, 2015 was 409 thousand barrels per day.  Revised Alaskan crude oil production is 472 thousand barrels per day.  There were also corrections to biodiesel production and inventory data in Petroleum Administration for Defense Districts (PADDs) 4 and 5.  Biodiesel production and stocks were unchanged at the U.S. level.
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