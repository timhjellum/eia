<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php
  isset($sect) || $sect = 'home';
  include "global/includes/css_rehab_eia-head.inc";
?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>

<body>
<?php include "global/includes/css_rehab_eia-header.inc" ?>
<?php /* start home slider */ ?>
<script src="/beta/css_rehab/app/global/vendor/jquery.min.js"></script>
<script src="/beta/css_rehab/app/global/vendor/bxslider/dist/jquery.bxslider.min.js"></script>
<script src="/beta/css_rehab/app/global/scripts/slider-home.min.js"></script>
<div class="l-row header">
  <div class="slider-home-top"></div>
  <div class="slider-home">
    <ul class="bxslider">
      <li class="feature_new6">
        <div class="slider-overlay">
          <div class="slider-content">
            <h2><a href="/petroleum/transportation/?src=home-b6">U.S. Movements of Crude Oil By Rail</a></h2>
            <h3><a href="/petroleum/transportation/?src=home-b6">With data through May 2017 ›</a></h3>
                          </div>
        </div>
      </li>
      <li class="feature_new1">
        <div class="slider-overlay">
          <div class="slider-content">
            <h2><a href="/forecasts/steo/?src=home-b1">Short-Term Energy Outlook August 2017</a></h2>
            <h3><a href="/forecasts/steo/?src=home-b1">Energy projections for supply, demand, and prices ›</a></h3>
                          </div>
        </div>
      </li>
      <li class="feature_new2">
        <div class="slider-overlay">
          <div class="slider-content">
            <h2><a href="/beta/international/regions-topics.cfm?RegionTopicID=WOTC&amp;src=home-b2">World chokepoints for maritime transit of oil are a critical part of global energy security ›</a></h2>
            <h3></h3>
                          </div>
        </div>
      </li>
      <li class="feature_new3">
        <div class="slider-overlay">
          <div class="slider-content">
            <h2><a href="/petroleum/supply/monthly/?src=home-b3">Petroleum Supply Monthly</a></h2>
            <h3><a href="/petroleum/supply/monthly/?src=home-b3">Supply and disposition of crude oil and petroleum products ›</a></h3>
                          </div>
        </div>
      </li>
      <li class="feature_new4">
        <div class="slider-overlay">
          <div class="slider-content">
            <h2><a href="/naturalgas/monthly/?src=home-b4">Natural Gas Monthly</a></h2>
            <h3><a href="/naturalgas/monthly/?src=home-b4">Data for May 2017 ›</a></h3>
                          </div>
        </div>
      </li>
      <li class="feature_new5">
        <div class="slider-overlay">
          <div class="slider-content">
            <h2><a href="/biofuels/biodiesel/production/?src=home-b5">Monthly Biodiesel Production Report </a></h2>
            <h3><a href="/biofuels/biodiesel/production/?src=home-b5">with data for May 2017 ›</a></h3>
                          </div>
        </div>
      </li>
      <li class="feature_new6">
        <div class="slider-overlay">
          <div class="slider-content">
            <h2><a href="/petroleum/transportation/?src=home-b6">U.S. Movements of Crude Oil By Rail</a></h2>
            <h3><a href="/petroleum/transportation/?src=home-b6">With data through May 2017 ›</a></h3>
                          </div>
        </div>
      </li>
      <li class="feature_new1">
        <div class="slider-overlay">
          <div class="slider-content">
            <h2><a href="/forecasts/steo/?src=home-b1">Short-Term Energy Outlook August 2017</a></h2>
            <h3><a href="/forecasts/steo/?src=home-b1">Energy projections for supply, demand, and prices ›</a></h3>
                          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="slider-home-bottom">                </div>
        </div>
<?php /* end home slider */ ?>

<div class="l-row l-3-col-reorder">
  <div class="l-side-column l-reorder-center">

    <?php /* start what's new */ ?>
    <?php /* start coming Up */ ?>
    <div class="content-container dark-top-border-container">
    <ul>
        <li class="header"><h2>What's New</h2></li>
        <li><a href="/">Drilling Productivity Report</a></li>
        <li class="date">June 12</span></li>
        <li><a href="/">Short-Term Energy Outlook</a></li>
        <li class="date">June 12</span></li>
        <li><a href="/">Petroleum Marketing Monthly</a></li>
        <li class="date">June 12</span></li>
        <li class="footer"><a href="about/new/">More</a></li>
    </ul>
    <hr>
    <ul>
        <li class="header"><h2>Coming Up</h2></li>
        <li><a href="/forecasts/aeo/retrospective/">AEO Retrospective Review</a></li>
        <li><a href="/forecasts/ieo/">International Energy Outlook</a></li>
        <li><a href="/beta/international/analysis.cfm?iso=ECU">Ecuador Country Analysis Brief</a></li>
        <li class="footer"><a href="/reports/upcoming.cfm">More</a></li>
    </ul>
</div>
  <!--
  ?php if(!$whatsNew = file_get_contents("CFusionMX7/global/data/whatsnew2.htm", FILE_USE_INCLUDE_PATH)) {
  echo "<a href=\"about/new/\">See what's new</a>";
  } else {
  echo $whatsNew;
  }
  ?
  -->
  <?php /* end what's new */ ?>
  <?php /* end coming Up */ ?>

  </div>
  <div class="l-two-column l-reorder-first">

    <?php /* start today in energy */ ?>
      <?php include "todayinenergy/includes/css_rehab_file_scrub_live.inc" ?>
    <?php /* end today in energy */ ?>

  </div>
  <div class="l-side-column l-reorder-last">

    <?php /* start data highlights */ ?>
    <?php if(file_exists("../global/includes/css_rehab_data-highlights.html")){
        $homepage_data_file = "../global/includes/css_rehab_data-highlights.html";
      } else {
        $homepage_data_file = "../global/includes/homepage_data.cfm";
      }
      if(!$homepageData = file_get_contents($homepage_data_file, FILE_USE_INCLUDE_PATH)) {
        echo "Data highlights not currently available. Check back soon.";
      } else {
        echo $homepageData;
    }
    ?>
    <?php /* end data highlights */ ?>

                  </div>
        </div>
<!-- 75% / 25% --> 
<div class="l-row">
  <div class="l-main-column">
    <?php /* start features */ ?>
    <div class="content-container features dark-top-border-container">
      <div class="l-row">
        <h2>Features</h2>
        <div class="l-one-third-column">
          <div class="content-container">
            <a href="http://www.eia.gov/beta/realtime_grid/#/summary/demand"><img src="global/images/home_sm_features/electric_data_sys.jpg" alt="Electricity Data Browser"/></a>
            <ul>
              <li class="header">
                <h2><a href="http://www.eia.gov/beta/realtime_grid/#/summary/demand">Electric System Operating Data Tool</a></h2>
              </li>
              <li>Near real-time electricity operations data for the Lower 48 states.</li>
            </ul>
                          </div>
        </div>
        <div class="l-one-third-column">
          <div class="content-container">
            <a href="/special/disruptions/"><img src="global/images/home_sm_features/disruptionsmap.jpg" alt="Energy Disruptions Map"/></a>
            <ul>
              <li class="header">
                <h2><a href="/special/disruptions/">Tracking hurricane season</a></h2>
              </li>
              <li>EIA’s Energy Disruptions Map displays key layers of energy infrastructure and real-time storm information.</li>
            </ul>
                          </div>
        </div>
        <div class="l-one-third-column">
          <div class="content-container">
          <img src="/global/images/home_sm_features/energy_mapping_system.jpg" alt="U.S. Energy Mapping System"/></a>
            <ul>
              <li class="header">
                <h2><a href="/state/maps.cfm">U.S. Energy Mapping System</a></h2>
              </li>
              <li>Rankings, layers of energy information, and state comparisons.</li>
            </ul>
                          </div>
        </div>
                      </div>
        </div>
    <?php /* end features */ ?>



    <div class="l-row">
      <div class="l-one-third-column">
        
        <?php /* Our Experts Speak */ ?>
        <div class="content-container dark-top-border-container">
          <ul>
            <li class="header"><h2>Our Experts Speak</h2></li>
            <li><a href="/pressroom/presentations/gruenspecht_05032017.pdf">Acting EIA Administrator Howard Gruenspecht presented the outlook for natural gas production, demand, and trade</a></li>
            <li class="date">January 31, 2017</li>
            <li><a href="/pressroom/presentations/gruenspecht_04252017.pdf">Acting EIA Administrator Howard Gruenspecht presented the outlook for oil and natural gas production in the United States</a></li>
            <li class="date">January 5, 2017</li>
            <li class="footer"><a href="pressroom/">More</a></li>
          </ul>
        </div>
        <?php /* Our Experts Speak */ ?>

      </div>
      <div class="l-one-third-column">
        
      <?php /* Especially For */ ?>
      <div class="content-container dark-top-border-container">
          <ul>
            <li class="header"><h2>Especially For...</h2></li>
            <li><a href="about/careers/">Job Seekers</a></li>
            <li><a href="about/especiallyfor/analysts.cfm">Policy Analysts</a></li>
            <li><a href="pressroom/">Media</a></li>
            <li><a href="tools/models/">Researchers</a></li>
            <li><a href="/kids">Students</a></li>
            <li><a href="/kids/energy.cfm?page=6">Teachers</a></li>
            <li><a href="/survey/">Survey Respondents</a></li>
            <li><a href="about/especiallyfor/employees.cfm">EIA Employees</a></li>
            <li><a href="/developer/">Developers API</a></li>
          </ul>
        </div>
      <?php /* Especially For */ ?>

      </div>
      <div class="l-one-third-column">
        
      <?php /* Top Picks */ ?>
        <div class="content-container dark-top-border-container">
          <ul>
            <li class="header"><h2>Top Picks</h2></li>
            <li><a href="/petroleum/gasdiesel/">Gasoline and Diesel Fuel Update</a></li>
            <li><a href="http://ir.eia.gov/ngs/ngs.html">Natural Gas Storage Report</a></li>
            <li><a href="/petroleum/weekly/">This Week in Petroleum</a></li>
            <li><a href="/petroleum/supply/weekly/">Weekly Petroleum Status Report</a></li>
            <li><a href="/countries">Profiles for countries</a></li>
            <li><a href="state">Profiles for U.S. states</a></li>
            <li><a href="/todayinenergy/">Today in Energy</a></li>
          </ul>
        </div>
      <?php /* Top Picks */ ?>

                      </div>
        </div>

  </div>
  <div class="l-side-column">

    <?php /* start outlooks */ ?>
    <div class="content-container light-top-border-container">
      <ul>
        <li class="header"><h2>Outlooks</h2></li>
        <li><a href="/outlooks/steo/">Short-Term Energy Outlook</a></li>
        <li><a href="/outlooks/aeo/">Annual Energy Outlook</a></li>
        <li><a href="/outlooks/ieo">International Energy Outlook</a></li>
      </ul>
    </div>
    <?php /* end outlooks */ ?>

    <?php /* start learn about energy */ ?>
    <div class="content-container light-top-border-container">
      <ul>
        <li class="header"><h2>Learn About Energy</h2></li>
        <li><a href="/energyexplained">Energy Explained</a></li>
        <li><a href="tools/faqs/">Frequently Asked Questions</a></li>
      </ul>
    </div>
    <?php /* end learn about energy */ ?>

    <?php /* start kids promo */ ?>
    <?php include "global/includes/css_rehab_kids-dates.inc" ?>
    <?php /* end kids promo */ ?>

                  </div>
        </div>
<?php include "global/includes/css_rehab_eia-footer.inc" ?>
</body>
</html>
