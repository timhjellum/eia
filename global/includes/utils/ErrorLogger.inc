<?phprequire "Neic.inc";
class ErrorLogger extends NEIC {
var $application_name;
var $error_message;
public function add($url, $message, $stack = null) {
if (is_null($this->application_name)) {
throw new Exception('Application name not specified');
} else {
$this->sql = <<< SQL
INSERT INTO NEIC.error_log (appname, url, message, stack)
VALUES (:appname, :url, :message, :stack)
SQL;
$stackLob  = null;
$this->parse(['appname' => $this->application_name,
'url'     => $url,
'message' => $message]);
if (!is_null($stack)) {
$stackLob = $this->newLob();
$this->bindByName('stack', $stackLob, -1, SQLT_CLOB);
$stackLob->writeTemporary($stack);
}
$this->execute();
if (!is_null($stackLob)) {
$stackLob->free();
}
}
}