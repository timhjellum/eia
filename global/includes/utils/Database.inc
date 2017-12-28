<?phpabstract class Database {
var        $sql;
protected        $connection_name;
protected static $_conn           = [];
protected        $_stmt           = null;
protected        $nls_date_format = null;
private		 $configClass;
function __construct($configFileName = '/db/DatabaseConfig.inc') {
if(file_exists($_SERVER["SystemDrive"] . $configFileName)) {
require_once $_SERVER["SystemDrive"] . $configFileName;
if(class_exists(basename($_SERVER["SystemDrive"] . $configFileName, '.inc'))) {
$this->configClass = basename($_SERVER["SystemDrive"] . $configFileName, '.inc');
}
else {
$this->configClass = 'DatabaseConfig';
}
}
else if(file_exists($_SERVER["SystemDrive"] . '/db/' . $configFileName . '.inc')) {
require_once $_SERVER["SystemDrive"] . '/db/' . $configFileName . '.inc';
$this->configClass = $configFileName;
}
else {
throw new Exception("Unable to open database config file located at " . $_SERVER["SystemDrive"] . $configFileName . ".inc, or " . $_SERVER["SystemDrive"] . "/db/" . $configFileName . ".inc.");
}
if (!isset(static::$_conn[ $this->connection_name ])) {
static::getConnection();
}
if (!is_null($this->nls_date_format)) {
$tmpSql    = $this->sql;
$this->sql = "ALTER SESSION SET NLS_DATE_FORMAT = '{$this->nls_date_format}'";
$this->parse();
$this->execute();
$this->sql = $tmpSql;
}
}
private function getConnection() {
static::$_conn[ $this->connection_name ] = call_user_func($this->configClass . '::getConn', $this->connection_name);
}
protected function bind(&$bindVariablesArray = null, $type = null) {
if (is_array($bindVariablesArray)) {
foreach ($bindVariablesArray as $k => $v) {
if (is_array($v)) {
$this->bindArrayByName($k, $bindVariablesArray[ $k ], count($bindVariablesArray[$k]));
} else {
if (!is_null($v)){// if $v is blank or null, oci_bind_by_name will throw an error. 930 sends blank values in the 'data' call
$this->bindByName($k, $bindVariablesArray[ $k ]);
}
}
}
}
}
protected function bindByName($bv_name, &$variable, $max_length = -1, $type = SQLT_CHR) {
if (!oci_bind_by_name($this->_stmt, $bv_name, $variable, $max_length, $type)) {
$error = oci_error($this->_stmt);
throw new Exception ("Unable to bind variable to $bv_name.\n$error[sqltext]\nError: $error[message]");
}
}
protected function bindArrayByName($bv_name, &$variable, $max_table_length = -1, $max_item_length = -1, $type = SQLT_CHR) {
if (!oci_bind_array_by_name($this->_stmt, $bv_name, $variable, $max_table_length, $max_item_length, $type)) {
$error = oci_error($this->_stmt);
throw new Exception ("Unable to bind array to $bv_name.\n$error[sqltext]\nError: $error[message]");
}
}
protected function fetchObject() {
return oci_fetch_object($this->_stmt);
}
protected function fetchArray() {
return oci_fetch_array($this->_stmt, OCI_ASSOC + OCI_RETURN_LOBS);
}
protected function fetchAll(&$output,
$flag = OCI_FETCHSTATEMENT_BY_ROW,
$keyInLowerCase = true,
$removeNulls = true) {
$number_of_rows = oci_fetch_all($this->_stmt, $output, 0, -1, $flag);
if ($number_of_rows === false) { //error
$error = oci_error($this->_stmt);
throw new Exception("Error getting data.\nMessage: $error[message]\nSQL: $error[sqltext]");
} else if ($number_of_rows) { //greater than zero
if ($keyInLowerCase) {
static::lowerKeys($output);
}
if ($removeNulls) {
static::removeNulls($output);
}
}
return $number_of_rows;
}
protected function newLob() {
return oci_new_descriptor(static::$_conn[ $this->connection_name ]);
}
protected function parse(&$bindVariablesArray = null) {
$this->_stmt = oci_parse(static::$_conn[ $this->connection_name ], $this->sql);
if ($this->_stmt) {
$this->bind($bindVariablesArray);
} else {
$error = oci_error(static::$_conn[ $this->connection_name ]);
throw new Exception("Error getting data.\nMessage: $error[message]\nSQL: $error[sqltext]");
}
}
protected function commit() {
if (!@oci_commit(static::$_conn[ $this->connection_name ])) {
$error = oci_error(static::$_conn[ $this->connection_name ]);
throw new Exception("Error committing.\nMessage: $error[message]\nSQL: $error[sqltext]");
}
}
protected function rollback() {
if (!@oci_rollback(static::$_conn[ $this->connection_name ])) {
$error = oci_error(static::$_conn[ $this->connection_name ]);
throw new Exception("Error committing.\nMessage: $error[message]\nSQL: $error[sqltext]");
}
}
protected function execute($mode = OCI_COMMIT_ON_SUCCESS) {
if (!oci_execute($this->_stmt, $mode)) {
$error = oci_error($this->_stmt);
throw new Exception("Error executing query.\nMessage: $error[message]\nSQL: $error[sqltext]");
}
}
public function get($bindVariablesArray = null) {
try {
$this->parse($bindVariablesArray);
$this->execute();
$this->fetchAll($output);
return $output;
} catch (Exception $e) {
//Re-throw exception to preserve stack trace
throw $e;
}
}
private function lowerKeys(&$array) {
if (is_array($array)) {
foreach ($array as &$v) {
if (is_array($v)) {
$this->lowerKeys($v);
}
}
$array = array_change_key_case($array);
}
}
protected static function removeNulls(&$array) {
if (is_array($array)) {
foreach ($array as $k => &$v) {
if (is_array($v)) {
static::removeNulls($v);
} elseif (is_null($v)) {
unset($array[ $k ]);
}
}
}
}
}