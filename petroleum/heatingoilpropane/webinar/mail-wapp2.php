<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml">
<head>
<style type="text/css">
p {
font-size:12px;
font-family:Arial, Helvetica, sans-serif;
}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>2012 State Heating Oil and Propane (SHOPP) Webinar</title>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php
$from = "EIA-registration <marcela.rourk@eia.gov>";
$to = "marcela.rourk@eia.gov";
$subject = "RSVP -- 2012 State Heating Oil and Propane (SHOPP) Webinar";
$body = "";
$body .= "<p><strong>NAME:</strong>   " . $form['name'] . "<br />
<strong>TITLE:</strong>  " . $form['title'] . " <br />
<strong>ORGANIZATION:</strong>  " . $form['org'] . "<br /><br />
<strong>WEBINAR:</strong> 2012 State Heating Oil and Propane (SHOPP) - 8/14/12, 9:30 a.m.<br />
<p><br />
<strong>Share My Information:</strong>  " . $form['attend'] . "<br />
<strong>PHONE:</strong> " . $form['phone'] . " <br />
<strong>EMAIL:</strong> " . $form['emailaddress'] . "<br /><br />
</p>
<p>
";
if(isset($form['attend']) && strtolower($form['attend']) == 'yes') {
$body .= "*You may share this information with other attendees as part of a directory of attendees.";
} else {
$body .= "*You may <strong>not</strong> share this information with other attendees as part of a directory of attendees.";
}
$body .= " <p> For registration information please contact <a href=\"mailto:marcela.rourk@eia.gov\">Marcela.Rourk@eia.gov</a> or (202) 586-4412.
</p>
</p>";
$mailer_arr = [
$to => $to
//, "Scott.Gearhart@eia.gov" => "Scott Gearhart"
];
require($_SERVER['DOCUMENT_ROOT'].'/global/includes/utils/Mailer.inc';
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
</p>

</body>
</html>
