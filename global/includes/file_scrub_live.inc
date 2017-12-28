<?php$ContentMarker= "<!--begin content -->";
$sFileWhole = file_get_contents($_SERVER['DOCUMENT_ROOT']."/global/includes/tie/live.inc"); //read existing file
$pos = strpos($sFileWhole,$ContentMarker);
if($pos>0)
$sFileWhole=substr($sFileWhole,$pos);
$sFileWhole = strtr( $sFileWhole, chr(145), "&#145;" );
$sFileWhole = strtr( $sFileWhole, chr(146), "&#146;" );
$sFileWhole = strtr( $sFileWhole, chr(147), "&#147;" );
$sFileWhole = strtr( $sFileWhole, chr(148), "&#148;" );
//$sFileWhole = strtr( $sFileWhole, chr(149), "&#149;" );
$sFileWhole = strtr( $sFileWhole, chr(150), "&#150;" );
$sFileWhole = strtr( $sFileWhole, chr(151), "&#151;" );
$sFileWhole = preg_replace( "/<!--(.*?)-->/", "", $sFileWhole );
$sFileWhole = str_replace("--", "&#150;", $sFileWhole);
$sFileWhole = str_replace("---", "&#150;", $sFileWhole);
echo $sFileWhole;