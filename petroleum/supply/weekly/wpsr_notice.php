<?php include_once('../../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>Upcoming change to weekly crude oil inventory data series</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include(ROOT.'petroleum/includes/sub-navigation.inc'); ?>

<div class="l-row header report-details">
	<div class="l-full-width-column">
    <a href="/petroleum/supply/weekly/">&lsaquo; Weekly Petroleum Status Report</a>
    <h2>Upcoming change to weekly crude oil inventory data series</h2>
        <div class="release-dates">
            <div class="date-container">
                <div class="label">Release Date:</div>
                <div class="date">September 21, 2016</div>
            </div>
        </div>
	</div>
</div>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>





<P>
EIA's <a href="/petroleum/supply/weekly/"><em>Weekly Petroleum Status Report</em> (WPSR)</a> will no longer include crude oil lease stocks in the U.S. total commercial crude oil inventory data series starting on October 13, 2016. <br /><br />
<ul>
<li>Sourcekey names and labels will not change for the commercial crude oil inventory data series, even though the data will now exclude lease stocks.</li>
<li>Format/layout will not change to WPSR publication files.</li>
<li>Backcasted historical commercial crude oil data excluding lease stocks to show inventory changes.</li>
<li>Historical crude oil including lease stocks data will only be available in the <a href="/petroleum/supply/weekly/screenshot.pdf">Petroleum Data Tables</a> with a new sourcekey that has been created to maintain the history.</li>
<li>Stockband data and charts will be updated to reflect the change in series.</li>
<li>A test of WPSR IR released files will be provided for csv and xls formats. (See schedule below)</li>
</ul>
<p>
    Review <a href="/petroleum/weekly/archive/2016/160914/includes/analysis_print.cfm"><em>This Week in Petroleum</a></em> and <a href="/petroleum/supply/weekly/wpsr_notice_09142016.cfm">previous notice</a> for more information about these changes.
</p>
<p>
Dates and procedures for testing the WPSR data, particularly for automated data retrieval programs, follow:
<p>
<h3>Testing schedule</h3>
<p>
    Testing will be conducted under the same conditions as the regular weekly WPSR release that takes place at 10:30 a.m. on Wednesdays. EIA will conduct one test of the WPSR through the test site. The test version of WPSR is located at: <a href="/petroleum/supply/weekly/testsite.cfm">http://www.eia.gov/petroleum/supply/weekly/testsite.cfm</a>.
</p>
<table class="data"><caption></caption><thead><tr><th>Day</th>
<th style="text-align:center;">Date</th>
<th style="text-align:center;">Product</th>
<th style="text-align:center;">Time</th>
<th style="text-align:center;">Test Scenarios</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tuesday</td>
            <td style="text-align:center;">September 27, 2016</td>
            <td style="text-align:center;">WPSR</td>
            <td style="text-align:center;">11:00 a.m.</td>
            <td style="text-align:center;">September 16, 2016 data replacing September 9, 2016</td>
        </tr>
    </tbody>
<tfoot>
<tr>
<td colspan="99"></td>
</tr>
</tfoot>
</table>
<p>This test will use test data files reflecting time periods in September 2016. As each test occurs, the test files will be replaced with data for the next week.
</p>
<p>The test data will be automatically released precisely as scheduled above, because the sourcekey and label will remain the same, the test should be seamless only the value of the data will change.
</p>
<p>If you have any questions prior to or after the test, please contact: <a href="mailto:gatekeeper@eia.gov">gatekeeper@eia.gov</a>.
</p>
<h3>Detailed testing instructions</h3>
<p>
Test site address: <a href="/petroleum/supply/weekly/testsite.cfm">http://www.eia.gov/petroleum/supply/weekly/testsite.cfm</a>.
</p>


<ol>
    <li>Five minutes before the scheduled time on the test day, access the test product with the appropriate URL.</li>
    <li>After you have accessed the test URL, you will receive a customized "503 Error - Page Temporarily Unavailable" like the one below:
    <div class="notice">
        <p>503 - Sorry! This file is temporarily unavailable.<br><br>
        A new version of this file is currently pending release. <br><br>
        This page should automatically refresh to download the new release at 11:00:00 AM (in 56 seconds)<br>
        If it does not, click here to manually re-try.<br><br>
        (Estimated time remaining: 56 seconds)</p>
        </div>
    </li>
    <li>Once you receive the 503 error page, <strong>do nothing more</strong>. The page with the updated data files will automatically refresh at the scheduled release time.</li>
    <li>Following the test, please email EIA at <a href="mailto:gatekeeper@eia.gov">gatekeeper@eia.gov</a> and let us know if you experienced any problems.</li>
    <li>NOTE:  Any automated retrieval program that excessively accesses information from EIA's website is prohibited. Excessive robot activity on EIA's website can cause delays and interfere with other customers' timely access to information. EIA is committed to promptly releasing information according to established schedules. EIA retains the right to limit or deny the use of any robotic activity that EIA considers an excessive or malicious practice (for example, robots that access or download information from EIA websites multiple times per second).</li>
</ol>



<?php /* end main content */ ?>
</div>
<div class="l-side-column">
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
