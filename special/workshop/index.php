<?php $locale = 'pub';
$url['filter'] = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : '';
?><?php /* To change the Tabs ... change the local to the appropriate value */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php include ('global/includes/eia_head_info.inc') ; ?>
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
   
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body>


<?php /* BEGIN Outer Wrapper */ ?>
<div id="outerX">
  <?php /* Outer Wrapper */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
<script type="text/javascript" src="/renewable/afv/scripts/jquery.multiselect.js"></script>
<script type="text/javascript">
$(function(){
	/*$(".select-meeting").multiselect({
	  selectedList: 1,
	  noneSelectedText: "Select meeting(s)"*/
	  $(".select-meeting").multiselect({
		  //selectedList: 1,
		  noneSelectedText: "Select workshop(s)"
	  });
});
</script>

<?php include ('electricity/includes/subnav_electricity.inc') ; ?>
      <?php /* Page/Body Content */ ?>
      <div class="pagecontent mr_temp4">
        <div class="main_col">

        
        <h1>Workshop on use of EIA's State portal and expanded electricity and coal  browsers</h1>
          
 <p>This is a webinar to demonstrate and answer questions on new features for State data and mapping, including rankings and comparisons, and electricity data browser.  The webinar will debut a coal data browser and demonstrate its interactive coal supply maps and integration with the electricity browser.</p>
<?php /* <p>EIA's draft paper on  <a href="pdf/lace-lcoe_070213.pdf">Levelized Cost and Levelized Avoided Cost of Electricity</a>. </p>*/ ?>
 <p>We welcome your participation. Please register below if you would like to attend<?php /*, either in person or*/ ?>. </p>
 <table>
        <col width = "280px" />
        <col width = "20px" />
         <col width = "100px" />
<tr>
            <td colspan="4" class="no-border" style="line-height:1.6em">
           
 <h3>Tuesday, November 12, 2013 at 4:00PM EST</h3>
  <?php /*ul>
 	<li></li>
 < <li><b>In-person</b><br />
      U.S. Department of Energy<br /> 1000 Independence Avenue, SW<br /> Room 2E-069 <br />Washington, DC 20585  <br />
 <em>You must have a valid photo ID and be a U.S. citizen.</em>
 </li><br />*/ ?>
 	<?php /*li><b>Online*</b>
  </li>
  </ul*/ ?>
<em>This workshop is online.  Instructions for access will be sent the day prior to the workshop at the email address registered. There will be no advanced preparatory materials.  This will be a hands-on demonstration for users. </em>

<br /><br /><br />
<?php /*<b>Neither of these options work for you?</b>
  <ul>
 <li>Provide feedback to <a href="mailto:christopher.namovicz@eia.gov ">christopher.namovicz@eia.gov </a> by July 31, 2013</li>*/ ?>
 <?php /*li>Contact us at <a href="mailto:ngl@eia.gov">ngl@eia.gov</a> to set up a time to speak with us</li*/ ?>
 </ul>        

<b>Logistical questions? </b> 
<ul>
<li>Contact <a href="mailto:mark.elbert@eia.gov">Mark.Elbert@eia.gov</a>
</li>
</ul>
</p>
</td>
<td>&nbsp; </td>
          <td>
  <div  style="width:310px"> <br />
  <h2 >Registration is Closed</h2>

<?php /*  <cfform action=mail-wapp2.cfm method=post name=form1 target=_parent >

<table class="basic" cellpadding="0" cellspacing="0" > 
<tr > 
<td style="color:#666"><b>Name:<br /> </b>
  <cfinput type=text name=name required=yes value=  size=40><br>
</td>
</tr>
<tr>
<td style="color:#666"><b>Title: <br /> </b><cfinput name=title type=text value=  size=40><br></td></tr>
<tr>
<tr>
<td style="color:#666"><b>Organization: <br /> </b><cfinput name=org type=text value=  size=40><br>
</td></tr>

<tr>
<td style="color:#666"><b>Phone:  <br /> </b><cfinput type=text name=phone validateat=onSubmit validate=telephone value=  size=40><br>
</td></tr>
<tr>
<td style="color:#666"><b>Email:  <br /> </b><cfinput type=text name=emailaddress validateat=onSubmit validate=Email value=  size=40><br />
</td></tr>
tr>
<td style="color:#666"><b>Attending: &nbsp; <br /><br />
</b><cfinput name=attend type=radio value= November 06, 2013 at 1:00PM EST>November 6, 2013 at 1:00PM EST<br />
		<cfinput name=attend type=radio value= November 12, 2013 at 4:00PM EST>November 12, 2013 at 4:00PM EST<br />
</td></tr

<tr>
<td colspan="4"><br /><cfinput type=submit name=Submit id=Submit class=submit_btn>
</td></tr>
</table>

</cfform>*/ ?>

  
</div>
         
         </td>
        </tr>
         </table>
 <?php /*p>Also, please feel free to contact EIA at: <a href="mailto:NGL@eia.gov">ngl@eia.gov</a> to provide feedback or to set up a time  to speak with us.  We are accepting  feedback through July 8, 2013.
 </p*/ ?>
 
       <?php /*  &nbsp; &nbsp; &nbsp; Room 2E-069  */ ?>
<?php /*p><b>To attend in person you must have a valid photo ID and be a U.S. citizen.</b> <(Non-citizens can enter the building only with a special clearance.  A <a href="pdf/foreignvisitor-application.pdf">Foreign National Visitor Application</a> must be filled out and returned to  
For registration information please contact <a href="mailto:mindi.farber-deanda@eia.gov">Mindi.Farber-Deanda@eia.gov</a>. at least two weeks in advance of the workshop date.)  For technical questions, please contact <a href="mailto:vishakh.mantri@eia.gov">Vishakh.Mantri@eia.gov</a>. ></p*/ ?>
<p>&nbsp;</p>

 
<?php /*p> Presentations will be linked to the agenda and posted here, with speaker permission.  The workshop will not be recorded.</p*/ ?>  
        
      

       
        
      </div>
      <?php /* END Main Column */ ?>
      <?php /*<?php include ('includes/pl_footer_aeo.inc') ; ?>*/ ?>
    </div>
<?php /* END Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div>
<?php /*END Outer Wrapper */ ?>
</body>
</html>