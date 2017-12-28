<?php include_once('../../config.php'); ?>
<!DOCTYPE html><html>
<head>
<title>Heating Oil and Propane Update</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include "global/includes/titling.inc"; ?>
<style>
.past-holiday td {
border-bottom:1px solid #ccc;
vertical-align:bottom;
text-align:right;
color:#999999;
}
</style>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Heating Oil and Propane Update'; ?>
<?php include('./includes/hopu_selector.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<p>
<h3>Holiday Release Schedule</h3>
The Heating Oil and Propane Update is produced during the winter heating season, which extends from October through March of each year.<br /><br />
The standard release time and day of the week will be at 1:00 p. m. (Eastern time) on Wednesdays with the following exceptions. All times are Eastern. <br /><br />
<table width="800" class="data">
<tr>
<th align="left" width="130" valign="top">Data for:</th>
<th align="left" valign="top">Alternate Release Date</th>
<th align="left" valign="top">Release Day</th>
<th align="left" width="90" valign="top">Release Time</th>
<th align="left" width="150" valign="top">Holiday</th>
</tr>
<tr class="past-holiday">
<td>January 18, 2016</td>
<td>January 21, 2016</td>
<td>Thursday</td>
<td>1:00 p.m.</td>
<td>Martin Luther King Jr.</td>
</tr>
<tr class="past-holiday">
<td>February 15, 2016</td>
<td>February 18, 2016</td>
<td>Thursday</td>
<td>1:00 p.m.</td>
<td>President's</td>
</tr>
<tr class="past-holiday">
<td>October 10, 2016</td>
<td>October 13, 2016</td>
<td>Thursday</td>
<td>1:00 p.m.</td>
<td>Columbus</td>
</tr>
<tr class="past-holiday">
<td>December 26, 2016</td>
<td>December 29, 2016</td>
<td>Thursday</td>
<td>1:00 p.m.</td>
<td>Christmas</td>
</tr>
<tr class="past-holiday">
<td>January 2, 2017</td>
<td>January 5, 2017</td>
<td>Thursday</td>
<td>1:00 p.m.</td>
<td>New Year's</td>
</tr>
<tr class="past-holiday">
<td>January 16, 2017</td>
<td>January 19, 2017</td>
<td>Thursday</td>
<td>1:00 p.m.</td>
<td>Martin Luther King Jr.</td>
</tr>
<tr class="past-holiday">
<td>February 20, 2017</td>
<td>February 23, 2017</td>
<td>Thursday</td>
<td>1:00 p.m.</td>
<td>President's</td>
</tr>
<tr>
<td>October 9, 2017</td>
<td>October 12, 2017</td>
<td>Thursday</td>
<td>1:00 p.m.</td>
<td>Columbus</td>
</tr>
<tr>
<td>December 25, 2017</td>
<td>December 28, 2017</td>
<td>Thursday</td>
<td>1:00 p.m.</td>
<td>Christmas</td>
</tr>
<tr>
<td>January 1, 2018</td>
<td>January 4, 2018</td>
<td>Thursday</td>
<td>1:00 p.m.</td>
<td>New Year's</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="99"></td>
</tr>
</tfoot>
</table>
</p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
