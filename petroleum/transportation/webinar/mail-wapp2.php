<?php
include_once('../config.php');
include(ROOT.'global/includes/utils/utils.inc');
include(ROOT.'global/includes/utils/Mailer.inc');
?>
<!DOCTYPE html>
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
<title>Learn about new data on the rail transportation of ethanol and biodiesel RSVP</title>
</head>
<body>
<?php
//print_r($_POST);
//die();
$title = $_POST['title'];
$name = $_POST['name'];
$org = $_POST['org'];
$phone = $_POST['phone'];
$emailaddress = $_POST['email'];
$fromName = "EIA-registration";
$from = "arup.mallik@eia.gov";
$to = "arup.mallik@eia.gov";
$cc = $emailaddress;
$bcc = "melinda.hobbs@eia.gov";
$subject = "RSVP -- Learn about new data on the rail transportation of ethanol and biodiesel";
$body = "";
$body .= "
<p><h3>Learn about new data on the rail transportation of ethanol and biodiesel Webinar Attendee:</h3></p>
<p><strong>NAME:</strong>   " . $name . "<br />
<strong>TITLE:</strong>  " . $title . " <br />
<strong>ORGANIZATION:</strong>  " . $org . "<br />
<strong>PHONE:</strong> " . $phone . " <br />
<strong>EMAIL:</strong> " . $emailaddress . "<br /><br />
";
$body .= " Webinar on-line April 7, 11 AM EST
<br />You will receive webinar connection information before meeting at this email address: " . $emailaddress . "<br />";
$body .= "
</p>
<br /><br /><br />
<p class=\"paste\">$title; $name; $org; $phone; $emailaddress;</p>
</p>";
$mailer_arr = array(
$to => $to
);
$mailer = new Mailer();
$mailer->addCC($cc);
$mailer->addBCC($bcc);
$mailer->From = $from;
$mailer->FromName = $fromName;
$mailer->Subject = $subject;
foreach($mailer_arr as $k0=>$v0) {
$mailer->addAddress($k0, $v0);
}
$mailer->Body = $body;
//print_r($mailer);
//exit;
$mailer->send();
header("location: confirm.php");
exit;
?>
</p>
</body>
