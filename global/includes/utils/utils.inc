<?php//$path = dirname(__FILE__) . '/../status.json';
////echo dirname(__FILE__);
//
//$file = @file_get_contents($path);
//$app = @json_decode($file);
//define('DEBUG', @$app->debug || false);
define('ORACLE_DATE_FORMAT', 'd-M-y');
set_error_handler(function ($errno, $errstr, $errfile, $errline) {
//in case of development environment AND
//if the error is not E_NOTICE
//then track the error
if (@$_SERVER['server_mode'] === 'development' && $errno != E_NOTICE) {
header("Status: 500 Internal Error");
throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
}
});
function __autoload($name) {
include "classes/$name.inc";
}
//
//function kill($data) {
//    die('<pre>' . var_dump($data) . '</pre>');
//}
function isEmpty($multiArray) {
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
function getJsonError() {
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
function buildTree(array $elements, $parentId = 0) {
$branch = [];
foreach ($elements as $element) {
if ($element['parent_id'] == $parentId) {
$children = buildTree($elements, $element['id']);
if ($children) {
$element['children'] = $children;
}
$branch[ $element['id'] ] = $element;
//$branch[] = $element;
}
}
return $branch;
}
// array sorting on specific field
function record_sort($records, $field, $reverse = false) {
$hash = [];
foreach ($records as $key => $record) {
$hash[ $record[ $field ] . $key ] = $record;
}
($reverse) ? krsort($hash) : ksort($hash);
$records = [];
foreach ($hash as $record) {
$records [] = $record;
}
return $records;
}
//function jTraceEx($e, $seen = null) {
//    $starter = $seen ? 'Caused by: ' : '';
//    $result  = [];
//    if (!$seen) {
//        $seen = [];
//    }
//    $trace    = $e->getTrace();
//    $prev     = $e->getPrevious();
//    $result[] = sprintf('%s%s: %s', $starter, get_class($e), $e->getMessage() . "\n\n\n Trace Report:");
//    $file     = $e->getFile();
//    $line     = $e->getLine();
//    while (true) {
//        $current = "$file:$line";
//        if (is_array($seen) && in_array($current, $seen)) {
//            $result[] = sprintf(' ... %d more', count($trace) + 1);
//            break;
//        }
//        $result[] = sprintf(' at %s%s%s(%s%s%s)',
//                            count($trace) && array_key_exists('class', $trace[0]) ?
//                              str_replace('\\', '.', $trace[0]['class']) : '',
//                            count($trace) &&
//                            array_key_exists('class', $trace[0]) &&
//                            array_key_exists('function', $trace[0]) ? '.' : '',
//                            count($trace) && array_key_exists('function', $trace[0]) ?
//                              str_replace('\\', '.', $trace[0]['function']) : '(main)',
//                            $line === null ? $file : $file, //$line === null ? $file : basename($file),
//                            $line === null ? '' : ':',
//                            $line === null ? '' : $line);
//        if (is_array($seen)) {
//            $seen[] = "$file:$line";
//        }
//        if (!count($trace)) {
//            break;
//        }
//        $file = array_key_exists('file', $trace[0]) ? $trace[0]['file'] : 'Unknown Source';
//        $line =
//          array_key_exists('file', $trace[0]) && array_key_exists('line', $trace[0]) && $trace[0]['line'] ?
//            $trace[0]['line'] : null;
//        array_shift($trace);
//    }
//    $result = join("\n", $result);
//    if ($prev) {
//        $result .= "\n" . jTraceEx($prev, $seen);
//    }
//
//    return $result;
//}
function checkmydate($date) {
$tempDate = explode('-', $date);
if (checkdate($tempDate[1], $tempDate[2], $tempDate[0])) {//checkdate(month, day, year)
return true;
} else {
return false;
}
}
//associate array sorting on key: Label - use user defined sorting function
function stable_uasort(&$array, $cmp_function) {
if (count($array) < 2) {
return;
}
$halfway = count($array) / 2;
$array1  = array_slice($array, 0, $halfway, true);
$array2  = array_slice($array, $halfway, null, true);
stable_uasort($array1, $cmp_function);
stable_uasort($array2, $cmp_function);
if (call_user_func($cmp_function, end($array1), reset($array2)) < 1) {
$array = $array1 + $array2;
return;
}
$array = [];
reset($array1);
reset($array2);
while (current($array1) && current($array2)) {
if (call_user_func($cmp_function, current($array1), current($array2)) < 1) {
$array[ key($array1) ] = current($array1);
next($array1);
} else {
$array[ key($array2) ] = current($array2);
next($array2);
}
}
while (current($array1)) {
$array[ key($array1) ] = current($array1);
next($array1);
}
while (current($array2)) {
$array[ key($array2) ] = current($array2);
next($array2);
}
return;
}
//user defined function cmp() - to use with stable_uasort()
function cmp($a, $b) {
if ($a['LABEL'] == $b['LABEL']) {
return 0;
}
return strnatcasecmp($a['LABEL'], $b['LABEL']); // ascending order natural laanguage (case insensitive)
}
function xml_to_object($xml) {
$parser = xml_parser_create();
xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0);
xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE, 1);
xml_parser_set_option($parser, XML_OPTION_TARGET_ENCODING, "ISO-8859-1");
xml_parse_into_struct($parser, $xml, $tags);
xml_parser_free($parser);
$elements = array();  // the currently filling [child] XmlElement array
$stack = array();
//print_r($tags);
//die();
foreach ($tags as $tag) {
$index = count($elements);
if ($tag['type'] == "complete" || $tag['type'] == "open") {
$elements[$index] = new XmlElement;
$elements[$index]->name = isset($tag['tag']) ? $tag['tag'] : '';
$elements[$index]->attributes = isset($tag['attributes']) ? $tag['attributes'] : '';
$elements[$index]->content = isset($tag['value']) ? $tag['value'] : '';
if ($tag['type'] == "open") {  // push
$elements[$index]->children = array();
$stack[count($stack)] = &$elements;
$elements = &$elements[$index]->children;
}
}
if ($tag['type'] == "close") {  // pop
$elements = &$stack[count($stack) - 1];
unset($stack[count($stack) - 1]);
}
}
return $elements[0];  // the single top-level element
}
function xml_attribute($object, $attribute)
{
if(isset($object[$attribute]))
return (string) $object[$attribute];
}
function validateDate($date)
{
$t1 = strtotime($date);
return checkdate(date('m', $t1 ), date('d', $t1), date('Y', $t1));
}
function setTimezone($default='America/New_York') {
date_default_timezone_set($default);
}
function switchKeysCase(&$array, $lowercase=true) {
if (is_array($array)) {
foreach ($array as &$v) {
if (is_array($v)) {
switchKeysCase($v, $lowercase);
}
}
if($lowercase)
$array = array_change_key_case($array);
else
$array = array_change_key_case($array, CASE_UPPER);
}
}
function arrayToOrClause(Array $array, String $sqlField, String $bindIdentifier)
{
$orVals = [];
$newBindVariables = [];
$i = 0;
foreach ($array as $value) {
$orVals[] = $sqlField . " = :" . $bindIdentifier . $i;
$newBindVariables[$bindIdentifier . $i] = $value;
$i++;
}
$sql = "(" . implode(' OR ',$orVals) . ")";
return [
'sql' => $sql,
'newBindVariables' => $newBindVariables,
];
}
function arrayToList(Array $array,  String $bindIdentifier)
{
$newBindVariables = [];
$i = 0;
foreach ($array as $value) {
$orVals[] = ":" . $bindIdentifier . $i;
$newBindVariables[$bindIdentifier . $i] = $value;
$i++;
}
$sql = "(" . implode(',',$orVals) . ")";
return [
'sql' => $sql,
'newBindVariables' => $newBindVariables,
];
}
function getSafeArrayUsingRegex(array $array, string $pattern, bool $capitalize = false )
{
$result = [];
foreach ($array as $value) {
if($capitalize){
$value = strtoupper($value);
}
if(!preg_match($pattern, $value)) continue;
$result[] = $value;
}
return $result;