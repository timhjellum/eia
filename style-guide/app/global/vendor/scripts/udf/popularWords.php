<?php

function popularWords($arr, $exclude_words_arr, $words_limit=10) {

	$wordsArr = array();
	$words_arr = array();
	//populate word counting

	if(empty($arr))
		return $wordsArr;

	if(empty($exclude_words_arr))
		$exclude_words_arr=array("I","me","the","and","if","but","not","as","a","an","for","of","this","on","to","is");

	foreach($arr as $v1) {
		$tmp_arr = explode(",", $v1);
		foreach($tmp_arr as $word) {
			$word = trim($word);
			if(!in_array($word, $exclude_words_arr)) {
				if(isset($words_arr[$word]))
					$words_arr[$word] = $words_arr[$word] + 1;
				else
					$words_arr[$word] = 1;
			}
		}
	}

	if(!empty($words_arr)) {
		arsort($words_arr, SORT_NUMERIC);
		if (count($words_arr) > $words_limit) {
			$new_words_arr = array_slice($words_arr, 0, $words_limit);
			$words_arr     = $new_words_arr;
		}

		$wordsArr = array_keys($words_arr);
	}

	return $wordsArr;
}
?>