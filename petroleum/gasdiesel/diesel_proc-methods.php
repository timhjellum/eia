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
                <h2>Diesel Fuel Price Data Collection Procedures</h2>
<p>Every Monday, cash self-serve on-highway diesel prices (including taxes) are collected from a sample of approximately 400 retail diesel outlets in the continental U.S. The sample includes a combination of truck stops and service stations that sell on-highway diesel fuel. The data represent the price of ultra low sulfur diesel (ULSD) which contains less than 15 parts-per-million sulfur.
</p>
<p>The prices are collected via telephone, fax, email, or the internet from participating outlets. All collected prices are subjected to automated edit checks during data collection and data processing. Data flagged by the edits are verified with the respondents. Imputation is used for companies that cannot be contacted and for reported prices that are extreme outliers. The average survey response rate for 2015 was 99%.
</p>
<p>Average national and regional prices are released around 5:00 p.m. ET on Mondays, except on government holidays, in which case the data are released on Tuesday (but still represent Monday's price). These data are made available through EIA's hotline (202-586-6966), EIA's web page, and through EIA's email notification, regular and wireless.
</p>
<p></p>
<p><a href="diesel_procedure_archive.php">Previous Diesel Fuel Price Data Collection Procedures</a></p>
<p>Data is collected using EIA's Form 888, "On-Highway Diesel Fuel Price Survey".  The survey is designed to collect and publish data on the cash price (including taxes) of self-serve, on-highway diesel fuel. The data are used to calculate average diesel fuel oil prices at the national, regional, and select state levels which are vital to the trucking industry and shippers throughout the United States.
See <a href="/survey/#eia-888">EIA-888 survey form, instructions, and frequently asked questions</a></p>
<a name="sampling"></a>
                <h2>Diesel Fuel Sampling Methodology</h2>
<p>The respondents reporting to the weekly diesel price survey represent a stratified probability proportional to size (PPS) sample selected from a frame list of retail outlets. The outlet sampling frame was constructed using commercially available lists from several sources in order to provide comprehensive coverage of truck stops and service stations that sell on-highway diesel fuel in the United States. The frame includes about 62,000 service stations and 4,000 truck stops. Due to statistical and operational considerations, outlets in the States of Alaska and Hawaii are excluded from the target population.
</p>
<p>The <strong>primary publication cells</strong> of the survey include Petroleum Administration for Defense Districts (PADDs) 2-4, three sub-PADDs within PADD 1, and the two subparts of PADD 5 (the State of California and the West Coast region excluding California). The U.S., the East Coast (PADD 1), and the West Coast (PADD 5) are considered <strong>secondary publication cells</strong> since their prices are aggregated based on the prices from their primary publication cell components.
</p>
<p>
To select the sample, allocations were first assigned to all primary publication cells through a simulation of coefficients of variation of average prices using historical price data. The target coefficient of variation for each primary publication cell was capped at 1%. Allocations were further assigned to the states covered by each primary publication cell. The distribution of allocations was proportional to the annual state total volume of retail on-highway diesel fuel sales. This allocation procedure yielded a total target sample size of 403 retail outlets. The states were treated as sampling strata in the sample design.
</p>
<p>It is believed that on-highway diesel fuel sold through all service stations combined only accounts for a small portion of the retail on-highway diesel fuel market. The truck stops on the frame were also classified into two categories, dependent on whether they belong to the nation's four largest on-highway diesel sellers. Based on information from other survey data and industry sources the proportions of total diesel volumes sold by outlets in the three categories (service stations, mid-sized truck stops, and top 4) was assumed to be 20%, 55%, and 25%, respectively. These volume proportions, along with the outlet counts for the three categories on the frame, were used to calculate relative size measures for the outlets in each of the three categories. Pareto Sampling, which is a PPS procedure, and the size measures for each outlet were then used to select sampling units from each state.
</p>
<p>The reported and imputed prices each week are aggregated in multiple steps to obtain price estimates for publication cells. First, state average prices are calculated as simple un-weighted averages of reported and imputed prices. Annual volumes of on-highway diesel sold by states, based on the Federal Highway Administration's compilation, are then used to weight the state average prices and obtain average prices for primary publication cells. Average prices for secondary publication cells are weighted averages of primary publication cell prices based on the proportion of diesel volumes attributable to their component primary publication cells.
</p>
<p></p>
<p><a href="diesel_methodology_archive.php">Previous Diesel Fuel Sampling Methodology</a></p>
<a name="cv"></a>
                <h2>Definition of the Coefficient of Variation</h2>
<p>The Coefficient of Variation   (CV) of the mean, a measurement of variability of the mean price, is calculated   as the standard error divided by the mean. As a measure of precision reflecting   the error due to sampling, it can also be used to construct a confidence   interval for the population mean. For example, a mean price of $1.67 and a CV of   0.004 (.4%) indicates at the 95% confidence level that the population mean price   has an upper limit of $1.68 ($1.67 + 1.96*0.004*$1.67) and a lower limit of   $1.66 ($1.67 - 1.96*0.004*$1.67).
</p>
<p><a href="includes/Sampling_Error_report.rtf">On-Highway Diesel Fuel Prices & Coefficients of Variation Report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/gdu_side3.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
