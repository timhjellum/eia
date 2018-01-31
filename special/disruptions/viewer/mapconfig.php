<?php
    $version = "15";
    $center = isset($center) ? $center : '';
    $extents = isset($extents) ? $extents : '';
    $initialZoom = isset($initialZoom) ? $initialZoom : '73957190.948944';
    $basemap = isset($basemap) ? $basemap : 'Grey Base';
    $stormName = isset($stormName) ? $stormName : '';
?>
	<?php include ('/state/maps/configXml.php') ; ?>

<?php $configDoc = XmlParse(trim(configXml)); ?>
<?php $hurricaneLayersDoc = hurricaneLayersXml ?>	
	<?php /*<layer layerid="Atlantic Storms" label="Atlantic Storms" type="dynamic" visible="<?php if ( $visiblelayers["Atlantic Storms"] neq$'' '' ) {?>true<?php  } else { ?>false<?php  } // end if ?>"  alpha="0.8"
				url="http://gis.srh.noaa.gov/ArcGIS/rest/services/AtStormViewer/MapServer/"
					<?php if ( $visiblelayers["Atlantic Storms"] neq$'' '' ) {?>visiblelayers="<?php echo "$visiblelayers["Atlantic Storms"]"?>"<?php  } // end if ?>>
				
			</layer>*/ ?>
			<layer layerid="Warnings" label="Warnings" type="dynamic" visible="<?php if ( $visiblelayers["Warnings"] != '') {?>true<?php  } else { ?>false<?php  } // end if ?>" alpha="0.8"
					url="http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Weather_Warnings_Watches_Advisories_Statements/MapServer" 
					<?php if ( $visiblelayers["Warnings"] != '') {?>visiblelayers="<?php echo "$visiblelayers["Warnings"]"?>"<?php  } // end if ?>     
					<sublayer id="0" 
						popupconfig="/special/disruptions/viewer/popups/Warnings/PopUp_Warnings.xml"
						/>    
			</layer>
			<layer layerid="NDFD Snowfall" label="NDFD Snowfall" type="dynamic" visible="<?php if ( $visiblelayers["NDFD Snowfall"] neq$'' '' ) {?>true<?php  } else { ?>false<?php  } // end if ?>" alpha="0.8"
					url="http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/NDFD_SnowFall/MapServer"
					<?php if ( $visiblelayers["NDFD Snowfall"] neq$'' '' ) {?>visiblelayers="<?php echo "$visiblelayers["NDFD Snowfall"]"?>"<?php  } // end if ?>>
					<sublayer id="0" 
						popupconfig="/special/disruptions/viewer/popups/SnowFall/PopUp_SnowfallAmountByTime.xml"
						/>
                    <sublayer id="1" 
						popupconfig="/special/disruptions/viewer/popups/SnowFall/PopUp_SnowfallAccumulationByTime.xml"
						/> 
                    <sublayer id="2" 
						popupconfig="/special/disruptions/viewer/popups/SnowFall/PopUp_SnowfallCumulativeTotal.xml"
						/>           
			</layer>
			<layer layerid="Active Storms" label="Active Storms" type="dynamic" visible="<?php if ( $visiblelayers["Active Hurricanes"] neq$'' '' ) {?>true<?php  } else { ?>false<?php  } // end if ?>" alpha="0.8"
					url="http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Active/MapServer"
					<?php if ( $visiblelayers["Active Hurricanes"] neq$'' '' ) {?>visiblelayers="<?php echo "$visiblelayers["Active Hurricanes"]"?>"<?php  } // end if ?>>
					<sublayer id="0" 
						popupconfig="/special/disruptions/viewer/popups/ActiveHurricanes/PopUp_ForecastPositions.xml"
						<?php if ( $stormName != '') {?>definitionexpression="STORMNAME='<?php echo "$stormName"?>'"<?php  } // end if ?>
						/>
					<sublayer id="1" 
						popupconfig="/special/disruptions/viewer/popups/ActiveHurricanes/PopUp_PastPositions.xml"
						<?php if ( $stormName != '') {?>definitionexpression="STORMNAME='<?php echo "$stormName"?>'"<?php  } // end if ?>
						/>
					<sublayer id="2" 
						<?php /*popupconfig="/special/disruptions/viewer/popups/ActiveHurricanes/PopUp_ForecastTrack.xml"*/ ?>
						<?php if ( $stormName != '') {?>definitionexpression="STORMNAME='<?php echo "$stormName"?>'"<?php  } // end if ?>
						/>
					<sublayer id="3" 
						<?php /*popupconfig="/special/disruptions/viewer/popups/ActiveHurricanes/PopUp_ObservedTrack.xml"*/ ?>
						<?php if ( $stormName != '') {?>definitionexpression="STORMNAME='<?php echo "$stormName"?>'"<?php  } // end if ?>
						/>
					<sublayer id="4" 
						popupconfig="/special/disruptions/viewer/popups/ActiveHurricanes/PopUp_ForecastErrorCone.xml"
						<?php if ( $stormName != '') {?>definitionexpression="STORMNAME='<?php echo "$stormName"?>'"<?php  } // end if ?>
						/>
					<sublayer id="5" 
						popupconfig="/special/disruptions/viewer/popups/ActiveHurricanes/PopUp_WatchesAndWarnings.xml"
						<?php if ( $stormName != '') {?>definitionexpression="STORMNAME='<?php echo "$stormName"?>'"<?php  } // end if ?>
						/>
			</layer>
			<layer layerid="Recent Storms" label="Recent Storms" type="dynamic" visible="<?php if ( $visiblelayers["Recent Hurricanes"] neq$'' '' ) {?>true<?php  } else { ?>false<?php  } // end if ?>" alpha="0.8"
					url="http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Hurricane_Recent/MapServer"
					<?php if ( $visiblelayers["Recent Hurricanes"] neq$'' '' ) {?>visiblelayers="<?php echo "$visiblelayers["Recent Hurricanes"]"?>"<?php  } // end if ?>>
					<sublayer id="0" 
						popupconfig="/special/disruptions/viewer/popups/RecentHurricanes/PopUp_PastPositions.xml"
						<?php if ( $stormName != '') {?>definitionexpression="STORMNAME='<?php echo "$stormName"?>'"<?php  } // end if ?>
						/>
					<sublayer id="1" 
						<?php /*popupconfig="/special/disruptions/viewer/popups/RecentHurricanes/PopUp_ObservedTrack.xml"*/ ?>
						<?php if ( $stormName != '') {?>definitionexpression="STORMNAME='<?php echo "$stormName"?>'"<?php  } // end if ?>
						/>
			</layer>
			<layer layerid="Wind Speed" label="Wind Speed" type="dynamic" visible="<?php if ( $visiblelayers["Wind Speed"] neq$'' '' ) {?>true<?php  } else { ?>false<?php  } // end if ?>" alpha="0.8"
					url="http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/NOAA_METAR_current_wind_speed_direction/MapServer"
					<?php if ( $visiblelayers["Wind Speed"] neq$'' '' ) {?>visiblelayers="<?php echo "$visiblelayers["Wind Speed"]"?>"<?php  } // end if ?>>
			</layer>
		</operationallayers>
	
</cfsavecontent>
<?php $hurricaneLayersDoc = XmlParse(trim(hurricaneLayersXml)); 

 $opLayers = configDoc.configuration.map.operationalLayers.XmlChildren; 
 $hurricaneOpLayers = hurricaneLayersDoc.operationalLayers.XmlChildren; 
 $configDoc.configuration.stateMaskEnabled.XmlText = "false"; ?>

<cfloop from=1 to=$ArrayLen(hurricaneOpLayers) index=i>
	<?php $ArrayInsertAt(opLayers, i, XmlImport(configDoc, hurricaneOpLayers[i])); ?>
</cfloop>
<?php $configDoc.configuration.widgetContainer.widget[1].XmlAttributes.config = "/special/disruptions/viewer/TOCWidget.xml"; 
 echo "$ToString(configDoc)"?>

<cffunction
	name="XmlImport"
	access="public"
	returntype="any"
	output="false"
	hint="I import the given XML data into the given XML document so that it can inserted into the node tree.>
	<?php /* Define arguments. */ ?>
	<cfargument
		name="ParentDocument"
		type="xml"
		required="true"
		hint="I am the parent XML document into which the given nodes will be imported.
		/>
	<cfargument
		name="Nodes"
		type="any"
		required="true"
		hint="I am the XML tree or array of XML nodes to be imported. NOTE: If you pass in an array, each array index is treated as it's own separate node tree and any relationship between node indexes is ignored.
		/>
 
	<?php /* Define the local scope. */ ?>
	<?php $var LOCAL = {} /; ?>
 
	<?php /*
	Check to see how the XML nodes were passed to us. If it
	was an array, import each node index as its own XML tree.
	If it was an XML tree, import recursively.
	*/ ?>
	<?php if ( $IsArray( ARGUMENTS.Nodes )) {?>
	 
		<?php /* Create a new array to return imported nodes. */ ?>
		<?php $LOCAL.ImportedNodes = [] /; ?>
		 
		<?php /* Loop over each node and import it. */ ?>
		<cfloop
			index="LOCAL.Node"
			array="$ARGUMENTS.Nodes" >
	 
			<?php /* Import and append to return array. */ ?>
			<?php $ArrayAppend(
				LOCAL.ImportedNodes,
					XmlImport(
						ARGUMENTS.ParentDocument,
						LOCAL.Node
					)
				) /; ?>
		</cfloop>
	 
		<?php /* Return imported nodes array. */ ?>
		<cfreturn LOCAL.ImportedNodes />
	<?php  } else { ?>
		<?php /*
			We were passed an XML document or nodes or XML string.
			Either way, let's copy the top level node and then
			copy and append any children.
			 
			NOTE: Add ( ARGUMENTS.Nodes.XmlNsURI ) as second
			argument if you are dealing with name spaces.
		*/ ?>
		<?php $LOCAL.NewNode = XmlElemNew(
			ARGUMENTS.ParentDocument,
			ARGUMENTS.Nodes.XmlName
			) /; ?>
		 
		<?php /* Append the XML attributes. */ ?>
		<?php $StructAppend(
			LOCAL.NewNode.XmlAttributes,
			ARGUMENTS.Nodes.XmlAttributes
			) /; ?>
		 
		<?php /* Copy simple values. */ ?>
		<?php /*
			<?php $LOCAL.NewNode.XmlNsPrefix = ARGUMENTS.Nodes.XmlNsPrefix /; 
			 $LOCAL.NewNode.XmlNsUri = ARGUMENTS.Nodes.XmlNsUri /; ?>
		*/ ?>
		<?php if ( $ARGUMENTS.Nodes.XmlText != '') {
		 $LOCAL.NewNode.XmlText = ARGUMENTS.Nodes.XmlText /; 
		  } // end if 
		 if ( $ARGUMENTS.Nodes.XMLComment != '') {
		 $LOCAL.NewNode.XmlComment = ARGUMENTS.Nodes.XmlComment /; 
		  } // end if ?>
		 
		<?php /*
			Loop over the child nodes and import them as well
			and then append them to the new node.
		*/ ?>
		<cfloop
			index="LOCAL.ChildNode"
			array="$ARGUMENTS.Nodes.XmlChildren" >
		 
			<?php /* Import and append. */ ?>
			<?php $ArrayAppend(
				LOCAL.NewNode.XmlChildren,
					XmlImport(
						ARGUMENTS.ParentDocument,
						LOCAL.ChildNode
					)
				) /; ?>
			 
		</cfloop>
		 
		<?php /* Return the new, imported node. */ ?>
		<cfreturn LOCAL.NewNode />
	<?php  } // end if ?>
</cffunction>