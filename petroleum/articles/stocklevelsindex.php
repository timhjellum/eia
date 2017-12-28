<?php$pageTitle = "Recent Trends in Crude Oil Stock Levels ";
$L2Title = "Petroleum and Other Liquids";
?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<?php
if(isset($pageTitle) && $pageTitle) {
print "<title>" . $pageTitle . "</title>"; print PHP_EOL;
$pageTitle = '';
}
?>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1>Recent Trends in Crude Oil Stock Levels </h1>
<p class="date">October 1, 1996<br />
</p>
<p>Energy Information Administration (EIA) data for March 1996
primary inventories of crude oil were the lowest recorded in
almost 20 years. Crude oil inventories, which were generally
on a downward trend since the beginning of 1995, fell below
the average range in July 1995 and have yet to recover (Figure
FE1). On September 27, 1996, crude oil stocks registered 303
million barrels, compared to a normal range of nearly 311 to
332 million barrels for September.
</p>
<p>Low crude oil inventories can cause price volatility in crude oil
markets. When inventories are low, refiners resort to purchasing supplemental crude oil supplies to fill immediate needs, driving the price of crude oil higher. Low crude oil inventories can also lead to gasoline, distillate, and jet fuel supply problems.
</p>
<p>This article, the third in a series of three on petroleum stocks,
attempts to identify the components of the decline in the EIA
crude oil stock data. To accomplish this, comprehensive data
on pipelines, tank farms, and refineries are combined with other
information on prices and industry activity. Except where
noted, this analysis examines EIA survey data covering
January 1995 through July 1996 (latest available detailed data)
and excludes stocks held in the Federally owned Strategic Petroleum Reserve (SPR). Inventories in the SPR are analyzed
in a separate sidebar entitled "The Role and Status of the U.S.
Strategic Petroleum Reserve".
</p>
<p>EIA inventory data are disaggregated and examined by industry
sector (refineries, tank farms and pipelines, production leases,
and Alaskan in Transit) and Petroleum Administration for
Defense Districts (PADD). The results of the disaggregations
show the greatest decrease in stocks was at tank farms and
pipelines, roughly 14 million barrels over the 12 months in
1995, and another 14 million barrels from January to July 1996
compared to the same period the previous year (Table FE1).5
Crude oil stocks at refineries did not change much during 1995,
but declined 6 million barrels from January to July 1996
compared to the same period the year before. This fact is
significant since refiners account for less than a third of the U.S.
holdings of crude oil. Stocks on production leases declined
almost a million barrels during 1995, but did not decline further
in 1996. Stocks in transit from Alaska declined 5 million
barrels between January to July 1996 compared to the same
months in 1995, after not showing much change in 1995. The
drop in stocks is most evident in PADD III where refining and
production are concentrated. PADD I had the largest
proportional decline in stocks, losing over 15 percent of the
crude oil holdings during the January and July 1996 period
compared to the same months in 1995.
</p>
<p>
While existing data are helpful in determining where the
decline in stocks occurred, identification of the causes of the
decline in stocks is difficult because of the lack of data and the
complex nature of the industry. The forces that influence crude
oil inventory levels can be divided into two subsets. The first
subset consists of short term forces that influence refiners&#8482;
day-to-day decisions concerning inventory levels. These
forces include the current price of crude oil, the expected price
of crude oil in the future, interest rates, the cost of storage refining margins, and the risk of stock
depletions. Inventory models are used to
quantify the relationship between inventories
and these short term forces. However, the
effort to develop and use inventory models is
beyond the scope of this analysis.
</p>
<p>The second subset of forces influencing crude
oil inventory levels includes long term forces
such as domestic production, the availability of
oil spot markets, the shift to short-haul crude
oil sources, vertical integration into crude oil
production activities, increased offshore
stocks, enhanced inventory management
through improved information technology, and
consolidation in the number of crude oil storage
facilities. The decline in domestic production
accounted for at least a 2 million barrel drop in
EIA crude oil inventory data in 1995.
Year-to-date averages through July 1996 have yet to register a
decline. The impact of other long-term forces is obscured by a
number of trends.
</p>
<p><a href="/petroleum/archive/abohn1.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/side-nav_stocklevels.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>