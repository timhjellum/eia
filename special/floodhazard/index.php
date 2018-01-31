<?php $fema = true; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>

<?php include ('global/includes/eia_head_info.inc') ; ?>
<?php include ('global/scripts/maps/includes/mapIncludes.inc') ; ?>
	<?php /*
	<script type="text/javascript" src="/global/scripts/modules/lib/require.js">

	<!-- Start Unique Header -->

	<script type="text/javascript">/* <![CDATA[
		if (window.ColdFusion) ColdFusion.required['name']=true;
		/* ]]> </script>

	<script type="text/javascript">/* <![CDATA[
		if (window.ColdFusion) ColdFusion.required['email']=true;
		/* ]]> </script>
	<!-- End Unique Header -->
	*/ ?>
	<style>
			#profile_map_inner_container {
				height: 650px;
			}
			.carousel_footer {
				width : 100%;
			}
			
		</style>
        
    <link type="text/css" rel="stylesheet" href="/state/css/states.css"/>
         
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body>
  <div id="outerX"><?php /* Outer Wrapper */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
  <?php include ('includes/pagetitle_disruptions.inc') ; ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mr_temp4">

      <div class="main_col left">
      <?php /* Main Column */ ?>
      
        <div > <span>
        <p>Flood hazard information from FEMA has been combined with EIA&#39;s energy infrastructure layers as a tool to help state, county, city, and private sector planners assess which key energy infrastructure assets are vulnerable to rising sea levels, storm surges, and flash flooding.   Note that flood hazard layers must be zoomed-in to street level before they become visible. For a full set of energy infrastructure layers refer to the <a href="/state/maps.cfm">U.S. Energy Mapping System</a>. </p></span> 
      </div>
			<h1>Energy Infrastructure with FEMA National Flood Hazard</h1>
	  
		<div class="blue_top" id="profile_map_container" style="border-bottom:none; border-left:none; border-right:none;">
			<div id="profile_map_inner_container" class="claro">

			<?php /* INSERT MAP HERE */ ?>
			<?php include ('global/scripts/maps/includes/map.inc') ; ?>

			</div>
			<div class="carousel_footer">
                <div id="layerinfo"><a href="/maps/layer_info-m.cfm"><img src="/state/img/layers_info.png" id="layerinfo_img"> Layer information and map data</a></div>
				<!-- &nbsp;&nbsp;<a href="/maps/layer_info-m.cfm">Map details and data</a> -->
				<span style="float:right;">Send map questions, comments and<br />suggestions to: <a href="mailto:mapping@eia.gov">mapping@eia.gov</a></span><br /><br />
			</div>
            

              <h2 style="padding-bottom:15px; padding-top:15px;">Quick Guide </h2>
              <span style="width: 320px;"><p style="padding-left:5px;">Areas where flood hazard information is available are shown in red. </p>
              <img src="/special/floodhazard/img/FloodHazardsZones_UsageGuide_US.jpg" style="border:none; padding-top:0px;">
              </span>
              <span style="width: 550px;"><p style="padding-left:12px;">Flood hazard zones and energy infrastructure<br />
               (note: to see all map layers zoom-in to street level). </p>
              <img src="/special/floodhazard/img/FloodHazardsZones_UsageGuide_Street.jpg" style="border:none; padding-bottom:0px; padding-top:0px;">
              <p style="padding-left:15px;">Click on a map symbol or designated area for additional details. </p>
                <br /><br />
              </span>
      
	 	</div>
	 </div>
<?php /*
 		<div class="side_col right">
           Start of Side Column 
          <?php include ('includes/side_disruptions.inc') ; ?>
           End of Side Column 
        </div>*/ ?>
      </div>
<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>