<cfparam name=configFile type=string default=mapconfig.cfm>
<cfparam name=centerX type=numeric default=0>
<cfparam name=centerY type=numeric default=0>
<cfparam name=initalScale type=numeric default=0>
<cfparam name=stormName default= type=string>
<cfparam name=sid default=US type=string>

<?php $currentDirectory = ReplaceNoCase(ReplaceNoCase(GetDirectoryFromPath(GetCurrentTemplatePath()), ExpandPath('/'), ''), '\', '/', 'all'); ?>


<script>
	function updateLayers(layerName, layers) {
		//$.ajax('/state/maps/updateSession.cfm?layerName=' + layerName + '&visiblelayers='+layers);
	};
	function updateBaseMap(baseMap) {
		//$.ajax('/state/maps/updateSession.cfm?basemap='+baseMap);
	};
</script>
<script type="text/javascript" src="/state/maps/viewer/swfobject.js"></script>
<script type="text/javascript">
	var isIElt9 = false;
</script>
<!--[if lt IE 9]>
	<script type="text/javascript">
		isIElt9 = true;
	</script>
<![endif]-->
<script type="text/javascript">
	$(document).ready(function() {
		<!-- For version detection, set to min. required Flash Player version, or 0 (or 0.0.0), for no version detection. -->
		var swfVersionStr = "11.1.0";
		<!-- To use express install, set to playerProductInstall.swf, otherwise the empty string. -->
		var xiSwfUrlStr = "playerProductInstall.swf";
		var flashvars = {config : '/<?php echo "$currentDirectory"?>/<?php echo "$configFile"?>?sid=<?php echo "$sid"?>%26center=<?php echo "$centerX"  echo "$centerY"?>%26initialZoom=<?php echo "$initalScale"?>%26stormName=<?php echo "$stormName"?>', sid : 'US', state : 'United States'};
		var params = {};
		params.quality = "high";
		params.bgcolor = "<?php echo "$"?>ffffff";
		params.allowscriptaccess = "sameDomain";
		params.allowFullScreen = "true";
		var isAIR = navigator.userAgent.indexOf("AdobeAIR") != -1;

		params.wmode = "opaque";

		var attributes = {};
		attributes.id = "index";
		attributes.name = "index";
		attributes.align = "middle";
		if(swfobject.hasFlashPlayerVersion(swfVersionStr)) {
			swfobject.embedSWF(
				"/state/maps/viewer/index.swf", "map_flash_container",
				"100%", "700",
				swfVersionStr, xiSwfUrlStr,
				flashvars, params, attributes);
			<!-- JavaScript enabled so display the flashContent div in case it is not replaced with a swf object. -->
			swfobject.createCSS("<?php echo "$"?>map_flash_container", "display:block;text-align:left;");
		}
		else {
			var version = swfobject.getFlashPlayerVersion()
			if(version.major != 0 || version.minor != 0 || version.release != 0) {
				$('<?php echo "$"?>map_flash_container').prepend('<p>Current flash player version: ' + version.major + '.' + version.minor + '.' + version.release + '</p>');
			}
		}
		$(function(){
			require(['/global/scripts/modules/lib/jquery.mousewheel.js'], function(){
				$('<?php echo "$"?>profile_map_inner_container').on('mousewheel', function(event){
					var orgEvent = window.event ? window.event : event.originalEvent;
					event.preventDefault();
					$('object<?php echo "$"?>index')[0].mouseWheelHandler((orgEvent.wheelDelta/120) || (-orgEvent.detail/3));
					return false;					
				});
			});
		});
	});
</script>

<div class="blue_top" id="profile_map_container">
	<div id="profile_map_inner_container">
		<div id="map_flash_container">
			<p>
				To view the interactive map ensure that Adobe Flash Player version
				11.1.0 or greater is installed.
			</p>
			<script type="text/javascript">
				var pageHost = ((document.location.protocol == "https:") ? "https://" : "http://");
				document.write("<a href='http://www.adobe.com/go/getflashplayer'><img src='"
								+ pageHost + "www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a>" );
			</script>
		</div>
		<noscript>
			<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="index">
				<param name="movie" value="index.swf" />
				<param name="quality" value="high" />
				<param name="bgcolor" value="#ffffff" />
				<param name="allowScriptAccess" value="sameDomain" />
				<param name="allowFullScreen" value="true" />
				<!--[if !IE]>-->
				<object type="application/x-shockwave-flash" data="index.swf" width="100%" height="100%">
					<param name="quality" value="high" />
					<param name="bgcolor" value="#ffffff" />
					<param name="allowScriptAccess" value="sameDomain" />
					<param name="allowFullScreen" value="true" />
				<!--<![endif]-->
				<!--[if gte IE 6]>-->
					<p>
						To view the interactive map ensure that scripts and interactive content are permitted to run, and that Adobe Flash Player version
						11.1.0 or greater is installed.
					</p>
				<!--<![endif]-->
					<a href="http://www.adobe.com/go/getflashplayer">
						<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash Player" />
					</a>
				<!--[if !IE]>-->
				</object>
				<!--<![endif]-->
			</object>
		</noscript>
		
	</div>
	
	<div class="carousel_footer">
        &nbsp;&nbsp;<a href="/state/notes-sources.cfm#maps">Map details and data</a>
		<!-- <a target="_blank" href="maps/map_legend.pdf" class="ico_pdf">Map legend</a> --> 
		<span style="float:right;">Send map questions, comments and<br />suggestions to: <a href="mailto:mapping@eia.gov">mapping@eia.gov</a></span><br /><br />
	</div>
</div>