<?php $locale = 'data'; ?><!DOCTYPE html>
<html>
<head>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include "..global/includes/titling.inc"; ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('./includes/sub-navigation.inc'); ?>
<div class="l-row">
<div class="l-full-width-column">
<p>Find statistics on crude oil, gasoline, diesel, propane, jet fuel, ethanol, and other liquid fuels. Click on the blue
bars below for information on petroleum prices, crude reserves and production, refining and processing, imports/exports,
stocks, and consumption/sales.
</p>
<div id="accordion">
<div class="accordion-expand-all"><a href="#">+ Expand all</a></div>
<h2 class="accordion-panel" id="summary"><div class="expand-collapse-container"></div><a name="summary"></a>Summary<div class="right">Additional formats</div></h2>
<div class="accordion-content">
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_sum_sndw_dcus_nus_w.htm">Weekly supply estimates</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="../petroleum/supply/weekly/includes/rdate_wpsr.txt"></script></li>
<li>Production, refinery inputs and utilization, stocks, days of supply, imports, exports, and product supplied estimates for crude oil and petroleum products by U.S., PAD District </li>
<li class="date">weekly and 4-week average</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_sum_snd_d_nus_mbbl_m_cur.htm">Supply and disposition</a> </li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Field production, net production, imports, net receipts, stock changes, net inputs, exports, and product supplied statistics for crude oil and petroleum products by U.S., PAD District</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_sum_crdsnd_k_m.htm">U.S. crude oil supply &amp; disposition</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Detailed statistics for crude oil supply, disposition, and ending stocks. Includes statistics for commercial and Strategic Petroleum Reserve sectors </li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_sum_mkt_dcu_nus_m.htm">Prices, sales volumes &amp; stocks by state</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script></li>
<li class="date">Annual Release Date: June 1, 2016</li>
<li>U.S., PAD District, and state level data includes retail prices, prime supplier sales volumes and stocks</li>
</ul>
<ul>
<li class="sub-header">Petroleum overview </li>
<li><script language="JavaScript" type="text/JavaScript" src="/totalenergy/data/monthly/txt/new_merheader.txt"></script>
<!--	        <li class="hide date">Release Date: January 28, 2013</li>
Petroleum production, consumption, trade, and stock change</li>
<li class="date">Monthly Energy Review -->(<a href="/totalenergy/data/monthly/#petroleum" class="no-border">more on petroleum</a>)
<div class="clear-all">
<a href="/totalenergy/data/monthly/pdf/sec3_3.pdf"><i class="ico pdf">PDF</i></a>
<a href="/totalenergy/data/browser/csv.cfm?tbl=T03.01"><i class="ico csv">CSV</i></a>
<a href="/totalenergy/data/browser/xls.cfm?tbl=T03.01&amp;freq=m"><i class="ico xls">XLS</i></a>
</div></li>
</ul>
<ul>
<li class="sub-header"><a href="http://tonto.eia.gov/cfapps/ipdbproject/IEDIndex3.cfm">Petroleum statistics by country </a></li>
<li>Query detailed country and regional energy data supply, disposition</li>
<li class="date">annual, selected quarterly, monthly</li>
</ul>
</div>
<h2 class="accordion-panel" id="prices"><div class="expand-collapse-container"></div><a name="prices"></a>Prices<div class="right">Additional formats</div></h2>
<div class="accordion-content">
<ul>
<li class="sub-header"><a href="/petroleum/gasdiesel/">Gasoline and diesel fuel update</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/gasdiesel/rdate_gdu.txt"></script>Prices of regular gasoline and on-highway diesel fuel by PAD District.</li>
<li class="date">weekly</li>
</ul>
<ul>
<li class="sub-header"><a href="/petroleum/heatingoilpropane/">Heating Oil and Propane Update</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsrshopp.txt"></script></li>
<li>Weekly heating oil and propane prices; October through March..</li>
<li class="date">Weekly</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pri_gnd_dcus_nus_w.htm">Weekly retail gasoline and on-highway diesel prices</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/gasdiesel/rdate_gdu.txt"></script>Gasoline prices by grade and formulation and diesel prices by sulfur content for U.S., PAD District, selected states and cities </li>
<li class="date">Weekly</li>
</ul>
<ul>
<li class="sub-header">Motor gasoline retail prices, U.S. city average&rsaquo;</li>
<li><script language="JavaScript" type="text/JavaScript" src="/totalenergy/data/monthly/txt/new_merheader.txt"></script>
<!--
<li class="hide date">Release Date: January 28, 2013</li>
U.S. city average, monthly from 1973&#8211;Current</div>
<li class="date">Monthly Energy Review
-->
<div class="clear-all">
<a href="/totalenergy/data/monthly/pdf/sec9_6.pdf "><i class="ico pdf">PDF</i></a>
<a href="/totalenergy/data/browser/csv.cfm?tbl=T09.04"><i class="ico csv">CSV</i></a>
<a href="/totalenergy/data/browser/xls.cfm?tbl=T09.04&amp;freq=m"><i class="ico xls">XLS</i></a>
</div></li>
</ul>
<ul>
<li class="sub-header"><a href="/totalenergy/data/annual/showtext.cfm?t=ptb0524">Motor gasoline retail prices </a></li>
<li class="hide date">Release Date: September 27, 2012</li>
<li>U.S. city average, annual from 1949&#8211;current</li>
<li class="date">Annual Energy Review
<div class="clear-all">
<a href="/totalenergy/data/annual/pdf/sec5_59.pdf"><i class="ico pdf">PDF</i></a>
<a href="/totalenergy/data/annual/xls/stb0524.xls"><i class="ico xls">XLS</i></a>
</div>
</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pri_spt_s1_d.htm">Spot prices</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script></li>
<li>Crude oil and petroleum products by selected U.S. and international areas </li>
<li class="date">daily, weekly, monthly, annual</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pri_fut_s1_d.htm">Futures prices (NYMEX)</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script></li>
<li>Crude oil, motor gasoline, heating oil, and propane</li>
<li class="date">daily, weekly, monthly, annual</li>
</ul>
<!--
<ul>
<li class="sub-header">World Crude Oil Prices <font class="boldred">- Discontinued</font></li>
Selected crude types and World, U.S., OPEC, non-OPEC averages </li></li>
</ul>
-->
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pri_wfr_dcus_nus_w.htm">Weekly heating oil &amp; propane prices</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsrshopp.txt"></script></li>
<li>Residential and wholesale prices of heating oil and propane by U.S., selected PAD Districts and states</li>
<li class="date">weekly, monthly from October - March</li>
</ul>
<ul>
<li class="sub-header">Refiner petroleum product prices by sales type</li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script></li>
<li class="date">Annual Release Date: June 1, 2016</li>
<li>Petroleum product retail and wholesale prices by U.S., PAD District and state
<ul>
<li><a href="/dnav/pet/pet_pri_refoth_dcu_nus_m.htm">Refiner petroleum product prices by sales type</a></li>
<li><a href="/dnav/pet/pet_pri_refmg_dcu_nus_m.htm">Refiner gasoline prices by grade, sales type</a></li>
<li><a href="/dnav/pet/pet_pri_refmg2_d_nus_PTG_dpgal_m.htm">Refiner gasoline prices by formulation, grade, sales type</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header">Refiner, reseller, and retailer monthly prices (suspended)</li>
<li class="date">Monthly Release Date: May 2, 2011</li>
<li class="date">Annual Release Date: August 6, 2010</li>
<li>Petroleum product retail and wholesale prices by U.S., PAD District and state
<ul>
<li><a href="/dnav/pet/pet_pri_allmg_d_nus_PTA_dpgal_m.htm">Gasoline prices by formulation, grade, sales type</a></li>
<li><a href="/dnav/pet/pet_pri_dist_dcu_nus_m.htm">No. 2 distillate prices by sales type and selected states</a></li>
<li><a href="/dnav/pet/pet_pri_prop_dcu_nus_m.htm">Propane (consumer grade) prices by sales type</a></li>
<li><a href="/dnav/pet/pet_pri_resid_dcu_nus_m.htm">Residual fuel oil prices by sales type</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pri_rac2_dcu_nus_m.htm">Refiner acquisition cost of crude oil</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script>
<li class="date">Annual Release Date: June 1, 2016</li>
<li>Domestic, imported, and composite costs by U.S. and PAD Districts</li>
</ul></li>
</ul>
<ul>
<li class="sub-header">Domestic crude oil first purchase prices</li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script></li>
<li class="date">Annual Release Date: June 1, 2016
<ul>
<li><a href="/dnav/pet/pet_pri_dfp1_k_m.htm">By area</a></li>
<li><a href="/dnav/pet/pet_pri_dfp2_k_m.htm">By crude stream</a></li>
<li><a href="/dnav/pet/pet_pri_dfp3_k_m.htm">By API gravity</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header">F.O.B. costs of imported crude oil</li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script></li>
<li class="date">Annual Release Date: June 1, 2016
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pri_imc1_k_m.htm">By area</a></li>
<li><a href="/dnav/pet/pet_pri_imc2_k_m.htm">By crude stream</a></li>
<li><a href="/dnav/pet/pet_pri_imc3_k_m.htm">By API gravity</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header">Landed costs of imported crude oil</li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script></li>
<li class="date">Annual Release Date: June 1, 2016
<ul>
<li><a href="/dnav/pet/pet_pri_land1_k_m.htm">By area</a></li>
<li><a href="/dnav/pet/pet_pri_land2_k_m.htm">By crude stream</a></li>
<li><a href="/dnav/pet/pet_pri_land3_k_m.htm">By API gravity</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header"><a href="/outlooks/steo/realprices/">Real U.S. petroleum prices (past &amp; projected)</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/outlooks/steo/includes/rdate_steo.txt"></script></li>
<li>Real and nominal U.S. prices for gasoline, heating oil, diesel fuel, and imported crude oil </li>
<li class="date">monthly, annual; past and projected values</li>
</ul>
</div>
<h2 class="accordion-panel" id="prices"><div class="expand-collapse-container"></div><a name="crude"></a>Crude Reserves and Production<div class="right">Additional formats</div></h2>
<div class="accordion-content">
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_crd_crpdn_adc_mbbl_m.htm">Crude oil production</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>by U.S., PAD District and state </li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_crd_api_adc_mbblpd_m.htm">Crude Oil and Lease Condensate Production by API Gravity</a>                   </li>
<li>Monthly crude oil production by API gravity data collected on Form EIA-914 (Monthly Crude Oil, Lease Condensate, and Natural Gas Production Report)</li>
<li class="date">Monthly</li>
</ul>
<ul>
<li class="sub-header">Proved reserves, reserves changes, and production</li>
<li class="hide date">Release Date: December 14, 2016
<ul>
<li><a href="/dnav/pet/pet_crd_pres_dcu_NUS_a.htm">Crude oil</a></li>
<li><a href="/dnav/pet/pet_crd_cplc_dcu_NUS_a.htm">Crude oil plus lease condensate</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/PET_CRD_NPROD_DCU_NUS_A.htm">Proved nonproducing reserves</a></li>
<li class="hide date">Release Date: December 14, 2016</li>
<li>Reported proved reserves of crude oil, lease condensate, and wet natural gas, after lease separation by U.S., region, and state </li>
<li class="date">annual</li>
</ul>
<ul>
<li class="sub-header"><a href="/energyexplained/data/U.S. tight oil production.xlsx">Tight oil production estimates</a></li>
<li class="hide date">Release Date: li class="date">Monthly</li>
<li>Estimated monthly production derived from state administrative data </li>
<li class="date">Monthly</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_crd_gom_s1_a.htm">Gulf of Mexico Federal Offshore production</a></li>
<li class="hide date">Release Date: November 19, 2015</li>
<li>Production of crude oil, natural gas wet after lease separation, natural gas liquids, dry natural gas, and lease condensate </li>
<li class="date">annual</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_crd_drill_s1_m.htm">Crude oil and natural gas drilling activity</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script></li>
<li>Rotary rigs in operation, footage drilled, and active well service rig counts </li>
<li class="date">monthly, annual </li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_crd_wellend_s1_m.htm">Crude oil and natural gas exploratory and development wells </a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script></li>
<li>Exploratory and development wells drilled for crude oil, natural gas and dry holes; total footage drilled</li>
<li class="date">monthly, annual </li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_crd_wellfoot_s1_a.htm">Footage drilled for crude oil and natural gas wells </a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script></li>
<li>Footage drilled by exploratory and development wells and by crude oil, natural gas, and dry holes</li>
<li class="date">annual</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_crd_welldep_s1_a.htm">Average depth of crude oil and natural gas wells </a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script></li>
<li>Average depth of wells drilled by exploratory and development wells and by crude oil, natural gas, and dry holes </li>
<li class="date">annual</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_crd_wellcost_s1_a.htm">Costs of crude oil and natural gas wells drilled</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script></li>
<li>Per well and per foot costs of crude oil, natural gas, and dry hole wells </li>
<li class="date">annual</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_crd_seis_s1_m.htm">Maximum U.S. active seismic crew counts</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/dnav/pet/includes/rdate_petmer.txt"></script></li>
<li>by onshore/offshore/Alaska and dimension</li>
<li class="date">monthly </li>
</ul>
<ul>
<li class="sub-header"><a href="/petroleum/production/">Monthly Crude Oil and Natural Gas Production</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/production/includes/rdate_914.txt"></script></li>
<li>Monthly crude oil and natural gas production data collected on Form EIA-914 (Monthly Crude Oil, Lease Condensate, and Natural Gas Production Report)</li>
<li class="date">Monthly</li>
</ul>
<ul>
<li class="sub-header"><a href="/pub/oil_gas/natural_gas/data_publications/cost_indices_equipment_production/current/coststudy.html">Oil   and gas lease equipment and operating costs 1994 Through 2009</a></li>
<li class="hide date">Release Date: September 28, 2010</li>
<li>Regional and national oil and gas equipping and operating cost trends. </li>
<li class="date">annual</li>
</ul>
<ul>
<li class="sub-header"><a href="/naturalgas/fieldcode/">Oil and gas county code master list</a></li>    <script language="JavaScript" type="text/JavaScript" src="/naturalgas/fieldcode/includes/rdate_fcml.txt"></script></li>
<li>Comprehensive listing of U.S. oil and gas field names.</li>
<li class="date">annual</li>
</ul>
<ul>
<li class="sub-header"><a href="/naturalgas/archive/petrosystem/petrosysog.html">Distribution and production of oil &amp; gas wells</a></li>
<li class="hide date">Release Date: January 7, 2011</li>
<li>State level tables and graphs </li>
<li class="date">annual</li>
</ul>
</div>
<h2 class="accordion-panel" id="refining">
<div class="expand-collapse-container"></div><a name="refining"></a>Refining and processing
<div class="right">Additional formats</div>
</h2>
<div class="accordion-content">
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pnp_wiup_dcu_nus_w.htm">Weekly inputs &amp; utilization </a></li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script></li>
<li>Refiner inputs, operable capacity, percent utilization, and refinery and blender net inputs by U.S. and PAD District </li>
<li class="date">weekly, 4-week average</li>
</ul>
<ul>
<li class="sub-header">Weekly production</li>
<li class="date"><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script></li>
<li>Production of petroleum products by U.S. and PAD District</li>
<li class="date">weekly, 4-week average</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pnp_wprodrb_dcu_nus_w.htm">Refiner &amp; blender</a></li>
<li><a href="/dnav/pet/pet_pnp_wprodr_s1_w.htm">Refiner</a></li>
<li><a href="/dnav/pet/pet_pnp_wprodb_s1_w.htm">Blender</a></li>
<li><a href="/dnav/pet/pet_pnp_wprode_s1_w.htm">Ethanol plant</a></li>
</ul>
<ul>
<li class="sub-header">Net input</li>
<li class="date">Monthly</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Net input of crude oil and petroleum products by PAD and Refining Districts
<ul>
<li><a href="/dnav/pet/pet_pnp_inpt_dc_nus_mbbl_m.htm">Refiner & blender</a></li>
<li><a href="/dnav/pet/pet_pnp_inpt2_dc_nus_mbbl_m.htm">Refiner</a></li>
<li><a href="/dnav/pet/pet_pnp_inpt3_dc_nus_mbbl_m.htm">Blender</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pnp_unc_dcu_nus_m.htm">Refinery utilization and capacity</a></li>
<li class="date">Monthly</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Gross input to crude distillation units, operable capacity and utilization rate by PAD and Refining Districts</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pnp_crq_dcu_nus_m.htm">Crude oil input qualities</a></li>
<li class="date">Monthly</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Crude oil sulfur content and API</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pnp_dwns_dc_nus_mbblpd_m.htm">Downstream processing of fresh feed input</a></li>
<li class="date">Monthly</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Catalytic cracking, catalytic hydrocracking, and delayed and fluid coking by PAD and Refining Districts</li>
</ul>
<ul>
<li class="sub-header">Net production</li>
<li class="date">Monthly</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Net production of finished petroleum products by PAD and Refining Districts
<ul>
<li><a href="/dnav/pet/pet_pnp_refp_dc_nus_mbbl_m.htm">Refiner & blender</a></li>
<li><a href="/dnav/pet/pet_pnp_refp2_dc_nus_mbbl_m.htm">Refiner</a></li>
<li><a href="/dnav/pet/pet_pnp_refp3_dc_nus_mbbl_m.htm">Blender</a></li>
<li><a href="/dnav/pet/pet_pnp_oxy_dc_nus_mbbl_m.htm">Oxygenate (ethanol and MTBE)</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pnp_pct_dc_nus_pct_m.htm">Refinery yield</a></li>
<li class="date">Monthly</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual</li>
<li class="date">    <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Percent yield of petroleum products by PAD and Refining Districts</li>
</ul>
<ul>
<li>Refinery Capacity</li>
<li class="hide date">Release Date: June 21, 2017</li>
<li>By U.S., PAD District and state </li>
<li class="date">annual
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pnp_cap1_dcu_nus_a.htm">Number and capacity</a></li>
<li><a href="/dnav/pet/pet_pnp_capprod_dcu_nus_a.htm">Production capacity</a></li>
<li><a href="/dnav/pet/pet_pnp_capchg_dcu_nus_a.htm">Downstream charge capacity</a></li>
<li><a href="/dnav/pet/pet_pnp_capwork_dcu_nus_a.htm">Working storage capacity</a> (historical data 1982 - 2010)</li>
<li><a href="/dnav/pet/pet_pnp_capshell_dcu_nus_a.htm">Shell storage capacity</a> (historical data 1982 - 2010)</li>
<li><a href="/dnav/pet/pet_pnp_caprec_dcu_nus_a.htm">Receipts of crude oil by method of transport</a></li>
<li><a href="/dnav/pet/pet_pnp_capfuel_dcu_nus_a.htm">Fuel consumed at refineries</a></li>
<li><a href="/dnav/pet/pet_pnp_feedng_k_a.htm">Natural gas used as feedstock for hydrogen production</a></li>
<li><a href="/petroleum/refinerycapacity/">Refinery capacity report</a></li>
<li>Refinery capacity data by individual refinery as of January 1, 2017
<div class="clear-all">
<a href="/petroleum/refinerycapacity/refcap17.xls"><i class="ico xls">XLS</i></a>
</div>
</li>
<li><a href="/totalenergy/data/annual/showtext.cfm?t=ptb0509">Refinery capacity and utilization data, annual 1949 - 2011</a>
<div class="clear-all">
<a href="/totalenergy/data/annual/pdf/sec5_23.pdf"><i class="ico pdf">PDF</i></a>
<a href="/totalenergy/data/annual/xls/stb0509.xls"><i class="ico xls">XLS</i></a>
</div></li>
</ul></li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_pnp_gp_dc_nus_mbbl_m.htm">Natural gas plant field production</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Net production of petroleum products by PAD and Refining Districts </li>
</ul>
<ul>
<li class="sub-header"><a href="/petroleum/ethanolcapacity/">U.S. fuel ethanol plant production capacity</a></li>
<li class="date">Release Date: June 20, 2017</li>
<li>The U.S. Energy Information Administration released its annual fuel ethanol production capacity report. The new report contains data for all operating U.S. fuel ethanol production plants as of January 1, 2017.</li>
<li class="date"> annual</li>
</ul>
<ul>
<li class="sub-header"><a href="/biofuels/biodiesel/production/">Monthly biodiesel production</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/biofuels/biodiesel/production/includes/rdate_biodiesel.txt"></script></li>
<li>The U.S. Energy Information Administration release showing national and regional monthly biodiesel production. In addition to biodiesel production, data included producer sales, producer stocks, and feedstock inputs. </li>
</ul>
</div>
<h2 class="accordion-panel" id="imports"><div class="expand-collapse-container"></div><a name="imports"></a>Imports/exports &amp; movements</h2>
<div class="accordion-content">
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_wkly_dc_NUS-Z00_mbblpd_w.htm">Weekly imports &amp; exports</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script></li>
<li>Crude oil and petroleum products by U.S. and PAD District </li>
<li class="date">weekly, 4-week average</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_wimpc_s1_w.htm">Weekly preliminary crude imports by country of origin</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script></li>
<li>U.S. crude oil imports </li>
<li class="date">weekly, 4-week average</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_imp_dc_NUS-Z00_mbbl_m.htm">Imports by area of entry</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Crude oil and petroleum products by U.S., PAD District</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_imp2_dc_R10-Z00_mbbl_m.htm">Imports by processing area</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Crude oil and petroleum products by U.S., PAD District</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_impcus_a2_nus_ep00_im0_mbbl_m.htm">U.S. imports by country of origin</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Crude oil and petroleum products by country of origin</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_impcp_a2_r10_ep00_ip0_mbbl_m.htm">PAD District imports by country of origin</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Crude oil and unfinished oils by country of origin </li>
</ul>
<ul>
<li class="sub-header"><a href="/petroleum/imports/companylevel/">Company level imports</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li>Crude oil and total petroleum imports by the top 15 countries (monthly) and a summary of crude oil imports by company from the Persian Gulf (year-to-date).</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_res_dc_nus-Z00_mbbl_m.htm">Residual fuel imports by state of entry</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>by U.S., PAD District, state </li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_ipct_k_m.htm">Percentages of total imported crude oil by API gravity</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script></li>
<li class="date">Annual Release Date: June 1, 2016
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_exp_dc_NUS-Z00_mbbl_m.htm">Exports</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>by U.S., PAD District </li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_expc_a_EP00_EEX_mbbl_m.htm">Exports by destination</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>by country of export destination </li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_neti_a_EP00_IMN_mbblpd_m.htm">U.S. net imports by country</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Crude oil and petroleum products by country and region </li>
</ul>
<ul>
<li class="sub-header">Movements between PAD Districts</li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_ptb_dc_R20-R10_mbbl_m.htm">By pipeline, tanker, barge, and rail</a></li>
<li><a href="/dnav/pet/pet_move_pipe_dc_R20-R10_mbbl_m.htm">By pipeline</a></li>
<li><a href="/dnav/pet/pet_move_tb_dc_R20-R10_mbbl_m.htm">By tanker and barge </a></li>
<li><a href="/dnav/pet/PET_MOVE_RAIL_A_EPC0_RAIL_MBBL_M.htm">By rail</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/PET_MOVE_RAILNA_A_EPC0_RAIL_MBBL_M.htm">Movements of Crude Oil and Selected Products by Rail</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_netr_d_r10-z0p_VNR_mbbl_m.htm">Net receipts of crude oil and petroleum products by pipeline, tanker, barge, and rail</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
</ul>
<ul>
<li class="sub-header">F.O.B. costs of imported crude oil</li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script></li>
<li class="date">Annual Release Date: June 1, 2016
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_move_imc1_k_m.htm">By area</a></li>
<li><a href="/dnav/pet/pet_move_imc2_k_m.htm">By crude stream</a></li>
<li><a href="/dnav/pet/pet_move_imc3_k_m.htm">By API gravity </a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header">Landed costs of imported crude oil</li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script></li>
<li class="date">Annual Release Date: June 1, 2016
<ul>
<li><a href="/dnav/pet/pet_move_land1_k_m.htm">By area</a></li>
<li><a href="/dnav/pet/pet_move_land2_k_m.htm">By crude stream</a></li>
<li><a href="/dnav/pet/pet_move_land3_k_m.htm">By API gravity </a></li>
</ul></li>
</ul>
<!--<ul>
<li><st class="sub-header"rong>International Imports and Exports</li>
by country, region and country groups
<ul>
<li class="sub-header"><a href="http://www.eia.gov/cfapps/ipdbproject/IEDIndex3.cfm?tid=5&pid=54&aid=3">International imports data, annual</a></li>
<li><a href="http://www.eia.gov/cfapps/ipdbproject/IEDIndex3.cfm?tid=50&pid=76&aid=3">International imports data, monthly and quarterly</a></li>
<li><a href="http://www.eia.gov/cfapps/ipdbproject/IEDIndex3.cfm?tid=5&pid=54&aid=4">International exports data, annual</a></li>
</ul>
-->
</div>
<h2 class="accordion-panel" id="stocks"><div class="expand-collapse-container"></div><a name="stocks"></a>Stocks</h2>
<div class="accordion-content">
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_stoc_wstk_dcu_nus_w.htm">Total stocks</a></li>
<li><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script></li>
<li>Crude oil and petroleum products by U.S. and PAD District</li>
<li class="date">weekly</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_stoc_ts_dcu_nus_m.htm">Monthly stocks&rsaquo;</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li><a href="/dnav/pet/pet_stoc_ts_dcu_nus_a.htm">Annual stocks&rsaquo;</a></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_stoc_typ_d_nus_SAE_mbbl_m.htm">Stocks by type</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Crude oil and petroleum products by U.S., PAD District</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_stoc_st_dc_NUS_mbbl_m.htm">Refinery, bulk terminal, and natural gas plant stocks by state</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Crude oil and petroleum products</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_stoc_ref_dc_nus_mbbl_m.htm">Refinery stocks</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Crude oil and petroleum products by U.S., PAD and Refining District</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_stoc_cu_s1_m.htm">Crude oil stocks at tank farms & pipelines</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>by U.S., PAD District, and Cushing, Oklahoma </li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_stoc_gp_dcu_nus_m.htm">Natural gas plant stocks</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>Petroleum products by U.S., PAD and Refining District </li>
</ul>
<ul>
<li class="sub-header"><a href="/petroleum/storagecapacity/">Working and net available shell storage capacity</a></li>
<li class="hide date">Release Date: August 31, 2017</li>
<li>Working and net available shell storage capacity as of March 31, 2017 is the U.S. Energy Information Administration's (EIA) report containing semi-annual storage capacity data. It includes three tables detailing working and net available shell storage capacity by facility type, product, and PAD District as of March 31. </li>
<li class="date"> semi-annual</li>
</ul>
</div>
<h2 class="accordion-panel" id="consumption"><div class="expand-collapse-container"></div><a name="consumption"></a>Consumption/sales</h2>
<div class="accordion-content">
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_cons_wpsup_k_w.htm">U.S. weekly product supplied</a></li>
<li class="date"><script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/weekly/includes/rdate_wpsr.txt"></script></li>
<li>Measures the disappearance of petroleum products from primary sources; approximately represents consumption of petroleum products. </li>
<li class="date">weekly, 4-week average</li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_cons_psup_dc_nus_mbbl_m.htm">Product supplied</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/monthly/includes/rdate_psm.txt"></script></li>
<li class="date">Annual <script language="JavaScript" type="text/JavaScript" src="/petroleum/supply/annual/volume1/includes/rdate_psa.txt"></script></li>
<li>by U.S., PAD District </li>
</ul>
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_cons_prim_dcu_nus_m.htm">Prime supplier sales volumes</a></li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/prime/includes/rdate_psr.txt"></script></li>
<li class="date">Annual Release Date: April 1, 2013</li>
<li>Sales of petroleum products by refiners, gas plant operators, importers and large inter-state distributors into the final local markets of consumption by U.S., PAD District, State</li>
</ul>
<ul>
<li class="sub-header">Refiner sales volumes</li>
<li class="date">Monthly <script language="JavaScript" type="text/JavaScript" src="/petroleum/marketing/monthly/includes/rdate_pmm.txt"></script></li>
<li class="date">Annual Release Date: June 1, 2016</li>
<li>by U.S., PAD District, state and sales type
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_cons_refmg_d_nus_VTR_mgalpd_m.htm">Motor gasoline</a></li>
<li><a href="/dnav/pet/pet_cons_refres_d_nus_VTR_mgalpd_m.htm">Residual fuel oil and No. 4 fuel oil</a></li>
<li><a href="/dnav/pet/pet_cons_refoth_d_nus_VTR_mgalpd_m.htm">Other products</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header">Sales of fuel oil and kerosene</li>
<li class="date"><script language="JavaScript" type="text/JavaScript" src="/petroleum/fueloilkerosene/includes/rdate_foks.txt"></script></li>
<li>by U.S., PAD District, state </li>
<li class="date">annual
<ul>
<li><a href="/dnav/pet/pet_cons_821dst_dcu_nus_a.htm">Distillate by end use</a></li>
<li><a href="/dnav/pet/pet_cons_821rsd_dcu_nus_a.htm">Residual fuel oil by end use</a></li>
<li><a href="/dnav/pet/pet_cons_821ker_dcu_nus_a.htm">Kerosene by end use</a></li>
<li><a href="/dnav/pet/pet_cons_821use_dcu_nus_a.htm">Distillate and kerosene by end use</a></li>
</ul></li>
</ul>
<ul>
<li class="sub-header">Adjusted sales of fuel oil and kerosene</li>
<li class="date"><script language="JavaScript" type="text/JavaScript" src="/petroleum/fueloilkerosene/includes/rdate_foks.txt"></script></li>
<li>by U.S., PAD District, state </li>
<li class="date">annual
<ul>
<li class="sub-header"><a href="/dnav/pet/pet_cons_821dsta_dcu_nus_a.htm">Distillate by end use</a></li>
<li><a href="/dnav/pet/pet_cons_821rsda_dcu_nus_a.htm">Residual fuel oil by end use</a></li>
<li><a href="/dnav/pet/pet_cons_821kera_dcu_nus_a.htm">Kerosene by end use</a></li>
<li><a href="/dnav/pet/pet_cons_821usea_dcu_nus_a.htm">Distillate and kerosene by end use</a></li>
</ul></li>
</ul>
</div>
</div>
<!-- data highlights + weekly releases -->
<div class="content-container content-container-border">
<div class="blue-background weekly">
<div class="header">
<h2>Regular Weekly Releases*</h2>
</div>
<h3>Monday</h3>
<ul>
<li class="title"><a href="/petroleum/gasdiesel/">Gasoline and Diesel Fuel Update</a></li>
<li class="date">Usually Monday by 5:00 p.m. Eastern Time</li>
</ul>
<h3>Wednesday</h3>
<ul>
<li class="title"><a href="/petroleum/gasdiesel/">Gasoline and Diesel Fuel Update</a></li>
<li class="date">Usually Monday by 5:00 p.m. Eastern Time</li>
</ul>
<ul>
<li class="title"><a href="/petroleum/gasdiesel/">Gasoline and Diesel Fuel Update</a></li>
<li class="date">Usually Monday by 5:00 p.m. Eastern Time</li>
</ul>
<ul>
<li class="title"><a href="/petroleum/gasdiesel/">Gasoline and Diesel Fuel Update</a></li>
<li class="date">Usually Monday by 5:00 p.m. Eastern Time</li>
</ul>
<div class="footer">
*No releases: Monday, Tuesday, or Friday. Releases change on weeks with Federal holidays.
</div>
</div>
</div>
</div><!-- /column -->
<div class="l-side-column">
<?php include('./includes/side_data.inc'); ?>
</div><!-- /column -->
</div><!-- /l-row -->
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
