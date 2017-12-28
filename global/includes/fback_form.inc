<script>$(function() {
//toggle for feedback
$(document).on('click', ".hide_menu", function(e){
$(this).removeClass("hide_menu").addClass("show_menu").removeClass("fblink_hide").addClass("fblink_give");
$('#secondary').slideToggle(700);
return false;
});
$(document).on('click', ".show_menu", function(e){
$(this).removeClass("show_menu").addClass("hide_menu").removeClass("fblink_give").addClass("fblink_hide");
$('#secondary').slideToggle(500);
return false;
});
$('#secondary').hide();
$('.hide_menu').removeClass("hide_menu").addClass("show_menu");
//Policy reveal
$(document).on('click', ".policy", function(e){
$(this).removeClass("policy").addClass("policy_on").text("Go back to comments for this project.");
$('.fb_comments').css('display', 'none');
$('.fb_comments2').css('display', 'block');
return false;
});
$(document).on('click', ".policy_on", function(e){
$(this).removeClass("policy_on").addClass("policy").text("Read our feedback policy.");
$('.fb_comments2').css('display', 'none');
$('.fb_comments').css('display', 'block');
return false;
});
});
</script>
<?php
require_once 'global/includes/utils/utils.inc';
require_once 'global/includes/utils/Neic.inc';
$neic      = new NEIC();
//hsh_sql:
//associated with query name feedcomments
$bindVariables = array();
$neic->sql = " SELECT *
FROM neic.betafeedback
WHERE product = :betaproduct
AND review_status = :review_status
order by DTE DESC ";
$bindVariables[":betaproduct"] = $betaproduct;
$bindVariables[":review_status"] = 'y';
//print $neic->sql;
//print_r($bindVariables);
$feedcomments = $neic->get($bindVariables);
//TODO: MIGRATE THIS
isset($hpmemo) || $hpmemo = '';
?>
<div id="secondary" style="display:none;">
<div style="display:block;width:330px;float:left;padding-right:10px;">
<?php
if($_SERVER['PHP_SELF']=="/beta/index.php"||$_SERVER['PHP_SELF']=="/beta/beta-about.php"||$_SERVER['PHP_SELF']=="/beta/beta-todo.php")
$hpmemo = '1';
$theHeight="380px";
if($hpmemo == '1')
$theHeight="430px";
echo '<iframe src="/beta/includes/fback_form_entry.cfm?prod='.$betaproduct.'&hp='.$hpmemo.'" frameborder="0" scrolling="no" style="width:330px;';
if($hpmemo == '1')
echo 'height:430px;';
else
echo 'height:380px;';
echo 'padding-right:10px;border-right: 1px solid #666;">
</iframe>';
if($_SERVER['PHP_SELF']!="/beta/index.php")
echo ' <span style="margin-right:24px;">
<a href="" class="policy">Read our feedback policy.</a>
</span>';
?>
</div>
<?php
if($_SERVER['PHP_SELF']!="/beta/index.php"){
?>
<div style="display:block;float:left;padding-left:20px;border-left: 1px solid #666;" class="fb_comments">
<h2>Project Feedback</h2>
<?php
if(empty($feedcomments)) {
print "        <li>None have been submitted and reviewed for this project.  Be the first!</p>";
} else {
print "        <li>Read what others are saying about this project.</p>
<div id=\"feedcomments\">";
foreach($feedcomments as $v3) {
print "<div class=\"fbcomment\">";
print "        <li>
<strong>" . date("m/d/Y",strtotime($v3['dte'])) . " - ";
if($v3['state']) print $v3['state'] . ", ";
print $v3['country'] . "</strong>
<br />";
print $v3['feedback'];
if($v3['response']) {
print "<blockquote>" . $v3['response'] . "</blockquote>";
}
print "</p>
</div>";
}
print "</div>";
}
?>
</div>
<?php
}
?>
<div style="display:<?php if($_SERVER['SCRIPT_NAME'] != '/beta/index.php') { ?>none<?php } else {?>block<?php } ?>;float:left;padding-left:20px;width:500px;" class="fb_comments2">
<h2>Feedback Policy</h2>
<li>Policy for <?php if(stripos($_SERVER['HTTP_HOST'], "wwwtest") !== false) { ?>EIA employee<?php } else {?>public<?php } ?> posting of feedback submitted during beta testing of EIA experimental web products:</p>
<ul>
<li> User feedback of beta products is moderated. EIA will review all feedback submissions within one business day.</li>
<li> EIA reserves the right to edit feedback for brevity and grammar prior to posting.</li>
<li> Feedback submissions that use profanity, offensive language, or fail to address the product undergoing beta testing will not be posted.</li>
<li> Personally identifiable information, such as full names or email addresses, will be redacted from the published feedback.</li>
<li> Constructive criticism, suggestions, and kudos are welcome.</li>
</ul>
</div>            <li> Thanks for helping us to make EIA's products better!</p>
</div>
</div>