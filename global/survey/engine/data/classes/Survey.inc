<?php/**
*
*/
class Survey extends Database {
var              $jsonType = null;
protected static $sql      = <<< SQL
SELECT id, name,welcome,thanks FROM survey_engine.survey s
WHERE
SQL;
public static function get($bindVariables = null) {
foreach ($bindVariables as $k => $v) {
if (is_null($v)) {
unset($bindVariables[ $k ]);
}
}
if (!isset($bindVariables['sid']) && !isset($bindVariables['url'])) {
throw new Exception('Missing parameters');
} else {
if (isset($bindVariables['sid'])) {
static::$sql .= " id = :sid AND";
unset($bindVariables['url']);
} elseif (isset($bindVariables['url'])) {
static::$sql .= " (:url LIKE ('%'||url||'%') OR url = '*') AND";
}
static::$sql .= "  status = 'running'";
$results = parent::get($bindVariables);
foreach ($results as &$survey) {
$survey['questions'] = Questions::get(['survey_id' => $survey['id']]);
}
return $results;
}
}
