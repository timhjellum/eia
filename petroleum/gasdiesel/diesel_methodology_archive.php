<?php include_once('../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>Gasoline and Diesel Fuel Update</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Gasoline and Diesel Fuel Update'; ?>
<?php include('./includes/subnav_gdumeth.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h2>Previous Diesel Fuel Sampling Methodology</h2>
<p>The sample design for the weekly diesel price survey was a two-phase design. The first phase constituted construction of a frame of 2,207 company-State units (CSUs) from the combination of two sample cycles of the EIA-782A and EIA-782B surveys that collected monthly petroleum products' sales at the State level. For sampling purposes, any combination of State and company where diesel was sold through retail outlets as reported on the EIA-782 surveys defined a CSU, the sampling unit.
</p>
<p>For the second phase, a sub-sample of the 2,207 CSUs from phase 1 was selected using probability proportional to size (PPS). The measure of size for each of the two sample cycles separately was normalized using the annual State sales' volumes from the monthly survey divided by the unit's probability of selection in the monthly survey. The two cycles' normalized measures were then added to form one size. Each CSU in the frame, therefore, had a size, and the sum of the CSU sizes within each sampling cell equaled the allocation for each cell. Within the second phase was a second stage to identify and select the actual outlets reporting for the company. This identification was done by contacting the sampled companies and asking them to provide the names, addresses and telephone numbers for truck-stops and retail outlets selling diesel fuel for each sampled CSU. Additionally, they were also asked to provide the proportion of diesel fuel sold through truck-stops for each sampled CSU. This proportion was used toeserve and control the number of truck stops and retail stations selected for each CSU.
</p>
<p>Sample allocations for each sampling cell were calculated using the average standard errors across reporting periods for the previous year of weekly diesel fuel survey prices for each of the sampling cells. The sample size was determined for each cell by the formula: n' = (e/t)2 n, where t was the targeted standard error, n was the previous sample size for the cell, e was the average of the previous sample's weekly standard errors, and n' was the new sample cell allocation. In addition, a second allocation based on proportional representation within the next larger aggregation cell to which the original sampling cell would contribute was also obtained. For example, the PADD IB sampling cell contributes to the PADD I cell. The maximum of the two allocations for each cell was then designated as the cell allocation for the sampling cell. The sample was targeted at the time of selection to yield standard errors of 1 cent for the U.S., the East Coast, the Midwest, and the Gulf Coast. The remaining areas were teted at the 1.5 cent level. These targeted standard errors were based on the price levels that were realized at the time of selection which translated the errors to roughly a 1%/1.5% Coefficient of Variation, respectively. This allocation procedure yielded a targeted sample size of 350 truck stops and retail outlets for the diesel fuel survey.
</p>
<p>Further details of this design are contained in a published paper that can be found at: <a href="/pub/oil_gas/petroleum/data_publications/weekly_on_highway_diesel_prices/current/html/2cycasr.htm">/pub/oil_gas/petroleum/data_publications/weekly_on_highway_diesel_prices/current/html/2cycasr.htm</a>.
</p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/gdu_side2.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
