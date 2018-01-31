<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php include ('global/includes/eia_head_info.inc') ; ?>

<!-- Start Unique Header -->

<script type="text/javascript">/* <![CDATA[ */
	if (window.ColdFusion) ColdFusion.required['name']=true;
/* ]]> */</script>

<script type="text/javascript">/* <![CDATA[ */
	if (window.ColdFusion) ColdFusion.required['email']=true;
/* ]]> */</script>
<!-- End Unique Header -->

<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body>
  <div id="outerX"><?php /* Outer Wrapper */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
  <?php include ('includes/pagetitle_disruptions.inc') ; ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mr_temp2">



      <div class="main_col left">
      <?php /* Main Column */ ?>
      
        <?php /*div class="feature"> <span>
        <h2>EIA is not currently reporting on any hurricanes. Please see the <a href="tropical_outlook.cfm"><em>Current NOAA Summary</em></a>  for the lastest from NOAA.</h2></span> 
      </div*/ ?>

   
		<?php include ('includes/historical_disruptions.inc') ; ?>
		<?php /*Also see   the <a href="/special/new_gom/">Gulf of Mexico Fact Sheet </a*/ ?>     
	 </div>
     

 		<div class="side_col right">
          <?php /* Start of Side Column */ ?>
          <?php include ('includes/side_disruptions.inc') ; ?>
          <?php /* End of Side Column */ ?>
        </div>
      </div>
      
      

<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>