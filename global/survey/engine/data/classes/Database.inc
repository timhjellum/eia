<?phprequire_once $_SERVER['SystemDrive'] . '\db\DatabaseConfigLegacy.inc';
/**
* Defines the database and the most commonly used functions. A lot of methods here are simply wrappers but some
* allow calling a method without passing the DB connection resource as the parameter.
* PHP version 5
*
* @category data
* @package  Default
* @author   Luis Rubero <luis.rubero@eia.gov>
* @license  http://opensource.org/licenses/GPL-3.0 GNU Public License
* @link     steo
*/
class Database {
/** @var resource Oracle connection set by the constructor. */
static protected $_conn = null;
static protected $sql;
static protected $where = [];
/**
* Object constructor. This is used only if instantiating an object of this class. For static use -- most uses are
* static -- the initDB function is used prior to any function that requires the database connection.
* @throws Exception
*/
public function __construct() {
$this->initDB();
}
/**
* Creates the database connection and stores it in a static variable only if the variable is null.
* @throws Exception If database connection is not successful.
*/
static function initDB() {
if (is_null(static::$_conn)) {
static::$_conn = DatabaseConfig::getDBConnection('survey_engine');
}
}
/**
* Wrapper for oci_bind_by_name. Throws exception if a variable cannot be bound.
*
* @param     $stmt
* @param     $bv_name
* @param     $variable
* @param int $maxlength
* @param     $type
*
* @throws Exception
* @return mixed
*/
private static function bindByName($stmt, $bv_name, &$variable, $maxlength = -1, $type = SQLT_CHR) {
$result = oci_bind_by_name($stmt, $bv_name, $variable, $maxlength, $type);
if (!$result) {
$error = oci_error($stmt);
throw new Exception ("Unable to bind variable to $bv_name.\n$error[sqltext]\nError: $error[message]");
} else {
return $result;
}
}
private static function bindArrayByName($stmt, $bv_name, &$variable, $maxlength = -1, $type = SQLT_CHR) {
$result = oci_bind_array_by_name($stmt, $bv_name, $variable, $maxlength, $type);
if (!$result) {
$error = oci_error($stmt);
throw new Exception ("Unable to bind variable to $bv_name.\n$error[sqltext]\nError: $error[message]");
} else {
return $result;
}
}
/**
* Wrapper for oci_fetch_object
*
* @param $stmt Resource Statement to fetch rows from.
*
* @return mixed Resource or false on error
*/
protected static function fetchObject($stmt) {
return oci_fetch_object($stmt);
}
/**
* Sets the $output variable to the array that contains all results returned from the database. Returns the
* number of rows. Changes all key/property values to lowercase and unsets any keys that contain nulls.
*
* @param $stmt   Resource Oracle Statement used to fetch data.
* @param $output Resource Variable by ref that contains the data fetched.
*
* @return int Number of rows returned by oci_fetch_all
* @throws Exception If sql cannot be parsed an exception is thrown.
*/
protected static function fetchAll($stmt, &$output) {
$nrows = oci_fetch_all($stmt, $output, 0, -1, OCI_FETCHSTATEMENT_BY_ROW);
if ($nrows !== false) {
static::lowerKeys($output);
static::removeNulls($output);
return $nrows;
} else {
$error = oci_error($stmt);
throw new Exception("Error getting data.\nMessage: $error[message]\nSQL: $error[sqltext]");
}
}
/**
* Wrapper for parse function that uses the static database connection variable.
*
* @param null $bindVariablesArray Array Array of name/value pairs to be bound to the sql statement.
*
* @return Resource Oracle statement ready to be executed or have variables  bound to it.
* @throws Exception If sql cannot be parsed an exception is thrown.
*/
protected static function parse($bindVariablesArray = null, $type = null) {
try {
static::initDB();
$stmt = oci_parse(static::$_conn, static::$sql);
if ($stmt) {
self::bind($stmt, $bindVariablesArray, $type);
return $stmt;
} else {
$error = oci_error(static::$_conn);
throw new Exception("Error getting data.\nMessage: $error[message]\nSQL: $error[sqltext]");
}
} catch (Exception $e) {
throw $e;
}
}
protected static function commit() {
if (@oci_commit(static::$_conn)) {
return true;
} else {
$error = oci_error(static::$_conn);
throw new Exception("Error committing.\nMessage: $error[message]\nSQL: $error[sqltext]");
}
}
protected static function bind($stmt, $bindVariablesArray = null, $type = null) {
if (is_array($bindVariablesArray)) {
foreach ($bindVariablesArray as $k => $v) {
if (is_array($v)) {
foreach ($v as $kk => $binding) {
static::bindByName($stmt, $bindVariablesArray[ $k ][ $kk ], $bindVariablesArray[ $k ][ $kk ]);
}
} else {
static::bindByName($stmt, $k, $bindVariablesArray[ $k ]);
}
}
}
}
/** Wrapper for the oci_execute function that includes error handling.
*
* @param Resource $stmt Statement to execute.
* @param int      $mode Used to disable auto commit which is on by default with OCI_NO_AUTO_COMMIT
*
* @return boolean
* @throws Exception If there is any problem getting the data.
*/
protected static function execute($stmt, $mode = OCI_COMMIT_ON_SUCCESS) {
if (@oci_execute($stmt, $mode)) {
return $stmt;
} else {
$error = oci_error($stmt);
throw new Exception("Error: $error[message]\nSQL: $error[sqltext]");
}
}
/**
* One method to rule them all. The $sql variable is set by the child class (late static binding).
* This method parses, binds any variables passed in, executes, and fetches all results in a single function call.
*
* @param null $bindVariablesArray Array with key/value pairs of variables to bind to the sql statement.
*
* @throws Exception
* @return resource
*/
public static function get($bindVariablesArray = null) {
try {
$stmt = static::parse($bindVariablesArray);
$stmt = static::execute($stmt);
static::fetchAll($stmt, $output);
return $output;
} catch (Exception $e) {
throw $e;
}
}
/**
* Loops through an array and changes all the keys to lowercase. This is useful on oracle result sets
* since oracle returns upper case keys/properties when fetching as array/object.
*
* @param $array Array whose keys will be converted to lowercase.
*
* @throws Exception
* @return boolean
*/
protected static function lowerKeys(&$array) {
try {
if (!is_array($array)) {
return false;
} else {
foreach ($array as &$v) {
if (is_array($v)) {
static::lowerKeys($v);
}
}
$array = array_change_key_case($array);
return true;
}
} catch (Exception $e) {
throw $e;
}
}
/**
* Recursive method to remove nulls from a simple or multidimensional arrays.
*
* @param $array Array to strip of nulls
*
* @return array de-nulled array
*/
protected static function removeNulls(&$array) {
if (!is_array($array)) {
return false;
} else {
foreach ($array as $k => &$v) {
if (is_array($v)) {
static::removeNulls($v);
} elseif (is_null($v)) {
unset($array[ $k ]);
}
}
}
return $array;
}
/**
* [
*  'column1'=>'val1',
*  'column2'=>'val2'
* ]
*
* @param $array
*/
protected static function insert($table, $valueArray) {
$insertArray = [];
$columns = array_keys($valueArray);
$values  = array_values($valueArray);
$sql     = 'INSERT INTO ' . $table .
' (' . implode(',', $columns) .
') VALUES (:' . implode(',:', $values) . ')';
$bindVars = [];
foreach ($values as $val) {
$bindVars[":$val"] = $val;
}
self::initDB();
$stmt = oci_parse(static::$_conn, $sql);
self::bind($stmt, $bindVars);
self::execute($stmt);
}
