<?php/**
*
*/
class QuestionTypes extends Database {
var              $jsonType = null;
protected static $sql      = <<< SQL
SELECT * FROM survey_engine.question_type
SQL;
static function get($bindVariablesArray = null) {
$result = parent::get();
$return = [];
foreach ($result as $type) {
$return[ $type['id'] ] = ['name' => $type['name'], 'ui_element' => $type['ui_element']];
}
return $return;
}
