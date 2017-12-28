<?php $locale = 'pub'; ?><?php $url['filter'] = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : ''; ?>
<?php include_once('../../../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
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
<?php include('../includes/sub-navigation.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1>Webinar: New Crude-By-Rail Data added to the Petroleum Supply Monthly</h1>
<p>Starting with the release of January 2015 data on March 30, EIA began including new data on <a href="/petroleum/transportation">U.S. movements of crude oil by rail</a>. On May 27 at 3:00 p.m. join EIA's subject matter experts as they describe the new data on crude oil transported by rail, where it can be found, and discuss additional analysis the data enables. To join the webinar, please fill out the registration form below.
</p>
<p>The new data fully integrates EIA's petroleum supply and disposition data along with pipeline, tanker, and barge data. Fully incorporating crude-by-rail movements improves EIA's regional petroleum balances by reducing regional crude oil adjustments (unaccounted for crude oil).
</p>
<p>Analytical reports derived from this new data include:
</p><ul><p><a href="/todayinenergy/detail.cfm?id=21092">Crude by rail accounts for more than half of East Coast refinery supply in February 2015</a> - May 5, 2015</p>
<p><a href="/petroleum/transportation/#tabs-summary-1">U.S. movements of crude oil by rail</a> (data page) - April 29, 2015</p>
<p><a href="/todayinenergy/detail.cfm?id=20592">New EIA monthly data track crude oil movements by rail</a> - March 31, 2015</p></ul>
</p>
<p>The data is located in EIA's <a href="http://wwwdev.eia.gov/petroleum/supply/monthly/">Petroleum Supply Monthly</a> tables affected are tables 5-25 and 57. A new table 60 shows crude oil movements by pipeline, tanker, barge, and rail. The current table 60 is now  table 61.
</p>
<table>
<col width = "280px" />
<col width = "20px" />
<col width = "100px" />
<tr>
<td colspan="4" class="no-border" style="line-height:1.6em">
<br />
<h4>The webinar will be available on Wednesday, May 27th at 3 p.m. EST and will cover:</h4>
<p>
<ul><li>EIA's new crude-by-rail webpage</li>
<li>EIA's new crude-by-rail data</li>
<li>How the rail data impacts EIA's petroleum balances</li>
<li>Questions and answers</li></ul>
</p>
<br />
<p><strong>Contact <a href="mailto:Steve.Azzara@eia.gov">Steve.Azzara@eia.gov</a>, 202-586-6739 </strong></p>
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
