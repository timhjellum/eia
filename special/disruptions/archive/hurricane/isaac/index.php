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
      <p><a href="map.cfm"><img src="images/map_thumb.jpg" class="left" /></a> Explore our interactive map to see energy infrastructure located in and around the Gulf of Mexico.</p>
      <p><a href="map.cfm">View the map &gt;</a></p>
      <hr />
      <div>
        <?php /*<h1>August 27, 2012</h1>*/ ?>
        <p>The <a href="http://www.nhc.noaa.gov/index.shtml">National Hurricane Center</a> is  posting routine updates on the status of <a href="http://www.nhc.noaa.gov/graphics_at4.shtml?5-daynl#contents">Hurricane Isaac</a>.</p>
        <p>          The Bureau of Safety and  Environmental Enforcement is posting daily information on <a href="http://www.bsee.gov/BSEE-Newsroom/Hurricanes/2012/Current-Season.aspx">shut-in  production</a> of oil and natural gas.</p>
        <p>          Also, the Department of Energy's <a href="http://energy.gov/oe/office-electricity-delivery-and-energy-reliability">Office  of Electricity Delivery and Energy Reliability</a> is posting daily updates on  the disposition of United States energy infrastructure in the <a href="http://www.oe.netl.doe.gov/ead.aspx">Energy Assurance Daily</a> report  and posts information on <a href="http://www.oe.netl.doe.gov/emergency_sit_rpt.aspx">hurricane-related  situation reports</a>. </p>
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