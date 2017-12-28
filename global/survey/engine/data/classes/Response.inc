<?php/**
*
*/
class Response extends Database {
var              $jsonType = null;
var              $surveyId;
var              $respondentID;
var              $questionID;
var              $val;
protected static $sql      = <<< SQL
SELECT question_id, '["' || LISTAGG(response, '","')
WITHIN GROUP (ORDER BY question_id) || '"]' AS response
FROM survey_engine.response r
JOIN survey_engine.respondent u ON u.id = r.respondent_id
WHERE respondent_id = :uuid
AND survey_id = :survey_id
AND ip = :ip
GROUP BY survey_id, iteration, question_id, respondent_id
SQL;
static function get($bindVariablesArray = null) {
$return = [];
$result = parent::get($bindVariablesArray);
foreach ($result as $response) {
$return[] = ['question_id' => $response['question_id'],
'response'    => json_decode($response['response'])];
}
return $return;
}
static function save($sid, $questionResponseArray, $finalize = 0, $saved_survey = 0) {
self::initDB();
$uid = uniqid("", true);
$respondentSql = <<< SQL
INSERT INTO survey_engine.respondent (id, ip, browser_info)
VALUES (:uuid, :ips, :browser)
SQL;
$stmt = oci_parse(static::$_conn, $respondentSql);
self::bind($stmt,
[
'uuid'    => $uid,
'ips'     => $_SERVER["REMOTE_ADDR"],
//		  'visit_time'=>'',
//		  'completed_date' => '',
//		  'saved_survey'=>'',
'browser' => $_SERVER["HTTP_USER_AGENT"]
]);
self::execute($stmt, OCI_NO_AUTO_COMMIT);
$sql         = "INSERT ALL ";
$insertArray = [];
$bindVars = ['survey_id' => $sid, 'uuid' => $uid];
$counter  = 0;
foreach ($questionResponseArray as $response) {
if (is_array($response->a)) {
foreach ($response->a as $answer) {
$insertArray[]             = "INTO survey_engine.response (survey_id, respondent_id, question_id, response)
VALUES (:survey_id, :uuid, :{$response->id}, :q$counter)";
$bindVars[ $response->id ] = $response->id;
$bindVars["q$counter"]     = $answer;
$counter++;
}
} else {
$insertArray[] = "INTO survey_engine.response (survey_id, respondent_id, question_id, response)
VALUES (:survey_id, :uuid, :{$response->id}, :q$counter)";
$bindVars[ $response->id ] = $response->id;
$bindVars["q$counter"]     = $response->a;
$counter++;
}
}
$sql .= implode(' ', $insertArray) . ' SELECT * FROM DUAL';
$stmt = oci_parse(static::$_conn, $sql);
self::bind($stmt, $bindVars);
self::execute($stmt, OCI_NO_AUTO_COMMIT);
if ($finalize) {
if (is_null($saved_survey)) {
$saved_survey = 0;
}
$sql = "CALL SURVEY_ENGINE.FINALIZE_RESPONSE(:sid,:uuid, :saved)";
$bindVars = [':sid'   => $sid,
':uuid'  => $uid,
':saved' => $saved_survey];
$stmt = oci_parse(static::$_conn, $sql);
self::bind($stmt, $bindVars);
self::execute($stmt, OCI_NO_AUTO_COMMIT);
}
self::commit();
}
static function clean($string) {
$string = str_replace(' ', '', $string); // Replaces all spaces with hyphens.
return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
}
