<?php/**
*
*/
class Questions extends Database {
var              $jsonType = null;
protected static $sql      = <<< SQL
SELECT q.ID, q.text AS label, q.orderno, q.LIMIT,q.type,
CASE WHEN a.question_id IS NOT NULL THEN
'[' || listagg('{"id":"' ||A.ID ||'","label":"'|| replace(A.VALUE, '"', '\"') ||'"}', ',')
WITHIN GROUP (ORDER BY A.orderno) || ']'
ELSE NULL END
AS answers
FROM survey_engine.question q
LEFT JOIN survey_engine.answer A ON A.question_id = q.ID
WHERE survey_id = :survey_id
GROUP BY q.ID, q.text, q.LIMIT, q.orderno, a.question_id, q.type
ORDER BY q.orderno
SQL;
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
$questionIDList = [];
try {
$output = parent::get($bindVariablesArray);
foreach ($output as $k => &$v) {
$questionIDList[] = $v['id'];
if (array_key_exists('answers', $v)) {
$v['answers'] = json_decode(trim(preg_replace('/\s+/', ' ', $v["answers"])));;
}
}
static::$sql = <<< SQL
SELECT  question_id, '[' || listagg('{"qid":"' ||deciding_question_ID ||'","method":"'|| condition||'","value":"'||value||'"}', ',')
WITHIN GROUP (ORDER BY question_id) || ']' AS condition
FROM survey_engine.conditional
WHERE question_id IN (
SQL;
static::$sql .= ':' . implode(',:', $questionIDList) . ') GROUP BY question_id';
$conditionals = parent::get(['questions' => $questionIDList]);
static::$sql = <<< SQL
SELECT  question_id, '{' || listagg('"'||KEY||'":"'||VALUE||'"', ',')
WITHIN GROUP (ORDER BY question_id) || '}' AS attrs
FROM survey_engine.question_attribute
WHERE question_id IN (
SQL;
static::$sql .= ':' . implode(',:', $questionIDList) . ') GROUP BY question_id';
$attributes = parent::get(['questions' => $questionIDList]);
foreach ($output as $k => $question) {
foreach ($conditionals as $ck => $condition) {
if ($condition['question_id'] == $question['id']) {
$output[ $k ]['conditions'] = json_decode($condition['condition']);
unset($conditionals[ $ck ]);
}
}
foreach ($attributes as $ca => $attr) {
if ($attr['question_id'] == $question['id']) {
$output[ $k ]['attr'] = json_decode($attr['attrs']);
unset($attributes[ $ca ]);
}
}
}
return $output;
} catch (Exception $e) {
throw $e;
}
}
