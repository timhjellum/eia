<style>
	
.map_div{
	width: 933px;
	height:700px;
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
	height:645px;
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

    <div class="pagecontent mr_temp4">

      <div class="map_div left map_container blue_top">
      <?php /* Main Column */ ?>
        <div style="background-color:#fff;" class="print">
        	<img src="/special/east_coast/images/ace_all_hurricane.jpg" />
        	<img src="/special/east_coast/images/ace_legend.jpg" style="margin-top:-1px; padding-top:0px; border-top:solid 1px #dedede;"/>
        </div>
        <div style="height:645px;width:675px; background-color:#fff;" class="left do-not-print">
					<img src="/special/east_coast/images/ace_scale-compass.png" style="z-index:14; position:absolute;" id="scale"/>
					<?php /*img src="/special/east_coast/images/hurricane.png" style="z-index:13; position:absolute;" id="hurricane"/*/ ?>
          <img src="/special/east_coast/images/ace_state-names.png" style="z-index:12; position:absolute;" id="state_names"/>
          <?php /*img src="/special/east_coast/images/ace_heating_oil.png" style="z-index:11; position:absolute;" id="heating"/*/ ?>
          <img src="/special/east_coast/images/ace_nat-gas-processing.png" style="z-index:10; position:absolute;" id="nat_gas_proc"/>
          <img src="/special/east_coast/images/ace_electric-power-plants.png" style="z-index:8; position:absolute;" id="elec_power_plants"/>
          <img src="/special/east_coast/images/ace_oil-import_seaport.png" style="z-index:7; position:absolute;" id="oil_imp_seaport"/>
          <img src="/special/east_coast/images/ace_refineries.png" style="z-index:6; position:absolute;" id="refineries"/>
          <img src="/special/east_coast/images/ace_electric-line.png" style="z-index:5; position:absolute;" id="elec_line"/>
          <img src="/special/east_coast/images/ace_LNG.png" style="z-index:4; position:absolute;" id="lng"/>
          <img src="/special/east_coast/images/ace_nat-gas-hubs.png" style="z-index:3; position:absolute;" id="nat_gas_hubs"/>
          <img src="/special/east_coast/images/ace_nat-gas-pipelines.png" style="z-index:2; position:absolute;" id="nat_gas_pipelines"/>
      		<img src="/special/east_coast/images/ace_map-bg.png" style="z-index:1; position:absolute;" id="map_bg"/>
       </div>
			<div class="right map_legend do-not-print">
				<p><em>Uncheck or check an item to hide or show it in the map.</em></p>
		    <form name="ckbs" id="ckbs" style="margin:0px;" class="do-not-print">

		      <ul style="list-style:none; padding-left:0px; padding-top:5px; margin:0px;" class="nobullets map_labels">
		        <li> <span>
		          <label>
		          <input type="checkbox" name="elec_power_plants" checked="checked" />
		          <p class="map_ckboxes">Electric Power Plants (>=100 MW)
		          	<div style="width:110px; margin-left:23px; float:left; margin-bottom:0px; padding-bottom:5px; //margin-bottom:-20px;">
                      Coal <img src="/special/east_coast/images/legend/coal.jpg" /><br/>
                      Hydroelectric <img src="/special/east_coast/images/legend/hydro.jpg" /><br/>
                      Natural Gas <img src="/special/east_coast/images/legend/nat_gas.jpg" /><br/>
                      Nuclear <img src="/special/east_coast/images/legend/nuclear.jpg" />
		              </div>
		              <div style="width:95px; float:left; margin-bottom:0px; padding-bottom:5px; //margin-bottom:-20px;">
                      Petroleum <img src="/special/east_coast/images/legend/petro.jpg" /><br/>
                      Wood <img src="/special/east_coast/images/legend/wood.jpg" /><br/>
                      Wind <img src="/special/east_coast/images/legend/wind.jpg" /><br/>
                      Other <img src="/special/east_coast/images/legend/other.jpg" />
		              </div>
		          </p>
		          </label>
		        </span></li>
		        <li> <span>
		          <label>
		          <input type="checkbox" name="elec_line" checked="checked" />
		          <p class="map_ckboxes">Electricity Transmission Lines (>=345kV)<img src="/special/east_coast/images/legend/elec_lines.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span>
		          <label>
		          <input type="checkbox" name="lng" checked="checked" />
		          <p class="map_ckboxes">LNG terminals<img src="/special/east_coast/images/legend/lng.jpg" /></p>
		          </label>
		        </span> </li>
		        <li> <span>
		          <label>
		          <input type="checkbox" name="nat_gas_hubs" checked="checked" />
		          <p class="map_ckboxes">Natural Gas Market Centers (Hubs)<img src="/special/east_coast/images/legend/nat_gas_hub.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span>
		          <label>
		          <input type="checkbox" name="nat_gas_proc" checked="checked" />
		          <p class="map_ckboxes">Natural Gas Processing Plants<img src="/special/east_coast/images/legend/nat_gas_processing.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span>
		          <label>
		          <input type="checkbox" name="nat_gas_pipelines" checked="checked" />
		          <p class="map_ckboxes">Natural Gas Interstate, Intrastate, and Gathering Pipelines<img src="/special/east_coast/images/legend/nat_gas_interstate.jpg" /><img src="/special/east_coast/images/legend/nat_gas_intrastate.jpg" /></p>
		          <span>
		          </label>
		        </span></li>
		        <li> <span>
		          <label>
		          <input type="checkbox" name="oil_imp_seaport" checked="checked" />
		          <p class="map_ckboxes">Oil Import Site & Oil Seaports<img src="/special/east_coast/images/legend/oil_import.jpg" /><img src="/special/east_coast/images/legend/seaport.jpg" /></p>
		          </label>
		        </span></li>
		        <li> <span>
		          <label>
		          <input type="checkbox" name="refineries" checked="checked" />
		          <p class="map_ckboxes">Petroleum Refineries<img src="/special/east_coast/images/legend/refinery.jpg" /></p>
		          </label>
		        </span></li>
		        <?php /*li> <span>
		          <label>
		          <input type="checkbox" name="heating" checked="checked" />
		          <p class="map_ckboxes">Heating Oil Reserve Site<img src="/special/east_coast/images/legend/heating_oil.jpg" /></p>
		          </label>
		        </span></li*/ ?>
		      </ul>
		      <br/>
		      <input type="button" name="reset_map" value="Show All" class="pad_button"/>
		      <input type="button" name="uncheck_all" value="Hide All" />
		    </form>
		  </div>
       <div class="do-not-print" style="clear:left;">
       	  <p style="border-top:#ccc 1px solid; padding-top:6px; padding-left:12px;" ><strong>Map Sources:</strong> Infrastructure&mdash;Energy Information Administration (GasTran System), Ventyx (Energy Velocity);
          <?php /*br/>Hurricane path with 67% likelihood cone&mdash;National Oceanic and Atmospheric Administration (NOAA) */ ?></p>
     	 </div>
     </div>
      </div>
<script src="/special/east_coast/includes/map_controls.js"></script>
