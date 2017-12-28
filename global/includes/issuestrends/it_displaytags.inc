<?php /* This gets included by carousel.cfm, it_archive_inc.cfm, and recent_AP_schedule.cfm to display only the tags */ ?><?php /* If there is at least one tag */ ?>
<?php if(strlen($thetags) && strlen($thetagnames)) {?>
<?php /* Split the tags into an array */ ?>
<?php $thetagsarray = explode(",", $thetags); ?>
<?php $thetagnamesarray = explode(",", $thetagnames); ?>
<?php $TagsString = ""; ?>
<?php for($i=0; $i < count($thetagsarray); $i++) {
if(strpos($_SERVER['SCRIPT_NAME'],"issuestrends")){
/* Link to the reports page one directory up */
$TagsString .= "<a href=\"../reports.cfm/#/T".$thetagsarray[$i].",T".$CorrespondingTag.",Z\" class=\"capsule\" title=\"".$thetagnamesarray[$i]."\">".$thetagnamesarray[$i]."</a>";
} else {
$tmpStr = (isset($thetagnamesarray[$i]) && $thetagnamesarray[$i]) ? $thetagnamesarray[$i] : '';
/* Use a regular expression to strip out parentheses (and anything inside them)*/
$WithoutParentheses = (isset($thetagnamesarray[$i]) && $thetagnamesarray[$i]) ? trim(preg_replace("/\([^)]+\)/","",$thetagnamesarray[$i])) : '';
/* Link to the reports page in the same directory */
$TagsString .= "<a href=\"reports.cfm/#/T".$thetagsarray[$i].",T".$CorrespondingTag.",Z\" class=\"capsule\" title=\"".$tmpStr."\">".$WithoutParentheses."</a>";
} // end if
print PHP_EOL;
}
echo '| tags:';
echo $TagsString;
?>
<?php  } ?>
<?php // end if ?>
<?php print PHP_EOL; ?>