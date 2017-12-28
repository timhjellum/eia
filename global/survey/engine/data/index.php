<?php
header("Content-Type: application/json");

include 'utils.inc';
// Define the EIA Global PHP wrapper for PHPMailer
include $_SERVER['APPL_PHYSICAL_PATH'] . 'global\php\PHPMailer\Mailer.inc';

function __autoload($name) {
	include "classes/$name.inc";
}

$mailer = new Mailer();
// Add mail address for who should receive notificaiton e-mails
$mailer->addAddress("luis.rubero@eia.gov", "Luis Rubero");
$mailer->addAddress("scott.gearhart@eia.gov", "Scott Gearhart");
$mailer ->Subject = "Application error on $_SERVER[HTTP_HOST]";
$mailer ->FromName = "Survey Engine";
$mailer ->IsHTML(true);

$inputs = filter_var_array($_REQUEST,
                           [
	                           'a' => FILTER_SANITIZE_STRING,     //action (get /save)
	                           's' => FILTER_SANITIZE_NUMBER_INT, // survey id
	                           'p' => FILTER_SANITIZE_STRING, // URL list
	                           'q' => [
		                           'filter' => FILTER_SANITIZE_STRING,
		                           'flags'  => FILTER_FLAG_NO_ENCODE_QUOTES
	                           ],                                 //question id
	                           'u' => FILTER_SANITIZE_STRING,      //user/respondent id
	                           'f' => FILTER_SANITIZE_NUMBER_INT, //0 or 1, is this the final submission?
	                           'l' => FILTER_SANITIZE_NUMBER_INT //0 or 1, was this survey saved for later?
                           ]);
try {
	switch ($inputs['a']) {
		case 'g':
			$json = [
				'survey' => Survey::get(['url' => $inputs['p'], 'sid' => $inputs['s']]),
				'types'  => QuestionTypes::get()
			];

//			if (!is_null($inputs['u'])) {
//				$json['responses'] = Response::get(['uuid'      => $inputs['u'],
//				                                    'survey_id' => $inputs['s'],
//				                                    'ip'        => $_SERVER['REMOTE_ADDR']]);
//			}
			break;

		case 's':
			if (!isEmpty($inputs['s']) && !isEmpty($inputs['q'])) {
				$responseArray = json_decode($inputs['q']);
				if (json_last_error() !== JSON_ERROR_NONE) {
					$json = [
						'status' => 'error',
						'msg'    => "Problem decoding response object\n" . getJsonError()
					];
				} else {

					Response::save($inputs['s'], $responseArray, true, $inputs['l']);
					$json = [
						'status' => 'ok',
						'msg'    => 'Responses saved'
					];
				}
			} else {
				$json = [
					'status' => 'error',
					'msg'    => 'Missing parameters'
				];
			}
			break;

		/*case 'error':
			$mailer->Subject .= ' JS Error';
			$mailer->Body = $inputs['err'];
			$mailer->addStringAttachment($inputs['err'], date('Ymd_gisa') . '_error.txt');
			if (!$mailer->send()) {
				throw new Exception($mailer->ErrorInfo);
			} else {
				$json = [
					'status' => 'ok',
					'msg'    => 'Error message sent'
				];
			}
			break;*/

		default:
			$json = [];
	}

    /* Use for testing to intentionally cause json_encode() to fail:
    $json = "\xB1\x31";
    */
    // Attempt to encode the JSON
    $result = json_encode($json);
    // NOTE: In newer versions of PHP, json_encode() no longer returns false when JSON encoding fails
    if (json_last_error() != JSON_ERROR_NONE) {
    	//Pass the JSON encoding error to the try/catch handler below
    	throw new Exception(getJsonError());
    	exit;
	}
    // Output the JSON
    print $result;

// If a server error was caught
} catch (Exception $e) {
    // Capture the Request URL, $e, and $_SERVER
    ob_start();
    echo "Request URL: http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]" . "<br>\n";
    //echo $requested_page_link;
    echo "<br>\nError: " . jTraceEx($e);
    echo "<br><br>\n\n\$e:<br>\n";
    var_dump($e);
    echo "<br>\n\$_SERVER:<br>\n";
    var_dump($_SERVER);
    $body = ob_get_clean();
    // Email notification of the error
    $mailer->Body = $body;
    $mailer->send();
    // Send an HTTP status code 500 so the client-side can notify the user
    header("HTTP/1.1 500 Internal Server Error");
    echo "Internal Server Error";
}
