<?php $locale = 'ap'; ?><?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>EIA-914 monthly production report FAQ's</title>
<?php $widgets="n"; ?>
<?php $jvm2="y"; ?>
<?php $hct="y"; ?>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<link rel="stylesheet" href="css/styles.css" type="text/css">
<link rel="stylesheet" href="css/print.css" type="text/css" media="print">
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php include('./includes/page_header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1 style="border-bottom-color:#fff">Frequently Asked Questions </h1>	<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">Why did EIA start collecting crude oil production data?</h3>
<p>Daily U.S. oil production grew by more than 70% between July 2011 and June 2015 (from 5,419,000 barrels/day to 9,296,000 barrels/day). Production from states with relatively small levels of production grew substantially, while other states that historically had been large producers became even larger producers. This rapid growth increased public interest in oil production and led EIA to begin collecting monthly crude oil production data.
</p>
<p>Form EIA-914 allows EIA to gather more complete and current information about U.S. crude oil and lease condensate production nationally and regionally. Ultimately, this information will improve EIA reporting and forecasting, and it will inform related public debates on topics such as refining capacity, crude oil exports, and legislative initiatives.
</p>
<p>Previously, EIA used state-reported data to estimate monthly crude oil production. However, some states took several months to as much as two years to report complete (final) data, rendering these data of limited value. Only two or three states reported final data in a timely manner.
</p>
<p>With the expanded Form EIA-914 survey, EIA collects data from a sample of less than 500 out of 13,000 currently active operators of oil and natural gas wells. These operators account for about 90% of crude oil, lease condensate, and natural gas production in the Lower 48 states and a significant share of the total oil and natural gas production in each of the 15 states and the federal Gulf of Mexico for which data are individually collected. Data from this relatively small number of operators make it possible to generate statistically representative estimates of production within two months of the production month.
</p>
<p>Production data are also collected from respondents for all other states in which they have crude oil and lease condensate or natural gas production, but the data are aggregated and reported for the group of states as a whole. Individual estimates for these states are made using a different method, which was used to estimate all state production prior to Form EIA-914 data being available.
</p>
<p>The survey-based method of estimating production is more timely and accurate than EIA's previous method, which relied on incomplete state data.
</p>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">How does EIA identify companies that must respond to Form EIA-914?</h3>
<p>Companies are arranged in descending order of the production they have in each state for which data are collected (15 individual states, the federal Gulf of Mexico, and all other states). Companies are selected beginning with the largest ones until the entire set of companies accounts for approximately 85% of the production for that state (or region). This process is followed each month for crude oil and lease condensate production and for natural gas production.
</p>
<p>Although  respondent companies are selected to report based on their production of <strong>either</strong> crude oil and lease condensate <strong>or</strong> their production of natural gas in a  particular state (or region), they must report <strong>all</strong> of their crude oil and lease condensate <strong>and</strong> natural gas production for all 15 individual states, the  federal Gulf of Mexico, and all other states. This requirement that companies report  all their production in all states tends to increase the respondent companies&rsquo; percentage  of crude oil and lease condensate or natural gas production covered by the  survey. In some cases, production of oil and/or natural gas is above 85% for a  state or region.
</p>
<p>Additional  information about the survey methodology is available in the Form EIA-914 <a href="/petroleum/production/pdf/eia914methodology.pdf">Methodology Report</a> and in <a href="http://www.reginfo.gov/public/do/PRAViewDocument?ref_nbr=201408-1905-001">Supporting Statement B</a>, which is available from the U.S.  Office of Management and Budget.
</p>
<p>More  information on Form EIA-914 and <a href="/survey/form/eia_914/faqs.cfm">some frequently asked questions</a> for respondents are available on  EIA&rsquo;s website.
</p>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">What states are included in the Form EIA-914?</h3>
<p>The states and areas individually sampled by Form EIA-914 are Arkansas, California, Colorado, Kansas, Louisiana, Montana, New Mexico, North Dakota, Ohio, Oklahoma, Pennsylvania, Texas, Utah, West Virginia, Wyoming, and the federal Gulf of Mexico.
</p>
<p>The states and areas not individually  sampled (the ones included in the <em>Other  States</em> category) are Alabama, Arizona, Florida, Illinois, Indiana,  Kentucky, Maryland, Michigan, Mississippi, Missouri, Nebraska, Nevada, New  York, Oregon, South Dakota, Tennessee, Virginia, and the federal Pacific  Offshore. This group accounts for roughly 3% of U.S. oil and natural gas production.  Additional information on the <a href="/petroleum/supply/monthly/pdf/crudemeth.pdf">method</a> used to estimate production for  these states is available. The 18 remaining states do not produce crude oil or  natural gas.
</p>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">What percentage of U.S. oil production is surveyed?</h3>
<p>The 15  states and Gulf of Mexico individually surveyed by Form EIA-914 account for 92%  of U.S. crude oil production.
</p>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">How does EIA estimate monthly  production for all individually sampled states?</h3>
<p>EIA  estimates monthly production for all individually sampled states by modeling  the relationship between data from states and data from other federal agencies  assembled by DrillingInfo, Inc. (DI), a third party vendor, and data reported  on Form EIA-914. The relationship between DI data and Form EIA-914 data is  modeled using a Weighted Least Squares (WLS) linear regression.
</p>
<p>Summarizing the estimation process in terms of approximate percent of U.S. oil production:
<ul>
<li> 	92% of U.S. production is estimated with WLS using Form EIA-914 data</li>
<li> 5% is state-reported data from Alaska</li>
<li> 3% is estimated using the previous method because these states are not individually sampled on Form EIA-914</ul></li></p>
<p>See details on the <a href="/petroleum/production/pdf/eia914methodology.pdf">current methodology</a> of estimating crude oil and lease  condensate production and natural gas production using Form EIA-914 data.
</p>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">How are the sampled production data expanded to develop the total state production estimates given the limited Form EIA-914 survey history? </h3>
<p>EIA  estimates production for the nonsampled companies in each state or area.  Estimates for unsampled volumes are produced using a regression of survey reported  data on historical state data. The regression produces expansion factors that  inflate the sample data to an estimate of the total state volume. The  state expansion factors used to make these estimates are calculated using  historical operator-level data from state agencies (assembled by DrillingInfo,  Inc.), not the new Form EIA-914 data, so the limited survey history is not an  issue.<strong></strong></p>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">Are there significant differences between the new EIA production data and state production data, for example in North Dakota?</h3>
<p>The total North Dakota Form EIA-914 estimate is expected to be close to the final North Dakota state data. For example, subtracting North Dakota state data on Bakken production from the Form EIA-914 data reveals some differences, but Bakken production itself has varied by more than 2% in recent months, according to state data from North Dakota. The expected variance in both the state data and EIA data can lead to the appearance of greater volatility in the difference between the two series than is present in the underlying data.
</p>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">Does EIA's production revision increase the balancing item for crude oil in EIA's statistics relative to previous levels?
</h3>
<p>Many analysts construct crude oil input-output balances using EIA's surveys of stocks, refinery runs, trade flows, and production. Although a somewhat larger balancing item is present in the June 2015 data, it seems unlikely that the estimates generated from Form EIA-914 data are solely responsible.
</p>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">What is the magnitude of revisions under EIA's old and new methodologies?</h3>
<p>EIA provided  a comparison of the estimates using the old and new methodology in the August  publications of <a href="/petroleum/production/"><em>Monthly Crude Oil and Natural  Gas Production</em></a> and <a href="/petroleum/supply/monthly/"><em>Petroleum Supply Monthly</em></a>. In particular, May 2015 volumes  would have been revised downward by 6,000 barrels/day (b/d) using the old  method and revised downward by 111,000 b/d (about 1% of U.S. production) using the  new method. For January&#8211;May 2015, the old method shows an average upward  revision of 3,000 b/d, and the new method shows an average downward revision of  87,000 b/d.
</p>
<p>All volumes  reported prior to the August <em>Petroleum  Supply Monthly</em>, including those initially reported and the later revisions,  were estimated by the old method, so a change of only 3,000 b/d is small. The  average 87,000 b/d downward revision is a result of switching to the new  method. However, given the uncertainties in the old method of roughly 200,000 b/d  for the Lower 48 states, the 87,000 b/d revision is well within the uncertainty  and therefore should not be construed as a meaningful difference.
</p>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">The new numbers released in the  August <em>Petroleum Supply Monthly</em> for  January 2015 through May 2015 indicate that United States oil production was about  87,000 barrels per day lower than reported in the July <em>Petroleum Supply Monthly</em>. How could that be? What happened to those  barrels?</strong></h3>
<p>No oil was lost. The lower number is just a revised estimate of production.
</p>
<p>EIA's new estimates are better than previous estimates because the new estimates are based on survey data. Estimated production was simply revised downward. Historically, EIA routinely revised estimated monthly oil production when it received better data from the states.
</p>
<p>In this case, the reason for some of the revisions was substituting estimates from Form EIA-914 data for estimates derived with the old method. The downward revision for January 2015 through May 2015 averaged 87,000 b/d&#8212;a reduction of less than 1% from the average production rate (previously published by EIA) of 9.528 million b/d during the first six months of 2015.
</p>
<p>This  revision reflects the change from the old estimation method to the new estimation  method using more timely and complete Form EIA-914 survey data. Because the  states separately surveyed with Form EIA-914 account for approximately 92% of  U.S. oil production, EIA considers the revised estimates to be more  representative of actual production than the earlier estimates. On a monthly  basis, the revisions amounted to 1%&#8211;2%.
</p>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">How large were the revisions of U.S. crude oil production for January 2015 through May 2015?</h3>
<p>The net  revisions to monthly U.S. production estimates varied from a decline of 0.4% to  a decline of 1.3% per month. The table below shows the changes to the total U.S.  production between estimates published in the July edition of the <em>Petroleum Supply Monthly</em> and the  estimates published in the August edition, which were calculated using the Form EIA&#8211;914 estimates. The following table shows the changes in estimated  U.S. production using estimates for the Form EIA-914 states (i.e., the states  for which production data are separately collected) rather than using the  estimates derived using the previous estimation method.
</p>
<p>The largest revisions  to production estimates for January 2015 through May 2015 include lower  estimates in Texas (ranging from about 100,000 b/d to 150,000 b/d) and higher  estimates in the federal Gulf of Mexico (ranging from about 10,000 to 50,000 b/d).
</p>
<table class="data">
<caption>
U.S total oil production</caption>
<thead>
<td colspan="99">thousand barrels/day</td>
</tr>
<tr>
<th>Production<br /> month</th>
<th>July PSM<br /> estimates</th>
<th>August PSM<br /> estimates</th>
<th>Difference</th>
<th>Percent<br /> difference </th>    </thead>
<tbody>
<tr>
<td>Jan-15</td>
<td>9,309.348</td>
<td>9,270.132</td>
<td>-39.216</td>
<td>-0.42%</td>
</tr>
<tr>
<td>Feb-15</td>
<td>9,432.117</td>
<td>9,350.999</td>
<td>-81.118</td>
<td>-0.86%</td>
</tr>
<tr>
<td>March-15</td>
<td>9,692.789</td>
<td>9,567.287</td>
<td>-125.502</td>
<td>-1.29%</td>
</tr>
<tr>
<td>Apr-15</td>
<td>9,691.198</td>
<td>9,612.431</td>
<td>-78.767</td>
<td>-0.81%</td>
</tr>
<tr>
<td>May-15</td>
<td>9,510.979</td>
<td>9,399.850</td>
<td>-111.129</td>
<td>1.17%</td>
</tr>    </tbody></table>
<br />
<h3 style="border-bottom-style:solid; border-bottom-width:1px; border-bottom-color:#CCC; margin-bottom:10px">What are the purposes of estimates in  the <em>Drilling Productivity Report</em>, <em>Short-Term Energy Outlook</em>, <em>Weekly Petroleum Status Report</em>, and <em>Petroleum Supply Monthly</em></h3>
<p>Crude oil  production estimates are included in the <em>Drilling  Productivity Report</em> (DPR), the <em>Short-Term  Energy Outlook</em> (STEO), the <em>Weekly  Petroleum Status Report </em>(WPSR), and the <em>Petroleum  Supply Monthly</em> (PSM). Some numbers may appear inconsistent across these  publications. These differences arise because of differences in the timing of  the release of the different estimates and/or differences in the focus of the  publication.
</p>
<p>The DPR focuses on crude oil and natural gas production in seven major regions, covering approximately 70% of onshore crude oil production in the Lower 48 states. The DPR provides a month-ahead estimate of crude oil production for seven major regions. For example, the DPR released in August 2015 had production estimates through September 2015.
</p>
<p>The STEO provides estimates of crude oil production for each month through the following year for total U.S. production, onshore production of the Lower 48 states, Alaska production, and federal Gulf of Mexico production.
</p>
<p>The WPSR is a weekly publication that provides data for the preceding week and largely uses estimates from the STEO.
</p>
<p>The PSM is released two months after the end of a given month (June 2015 data were released at the end of August 2015). The August 2015 edition was the first PSM that included state-level production estimates based on Form EIA-914 data. EIA derived estimates for the nonsampled states to develop a total U.S. crude oil production estimate. The STEO forecasts are benchmarked to the latest monthly oil production estimates from the PSM.
</p>
<!--<h3>Where can I find additional information about Form EIA-914?</h3>
<p>EIA&rsquo;s survey  forms page has <a href="/survey/#eia-914">additional information about Form  EIA-914</a>, including  an <a href="/survey/form/eia_914/faqs.cfm">FAQ for respondents</a> and the <a href="/survey/form/eia_914/form.pdf">Form EIA-914</a>.
</p>-->
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/914faqs_side.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
