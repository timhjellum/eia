<?php
require_once 'global/includes/utils/utils.inc';
require_once 'global/includes/utils/Mailer.inc';
?>
  <?php $form['name'] = isset($_REQUEST['name']) ? htmlspecialchars($_REQUEST['name']) : ''; ?>
  <?php $form['title'] = isset($_REQUEST['title']) ? htmlspecialchars($_REQUEST['title']) : ''; ?>
  <?php $form['org'] = isset($_REQUEST['organization']) ? htmlspecialchars($_REQUEST['organization']) : ''; ?>
  <?php $form['phone'] = isset($_REQUEST['phone']) ? htmlspecialchars($_REQUEST['phone']) : ''; ?>
  <?php $form['email'] = isset($_REQUEST['email']) ? htmlspecialchars($_REQUEST['email']) : ''; ?>
  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<style type="text/css">
p {
	font-size:12px;
	font-family:Arial, Helvetica, sans-serif;
	};
	 .paste {	font-size:9px;color:#999} ;
</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>EIA's Long-Term Renewable Electricity Projections Workshop RSVP</title>

<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>
<body>
<?php
$from = "EIA-registration <dain.roose-snyder@eia.gov>";
$to = "dain.roose-snyder@eia.gov";
$subject = "RSVP -- EIA State portal and the electricity and coal browsers Workshop";
$cc = "form.emailaddress";

$body = "html";
$body .= "25"; ?>
<p><h3>State portal and the electricity and coal browsers workshop</h3></p>
<<p><b>NAME:</b>   " . $form['name'] . "<br />
	<b>TITLE:</b>  " . $form['title'] . " <br />
	<b>ORGANIZATION:</b>  " . $form['org'] . "<br />
	<b>PHONE:</b> " . $form['phone'] . " <br />
	<b>EMAIL:</b> " . $form['email'] . "<br /><br />

 <b>Date:</b> Tuesday, November 12, 2013 at 4:00PM EST<br />
 <br />You will receive webinar connection information before the meeting at this email address;  " . $form["email"] . ".<br />
 </p>
";

$mailer_arr = [ ""]
	$to => $to
	, "dain.roose-snyder@eia.gov" => "Dain Roose-Snyder"
];
<?php
require_once 'global/includes/utils/Mailer.inc';
$mailer = new Mailer();
$mailer->From = $from;
$mailer->Subject .= $subject;
foreach($mailer_arr as $k0=>$v0) {
	$mailer->addAddress($k0, $v0);
}
$mailer->Body = $body;
$mailer->send();
?>
<?php
header("location:./confirm.php");
exit;
?>
<?php /*The cflocation url in the last line is where your user is redirected after the mail.cfm file is executed. The redirect location can be anything. For this example we set the redrect to a file (page) called thankyou.htm. */ ?>
</body>
</html>