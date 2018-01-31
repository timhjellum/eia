<?php $locale = 'hurricane'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>EIA - Gulf of Mexico Hurricane Season Outlook</title>
<?php include ('global/includes/eia_head_info.inc') ; ?>
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>
<body>
<?php /* Start of Outer Wrapper */ ?>
<div id="outerX">
  <?php /* EIA Header */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
      <?php /* Navigation Menu */ ?>
      <?php include ('includes/subnav_hurricane.inc') ; ?>
      <?php /* Page/Body Content */ ?>
      <div class="pagecontent mr_temp2">
        <?php /* Start of Main Column */ ?>
        <div class="main_col">
          <p><strong>Release Date:</strong> August 31, 2011</p>
          <h1>Hurricane Season Outlook</h1>
          <p>The National Oceanic and Atmospheric Administration's  (NOAA) <em>Atlantic Hurricane Season Outlook</em>, released on May 19, 2011,  predicts that the Atlantic basin likely will experience above-normal tropical  weather activity during this year's hurricane season  (June 1 &mdash; November 30). NOAA  projects that 12 to 18 named storms will form within the Atlantic Basin over  the next 6 months, including 6 to 10 hurricanes of which 3 to 6 will be  intense. 
          </p>
          <hr />
          <p>Offshore platform and rig operators in the Gulf of Mexico temporarily evacuate personnel and shut in crude oil and natural gas production to protect facilities when severe weather threatens. Such events have sometimes had substantial impacts on energy production (see Figure 1), yet most tropical storms and many hurricanes that pass through the Gulf cause only minor disruptions for just a few days.   For example, Tropical Storm Bonnie caused between 10 and 50 percent of normal daily energy production to be shut in over a five day period in July of 2010.</p>
          <p>Production outages become significant when large-scale tropical weather   systems require production to be shut in for longer periods or when damage   occurs to offshore infrastructure. Hurricanes Katrina and Rita, which passed   through the Gulf in late-August and September of 2005, were the most disruptive   storms to impact offshore energy production and caused long-lasting damage   including the destruction of 113 offshore platforms. At one point just before   Hurricane Rita made landfall, 100 percent of crude oil production and about 80   percent of natural gas production was shut in for five consecutive days. Production outages continued for months afterwards. Even as late as June of   2006, 10 to 12 percent of crude oil and natural gas production remained   shut-in.</p>
          <p>Severe tropical weather occurs when the ocean temperature warms during the   summer months. Over the past 100 years, tropical storms have formed within the   Gulf of Mexico as early as May and as late as December (see Figure 2). Hurricanes, which usually cause the most significant disruptions to offshore   production, occur most frequently during the months of August and September.</p>
          <div class="left img_container">
          <p>Figure 1. Crude Oil and Natural Gas Production</p>
          <a class="lightbox" href="images/hurricane_fig1_big.jpg" title="Figure 1. Crude Oil and Natural Gas Production">
           <img src="images/hurricane_fig1.jpg" alt="Figure 1. Crude Oil and Natural Gas Production" />
         	</a>
         </div>
         
        <div class="right img_container">
          <p>Figure 2. Frequency of Gulf of Mexico Hurricanes and Tropical Storms</p>
          <a class="lightbox" href="images/gom_hurricane_freq_big.jpg" title="Figure 2. Frequency of Gulf of Mexico Hurricanes and Tropical Storms">
           <img src="images/gom_hurricane_freq.jpg" alt="Figure 2. Frequency of Gulf of Mexico Hurricanes and Tropical Storms" />
         	</a>
         </div>
         
          <?php /*table width="605" border="1">
            <tr>
              <td width="295"><p><strong><a name="fig1" id="fig1"></a>Figure 1. Crude Oil and Natural Gas Production</strong> <strong>              Federal Offshore Gulf of Mexico, 2002-2009</strong></p></td>
              <td width="5">&nbsp;</td>
              <td width="295"><p><strong><a name="fig2" id="fig2"></a>Figure 2. Frequency of Gulf of Mexico Hurricanes and Tropical   Storms, </strong><strong>              1910-2009</strong></p></td>
            </tr>
            <tr>
              <td width="295"><img src="images/hurricane_fig1.jpg" width="290" height="186" alt="Figure 1" /></td>
              <td>&nbsp;</td>
              <td><img src="images/gom_hurricane_freq.jpg" width="290" height="180" alt="Figure 2" /></td>
            </tr>
          </table*/ ?>
          <p>&nbsp;</p>
          <?php /* End of Main Column */ ?>
          <div class="clear">&nbsp;</div>
          <?php /* Feature Example */ ?><?php /* Feature Example */ ?>
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