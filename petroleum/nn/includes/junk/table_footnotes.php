<?php
function table_footnotes($table_number) {
switch ($table_number) {
case 1: // table 1 ---------------------------------------------------------
echo '        <tr>
        <strong>Note:</strong>td colspan="99">
<strong>Note:</strong> Planned/under construction facilities are expected to begin operations within the next year.<br />
<strong>Source:</strong> U.S. Energy Information Administration Form EIA-63C, Densified Biomass Fuel Report.
</td>
        </tr>';
break;
case 2: // table 2 ---------------------------------------------------------
echo '        <tr>
        <strong>Note:</strong>td colspan="99">
<strong>Note:</strong> Does not include facilities under construction and/or planned or small facilities, which report annually.<br />
<strong>Source:</strong> U.S. Energy Information Administration Form EIA-63C, Densified Biomass Fuel Report.
</td>
        </tr>';
break;
case 3: // table 3 ---------------------------------------------------------
echo '        <tr>
            <td colspan="9">
<strong>Notes:</strong> The other residuals category includes bark, logging residues, wood chips, post consumer wood, unmerchantable wood, and other. Roundwood timber is generally logs harvested for industrial use from sustainably managed forests.<br />
<strong>Source:</strong> U.S. Energy Information Administration Form EIA-63C, Densified Biomass Fuel Report.
</td>
        </tr>';
break;
case 4: // table 4 ---------------------------------------------------------
echo '        <tr>
            <td colspan="6">
<strong>Notes:</strong> Wood pellets, PFI certified includes: Wood pellets premium (PFI certified) and Wood pellets standard (PFI certified);
Wood pellets, not certified includes: Wood pellets premium (not certified), Wood pellets standard (not certified), Wood pellets ENplus A1, Wood pellets ENplus A2 and other;
Wood pellets, utility inlcudes: Wood pellets utility (not certified), Wood pellets utility (PFI certified) and Wood pellets ENplus B;
Compressed bricks/logs includes: Compressed bricks, Compressed logs, and briquettes.<br>
For information on the PFI (Pellet Fuel Institute) Certification Standards, see
<a href="http://www.pelletheat.org/pfi-standards" target="_blank">http://www.pelletheat.org/pfi-standards</a><br />
<strong>Source:</strong> U.S. Energy Information Administration Form EIA-63C, Densified Biomass Fuel Report.
</td>
        </tr>';
break;
case 5: // table 5 ---------------------------------------------------------
echo '        <tr>
            <td colspan="14">
N/A = No production<br />
&mdash; = Data for January and February is unavailable.<br />
<strong>Source:</strong> Form EIA-63C, Densified Biomass Fuel Report
</td>
        </tr>';
break;
case 6: // table 6 ---------------------------------------------------------
echo '        <tr>
            <td colspan="99">
<strong>Notes:</strong> Wood pellets premium/standard includes: Premium bagged, Premium bulk, Standard bagged, Standard bulk, and other;
Wood pellets, utility includes: Utility bulk; Compressed bricks/logs includes: Bricks and logs.
<br />
<strong>Source:</strong> U.S. Energy Information Administration Form EIA-63C, Densified Biomass Fuel Report.
</td>
        </tr>';
break;
case 7: // table 7 ---------------------------------------------------------
echo '        <tr>
        <strong>Note:</strong>td colspan="4">
<strong>Note:</strong> Includes all product types sold in the United States, both retail and wholesale sales.
<br />
<strong>Source:</strong> U.S. Energy Information Administration Form EIA-63C, Densified Biomass Fuel Report.
</td>
        </tr>';
break;
case 8: // table 8 ---------------------------------------------------------
echo '        <tr>
        <strong>Note:</strong>td colspan="4">
<strong>Note:</strong> Includes all product types exported, both retail and wholesale sales.
<br />
<strong>Source:</strong> U.S. Energy Information Administration Form EIA-63C, Densified Biomass Fuel Report.
</td>
        </tr>';
break;
default: // default if something went wrong --------------------------------
echo '        <tr>
            <td colspan="99" style="color:red;"><strong>Something went wrong!!!</strong></td>
        </tr>';
break;
}
}
