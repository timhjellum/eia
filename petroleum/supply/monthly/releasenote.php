<?php $locale = 'overview'; ?><?php include_once('../../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include(ROOT.'petroleum/includes/sub-navigation.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h3>Release notes for Petroleum Supply Monthly (PSM) and Petroleum Supply Annual (PSA)</h3>
<p style="font-size:11px;margin:0px;padding:4px 0px;color:#7d7d7d;">
<strong>Originally Released: August 31, 2017</strong></br>
<strong>Updated: September 13, 2017</strong></p>
<dl class="survey">
<p>
Petroleum Supply Monthly (PSM) and Petroleum Supply Annual (PSA) interactive (petroleum navigator) data for the period from January 2007-June 2017 are being re-released today (September 13, 2017) in order to correct errors that were accidentally introduced when we released the data on August 31, 2017.  Errors included missing data, incorrect values, and duplicated data series affecting some or all months of data from January 2007-June 2017.  We apologize for the inconvenience and recommend that users of petroleum supply data re-run queries and otherwise refresh data files that were downloaded from the U.S. Energy Information Administration web site on or after August 31, 2017.
</p>
<p>
<strong>PSM tables for June 2017 and PSA tables for 2016 in portable document format (PDF) and comma-separated-value (CSV) files are currently unavailable.</strong>  Tables in PDF and CSV formats currently posted on the EIA website contain PSM data for May 2017 and PSA data for 2015.  Updated tables in PDF and CVS formats will be released at a later date.
</p>
<p>
The following notes relate to new data, revised data, and updated hydrocarbon gas liquids (HGL) product categories that were originally released on August 31, 2017.
</p>
<p>
New PSM data for June 2017</br>
<a href="/petroleum/supply/monthly/">Petroleum Supply Monthly</a></br>
<a href="/petroleum/data.php">Petroleum Data Tab</a></br>
</p>
<p>
Revised monthly and annual data for 2016 (PSA)</br>
<a href="/petroleum/supply/annual/volume1/">Petroleum Supply Annual, Volume 1</a></br>
<a href="/petroleum/supply/annual/volume2/">Petroleum Supply Annual, Volume 2</a></br>
<a href="/petroleum/data.php">Petroleum Data Tab</a></br>
</p>
<p>
Revised storage capacities for March and September 2016</br>
<a href="/petroleum/storagecapacity/archive/2016/2016_03_31/final/storcap_03_31_2016.php">Working and Net Available Shell Storage Capacity March 2016</a></br>
<a href="/petroleum/storagecapacity/archive/2016/2016_09_30/final/storcap_09_30_2016.php">Working and Net Available Shell Storage Capacity September 2016</a></br>
</p>
<p>
Revised crude oil storage capacity of the Strategic Petroleum Reserve for March 2017</br>
<a href="/petroleum/storagecapacity/">Working and Net Available Shell Storage Capacity March 2017</a>
</p>
<p>
Revised crude oil production from January 2007-May 2017</br>
<a href="/dnav/pet/pet_crd_crpdn_adc_mbbl_m.htm">Crude Oil Production</a>
</p>
<p>
Revised rail movements and addition of petroleum coke and asphalt to products moved by rail from January 2010-June 2017</br>
<a href="/dnav/pet/PET_MOVE_RAIL_A_EPC0_RAIL_MBBL_M.htm">Movements of Crude Oil and Selected Products by Rail between PAD Districts</a></br>
<a href="/dnav/pet/PET_MOVE_RAILNA_A_EPC0_RAIL_MBBL_M.htm">Movements of Crude Oil and Selected Products by Rail</a></br>
<a href="/dnav/pet/pet_move_ptb_dc_R20-R10_mbbl_m.htm">Movements by Pipeline, Tanker, Barge and Rail between PAD Districts</a></br>
</p>
<p>
Revised tanker and barge movements of motor gasoline, fuel ethanol, and distillate fuel oil from the Gulf Coast (PADD 3) to the East Coast (PADD 1) for January and February 2017</br>
<a href="/dnav/pet/pet_move_ptb_a_EP00_TNR_mbbl_m.htm">Movements by Pipeline, Tanker, Barge and Rail between PAD Districts</a></br>
<a href="/dnav/pet/pet_move_tb_a_EP00_BMV_mbbl_m.htm">Movements by Tanker and Barge between PAD Districts</a></br>
<a href="/dnav/pet/pet_move_netr_d_r10-z0p_VNR_mbbl_m.htm">Net Receipts by Pipeline, Tanker, Barge and Rail between PAD Districts</a></br>
<a href="/dnav/pet/pet_sum_snd_d_r10_mbbl_m_cur.htm">Supply and Disposition</a></br>
</p>
<p>
Revised net production and imports of fuel ethanol in the Gulf Coast (PADD 3) region for January and February 2017</br>
<a href="/dnav/pet/pet_sum_snd_a_EPOOXE_mbbl_m_cur.htm">Supply and Disposition</a></br>
</p>
<p>Revised net production of normal butane and isobutane in the Texas Gulf Coast refining district for January-March 2017</br>
<a href="/dnav/pet/pet_pnp_gp_dc_r3b_mbbl_m.htm">Natural Gas Plant Field Production</a></br>
</p>
<p>
Updated product categories for hydrocarbon gas liquids (formerly natural gas plant liquids and liquefied refinery gases) as shown below in table 1.
<table width="75%" class="data">
<tr>
<th colspan="3">Table 1.  Hydrocarbon gas liquids products before and after August 31, 2017</th>
</tr>
<tr>
<th class="align-center">product groups before August 31, 2017</th>
<th>&nbsp;</th>
<th class="align-center">product groups on and after August 31, 2017</th>
</tr>
</thead>
<tbody>
<tr>
<td>natural gas plant liquids and liquefied refinery gases</td>
<td class="no-border">&nbsp;</td>
<td>hydrocarbon gas liquids (HGL)</td>
</tr>
<tr>
<td class="indented">pentanes plus</td>
<td class="no-border">&nbsp;</td>
<td class="indented">natural gas liquids (NGL)</td>
</tr>
<tr>
<td class="indented">liquefied petroleum gases</td>
<td class="no-border">&nbsp;</td>
<td class="indented">ethane</td>
</tr>
<tr>
<td class="indented">ethane and ethylene</td>
<td class="no-border">&nbsp;</td>
<td class="indented">propane</td>
</tr>
<tr>
<td class="indented">propane and propylene</td>
<td class="no-border">&nbsp;</td>
<td class="indented">normal butane</td>
</tr>
<tr>
<td class="indented">normal butane and butylene</td>
<td class="no-border">&nbsp;</td>
<td class="indented">isobutane</td>
</tr>
<tr>
<td class="indented">isobutane and isobutylene</td>
<td class="no-border">&nbsp;</td>
<td class="indented">natural gasoline</td>
</tr>
<tr>
<td rowspan="5">&nbsp;</td>
<td class="no-border">&nbsp;</td>
<td class="indented">refinery olefins</td>
</tr>
<tr>
<td class="no-border">&nbsp;</td>
<td class="indented">ethylene</td>
</tr>
<tr>
<td class="no-border">&nbsp;</td>
<td class="indented">propylene</td>
</tr>
<tr>
<td class="no-border">&nbsp;</td>
<td class="indented">butylene</td>
</tr>
<tr>
<td class="no-border">&nbsp;</td>
<td class="indented">isobutylene</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="99"></td>
</tr>
</tfoot>
</table>
</p>
<p>
Changes to HGL product groups affect most tables of the Petroleum Supply Monthly and Petroleum Supply Annual beginning with data for January 2010.
</p>
<p>
Data for pentanes plus and total liquefied petroleum gases continue to be available in the current release of data.  Quantities of pentanes plus and total liquefied petroleum gases for 2016 remain as they were in the PSM and have not yet been revised to include PSA revisions.  The 2016 data will be updated to include PSA revisions at a later date.
</p>
<p>
Beginning with data released on August 31, 2017, stocks of ethylene held at bulk terminals were excluded from bulk terminal stocks.  Bulk terminal stocks continue to include barrels of ethane.  This change affected bulk terminal stock quantities from January 2010-May 2017.  Bulk terminal stock quantities prior to January 2010 continue to include barrels of ethylene.  Bulk terminal stocks before January 2010 may be revised to exclude barrels of ethylene at a later date.
</p>
</dl>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
