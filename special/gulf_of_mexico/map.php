<?php $locale = 'map'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php include ('global/includes/eia_head_info.inc') ; ?>

<style>
	
.map_div{
	width: 933px;
	height:575px;
	margin: 0 0 0 22px;
}
.map_container {
  background-color: #F4F4F4;
  border: 1px solid #E3E5E6;
  border-top: 4px solid #189BD7;
  margin-bottom: 16px;
  /*padding: 17px;*/
}
.map_ckboxes {
	position:relative;
	float:right;
	clear:none;
	margin:0px;
	padding:0px;
	margin-bottom:5px;
	width:90%;
	//margin-top:-18px;
}

.map_ckboxes img {
	margin-left:5px;
}

.map_labels li {
	clear:both;
}
.map_labels img {
	border:none !important;
}
.map_legend {
	width:240px;
	height:539px;
	padding-top:6px;
	margin-right:12px;
}
.map_legend ul{
	overflow:hidden !important;
}
.pad_button{
	margin-left:23px;
}

@media print {
.map_div{
	width: 675px;
	height:auto;
	margin: 0px;
}
.do-not-print img {
	display:none;
}
}	
</style>

<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body>
  <div id="outerX"><?php /* Outer Wrapper */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
  <?php include ('includes/subnav_gom.inc') ; ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mr_temp4">

      <div class="map_div left map_container blue_top">
      <?php /* Main Column */ ?>
        <div style="background-color:#fff;" class="print">
        	<img src="images/gcei_all.jpg" />
        	<img src="images/gcei_legend.jpg" style="padding-top:6px; border-top:solid 1px #dedede;"/>
        </div>
        <div style="height:539px;width:675px; margin-bottom:5px; background-color:#fff;" class="left do-not-print">
          <img src="images/gcei_scale-compass.png" style="z-index:19; position:absolute;" id="scale"/>
          <img src="images/gcei_city-names.png" style="z-index:18; position:absolute;" id="city_names"/>
          <img src="images/gcei_state-names.png" style="z-index:17; position:absolute;" id="state_names"/>
          <img src="images/gcei_nat-gas-processing.png" style="z-index:14; position:absolute;" id="nat_gas_proc"/>
          <img src="images/gcei_strategic-petroleum-reserve.png" style="z-index:13; position:absolute;" id="strat_petro_res"/>
          <img src="images/gcei_loop.png" style="z-index:12; position:absolute;" id="loop"/>
          <img src="images/gcei_propane-hub.png" style="z-index:11; position:absolute;" id="propane_hub"/>
          <img src="images/gcei_electric-power-plants.png" style="z-index:10; position:absolute;" id="elec_power_plants"/>
          <img src="images/gcei_oil-import_seaport.png" style="z-index:9; position:absolute;" id="oil_imp_seaport"/>
          <img src="images/gcei_refineries.png" style="z-index:8; position:absolute;" id="refineries"/>
          <img src="images/gcei_electric-line-gt345.png" style="z-index:7; position:absolute;" id="elec_line_gt"/>
          <img src="images/gcei_electric-line-lt345.png" style="z-index:6; position:absolute;" id="elec_line_lt"/>
          <img src="images/gcei_LNG.png" style="z-index:5; position:absolute;" id="lng"/>
          <img src="images/gcei_nat-gas-hubs.png" style="z-index:4; position:absolute;" id="nat_gas_hubs"/>
          <img src="images/gcei_nat-gas-pipelines.png" style="z-index:3; position:absolute;" id="nat_gas_pipelines"/>
          <img src="images/gcei_active-platforms.png" style="z-index:2; position:absolute;" id="platforms"/>
          <img src="images/gcei_map-bg.png" style="z-index:1; position:absolute;" id="map_bg"/>
       </div>
			<div class="right map_legend do-not-print">
				<p><em>Uncheck or check an item to hide or show it in the map.</em></p>
		    <form name="ckbs" id="ckbs" style="margin:0px;" class="do-not-print">

		      <ul style="list-style:none; padding-left:0px; padding-top:5px; margin:0px;" class="nobullets map_labels">
		        <li> <span >
		          <label>
		          <input type="checkbox" name="elec_power_plants" checked="checked" />
		          <p class="map_ckboxes">Electric Power Plants (>=100 MW)
		          	<div style="width:110px; margin-left:23px; float:left; margin-bottom:0px; padding-bottom:5px; //margin-bottom:-20px;">
                      Coal <img src="images/legend/coal.jpg" /><br/>
                      Hydroelectric <img src="images/legend/hydro.jpg" /><br/>
                      Natural Gas <img src="images/legend/nat_gas.jpg" /><br/>
                      Nuclear <img src="images/legend/nuclear.jpg" />
		              </div>
		              <div style="width:95px; float:left; margin-bottom:0px; padding-bottom:5px; //margin-bottom:-20px;">
                      Petroleum <img src="images/legend/petro.jpg" /><br/>
                      Wood <img src="images/legend/wood.jpg" /><br/>
                      Wind <img src="images/legend/wind.jpg" /><br/>
                      Other <img src="images/legend/other.jpg" />
		              </div>
		          </p>
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="elec_line_gt" checked="checked" />
		          <p class="map_ckboxes">Electricity Transmission Lines (&gt;=345kV)<img src="images/legend/elec_lines.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="elec_line_lt" checked="checked" />
		          <p class="map_ckboxes">Electricity Transmission Lines (&lt;345kV)<img src="images/legend/elec_lines_lt345.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="lng" checked="checked" />
		          <p class="map_ckboxes">LNG terminals<img src="images/legend/lng.jpg" /></p>
		          </label>
		        </span> </li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="nat_gas_hubs" checked="checked" />
		          <p class="map_ckboxes">Natural Gas Market Centers (Hubs)<img src="images/legend/nat_gas_hub.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="nat_gas_proc" checked="checked" />
		          <p class="map_ckboxes">Natural Gas Processing Plants<img src="images/legend/nat_gas_processing.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="nat_gas_pipelines" checked="checked" />
		          <p class="map_ckboxes">Natural Gas Interstate, Intrastate, and Gathering Pipelines<img src="images/legend/nat_gas_interstate.jpg" /><img src="images/legend/nat_gas_intrastate.jpg" /></p>
		          <span >
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="oil_imp_seaport" checked="checked" />
		          <p class="map_ckboxes">Oil Import Site & Oil Seaports<img src="images/legend/oil_import.jpg" /><img src="images/legend/seaport.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="refineries" checked="checked" />
		          <p class="map_ckboxes">Petroleum Refineries<img src="images/legend/refinery.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="propane_hub" checked="checked" />
		          <p class="map_ckboxes">Propane Hub<img src="images/legend/propane_hub.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="loop" checked="checked" />
		          <p class="map_ckboxes">Louisiana Offshore Oil Port<img src="images/legend/loop.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="strat_petro_res" checked="checked" />
		          <p class="map_ckboxes">Strategic Petroleum Reserves<img src="images/legend/strat_petro.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span >
		          <label>
		          <input type="checkbox" name="platforms" checked="checked" />
		          <p class="map_ckboxes">Oil/Gas Active Platforms<img src="images/legend/active_platforms.jpg" /></p>
		          </label>
		        </span></li>
		      </ul>
		      
		      <input type="button" name="reset_map" value="Show All" class="pad_button"/>
		      <input type="button" name="uncheck_all" value="Hide All" />
		    </form>
		  </div>
       <div style="padding-top:539px;" class="do-not-print">
       	  <p style="border-top:#ccc 1px solid;padding-top:6px; padding-left:12px;" class="footnotes"><strong>Map Sources:</strong> Infrastructure&mdash;Energy Information Administration (GasTran System), Ventyx (Energy Velocity)</p>
     	 </div>
     </div>
      </div>

<script>
	$(document).ready(function () {
	  $('input[name="reset_map"]').trigger('click');
	});
	$('input[name="elec_power_plants"]').click(function() {
	  $('#elec_power_plants').toggle()
	  });
	$('input[name="elec_line_gt"]').click(function() {
	  $('#elec_line_gt').toggle()
	  });
	$('input[name="elec_line_lt"]').click(function() {
	  $('#elec_line_lt').toggle()
	  });
	$('input[name="lng"]').click(function() {
	  $('#lng').toggle()
	  });
	$('input[name="nat_gas_hubs"]').click(function() {
	  $('#nat_gas_hubs').toggle()
	  });
	$('input[name="nat_gas_proc"]').click(function() {
	  $('#nat_gas_proc').toggle()
	  });
	$('input[name="nat_gas_pipelines"]').click(function() {
	  $('#nat_gas_pipelines').toggle()
	  });
	$('input[name="oil_imp_seaport"]').click(function() {
	  $('#oil_imp_seaport').toggle()
	  });
	$('input[name="refineries"]').click(function() {
	  $('#refineries').toggle()
	  });
	$('input[name="propane_hub"]').click(function() {
	  $('#propane_hub').toggle()
	  });
	$('input[name="loop"]').click(function() {
	  $('#loop').toggle()
	  });
	$('input[name="strat_petro_res"]').click(function() {
	  $('#strat_petro_res').toggle()
	  });
	$('input[name="platforms"]').click(function() {
	  $('#platforms').toggle()
	  });
	  
/*-----Reset the map-------*/
	  
	$('input[name="reset_map"]').click(function() {
	  $('#elec_power_plants').show();
	  $('#elec_line_gt').show();
		$('#elec_line_lt').show();
	  $('#lng').show();
	  $('#nat_gas_hubs').show();
	  $('#nat_gas_proc').show();
	  $('#nat_gas_pipelines').show();
	  $('#oil_imp_seaport').show();
	  $('#refineries').show();
	  $('#propane_hub').show();
	  $('#loop').show();
	  $('#strat_petro_res').show();
	  $('#platforms').show();
	  
	  $('input[name="elec_power_plants"]').attr("checked","checked");
	  $('input[name="elec_line_gt"]').attr("checked","checked");
	  $('input[name="elec_line_lt"]').attr("checked","checked");
	  $('input[name="lng"]').attr("checked","checked");
	  $('input[name="nat_gas_hubs"]').attr("checked","checked");
	  $('input[name="nat_gas_proc"]').attr("checked","checked");
	  $('input[name="nat_gas_pipelines"]').attr("checked","checked");
	  $('input[name="oil_imp_seaport"]').attr("checked","checked");
	  $('input[name="refineries"]').attr("checked","checked");
	  $('input[name="propane_hub"]').attr("checked","checked");
	  $('input[name="loop"]').attr("checked","checked");
	  $('input[name="strat_petro_res"]').attr("checked","checked");
	  $('input[name="platforms"]').attr("checked","checked");
	});
	
/*-----Turn off all layers in the map-------*/	  
	  
	$('input[name="uncheck_all"]').click(function() {
	  $('#elec_power_plants').hide();
	  $('#elec_line_gt').hide();
	  $('#elec_line_lt').hide();
	  $('#lng').hide();
	  $('#nat_gas_hubs').hide();
	  $('#nat_gas_proc').hide();
	  $('#nat_gas_pipelines').hide();
	  $('#oil_imp_seaport').hide();
	  $('#refineries').hide();
	  $('#propane_hub').hide();
	  $('#loop').hide();
	  $('#strat_petro_res').hide();
	  $('#platforms').hide();
	  
	  $('input[name="elec_power_plants"]').removeAttr("checked");
	  $('input[name="elec_line_gt"]').removeAttr("checked");
	  $('input[name="elec_line_lt"]').removeAttr("checked");
	  $('input[name="lng"]').removeAttr("checked");
	  $('input[name="nat_gas_hubs"]').removeAttr("checked");
	  $('input[name="nat_gas_proc"]').removeAttr("checked");
	  $('input[name="nat_gas_pipelines"]').removeAttr("checked");
	  $('input[name="oil_imp_seaport"]').removeAttr("checked");
	  $('input[name="refineries"]').removeAttr("checked");
	  $('input[name="propane_hub"]').removeAttr("checked");
	  $('input[name="loop"]').removeAttr("checked");
	  $('input[name="strat_petro_res"]').removeAttr("checked");
	  $('input[name="platforms"]').removeAttr("checked");
	});
</script>

<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>