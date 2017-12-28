<?php
$curr_path= $_SERVER['PHP_SELF'];
$archive= (strpos($curr_path, '/archive/')) != false ? 1 : 0;
$locale = 'ap';
$twip_page = 'analysis';
?>
<!DOCTYPE html>
<html>
<head>
<title>This Week In Petroleum Summary Printer-Friendly Version</title>
<META name="keywords" content="petroleum, crude oil,
heating oil,
fuel oil, diesel fuel,
distillate, gas,
gasoline, propane,
liquefied gases,
heating fuel, prices,
stocks, production,
imports, refinery inputs,
supply">
<META name="description" content=
"This Week In Petroleum, Production,
Imports, Stocks,
Supply, Prices,
Data and Analysis from the Energy Information Administration.">
<!-- No Cache Code  -->
<META HTTP-EQUIV="Expires" CONTENT="0">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
<?php if ( $archive != 0) { ?>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<link rel="stylesheet" href="/petroleum/weekly/styles/styles.css" type="text/css">
<link rel="stylesheet" href="/petroleum/weekly/styles/print.css" type="text/css" media="print">
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php } else { ?>
<?php include('modal_header.inc'); ?>
<button class="frame_print_button" >Print</button>
<?php } ?>
<!-- start header -->
<div class="l-row print">
<div class="l-full-width-column">
<?php if ( $archive != 0) { ?><a href="/petroleum/weekly/">&lsaquo; See the most recent This Week in Petroleum</a><?php } ?>
<h1>This Week in Petroleum</h1>
<?php include('release_date.html'); ?>
<!-- Start of Article  -->
<h2>More Chinese crude oil imports coming from non-OPEC countries</h2>
<p>A group of 44 U.S. onshore-focused oil producers issued a record amount of equity in 2016. In the fourth quarter of 2016, capital expenditure for these companies was $4.9 billion (72%) higher than in the fourth quarter of 2015. This increase in investment spending was the first year-over-year increase since the fourth quarter of 2014 and largest annual increase for any quarter since at least the first quarter of 2012. Quarterly financial statements from these producers also show an overall improvement in their financial situation compared with early 2016 and all of 2015. Company announcements and continued increases in the number of active oil rigs suggest U.S. oil production companies are increasing capital expenditure in 2017.
</p>
<p>China, the world&#8217;s largest crude oil net importer, increased the share of its crude oil imports from countries outside the Organization of the Petroleum Exporting Countries (OPEC) in 2016. Of the country&#8217;s 7.6 million barrels per day (b/d) of 2016 crude oil imports, 57% came from OPEC countries, led by Saudi Arabia (13% of total imports), Angola (11%), Iraq (10%), and Iran (8%). Leading non-OPEC suppliers included Russia (14% of total imports), Oman (9%), and Brazil (5%).  While total crude oil imports from OPEC exceed those from non-OPEC sources, crude oil from non-OPEC countries made up 65% of the growth in China&#8217;s imports between 2012 and 2016. Recent Chinese import data, crude oil price spreads, and non-OPEC production trends suggest continued growth in non-OPEC countries&#8217; share of China&#8217;s growing crude oil imports.
</p>
<p>China&#8217;s crude oil imports increased by 2.2 million b/d between 2012 and 2016, with the non-OPEC countries&#8217; share increasing from 34% to 43% over the period (Figure 1). Since the beginning of 2012 through February 2017 (the latest month for which data are available), the market shares of three of the top four OPEC suppliers to China (Saudi Arabia, Angola, and Iran) fell when measured using rolling 12-month averages. Over the same period, however, market shares for China&#8217;s top four non-OPEC suppliers (Russia, Oman, Brazil, and the United Kingdom), increased. While still comparatively small as a share of China&#8217;s crude oil imports,  imports from Brazil reached a record high of 0.6 million b/d in December 2016, while imports from the United Kingdom reached their all-time high of 0.2 million b/d in February 2017.
</p>
<img src="article_images/twip170405fig1-lg.png" />
<p>Growth in China&#8217;s total crude oil imports in 2016 reflected both lower domestic <a href="/beta/international/analysis.cfm?iso=CHN" title="crude oil production">crude oil production</a> and continued demand growth. After increasing steadily between 2012 and 2015, China&#8217;s crude oil production declined significantly in 2016. Total liquids supply in China averaged 4.9 million b/d in 2016, a year-over-year decline of 0.3 million b/d, the largest drop for any non-OPEC country in 2016 (Figure 2). U.S. crude oil production fell by over 0.5 million b/d in 2016, but total liquids declined by under 0.3 million b/d because <a href="/petroleum/weekly/archive/2017/170119/includes/analysis_print.php" title="other liquids production">other liquids production</a> increased by under 0.3 million b/d. Much of Chinese production growth from 2012 through 2015 was driven by more expensive drilling and production techniques, such as enhanced oil recovery (EOR), on older fields. Investments in development of new resee fell as oil prices declined, contributing to a fall in total Chinese production because of the natural declines of old fields.
</p>
<img src="article_images/twip170405fig2-lg.png" />
<p>China&#8217;s demand growth has remained the world&#8217;s largest in every year since 2009, including an increase of 0.4 million b/d in 2016. As China increased its imports to address a growing gap between its domestic production and demand, it surpassed the United States as the world&#8217;s largest <a href="/todayinenergy/detail.php?id=15531" title="net importer of total petroleum in 2014">net importer of total petroleum in 2014</a>. Other factors contributed to an increase in Chinese crude oil imports. For example, in July 2015, the Chinese government began allowing independent refiners (those not owned by the government) to import crude oil. The <a href="/petroleum/weekly/archive/2016/160518/includes/analysis_print.php" title="independent refiners">independent refiners</a> previously had restrictions on the amount of crude oil they could import and relied on domestic supply and fuel oil as primary feedstocks. A second factor was the Chinese government&#8217;s filling of new Strategic Petroleum Reser ites.
</p>
<p>Total Chinese crude oil imports reached an all-time high of 8.6 million b/d in December 2016, with January and February 2017 data showing record highs for those particular months, at a time when demand is usually lower because of shutdowns related to the Chinese New Year (Figure 3).
</p>
<img src="article_images/twip170405fig3-lg.png" />
<p>Recent market dynamics suggest the market share of non-OPEC suppliers in China may continue to grow as its imports increase and the country remains a competitive market for suppliers. The <a href="/outlooks/steo/archives/mar17.pdf#page=5" title="Brent-Dubai Exchange of Futures for Swaps (EFS)">Brent-Dubai Exchange of Futures for Swaps (EFS)</a>, an instrument that allows trade between the Brent futures market and the Dubai swaps market and represents the price premium of Brent over Dubai crude oil, is at the lowest levels for this time of year since 2010 (Figure 4). The relatively low price of Brent crude oil allows long distance <a href="/todayinenergy/detail.php?id=18571" title="arbitrage">arbitrage</a> opportunities for some suppliers, particularly producers in the Atlantic basin market. For Chinese refiners, purchasing crude oil from Atlantic basin producers is generally more expensive because of higher transportation costs. The relatively lower price of Brent crude oil, however, allows some Chinese fners to purchase Atlantic basin grades less expensively than Middle Eastern grades, even after the cost of shipping. Producers in Brazil, the United Kingdom, and, increasingly, the <a href="/dnav/pet/hist/LeafHandler.ashx?n=PET&amp;s=MCREXCH2&amp;f=M" title="United States">United States</a> have taken advantage of this arbitrage, boosting flows of non-OPEC oil into China. The March edition of EIA&#8217;s monthly <em><a href="/outlooks/steo/archives/mar17.pdf" title="Short-Term Energy Outlook">Short-Term Energy Outlook</a></em> (STEO) forecasts a 0.3 million b/d increase in China&#8217;s total liquid fuels demand in both 2017 and 2018.
</p>
<img src="article_images/twip170405fig4-lg.png" />
<p><strong>U.S. average regular gasoline and diesel prices rise</strong></p>
<p>The U.S. average regular gasoline retail price increased over four cents from the previous week, to $2.36 per gallon on April 3, up 28 cents from the same time last year. The Midwest price rose 10 cents to $2.28 per gallon, the Gulf Coast price rose nearly four cents to $2.12 per gallon, the East Coast price rose nearly three cents to $2.30 per gallon, and the West Coast price increased less than one cent, remaining at $2.85 per gallon. The Rocky Mountain price fell less than one cent, remaining at $2.30 per gallon.
</p>
<p>The U.S. average diesel fuel price increased over two cents to $2.56 per gallon on April 3, 44 cents higher than a year ago. The Gulf Coast price increased nearly four cents to $2.41 per gallon, the Rocky Mountain price rose nearly three cents to $2.62 per gallon, and the West Coast, East Coast, and Midwest prices each increased two cents to $2.84 per gallon, $2.61 per gallon, and $2.48 per gallon, respectively.
</p>
<p><strong>Propane inventories fall</strong></p>
<p>U.S. propane stocks decreased by 1.2 million barrels last week to 41.6 million barrels as of March 31, 2017, 23.3 million barrels (35.9%) lower than a year ago. Gulf Coast and East Coast inventories decreased by 1.1 million barrels and 0.5 million barrels, respectively, while Midwest inventories increased by 0.4 million barrels, and Rocky Mountain/West Coast inventories rose slightly, remaining essentially unchanged. Propylene non-fuel-use inventories represented 5.9% of total propane inventories.
</p>
<h4 class="author">For questions about This Week in Petroleum, contact the Petroleum Markets Team at 202-586-4522.</h4>
<!-- End of Article  -->
<hr/>
<h4>Retail prices <em>(dollars per gallon)</em></h4>
<div id="retail_prices">
<img src="../images/gcprrets.gif" alt="Conventional Regular Gasoline Prices Graph.">
<!--img src="../images/diress.gif" alt="Residential Heating Oil Prices Graph."-->
<img src="../images/dlprrets.gif" alt="On-Highway Diesel Fuel Prices Graph.">
<!--img src="../images/prress.gif" alt="Residential Propane Prices Graph."-->
</div>
<table class="data" id="rp">
<thead class="double-header">
<tr>
<th>&nbsp;</th>
<th>Retail prices</th>
<th colspan="2">Change from last</th>
</tr>
<tr>
<th>&nbsp;</th>
<th>%v.date5%</th>
<th>Week</th>
<th>Year</th>
</tr>
</thead>
<tbody>
<tr id="rp_gasoline">
<td>Gasoline</td>
<td>%v.r1c1%</td>
<td>%v.r1c2%<span class=%g.r1c2%></span></td>
<td>%v.r1c3%<span class=%g.r1c3%></span></td>
</tr>
<tr id="rp_diesel">
<td>Diesel</td>
<td>%v.r2c1%</td>
<td>%v.r2c2%<span class=%g.r2c2%></span></td>
<td>%v.r2c3%<span class=%g.r2c3%></span></td>
</tr>
<!--tr id="rp_heating">
<td>Heating Oil</td>
<td>%v.r3c1%</td>
<td>%v.r3c2%<span class=%g.r3c2%></span></td>
<td>%v.r3c3%<span class=%g.r3c3%></span></td>
</tr-->
<!--tr id="rp_propane">
<td>Propane</td>
<td>%v.r4c1%</td>
<td>%v.r4c2%<span class=%g.r4c2%></span></td>
<td>%v.r4c3%<span class=%g.r4c3%></span></td>
</tr-->
</tbody>
<tfoot>
<tr>
<td colspan="99"></td>
</tr>
</tfoot>
</table>
<hr/>
<h4>Futures prices <em>(dollars per gallon*)</em></h4>
<div id="futures_prices">
<img src="../images/crprfuts.gif" alt="Crude Oil Futures Price Graph.">
<img src="../images/gcprfutnys.gif" alt="RBOB Regular Gasoline Futures Price Graph.">
<img src="../images/dhprfutnys.gif" alt="Heating Oil Futures Price Graph.">
</div>
<table class="data" id="fp">
<thead class="double-header">
<tr>
<th>&nbsp;</th>
<th>Futures prices</th>
<th colspan="2">Change from last</th>
</tr>
<tr>
<th>&nbsp;</th>
<th>%v.date2%</th>
<th>Week</th>
<th>Year</th>
</tr>
</thead>
<tbody>
<tr id="fp_crude">
<td>Crude oil</td>
<td>%v.r5c1%</td>
<td>%v.r5c2%<span class=%g.r5c2%></span></td>
<td>%v.r5c3%<span class=%g.r5c3%></span></td>
</tr>
<tr id="fp_gasoline">
<td>Gasoline</td>
<td>%v.r6c1%</td>
<td>%v.r6c2%<span class=%g.r6c2%></span></td>
<td>%v.r6c3%<span class=%g.r6c3%></span></td>
</tr>
<tr id="fp_heating">
<td>Heating oil</td>
<td>%v.r7c1%</td>
<td>%v.r7c2%<span class=%g.r7c2%></span></td>
<td>%v.r7c3%<span class=%g.r7c3%></span></td>
</tr>
</tbody>
<tfoot>
<tr>            <td colspan="4"><strong>*<strong>Note:</strong></strong> Crude oil price in dollars per barrel.</td>        </tr>
</tfoot>
</table>
<hr/>
<h4>Stocks <em>(million barrels)</em></h4>
<div id="stocks">
<img src="../images/crstuss.gif" alt="U.S. Crude Oil Stocks Graph.">
<img src="../images/disstuss.gif" alt="U.S. Distillate Stocks Graph.">
<img src="../images/gtstuss.gif" alt="U.S. Gasoline Stocks Graph.">
<img src="../images/prstuss.gif" alt="U.S. Propane Stocks Graph.">
</div>
<table class="data" id="s">
<thead class="double-header">
<tr>
<th>&nbsp;</th>
<th>Stocks</th>
<th colspan="2">Change from last</th>
</tr>
<tr>
<th>&nbsp;</th>
<th>%v.date2%</th>
<th>Week</th>
<th>Year</th>
</tr>
</thead>
<tbody>
<tr id="s_crude">
<td>Crude oil</td>
<td>%v.r10c1%</td>
<td>%v.r10c2%<span class=%g.r10c2%></span></td>
<td>%v.r10c3%<span class=%g.r10c3%></span></td>
</tr>
<tr id="s_gasoline">
<td>Gasoline</td>
<td>%v.r11c1%</td>
<td>%v.r11c2%<span class=%g.r11c2%></span></td>
<td>%v.r11c3%<span class=%g.r11c3%span></td>
</tr>
<tr id="s_distillate">
<td>Distillate</td>
<td>%v.r12c1%</td>
<td>%v.r12c2%<span class=%g.r12c2%></span></td>
<td>%v.r12c3%<span class=%g.r12c3%></span></td>
</tr>
<tr id="s_propane">
<td>Propane</td>
<td>%v.r13c1%</td>
<td>%v.r13c2%<span class=%g.r13c2%></span></td>
<td>%v.r13c3%<span class=%g.r13c3%></span></td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="99"></td>
</tr>
</tfoot>
</table>
</div>
</div>
<!-- start footer -->
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
<script>
$(document).ready(function(){
$('button.frame_print_button').click(function(){
window.print();
});
});
</script>
<?php } ?>
</body>
</html>
