<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>Heating Oil and Propane Update</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Heating Oil and Propane Update '; ?>
<?php include('./includes/hopu_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>


<h2>FAQs for Respondents</h2>

<h3>Q1:  What is the purpose of this survey?</h3>
<p>
The U.S. Energy Information Administration (EIA) Form EIA-877, "Winter Heating Fuels Telephone Survey," is designed to collect data on State-level stocks and residential prices of No. 2 heating oil and propane during the heating season. The data are used to monitor the prices of propane and No. 2 heating oil during the heating season, and to report to the Congress and others when requested.
</p>
<h3>Q2:  How does the survey work?</h3>
<p>
The EIA-877 "Winter Heating Fuels Telephone Survey" requires participating States to collect residential prices for heating oil and propane once a week by calling individual heating fuel retailers. Data are collected on every Monday from October through March. Price data collected by each State are transmitted to EIA for validation, aggregation, and publication.
</p>
<h3>Q3:  Where can I find published data reported by the EIA-877? </h3>

<ol>
    <li><a href="/petroleum/heatingoilpropane/">Heating Oil and Propane Update (HOPU)</a></li>
    <li><a href="/special/heatingfuels/#/US:propane:week">Winter Heating Fuels</a></li>
    <li><a href="/petroleum/weekly/">This Week in Petroleum (TWIP)</a></li>
</ol>

<h3>Q4:  Who uses these data?</h3>
<p>
EIA provides State and Federal governments, consumers, policy makers, the press, analysts, and others with up-to-date information on retail heating fuels prices during the heating season. Winter Heating Fuels Price data continues to be one of the most requested datasets EIA produces.
</p>
<h3>Q5:  There are several different prices for propane that we offer our customers.  How do I know which price to provide EIA with when they call?</h3>
<p>
Propane prices are often determined by annual consumption and categorized in pricing tiers. A company should report the tier-level price based on the amount of heating fuel the majority of their residential customers consume on a yearly basis. The price should not reflect any discounts such as those given to cash or high-volume purchasers.
Each week, EIA is requesting Monday's price even during the weeks when data collection may be delayed due to holiday schedule. The price you report should be the price as of Monday, not an average of the previous week's price.
</p>
<h3>Q6:  If I have been selected by EIA to participate in the survey, do I have to report data?  </h3>
<p>
Yes. The timely submission of Form EIA-877 by those required to report is mandatory under Section 13(b) of the Federal Energy Administration Act of 1974 (FEAA) (Public Law 93-275), as amended and codified at 15 U.S.C &sect; 772. Failure to report the requested information may result in a civil penalty of not more than $2,500 for each violation, or a fine of not more than $5,000 for each willful violation under 15 U.S.C. &sect; 797(b). In such civil actions, the court may also issue a mandatory injunction commanding any person to comply with these reporting requirements. For purposes of verifying the accuracy of any energy information requested, the government may under 15 USC 796(b), upon written notice, enter your business premises and inspect records and sample any inventory or stocks of energy resources therein.
</p>
<h3>Q7: I operate a small heating fuel company, am I still required to participate in this survey? </h3>
<p>
Yes. Your participation is mandatory under Section 13(b) of the Federal Energy Administration Act of 1974 (FEAA) (Public Law 93-275), as amended. Failure to respond may result in a civil penalty of not more than $2,500 for each violation, or a fine of not more than $5,000 for each willful violation under 15 U.S.C. &sect; 797(b).
EIA will work with you to minimize your response time and facilitate your participation. Having participation from smaller companies in this survey is important so that EIA and its data users have a more accurate understanding of the heating oil and/or propane markets in your state.
</p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/hopu_side.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
