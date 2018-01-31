<?php $shaleplays = true; ?>
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
  <?php include ('includes/pagetitle.inc') ; ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mr_temp4">

      <div class="main_col left">
      <?php /* Main Column */ ?>
      
        <div > <span>
        <p>
        The map below shows boundaries, structure (elevation of the top contours), and isopachs (thickness contours) for major low permeability oil and gas plays in the lower 48 States. Additionally, related oil and gas infrastructure layers are included. For a full set of energy infrastructure layers refer to the <a href="/state/maps.cfm">U.S. Energy Mapping System</a>.
  
</p></span> 
      </div>
			<h1>Major Tight Oil and Shale Gas Plays in Lower 48 States</h1>
	  
		<div class="blue_top" id="profile_map_container">
			<div id="profile_map_inner_container" class="claro">

			<?php /* INSERT MAP HERE */ ?>
			<?php include ('global/scripts/maps/includes/map.inc') ; ?>

			</div>
			<div class="carousel_footer">
                <div id="layerinfo"><a href="/maps/layer_info-m.cfm"><img src="/state/img/layers_info.png" id="layerinfo_img"> Layer information and map data</a></div>
				<span style="float:right;">Send map questions, comments and<br />suggestions to: <a href="mailto:mapping@eia.gov">mapping@eia.gov</a></span><br /><br />
			</div>
	 	</div>
	 </div>
      </div>
<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>