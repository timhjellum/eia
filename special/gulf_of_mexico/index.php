<?php $gom = true; ?>
<?php $locale = 'overview'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php include ('global/includes/eia_head_info.inc') ; ?>

<?php include ('global/scripts/maps/includes/mapIncludes.inc') ; ?>

<style>
		#profile_map_inner_container {
			height: 650px;
		}
		</style>
        
      <link type="text/css" rel="stylesheet" href="/state/css/states.css"/>
	<?php /*
<script type="text/javascript" src="/global/scripts/modules/lib/require.js">
<!-- Start Unique Header -->

	<script type="text/javascript">/* <![CDATA[
		if (window.ColdFusion) ColdFusion.required['name']=true;
		/* ]]> </script>

	<script type="text/javascript">/* <![CDATA[
		if (window.ColdFusion) ColdFusion.required['email']=true;
		/* ]]> </script>
	<!-- End Unique Header -->*/ ?>
	<title>Gulf of Mexico Fact Sheet - Energy Information Administration</title>
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body>
  <div id="outerX"> <?php /*Outer Wrapper*/ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
  <?php include ('includes/subnav_gom.inc') ; ?>
 <?php /*Page/Body Content*/ ?>
    <div class="pagecontent mr_temp2">

      <div class="main_col left">
<?php /*Main Column*/ ?>

      <p>The Gulf of Mexico area, both onshore and offshore, is one of the most important regions for energy resources and infrastructure. Gulf of Mexico federal offshore oil production accounts for 17% of total U.S. crude oil production and federal offshore natural gas production in the Gulf accounts for 5% of total U.S. dry production. Over 45% of total U.S. petroleum refining capacity is located along the Gulf coast, as well as 51% of total U.S. natural gas processing plant capacity.</p>
      
	    <h1>Energy Infrastructure with Real-time Storm Information</h1>
	   
	<div id="profile_map_inner_container" class="claro">

<?php /*INSERT MAP HERE*/ ?>
	<?php include ('global/scripts/maps/includes/map.inc') ; ?>
</div> 
			<div class="carousel_footer">
                <div id="layerinfo"><a href="/maps/layer_info-m.cfm"><img src="/state/img/layers_info.png" id="layerinfo_img"> Layer information and map data</a></div>
				<span style="float:right;">Send map questions, comments and<br />suggestions to: <a href="mailto:mapping@eia.gov">mapping@eia.gov</a></span><br /><br />
			</div> 
            <br /> <br /> 
     </div>
     
     <div class="side_col right">
<?php /*Start of Side Column*/ ?>
          <?php include ('includes/side_gom.inc') ; ?>
<?php /*End of Side Column*/ ?>
        </div>
      </div>

<?php /*/ Page/Body Content*/ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper*/ ?>
</body>
</html>