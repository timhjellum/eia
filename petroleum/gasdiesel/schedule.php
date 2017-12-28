<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>Gasoline and Diesel Fuel Update</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include('../includes/sub-navigation.inc'); ?>
<?php $headtitle = 'Gasoline and Diesel Fuel Update'; ?>
<?php include('./includes/report-details.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* end main content */ ?>
<h3>Holiday Release Schedule</h3>
<p>The prices are published around 5:00 p.m. Monday (Eastern time), except on government holidays, when the data are released on Tuesday (but still represent Monday's price).  <br /><br />
</p>
<table class="table">
<thead>
<tr>
<th>Data for:</th>
<th>Alternate Release Date</th>
<th>Release Day</th>
<th>Holiday</th>
</tr>
</thead>
<tbody>
<tr class="past-holiday">
<td>October 10, 2016</td>
<td>October 11, 2016</td>
<td>Tuesday</td>
<td>Columbus</td>
</tr>
<tr class="past-holiday">
<td>December 26, 2016</td>
<td>December 27, 2016</td>
<td>Tuesday</td>
<td>Christmas</td>
</tr>
<tr class="past-holiday">
<td>January 2, 2017</td>
<td>January 3, 2017</td>
<td>Tuesday</td>
<td>New Year's</td>
</tr>
<tr class="past-holiday">
<td>January 16, 2017</td>
<td>January 17, 2017</td>
<td>Tuesday</td>
<td>Martin Luther King Jr.</td>
</tr>
<tr class="past-holiday">
<td>February 20, 2017</td>
<td>February 21, 2017</td>
<td>Tuesday</td>
<td>President's</td>
</tr>
<tr class="past-holiday">
<td>May 29, 2017</td>
<td>May 30, 2017</td>
<td>Tuesday</td>
<td>Memorial</td>
</tr>
<tr class="past-holiday">
<td>September 4, 2017</td>
<td>September 5, 2017</td>
<td>Tuesday</td>
<td>Labor</td>
</tr>
<tr>
<td>October 9, 2017</td>
<td>October 10, 2017</td>
<td>Tuesday</td>
<td>Columbus</td>
</tr>
<tr>
<td>December 25, 2017</td>
<td>December 26, 2017</td>
<td>Tuesday</td>
<td>Christmas</td>
</tr>
<tr>
<td>January 1, 2018</td>
<td>January 2, 2018</td>
<td>Tuesday</td>
<td>New Year's</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="99"></td>
</tr>
</tfoot>
</table>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
