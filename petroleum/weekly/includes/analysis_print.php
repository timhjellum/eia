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
<h2>Hurricane Irma prompts high gasoline demand as it disrupts Florida's supply chain</h2>
<p>Hurricane Irma has created several issues with gasoline markets in Florida, both by prompting increased demand and disrupting the supply chain needed to deliver gasoline. Hurricane Irma made landfall in South Florida on September 10 and proceeded on a northwesterly path up the length of the state. Because of the evacuation of people in anticipation of Hurricane Irma, demand for transportation fuels and the logistical challenges in supplying Florida began before it made landfall. As Hurricane Irma approached, shipping traffic was diverted and ports closed, stopping the flow of petroleum products into Florida. People filling their gasoline tanks in anticipation of the storm resulted in a rapid increase in demand. In Hurricane Irma&#8482;s aftermath, demand is slowly returning to normal levels, allowing time for resupply to arrive and supply chains to adjust.
</p>
<p>There are no refineries in Florida or pipelines connecting Florida to supply centers along the U.S. Gulf Coast or any other state. Therefore, unlike most other parts of the country, Florida is almost entirely supplied by marine movements of petroleum products from domestic and international sources.
</p>
<p>Resupply of gasoline will arrive through several large ports located along Florida&#8482;s coastline, each transporting fuel to nearby markets via truck and short-distance pipeline. Terminals within the Port of Tampa supply much of the state&#8482;s west coast. South Florida is supplied via terminals in Port Everglades, just north of Fort Lauderdale. Central Florida is supplied via pipeline from Tampa and Port Canaveral on the Atlantic Coast. Northeastern Florida is supplied by terminals in the Port of Jacksonville. The only product supplied to Florida through a pipeline is sourced from a terminal in Bainbridge, Georgia that is connected to the Colonial Pipeline system and supplies the Florida panhandle by long-distance tanker truck. The rest of western Florida is supplied via truck and barge movements via the Intracoastal Waterway from nearby refineries in Alabama and Mississippi (Map â€“ Product Supply â€“ Florida (PADD 1C)).
</p>
<p><span><a href="../article_images/twip170913figM-lg.png" class="lightbox"><img src="../article_images/twip170913figM.png" width="500" title="Click to enlarge" alt="Product Supply-Florida"/></a></span></p>
<p>Gasoline consumption in Florida averaged 493,000 barrels per day (b/d) in 2016, representing 5% of total U.S. consumption. Over the past five years, Florida&#8482;s monthly gasoline consumption ranged from 428,000 b/d to 538,000 b/d. Hurricanes alter these typical and planned-for demand patterns. Evacuations of large population centers preceding the Hurricane increased passenger car travel and pre-storm fuel purchases, rapidly increasing gasoline and diesel demand at retail stations. This demand increase resulted in a large call on available inventories at product distribution terminals within the state.
</p>
<p>Florida is mostly supplied by domestic refineries along the Gulf Coast and supplemented with imports. In the first half of 2017, tanker and barge movements of gasoline from the Gulf Coast, or Petroleum Administration for Defense District (PADD) 3, to the Lower Atlantic, or PADD 1C, which includes Florida, averaged 488,000 b/d (Figure 1). A large share of these movements were to Florida, with the Port of Tampa typically receiving the largest volumes, according to the <a href="https://www.eia.gov/analysis/transportationfuels/padd1n3/pdf/transportation_fuels_padd1n3.pdf" title="EIA PADD 1 and PADD 3 Transportation Fuels Study">EIA PADD 1 and PADD 3 Transportation Fuels Study</a>. In 2016, Port Canaveral received the highest imported gasoline volumes of the ports in Florida, 15,000 b/d, with the largest suppliers being refineries in Europe.
</p>
<img src="../article_images/twip170913fig1.png" alt="Figure 1. Gulf Coast (PADD3) to Lower Atlantic (ADD 1C) tanker & barge movements of gasoline"/>
<p>Because Florida is largely dependent on marine movements from refineries of the U.S. Gulf Coast, any threat of or actual disruption to that supply, such as Hurricane Harvey, will result in higher prices in Florida markets. From August 21 to August 28, when Hurricane Harvey made landfall in Texas, the retail gasoline prices in Florida and Miami increased 10 cents and 5 cents per gallon (gal), respectively. Then as Hurricane Irma approached, increased demand and falling inventories caused Florida and Miami gasoline prices to increase $0.40/gal and $0.39/gal, respectively, between August 28 and September 4 (Figure 2).
</p>
<img src="../article_images/twip170913fig2.png" alt="Figure 2. Regular gasoline retail prices - all formulations"/>
<p>After Hurricane Irma, demand for gasoline may be slow to recover. Roads will need clearing, power will need restoring, and evacuated residents may return over a longer time period than they were evacuated â€“ which would likely to spread out demand recovery over several weeks. Markets are already anticipating a return to more normal conditions, retail gasoline prices in Florida decreased one cent/gal from the prior week to $2.69/gal on September 11.
</p>
<p>As of publishing â€“ the Port of Tampa, Jacksonville, and Port Everglades have reopened, with others to follow. Soon after, resupply via tanker will arrive from refineries in the Gulf Coast, and Europe, and from product storage terminals in the Caribbean, Canada, and elsewhere in the United States.
</p>
<p><strong>U.S. average regular gasoline and diesel retail prices increase</strong></p>
<p>The U.S. average regular gasoline retail price increased 1 cent from the previous week to $2.69 per gallon on September 11, up 48 cents from the same time last year. The West Coast price increased two cents to $3.04 per gallon, the East Coast price increased one cent to $2.73 per gallon, and the Rocky Mountain and Midwest prices each increased less than one cent, remaining at $2.61 per gallon and $2.54 per gallon, respectively. The Gulf Coast price fell less than one cent to $2.50 per gallon.
</p>
<p>The U.S. average diesel fuel price increased 4 cents to $2.80 per gallon on September 11, 40 cents higher than a year ago. The West Coast price increased six cents to $3.10 per gallon, the Midwest price increased nearly five cents to $2.75 per gallon, the East Coast price increased four cents to $2.83 per gallon, and the Rocky Mountain and Gulf Coast prices each increased three cents to $2.83 per gallon and $2.65 per gallon, respectively.
</p>
<p><strong>Propane inventories gain</strong></p>
<p>U.S. propane stocks increased by 2.3 million barrels last week to 82.2 million barrels as of September 8, 2017, 18.9 million barrels (18.7%) lower than a year ago. Midwest and Gulf Coast inventories increased by 1.4 million barrels and 1.1 million barrels, respectively, while Rocky Mountain/West Coast and East Coast inventories each decreased by 0.1 million barrels. Propylene non-fuel-use inventories represented 4.1% of total propane inventories.
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
<th>09/11/17</th>
<th>Week</th>
<th>Year</th>
</tr>
</thead>
<tbody>
<tr id="rp_gasoline">
<td>Gasoline</td>
<td>2.685</td>
<td>0.006<span class="value_up"></span></td>
<td>0.483<span class="value_up"></span></td>
</tr>
<tr id="rp_diesel">
<td>Diesel</td>
<td>2.802</td>
<td>0.044<span class="value_up"></span></td>
<td>0.403<span class="value_up"></span></td>
</tr>
<!--tr id="rp_heating">
<td>Heating Oil</td>
<td>NA</td>
<td>NA<span class="no_change"></span></td>
<td>NA<span class="no_change"></span></td>
</tr-->
<!--tr id="rp_propane">
<td>Propane</td>
<td>NA</td>
<td>NA<span class="no_change"></span></td>
<td>NA<span class="no_change"></span></td>
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
<th>09/08/17</th>
<th>Week</th>
<th>Year</th>
</tr>
</thead>
<tbody>
<tr id="fp_crude">
<td>Crude oil</td>
<td>47.48</td>
<td>0.19<span class="value_up"></span></td>
<td>1.60<span class="value_up"></span></td>
</tr>
<tr id="fp_gasoline">
<td>Gasoline</td>
<td>1.648</td>
<td>-0.100<span class="value_down"></span></td>
<td>0.287<span class="value_up"></span></td>
</tr>
<tr id="fp_heating">
<td>Heating oil</td>
<td>1.766</td>
<td>0.019<span class="value_up"></span></td>
<td>0.336<span class="value_up"></span></td>
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
<th>09/08/17</th>
<th>Week</th>
<th>Year</th>
</tr>
</thead>
<tbody>
<tr id="s_crude">
<td>Crude oil</td>
<td>468.2</td>
<td>5.9<span class="value_up"></span></td>
<td>-11.9<span class="value_down"></span></td>
</tr>
<tr id="s_gasoline">
<td>Gasoline</td>
<td>218.3</td>
<td>-8.4<span class="value_down"></span></td>
<td>-10.1<span class="value_down"span></td>
</tr>
<tr id="s_distillate">
<td>Distillate</td>
<td>144.6</td>
<td>-3.2<span class="value_down"></span></td>
<td>-18.2<span class="value_down"></span></td>
</tr>
<tr id="s_propane">
<td>Propane</td>
<td>82.183</td>
<td>2.284<span class="value_up"></span></td>
<td>-18.907<span class="value_down"></span></td>
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
