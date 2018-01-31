<?php $locale = 'overview'; ?>
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
  <?php include ('includes/subnav_hurricane.inc') ; ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mr_temp2">



      <div class="main_col left">
      <?php /* Main Column */ ?>

      <?php /*div class="feature"> <span><h2>EIA is not currently reporting on any hurricanes. Please see the <a href="tropical_outlook.cfm"><em>Current Tropical Outlook</em></a> tab for the lastest from NOAA.</h2></span> 
      </div*/ ?>
      
      <h1>Interactive Map</h1>
      <p><a href="map.cfm"><img src="images/map_thumb_infrastructure.jpg" class="left" /></a> Explore our interactive map to see energy infrastructure located in and around the east coast.</p>
      <p><a href="map.cfm">View the map &gt;</a></p>
      <hr />
      <div>
        <?php /*<h1>August 27, 2012</h1>*/ ?>
      <p>The interactive map of energy  Infrastructure shows the track of Hurricane Sandy as of the last report by the  National Hurricane Center (NHC) on&nbsp;Monday, October 29. </p>
      <p>The Department of  Energy's&nbsp;<a href="http://energy.gov/oe/office-electricity-delivery-and-energy-reliability" target="_blank">Office of Electricity Delivery and Energy Reliability</a>&nbsp;is  posting updated&nbsp;information on the disposition of U.S. energy  infrastructure and electricity outages in the&nbsp;<a href="http://www.oe.netl.doe.gov/ead.aspx" target="_blank">Energy  Assurance Daily</a>&nbsp;report and&nbsp;<a href="http://www.oe.netl.doe.gov/emergency_sit_rpt.aspx" target="_blank">hurricane-related  situation reports</a>&nbsp;in response to Hurricane Sandy.&nbsp; </p>
      <p>The&nbsp;<a href="http://www.nhc.noaa.gov/index.shtml" target="_blank">National  Hurricane Center</a>&nbsp;has posted its final update on the  status of&nbsp;<a href="http://www.nhc.noaa.gov/#SANDY" target="_blank">Hurricane  Sandy</a>&nbsp;however the National Weather Service continues to post updates  on&nbsp;<a href="http://www.hpc.ncep.noaa.gov/nationalfloodoutlook/index.html" target="_blank">river and coastal  flooding</a>&nbsp;as well as&nbsp;<a href="http://www.hpc.ncep.noaa.gov/pwpf/wwd_accum_probs.php?fpd=24&amp;ptype=snow" target="_blank">snowfall</a>&nbsp;forecasts and&nbsp;<a href="http://www.hpc.ncep.noaa.gov/wwd/day1_psnow_gt_04.gif" target="_blank">accumulation</a>,&nbsp;<a href="http://www.hpc.ncep.noaa.gov/qpf/zoom/Rainfall_Day_2.gif" target="_blank">rainfall totals</a>, and the&nbsp;<a href="http://www.hpc.ncep.noaa.gov/wwd/lowtrack_circles.gif" target="_blank">surface low track of the storm system</a>.&nbsp; </p>
      </div>

      <?php /*<?php include ('includes/historical_disruptions.inc') ; ?>*/ ?>

     </div>
     
     <div class="side_col right">
          <?php /* Start of Side Column */ ?>
          <?php include ('includes/side_hurricane.inc') ; ?>
          <?php /* End of Side Column */ ?>
        </div>
      </div>

<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>