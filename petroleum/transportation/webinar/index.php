<?php $locale = 'pub'; ?><?php $url['filter'] = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : ''; ?>
<?php include_once('../../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>Webinar: Learn about new data on the rail transportation of ethanol and biodiesel</title>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<link rel="stylesheet" type="text/css" href="/renewable/afv/css/jquery.multiselect.css" />
</script>
<script type="text/javascript">
$(function() {
$('#tabs').tabs();
});
</script>
<script language="javascript">
function toggle() {
var ele = document.getElementById("toggleText");
var text = document.getElementById("displayText");
if(ele.style.display == "block") {
ele.style.display = "none";
text.innerHTML = "RSVP";
}
else {
ele.style.display = "block";
text.innerHTML = "RSVP (form open below) ";
}
}
</script>
<style type="text/css">
ul { font-size:12px;
}
</style>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<!-- start header -->
<script type="text/javascript" src="/renewable/afv/scripts/jquery.multiselect.js"></script>
<script type="text/javascript">
$(function(){
$(".select-meeting").multiselect({
//selectedList: 1,
noneSelectedText: "Select workshop(s)"
});
});
<?php include(ROOT.'petroleum/includes/sub-navigation.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1>Webinar: Learn about new data on the rail transportation of ethanol and biodiesel</h1>
<p>Starting with the April 4<sup>th</sup> release of the March 2016 <em>Petroleum Supply Monthly</em>, which has data for January 2016, EIA included new data on ethanol and biodiesel transported by railroad.
</p>
<p>The new data is fully integrated in EIA's petroleum supply and disposition data along with pipeline, tanker, and barge data.  The new data is aggregated with movements by pipeline, tanker, and barge.
</p>
<p>EIA is initiating the new series with monthly data revised to include rail movements of ethanol and biodiesel from January 2014 through the current reporting month, January 2016.
</p>
<p>Starting in the release of the April 2016 <em>Petroleum Supply Monthly</em>, which will contain data for February 2016, tables 5-24 will contain the changes. A new table 60 will show crude oil, ethanol, and biodiesel movements by pipeline, tanker, barge, and rail. The current table 60 will now be table 61.
</p>
<table>
<col width = "280px" />
<col width = "20px" />
<col width = "100px" />
<tr>
<td colspan="4" class="no-border" style="line-height:1.6em">
<br />
<h4>Participate in EIA's webinar on Thursday, April 7 at 11:00 a.m. EST.</h4>
<p>
<ul>An introduction to <br />
<ul>
<li>EIA's new ethanol and biodiesel-by-rail data</li>
<li>How the rail data impacts EIA's product balances</li>
<li>Questions and answers</li></ul>
</ul> </p>
<br />
<p><strong>Contact <a href="mailto:arup.mallik@eia.gov">Arup.Mallik@eia.gov</a>, 202-586-7713 </strong></p>
</td>
<td class="indented"> </td>
<td>
<div  style="width:300px" class="white_box">
<h2 >Registration is required</h2>
<form action="mail-wapp2.php" method=post name=form1 target=_parent >
<table class="basic" cellpadding="0" >
<tr>
<td style="color:#666"><strong>Name:<br /> </strong>
<input type=text name=name required=yes value=''  size=40><br>
</td>
</tr>
<tr>
<td style="color:#666"><strong>Title: <br /> </strong><input name=title type=text value=''  size=40><br></td>        </tr>
<tr>
<tr>
<td style="color:#666"><strong>Organization: <br /> </strong><input name=org type=text value=''  size=40><br>
</td>        </tr>
<tr>
<td style="color:#666"><strong>Phone: (000-000-0000)  <br /> </strong>
<input type="text" name="phone" required pattern="\d{3}[\-]\d{3}[\-]\d{4}">
<br>
</td>        </tr>
<tr>
<td style="color:#666"><strong>Email:  <br /> </strong>
<input type="email" name="email" required size="40">
<br />
</td>        </tr>
<tr>
<td colspan="4"><br /><input type=submit name=Submit id=Submit class=submit_btn>
</td>        </tr>
</table>
</form>
</div>
</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="99"></td>
</tr>
</tfoot>
</table>
<p>&nbsp;</p>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
