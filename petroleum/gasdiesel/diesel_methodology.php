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
                <h2>Diesel Fuel Sampling Methodology</h2>
<p>The respondents reporting to the weekly diesel price survey represent a stratified probability proportional to size (PPS) sample selected from a frame list of retail outlets. The outlet sampling frame was constructed using commercially available lists from several sources in order to provide comprehensive coverage of truck stops and service stations that sell on-highway diesel fuel in the United States. The frame includes about 62,000 service stations and 4,000 truck stops. Due to statistical and operational considerations, outlets in the States of Alaska and Hawaii are excluded from the target population.
</p>
<p>The primary publication cells of the survey include Petroleum Administration for Defense Districts (PADDs) 2-4, three sub-PADDs within PADD 1, and the two subparts of PADD 5 (the State of California and the West Coast region excluding California). The U.S., the East Coast (PADD 1), and the West Coast (PADD 5) are considered secondary publication cells since their prices are aggregated based on the prices from their primary publication cell components.
To select the sample, allocations were first assigned to all primary publication cells through a simulation of coefficients of variation of average prices using historical price data. The target coefficient of variation for each primary publication cell was capped at 1%. Allocations were further assigned to the States covered by each primary publication cell. The distribution of allocations was proportional to the annual State total volume of retail on-highway diesel fuel sales. This allocation procedure yielded a total target sample size of 403 retail outlets. The States were treated as sampling strata in the sample design.
</p>
<p>It is believed that on-highway diesel fuel sold through all service stations combined only accounts for a small portion of the retail on-highway diesel fuel market. The truck stops on the frame were also classified into two categories, dependent on whether they belong to the nation's four largest on-highway diesel sellers. Based on information from other survey data and industry sources the proportions of total diesel volumes sold by outlets in the three categories (service stations, mid-sized truck stops, and top 4) was assumed to be 20%, 55%, and 25%, respectively. These volume proportions, along with the outlet counts for the three categories on the frame, were used to calculate relative size measures for the outlets in each of the three categories. Pareto Sampling, which is a PPS procedure, and the size measures for each outlet were then used to select sampling units from each State.
</p>
<p>The reported and imputed prices each week are aggregated in multiple steps to obtain price estimates for publication cells. First, State average prices are calculated as simple unweighted averages of reported and imputed prices. Volumes of on-highway diesel sold in the States in 2010, as published by the Federal Highway Administration, are then used to weight the State average prices and obtain average prices for primary publication cells.  Average prices for secondary publication cells are weighted averages of primary publication cell prices based on the proportion of diesel volumes attributable to their component primary publication cells.
</p>
<p></p>
<p><a href="diesel_methodology_archive.php">Previous Diesel Fuel Sampling Methodology</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/gdu_side2.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
