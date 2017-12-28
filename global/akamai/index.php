<?php
	if(isset($_POST['address'])){
		
		$url = "https://api.ccu.akamai.com/ccu/v2/queues/default";
		$data = array(
		  'options'      => array('http://www.eia.gov/'.$_POST['address'])
		  );	
		$options = array(
		  'http' => array(
			'method'  => 'POST',
			'content' => json_encode( $data ),
			'header'=>  "Content-Type: application/json\r\n" .
						"Accept: application/json\r\n"
			)
		);
		
		$context  = stream_context_create( $options );
		$result = file_get_contents( $url, false, $context );
		$response = json_decode( $result );
		print_r($response);
	}
?>

<form action="?" method="post" id="clearAkamai">
	<input type="text" name="address" id="address" size="80">
    <input type="submit" value="Submit">
</form>