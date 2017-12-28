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
<h2>Previous Diesel Fuel Price Data Collection Procedures</h2>
<p>Every   Monday, retail on-highway diesel prices are collected by telephone and fax from   a sample of approximately 350 retail diesel outlets, including truck stops and   service stations. The data represent the price of ultra low sulfur diesel (ULSD)   which contains less than 15 parts-per-million sulfur. The Environmental   Protection Agency (EPA) requires that all on-highway diesel sold be ULSD by   December 1, 2010 (September 1, 2006 in California). In January 2007, the weekly   on-highway diesel price survey began collecting diesel prices for low sulfur   diesel (LSD) which contains between 15 and 500 parts-per-million sulfur and ULSD   separately. Prior to January 2007, EIA collected the price of on-highway fuel   without distinguishing the sulfur level. On February 19, 2007 EIA began   releasing the detailed sulfur price information that was determined to be   accurate. The publication of Low Sulfur On-Highway Diesel Prices at the U.S.   level was discontinued December 8, 2008. At that tie, the LSDrice estimates   at the U.S. level no longer met accuracy requirements due to a diminishing   number of stations selling LSD as a result of the EPA's regulations on   on-highway diesel fuel. EIA continued to collect LSD prices from the retail   outlets in the survey sample and included them in the average prices of all   types of diesel. By July 26, 2010, the two price series converged since there   were no outlets reporting Low Sulfur On-Highway Diesel (LSD) fuel prices on   EIA's price survey. As of December 1, 2010, any on-highway diesel fuel sold is   ULSD.
</p>
<p>    The   prices reported in this survey are subjected to automated edit checks during   data collection and data processing. Data flagged by the edits are verified with   the respondent. Imputation is used for companies that can not be contacted. The   average survey response rate for 2009 was 99.7%.
</p>
<p> The price estimates   each week are obtained using simple averages at the sampling cell level. For   publication regions that constitute a combination of sampling cells, the volume   of on-highway diesel sold in that region as reported in the EIA-782 monthly   survey is used to weight the sampling cells and obtain publication level prices   for on-highway diesel.
</p>
<p>The average prices are released by 5:00 P.M.   Monday, except on government holidays, in which case the data are released on   Tuesday (but still represent Monday's price). These data are made available   through EIA's hotline (202-586-6966), EIA's web page, and through EIA's E-mail   notification, regular and wireless.
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
