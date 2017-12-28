<?php$pageTitle = "Noncommercial Trading in the Energy Futures Market";
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
<h1>Noncommercial Trading in the Energy Futures Market</h1>
<p class="date">May 1, 1996<br />
</p>
<p align="center"><strong>Introduction</strong> </p>
<p>How do futures markets affect spot market prices?
This is one of the most pervasive questions
surrounding futures markets, and it has been
analyzed in numerous ways for many commodities.
Early researchers concentrated on the relationship
between spot prices and the "term structure" of
futures prices, i.e., the instantaneous values of futures
prices with different maturities. For example,
Holbrook Working's cost-of-storage concept was
shown to determine the term structure of futures
prices in storable agricultural commodity futures
(Brennan, 1958). Vignola and Dale (1980) showed that
the cost-of-storage concept can also be applied to
financial futures markets, so that the term structure of
Treasury bill futures was determined by financing
costs, not by the unbiased expectations hypothesis of
the term structure of interest rates. More recently,
numerous studies have examined various aspects of
pricing and efficiency in nonagricultural commodities.
</p>
<p>An alternative way to examine the price impact of
futures markets is to ask whether or not those traders
who have no commercial interest, commonly referred
to as "speculators," can destabilize prices. Despite a
vast body of research showing that futures markets
are generally efficient, questions about the role of
speculators repeatedly arise. This paper utilizes a
new approach to the examination of price impacts of
speculators on futures markets. It focuses initially on
specially obtained data on commodity "pools," which
are large funds of money that may move quickly
between and across futures markets and other
financial markets; it then broadens the scope to
include large noncommercial traders in general. This
research also differs from previous work in its
comparison and analysis of the holdings of large
commercial and noncommercial traders, and
demonstrates that changes in noncommercial positions in energy futures markets are closely related
to price changes in those markets. The paper
concludes that noncommercial traders are likely to
switch between markets and add to "hot money"
flows, and that noncommercial traders follow price
trends in energy markets rather than set them.
</p>
<p><a href="/petroleum/archive/dalezyrn.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column"><?php include('./includes/side-nav_dalezyrn.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
