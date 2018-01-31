<?php $locale = 'data'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>EIA - Gulf of Mexico Energy Data</title>
<?php include ('global/includes/eia_head_info.inc') ; ?>
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>
<body>
<?php /* Start of Outer Wrapper */ ?>
<div id="outerX">
  <?php /* EIA Header */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
      <?php /* Navigation Menu */ ?>
      <?php include ('special/disruptions/includes/subnav_hurricane_ec.inc') ; ?>
      <?php /* Page/Body Content */ ?>
      <div class="pagecontent mr_temp2">
        <?php /* Start of Main Column */ ?>
        <div class="main_col">
          <p><strong>Release Date:</strong> August 31, 2011</p>
          <h1>Energy Data</h1>
          <?php /*p>The Gulf of Mexico area, both   onshore and offshore, is one of the most important regions for energy resources   and infrastructure. Gulf of Mexico offshore oil production accounts for 29   percent of total U.S. crude oil production and offshore natural gas production   in the Gulf accounts for 12 percent of total U.S. production. Over 40 percent of   total U.S. petroleum refining capacity is located along the Gulf coast, as well   as almost 30 percent of total U.S. natural gas processing plant capacity.</p*/ ?>
          <span class="condaterange"><a class="no-border expandall">+ EXPAND ALL</a></span>
          <table class="contable numeric">
            <?php /* BEGIN Petroleum Facts Content ////////////////*/ ?>
            <thead id="petroleum_fuel_facts">
              <tr>
                <th colspan="5"><a name="petroleum_fuel_facts" id="petroleum_fuel_facts"></a>U.S. Petroleum and Other Liquid Fuels Facts for 2010</th>
              </tr>
            </thead>
            <tr>
              <td colspan="3"><p>&nbsp;</p></td>
              <td><strong>Million Barrels<br/> Per Day</strong></td>
              <td><strong>Share of Total U.S. Liquid<br/> Fuels Consumed</strong></td>
            </tr>
            <tr>
              <td colspan="3">Liquid Fuels Production </td>
              <td>9.8</td>
              <td>51%</td>
            </tr>
            <tr class="level2_indent">
              <td class="level2_indent" colspan="3" >U.S. Crude Oil Production </td>
              <td>5.5</td>
              <td>29%</td>
            </tr>
            <tr class="total level3_indent">
              <td colspan="3">Total Offshore Production <sup><a href="#1ftnotet1">1</a></sup></td>
              <td>1.7 </td>
              <td>9%</td>
            </tr>
            <tr class="level4_indent">
              <td colspan="3">Gulf of Mexico Offshore Production<sup><a href="#1ftnotet1">1</a></sup></td>
              <td>1.6</td>
              <td>8%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3">Natural Gas Plant Liquids </td>
              <td>2.1</td>
              <td>11%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3">Refinery Processing Gain </td>
              <td>1.1</td>
              <td>6%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3">Biofuels</td>
              <td>0.9</td>
              <td>5%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3">Other<sup><a href="#2ftnotet1">2</a></sup></td>
              <td>0.3</td>
              <td>2%</td>
            </tr>
            <tr>
              <td colspan="3">Stocks Withdrawn </td>
              <td>0</td>
              <td>0% </td>
            </tr>
            <tr>
              <td colspan="3">Net Imports </td>
              <td>9.4</td>
              <td>49%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3">Gross Imports into Gulf Coast </td>
              <td>6.2</td>
              <td>33%</td>
            </tr>
            <tr class="total">
              <td colspan="3">Total U.S. Liquid Fuels Consumed<sup><a href="#3ftnotet1">3</a></sup>
              <td>19.2</td>
              <td>100%</td>
            </tr>
            <tr>
              <td colspan="4">Offshore share of U.S. crude oil production </td>
              <td>32%</td>
            </tr>
            <tr>
              <td colspan="4">Gulf of Mexico offshore share of U.S. crude oil production </td>
              <td>29%</td>
            </tr>
            <tr>
              <td colspan="5"><a name="1ftnotet1" id="1ftnotet1" style="margin-left:-1.5px;"></a>1. Includes Federal and State offshore production. <br />
                <a name="2ftnotet1" id="2ftnotet1"></a>2. Includes oxygenates, denaturants, other hydrocarbons, and hydrogen. <br />
              <a name="3ftnotet1" id="3ftnotet1"></a>3. Liquid fuels consumed equals product supplied reported in the Petroleum Supply Annual.<br/>
              Source: U.S. Energy Information Administration, <a href="http://www.eia.gov/oil_gas/petroleum/data_publications/petroleum_supply_annual/psa_volume1/psa_volume1.html">Petroleum Suppply Annual 2010, Volume 1</a></td>
            </tr>
             <?php /* END Petroleum Facts Content ////////////////*/ ?>
            
            <?php /* BEGIN Year-End 2010 U.S. Proved Crude Oil, Condensate and Natural Gas Liquid Reserves Content ////////////////*/ ?>
            <thead id="year_end_crude_ngl_reserves">
              <tr>
                <th colspan="5"><a name="year_end_crude_ngl_reserves" id="year_end_crude_ngl_reserves"></a><strong>Year-End 2009 U.S. Proved Crude Oil, Condensate and Natural Gas Liquid Reserves</strong></th>
              </tr>
            </thead>
            <tr>
              <td>              
            <td colspan="3"><strong>Million Barrels</strong>            
            <td>                        </tr>
            <tr>
              <td>              
              <td><strong>Crude Oil </strong></td>
              <td><strong>Condensate<br />
              </strong></td>
              <td><strong>Natural Gas
                Plant Liquids <br />
              </strong></td>
              <td><strong>Total</strong></td>
            </tr>
            <tr>
              <td>U.S. Total Offshore</td>                                        
              <td>4,340</td>
              <td>241</td>
              <td>345</td>
              <td>4,926</td>
              </tr>
            <tr class="level2_indent">
              <td class="level2_indent">U.S. Federal Offshore</td>
              <td>4,129</td>
              <td>228</td>
              <td>302</td>
              <td>4,659</td>
            </tr>
            <tr class="level2_indent">
              <td class="level2_indent">U.S. State Offshore</td>
              <td>211</td>
              <td>13</td>
              <td>43</td>
              <td>267</td>
            </tr>
            <tr>
              <td>U.S. Onshore</td>
              <td>16,342</td>
              <td>1,392</td>
              <td>8,212</td>
              <td>25,946</td>
            </tr>
            <tr>
              <td>U.S. Total Reserves</td>
              <td>20,682</td>
              <td>1,633</td>
              <td>8,557</td>
              <td>30,872</td>
            </tr>
            <tr>
              <td>Total Gulf Offshore</td>
              <td>3,828</td>
              <td>239</td>
              <td>344</td>
              <td>4,411</td>
            </tr>
            <tr class="level2_indent">
              <td class="level2_indent">Federal Gulf of Mexico</td>
              <td>3,781</td>
              <td>226</td>
              <td>301</td>
              <td>4,308</td>
            </tr>
            <tr class="level2_indent">
              <td class="level2_indent">Gulf States Offshore</td>
              <td>47</td>
              <td>13</td>
              <td>43</td>
              <td>103</td>
            </tr>
            <tr>
              <td>Total Offshore Percent of Total Reserves</td>
              <td>21%</td>
              <td>15%</td>
              <td>4%</td>
              <td>16%</td>
            </tr>
            <tr>
              <td>Total Gulf Offshore Percent of Total Reserves</td>
              <td>19%</td>
              <td>15%</td>
              <td>4%</td>
              <td>14%</td>
            </tr>
            <tr>
              <td colspan="5">Note: Alaskan reserves are all shown as onshore.</td>
            </tr>
            <tr>
              <td colspan="5">Source: U.S. Energy Information Administration, <a href="/oil_gas/natural_gas/data_publications/crude_oil_natural_gas_reserves/cr.html">U.S. Crude Oil, Natural Gas, and Natural Gas Liquids Reserves</a>, 2009</td>
            </tr>
             <?php /* END Year-End 2010 U.S. Proved Crude Oil, Condensate and Natural Gas Liquid Reserves Content ////////////////*/ ?>
            
			<?php /* BEGIN Natural Gas Facts Content ////////////////*/ ?>
            <thead id="nat_gas_facts">
              <tr>
                <th colspan="5"><a name="nat_gas_facts" id="nat_gas_facts"></a><strong>Natural Gas Facts for 2010</strong></th>
              </tr>
            </thead>
             <tr>
              <td colspan="3"><p>&nbsp;</p></td>
              <td><strong>Trillion Cubic Feet</strong></td>
              <td><strong>Share of Total U.S. <br/>Natural Gas Consumed</strong></td>
            </tr>
            <tr>
              <td colspan="3">U.S. Dry Gas Production </td>
              <td>21.6</td>
              <td>90%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3">Total Offshore Production</td>
              <td>2.7</td>
              <td>11%</td>
            </tr>
            <tr class="level3_indent">
              <td colspan="3">Gulf of Mexico Offshore Production <sup><a href="#1ftnotet1"></a></sup></td>
              <td>2.6 </td>
              <td>11%</td>
            </tr>
            <tr>
              <td colspan="3">Supplemental Gaseous Fuels<sup><a href="#1ftnotet1"></a></sup></td>
              <td >0.1</td>
              <td >0%</td>
            </tr>
            <tr>
              <td colspan="3">Net Imports </td>
              <td >2.6</td>
              <td >11%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3">LNG Imports into Gulf Coast </td>
              <td >0.1</td>
              <td >0%</td>
            </tr>
            <tr>
              <td colspan="3">Net Storage Withdrawals <sup><a href="#2ftnotet1"></a></sup></td>
              <td >0</td>
              <td >0%</td>
            </tr>
            <tr>
              <td colspan="3">Balancing Item</td>
              <td >-0.1</td>
              <td >0% </td>
            </tr>
            <tr class="total">
              <td colspan="3">Total U.S. Natural Gas Consumed</td>
              <td >24.1</td>
              <td >100%</td>
            </tr>
            <tr>
              <td colspan="3">Gross Imports into Gulf Coast </td>
              <td >6.2</td>
              <td >33%</td>
            </tr>
            <tr>
              <td colspan="4">Offshore Share of U.S. Natural Gas Production <sup><a href="#3ftnotet1"></a></sup></td>
              <td >13%</td>
            </tr>
            <tr>
              <td colspan="4">Gulf of Mexico Offshore Share of U.S. Natural Gas Production </td>
              <td >12%</td>
            </tr>
            <tr>
              <td colspan="5">Sources: U.S. Energy Information Administration, Natural Gas Monthly (July 2011), DOE Office of Fossil Energy Import/Export Data, and EIA estimates.</td>
            </tr>
            <?php /* END Natural Gas Facts Content ////////////////*/ ?>
            
            <?php /* BEGIN Year-End 2010 U.S. Natural Gas Proved Reserves Content ////////////////*/ ?>
            <thead id="year_end_nat_gas_reserves">
              <tr>
                <th colspan="5"><a name="year_end_nat_gas_reserves" id="year_end_nat_gas_reserves"></a><strong>Year-End 2009 U.S. Natural Gas Proved Reserves</strong></th>
              </tr>
            </thead>
            
            <tr>
              <td>&nbsp;</td>
              <td colspan="5"><strong>Dry Natural Gas <br />
              Trillion Cubic Feet</strong></td>
            </tr>
            <tr>
              <td>U.S Total Offshore</td>
                <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>13.5</td>
            </tr>
            <tr class="level2_indent">
              <td class="level2_indent">U.S. Federal Offshore<sup></sup></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>12.6</td>
            </tr>
            <tr class="level2_indent">
              <td class="level2_indent">U.S. State Offshore</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>0.9</td>
            </tr>
            <tr>
              <td>U.S. Onshore</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>259.0</td>
            </tr>
            <tr>
              <td>U.S. Total Reserves</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td> 272.5</td>
            </tr>
            <tr>
              <td>Total Gulf Offshore</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>12.7</td>
            </tr>
            <tr class="level2_indent">
              <td class="level2_indent">Federal Gulf of Mexico</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>11.8</td>
            </tr>
            <tr class="level2_indent">
              <td class="level2_indent"> Gulf States Offshore</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>0.9</td>
            </tr>
            <tr>
              <td >Total Offshore Percent of Total Reserves</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Total Gulf Offshore Percent of Total Reserves</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>5%</td>
            </tr>
            <tr>
              <td colspan="4">Source: U.S. Energy Information Administration, <a href="/oil_gas/natural_gas/data_publications/crude_oil_natural_gas_reserves/cr.html">U.S. Crude Oil, Natural Gas, and Natural Gas Liquids Reserves</a>, 2009</td>
              <td>&nbsp;</td>
            </tr>
           
		   <?php /* ENDYear-End 2010 U.S. Natural Gas Proved Reserves Content ////////////////*/ ?>
            
            <?php /* BEGIN Gulf Coast Refinery Content ////////////////*/ ?>
            
            <thead id="gulf_coast_refinery">
              <tr>
                <th colspan="5"><a name="gulf_coast_refinery" id="gulf_coast_refinery"></a><strong>U.S. Gulf Coast Operable Refinery Capacity As Of January 2011</strong></th>
              </tr>
            </thead>
            <tr>
              <td>&nbsp;</td>
              <td colspan="3"><strong>(Barrels Per Calendar Day)</strong></td>
            </tr>
            <tr>
              <td><strong>Refiner</strong></td>
              <td><strong>Refinery</strong></td>
              <td><strong>State</strong></td>
              <td><strong>Capacity</strong></td>
            </tr>
            <tr>
              <td colspan="4"><strong>Louisiana Gulf Coast Refining District</strong></td>
            </tr>
            <tr class="level2_indent">
              <td>Alon Refining Krotz Springs Inc</td>
              <td>Krotz Springs</td>
              <td>LA</td>
              <td>80,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Calcasieu Refining Co</td>
              <td>Lake Charles</td>
              <td>LA</td>
              <td>78,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Chalmette Refining LLC</td>
              <td>Chalmette</td>
              <td>LA</td>
              <td>192,500</td>
            </tr>
            <tr class="level2_indent">
              <td>Chevron USA Inc</td>
              <td>Pascagoula</td>
              <td>MS</td>
              <td>330,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Citgo Petroleum Corp</td>
              <td>Lake Charles</td>
              <td>LA</td>
              <td>427,800</td>
            </tr>
            <tr class="level2_indent">
              <td>ConocoPhillips Company</td>
              <td>Belle Chasse</td>
              <td>LA</td>
              <td>247,000</td>
            </tr>
            <tr class="level2_indent">
              <td>ConocoPhillips Company</td>
              <td>Westlake</td>
              <td>LA</td>
              <td>239,400</td>
            </tr>
            <tr class="level2_indent">
              <td>ExxonMobil Refining &amp; Supply Co</td>
              <td>Baton Rouge</td>
              <td>LA</td>
              <td>502,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Marathon Petroleum Company LLC</td>
              <td>Garyville</td>
              <td>LA</td>
              <td>464,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Motiva Enterprises LLC</td>
              <td>Convent</td>
              <td>LA</td>
              <td>235,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Motiva Enterprises LLC</td>
              <td>Norco</td>
              <td>LA</td>
              <td>233,500</td>
            </tr>
            <tr class="level2_indent">
              <td>Murphy Oil USA Inc</td>
              <td>Meraux</td>
              <td>LA</td>
              <td>125,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Placid Refining Co</td>
              <td>Port Allen</td>
              <td>LA</td>
              <td>57,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Shell Chemical LP</td>
              <td>Saraland</td>
              <td>AL</td>
              <td>80,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Shell Chemical LP</td>
              <td>St. Rose</td>
              <td>LA</td>
              <td>55,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Valero Refining New Orleans LLC</td>
              <td>Norco</td>
              <td>LA</td>
              <td>205,000</td>
            </tr>
            <tr class="level3_indent">
              <td colspan="3">Subtotal</td>
              <td>3,551,200</td>
            </tr>
            <tr>
              <td colspan="4"><strong>Texas Gulf Coast Refining District</strong></td>
            </tr>
            <tr class="level2_indent">
              <td>BP Products North America Inc</td>
              <td>Texas City</td>
              <td>TX</td>
              <td>406,570</td>
            </tr>
            <tr class="level2_indent">
              <td>Citgo Refining &amp; Chemical Inc</td>
              <td>Corpus Christi</td>
              <td>TX</td>
              <td>163,000</td>
            </tr>
            <tr class="level2_indent">
              <td>ConocoPhillips Company</td>
              <td>Sweeny</td>
              <td>TX</td>
              <td>247,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Deer Park Refining LTD Partnership</td>
              <td>Deer Park</td>
              <td>TX</td>
              <td>327,000</td>
            </tr>
            <tr class="level2_indent">
              <td>ExxonMobil Refining &amp; Supply Co</td>
              <td>Baytown</td>
              <td>TX</td>
              <td>560,640</td>
            </tr>
            <tr class="level2_indent">
              <td>ExxonMobil Refining &amp; Supply Co</td>
              <td>Beaumont</td>
              <td>TX</td>
              <td>344,500</td>
            </tr>
            <tr class="level2_indent">
              <td>Flint Hills Resources LP</td>
              <td>Corpus Christi</td>
              <td>TX</td>
              <td>290,078</td>
            </tr>
            <tr class="level2_indent">
              <td>Houston Refining LP</td>
              <td>Houston</td>
              <td>TX</td>
              <td>280,390</td>
            </tr>
            <tr class="level2_indent">
              <td>Marathon Petroleum Company LLC</td>
              <td>Texas City</td>
              <td>TX</td>
              <td>76,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Motiva Enterprises LLC</td>
              <td>Port Arthur</td>
              <td>TX</td>
              <td>285,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Pasadena Refining Systems Inc</td>
              <td>Pasadena</td>
              <td>TX</td>
              <td>100,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Premcor Refining Group Inc</td>
              <td>Port Arthur</td>
              <td>TX</td>
              <td>292,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Total Petrochemicals Inc</td>
              <td>Port Arthur</td>
              <td>TX</td>
              <td>232,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Valero Refining Co Texas LP</td>
              <td>Corpus Christi</td>
              <td>TX</td>
              <td>142,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Valero Refining Co Texas LP</td>
              <td>Houston</td>
              <td>TX</td>
              <td>88,000</td>
            </tr>
            <tr class="level2_indent">
              <td>Valero Refining Co Texas LP</td>
              <td>Texas City</td>
              <td>TX</td>
              <td>225,000</td>
            </tr>
            <tr class="level3_indent">
              <td colspan="3">Subtotal</td>
              <td>4,059,178 </td>
            </tr>
            <tr class="total">
              <td colspan="3">Total U.S. Gulf Coast Capacity</td>
              <td>7,610,378</td>
            </tr>
            <tr class="total">
              <td colspan="3">Total U.S. Capacity</td>
              <td>17,736,370 </td>
            </tr>
            <tr>
              <td colspan="3">U.S. Gulf Coast Share of  U.S. Refinery Capacity</td>
              <td>43%</td>
            </tr>
            <tr>
              <td colspan="4" style="padding-top:6px;">Source:  U.S. Energy Information Administration, <a href="http://www.eia.gov/pub/oil_gas/petroleum/data_publications/refinery_capacity_data/current/table3.pdf">Annual Refinery Report, Table 3</a></td>
            </tr>
          
            <!--<tr>
         <td><strong><a href="/cneaf/coal/page/acr/table6.html">Average Sales Price by State, County, and Number of Mines</a></strong><br />
            <em class="hideme">Release Date: September 18, 2009</em></td>
          <td><span class="right"><a href="/cneaf/coal/page/acr/table6.pdf" class="ico_pdf">PDF</a> <a href="/cneaf/coal/page/acr/table6.xls" class="ico_xls">XLS</a></span></td>
        </tr>-->            <?php /* END Gulf Coast Refinery  Content ////////////////*/ ?>
            
            <?php /* BEGIN Gulf Coast Processing Content ////////////////*/ ?>
            <thead id="gulf_coast_processing">
              <tr>
                <th colspan="5"><a name="gulf_coast_processing" id="gulf_coast_processing"></a><strong>U.S. Gulf Coast Natural Gas Processing Plants by Geographic Location</strong></th>
              </tr>
            </thead>
            <tr>
              <td colspan="5"><strong>U.S. Gulf Coast Natural Gas Processing Plants by Geographic Location</strong></td>
            </tr>
            <tr>
              <td colspan="2"><strong>Geographic Location</strong></td>
              <td><strong>Number of Plants</strong></td>
              <td><strong>Total Capacity (Bcf per day)<br />
              </strong></td>
            </tr>
            <tr class="level2_indent">
              <td colspan="2">Cluster 1</td>
              <td>14</td>
              <td>2.5</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="2">Cluster 2</td>
              <td>18</td>
              <td>3.3</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="2">Cluster 3</td>
              <td>25</td>
              <td>6.2</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="2">Cluster 4</td>
              <td>17</td>
              <td>9.9</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="2">Cluster 5</td>
              <td>17</td>
              <td>2.9</td>
            </tr>
            <tr class="total">
              <td colspan="2">Total U.S. Gulf Coast</td>
              <td>91</td>
              <td>24.8</td>
            </tr>
            <tr class="total">
              <td colspan="2">Total U.S.</td>
              <td>496</td>
              <td>90.8</td>
            </tr>
            <tr>
              <td colspan="2">U.S. Gulf  Coast Share</td>
              <td>18%</td>
              <td>27%</td>
            </tr>
            <tr>
              <td colspan="4">Note: Clusters refer to the geographic area  depicted on <a href="gom_cluster.php">Map</a>.<br/>
              	<?php /*Units: Billion cubic feet (Bcf) and million cubic feet (MMcf).<br/> */ ?>
              	Dates: Reflects updates through July 2011 to 757 Schedule A Baseline Data Collection.<br/>
              	Source: Form EIA-757 Natural Gas Processing Plant Survey, Schedule A.<br/></td>
            </tr>

            <?php /* END Gulf Coast Processing  Content ////////////////*/ ?>
            <?php /* BEGIN Imports & Exports Content ////////////////*/ ?>
            
            <?php /* END Imports & Exports Content ////////////////*/ ?>
            <?php /* BEGIN Coal Transportation Rates Content ////////////////*/ ?>            <?php /* END Coal Transportation Rates Content ////////////////*/ ?>
            <?php /* BEGIN International Content ////////////////*/ ?>            <?php /* END International Content ////////////////*/ ?>
            <?php /* BEGIN Data Files Content ////////////////*/ ?>            <?php /* END Data Files Content ////////////////*/ ?>
          </table>
          <?php /* End of Main Column */ ?>
          <div class="clear">&nbsp;</div>
          <?php /* Feature Example */ ?><?php /* Feature Example */ ?>
        </div>
        <div class="side_col right">
          <?php /* Start of Side Column */ ?>
          <?php include ('special/disruptions/includes/side_hurricane.inc') ; ?>
          <?php /* End of Side Column */ ?>
        </div>
      </div>

<script>
$(document).ready(function () {
	$("#production").next("tbody").children("tr").children("td:first-child + td").css("text-align", "left");
	$("#production").next("tbody").children("tr").children("td:first-child + td + td").css("text-align", "center");
	$("#production").next("tbody").children("tr").children("td:last-child").css("text-align", "right");
	$("#production").next("tbody").children("tr").children("td:first-child").css("text-align", "left");
});
</script>

<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>