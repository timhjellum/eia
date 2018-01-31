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
      <?php include ('includes/subnav_hurricane.inc') ; ?>
      <?php /* Page/Body Content */ ?>
      <div class="pagecontent mr_temp2">
        <?php /* Start of Main Column */ ?>
        <div class="main_col">
          <p><strong>Release Date:</strong> August 7, 2012</p>
          <h1>Energy Data <span class="right"> <a href="gulf_of_mexico_tables.xls" class="ico_xls">all tables</a></h1>
          
          <?php /*p>The Gulf of Mexico area, both   onshore and offshore, is one of the most important regions for energy resources   and infrastructure. Gulf of Mexico offshore oil production accounts for 29   percent of total U.S. crude oil production and offshore natural gas production   in the Gulf accounts for 12 percent of total U.S. production. Over 40 percent of   total U.S. petroleum refining capacity is located along the Gulf coast, as well   as almost 30 percent of total U.S. natural gas processing plant capacity.</p*/ ?>
          <span class="condaterange"><a class="no-border expandall">+ EXPAND ALL</a></span>
          <table class="contable numeric">
            <?php /* BEGIN Petroleum Facts Content ////////////////*/ ?>
            <thead id="petroleum_fuel_facts">
              <tr>
                <th colspan="7"><a name="petroleum_fuel_facts" id="petroleum_fuel_facts"></a>U.S. Petroleum and Other Liquid Fuels Facts for 2011</th>
              </tr>
            </thead>
            <tr>
              <td colspan="5"><p>&nbsp;</p></td>
              <td style="vertical-align:bottom"><strong>million barrels<br/> per day</strong></td>
              <td><strong>Share of Total U.S.<br/> Liquid Fuels Consumed</strong></td>
            </tr>
            <tr>
              <td colspan="5">Liquid Fuels Production </td>
              <td>10.3</td>
              <td width="131">55%</td>
            </tr>
            <tr class="level2_indent">
              <td class="level2_indent" colspan="5" >U.S. Crude Oil Production </td>
              <td>5.7</td>
              <td>30%</td>
            </tr>
            <tr class="level3_indent">
              <td class="level3_indent" colspan="5"> Total U.S. Federal Offshore<sup><a href="#1ftnotet1"></a></sup></td>
              <td>1.4</td>
              <td>7%</td>
            </tr>
            <tr class="level4_indent">
              <td colspan="5"> Gulf of Mexico Federal Offshore<sup><a href="#1ftnotet1"></a></sup></td>
              <td>1.3</td>
              <td>7%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="5">Natural Gas Plant Liquids </td>
              <td>2.2</td>
              <td>12%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="5">Refinery Processing Gain </td>
              <td>1.1</td>
              <td>6%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="5">Biofuels</td>
              <td>0.9</td>
              <td>5%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="5">Other<sup><a href="#ftnotet1_1">1</a></sup></td>
              <td>0.4</td>
              <td>2%</td>
            </tr>
            <tr>
              <td colspan="5">Stocks Withdrawn </td>
              <td>0.1</td>
              <td>1%</td>
            </tr>
            <tr>
              <td colspan="5">Net Imports </td>
              <td>8.4</td>
              <td>45%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="5">Gross Imports into Gulf Coast </td>
              <td>5.8</td>
              <td>31%</td>
            </tr>
            <tr>
              <td colspan="5">Total U.S. Liquid Fuels Supplied<sup><a href="#ftnotet1_2">2</a></sup>
              <td>18.8</td>
              <td>100%</td>
            </tr>
            <tr>
              <td colspan="6">Federal Offshore share of U.S. crude oil production</td>
              <td>24% </td>
            </tr>
            <tr>
              <td colspan="6">Gulf of Mexico Federal Offshore share of U.S. crude oil production</td>
              <td>23% </td>
            </tr>
            <tr>
              <td colspan="7"><a name="ftnotet1_1" id="ftnotet1_1" style="margin-left:-1.5px;"></a>1.  Accounts for non-biofuel oxygenates, denaturants, other hydrocarbons, hydrogen, and crude oil adjustment.<br />
                <a name="ftnotet1_2" id="1ftnotet2"></a>2.  Liquid fuels consumption equals product supplied reported in the Petroleum Supply Monthly <br />
              <?php /*<a name="3ftnotet1" id="3ftnotet1"></a>3. Liquid fuels consumed equals product supplied reported in the Petroleum Supply Annual.<br/>*/ ?>
              Source: U.S. Energy Information Administration</td>
            </tr>
             <?php /* END Petroleum Facts Content ////////////////*/ ?>
            
            <?php /* BEGIN Year-End 2010 U.S. Proved Crude Oil, Condensate and Natural Gas Liquid Reserves Content ////////////////*/ ?>
            <thead id="year_end_crude_ngl_reserves">
              <tr>
                <th colspan="7"><a name="year_end_crude_ngl_reserves" id="year_end_crude_ngl_reserves"></a><strong>Year-End 2010 U.S. Proved Crude Oil, Condensate and Natural Gas Liquid Reserves</strong></th>
              </tr>
            </thead>
            <tr>
              <td>              
            <td colspan="5"><strong>million barrels</strong>            
            <td>                        </tr>
            <tr>
              <td colspan="3">              
              <td><strong>Crude Oil </strong></td>
              <td><strong>Condensate<br />
              </strong></td>
              <td><strong>Natural Gas
                Plant Liquids <br />
              </strong></td>
              <td><strong>Total</strong></td>
            </tr>
            <tr>
              <td colspan="3">U.S. Total Offshore</td>
              <td  width="86">4,711</td>
              <td  width="100">227</td>
              <td  width="113">365</td>
              <td  width="90">5,303</td>                                        
              </tr>
            <tr class="level2_indent">
              <td colspan="3" class="level2_indent">U.S. Federal Offshore</td>
              <td >4,496</td>
              <td  width="100">214</td>
              <td  width="113">341</td>
              <td  width="90">5,051</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3" class="level2_indent">U.S. State Offshore</td>
              <td  width="86">215</td>
              <td  width="100">13</td>
              <td  width="113">24</td>
              <td  width="90">252</td>
            </tr>
            <tr>
              <td colspan="3">U.S. Onshore</td>
              <td  width="86">18,556</td>
              <td >1,687</td>
              <td  width="113">9,444</td>
              <td  width="90">29,687</td>
            </tr>
            <tr>
              <td colspan="3">U.S. Total Reserves</td>
              <td >23,267</td>
              <td >1,914</td>
              <td >9,809</td>
              <td  width="90">34,990</td>
            </tr>
            <tr>
              <td colspan="3">Total Gulf Offshore</td>
              <td >4,183</td>
              <td  width="100">225</td>
              <td >364</td>
              <td  width="90">4,772</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3" class="level2_indent">Federal Gulf of Mexico</td>
              <td  width="86">4,135</td>
              <td  width="100">212</td>
              <td  width="113">340</td>
              <td  width="90">4,687</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3" class="level2_indent">Gulf States Offshore</td>
              <td  width="86">48</td>
              <td  width="100">13</td>
              <td  width="113">24</td>
              <td  width="90">85</td>
            </tr>
            <tr>
              <td colspan="3">Total Offshore Percent of Total Reserves</td>
              <td  width="86">20%</td>
              <td  width="100">12%</td>
              <td  width="113">4%</td>
              <td  width="90">15%</td>
            </tr>
            <tr>
              <td colspan="3">Total Gulf Offshore Percent of Total Reserves</td>
              <td  width="86">18%</td>
              <td  width="100">12%</td>
              <td  width="113">4%</td>
              <td  width="90">14%</td>
            </tr>
            <tr>
              <td colspan="7">Note: Alaskan reserves are all shown as onshore.</td>
            </tr>
            <tr>
              <td colspan="7">Source: U.S. Energy Information Administration, <a href="/naturalgas/crudeoilreserves/">U.S. Crude Oil, Natural Gas, and Natural Gas Liquids Proved Reserves, 2010</a></td>
            </tr>
             <?php /* END Year-End 2010 U.S. Proved Crude Oil, Condensate and Natural Gas Liquid Reserves Content ////////////////*/ ?>
            
			<?php /* BEGIN Natural Gas Facts Content ////////////////*/ ?>
            <thead id="nat_gas_facts">
              <tr>
                <th colspan="7"><a name="nat_gas_facts" id="nat_gas_facts"></a><strong>Natural Gas Facts for 2011</strong></th>
              </tr>
            </thead>
             <tr>
              <td colspan="5"><p>&nbsp;</p></td>
              <td style="vertical-align:bottom"><strong>trillion cubic feet</strong></td>
              <td><strong>Share of Total U.S. <br/>Natural Gas Consumed</strong></td>
            </tr>
            <tr>
              <td colspan="5">U.S. Dry Gas Production</td>
              <td>23.0</td>
              <td>94%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="5">Total Federal Offshore Dry Production<sup><a href="#ftnotet3_1">1</a></sup></td>
              <td>1.8</td>
              <td>7%</td>
            </tr>
            <tr class="level3_indent">
              <td colspan="5">Federal Gulf of Mexico Offshore Dry Production<sup><a href="#ftnotet3_1"></a></sup></td>
              <td>1.7</td>
              <td>7%</td>
            </tr>
            <tr>
              <td colspan="5">Supplemental Gaseous Fuels<sup><a href="#1ftnotet1"></a></sup></td>
              <td>0.1</td>
              <td>0%</td>
            </tr>
            <tr>
              <td colspan="5">Net Imports </td>
              <td>1.9</td>
              <td>8%</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="5">LNG Imports into Gulf Coast </td>
              <td>0.1</td>
              <td>0%</td>
            </tr>
            <tr>
              <td colspan="5">Net Storage Withdrawals <sup><a href="#2ftnotet1"></a></sup></td>
              <td>-0.3</td>
              <td>-1%</td>
            </tr>
            <tr>
              <td colspan="5">Balancing Item</td>
              <td>-0.3</td>
              <td>-1%</td>
            </tr>
            <tr class="total">
              <td colspan="5">Total U.S. Natural Gas Consumed</td>
              <td>24.4</td>
              <td>100%</td>
            </tr>
            <!--<tr>
              <td colspan="5">Gross Imports into Gulf Coast</td>
              <td >6.2</td>
              <td >33%</td>
            </tr>--->
            <tr>
              <td colspan="6">Federal Offshore Share of U.S. Dry Natural Gas Production<sup><a href="#3ftnotet1"></a></sup></td>
              <td >8%</td>
            </tr>
            <tr>
              <td colspan="6">Federal Gulf of Mexico Offshore Share of U.S. Dry Natural Gas</td>
              <td >7%</td>
            </tr>
            <tr>
              <td colspan="7"><a name="ftnotet3_1" id="ftnotet3_1"></a><sup>1</sup>Unlike prior years data, extraction loss volumes of 0.08 Tcf are excluded from Federal Offshore dry production.<br />
              Sources: U.S. Energy Information Administration, Natural Gas Monthly (March 2012), DOE Office of Fossil Energy Import/Export Data, and EIA estimates.</td>
            </tr>
            <?php /* END Natural Gas Facts Content ////////////////*/ ?>
            
            <?php /* BEGIN Year-End 2010 U.S. Natural Gas Proved Reserves Content ////////////////*/ ?>
            <thead id="year_end_nat_gas_reserves">
              <tr>
                <th colspan="7"><a name="year_end_nat_gas_reserves" id="year_end_nat_gas_reserves"></a><strong>Year-End 2010 U.S. Natural Gas Proved Reserves</strong></th>
              </tr>
            </thead>
            
            <tr>
              <td>&nbsp;</td>
              <td colspan="6"><strong>Dry Natural Gas <br />
              trillion cubic feet</strong></td>
            </tr>
            <tr>
              <td colspan="3">U.S Total Offshore</td>
                <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td  width="64">12.3</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3" class="level2_indent">U.S. Federal Offshore<sup></sup></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td >11.8</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3" class="level2_indent">U.S. State Offshore</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td >0.6</td>
            </tr>
            <tr>
              <td colspan="3">U.S. Onshore</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td >292.3</td>
            </tr>
            <tr>
              <td colspan="3">U.S. Total Reserves</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td >304.6</td>
            </tr>
            <tr>
              <td colspan="3">Total Gulf Offshore</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td >11.5</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3" class="level2_indent">Federal Gulf of Mexico</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td >11.0</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="3" class="level2_indent"> Gulf States Offshore</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td >0.5</td>
            </tr>
            <tr>
              <td colspan="3">Total Offshore Percent of Total Reserves</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>4%</td>
            </tr>
            <tr>
              <td colspan="3">Total Gulf Offshore Percent of Total Reserves</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>4%</td>
            </tr>
            <tr>
              <td colspan="7">Source: U.S. Energy Information Administration, <a href="/naturalgas/crudeoilreserves/">U.S. Crude Oil, Natural Gas, and Natural Gas Liquids Proved Reserves, 2010</a></td>
              <td>&nbsp;</td>
            </tr>
           
		   <?php /* ENDYear-End 2010 U.S. Natural Gas Proved Reserves Content ////////////////*/ ?>
            
            <?php /* BEGIN Gulf Coast Refinery Content ////////////////*/ ?>
            
            <thead id="gulf_coast_refinery">
              <tr>
                <th colspan="7"><a name="gulf_coast_refinery" id="gulf_coast_refinery"></a><strong>U.S. Gulf Coast Operable Refinery Capacity As Of January 2012</strong></th>
              </tr>
            </thead>
            <tr>
              <td>&nbsp;</td>
              <td colspan="6"><strong>barrels per calendar day</strong></td>
            </tr>
            <tr>
              <td colspan="4"><strong>Refiner</strong></td>
              <td><strong>Refinery</strong></td>
              <td><strong>State</strong></td>
              <td><strong>Capacity</strong></td>
            </tr>
            <tr>
              <td colspan="7"><strong>Louisiana Gulf Coast Refining District</strong></td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Alon Refining Krotz Springs Inc</td>
              <td>Krotz Springs</td>
              <td>LA</td>
              <td width="107">80,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Calcasieu Refining Co</td>
              <td>Lake Charles</td>
              <td>LA</td>
              <td>78,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Chalmette Refining LLC</td>
              <td>Chalmette</td>
              <td>LA</td>
              <td>192,500</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Chevron USA Inc</td>
              <td>Pascagoula</td>
              <td>MS</td>
              <td>330,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Citgo Petroleum Corp</td>
              <td>Lake Charles</td>
              <td>LA</td>
              <td>427,800</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">ConocoPhillips Company</td>
              <td>Belle Chasse</td>
              <td>LA</td>
              <td>247,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">ConocoPhillips Company</td>
              <td>Westlake</td>
              <td>LA</td>
              <td>239,400</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">ExxonMobil Refining &amp; Supply Co</td>
              <td>Baton Rouge</td>
              <td>LA</td>
              <td>502,500</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Marathon Petroleum Company LLC</td>
              <td>Garyville</td>
              <td>LA</td>
              <td>490,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Motiva Enterprises LLC</td>
              <td>Convent</td>
              <td>LA</td>
              <td>235,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Motiva Enterprises LLC</td>
              <td>Norco</td>
              <td>LA</td>
              <td>233,500</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Murphy Oil USA Inc</td>
              <td>Meraux</td>
              <td>LA</td>
              <td>125,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Placid Refining Co</td>
              <td>Port Allen</td>
              <td>LA</td>
              <td>57,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Shell Chemical LP</td>
              <td>Saraland</td>
              <td>AL</td>
              <td>80,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Shell Chemical LP</td>
              <td>St. Rose</td>
              <td>LA</td>
              <td>55,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Valero Refining New Orleans LLC</td>
              <td>Norco</td>
              <td>LA</td>
              <td>205,000</td>
            </tr>
            <tr class="level3_indent">
              <td colspan="6">Subtotal</td>
              <td>3,577,700</td>
            </tr>
            <tr>
              <td colspan="7"><strong>Texas Gulf Coast Refining District</strong></td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">BP Products North America Inc</td>
              <td>Texas City</td>
              <td>TX</td>
              <td width="107">400,780</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Citgo Refining &amp; Chemical Inc</td>
              <td>Corpus Christi</td>
              <td>TX</td>
              <td>163,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">ConocoPhillips Company</td>
              <td>Sweeny</td>
              <td>TX</td>
              <td>247,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Deer Park Refining LTD Partnership</td>
              <td>Deer Park</td>
              <td>TX</td>
              <td>327,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">ExxonMobil Refining &amp; Supply Co</td>
              <td>Baytown</td>
              <td>TX</td>
              <td>560,500</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">ExxonMobil Refining &amp; Supply Co</td>
              <td>Beaumont</td>
              <td>TX</td>
              <td>344,500</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Flint Hills Resources LP</td>
              <td>Corpus Christi</td>
              <td>TX</td>
              <td>284,172</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Houston Refining LP</td>
              <td>Houston</td>
              <td>TX</td>
              <td>273,433</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Marathon Petroleum Company LLC</td>
              <td>Texas City</td>
              <td>TX</td>
              <td>80,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Motiva Enterprises LLC</td>
              <td>Port Arthur</td>
              <td>TX</td>
              <td>285,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Pasadena Refining Systems Inc</td>
              <td>Pasadena</td>
              <td>TX</td>
              <td>100,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Premcor Refining Group Inc</td>
              <td>Port Arthur</td>
              <td>TX</td>
              <td>290,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Total Petrochemicals Inc</td>
              <td>Port Arthur</td>
              <td>TX</td>
              <td>225,500</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Valero Refining Co Texas LP</td>
              <td>Corpus Christi</td>
              <td>TX</td>
              <td>200,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Valero Refining Co Texas LP</td>
              <td>Houston</td>
              <td>TX</td>
              <td>88,000</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="4">Valero Refining Co Texas LP</td>
              <td>Texas City</td>
              <td>TX</td>
              <td>225,000</td>
            </tr>
            <tr class="level3_indent">
              <td colspan="6">Subtotal</td>
              <td>4,093,885</td>
            </tr>
            <tr class="total">
              <td colspan="6">Total U.S. Gulf Coast Capacity</td>
              <td width="107">7,671,585</td>
            </tr>
            <tr class="total">
              <td colspan="6">Total U.S. Capacity</td>
              <td>17,322,178</td>
            </tr>
            <tr>
              <td colspan="6">U.S. Gulf Coast Share of  U.S. Refinery Capacity</td>
              <td>44%</td>
            </tr>
            <tr>
              <td colspan="7" style="padding-top:6px;">Source:  U.S. Energy Information Administration, <a href="/petroleum/refinerycapacity/table3.pdf">Refinery Capacity Report, Table 3</a></td>
            </tr>
          
            <!--<tr>
         <td><strong><a href="/cneaf/coal/page/acr/table6.html">Average Sales Price by State, County, and Number of Mines</a></strong><br />
            <em class="hideme">Release Date: September 18, 2009</em></td>
          <td><span class="right"><a href="/cneaf/coal/page/acr/table6.pdf" class="ico_pdf">PDF</a> <a href="/cneaf/coal/page/acr/table6.xls" class="ico_xls">XLS</a></span></td>
        </tr>-->            <?php /* END Gulf Coast Refinery  Content ////////////////*/ ?>
            
            <?php /* BEGIN Gulf Coast Processing Content ////////////////*/ ?>
            <thead id="gulf_coast_processing">
              <tr>
                <th colspan="7"><a name="gulf_coast_processing" id="gulf_coast_processing"></a><strong>U.S. Gulf Coast Natural Gas Processing Plants by Geographic Location updated  through June 2012</strong></th>
              </tr>
            </thead>
            <?php /*<tr>
              <td colspan="5"><strong>U.S. Gulf Coast Natural Gas Processing Plants by Geographic Location</strong></td>
            </tr> */ ?>
            <tr>
              <td colspan="2"><strong><a href="gom_cluster.php">Geographic Location</a></strong></td>
              <td><strong>Number of Plants</strong></td>
              <td><strong>Total Capacity (Bcf per day)</strong></td>
              <td><strong>Total Flow (Bcf/day)</strong></td>
              <td><strong>Percent Utilization</strong></td>
              <td><strong>Average 
              Capacity
(MMcf/day)</strong></td>
            </tr>
            <tr class="level2_indent">
              <td colspan="2"><a href="gom_cluster.php">Cluster 1</a></td>
              <td>10</td>
              <td>2</td>
              <td>1</td>
              <td>79%</td>
              <td>167</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="2"><a href="gom_cluster.php">Cluster 2</a></td>
              <td>18</td>
              <td>3</td>
              <td>2</td>
              <td>75%</td>
              <td>180</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="2"><a href="gom_cluster.php">Cluster 3</a></td>
              <td>22</td>
              <td>6</td>
              <td>3</td>
              <td>52%</td>
              <td>264</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="2"><a href="gom_cluster.php">Cluster 4</a></td>
              <td>17</td>
              <td>8</td>
              <td>5</td>
              <td>58%</td>
              <td>495</td>
            </tr>
            <tr class="level2_indent">
              <td colspan="2"><a href="gom_cluster.php">Cluster 5</a></td>
              <td>16</td>
              <td>3</td>
              <td>1</td>
              <td>43%</td>
              <td>168</td>
            </tr>
            <tr class="total">
              <td colspan="2">Total U.S. Gulf Coast</td>
              <td>83</td>
              <td>22</td>
              <td>13</td>
              <td>58%</td>
              <td>265</td>
            </tr>
            <tr class="total">
              <td colspan="2">Total U.S.</td>
              <td>490</td>
              <td>74</td>
              <td>52</td>
              <td>70%</td>
              <td>152</td>
            </tr>
            <tr>
              <td colspan="2">U.S. Gulf  Coast Share</td>
              <td>17%</td>
              <td>30%</td>
              <td>25%</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="7">Note: Clusters refer to the geographic area  depicted on <a href="gom_cluster.php">map</a>.<br/>
              	<?php /*Units: Billion cubic feet (Bcf) and million cubic feet (MMcf).<br/> */ ?>
              	Reflects selected updates to 757 Schedule A  Baseline Data Collection.<br/>
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
          <?php /*div class="clear">&nbsp;</div*/ ?>
          <?php /* Feature Example */ ?><?php /* Feature Example */ ?>
        </div>
        <div class="side_col right">
          <?php /* Start of Side Column */ ?>
          <?php include ('includes/side_hurricane.inc') ; ?>
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