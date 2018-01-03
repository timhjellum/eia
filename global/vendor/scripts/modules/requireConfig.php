<?php
 ob_start();
 include ('global/scripts/modules/requireConfig2.json') ;
 $config = ob_get_clean();

 $configStruct = json_decode($config, true);

 if (strpos($_SERVER['HTTP_HOST'], 'wwwdev') !== FALSE) {

	ob_start();
	include ('global/scripts/modules/requireConfig2.src.json') ;
	$configSrc = ob_get_clean();

	$configStructSrc = json_decode($configSrc, true);
	$configStruct['paths'] = array_merge($configStruct['paths'], $configStructSrc['paths']);
	$configStruct['shim'] = array_merge($configStruct['shim'], $configStructSrc['shim']);
 }

echo str_replace("\/", "/", json_encode($configStruct));
?>