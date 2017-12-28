<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript" src="js/prototype.js"></script>
<script type="text/javascript" src="js/scriptaculous.js?load=effects,builder"></script>
<script type="text/javascript" src="js/lightbox.js"></script>

<link rel="stylesheet" href="CSS/lightbox.css" type="text/css" media="screen" />

<link rel="stylesheet" href="CSS/style.css" type="text/css" media="screen">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Facebook photo gallery</title>
</head>

<body>
<div id="wrapper">
<div class="container">
<div id="header"><h1>FB:C</h1></div>
<div id="main">
	<div id="content">
    
    <?php

		//Set the page name or ID
		$FBid = 'ciconte';
		
		//Get the contents of the album data page
		$rawAlbumData = file_get_contents('https://graph.facebook.com/'.$_GET['album_id'].'/photos');
		
		//Interpret data with JSON
		$photoData = json_decode($rawAlbumData);
		
		//Get data about the photo album
		$rawCommentData = file_get_contents('https://graph.facebook.com/'.$_GET['album_id']);
		
		//Interpret comment data with JSON
		$commentData = json_decode($rawCommentData);
		
		?>
        <h1><? echo $commentData->name; ?></h1>
        <ul id="display-inline-block">
		<? 
		include 'functions.php';
		foreach ( $photoData->data as $data )
		{
		echo '<li><a href="'.$data->source.'" rel="lightbox[FBalbum]" title="';
		
		if ($data->comments) {
		foreach ( $data->comments->data as $Cdata )
		{ echo htmlentities('<li class="imgcomments"><a href="http://www.facebook.com/people/@/'.$Cdata->from->id.'" target="_blank"><img src="https://graph.facebook.com/'.$Cdata->from->id.'/picture" align=left border=0 /></a>&nbsp;<a href="http://www.facebook.com/people/@/'.$Cdata->from->id.'" target="_blank"><strong>'.$Cdata->from->name.'</a>: </strong>'.$Cdata->message.'<br /><div align="left" style="padding-bottom:10px;"><small>&nbsp;Posted '.timeSince(strtotime($Cdata->created_time)).' ago</small></div></li>'); }
		}
		else {
		echo 'No comments yet';	
		}
		
		echo '"><img class="shadow" src="'.$data->picture.'" width=70 border=0 /></a></li>';
		}
	
	?> </ul>
    
    <div class="comments">
    <h2>Album Comments</h2>
    	<? 
			if ( $commentData->comments->data ) {

				foreach ( $commentData->comments->data as $data )
					{
						echo '<li><a href="http://www.facebook.com/people/@/'.$data->from->id.'" target="_blank"><img src="https://graph.facebook.com/'.$data->from->id.'/picture" align=left border=0 /></a>';
						echo '&nbsp;<a href="http://www.facebook.com/people/@/'.$data->from->id.'" target="_blank"><strong>'.$data->from->name.'</a>: </strong>'.$data->message.'<br /><div align="left" style="padding-bottom:10px;"><small>&nbsp;Posted '.timeSince(strtotime($data->created_time)).' ago</small></div></li>';
					}
			}
			else {
				echo 'There are no comments on this album';	
			}
		?>
                    </div>
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