<?php/* EIA Global PHP wrapper for PHPMailer - 9/16/2015
Example usage:
// Define the global SMTP mailer
include $_SERVER['APPL_PHYSICAL_PATH'] . 'global\php\PHPMailer\Mailer.inc';
$mailer = new Mailer();
$mailer ->FromName = "AEO Data Browser";
$mailer ->Subject = "Application error on $_SERVER[HTTP_HOST]";
$mailer ->Body="Message body here";
$mailer ->addAddress('Steven.Waters@eia.gov','Steven Waters');
// If sending fails, throw a PHP error
if (!$mailer->send()) {
throw new Exception($mailer->ErrorInfo);
} else {
$json = [
'status' => 'ok',
'msg'    => 'Error message sent'
];
}
// Encode the JSON
$result = json_encode($json, JSON_NUMERIC_CHECK);
// if the JSON encoding was successful, output it
if ($result) print $result;
Some additional options:
$mailer->SMTPDebug = 3;                               // Enable verbose debug output
$mailer->isSMTP();                                      // Set mailer to use SMTP
$mailer->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mailer->addReplyTo('info@example.com', 'Information');
$mailer->addCC('cc@example.com');
$mailer->addBCC('bcc@example.com');
$mailer->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mailer->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mailer->isHTML(true);                                  // Set email format to HTML
$mailer->AltBody = 'This is the body in plain text for non-HTML mail clients';
More options:
http://phpmailer.github.io/PHPMailer/
*/
// Load dependencies manually instead of using PHPMailerAutoload.php to avoid conflicts between autoloaders
include 'class.phpmailer.php';
include 'class.smtp.php';
// Extend the PHPMailer class
class Mailer extends PHPMailer {
public function __construct() {
if ($_SERVER['HTTP_HOST'] == "www.eia.gov" || $_SERVER['HTTP_HOST'] == "www" || $_SERVER['HTTP_HOST'] == "wwwtest.eia.gov" || $_SERVER['HTTP_HOST'] == "wwwtest") {
$this->Host = 'tontorelay.eia.gov';
} else {
$this->Host = 'eiamail.eia.doe.gov';
}
}
public $Mailer = 'smtp';
public $From = 'no-reply@eia.gov';
public $FromName = 'No "FromName" defined';
public $Subject = 'No "Subject" defined';
}
