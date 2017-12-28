<?php include_once('../../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>Company Level Imports Explanatory Notes</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include(ROOT.'petroleum/includes/sub-navigation.inc'); ?>
<div class="l-row header report-details"><div class="l-full-width-column">
        
                <a href="/petroleum/imports/companylevel/">&lsaquo; Company Level Imports</a>
                <h2>
Company Level Imports Explanatory Notes
</h2>
        </div>
</div>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<p>
<strong>Notice:</strong>&nbsp;&nbsp;Ongoing analysis of imports data to the Energy Information Administration reveals that some imports are not correctly reported on Form EIA-814 "Monthly Imports Report". Contact with the companies provides sufficient information for EIA to include these imports in the data even though they have not provided complete reports on Form EIA-814. Estimates are included in aggregate data, but the estimates are not included in the file of Company-Level Imports. Therefore, summation of volumes for PAD Districts 1-5 from the Company-Level Imports will not equal aggregate import totals.<br /><br />
<strong>Explanation of Codes Used in Imports Database Files</strong>
<table  width="70%" class="data">
<tr>
<th class="bold">SURVEY_ID</td>
<td style="text-align: left;">EIA-814 Survey Form Number for Collecting Petroleum Import Statistics</td>
</tr>
<tr>
<th class="bold">RPT_PERIOD</td>
<td style="text-align: left;">Report Period in YYMM Format</td>
</tr>
<tr>
<th class="bold">R_S_NAME</td>
<td style="text-align: left;">Importing Company Name</td>
</tr>
<tr>
<th class="bold">LINE_NUM</td>
<td style="text-align: left;">Line Number Reported by Importer of Record</td>
</tr>
<tr>
<th class="bold">PROD_CODE</td>
<td style="text-align: left;">Internal EIA Product Code</td>
</tr>
<tr>
<th class="bold">PROD_NAME</td>
<td style="text-align: left;">Product Name</td>
</tr>
<tr>
<th class="bold">PORT_CODE</td>
<td style="text-align: left;">Port Code</td>
</tr>
<tr>
<th class="bold">PORT_CITY</td>
<td style="text-align: left;">Port of Entry</td>
</tr>
<tr>
<th class="bold">PORT_STATE</td>
<td style="text-align: left;">State Abbreviation</td>
</tr>
<tr>
<th class="bold">PORT_PADD</td>
<td style="text-align: left;">Petroleum Administration for Defense District (PADD) for the Port of Entry</td>
</tr>
<tr>
<th class="bold">GCTRY_CODE</td>
<td style="text-align: left;">Country Code</td>
</tr>
<tr>
<th class="bold">CNTRY_NAME</td>
<td style="text-align: left;">Country Name</td>
</tr>
<tr>
<th class="bold">QUANTITY</td>
<td style="text-align: left;">Import Quantity (thousand barrels)</td>
</tr>
<tr>
<th class="bold">SULFUR</td>
<td style="text-align: left;">Sulfur Percent</td>
</tr>
<tr>
<th class="bold">APIGRAVITY</td>
<td style="text-align: left;">API Gravity</td>
</tr>
<tr>
<th class="bold">PCOMP_RNAM</td>
<td style="text-align: left;">Processing Company Name</td>
</tr>
<tr>
<th class="bold">PCOMP_SNAM</td>
<td style="text-align: left;">Processing Facility Name</td>
</tr>
<tr>
<th class="bold">PCOMP_STAT</td>
<td style="text-align: left;">Processing Company State Code</td>
</tr>
<tr>
<th class="bold">STATE_NAME</td>
<td style="text-align: left;">Processing Company State</td>
</tr>
<tr>
<th class="bold">PCOMP_PADD</td>
<td style="text-align: left;">Processing Company PADD</td>
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
