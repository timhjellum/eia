<?php?>
<?php
require_once 'global/includes/utils/utils.inc';
require_once 'global/includes/utils/Neic.inc';
require_once 'reports/DataService.inc';
$neic      = new NEIC();
$DataService = new DataService();
?>
<style>
div#tag-frequency li a, div#tag-list li a {
font-size:14px;
}
.smallestTag, .smallTag, .mediumTag, .largeTag, .largestTag {
}
.smallestTag { font-size: 10px; }
.smallTag { font-size: 14px; }
.mediumTag { font-size: 20px; }
.largeTag { font-size: 30px; }
.largestTag { font-size: 36px; }
</style>
<?php
//hsh_query
//associated with CF query name TagsFrequencyQuery and TagsListQuery - togather
$subjectids = $subjectids ? $subjectids : '';
$sectionname = $sectionname ? $sectionname : '';
$sql_result = $DataService->getTagsFrequencyQuery($subjectids, $sectionname);
//print_r($sql_result);
$TagsFrequencyQuery = (isset($sql_result["TagsFrequencyQuery"])) ? $sql_result["TagsFrequencyQuery"] : array();
$TagsListQuery = (isset($sql_result["TagsListQuery"])) ? $sql_result["TagsListQuery"] : array();
$numreports_val_str = (isset($sql_result["numreport_val_str"])) ? $sql_result["numreport_val_str"] : '';
$tagValueArray = $numreports_val_str ? explode(",", $numreports_val_str) : array();
$max = max($tagValueArray);
$min = min($tagValueArray);
$diff = $max - $min;
$distribution = $diff ? ($diff / 9) : 0;
?>
<script>
// jQuery ready
$( document ).ready(function() {
<?php
if(isset($_SERVER['QUERY_STRING']) && $_SERVER['QUERY_STRING']) {
// Pass "frequency" or "tagcloud" along to the selectVersion() function
?>
selectVersion('<?php echo $_SERVER['QUERY_STRING']; ?>');
<?php
} // end if
?>
});
function versionClicked(newVersion) {
//	var myURL = document.location;
document.location = "browsebytag.cfm?" + newVersion;
selectVersion(newVersion);
}
function selectVersion(newVersion) {
//alert(newVersion);
if (newVersion == "alphabetical") {
$("div#tag-frequency").hide();
$("div#tag-list").show();
$("div#tag-cloud").hide();
} else if (newVersion == "frequency") {
$("div#tag-frequency").show();
$("div#tag-list").hide();
$("div#tag-cloud").hide();
} else if (newVersion == "tagcloud") {
$("div#tag-frequency").hide();
$("div#tag-list").hide();
$("div#tag-cloud").show();
} else {
alert("Error: newVersion= " + newVersion);
}
}
</script>
<div class="pagecontent mr_temp1">
<div class="white_box">
<?php
$navlinks = '';
$navlinks .= "<span class=\"right\">
Sort by:
<a href=\"javascript:versionClicked('alphabetical');\">Alphabetical</a>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href=\"javascript:versionClicked('frequency');\">Frequency</a>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href=\"javascript:versionClicked('tagcloud');\">Tag Cloud</a>
</span>";
?>
<div id="tag-list">
<h1 style="margin-bottom:26px;">Browse by Tag (alphabetical) <?php print PHP_EOL; echo $navlinks; print PHP_EOL; ?>
</h1>
<?php
$NumColumns = 3;
$NumTags = count($TagsListQuery);
$TagsPerColumn = ceil($NumTags / $NumColumns);
$CountVar = 0;
?>
<table width="100%">
<tr>
<?php
foreach($TagsListQuery as $v1) {
$CountVar++;
$tmpVar = (($CountVar - 1) % $TagsPerColumn);
if(!$tmpVar) {
print "<td>";
print PHP_EOL;
}
if(strchr($_SERVER['SCRIPT_NAME'], '/reports/')) {
$tmpLink = "./#/T" . $v1["TAGID"];
print "        <li>
<a href=\"" . $tmpLink . "\">" . $v1["TAG"]. "</a> (" . $v1["NUMREPORTS"] . ")</li>";
} else {
$tmpLink = "reports.cfm#/T" . $v1["TAGID"];
print "        <li>
<a href=\"" . $tmpLink . "\">" . $v1["TAG"]. "</a> (" . $v1["NUMREPORTS"] . ")</li>";
}
print PHP_EOL;
$tmpVar = ($CountVar % $TagsPerColumn);
if(!$tmpVar) {
print "</td>";
print PHP_EOL;
}
}
?>
</tr>
</table>
</div>
<div id="tag-frequency" style="display:none;">
<h1 style="margin-bottom:26px;">Browse by Tag (frequency) <?php print PHP_EOL; echo $navlinks; print PHP_EOL; ?>
</h1>
<?php
$NumColumns = 3;
$NumTags = count($TagsFrequencyQuery);
$TagsPerColumn = ceil($NumTags / $NumColumns);
$CountVar = 0;
?>
<table width="100%">
<tr>
<?php
foreach($TagsFrequencyQuery as $v1) {
$CountVar++;
$tmpVar = (($CountVar - 1) % $TagsPerColumn);
if(!$tmpVar) {
print "<td>";
print PHP_EOL;
}
if(strchr($_SERVER['SCRIPT_NAME'], '/reports/')) {
$tmpLink = "./#/T" . $v1["TAGID"];
print "        <li>
<a href=\"" . $tmpLink . "\">" . $v1["TAG"]. "</a> (" . $v1["NUMREPORTS"] . ")</li>";
} else {
$tmpLink = "reports.cfm#/T" . $v1["TAGID"];
print "        <li>
<a href=\"" . $tmpLink . "\">" . $v1["TAG"]. "</a> (" . $v1["NUMREPORTS"] . ")</li>";
}
print PHP_EOL;
$tmpVar = ($CountVar % $TagsPerColumn);
if(!$tmpVar) {
print "</td>";
print PHP_EOL;
}
}
?>
</tr>
</table>
</div>
<div id="tag-cloud" style="display:none;">
<h1 style="margin-bottom:26px;">Tag Cloud <?php print PHP_EOL; echo $navlinks; print PHP_EOL; ?>
</h1>
<?php
foreach($TagsListQuery as $v1) {
if($v1["NUMREPORTS"] == $min)
$class="smallestTag";
elseif($v1["NUMREPORTS"] == $max)
$class = "largestTag";
elseif($v1["NUMREPORTS"] > ($min + ($distribution * 2)) )
$class = "largeTag";
elseif($v1["NUMREPORTS"] > ($min + $distribution))
$class = "mediumTag";
else
$class = "smallTag";
if(strchr($_SERVER['SCRIPT_NAME'], '/reports/')) {
$tmpLink = "./#/T" . $v1["TAGID"];
print "<a class=\"" . $class . "\" href=\"" . $tmpLink . "\">" . $v1["TAG"] . "</a>&nbsp;";
} else {
$tmpLink = "reports.cfm#/T" . $v1["TAGID"];
print "<a class=\"" . $class . "\" href=\"" . $tmpLink . "\">" . $v1["TAG"] . "</a>&nbsp;";
}
print PHP_EOL;
}
?>
</div>
</div>
</div>