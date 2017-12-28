<?php// Load dependencies manually instead of using PHPMailerAutoload.php to avoid conflicts between autoloaders
include 'global/php_libraries/PHPMailer-5.2.21/class.phpmailer.php';
include 'global/php_libraries/PHPMailer-5.2.21/class.smtp.php';
// Extend the PHPMailer class
class Mailer extends PHPMailer {
public function __construct() {
if ($_SERVER['HTTP_HOST'] == "www.eia.gov" || $_SERVER['HTTP_HOST'] == "www" || $_SERVER['HTTP_HOST'] == "wwwtest.eia.gov" || $_SERVER['HTTP_HOST'] == "wwwtest") {
$this->Host = 'tontorelay.eia.gov';
$this->SMTPAutoTLS = false;
} else {
$this->Host = 'eiamail.eia.doe.gov';
$this->SMTPAutoTLS = false;
}
}
public $From     = 'no-reply@eia.gov';
public $FromName = 'Application';
public $Host     = 'eiamail.eia.doe.gov';
public $Mailer   = 'smtp';
public $Subject  = 'Application Error';
public $ContentType = "text/html";
}