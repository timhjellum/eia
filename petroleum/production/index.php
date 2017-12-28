<?php $locale = 'ap'; ?><?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>EIA-914 monthly production report</title>
<?php $widgets="n"; ?>
<?php $jvm2="y"; ?>
<?php $hct="y"; ?>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<link rel="stylesheet" href="css/styles.css" type="text/css">
<link rel="stylesheet" href="css/print.css" type="text/css" media="print">
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php include('./includes/page_header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<div id="tabs">
<ul>
<li><a href="#oil-tab">Crude oil</a></li>
<li><a href="#ng-tab">Natural gas</a></li>
</ul>
<hr>
<div id="oil-tab">
<div id="petroleum_chart"></div>
<div id="petroleum_table2" class="hide_tbl">
<table id="petroleum_table" class="data">
<caption>Crude Oil <em>(thousand barrels per day)</em></caption>
<thead id="petroleum_thead">
<tr>
<th></th>
<th>State/area</th>
<th id="pet_start_date"></th>
<th id="pet_last_month_date"></th>
<th>Percent change</th>
<th id="pet_last_year_date"></th>
<th>Percent change</th>
</tr>
</thead>
<tbody>    </tbody>
<tfoot>            <td colspan="99">
<p>Notes: Crude oil includes lease condensate. The sum of  individual states may not equal total U.S. volumes due to independent rounding.  A zero may indicate volume of less than 0.5 thousand barrels per day. Previous  months' production volumes may have been revised for all states/areas. Percent change is calculated using unrounded values.<br/>
Sources: Data for Arkansas, California, Colorado, Federal Offshore Gulf of Mexico, Kansas, Louisiana, Montana, New Mexico, North Dakota, Ohio, Oklahoma, Pennsylvania, Texas, Utah, West Virginia, and Wyoming are from the EIA-914 survey. Data for states/areas not individually surveyed on the EIA-914 (Alabama, Alaska, Arizona, Federal Offshore Pacific, Florida, Idaho, Illinois, Indiana, Kentucky, Michigan, Mississippi, Missouri, Nebraska, Nevada, New York, South Dakota, Tennessee, and Virginia) are from EIA estimates published in the Petroleum Supply Annual and Petroleum Supply Monthly reports, based on crude oil production data from state government agencies and the U.S. Department of the Interior, Bureau of Safety and Environmental Enforcement (and predecessor agencies), and first purchase data reported on Form EIA-182, <em>Domestic Crude Oil First Purchase Report</em>.
</p>
</td>    </tfoot>
</table>
</div>
</div>
<div id="ng-tab">
<div id="natural_gas_chart"></div>
<div id="natural_gas_table2" class="hide_tbl">
<table id="natural_gas_table" class="data">
<caption>Natural Gas <em>(million cubic feet per day)</em></caption>
<thead id="petroleum_thead">
<tr>
<th></th>
<th>State/area</th>
<th id="ng_start_date"></th>
<th id="ng_last_month_date"></th>
<th>Percent change</th>
<th id="ng_last_year_date"></th>
<th>Percent change</th>
</tr>
</thead>
<tbody>    </tbody>
<tfoot>
<td colspan="99">
<p>
<!-- Notes: Natural gas production represents monthly natural gas gross withdrawals estimated from data collected on the EIA-914 survey. Data for Arkansas, California, Colorado, Kansas, Louisiana, Montana, New Mexico, North Dakota, Ohio, Oklahoma, Pennsylvania, Texas, Utah, West Virginia, Wyoming, and Federal Offshore Gulf of Mexico are individually collected on the EIA-914 survey. The &quot;other states&quot; category comprises states/areas not individually collected on the EIA-914 survey (Alabama, Arizona, Federal Offshore Pacific, Florida, Idaho, Illinois, Indiana, Kentucky, Maryland, Michigan, Mississippi, Missouri, Nebraska, Nevada, New York, Oregon, South Dakota, Tennessee, and Virginia). Before 2016, Federal Offshore Pacific is included in California. Data for Alaska are obtained directly from the state. Data for 2016 are estimated. The sum of individual states may not equal total U.S. volumes due to independent rounding. Previous months' production volumes may have been revised for all tates/areas. ecent change is calculated using unrounded values. <br> -->
Notes: Natural gas production represents monthly natural gas gross withdrawals estimated from data collected on the EIA-914 survey. Data for Arkansas, California, Colorado, Kansas, Louisiana, Montana, New Mexico, North Dakota, Ohio, Oklahoma, Pennsylvania, Texas, Utah, West Virginia, Wyoming, and Federal Offshore Gulf of Mexico are individually collected on the EIA-914 survey. The "Other States" category comprises states/areas not individually collected on the EIA-914 survey (prior to 2015, that includes Alabama, Arizona, Arkansas, California, Colorado, Federal Offshore Pacific, Florida, Illinois, Indiana, Kansas, Kentucky, Maryland, Michigan, Mississippi, Missouri, Montana, Nebraska, Nevada, New York, North Dakota, Ohio, Oregon, Pennsylvania, South Dakota, Tennessee, Utah, West Virginia, and Virginia; starting in 2015, "Other States" includes Alabama, Arizona, Federal Offshore Pacific, Florida, Idaho, Illinois, Indiana, Kentucky, Maryland, Michigan, Mississippi, Missouri, Nebraska, Nevada, NewYork, Oregon,Suth Dakota, Tennessee, and Virginia).<br>
Sources: Form EIA-914,  Monthly Crude Oil, Lease Condensate, and Natural Gas Production Report and its  predecessor, Monthly Natural Gas Production Report; BSEE reports; PointLogic Energy;  Ventyx; BENTEK Energy; industry reports; and EIA computations.
</p></td>
</tfoot>
</table>
</div>
</div>
</div>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/side.inc'); ?>
</div><!-- /l-column -->
</div><!-- /l-row -->
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
<script src="js/914.js" charset="utf-8"></script>
</body>
</html>
