<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" href="CSS/style.css" type="text/css" media="screen">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Facebook news feed</title>
</head>

<body>
<div id="wrapper">
<div class="container">
<div id="header"><img src="images/logo.png" width="250" height="98" /></div>
<div id="main">
	<div id="content">
    <h1>Photos</h1>
    
    <?php

		//Set the page name or ID
		$FBid = 'terrorfall';
		
		//Get the contents of a Facebook page
		$FBpage = file_get_contents('https://graph.facebook.com/'.$_GET['album_id'].'/photos');
		
		//Interpret data with JSON
		$photoData = json_decode($FBpage); ?>
        
        
    </div>
    <div id="sidebar">
    <h3>Become a fan on Facebook</h3>
    <script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/terrorfall" width="292" show_faces="false" stream="false" header="true"></fb:like-box>
    </div>
    <div class="clear">                </div>
        </div>
</div>
<div id="footer">
	<div class="container"><a href="http://terrordesigns.com" target="_blank">Built by Pete Simmons of TerrorDesigns</a>                </div>
        </div>
</div>
</body>
</html>