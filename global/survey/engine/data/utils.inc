<?phpdefine('DEBUG', true);
define('ORACLE_DATE_FORMAT', 'd-M-y');
/**
* Returns an array whose values are the positions of the bits that are "on" (1) once the base 32 string is converted
* to binary. e.g.  Base 32 'o' = Binary '11000' returns [1,2] as those are the two bits that are on.
*
* @param $base32Str String Base 32 string
*
* @return array
*/
function buildFilterIndices($base32Str)
{
$binaryNum = array_map('intval', str_split(base32toBin($base32Str)));
$return    = [];
foreach ($binaryNum as $k => $v) {
if ($v === 1) {
$return[] = $k;
}
}
return $return;
}
/**
* Returns a the binary equivalent of the base 32 number passed in.
*
* @param $base32str string Base 32 string
*
* @returns string
*/
function base32toBin($base32str)
{
$return = '';
foreach (str_split($base32str) as $v) {
$return .= str_pad(base_convert($v, 32, 2), 5, 0, STR_PAD_LEFT);
}
return $return;
}
/**
* Checks to see if a value is empty or not. Works recursively on arrays too.
*
* @param mixed $multiArray Array or variable to check
*
* @return bool
*/
function isEmpty($multiArray)
{
if (is_array($multiArray) and !empty($multiArray)) {
$tmp = array_shift($multiArray);
if (!isEmpty($multiArray) or !isEmpty($tmp)) {
return false;
}
return true;
}
if (empty($multiArray)) {
return true;
}
return false;
}
/**
* Returns a string indicating what the last json error was. If no error was encountered prior to calling this function
* "No errors" is returned.
*
* This is needed to decode error messages in php <= 5.4. In newer versions json_last_error_msg() can be used.
*
* @return String
*/
function getJsonError()
{
switch (json_last_error()) {
case JSON_ERROR_NONE:
$error = 'No errors';
break;
case JSON_ERROR_DEPTH:
$error = 'Maximum stack depth exceeded';
break;
case JSON_ERROR_STATE_MISMATCH:
$error = 'Underflow or the modes mismatch';
break;
case JSON_ERROR_CTRL_CHAR:
$error = 'Unexpected control character found';
break;
case JSON_ERROR_SYNTAX:
$error = 'Syntax error, malformed JSON';
break;
case JSON_ERROR_UTF8:
$error = 'Malformed UTF-8 characters, possibly incorrectly encoded';
break;
default:
$error = 'Unknown error';
break;
}
return $error;
}
function jTraceEx($e, $seen=null) {
$starter = $seen ? 'Caused by: ' : '';
$result = array();
if (!$seen) $seen = array();
$trace  = $e->getTrace();
$prev   = $e->getPrevious();
$result[] = sprintf('%s%s: %s', $starter, get_class($e), $e->getMessage() . "\n\n\n Trace Report:");
$file = $e->getFile();
$line = $e->getLine();
while (true) {
$current = "$file:$line";
if (is_array($seen) && in_array($current, $seen)) {
$result[] = sprintf(' ... %d more', count($trace)+1);
break;
}
$result[] = sprintf(' at %s%s%s(%s%s%s)',
count($trace) && array_key_exists('class', $trace[0]) ? str_replace('\\', '.', $trace[0]['class']) : '',
count($trace) && array_key_exists('class', $trace[0]) && array_key_exists('function', $trace[0]) ? '.' : '',
count($trace) && array_key_exists('function', $trace[0]) ? str_replace('\\', '.', $trace[0]['function']) : '(main)',
$line === null ? $file : $file, //$line === null ? $file : basename($file),
$line === null ? '' : ':',
$line === null ? '' : $line);
if (is_array($seen))
$seen[] = "$file:$line";
if (!count($trace))
break;
$file = array_key_exists('file', $trace[0]) ? $trace[0]['file'] : 'Unknown Source';
$line = array_key_exists('file', $trace[0]) && array_key_exists('line', $trace[0]) && $trace[0]['line'] ? $trace[0]['line'] : null;
array_shift($trace);
}
$result = join("\n", $result);
if ($prev)
$result  .= "\n" . jTraceEx($prev, $seen);
return $result;
}
