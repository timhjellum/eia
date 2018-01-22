<?php $locale = 'data'; ?>
	
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php include ('global/includes/eia_head_info.inc') ; ?>
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>
<body>
<?php /* Start of Outer Wrapper */ ?>
<div id="outerX">
  <?php /* EIA Header */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
  <?php /* Navigation Menu */ ?>
<?php include ('includes/subnav_petroleum.inc') ; ?>
  <?php /* Page/Body Content */ ?>
  <div class="pagecontent mr_temp2">
   <!--<span class="blue_side"><em>March 23, 2012</em>:  Interactive graphing has been added to the petroleum data tables, complete with zooming and high quality downloads and printouts.</span> -->
    <?php /* Start of Main Column */ ?>
    <div class="main_col">
      <p>Find statistics on crude oil, gasoline, diesel, propane, jet fuel, ethanol, and other liquid fuels.  
Click on the blue bars below for information on petroleum prices, crude reserves and production, refining and processing, imports/exports, stocks, and consumption/sales.  
</p>
      <span class="condaterange"><a class="no-border expandall">+ EXPAND ALL</a></span>
      <table class="contable">
        <?php /* BEGIN Summary Content ////////////////*/ ?>
        <thead id="summary">
          <tr>
            <th><a name="summary"></a><strong>Summary</strong></th>
            <th width="30%"><span class="right">Additional formats</span></th>
          </tr>
        </thead>
        <tr class="white_first">
          <td><a href="/dnav/pet/pet_sum_sndw_dcus_nus_w.htm"><strong>Weekly supply estimates &rsaquo;</strong></a><br />
            <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script>
            Production, refinery inputs and utilization, stocks, days of supply, 
            imports, exports, and product supplied estimates for crude oil and petroleum products by U.S., PAD District  <br />
            <em>weekly and 4-week average</em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><a href="/dnav/pet/pet_sum_snd_d_nus_mbbl_m_cur.htm"><strong>Supply and disposition</strong></a> <br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
		  Field production, net production, imports, net receipts, stock changes, net inputs, exports, and product supplied statistics for crude oil and petroleum products by U.S., PAD District<br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><a href="/dnav/pet/pet_sum_crdsnd_k_m.htm"><strong>U.S. crude oil supply &amp; disposition</strong></a><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			Detailed statistics for crude oil supply, disposition, and ending stocks. Includes statistics for commercial and Strategic Petroleum Reserve sectors <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><a href="/dnav/pet/pet_sum_mkt_dcu_nus_m.htm"><strong>Prices, sales volumes &amp; stocks by state</strong></a><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script>&nbsp; 
<span> <em>Annual  Release Date: June 1, 2016</em></span><br>
            U.S., PAD District, and state level data includes retail prices, prime supplier sales volumes and stocks  <br />
            </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Petroleum overview </strong><br />
         <div> 
              <script language="JavaScript" type="text/JavaScript" src="/totalenergy/data/monthly/txt/new_merheader.txt"></script> 
         </div>
<!--	        <em class="hideme">Release Date: January 28, 2013</em> <br />
            Petroleum production, consumption, trade, and stock change<br />
            <em>Monthly Energy Review </em> -->(
            <a href="/totalenergy/data/monthly/#petroleum" class="no-border">more on petroleum</a>)</td>
          <td><span class="right"><a href="/totalenergy/data/monthly/pdf/sec3_3.pdf" class="ico_pdf">PDF</a> <a href="/totalenergy/data/browser/csv.cfm?tbl=T03.01" class="ico_csv">CSV</a> <a href="/totalenergy/data/browser/xls.cfm?tbl=T03.01&amp;freq=m" class="ico_xls">XLS</a></span></td>
        </tr>
<?php /* Commented out as requested by Mike Maloney on April 4, 2012 by Tony Allen
        <tr>
          <td><strong>World Oil Balance</strong><br />
            World supply, demand, and stocks draw information <br />
            <em>International Petroleum Supply Report, annual</em></td>
          <td><span class="right"> <a href="/emeu/ipsr/t21.xls" class="ico_xls">XLS</a> </span></td>
        </tr>
*/ ?>
        <tr>
          <td><a href="http://tonto.eia.gov/cfapps/ipdbproject/IEDIndex3.cfm"><strong>Petroleum statistics by country </strong></a><br />
            <?php /*<em class="hideme">ReleaseRelease Date: Varies</em> <br />*/ ?>
            Query  detailed country and regional energy data supply, disposition<br />
            <em>annual, selected quarterly, monthly</em></td>
          <td>&nbsp;</td>
        </tr>
        <?php /* END Summary Content ////////////////*/ ?>
        <?php /* BEGIN Prices Content ////////////////*/ ?>
        <thead id="prices">
          <tr>
            <th><a name="prices"></a><strong>Prices</strong></th>
            <th><span class="right">Additional formats</span></th>
          </tr>
        </thead>
        <tr class="white_first">
          <td><strong><a href="/petroleum/gasdiesel/">Gasoline and diesel fuel update &rsaquo;</a></strong><br />
            <script language="JavaScript" type="text/JavaScript" src="/petroleum/gasdiesel/rdate_gdu.txt"></script>Prices of regular gasoline and on-highway diesel fuel by PAD District.<br />            
          <em>weekly</em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><p><strong><a href="/petroleum/heatingoilpropane/">Heating Oil and Propane Update &rsaquo;</a></strong><br />
		  <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsrshopp.txt"></script>
            Weekly heating oil and propane prices; October through March..<br />
            <em>Weekly</em></p></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><p><strong><a href="/dnav/pet/pet_pri_gnd_dcus_nus_w.htm">Weekly retail gasoline and on-highway diesel prices &rsaquo;</a></strong><br />
            <script language="JavaScript" type="text/JavaScript" src="/petroleum/gasdiesel/rdate_gdu.txt"></script>Gasoline prices by grade and formulation and diesel prices by sulfur content for U.S., PAD District, selected states and cities <br />
            <em>Weekly</em> </p></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Motor gasoline retail prices, U.S. city average&rsaquo;</strong>
            <div> 
              <script language="JavaScript" type="text/JavaScript" src="/totalenergy/data/monthly/txt/new_merheader.txt"></script> 
         </div>          
<!--            <em class="hideme">Release Date: January 28, 2013</em><br />
            U.S. city average, monthly from 1973&#8211;Current<br/>
            <em>Monthly Energy Review
            </em> --></td>
          <td><span class="right"><a href="/totalenergy/data/monthly/pdf/sec9_6.pdf " class="ico_pdf">PDF</a> <a href="/totalenergy/data/browser/csv.cfm?tbl=T09.04" class="ico_csv">CSV</a> <a href="/totalenergy/data/browser/xls.cfm?tbl=T09.04&amp;freq=m" class="ico_xls">XLS</a></span></td>
        </tr>
        <tr>
          <td><strong><a href="/totalenergy/data/annual/showtext.cfm?t=ptb0524">Motor gasoline retail prices   &rsaquo;</a></strong><br />
            <em class="hideme">Release Date: September 27, 2012</em>
            <br />
            U.S. city average, annual from 1949&#8211;current<br/>
            <em>Annual Energy Review
            </em></td>
          <td><span class="right"><a href="/totalenergy/data/annual/pdf/sec5_59.pdf" class="ico_pdf">PDF</a> <a href="/totalenergy/data/annual/xls/stb0524.xls" class="ico_xls">XLS</a></span></td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_pri_spt_s1_d.htm">Spot prices &rsaquo;</a></strong><br />
                <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script>
            Crude oil and petroleum products by selected U.S. and international areas <br />            
            <em>daily, weekly, monthly, annual</em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_pri_fut_s1_d.htm">Futures prices (NYMEX) &rsaquo;</a></strong><br />
              <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script>
            Crude oil, motor gasoline, heating oil, and propane<br />
          <em>daily, weekly, monthly, annual</em></td>
          <td>&nbsp;</td>
        </tr>
		
        <!--
		<tr>
          <td><strong>World Crude Oil Prices &rsaquo;</strong> <font class="boldred">- Discontinued</font><br />
            Selected crude types and World, U.S., OPEC, non-OPEC averages <br />            
            </td>
          <td>&nbsp;</td>
        </tr>
		-->
		
		
        <tr>
          <td><strong><a href="/dnav/pet/pet_pri_wfr_dcus_nus_w.htm">Weekly heating oil &amp; propane prices &rsaquo;</a></strong><br />
           <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsrshopp.txt"></script>
            Residential and wholesale prices of heating oil and propane by U.S., selected PAD Districts and states<br />
            <em>weekly, monthly from October - March</em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Refiner petroleum product prices by sales type</strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script>&nbsp; 
<span> <em>Annual  Release Date: June 1, 2016</em></span><br>
            Petroleum product retail and wholesale prices by U.S., PAD District and state <br />
            <ul>
              <li><a href="/dnav/pet/pet_pri_refoth_dcu_nus_m.htm">Refiner petroleum product prices by sales type &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_refmg_dcu_nus_m.htm">Refiner gasoline prices by grade, sales type &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_refmg2_d_nus_PTG_dpgal_m.htm">Refiner gasoline prices by formulation, grade, sales type &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Refiner, reseller, and retailer monthly prices</strong> &nbsp;<strong>(suspended)</strong><br />
  <span> <em>Monthly Release Date: May 2, 2011</em></span><br />
<span> <em>Annual  Release Date: August 6, 2010</em></span><br />
            Petroleum product retail and wholesale prices by U.S., PAD District and state <br />
            <ul>
              <li><a href="/dnav/pet/pet_pri_allmg_d_nus_PTA_dpgal_m.htm">Gasoline prices by formulation, grade, sales type &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_dist_dcu_nus_m.htm">No. 2 distillate prices by sales type and selected states &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_prop_dcu_nus_m.htm">Propane (consumer grade) prices by sales type &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_resid_dcu_nus_m.htm">Residual fuel oil prices by sales type &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
		
		
		
        <tr>
          <td><strong><a href="/dnav/pet/pet_pri_rac2_dcu_nus_m.htm">Refiner acquisition cost of crude oil &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script>&nbsp; 
<span> <em>Annual  Release Date: June 1, 2016</em></span><br>
          Domestic, imported, and composite costs by U.S. and PAD Districts <br /></td>
          <td>&nbsp;</td>
        </tr>
		
		
        <tr>
          <td><strong>Domestic crude oil first purchase prices</strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script>&nbsp; 
<span> <em>Annual  Release Date: June 1, 2016</em></span><br>
<ul>
              <li><a href="/dnav/pet/pet_pri_dfp1_k_m.htm">By area &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_dfp2_k_m.htm">By crude stream &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_dfp3_k_m.htm">By API gravity &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>F.O.B. costs of imported crude oil</strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script>&nbsp; 
<span> <em>Annual  Release Date: June 1, 2016</em></span><br>
<ul>
              <li><a href="/dnav/pet/pet_pri_imc1_k_m.htm">By area &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_imc2_k_m.htm">By crude stream &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_imc3_k_m.htm">By API gravity &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Landed costs of imported crude oil</strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script>&nbsp; 
<span> <em>Annual  Release Date: June 1, 2016</em></span><br>
<ul>
              <li><a href="/dnav/pet/pet_pri_land1_k_m.htm">By area &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_land2_k_m.htm">By crude stream &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pri_land3_k_m.htm">By API gravity &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/outlooks/steo/realprices/">Real U.S. petroleum prices (past &amp; projected) &rsaquo;</a></strong><br />
		  <script language="JavaScript" type="text/JavaScript" src="/outlooks/steo/includes/rdate_steo.txt"></script>
           Real and nominal U.S. prices for gasoline, heating oil, diesel fuel, and imported crude oil <br />
            <em>monthly, annual; past and projected values</em></td>
          <td>&nbsp;</td>
        </tr>
        
        <?php /* END Prices Content ////////////////*/ ?>
        <?php /* BEGIN Crude Reserves and Production Content ////////////////*/ ?>
        <thead id="crude">
          <tr>
            <th><a name="crude"></a><strong>Crude reserves and production</strong></th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tr class="white_first">
          <td><strong><a href="/dnav/pet/pet_crd_crpdn_adc_mbbl_m.htm">Crude oil production &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script> 
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
		  by U.S., PAD District and state <br /></td>
          <td>&nbsp;</td>
        </tr>
		
		<tr>
          <td><strong><a href="/dnav/pet/pet_crd_api_adc_mbblpd_m.htm">Crude Oil and Lease Condensate Production by API Gravity</a> &rsaquo;</strong><br />
		  Monthly crude oil production by API gravity data collected on Form EIA-914 (Monthly Crude Oil, Lease Condensate, and Natural Gas Production Report)
            <em>monthly</em></td>
          <td>&nbsp;</td>
        </tr>
		
<tr>
          <td><strong><a href="/energyexplained/images/charts/u.s.tight_oil_production.jpg" class="lightbox">Tight oil production estimates by play</a> &rsaquo;</strong><br />
            <em class="hideme">Release Date: </em><em>monthly</em><br />
            Estimated monthly production derived from state administrative data <br />
          <em>monthly</em></td>
          <td><span class="right"><a href="/energyexplained/data/U.S. tight oil production.xlsx" class="ico_xls">XLS</a></span></td>
        </tr>		
        <tr>
          <td><strong>Proved reserves, reserves changes, and production</strong><br />
            <em class="hideme">Release Date: December 14, 2016</em> <br />
            <ul>
              <li><a href="/dnav/pet/pet_crd_pres_dcu_NUS_a.htm">Crude oil</a><a href="/emeu/international/ngasprie.html"></a></li>
              <li><a href="/dnav/pet/pet_crd_cplc_dcu_NUS_a.htm">Crude oil plus lease condensate</a></li>
          </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/PET_CRD_NPROD_DCU_NUS_A.htm">Proved nonproducing reserves &rsaquo;</a></strong><br />
            <em class="hideme">Release Date: December 14, 2016</em><br />
            Reported proved reserves of crude oil, lease condensate, and wet natural gas, after lease separation by U.S., region, and state <br /> <em>annual</em></td>
          <td>&nbsp;</td>
        </tr>
        
        <tr>
          <td><strong><a href="/dnav/pet/pet_crd_gom_s1_a.htm">Gulf of Mexico Federal Offshore production &rsaquo;</a></strong><br />
            <em class="hideme">Release Date: November 19, 2015</em><br />
            Production of crude oil, natural gas wet after lease separation, natural gas liquids, dry natural gas, and lease condensate <br /> <em>annual</em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_crd_drill_s1_m.htm">Crude oil and natural gas drilling activity &rsaquo;</a></strong><br />
            <script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script>
            Rotary rigs in operation, footage drilled, and active well service rig counts <br /><em>monthly, annual </em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_crd_wellend_s1_m.htm">Crude oil and natural gas exploratory and development wells  &rsaquo;</a></strong><br />
  <script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script>
            Exploratory and development wells drilled for crude oil, natural gas and dry holes; total footage drilled <br /><em>monthly, annual </em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_crd_wellfoot_s1_a.htm">Footage drilled for crude oil and natural gas wells  &rsaquo;</a></strong><br />
  <script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script>
            Footage drilled by exploratory and development wells and by crude oil, natural gas, and dry holes <br /> <em>annual</em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_crd_welldep_s1_a.htm">Average depth of crude oil and natural gas wells  &rsaquo;</a></strong><br />
  <script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script>
            Average depth of wells drilled by exploratory and development wells and by crude oil, natural gas, and dry holes <br /> <em>annual</em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_crd_wellcost_s1_a.htm">Costs of crude oil and natural gas wells drilled &rsaquo;</a></strong><br />
  <script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script>
            Per well and per foot costs of crude oil, natural gas, and dry hole wells <br /> <em>annual</em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_crd_seis_s1_m.htm">Maximum U.S. active seismic crew counts &rsaquo;</a></strong><br />
  <script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script>
            by onshore/offshore/Alaska and dimension<br /><em>monthly </em></td>
          <td>&nbsp;</td>
        </tr>
		
		<tr>
		<td><strong><a href="/petroleum/production/">Monthly Crude Oil and Natural Gas Production</a></strong><br>                
        <script language="JavaScript" type="text/JavaScript" src="/petroleum/production/includes/rdate_914.txt"></script>
		 Monthly crude oil and natural gas production data collected on Form EIA-914 (Monthly Crude Oil, Lease Condensate, and Natural Gas Production Report)<br>                
         <em>monthly</em></td>
		   <td>&nbsp;</td>
		</tr>
		
		
		
        <tr>
          <td><a href="/naturalgas/archive/cost_indices_equipment_production/current/coststudy.html"><strong>Oil   and gas lease equipment and operating costs 1994 Through 2009</strong></a><br />            
          <em class="hideme">Release Date: September 28, 2010</em><br />
          Regional and national oil and gas equipping and operating cost trends. <br />          <em>annual</em><br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>                  
          <td><a href="/naturalgas/fieldcode/"><strong>Oil and gas county code master list</strong></a><br />     

<script language="JavaScript" type="text/JavaScript" src="/naturalgas/fieldcode/includes/rdate_fcml.txt"></script>       
Comprehensive listing of U.S. oil and gas field names.<br />
<em>annual</em><br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/petroleum/wells/">Distribution and production of oil &amp; gas wells &rsaquo;</a></strong><br />
            <em class="hideme">Release Date: December 11, 2017</em><br />
            State level tables and graphs <br /><em>annual</em></td>
          <td>&nbsp;</td>
        </tr>
        <?php /* END Crude Reserves and Production Content ////////////////*/ ?>
        <?php /* BEGIN Refining and Processing Content////////////////*/ ?>
        <thead id="refining">
          <tr>
            <th><a name="refining"></a><strong>Refining and processing</strong></th>
            <th><span class="right">Additional formats</span></th>
          </tr>
        </thead>
        <tr class="white_first">
          <td><strong><a href="/dnav/pet/pet_pnp_wiup_dcu_nus_w.htm">Weekly inputs &amp; utilization  &rsaquo;</a></strong><br />
<script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script>
            Refiner inputs, operable capacity, percent utilization, and refinery and blender net inputs by U.S. and PAD District <br />
            <em>weekly, 4-week average</em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Weekly production</strong><br />
      <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script>
            Production of petroleum products by U.S. and PAD District <br />
            <em>weekly, 4-week average</em>
            <ul>
              <li><a href="/dnav/pet/pet_pnp_wprodrb_dcu_nus_w.htm">Refiner &amp; blender &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_wprodr_s1_w.htm">Refiner &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_wprodb_s1_w.htm">Blender &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_wprode_s1_w.htm">Ethanol plant &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Net input</strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Net input of crude oil and petroleum products by PAD and Refining Districts <br />
            <ul>
              <li><a href="/dnav/pet/pet_pnp_inpt_dc_nus_mbbl_m.htm">Refiner & blender &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_inpt2_dc_nus_mbbl_m.htm">Refiner &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_inpt3_dc_nus_mbbl_m.htm">Blender &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_pnp_unc_dcu_nus_m.htm">Refinery utilization and capacity &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Gross input to crude distillation units, operable capacity and utilization rate by PAD and Refining Districts <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_pnp_crq_dcu_nus_m.htm">Crude oil input qualities &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
						
            Crude oil sulfur content and API</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_pnp_dwns_dc_nus_mbblpd_m.htm">Downstream processing of fresh feed input &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
					
            Catalytic cracking, catalytic hydrocracking, and delayed and fluid coking by PAD and Refining Districts <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Net production</strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>

            Net production of finished petroleum products by PAD and Refining Districts <br />
            <ul>
              <li><a href="/dnav/pet/pet_pnp_refp_dc_nus_mbbl_m.htm">Refiner & blender &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_refp2_dc_nus_mbbl_m.htm">Refiner &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_refp3_dc_nus_mbbl_m.htm">Blender &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_oxy_dc_nus_mbbl_m.htm">Oxygenate (ethanol and MTBE) &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_pnp_pct_dc_nus_pct_m.htm">Refinery yield &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Percent yield of petroleum products by PAD and Refining Districts <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td colspan="2"><strong>Refinery Capacity</strong><br />
            <em class="hideme">Release Date: June 21, 2017</em><br />
            By U.S., PAD District and state <br /> <em>annual</em>
            <ul>
              <li><a href="/dnav/pet/pet_pnp_cap1_dcu_nus_a.htm">Number and capacity &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_capprod_dcu_nus_a.htm">Production capacity &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_capchg_dcu_nus_a.htm">Downstream charge capacity &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_capwork_dcu_nus_a.htm">Working storage capacity &rsaquo;</a> (historical data 1982 - 2010)</li>
              <li><a href="/dnav/pet/pet_pnp_capshell_dcu_nus_a.htm">Shell storage capacity &rsaquo;</a> (historical data 1982 - 2010)</li>
              <li><a href="/dnav/pet/pet_pnp_caprec_dcu_nus_a.htm">Receipts of crude oil by method of transport &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_capfuel_dcu_nus_a.htm">Fuel consumed at refineries &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_pnp_feedng_k_a.htm">Natural gas used as feedstock for hydrogen production &rsaquo;</a></li>
              <li><a href="/petroleum/refinerycapacity/">Refinery capacity report</a></li>
              <li>Refinery capacity data by individual refinery as of January 1, 2017 <span class="right"><a href="/petroleum/refinerycapacity/refcap17.xls" class="ico_xls">XLS</a></span></li>
              <li><a href="/totalenergy/data/annual/showtext.cfm?t=ptb0509">Refinery capacity and utilization data, annual 1949 - 2011 &rsaquo;</a> <span class="right"><a href="/totalenergy/data/annual/pdf/sec5_23.pdf" class="ico_pdf">PDF</a> <a href="/totalenergy/data/annual/xls/stb0509.xls" class="ico_xls">XLS</a></span></li>
            </ul></td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_pnp_gp_dc_nus_mbbl_m.htm">Natural gas plant field production &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Net production of petroleum products by PAD and Refining Districts <br /></td>
          <td>&nbsp;</td>
        </tr>
		
		        <tr>
          <td><strong><a href="/petroleum/ethanolcapacity/">U.S. fuel ethanol plant production capacity &rsaquo;</a></strong><br />
            <span> <em>Release Date:  June 20, 2017</em></span><br>
The U.S. Energy Information Administration released its annual fuel ethanol production capacity report. The new report contains data for all operating U.S. fuel ethanol production plants as of January 1, 2017. 
		
			 <br />
<em> annual</em>
</td>
          <td>&nbsp;</td>
        </tr>
		
		
		 <tr>
          <td><strong><a href="/biofuels/biodiesel/production/">Monthly biodiesel production
 &rsaquo;</a></strong><br />
   <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/biofuels/biodiesel/production/includes/rdate_biodiesel.txt"></script>
            The U.S. Energy Information Administration release showing national and regional monthly biodiesel production.  In addition to biodiesel production, data included producer sales, producer stocks, and feedstock inputs.  <br />

</td>
          <td>&nbsp;</td>
        </tr>
		
		
		
		
        <?php /* END Refining and Processing Content ////////////////*/ ?>
        <?php /* BEGIN Imports/Exports & Movements Data Content ////////////////*/ ?>
        <thead id="imports">
          <tr>
            <th><a name="imports"></a><strong>Imports/exports &amp; movements</strong></th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tr class="white_first">
          <td><strong><a href="/dnav/pet/pet_move_wkly_dc_NUS-Z00_mbblpd_w.htm">Weekly imports &amp; exports &rsaquo;</a></strong><br />
         <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script>
            Crude oil and petroleum products by U.S. and PAD District <br /><em>weekly, 4-week average</em> </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_wimpc_s1_w.htm">Weekly preliminary crude imports by country of origin &rsaquo;</a></strong><br />
          <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script>
            U.S. crude oil imports <br /><em>weekly, 4-week average</em> </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_imp_dc_NUS-Z00_mbbl_m.htm">Imports by area of entry &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
						
            Crude oil and petroleum products by U.S., PAD District</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_imp2_dc_R10-Z00_mbbl_m.htm">Imports by processing area &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Crude oil and petroleum products by U.S., PAD District</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_impcus_a2_nus_ep00_im0_mbbl_m.htm">U.S. imports by country of origin &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Crude oil and petroleum products by country of origin</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_impcp_a2_r10_ep00_ip0_mbbl_m.htm">PAD District imports by country of origin &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Crude oil and unfinished oils by country of origin <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/petroleum/imports/companylevel/">Company level imports &rsaquo;</a></strong><br />
             <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
            Crude oil and total petroleum imports by the top 15 countries (monthly) and a summary of crude oil imports by company from the Persian Gulf (year-to-date).</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_res_dc_nus-Z00_mbbl_m.htm">Residual fuel imports by state of entry &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			by U.S., PAD District, state <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_ipct_k_m.htm">Percentages of total imported crude oil by API gravity &rsaquo;</a></strong><br />
           <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script> 
<em>Annual  Release Date: June 1, 2016</em>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_exp_dc_NUS-Z00_mbbl_m.htm">Exports &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            by U.S., PAD District <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_expc_a_EP00_EEX_mbbl_m.htm">Exports by destination &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            by country of export destination <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_neti_a_EP00_IMN_mbblpd_m.htm">U.S. net imports by country &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Crude oil and petroleum products by country and region </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Movements between PAD Districts</strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            <ul>
              <li><a href="/dnav/pet/pet_move_ptb_dc_R20-R10_mbbl_m.htm">By pipeline, tanker, barge, and rail &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_move_pipe_dc_R20-R10_mbbl_m.htm">By pipeline &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_move_tb_dc_R20-R10_mbbl_m.htm">By tanker and barge  &rsaquo;</a></li>
 		      <li><a href="/dnav/pet/PET_MOVE_RAIL_A_EPC0_RAIL_MBBL_M.htm">By rail &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
		
		 <tr>
          <td><strong><a href="/dnav/pet/PET_MOVE_RAILNA_A_EPC0_RAIL_MBBL_M.htm">Movements of Crude Oil and Selected Products by Rail</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            </td>
          <td>&nbsp;</td>
        </tr>
		
		
        <tr>
          <td><strong><a href="/dnav/pet/pet_move_netr_d_r10-z0p_VNR_mbbl_m.htm">Net receipts of crude oil and petroleum products by pipeline, tanker, barge, and rail &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>F.O.B. costs of imported crude oil</strong><br />
         <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script>&nbsp; 
<span> <em>Annual  Release Date: June 1, 2016</em></span>
        
            <ul>
              <li><a href="/dnav/pet/pet_move_imc1_k_m.htm">By area &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_move_imc2_k_m.htm">By crude stream &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_move_imc3_k_m.htm">By API gravity  &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Landed costs of imported crude oil</strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script>&nbsp; 
<span> <em>Annual  Release Date: June 1, 2016</em></span>

            <ul>
              <li><a href="/dnav/pet/pet_move_land1_k_m.htm">By area &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_move_land2_k_m.htm">By crude stream &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_move_land3_k_m.htm">By API gravity  &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <!--<tr>
          <td><strong>International Imports and Exports</strong><br />
            by country, region and country groups
            <ul>
              <li><a href="http://www.eia.gov/cfapps/ipdbproject/IEDIndex3.cfm?tid=5&pid=54&aid=3">International imports data, annual &rsaquo;</a></li>
              <li><a href="http://www.eia.gov/cfapps/ipdbproject/IEDIndex3.cfm?tid=50&pid=76&aid=3">International imports data, monthly and quarterly &rsaquo;</a></li>
              <li><a href="http://www.eia.gov/cfapps/ipdbproject/IEDIndex3.cfm?tid=5&pid=54&aid=4">International exports data, annual &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr> -->
        <?php /* END Imports/Exports & Movements Data Content ////////////////*/ ?>
        <?php /* BEGIN Stocks Content ////////////////*/ ?>
        <thead id="stocks">
          <tr>
            <th><a name="stocks"></a><strong>Stocks</strong></th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tr class="white_first">
          <td><strong><a href="/dnav/pet/pet_stoc_wstk_dcu_nus_w.htm">Weekly stocks &rsaquo;</a></strong><br />
            <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script>
            Crude oil and petroleum products by U.S. and PAD District<br /><em>weekly</em>
							
			</td>
          <td>&nbsp;</td>
        </tr>
		
		 <tr>
          <td><strong><a href="/dnav/pet/pet_stoc_ts_dcu_nus_m.htm">Stocks of motor gasoline, distillate fuel oil, residual fuel oil, propane, and propylene &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Stocks of selected petroleum products by U.S., PAD District, and sub-PAD District<br />
				</td>
          <td>&nbsp;</td>
        </tr>
		
		
		
        <tr>
          <td><strong><a href="/dnav/pet/pet_stoc_typ_d_nus_SAE_mbbl_m.htm">Stocks by type &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Crude oil and petroleum products by U.S., PAD District <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_stoc_st_dc_NUS_mbbl_m.htm">Refinery, bulk terminal, and natural
            gas plant stocks by state &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Crude oil and petroleum products <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_stoc_ref_dc_nus_mbbl_m.htm">Refinery stocks &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            Crude oil and petroleum products by U.S., PAD and Refining District <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_stoc_cu_s1_m.htm">Crude oil stocks at tank farms & pipelines &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
            by U.S., PAD District, and Cushing, Oklahoma <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_stoc_gp_dcu_nus_m.htm">Natural gas plant stocks &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
			
Petroleum products by U.S., PAD and Refining District <br />
</td>
          <td>&nbsp;</td>
        </tr>

        <tr>
          <td><strong><a href="/petroleum/storagecapacity/">Working and net available shell storage capacity &rsaquo;</a> </strong><br />
            <em class="hideme">Release Date: November 30, 2017</em><br />
            Working and net available shell storage capacity as of March 31, 2017 is the U.S. Energy Information Administration's (EIA) report containing semi-annual storage capacity data. It includes three tables detailing working and net available shell storage capacity by facility type, product, and PAD District as of March 31. <br />
            <em> semi-annual</em></td>
          <td>&nbsp;</td>
        </tr>
        <?php /* END Stocks Content ////////////////*/ ?>
        <?php /* BEGIN Consumption/Sales Content ////////////////*/ ?>
        <thead id="consumption">
          <tr>
            <th><a name="consumption"></a><strong>Consumption/sales</strong></th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tr class="white_first">
          <td><strong><a href="/dnav/pet/pet_cons_wpsup_k_w.htm">U.S. weekly product supplied &rsaquo;</a></strong><br />
            <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script>
            Measures the disappearance of petroleum products from primary sources; approximately represents consumption of petroleum products. <br /><em>weekly, 4-week average</em></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_cons_psup_dc_nus_mbbl_m.htm">Product supplied &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script>
			<em>Annual&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
						
            by U.S., PAD District <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong><a href="/dnav/pet/pet_cons_prim_dcu_nus_m.htm">Prime supplier sales volumes &rsaquo;</a></strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/prime/includes/rdate_psr.txt"></script>
            &nbsp; <span> <em>Annual  Release Date: April 1, 2013</em></span><br>
            Sales of petroleum products by refiners, gas plant operators, importers and large inter-state distributors into the final local markets of consumption by U.S., PAD District, State <br /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Refiner sales volumes</strong><br />
            <em>Monthly&nbsp;</em><script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script>            &nbsp; 
<span> <em>Annual  Release Date: June 1, 2016</em></span><br>
            by U.S., PAD District, state and sales type<br />
            <ul>
              <li><a href="/dnav/pet/pet_cons_refmg_d_nus_VTR_mgalpd_m.htm">Motor gasoline &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_cons_refres_d_nus_VTR_mgalpd_m.htm">Residual fuel oil and No. 4 fuel oil &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_cons_refoth_d_nus_VTR_mgalpd_m.htm">Other products &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Sales of fuel oil and kerosene</strong><br />
<script language="JavaScript" type="text/JavaScript" src="/petroleum/fueloilkerosene/includes/rdate_foks.txt"></script>
            by U.S., PAD District, state <br /> <em>annual</em>
            <ul>
              <li><a href="/dnav/pet/pet_cons_821dst_dcu_nus_a.htm">Distillate by end use &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_cons_821rsd_dcu_nus_a.htm">Residual fuel oil by end use &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_cons_821ker_dcu_nus_a.htm">Kerosene by end use &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_cons_821use_dcu_nus_a.htm">Distillate and kerosene by end use &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><strong>Adjusted sales of fuel oil and kerosene</strong><br />
<script language="JavaScript" type="text/JavaScript" src="/petroleum/fueloilkerosene/includes/rdate_foks.txt"></script>
            by U.S., PAD District, state <br /> <em>annual</em>
            <ul>
              <li><a href="/dnav/pet/pet_cons_821dsta_dcu_nus_a.htm">Distillate by end use &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_cons_821rsda_dcu_nus_a.htm">Residual fuel oil by end use &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_cons_821kera_dcu_nus_a.htm">Kerosene by end use &rsaquo;</a></li>
              <li><a href="/dnav/pet/pet_cons_821usea_dcu_nus_a.htm">Distillate and kerosene by end use &rsaquo;</a></li>
            </ul></td>
          <td>&nbsp;</td>
        </tr>
        <?php /* END Consumption/Sales Content ////////////////*/ ?>
      </table>
      <div class="clear">&nbsp;</div>
      <?php /* Feature Example */ ?>
      <a name="weekly release"></a><div class="weeklies">
        <span>
          <h2>Regular Weekly Releases*</h2>
          <h3>Monday</h3>
          <p><a href="/petroleum/gasdiesel/">Gasoline and Diesel Fuel Update &rsaquo;</a><br />
  <i>Usually Monday by 5:00 p.m. Eastern Time</i></p>

          <h3>Wednesday</h3>
<p><a href="/oil_gas/petroleum/data_publications/weekly_petroleum_status_report/wpsr.html">Weekly Petroleum Status Report &rsaquo;</a><br />
  <i> 10:30 a.m. Eastern Time</i></p>
<p><a href="/petroleum/weekly/">This Week in Petroleum &rsaquo;</a><br />
  <i>After 1:00 p.m. Eastern Time</i></p>
<p class="no-border"><a href="/petroleum/heatingoilpropane/">Heating Oil and Propane Update &rsaquo;</a><br />
  <i>After 1:00 p.m. Eastern Time (Oct - March)</i></p>
            <p class="no-border"><i>*No releases: Monday, Tuesday, or Friday. Releases change on weeks with Federal holidays.</i></p>
        </span>
      </div>
	  <?php /* Feature Example */ ?>
      <?php /* End of Main Column */ ?>
    </div>
    <div class="side_col right">
      <?php /* Start of Side Column */ ?>
      <?php include ('includes/side_data.inc') ; ?>
      <?php /* End of Side Column */ ?>
    </div>
  </div>
  <?php /*/ Page/Body Content */ ?>
  <?php include ('global/includes/eia_footer.inc') ; ?>
</div>
<?php /*/ End of Outer Wrapper */ ?>
</body>
</html>