<?php
/**
 * Created by PhpStorm.
 * User: HSH
 * Date: 6/27/2016
 * Time: 10:31 AM
 */

/**
 * Takes a selected column of data from a query and converts it into a list.
 *
 * @param qry 	 Query to use. (Required)
 * @param column 	 Column to use. (Required)
 * @param delim 	 Delimiter. Defaults to a comma. (Optional)
 * @return Returns a list.
 * @author Randy Johnson (randy@cfedge.com)
 * @version 1, January 4, 2007
 */
function queryColumnToList($qry_result, $column) {
	$theList = "";

	if($column) {
		$theColumnArr = array();

		/*
		 * array_column() available only for php > 5.5
		$theColumnArr = array_column($qry_result, $column);
		if(!empty($theColumnArr))
			$theList = implode(",", $theColumnArr);
		*/

		foreach ($qry_result as $k1 => $v1) {
			if(!is_array($v1)) {
				if ($k1 == $column) {
					if ($theList) {
						$theList .= "," . $v1;
					} else {
						$theList = $v1;
					}
				}
			} else {
				foreach($v1 as $k2=>$v2) {
					if ($k2 == $column) {
						if ($theList) {
							$theList .= "," . $v2;
						} else {
							$theList = $v2;
						}
					}
				}
			}
		}
	}

	return $theList;
}

?>