<?php include_once('../../config.php'); ?>
<!DOCTYPE html><html>
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
<p><strong>SHOPP Financial Forms</strong> - for State Energy Officials</p>
<p>The Federal forms below are required for State Energy Officials participating in the State Heating Oil and Propane Program (SHOPP) to execute their cooperative agreements with the U. S. Energy Information Administration.<br />
<ol>
<li>The Application for Federal Assistance, Form SF-424, is required to be submitted annually no later than June 15th in order for the applicant to receive funds for the upcoming season. This form consists of three parts:
</li>
<ol style="list-style-type:lower-alpha" >
<li> <a href="pdf/sf424.pdf">SF-424</a> - general funding information</li>
<li><a href="pdf/sf424a_budget.pdf">SF-424A</a> - annual budget</li>
<li><a href="pdf/sf424_assurances.pdf">SF-424B</a> - assurance pages</li>
</ol>
<li>The Federal Financial Report, <a href="pdf/sf425.pdf">Form SF-425</a>, collects basic data on federal and recipient expenditures related to the SHOPP grant.  This form should be submitted by August 1st of each year after the end of the season.   </li><br />
<li>Final/Technical  Report:  The final report should contain information about the grantee's activities during the cooperative agreement period.  This form should be completed at the end of the cooperative agreement cycle by August 1, 2016 and is accessible at <a href="https://www.osti.gov/elink/241-3.jsp">https://www.osti.gov/elink/241-3.jsp. </a>  </li>
</ol>
</p>
<p> For further information contact:<br />
Marcela E. Rourk<br />
SHOPP Survey Manager<br />
Phone: (202) 586-4412<br />
Email: <a href="mailto:marcela.rourk@eia.gov">marcela.rourk@eia.gov</a>
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
