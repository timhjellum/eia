<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>Gasoline and Diesel Fuel Update</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Gasoline and Diesel Fuel Update'; ?>
<?php include('./includes/report-details.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1> Procedures, Methodology, and Coefficients of Variation</h1>
<a name="procedures"></a>
                <h2>Gasoline price data collection procedures </h2>
<p>Every Monday, retail prices for all three grades of gasoline are collected by telephone from a sample of approximately 800 retail gasoline outlets. The prices are  published around 5:00 p.m. ET Monday, except on government holidays, when the  data are released on Tuesday (but still represent Monday's price). The reported price includes all taxes and is the pump price paid by a consumer as of 8:00 a.m. Monday. This price represents the self-serve price except in areas having only full-serve. The price data are used to calculate weighted&#8211;average price estimates at the city, state, regional and national levels using sales and delivery volume data from other EIA surveys and population estimates from the U.S. Census Bureau.
</p>
<p>Data are collected using EIA's Form 878, "Motor Gasoline Price Survey.&quot;  The survey is designed to collect and publish data on the cash price (including taxes) of self-serve, unleaded gasoline, by grade of gasoline. The data are used to calculate average gasoline prices at the national, regional, and select city and state levels across all gasoline grades and formulations.
See <a href="/survey/#eia-878">EIA-878 survey form, instructions, and frequently asked questions</a></p>
<a name="sampling"></a>
                <h2>Gasoline sampling methodology</h2>
<p>The sample for the Motor Gasoline Price Survey was   drawn from a frame of approximately 115,000 retail gasoline outlets. The   gasoline outlet frame was constructed by combining information purchased from a   private commercial source with information contained on existing EIA petroleum   product frames and surveys. Outlet names and zip codes were obtained from the   private commercial data source. Additional information was obtained directly   from companies selling retail gasoline to supplement information on the frame. The individual frame outlets were mapped to counties using their zip codes. The   outlets were then assigned to the published geographic areas as defined by the   Environment Proctection Agency program area, or for conventional gasoline areas, as defined by the U.S. Census   Bureau&rsquo;s Standard Metropolitan Statistical Areas (SMSA) by using their county   assignment.
</p>
<p>The gasoline outlet sample is an area sample that includes both an   augmentation to and a rotation of the previous sample cycle of the gasoline   survey, the EIA-878. The augmentation outlets were obtained by first sampling   counties, and then sampling the outlets from the gasoline outlet frame within   those counties within each sampling cell<a href="#_ftn1" name="_ftnref1" title="" id="_ftnref1">[1]</a>. Every county in the United States was assigned   to the corresponding sampling cell as defined. After the counties were assigned,   the standard deviations of gasoline prices for these sampling cells were   estimated using the prices from the previous sample of the gasoline survey.   These deviations and the number of stations from the U.S. Census Bureau's County   Business Patterns (CBP) were used to determine the required number of outlets to   be sampled.
</p>
<p>The statistical technique used was the Chromy allocation algorithm,   an iterative procedure to determine the number of units required for each   sampling cell. To select the sample of outlets, counties within each sampling   cell were sorted within states, and the required number of outlets were randonly selected from   the outlet frame. Once the augmentation portion of the sample was   obtained, standard deviations were re-estimated, combining the previous gasoline   sample outlets and newly sampled outlets. The Chromy algorithm was applied again   to determine the revised sample cell requirements. The previous sample&rsquo;s outlets   were then sub-sampled to ensure a self-weighting sample within each stratum, and   to ensure allocations satisfied by sampling half from each of the self-weighting   sub-sample and the old sample.
</p>
<p>To estimate average prices, sample weights were constructed based on the   sampled outlet's number of pumps, a proxy for sales volume. These weights are   applied each week to the reported outlet gasoline prices to obtain averages for   the specific formulations, grades, and geographic areas. Weights used in   aggregating grades, formulations, and geographic areas were derived using volume   data from the EIA &ldquo;Monthly Report of Prime Suppliers Sales of Petroleum Products   Sold for Local Consumption&rdquo;, and demographic data from the U.S.  Census   Bureau and the Department of Transportation on population, number of gasoline stations, and   number of vehicles.
</p>
<p>Before developing of the outlet frame, only company level data were available.   Therefore, the previous samples required a two-phase sample design to select the   outlets. In the first phase of the design, retail gasoline companies were   selected with probability proportional to the total volume in each state where they   sold gasoline, as reported in the EIA Monthly Petroleum Product Sales Report   survey. The second phase, the selection of individual outlets from the selected   companies, was performed using information obtained directly from the sampled   companies during sample initiation. This design permitted the use of a simple   average for estimating average prices for city and state gasoline prices, but   required&#8211;volume weighted prices for more aggregated published areas with respect   to geography, formulation, and grade. However, with the publication of   additional city and state averages prices, this design approach was insufficient   and required redesign with the increase o the geraphic detail to include nine   states and ten cities. Further details of this previous design are contained in   a published paper that can be found at: <strong><a href="/pub/oil_gas/petroleum/data_publications/weekly_on_highway_diesel_prices/current/html/2cycasr.htm">/pub/oil_gas/petroleum/data_publications/weekly_on_highway_diesel_prices/current/html/2cycasr.htm</a>.</strong></p>
<a name="cv"></a>
                <h2>Definition of the coefficients of variation</h2>
<p>The coefficient of variation (CV) of the mean, a measurement of variability of the   mean price, is calculated as the standard error divided by the mean. As a   measure of precision reflecting the error due to sampling, it can also be used   to construct a confidence interval for the population mean. For example, a mean   price of $1.67 and a CV of 0.004 (.4%) indicates at the 95% confidence level   that the population mean price has an upper limit of $1.68 ($1.67 +   1.96*0.004*$1.67) and a lower limit of $1.66 ($1.67 -   1.96*0.004*$1.67).
</p>
<h4>Detailed price and CV report</h4>
<br />
<p><a href="includes/mogas_recent_prices_and_CVs.xlsx">Motor gasoline prices & Coefficients of Variation spreadsheet</a></p>
<hr align="left" size="1" width="33%" />
<div id="ftn1">
<p><a href="#_ftnref1" name="_ftn1" title="" id="_ftn1">[1]</a> Sampling cells are the   smallest basic geographical units formed by the boundaries of the geographic and   formulation areas for which average prices are published. Sampling   cells are mutually exclusive and collectively exhaustive.
</p>
</div>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/gdu_side3.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
