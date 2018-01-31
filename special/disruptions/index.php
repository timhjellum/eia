<?php $disruptions = true; ?>
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
			.grad {
				background: #fbc2c4; /* For browsers that do not support gradients */
				background: -webkit-linear-gradient(white, #fbc2c4); /* For Safari 5.1 to 6.0 */
				background: -o-linear-gradient(white, #fbc2c4); /* For Opera 11.1 to 12.0 */
				background: -moz-linear-gradient(white, #fbc2c4); /* For Firefox 3.6 to 15 */
				background: linear-gradient(white, #fbc2c4); /* Standard syntax */
				border: 12px solid #fbc2c4;
				color: black;
			}
			.grad a {
				color: #189bd7;
			}
			
			.side_col h4 {
    font-family: "Times New Roman",Times,serif;
    font-size: 19pt;
    font-weight: 400;
    margin-bottom: 4px;
    display: block;
}
.side_col p {
    font-size: 9pt;
    line-height: 1.5em;
    margin-bottom: 2px;
}
.side_col ul {
    margin-bottom: 10px;
    padding-bottom: 10px;
}

		</style>
    <!---link type="text/css" rel="stylesheet" href="/state/css/states.css"/--->    
        <link type="text/css" rel="stylesheet" href="/special/disruptions/socal/css/summer_styles.css"/>    

<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body>
  <div id="outerX"><?php /* Outer Wrapper */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
  <?php include ('includes/pagetitle_disruptions.inc') ; ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mr_temp2">

      <div class="main_col left">
      <?php /* Main Column */ ?>
      <!---div class="notice">
	  <h2><b>Active Event, October 2017: Hurricane Nate</b></h2>
       <p>See the latest updates on the <a href="hurricane/nate/" style="color:#189BD7">Hurricane Nate report page</a>.</p>
    </div--->
        <div class="commentary" > 
        <p>EIA tracks and reports on selected significant storms that impact or could potentially impact energy infrastructure.  See past historical events reported on right or real-time storm tracking with energy infrastructure maps below.</p></span> 
      </div>
			<h1>Energy Infrastructure with Real-Time Storm Information</h1>
	  
		<div class="blue_top" id="profile_map_container">
			<div id="profile_map_inner_container" class="claro">

			<?php /* INSERT MAP HERE */ ?>
			<?php include ('global/scripts/maps/includes/map.inc') ; ?>

			</div>
			<div class="carousel_footer">
                <div id="layerinfo"><a href="/maps/layer_info-m.cfm"><img src="/state/img/layers_info.png" id="layerinfo_img"> Layer information and map data</a></div>
				<!-- &nbsp;&nbsp;<a href="/maps/layer_info-m.cfm">Map details and data</a> -->
				<span style="float:right;">Send map questions, comments and<br />suggestions to: <a href="mailto:mapping@eia.gov">mapping@eia.gov</a></span><br /><br />
			</div>
		</div>
	 </div>

 		<div class="side_col right">
          <?php /* Start of Side Column */ ?>
          <div class="blue_top">
          <?php include ('includes/side_links.inc') ; ?>
           </div>
           <br />
           <!--div class="blue_top">
          <?php include ('includes/side_events.inc') ; ?>
           </div>
           <br /-->
           <?php /*/ Today in Energy Widget Top3 */ ?>
  <?php
  require_once 'global/includes/utils/utils.inc';
  require_once 'global/includes/utils/Neic.inc';
  $neic      = new NEIC();
  ?>
<?php
//hsh_sql:
//associated with query name tie_lookup
$bindVariables = array();
$neic->sql = " Select *
    from neic.today_in_energy
    Where active = :active
    AND tags like :tags1 OR tags like :tags2 OR tags like :tags3 OR tags like :tags4 OR tags like :tags5
    ORDER BY ID DESC ";
$bindVariables[":active"] = "yes";
$bindVariables[":tags1"] = '%crude oil%';
$bindVariables[":tags2"] = '%petroleum%';
$bindVariables[":tags3"] = '%coal%';
$bindVariables[":tags4"] = '%production%';
$bindVariables[":tags5"] = '%natural gas%';

//print $neic->sql;
//print_r($bindVariables);
$tie_lookup = $neic->get($bindVariables);
?>
<?php /*--WHERE ROWNUM <= 1*/ ?>

<?php if (!empty($tie_lookup)) { ?>
<?php $tietopic = 'disruption'; ?>

<div class="green_top tie_container">
  <h2><a href="/todayinenergy/">Today in Energy<br/><span>Energy Analysis Every Weekday</span></a></h2>
  <?php include ('todayinenergy/outreach/file_scrub_tie_side_sm_top3.php') ; ?>

</div>

<?php  } // end if ?>

        </div>
         <?php /* End of Side Column */ ?>
      </div>
<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>