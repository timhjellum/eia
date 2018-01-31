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
  <?php include ('includes/pagetitle_alerts.inc') ; ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mr_temp2">



      <div class="main_col left">
      <?php /* Main Column */ ?>
      
        <?php /*div class="feature"> <span>
        <h2>EIA is not currently reporting on any hurricanes. Please see the <a href="tropical_outlook.cfm"><em>Current NOAA Summary</em></a>  for the lastest from NOAA.</h2></span> 
      </div*/ ?>
        <h1 align="left">Winter 2013-14 Propane Updates</h1>
<p class="dat"> Last updated: March 12, 2014</p>
<br />
<p>With the onset of severely cold weather in recent weeks, propane supplies in the Midwest  are extremely tight. Information related to the current propane situation is  available below.</p>
<table width="800" border="0">
  <tr>
    <td style="vertical-align:bottom">
    <strong>NOAA forecast shows below normal temperatures across most of the Midwest</strong><br /> 
<a href="images/outlook.png" class="lightbox"><img src="images/outlook.png" alt="8-14 day propane outlook" width="225"/></a></td>

<td style="vertical-align:bottom">
<strong>Retail propane prices in the <br />
Midwest, which rose 
sharply<br />
in 
late
January, have moved <br />
lower</strong><br /> 
<a href="images/propane_prices.png" class="lightbox"><img src="images/propane_prices.png" alt="Retail propane prices in the Midwest, which rose sharply in late
January, have moved lower" width="225"/></a></td> 

<td style="vertical-align:bottom"><strong>Natural gas and electricity are the major heating fuels for most
of the United States</strong><br /> 
<a href="images/share_of_homes.png" class="lightbox"><img src="images/share_of_homes.png" alt="Heating fuel market shares by region" width="255"/></a></td>
  
  </tr>
</table>
<?php /*<a href="images/propane.png" class="lightbox"><img src="images/propane.png"  alt="Midwest Propane Movements" width="500"/></a>*/ ?>
<h2>Price and inventory data</h2>
<strong> Prices</strong>
  <li>  <a href="http://www.eia.gov/dnav/pet/pet_pri_wfr_dcus_nus_w.htm">Weekly U.S.  prices (retail and wholesale)</a></li>
  <li><a href="http://www.eia.gov/dnav/pet/pet_pri_wfr_dcus_nus_w.htm">Weekly  Midwest (PADD 2) price (retail and wholesale)</a></li>
  <li><a href="http://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&amp;s=EER_EPLLPA_PF4_Y44MB_DPG&amp;f=D">Reuters F.O.B. propane   prices at Mont Belvieu, Texas (PADD 3)</a></li>
<br />
<strong>Inventories</strong>
  <li><a href="http://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&amp;s=WPRSTUS1&amp;f=W">Weekly U.S. Inventories of Propane and Propylene</a></li>
  <li><a href="http://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&amp;s=WPRSTP21&amp;f=W">Weekly Midwest (PADD 2) Inventories of Propane and Propylene</a></li>
<br />
<h2>EIA summary presentations and other analyses</h2>
<strong>Summary presentations</strong>
<li><a href="http://www.eia.gov/pressroom/presentations/propane_03122014.pdf">An update on the propane market situation</a> - delivered on March 12, 2014</li>
<br />
<strong><em>This Week in Petroleum</em> articles</strong>
<li><a href="http://www.eia.gov/oog/info/twip/twiparch/2014/140115/twipprint.html">Midwest propane markets tighten further on cold weather</a> - released January 15, 2014</li>
<li><a href="http://www.eia.gov/oog/info/twip/twiparch/2013/131002/twipprint.html">New production sources change domestic propane flows</a> - released October 2, 2013  </li>
<br />
<strong><em>Today in Energy</em> articles</strong>
<li><a href="http://www.eia.gov/todayinenergy/detail.cfm?id=14711">Midwest  propane markets tighten further on cold weather</a> - released January 23, 2014</li>
<li><a href="http://www.eia.gov/todayinenergy/detail.cfm?id=14151">Propane demand hits a record high for November</a> - released December 12, 2013</li>
<p class="no_btm_border">&nbsp;</p>

   
		<?php /*cfinclude template="includes/historical_disruptions.cfm"*/ ?>
		<?php /*Also see   the <a href="/special/new_gom/">Gulf of Mexico Fact Sheet </a*/ ?>     
	 </div>
     

	<div class="side_col right">
          <?php /* Start of Side Column */ ?>
          <?php /*<?php include ('includes/side-nav_alerts.inc') ; ?>*/ ?>
          <?php /* End of Side Column */ ?>
        </div>
      </div>
  
      

<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>