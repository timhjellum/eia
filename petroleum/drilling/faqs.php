<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<?php $hct = 'y'; ?>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<!-- start header -->
<?php $headtitle = 'Drilling Productivity Report '; ?>
<?php $release = 'July 14, 2014'; ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php include('./includes/drilling_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1 style="border-bottom-color:#fff; font-size:18pt">Frequently Asked Questions</h1>
<h3 style="text-transform:none">How often is the report be released?</h3>
<p>The report is released monthly.
</p>
<h3 style="text-transform:none">Is EIA saying that the rig count is no longer relevant</h3>
<p>No.  The rig count remains one of the crucial indicators of oil and natural gas  production changes. It is just not the entire story. The Drilling Productivity  Report (DPR) shows how the rig count, the efficiency or speed of drilling an  average well, the expected oil and natural gas yield from newly drilled wells,  and the change in production from legacy wells all interact to determine regional  production levels.
</p>
<h3 style="text-transform:none">What does the DPR rig count represent?</h3>
<p>The rig count for each region is the monthly average number of rigs operating in the region over the course of the specified month. It is derived from the Baker Hughes Inc. weekly rig count publication.
</p>
<h3 style="text-transform:none">Which numbers in the report are actual data, and which numbers are projections or estimates?</h3>
<p>The figures for rig productivity and the change in production from legacy wells are estimated trends based on the latest available data. The underlying data are often quite volatile, reflecting large variability in the performance of individual wells. The final point of actual production data as reported by the states varies, as each state has different reporting requirements and schedules. Rig count data are actual counts through the month preceding the report-release month.
</p>
<h3 style="text-transform:none">Spreadsheet dates are the first day of the month. Should this be understood as the last day of the prior month, or the last day of the current month?</h3>
<p>This date represents the average daily rate for the listed month.
</p>
<h3 style="text-transform:none">Are natural gas liquids (NGL) included under oil or under natural gas? What about lease condensate and vented or flared natural gas?</h3>
<p>The DPR uses well-level data from state reports. These reports measure hydrocarbon liquids produced at the well as oil measured in barrels and hydrocarbon gases produced at the well as natural gas measured in thousands of cubic feet. Because the DPR uses the well-level data, any separating/processing/refining occurring downstream of the well meter is not accounted for in the DPR. Lease condensate is liquid, counted in the oil stream. Natural gas production includes volumes that after being produced may be vented, flared, reinjected, separated, or otherwise processed; this is also known as produced natural gas or gross withdrawals.
</p>
<h3 style="text-transform:none">Where are the aggregated U.S. total data listed?</h3>
<p>This report purposely avoids aggregating data to the total U.S. level because one of the most important takeaways is to understand the variability of these metrics depending on where in the United States a rig is deployed.  Also, the DPR does not include all hydrocarbon producing areas.
</p>
<h3 style="text-transform:none">Can you provide the raw data used to calculate the estimates and averages provided?</h3>
<p>In some cases, the raw data used come from third- party data vendors, and EIA's contracts with these companies restrict the ability to publish raw data, allowing only aggregations of the data to be published.
</p>
<h3 style="text-transform:none">Does the DPR only report shale gas/tight oil figures?</h3>
<p>The DPR looks at total production coming from the regions indicated by county boundaries in the map provided. As such, it does not distinguish between volumes produced from shale/tight resources and those sourced from traditional hydrocarbon reservoirs. EIA has chosen the regions included in the DPR based on their recent drilling activity and rapid production increases.  Most of the drilling activity and production growth over the past couple of years has occurred in regions where shale gas and tight oil resources are being accessed.
</p>
<h3 style="text-transform:none">How do metrics in other plays compare to the shale/tight plays the DPR is currently highlighting?</h3>
<p>EIA has not targeted plays without significant shale/tight resources in the DPR analysis.  Such plays do not currently display a high degree of drilling activity or rapid production growth.
</p>
<h3 style="text-transform:none">What about drilling activity in smaller, emerging plays?</h3>
<p>The DPR focuses on the regions that are most commercially prominent at present. EIA is tracking a number of the emerging regions, and may expand the coverage of the DPR as these become increasingly important.
</p>
<h3 style="text-transform:none">Why don't Bakken and Eagle Ford production figures in the DPR match the figures published by North Dakota and the Texas Railroad Commission?</h3>
<p>In the case of the Bakken, EIA's definition of the region extends into Montana. As such, it is expected to differ from North Dakota's published Bakken data. EIA's Eagle Ford production numbers include all oil and natural gas production data available from Texas within the group of counties defined on the DPR map. The Texas Railroad Commission may have a different method of aggregating Eagle Ford production.
<h3 style="text-transform:none">How did EIA determine the regional boundaries?</h3>
<p>EIA's analysts defined shale gas and tight oil plays based on their own extensive research. The DPR regional boundaries were selected by grouping together all of the counties that reported production from those plays. The DPR model analyzes all drilling and production activity within those boundaries.
</p>
<h3 style="text-transform:none">Why don't the total DPR production levels or growth rates match those of EIA's other published U.S. oil and natural gas statistics?</h3>
<p>The DPR includes only oil and gross natural gas production found within the regions specified in the report. It does not account for the rest of the onshore production in the Lower 48 states, the Gulf of Mexico, or Alaska.
</p>
<h3 style="text-transform:none">Does the DPR address the completion rate of wells in each play, which is the most critical factor in accessing new production coming onstream?</h3>
<p>Well completion data are crucial, yet not readily accessible.  As such, EIA uses an estimated lag time from drilling activity to new-well production.  EIA has observed a high correlation between rig counts and new-well counts with a two month lag.  In some cases, where either data or industry reports suggest otherwise, a different lag may be used.
</p>
<h3 style="text-transform:none">How should the legacy decline rates be interpreted? How can they be translated into well-decline curves or decline rates?</h3>
<p>The legacy production change is the change in total regional production from one month to the next, excluding production coming from newly drilled wells. Production from a well typically declines over time, as pressure from the formation around the wellbore is depleted. In the absence of new wells being drilled, the group of all existing wells in a region will decline in production from one month to the next. As such, the DPR separates the wells in a region into groups of newly drilled wells and existing, or legacy, wells, measuring the production levels separately.  Each month, the group of newly drilled wells from the prior month is moved into the group of legacy wells, and a new group of newly drilled wells is measured. It is important to note that as the number of wells moving into the legacy group increases, the legacy production change tends to become more negative; i.e., greater total production declines from month to month. This method does not translate directly to what many people trditionally csider well decline curves or decline rates.
</p>
<h3  style="text-transform:none">Will the report include insight into specific technological developments being used in the field?</h3>
<p>EIA is tracking industry reports to stay abreast of technological innovation, and the effects of those developments are reflected in the DPR by affecting the average productivity data shown in the report.  However, DPR will not identify the extent to which specific technologies are used in each region or how the application of specific technologies affects the productivity of individual wells.
</p>
<h3  style="text-transform:none">Will the report include drilling rig availability and economics?</h3>
<p>EIA has no current plans to cover these topics in the DPR.
</p>
<h3  style="text-transform:none">Does the DPR include any classifications or distinctions based on specific operators, subregions, ownership, royalties, or other factors?</h3>
<p>The DPR only considers the overall drilling rigs, efficiency metrics, and production levels found within the listed boundaries for each region.
</p>
<h3  style="text-transform:none">How does the DPR analysis relate to EIA&#8482;s oil and natural gas resource assessments?</h3>
<p>The DPR looks at active development, not the long-term resource potential within the highlighted regions.  It uses past and present drilling activity to make an estimate of the near-term production that will result directly from that observed activity.
</p>
<h3  style="text-transform:none">Do production decline rates differ between regions?</h3>
<p>Yes.  There are many reasons for the variability in production decline rates, including different geophysical properties of the producing formations, economics, and above-ground takeaway infrastructure.
</p>
</div>
</div>
<?php include('./includes/rsb.inc'); ?>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
