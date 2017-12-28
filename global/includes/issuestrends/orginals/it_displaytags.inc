<?php if(strlen($thetags) && strlen($thetagnames)) {?><?php $thetagsarray = explode(",", $thetags); ?>
<?php $thetagnamesarray = explode(",", $thetagnames); ?>
<?php
//print_r($thetagnamesarray);
?>
<?php $TagsString = ""; ?>
<?php for($i=0; $i < count($thetagsarray); $i++) {
if(strpos($_SERVER['SCRIPT_NAME'],"issuestrends")){
$TagsString .= "<a href=\"../reports.cfm/#/T".$thetagsarray[$i].",T".$CorrespondingTag.",Z\" class=\"capsule\" title=\"".$thetagnamesarray[$i]."\">".$thetagnamesarray[$i]."</a>";
} else {
$tmpStr = (isset($thetagnamesarray[$i]) && $thetagnamesarray[$i]) ? $thetagnamesarray[$i] : '';
$WithoutParentheses = (isset($thetagnamesarray[$i]) && $thetagnamesarray[$i]) ? trim(preg_replace("/\([^)]+\)/","",$thetagnamesarray[$i])) : '';
$TagsString .= "<a href=\"reports.cfm/#/T".$thetagsarray[$i].",T".$CorrespondingTag.",Z\" class=\"capsule\" title=\"".$tmpStr."\">".$WithoutParentheses."</a>";
} // end if
print PHP_EOL;
}
echo $TagsString;
?>
<?php  } ?>
<?php // end if ?>
<?php print PHP_EOL; ?>
