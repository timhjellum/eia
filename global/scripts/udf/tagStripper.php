<?php /*
This library is part of the Common Function Library Project. An open source
	collection of UDF libraries designed for ColdFusion 5.0 and higher. For more information,
	please see the web site at:

		http://www.cflib.org

	Warning:
	You may not need all the functions in this library. If speed
	is _extremely_ important, you may want to consider deleting
	functions you do not plan on using. Normally you should not
	have to worry about the size of the library.

	License:
	This code may be used freely.
	You may modify this code as you see fit, however, this header, and the header
	for the functions must remain intact.

	This code is provided as is.  We make no warranty or guarantee.  Use of this code is at your own risk.
*/ ?>

<?php
/**
 * Function to strip HTML tags, with options to preserve certain tags.
 * v2 by Ray Camden, fix to closing tag
 * 
 * @param str 	 String to manipulate. (Required)
 * @param action 	 Strip or preserve. Default is strip. (Optional)
 * @param tagList 	 Tags to strip or perserve. (Optional)
 * @return Returns a string. 
 * @author Rick Root (rick@webworksllc.com) 
 * @version 2, July 2, 2008 
 */
function tagStripper($str) {
	$action = 'strip';
	$tagList = '';
	$args = func_get_args();
	
	if (func_num_args() > 1 and strtolower($args[1]) == 'preserve') {
		$action = 'preserve';
	}
	if (func_num_args() > 2) $tagList = $args[2];

	if (trim(strtolower($action)) == "preserve") {
		// strip only those tags in the tagList argument
		$tagArr = explode(",", $tagList);
		for ($i=0;$i < count($tagArr); $i++) {
			$tag = $tagArr[$i];
			$str = preg_replace("#</?".$tag.".*?>#i","",$str);
		}
	} else {
		// strip all, except those in the tagList argument
		// if there are exclusions, mark them with NOSTRIP
		if ($tagList != "") {
			$tagArr = explode(",", $tagList);
			for ($i=0;$i < count($tagArr); $i++) {
				$tag = $tagArr[$i];
				$str = preg_replace("#<(/?".$tag.".*?)>#i","___TEMP___NOSTRIP___\1___TEMP___ENDNOSTRIP___", $str);
			}
		}
		// strip all remaining tsgs.  This does NOT strip comments
		$str = preg_replace("#</{0,1}[A-Z].*?>#i","", $str);
		// convert unstripped back to normal
		$str = str_replace("___TEMP___NOSTRIP___","<",$str);
		$str = str_replace("___TEMP___ENDNOSTRIP___",">", $str);
	}
	
	return $str;
}
?>






