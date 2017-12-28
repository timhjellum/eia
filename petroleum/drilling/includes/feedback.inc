<srcipt>function validateForm() {
var email = $("#email").val();
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!re.test(email))
alert("Email address invalid.");
return re.test(email);
}
</script>
<?php
require($_SERVER['DOCUMENT_ROOT'].'/global/includes/utils/utils.inc';
require($_SERVER['DOCUMENT_ROOT'].'/global/includes/utils/Neic.inc';
require($_SERVER['DOCUMENT_ROOT'].'/global/includes/utils/Mailer.inc';
class Feedback extends NEIC {
public function store($bindVariables) {
$this->sql = <<< SQL
INSERT INTO neic.feedback
(Q7_comment, name, email, remote_add, ref_page, woffice, CCID, email_sent)
VALUES (:user_comment, :user_name, :user_email, :remote_add, :ref_page, :woffice, :ccid, :email_sent )
SQL;
//print "function store is called....sql here....";
//print $this->sql;
//print_r($bindVariables);
//die();
$this->parse($bindVariables);
$this->execute();
}
}
?>
<?php
$fdbackform = simplexml_load_file($_SERVER['DOCUMENT_ROOT'] . "/cfapps/email/feedbackformdata-dpr.xml");
//print_r($fdbackform);
$recipinfo = $fdbackform->xpath('/forminfo/formdata');
//print_r($recipinfo);
$mailinfo = array();
foreach ($recipinfo as $k=>$item) {
$mailinfo[$k][1] = (string) $item->to;
$mailinfo[$k][2] = (string) $item->from;
$mailinfo[$k][3] = "Feedback from Drilling Productivity";
$mailinfo[$k][4] = (string) $item->success;
$mailinfo[$k][5] = (string) $item->server;
}
//print_r($mailinfo);
?>
<?php
$domain = $_SERVER['HTTP_HOST'];
$strUrl = "http://" . $domain . $_SERVER['REQUEST_URI'];
?>
<script>
$(document).ready(function(){
$('#dprfeedback #email').mouseover(function() {
$('#dprfeedback').attr('action', '<?php echo $_SERVER['SCRIPT_NAME']; ?>');
});
});
</script>
<h4 class="no-border">Give Us Your Feedback</h2></li>
<?php
$form['suggestion'] = isset($_REQUEST['suggestion']) ? $_REQUEST['suggestion'] : "";
$form['email'] = isset($_REQUEST['email']) ? $_REQUEST['email'] : "";
$form['ref_page'] = isset($_REQUEST['ref_page']) ? $_REQUEST['ref_page'] : $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
if ($form['suggestion'] && $form['email']) {
//print_r($mailinfo);
//print_r($_REQUEST);
//die();
if(strstr($mailinfo[0][2], ' '))
$from = substr($mailinfo[0][2], 0, strpos($mailinfo[0][2], ' '));
else
$from = $mailinfo[0][2];
if(strstr($mailinfo[0][1], ' '))
$to = substr($mailinfo[0][1], 0, strpos($mailinfo[0][1], ' '));
else
$to = $mailinfo[0][1];
$subject = $mailinfo[0][3];
$body = "";
$body .= "        <li>My feedback is:<br/>" . strip_tags($form['suggestion'], '<li class="sub-header"><span class="date"><u>') . "<br/></li>";
$body .= "        <li>This message was sent from " . $form['email']. " via an Energy in Brief page: <br/>" . $strUrl . "</li>";
$mailer_arr = [
$to => $to
//, "Scott.Gearhart@eia.gov" => "Scott Gearhart"
];
require($_SERVER['DOCUMENT_ROOT'].'/global/includes/utils/Mailer.inc';
$mailer = new Mailer();
$mailer->From = $from;
$mailer->Subject = $subject;
foreach($mailer_arr as $k0=>$v0) {
$mailer->addAddress($k0, $v0);
}
$mailer->Body = $body;
$mailer->send();
?>
<div id="success" class="lightbox"><?php echo $mailinfo[0][4]; ?></div>
<?php
//hsh_sql: insert
//associated with query name comment
$Feedback = new Feedback();
$Feedback->store(["user_comment"    => $form['suggestion'],
"user_name"       => $form['email'],
"user_email"      => $form['email'],
"remote_add" => $_SERVER['REMOTE_ADDR'],
"ref_page"   => $form['ref_page'],
"woffice"    => 'NEIC - DPR',
"ccid"       => uniqid(),
"email_sent" => $to ] );
} else { ?>
<form name="dprfeedback" id="dprfeedback" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" onSubmit="return validateForm();" method="post" >
        <li>Do you have comments or suggestions about our Drilling Productivity Report? We want to hear from you.</li>
<fieldset>
<textarea name="suggestion" rows="8" cols="20" required="required"></textarea>
<label for="email">Email <input type="text" name="email" id="email" style="margin-top:-2px" required="required"/></label>
<input type="submit" value="Submit" class="submit" />
<input type="hidden" name="action" value="Send feedback" />
<input name="remote_add" id="remote_add"  type="hidden" value="<?php echo $_SERVER['REMOTE_ADDR']; ?>" />
<input name="ref_page" id="ref_page"  type="hidden" value="<?php echo $strUrl; ?>" />
</fieldset>
</form>
<?php
}
