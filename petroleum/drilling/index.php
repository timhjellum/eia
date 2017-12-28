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
<?php $release = 'August 14, 2017'; ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php include('./includes/drilling_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<div id="tabs">
<ul>
<li><a href="#tabs-summary-1">New-well production per rig by region</a></li>
<li><a href="#tabs-summary-2">Production by region </a></li>
<li><a href="#tabs-summary-3">DUC wells by region</a></li>
</ul>
<div id="tabs-summary-1">
<?php include('./includes/table01_productionperrig.inc'); ?>
</div>
<div id="tabs-summary-2">
<?php include('./includes/table02_production.inc'); ?>
</div>
<div id="tabs-summary-3">
<?php include('./includes/table03_ducwells.inc'); ?>
</div>
</div>
<div class="notice">
<p><strong>NOTE:</strong><br />
This month&#8482;s Drilling Productivity Report (DPR) has two significant changes to improve the coverage and quality of the analysis.
</p>
<p>First, the DPR is expanding to include the Anadarko region, consistent with DPR&#8482;s aim to cover the most prolific and active on-shore regions where oil and natural gas are produced from shales and other tight resources.  In the recent years the Anadarko region, which includes 24 Oklahoma and 5 Texas counties, has become the target of many producers using improved drilling and completion technology to this already well-established oil and gas producing basin.  As of July 2017, there are 129 operating rigs in the Anadarko region, second to only Permian region with 373 operating rigs.
</p>
<p>Second, the DPR will henceforth present data for the Marcellus and Utica regions as a combined Appalachia region.  With the increasing number of wells in Pennsylvania being drilled into the Utica formation and some wells in Ohio producing from the Marcellus shale, the previous regional definitions based on surface boundaries are becoming less meaningful, especially where the two plays overlap.  Furthermore, combining the relatively small number of active rigs across the broader Appalachia region should improve the precision of our productivity estimates.   State-level production data will continue to be provided through EIA&#8482;s monthly survey of operators in major producing states, including, Pennsylvania, Ohio, and West Virginia.
</p>
<p>Supplemental DPR data for the Anadarko and Appalachia region, including DUC data, are being provided starting this month.  Also, in order to preserve continuity of existing data series for the Marcellus and Utica regions as previously delineated, EIA will continue to provide data for those regions until further notice.  Note that rig productivity, legacy well declines, and most recent production estimates for the combined Appalachia region, which are developed using analysis for all of its wells taken together, will not necessarily equal the sum of corresponding values shown for the component Utica and Marcellus regions.
</p>
<p>Beyond the two changes being implemented in this month&#8482;s edition, EIA will continue to pursue further improvements to the DPR.  Another improvement planned over the next few months will be to make DPR data available through EIA&#8482;s Application Programming Interface (API), which should enable users of the data to more easily update their own spreadsheets and analyses as new monthly data is issued.
</p>
</div>
<p>The Drilling Productivity Report uses recent data on the total number of drilling rigs in operation along with estimates of drilling productivity and estimated changes in production from existing oil and natural gas wells to provide estimated changes in oil and natural gas production for seven key regions. EIA's approach does not distinguish between oil-directed rigs and gas-directed rigs because once a well is completed it may produce both oil and gas; more than half of the wells produce both.
</p>
<div class="image-container" style="width:620px">
<a href="images/dpmapv4l-wtitle.png" class="lightbox"><img src="images/dpmapv4l-wtitle_sm.jpg" title="Click to enlarge" alt="key tight oil and shale gas regions" width="575"/></a>
</div>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/rsb.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
