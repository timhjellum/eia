<?php$pageTitle = "Price Changes in the Gasoline Market";
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
<h1>Price Changes in the Gasoline Market - Are Midwestern Gasoline Prices Downward Sticky?</h1>
<p class="date">February 1, 1999<br />
</p>
<p><em>Price asymmetry</em> is the phenomenon whereby prices tend to move differently depending on their direction. To the public, with regard to gasoline, this typically means that retail prices rise faster than they fall. This is sometimes referred to as &quot;downward sticky&quot; prices. Richard Blumenthal, the Connecticut attorney general, was quoted in the December 7, 1998 <em>Washington Post </em>as saying the Exxon-Mobil merger will face scrutiny from regulators because &quot;Gas prices go up a lot faster than they go down.&quot;</p>
<p>EIA data confirm the notion that retail gasoline prices appear asymmetric, typically rising more
quickly than they fall. However, there is significantly more to the question of price asymmetry than
just the upward and downward speed of retail price movements. For the most part, retail prices
move in response to changes in wholesale (or even raw material) prices further upstream in the
manufacturing/distribution chain. Therefore, an examination of price asymmetry must consider the
speed and degree to which price changes at one level are passed downstream, i.e. from wholesale
toward retail. Two types of price asymmetry are discussed and tested in this paper. These are
<em>amount asymmetry</em>, in which the magnitude of the eventual price change differs between different
market levels such as wholesale and retail, and <em>pattern asymmetry</em>, in which the change occurs at a
different rate between market levels depending on direction.
</p>
<p>Previous studies of gasoline price asymmetry, by the General Accounting Office, the American
Petroleum Institute, the Federal Reserve Bank of Dallas, and others have reached differing
conclusions on the existence or nonexistence of price asymmetry in gasoline markets. This report
discusses how those different conclusions are largely the result of different types of econometric
modeling and different frequencies of data, e.g., weekly versus monthly prices.
</p>
<p>The report concentrates on regional gasoline prices in the Midwest from October 1992 through June
1998, and reaches the following conclusions:
<ul>
<li>Wholesale and retail gasoline price changes in the Midwest during this period are basically
symmetric with respect to changes in crude oil prices.
</li>
<li>Retail gasoline prices in the Midwest often rise faster than they fall in response to wholesale gasoline
price changes, so the report detected pattern asymmetry. However, after all lagged price adjustments
have been completed, wholesale price changes will almost completely pass through to the retail level,
so there is little evidence of amount asymmetry.
</li>
<li>The adjustment times between different levels of the gasoline market make it possible for the
detection of pattern asymmetry to be only a statistical artifact. The report shows how, because of time
lags in the gasoline distribution system, retail prices may continue to rise even after wholesale prices
have begun falling, giving the appearance of pattern price asymmetry. However, when allowance is
made for the lagged adjustment times, the perceived pattern asymmetry largely disappears.
</li>
<li>The conclusions of this report depend importantly on various characteristics of the data used,
including frequency and location specificity. Thus, conclusions about price asymmetry at the city or
state level would necessitate a collection of data and an examination of numerous local gasoline
markets.
</ul>
</p>
<p><a href="/petroleum/archive/0626.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/side-nav_sticky.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>