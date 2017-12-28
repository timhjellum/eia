<?php$pageTitle = "Forecasting Crude Oil Spot Price Using OECD Petroleum Inventory Levels";
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
<h1>Forecasting Crude Oil Spot Price Using OECD Petroleum Inventory Levels</h1>
<p class="date">March 1, 2003<br />
</p>
<p>This paper presents a short-term monthly forecasting model of West Texas Intermediate
crude oil spot price using OECD petroleum inventory levels. Theoretically, petroleum
inventory levels are a measure of the balance, or imbalance, between petroleum production
and demand, and thus provide a good market barometer of crude oil price change. Based
on an understanding of petroleum market fundamentals and observed market behavior
during the post-Gulf War period, the model was developed with the objectives of being
both simple and practical, with required data readily available. As a result, the model is
useful to industry and government decision-makers in forecasting price and investigating
the impacts of changes on price, should inventories, production, imports, or demand
change. (JEL Q40, C53); Int&#8482;l Advances in Econ. Res., 8 (4): pp. 324-33, Nov 02.
&copy; All Rights Reserved</p>
<strong>Introduction</strong>
<p>Both government and the industrial sector have an interest in forecasting crude oil spot
price. Potential changes in world petroleum supply-demand fundamentals, such as quota
changes of the Organization of the Petroleum Exporting Countries (OPEC), result in questions
on the implications for the crude oil price. Because petroleum inventory levels are
a measure of the balance, or imbalance, between petroleum production and demand, they
reflect changing market pressures on crude oil prices, and thus provide a good market barometer
of crude oil price change in the short run. This paper presents the development of a
short-term monthly forecasting model for West Texas Intermediate crude oil spot price using
Organization for Economic Cooperation and Development (OECD) petroleum inventory levels.
This model was built based on an understanding of petroleum market fundamentals and
the observed market behavior during the post-Gulf War period from January 1992 to February
2001. The results from the forecasting model empirically demonstrate that petroleum
inventories are a good market indicator of crude oil price change.
</p>
<p>The relationship between commodity inventory levels and price has been studied for nearly
a century, tracing back to the early published works of Working [1934] and Kaldor [1939],
where the classical theory of storage was developed to explain why price backwardation
occurred. Empirical studies were also carried out on agricultural commodity markets, see
for example, Working [1934], Brennan [1958], and Telser [1958]. In recent publications,
Pindyck [1994] empirically studied the relationship between inventories and short-run commodity
prices using copper, lumber, and heating oil data. Dale and Zyren [1997] particularly pointed out that energy futures markets behave similarly to futures markets for agricultural
commodities.
</p>
<p>The literature on crude oil and petroleum product markets is enormous. For example,
the book by Horsnell and Mabro [1993] addressed the Brent market and the formation of
world oil prices. A recent paper by Pindyck [2001] is most closely related to the analysis.
He described the short-run dynamic relationship between commodity prices and inventories,
using the petroleum markets for illustrations. Specifically, he explained the equilibrium in
two interconnected markets: a cash spot market and a market for storage. Also related is a
paper by Considine and Larson [2001], who studied the presence of risk premiums on crude
oil inventories.
</p>
<p>It was found that the existing models dealing with commodity price and inventory in
the general equilibrium framework, or addressing specific theoretical and econometric issues,
provide insight into fundamental understanding of the economics behind the market behavior.
However, they require too much expertise and specific data to be implemented in a policy
environment by professionals without substantial economic and statistical training. As a
result, a simple and a practical short-term crude-oil-price forecasting model was developed
that is intuitively appealing to decision-makers and can therefore be easily interpreted and
accepted. The model is also practical from a maintenance standpoint in that it is based on
a single, readily available data seriesÃ³petroleum inventories.
</p>
<p>The next section provides background on the petroleum market, reviewing West Texas
Intermediate (WTI) crude oil spot prices and OECD total petroleum inventories for the last
decade. The following section gives the empirical study a theoretical foundation, explaining
why petroleum prices and inventories are related. Next is an analysis of the data collected
for the study, followed by a presentation of the forecast model and results. The final section
concludes the paper and suggests avenues for future investigation.
</p>
<p><a href="/petroleum/archive/crudeforecast1.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column"><?php include('./includes/side-nav_crudeforecast.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
