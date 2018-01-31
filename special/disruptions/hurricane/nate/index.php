<?php $disruptions = true; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php include ('global/includes/eia_head_info.inc') ; ?>
<?php include ('global/scripts/maps/includes/mapIncludes.inc') ; ?>

<!-- Start Unique Header -->

<script type="text/javascript">/* <![CDATA[ */
	if (window.ColdFusion) ColdFusion.required['name']=true;
/* ]]> */</script>

<script type="text/javascript">/* <![CDATA[ */
	if (window.ColdFusion) ColdFusion.required['email']=true;
/* ]]> */</script>
<!-- End Unique Header -->

<style>
			#profile_map_inner_container {
				height: 400px;
			}
		</style>

<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body>
  <div id="outerX"><?php /* Outer Wrapper */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
  <?php include ('special/disruptions/includes/pagetitle_disruptions.inc') ; ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mr_temp2">

      <div class="main_col left">
      <?php /* Main Column */ ?>
      
      <h1>Hurricane Nate</h1>    
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
   
       <hr />
       <h3><strong>Note on Hurricane Nate, October 8, 2017, 10:30 am EDT</strong></h3>
     <p>
       <?php /* <p><a href="images/september_22.png" class="lightbox"><img style="float:right" src="images/september_22.png" width="200" alt="Screen shot of Hurricane Maria" /></a></p>*/ ?>
     </p>
     <h4><strong>Background</strong></h4>
     <p>Hurricane Nate made its initial landfall at 8:00 pm EDT at the mouth of the Mississippi River.  The second landfall was at 1:30 am EDT Sunday near Biloxi, MS.  The storm made landfall as a Category One hurricane with sustained winds of 85 miles per hour.</p>
     <p>Nate weakened as it moved inland and by 4:30 am EDT was downgraded to a tropical storm.  As of 8:00 am EDT the National Hurricane Center (NHC) reported that the storm was moving rapidly inland (23 miles per hour) with sustained winds of 45 miles per hour.  The NHC anticipates that Nate will rapidly weaken and should “degenerate into a remnant low late Monday.”  The projected storm track is shown below.</p>
   <img src="images/october_8_figure1.png" alt="Screen shot of Hurricane Nate" /></p>
     <h4><strong>Power System Impacts</strong></h4>
      <p>Peak outages associated with Nate totaled about 100,000 customers in Mississippi and Alabama as of 6:00 am EDT:</p>
      <ul>
        <li>Alabama: 56,250 customers</li>
        <li>Mississippi: 46,487 customers</li>
      </ul>
      <p>In addition, about 10,000 outages were reported in the Florida panhandle.</p>
      <p>The following table compares total customer counts to outages in Mississippi and Alabama</p>
<table class="basic_table">
<colgroup>
<col width="25%" />
</colgroup>
  
    <caption>&nbsp;
    </caption>
    <thead>
      <tr>
        <th>State</th>
        <th>Total customers<br />
          (thousnds)</th>
        <th>Residential customers<br />
(thousnds)</th>
        <th>Approximate  customers<br />
without power, <br />
Sunday morning<br />
(thousnds)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mississippi</td>
        <td>1,557</td>
        <td>1,311</td>
        <td>56</td>
      </tr>
      <tr>
        <td>Alabama</td>
        <td>2,621</td>
        <td>2,243</td>
        <td>46</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4">Source: EIA-861M for July 2017; press reports</td>
      </tr>
    </tfoot>
  </table>
<p> Outages were largely concentrated around Mobile, Alabama, with over 50,000 customers out. Outages took place in areas where the main power provider is Southern Company (Alabama Power, Mississippi Power, and Gulf Coast (Florida) Power.)  Southern Company is also the balancing authority for the region. Because of the small number of outages relative to total customers the impact on projected load versus actual, as reported by the EIA-930 hourly data, was minimal.</p>
  <img src="images/october_8_figure2.png" alt="Screen shot of Hurricane Nate" /></p>

<p>The total projected demand peak for Sunday the 8th, just under 30,000 MWh, appears to be consistent with recent weekend experience.</p>
<p>The following outage maps are from the utility websites as of 10:00 am EDT Sunday morning.  The maps illustrate that the main impact of Nate was on the coast and particularly around Mobile, AL, and Gulfport, MS.  Outages inland are scattered.</p>
<img src="images/october_8_figure3.png" alt="Screen shot of Hurricane Nate" /></p>
<?php /*<p><a href="&nbsp;">Download full report</a></p>
      <hr />
      <p><strong>Thursday Sept 21, 2017 xx:00 hours</strong></p>
      <p><a href="images/september_22.png" class="lightbox"><img style="float:right" src="images/september_22.png" width="200" alt="Screen shot of Hurricane Maria" /></a></p>
      <p>Aggregate  electricity demand for Florida balancing authorities continues to recover  day-over-day since the lows seen early Monday. After peaking at 30,535 MW on  Wednesday, Florida demand exceeded 35,000 MW Thursday afternoon, nearing  pre-hurricane levels which ranged roughly between 36,000-43,000 MW.</p>
      <p>Power  outages in Florida's 10 biggest utilities as of 12 pm Thursday affected 2.4  million customers&mdash;24% of the utilities' total number of customers and about 38%  of the peak amount of outages seen on Monday.</p>
      <p><a href="&nbsp;">Download full report</a></p>*/ ?>

      <?php /*<?php include ('includes/historical_disruptions.inc') ; ?>*/ ?>

     </div>
     
     <div class="side_col right">
          <?php /* Start of Side Column */ ?>
          <div class="blue_top">
          <?php include ('includes/side_links.inc') ; ?>
           </div>
           </div>
        </div>
         <?php /* End of Side Column */ ?>
      </div>

<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>