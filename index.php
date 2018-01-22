<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php
  isset($sect) || $sect = 'home';
  include "global/includes/eia_head_info.inc";
?>
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body onload="preloadmyImages('/global/images/homepage_rotating_features/homepage_banner1.jpg','/global/images/homepage_rotating_features/homepage_banner2.jpg','/global/images/homepage_rotating_features/homepage_banner3.jpg','/global/images/homepage_rotating_features/homepage_banner4.jpg','/global/images/bg/home_feature_overlay.png')">
<div id="outerX"><?php /* Outer Wrapper */ ?>
<?php
	include "global/includes/eia_header.inc";
?>
<?php /* Rotating Banner */ ?>
<div class="carousel3 home_feature_banner">
  <?php /*ul id="slider1"*/ ?><ul id="slider3">
<?php
	  if(!$homepageFeatures = file_get_contents("global/includes/homepage_features.html", FILE_USE_INCLUDE_PATH)) {
  } else {
    echo $homepageFeatures;
  }
?>
  </ul>
  <div class="thumbs3"></div>
</div><hr class="banner_shadow"/>
<?php /* /Rotating Banner */ ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mhome_temp">
    	<div class="main_col">
        <span class="side_left dk_blue_top">
        <?php /* What's New */ ?>
        <h2>What's New</h2>
      <?php
        if(!$whatsNew = file_get_contents("CFusionMX7/global/data/whatsnew2.htm", FILE_USE_INCLUDE_PATH)) {
          echo "<a href=\"about/new/\">See what's new</a>";
        } else {
          echo $whatsNew;
        }
      ?>
          <h5><b><a href="about/new/">More &rsaquo;</a></b></h5>
        <?php /* What's New */ ?>
        <hr />
        <?php /* Coming Up */ ?>
        <h2>Coming Up</h2>         
          <h5><a href="/environment/emissions/state/analysis/">State-Level Energy-Related Carbon Dioxide Emissions</a>&nbsp;&rsaquo;</h5>
          <h5><a href="/beta/international/analysis.cfm?iso=IRN">Iran Country Analysis Brief&nbsp;&rsaquo;</a></h5>
          <h5><a href="/forecasts/aeo/"> Annual Energy Outlook&nbsp;&rsaquo;</a></h5>
          <h5><b><a href="/reports/upcoming.cfm">More &rsaquo;</a></b></h5>
        <?php /* Coming Up */ ?>
        </span>
	  <?php /* Today in Energy */ ?>
      <span class="main">
		<?php
      include "todayinenergy/includes/file_scrub_live.inc";
    ?>
      </span>
	  <?php /* Today in Energy */ ?>
	  <?php /* Features */ ?>
    <div class="feature_sec dk_blue_top">
	    <h2>Features</h2>
      <span class="home_sm_feature1">
        <a href="https://www.eia.gov/beta/realtime_grid/"> <img src="global/images/home_sm_features/electric_data_sys.jpg" alt="Electricity Data Browser"/></a>
        <br/>
        <h3><a href="https://www.eia.gov/beta/realtime_grid/">Electric System Operating Data Tool &rsaquo;</a></h3>
        <p>Near real-time electricity operations data for the Lower 48 states.</p>
      </span>

      <span class="home_sm_feature2">
        <a href="http://www.noggateway.org"> <img src="global/images/home_sm_features/gateway.jpg" " alt="Gateway"/></a>
        <br/>
        <h3><a href="http://www.noggateway.org">National Oil &amp; Gas Gateway&nbsp;&rsaquo;</a></h3>
        <p>Well-level data and maps now available</p>
      </span>
      <span class="home_sm_feature3">
      <a href="/state/maps.cfm">
        <img src="/global/images/home_sm_features/energy_mapping_system.jpg" alt="U.S. Energy Mapping System"/></a><br/><h3><a href="/state/maps.cfm">U.S. Energy Mapping System &rsaquo;</a></h3>
        <p>Rankings, layers of energy information, and state comparisons.</p>
      </span>
    </div>
		<?php /* Features */ ?>
	  <?php /* Our Experts Speak */ ?>
	    <div class="side_left dk_blue_top">
        <h2>Our Experts Speak</h2>
        <h5><a href="/pressroom/events/pdf/Propane_01102018.pdf">Rob Merriam, Office of Petroleum and Biofuels Statistics and Warren Wilczewski, Office of Petroleum, Natural Gas, and Biofuels Analysis, EIA presented EIA’s propane market indicators and measures of supply adequacy</em>&nbsp;&rsaquo;</a></h5>
        <p>January 10, 2018</p>        <h5><a href="/pressroom/presentations/hess_10112017.pdf">Tim Hess, Office of Energy Analysis, presented EIA’s Winter Fuels Outlook</em>&nbsp;&rsaquo;</a></h5>
        <p>October 11, 2017</p>    
        <h5><b><a href="pressroom/">More &rsaquo;</a></b></h5>
	    </div>
    <?php /* Our Experts Speak */ ?>
    <?php /* Middle Split Columns */ ?>
      <span class="main">
      	<?php /* Especially For */ ?>
  		<div class="home_col1 dk_blue_top">
        <h2>Especially For...</h2>
          <h5><a href="about/careers/">Job Seekers &rsaquo;</a></h5>
          <h5><a href="about/especiallyfor/analysts.cfm">Policy Analysts &rsaquo;</a></h5>
          <h5><a href="pressroom/">Media &rsaquo;</a></h5>
          <h5><a href="tools/models/">Researchers &rsaquo;</a></h5>
          <h5><a href="/kids">Students &rsaquo;</a></h5>
          <h5><a href="/kids/energy.cfm?page=6">Teachers &rsaquo;</a></h5>
          <h5><a href="/survey/">Survey Respondents &rsaquo;</a></h5>
          <h5><a href="about/especiallyfor/employees.cfm">EIA Employees &rsaquo;</a></h5>
          <h5><a href="/developer/">Developers API &rsaquo;</a></h5><strong></strong>
      </div>
      <?php /* Especially For */ ?>
      <?php /* Top Picks */ ?>
		  <div class="home_col2 dk_blue_top">
        <h2>Top Picks</h2>
          <h5><a href="/petroleum/gasdiesel/">Gasoline and Diesel Fuel Update &rsaquo;</a></h5>
          <h5><a href="http://ir.eia.gov/ngs/ngs.html">Natural Gas Storage Report &rsaquo;</a></h5>
          <h5><a href="/petroleum/weekly/">This Week in Petroleum &rsaquo;</a></h5>
          <h5><a href="/petroleum/supply/weekly/">Weekly Petroleum Status Report &rsaquo;</a></h5>
          <h5><a href="/countries">Profiles for countries &rsaquo;</a></h5>
          <h5><a href="state">Profiles for U.S. states &rsaquo;</a></h5>
          <h5><a href="/todayinenergy/">Today in Energy &rsaquo;</a></h5>
      </div>
        <?php /* Top Picks */ ?>
      </span>
      <?php /* Middle Split Columns */ ?>
      </div>
      <?php /* Main Column */ ?>
      <div class="side_col right">
	  <?php /* Side Column */ ?>
          <?php /* Data Highlights */ ?>
		  <div class="ltblue_side">
          <span>
			<?php
        if(file_exists("global/includes/homepage_data.html")){
          $homepage_data_file = "global/includes/homepage_data.html";
        } else{
          $homepage_data_file = "global/includes/homepage_data.cfm";
        }
        if(!$homepageData = file_get_contents($homepage_data_file, FILE_USE_INCLUDE_PATH)) {
          echo "Data highlights not currently available. Check back soon.";
        } else {
          echo $homepageData;
        }
      ?>
          </span>
          </div>
          <?php /* Data Highlights */ ?>
		  <?php /* Outlooks */ ?>
          <span class="grey_side blue_top">
            <h4>Outlooks</h4>
              <p><a href="/outlooks/steo/">Short-Term Energy Outlook</a></p>
              <p><a href="/outlooks/aeo/">Annual Energy Outlook</a></p>
              <p class="no_btm_border"><a href="/outlooks/ieo">International Energy Outlook</a></p>
          </span>
          <?php /* Outlooks */ ?>
		  <?php /* Learn About Energy */ ?>
          <span class="grey_side blue_top">
            <h4>Learn About Energy</h4>
              <p><a href="/energyexplained">Energy Explained</a></p>
              <p class="no_btm_border"><a href="tools/faqs/">Frequently Asked Questions</a></p>
          </span>
          <?php /* Learn About Energy */ ?>
          <?php /* Kids Promo */ ?>
			    <?php
            include "global/includes/kids_dates.inc";
          ?>
          <?php /* Kids Promo */ ?>
      <?php /* Side Column */ ?>
      </div>
    </div>
<?php /*/ Page/Body Content */ ?>
<?php
include "global/includes/eia_footer.inc";
?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
<?php /* the script below appends a query string to the end of each image name in the homepage rotating banner
			forcing the browser to fetch a new, updated image*/ ?>
<script>
  (function(){
    $('.home_feature_banner ul li').each(function(){
      var newName = '.jpg?' + $.now();
      $(this).css('background-image',$(this).css('background-image').replace('.jpg',newName));
    })
  }());
</script>
</html>
