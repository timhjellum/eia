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
  <?php include ('special/disruptions/includes/subnav_hurricane_gc.inc') ; ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mr_temp2">



      <div class="main_col left">
      <?php /* Main Column */ ?>

      <?php /*div class="feature"> <span><h2>EIA is not currently reporting on any hurricanes. Please see the <a href="tropical_outlook.cfm"><em>Current Tropical Outlook</em></a> tab for the lastest from NOAA.</h2></span> 
      </div*/ ?>
      
      <h1>Interactive Map</h1>
      <p><a href="map.cfm"><img src="images/map_thumb.jpg" class="left" /></a> Explore our interactive map! (<em>Some more copy needs to be added here to properly advertise the map. Maybe some bullets about the things people can find in the map.</em>)</p>
      <p><a href="map.cfm">View the map &gt;</a></p>
      <hr />
      <div>
        <h1>September 3, 2011</h1>
        <p>Hurricane XXX has weakened considerably, but remains a threat to parts of the Atlantic coastline in the northeastern United States and Canada. The National Oceanic and Atmospheric Administration (NOAA) reported that, as of 2:00 p.m. EDT, September 3, 2010, Hurricane XXX was centered about 290 miles south-southwest of Nantucket, Massachusetts. The storm had sustained winds of 80 miles per hour (Category 1), and was moving north-northeast at approximately 21 miles per hour. Hurricane Earl passed near Cape Hatteras overnight, causing some flooding, road and ferry closures, and power outages, though no casualties or major property damage have yet been reported.          </p>
        <a class="show">[+] See more</a>
            <div class="more"> 
            The National Weather Service has reduced the Hurricane Warning area to cover only Cape Cod, Nantucket, and Martha's Vineyard in Massachusetts, while a Tropical Storm Warning is in effect for much of the remaining U.S. coastline from Virginia north. The Canadian Weather Service has also issued a Hurricane Watch for parts of Nova Scotia. Watches and warnings will continue to be revised as the storm progresses northward.            
            </div>
          <hr />
          <h1> September 2, 2011 p.m. </h1>
          <p>The National Oceanic and Atmospheric Administration (NOAA) reported that, as of 2:00 p.m. EDT, September 2, 2010, Hurricane XXX was centered about 245 miles south of Cape Hatteras, North Carolina, and about 720 miles south-southwest of Nantucket, Massachusetts. The storm had sustained winds of 125 miles per hour (Category 3), and was moving north-northwest at approximately 18 miles per hour.            </p>
          <a class="show">[+] See more</a>
            <div class="more"> 
         	The U.S. Atlantic coast from North Carolina to Maine remains under threat, with the projected track passing close to Cape Hatteras, North Carolina and Cape Cod, Massachusetts, before making landfall near the border between Maine and New Brunswick, Canada on Saturday, September 4. A National Weather Service Hurricane Warning now covers most of the North Carolina coastline, as well as the Massachusetts coastline south of Boston, including Cape Cod, Nantucket, and Martha's Vineyard. A Hurricane Watch continues to apply to the Virginia, Maryland, and Delaware coastline. The Canadian Weather Service has also issued a Hurricane Watch for parts of Nova Scotia. Watches and warnings will continue to be revised as the storm progresses northward. 
        </div>
          
      </div>

      <?php /*<?php include ('includes/historical_disruptions.inc') ; ?>*/ ?>

     </div>
     
     <div class="side_col right">
          <?php /* Start of Side Column */ ?>
          <?php include ('special/disruptions/includes/side_hurricane.inc') ; ?>
          <?php /* End of Side Column */ ?>
        </div>
      </div>

<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>