<!doctype html>
<?php /* Set the HTML title (used by /global/includes/titling.cfm via eia_footer.cfm) */ ?>
<?php $L2T = 'Petroleum & Other Liquids'; ?>


<?php $locale = 'overview'; ?>
<?php /* set this so that the carousel.cfm include query will pull the correct set of Issues and Trends for this page. */ ?>
<?php $l2page = 'page_pet'; ?>
<?php $l2id = 0; ?>
<html>
<head>
<meta http-equiv='X-UA-Compatible' content='IE=edge'/>
<?php include($_SERVER['DOCUMENT_ROOT'].'/global/includes/css_rehab_eia-head.inc'); ?>
    <script src='/global/vendor/bxslider/dist/jquery.bxslider.min.js'></script>
    <script src='/global/scripts/slider-multi-cards-init.min.js'></script>

    <link rel='stylesheet' type='text/css' href='/global/styles/L2_pages.css' />
    <link href='/global/styles/eia-multi-card-slider-styles.css' rel='stylesheet' />

<?php  if(!isset($no_titling)) include($_SERVER['DOCUMENT_ROOT'].'/global/includes/titling.inc'); ?></head>
<body>
<?php include($_SERVER['DOCUMENT_ROOT'].'/global/includes/css_rehab_eia-header.inc'); ?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/petroleum/includes/subnav_petroleum.inc') ; ?>
<?php /* Page/Body Content */ ?>
<div class='pagecontent eqcol_temp'>
    <?php /*<div class='alert'><p><strong>What's changed?</strong> &nbsp; See <a href='/about/eia_explained.cfm#l2_enhancements' id='enhance' style='background:none; padding-right:0; margin-right:0'>highlights of new features</a> or <a href='#video' id='youtube' style='background:none; padding-right:0; margin-right:0'>take a 60 second video tour</a>.</p></div>*/ ?>
    <?php /*div class='alert'><p><strong>New data on the movements of crude oil by rail added.</strong> &nbsp;  <a href='transportation/webinar/' id='enhance' style='background:none; padding-right:0; margin-right:0'>Webinar</a> discusses changes 11 a.m. Tuesday, March 31.</p></div*/ ?>
    <?php /* include('https://www.eia.gov/global/includes/l2-youtube.inc'); */ ?>
    <?php /* include('https://www.eia.gov/global/includes/carousel.inc'); */ ?>
    <div class='main'><?php /*Left column*/ ?>
        <span class='main_col'>
            <h1>Recent Data</h1>
                  <?php /* replace this with something local in the include directory, or with inline code*/ ?>
                  <?php
                  /*
                  if(file_exists($_SERVER['DOCUMENT_ROOT'] . 'https://www.eia.gov/petroleum/includes/data_table.html')){
                      $homepage_data_file = $_SERVER['DOCUMENT_ROOT'] . 'https://www.eia.gov/petroleum/includes/data_table.html';
                  } else{
                      $homepage_data_file = $_SERVER['DOCUMENT_ROOT'] . 'https://www.eia.gov/petroleum/includes/data_table.inc';
                  }
                  if(!$homepageData = file_get_contents($homepage_data_file, FILE_USE_INCLUDE_PATH)) {
                      echo 'Data not currently available. Check back soon.';
                  } else {
                      echo $homepageData;
                  }

                  //include ('petroleum/includes/data_table.inc') ;
                  */
                  ?>
                  <p><a href='data.php'><strong>See more data &rsaquo;</strong></a></p>

              <h2>Updated Data Series</h2>
              <ul class='updated_data'>
                <li><span class='series_date'>12/28/2017</span> <a href='/dnav/pet/pet_sum_sndw_dcus_nus_w.htm'>Weekly supply estimates</a></li>
                <li><span class='series_date'>12/28/2017</span> <a href='/dnav/pet/pet_pri_spt_s1_d.htm'>Spot prices</a></li>
                <li><span class='series_date'>12/28/2017</span> <a href='/dnav/pet/pet_pri_fut_s1_d.htm'>Futures prices (NYMEX)</a></li>
                <li><span class='series_date'>12/28/2017</span> <a href='/dnav/pet/pet_pnp_wiup_dcu_nus_w.htm'>Weekly inputs &amp; utilization</a></li>
                <?php /*<li><span class='series_date'>07/30/2014</span> <a href='/dnav/pet/pet_move_wkly_dc_NUS-Z00_mbblpd_w.htm'>Weekly Imports &amp; Exports</a></li>
								<li><span class='series_date'>07/30/2014</span> <a href='/dnav/pet/pet_move_wimpc_s1_w.htm'>Weekly Preliminary Crude Imports by Country of Origin</a></li>
								<li><span class='series_date'>07/30/2014</span> <a href='/dnav/pet/pet_stoc_wstk_dcu_nus_w.htm'>Total Stocks</a></li>
								<li><span class='series_date'>07/30/2014</span> <a href='/dnav/pet/pet_cons_wpsup_k_w.htm'>U.S. Weekly Product Supplied</a></li>
								<li><span class='series_date'>07/23/2014</span> <a href='/dnav/pet/pet_cons_prim_dcu_nus_m.htm'>Prime Supplier Sales Volumes</a></li>
								<li><span class='series_date'>07/28/2014</span> <a href='/dnav/pet/pet_pri_gnd_dcus_nus_w.htm'>Weekly Retail Gasoline and On-Highway Diesel Prices</a></li>
								<li><span class='series_date'>07/28/2014</span> <a href='/petroleum/gasdiesel/'>Gasoline and Diesel Fuel Update</a></li>*/ ?>
              </ul>
            <h2>Survey Forms, Changes & Announcements</h2>
            <ul>
                <li><a href='/survey/#petroleum'>Petroleum surveys &rsaquo;</a></li>
				<li><a href='/survey/notice/petngproduction2017.cfm'>Proposed Changes to the EIA-914 Monthly Crude Oil, Lease Condensate, and Natural Gas Production Form</a></li>
            </ul>
        </span>
        <?php /*End left column*/ ?>
        <?php /*Right column*/ ?>
        <span id='ovHeadr' class='side_col right'>
            <?php /* require('https://www.eia.gov/global/includes/recent_highlighted_AP.inc'); */ ?>
            <h2>Upcoming Releases</h2>
            <p>
            <a href='/petroleum/gasdiesel/'>Gasoline and Diesel Fuel Update</a>: <em>5:00 p.m. ET, Monday</em><br />
            <a href='/petroleum/supply/weekly/'>Weekly Petroleum Status Report</a>: <em>10:30 a.m. ET, Wednesday</em><br />
            <a href='/petroleum/heatingoilpropane/'>Heating Oil and Propane Update</a>: <em>After 1:00 p.m. ET, Wednesday<br>
            (Oct - March only)</em><br />
            <a href='/petroleum/weekly/'>This Week in Petroleum </a>: <em>After 1:00 p.m. ET, Wednesday</em><br />
            <p><a href='/reports/upcoming.php'><strong>See all upcoming &rsaquo;</strong></a></p>
        </span>
        <?php /*end Right column*/ ?>
        <?php /*Interactive visualizations section*/ ?>
        <h1>Interactive Visualizations, Data, & Multimedia</h1>
        <ul class='visualizations'>
        <li><a title='U.S. Petroleum Infrastructure Map' href='/state/maps.cfm?v=Petroleum'>
        <div class='circle_pet_map circle'></div>
        <strong>U.S. Petroleum Infrastructure Map</strong></a></li>
        <li><a title='U.S. Fossil Fuel Resourse Map' href='/state/maps.cfm?v=Fossil%20Fuel%20Resources'>
        <div class='circle_fossil_fuel circle'></div>
        <strong>U.S. Fossil Fuel Resource Map</strong></a></li>
        <?php /*li><a title='U.S. Energy Disruptions Map' href='/special/disruptions/'>
        <div class='circle_disruptions circle'></div>
        <b>U.S. Energy Disruptions Map</b></a></li>
        <li><a title='STEO Data Browser' href='/forecasts/steo/query/'>
        <div class='circle_steo circle'></div>
        <b>STEO<br />
        Data Browser</b></a></li*/ ?>
        <li><a title='U.S. Crude Import Tracking Tool' href='/beta/petroleum/imports/browser/'>
        <div class='circle_crude_import_data circle'></div>
        <strong>U.S. Crude Import Tracking Tool</strong></a></li>
        <li><a title='STEO Data Browser' href='/forecasts/steo/query/'>
        <div class='circle_steo circle'></div>
        <strong>STEO<br />
        Data Browser</strong></a></li>
        <?php /*<li><a title='AEO Data Browser' href='/oiaf/aeo/tablebrowser/'>
        <div class='circle_aeo circle'></div>
        <b>AEO<br />
        Table Browser</b></a></li>*/ ?>
        <li><a title='Radio Spot' href='/radio/'>
        <div class='circle_radio circle'></div>
        <strong>Radio Spot</strong></a></li>
        <li><a title='Trends in Energy: Drilling efficiency and increasing U.S. oil and natural gas production' href='http://www.youtube.com/watch?v=eIRB-NnyKyE'>
        <div class='circle_video circle'></div>
        <strong>Trends in<br />Energy Video</strong></a></li>
        </ul>
        <?php /*end Interactive visualizations section*/ ?>
        <?php /*Energy education section*/ ?>
        <h1>Energy Education</h1>
        <div class='ed_section'>
            <div>
                <div>
                    <img src='/global/images/icons/education/petroleum.png' alt='/>
                    <span>
                        <h2><a href='/energyexplained/index.cfm?page=oil_home'>Oil: Crude &amp; Petroleum Products Explained</a></h2>
                        <p><em><a href='/energyexplained/index.cfm?page=gasoline_prices'>Gasoline Prices and Outlook</a></em></p>
                        <p><a href='/energyexplained/index.cfm?page=oil_home'><strong>See more petroleum topics &rsaquo;</strong></a></p>
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <img src='/global/includes/issuestrends/images/icon_faq.png' alt='/>
                    <span>
                        <h2><a href='/tools/faqs/'>FAQs</a></h2>
                        <p><em><a href='/tools/faqs/faq.cfm?id=45&t=8'>What are Mcf, Btu, and therms? How do I convert prices in Mcf to Btu's and therms?</a></em></p>
                        <p><a href='/tools/faqs/'><strong>See all petroleum FAQs &rsaquo;</strong></a></p>
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <img src='/global/includes/issuestrends/images/icon_kids.png' alt='/>
                    <span>
                        <h2><a href='/kids'>Energy Kids</a></h2>
                        <p><em><a href='/kids/energy.cfm?page=oil_home-basics'>How was oil formed?</a></em></p>
                        <p><a href='/kids/energy.cfm?page=nonrenewable_home-basics'><strong>See nonrenewable sources on Energy Kids &rsaquo;</strong></a></p>
                    </span>
                </div>
            </div>
        </div>
        <?php /*end Energy education section*/ ?>
    </div>  
    <?php include($_SERVER["DOCUMENT_ROOT"].'/global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>




