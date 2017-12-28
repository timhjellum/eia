<?php
$pageTitle = "Comparison of Selected EIA-782 Data With Other Data Sources";
$L2Title = "Comparison of Selected EIA-782 Data With Other Data Sources";
?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<?php
if(isset($pageTitle) && $pageTitle) {
print "<title>" . $pageTitle . "</title>"; print PHP_EOL;
$pageTitle = '';
}
?>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
   <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
$(function() {
  var projects = [

    {
      value: "EIA-1",
      label: "EIA-1",
      anchor: "eia-1",
      desc: "Weekly Coal Monitoring Report - General Industries and Blast Furnaces (Terminated)"
    }, {
      value: "EIA-3",
      label: "EIA-3",
      anchor: "eia-3",
      desc: "Quarterly Survey of Industrial, Commercial & Institutional Coal Users"
    }, {
      value: "EIA-4",
      label: "EIA-4",
      anchor: "eia-4",
      desc: "Weekly Coal Monitoring Report - Coke Plants (Terminated)"
    }, {
      value: "EIA-5",
      label: "EIA-5",
      anchor: "eia-5",
      desc: "Quarterly Coal Consumption and Quality Report, Coke Plants (Terminated)"
    }, {
      value: "EIA-6",
      label: "EIA-6",
      anchor: "eia-6",
      desc: " Emergency Coal Supply Survey, formerly EIA-6Q, Quarterly Coal Report (Standby)"
    }, {
      value: "EIA-7A",
      label: "EIA-7A",
      anchor: "eia-7a",
      desc: " Annual Survey of Coal Production and Preparation"
    }, {
      value: "EIA-8A",
      label: "EIA-8A",
      anchor: "eia-8a",
      desc: "Annual Survey of Coal Stocks and Coal Exports"
    }, {
      value: "EIA-14",
      label: "EIA-14",
      anchor: "eia-14",
      desc: "Refiners' Monthly Cost Report"
    }, {
      value: "EIA-20",
      label: "EIA-20",
      anchor: "eia-20",
      desc: " Emergency Weekly Coal Monitoring Survey for Coal Burning Power Producers"
    }, {
      value: "EIA-22M",
      label: "EIA-22M",
      anchor: "eia-22m",
      desc: "Monthly Biodiesel Production Survey"
    }, {
      value: "EIA-23L",
      label: "EIA-23L",
      anchor: "eia-23l",
      desc: "Annual Report of Domestic Oil and Gas Reserves (County Level Version)"
    }, {
      value: "EIA-23S",
      label: "EIA-23S",
      anchor: "eia-23s",
      desc: "Annual Survey of Domestic Oil and Gas Reserves (Summary Version) (Suspended)"
    }, {
      value: "EIA-28",
      label: "EIA-28",
      anchor: "eia-28",
      desc: "Financial Reporting System  (Suspended)"
    }, {
      value: "EIA-63A",
      label: "EIA-63A",
      anchor: "eia-63a",
      desc: "Annual Solar Thermal Collector/Reflector Shipments Report (Terminated)"
    }, {
      value: "EIA-63B",
      label: "EIA-63B",
      anchor: "eia-63b",
      desc: "Monthly/Annual Photovoltaic Module Shipments Report"
    }, {
      value: "EIA-63C",
      label: "EIA-63C",
      anchor: "eia-63c",
      desc: "Densified  Biomass Fuel Report"
    }, {
      value: "EIA-64A",
      label: "EIA-64A",
      anchor: "eia-64a",
      desc: "Annual Report of the Origin of Natural Gas Liquids Production"
    }, {
      value: "EIA-111",
      label: "EIA-111",
      anchor: "eia-111",
      desc: "Quarterly Electricity Imports and Exports Report"
    }, {
      value: "EIA-176",
      label: "EIA-176",
      anchor: "eia-176",
      desc: "Annual Report of Natural and Supplemental Gas Supply and Disposition"
    }, {
      value: "EIA-182",
      label: "EIA-182",
      anchor: "eia-182",
      desc: "Domestic Crude Oil First Purchase Report"
    }, {
      value: "EIA-191A",
      label: "EIA-191A",
      anchor: "eia-191a",
      desc: "Annual Underground Gas Storage Report"
    }, {
      value: "EIA-191",
      label: "EIA-191",
      anchor: "eia-191",
      desc: "Monthly Underground Gas Storage Report"
    }, {
      value: "EIA-411",
      label: "EIA-411",
      anchor: "eia-411",
      desc: "Coordinated Bulk Power Supply Program Report"
    }, {
      value: "EIA-412",
      label: "EIA-412",
      anchor: "eia-412",
      desc: "Annual Electric Industry Financial Report (Terminated)"
    }, {
      value: "EIA-423",
      label: "EIA-423",
      anchor: "eia-423",
      desc: "Monthly Cost and Quality of Fuels for Electric Plants Report  (Terminated)"
    }, {
      value: "EIA-457 (A-G)",
      label: "EIA-457 (A-G)",
      anchor: "eia-457",
      desc: "Residential Energy Consumption Survey (RECS)"
    }, {
      value: "EIA-757",
      label: "EIA-757",
      anchor: "eia-757",
      desc: "Natural Gas Processing Plant Survey"
    }, {
      value: "EIA-767",
      label: "EIA-767",
      anchor: "eia-767",
      desc: "Steam-Electric Plant Operation and Design Report  (Terminated)"
    }, {
      value: "EIA-782A",
      label: "EIA-782A",
      anchor: "eia-782a",
      desc: "Refiners'/Gas Plant Operators' Monthly Petroleum Product Sales Report"
    }, {
      value: "EIA-782B",
      label: "EIA-782B",
      anchor: "eia-782b",
      desc: " Resellers'/Retailers' Monthly Petroleum Product Sales Report (Suspended)"
    }, {
      value: "EIA-782C",
      label: "EIA-782C",
      anchor: "eia-782c",
      desc: "Monthly Report of Prime Supplier Sales of Petroleum Products Sold for Local Consumption"
    }, {
      value: "EIA-800",
      label: "EIA-800",
      anchor: "eia-800",
      desc: "Weekly Refinery and Fractionator Report"
    }, {
      value: "EIA-801",
      label: "EIA-801",
      anchor: "eia-801",
      desc: "Weekly Bulk Terminal Report  (Discontinued)"
    }, {
      value: "EIA-802",
      label: "EIA-802",
      anchor: "eia-802",
      desc: "Weekly Product Pipeline Report"
    }, {
      value: "EIA-803",
      label: "EIA-803",
      anchor: "eia-803",
      desc: "Weekly Crude Oil Stocks Report"
    }, {
      value: "EIA-804",
      label: "EIA-804",
      anchor: "eia-804",
      desc: "Weekly Imports Report"
    }, {
      value: "EIA-805",
      label: "EIA-805",
      anchor: "eia-805",
      desc: "Weekly Bulk Terminal and Blender Report"
    }, {
      value: "EIA-809",
      label: "EIA-809",
      anchor: "eia-809",
      desc: "Weekly Oxygenate Report"
    }, {
      value: "EIA-810",
      label: "EIA-810",
      anchor: "eia-810",
      desc: "Monthly Refinery Report"
    }, {
      value: "EIA-812",
      label: "EIA-812",
      anchor: "eia-812",
      desc: "Monthly Product Pipeline Report"
    }, {
      value: "EIA-813",
      label: "EIA-813",
      anchor: "eia-813",
      desc: "Monthly Crude Oil Report"
    }, {
      value: "EIA-814",
      label: "EIA-814",
      anchor: "eia-814",
      desc: "Monthly Imports Report"
    }, {
      value: "EIA-815",
      label: "EIA-815",
      anchor: "eia-815",
      desc: "Monthly Bulk Terminal and Blender Report"
    }, {
      value: "EIA-816",
      label: "EIA-816",
      anchor: "eia-816",
      desc: "Monthly Natural Gas Liquids Report"
    }, {
      value: "EIA-817",
      label: "EIA-817",
      anchor: "eia-817",
      desc: "Monthly Tanker and Barge Movement Report"
    }, {
      value: "EIA-819",
      value: "EIA-819",
      anchor: "eia-819",
      desc: "Monthly Oxygenate Report"
    }, {
      value: "EIA-820",
      value: "EIA-820",
      anchor: "eia-820",
      desc: "Annual Refinery Report"
    }, {
      value: "EIA-821",
      value: "EIA-821",
      anchor: "eia-821",
      desc: "Annual Fuel Oil and Kerosene Sales Report"
    }, {
      value: "EIA-826",
      value: "EIA-826",
      anchor: "eia-826",
      desc: "Monthly Electric Utility Sales and Revenue Report with State Distributions (Terminated)"
    }, {
      value: "EIA-846(A,B)",
      value: "EIA-846(A,B)",
      anchor: "eia-846",
      desc: "Manufacturing Energy Consumption Survey (MECS)"
    }, {
      value: "EIA-851A",
      value: "EIA-851A",
      anchor: "eia-851a",
      desc: "Domestic Uranium Production Report (Annual)"
    }, {
      value: "EIA-851Q",
      value: "EIA-851Q",
      anchor: "eia-851q",
      desc: "Domestic Uranium Production Report (Quarterly)"
    }, {
      value: "EIA-856",
      value: "EIA-856",
      anchor: "eia-856",
      desc: "Monthly Foreign Crude Oil Acquisition Report"
    }, {
      value: "EIA-857",
      label: "EIA-857",
      anchor: "eia-857",
      desc: "Monthly Report of Natural Gas Purchases and Deliveries to Consumers"
    }, {
      value: "EIA-858",
      label: "EIA-858",
      anchor: "eia-858",
      desc: "Uranium Marketing Annual Survey"
    }, {
      value: "EIA-860",
      label: "EIA-860",
      anchor: "eia-860",
      desc: "Annual Electric Generator Report"
    }, {
      value: "EIA-860M",
      label: "EIA-860M",
      anchor: "eia-860m",
      desc: "Monthly Update to the Annual Electric Generator Report"
    }, {
      value: "EIA-861",
      label: "EIA-861",
      anchor: "eia-861",
      desc: "Annual Electric Power Industry Report"
    }, {
      value: "EIA-861M",
      label: "EIA-861M",
      anchor: "eia-861m",
      desc: "Monthly Electric Power Industry Report"
    }, {
      value: "EIA-861S",
      label: "EIA-861S",
      anchor: "eia-861s",
      desc: "Annual Electric Power Industry Report (Short Form)"
    }, {
      value: "EIA-863",
      label: "EIA-863",
      anchor: "eia-863",
      desc: "Petroleum Product Sales Identification Survey"
    }, {
      value: "EIA-871",
      label: "EIA-871",
      anchor: "eia-871",
      desc: "Commercial Buildings Energy Consumption Survey (CBECS)"
    }, {
      value: "EIA-877",
      label: "EIA-877",
      anchor: "eia-877",
      desc: "Winter Heating Fuels Telephone Survey"
    }, {
      value: "EIA-878",
      label: "EIA-878",
      anchor: "eia-878",
      desc: "Motor Gasoline Price Survey",
    }, {
      value: "EIA-886",
      label: "EIA-886",
      anchor: "eia-886",
      desc: "Annual Survey of Alternative Fueled Vehicles"
    }, {
      value: "EIA-888",
      label: "EIA-888",
      anchor: "eia-888",
      desc: "On-Highway Diesel Fuel Price Survey"
    }, {
      value: "EIA-902",
      label: "EIA-902",
      anchor: "eia-902",
      desc: "Annual Geothermal Heat Pump Shipments Report (Terminated)"
    }, {
      value: "EIA-906",
      label: "EIA-906",
      anchor: "eia-906",
      desc: "Power Plant Report  (Terminated)"
    }, {
      value: "EIA-910",
      label: "EIA-910",
      anchor: "eia-910",
      desc: "Monthly Natural Gas Marketers Survey"
    }, {
      value: "EIA-912",
      label: "EIA-912",
      anchor: "eia-912",
      desc: "Weekly Underground Natural Gas Storage Report"
    }, {
      value: "EIA-914",
      label: "EIA-914",
      anchor: "eia-914",
      desc: "Monthly Crude Oil, Lease Condensate, and Natural Gas Production Report"
    }, {
      value: "EIA-915",
      label: "EIA-915",
      anchor: "eia-915",
      desc: "Monthly Gas Processing and Liquids Report (Proposed)"
    }, {
      value: "EIA-920",
      label: "EIA-920",
      anchor: "eia-920",
      desc: "Combined Heat and Power Plant Report  (Terminated)"
    }, {
      value: "EIA-923",
      label: "EIA-923",
      anchor: "eia-923",
      desc: "Power Plant Operations Report"
    }, {
      value: "EIA-930",
      label: "EIA-930",
      anchor: "eia-930",
      desc: "Hourly and Daily Balancing Authority Operations Report"
    }, {
      value: "EIA-1605",
      label: "EIA-1605",
      anchor: "eia-1605",
      desc: "Voluntary Reporting of Greenhouse Gases (Suspended)"
    }, {
      value: "FE-746R",
      label: "FE-746R",
      anchor: "fe-746r",
      desc: "Import and Export of Natural Gas"
    }, {
      value: "GC-859",
      label: "GC-859",
      anchor: "gc-859",
      desc: "Nuclear Fuel Data  Survey"
    }, {
      value: "NWPA-830G",
      label: "NWPA-830G",
      anchor: "nwpa-830g",
      desc: "Standard Contract for Disposal of Spent Nuclear Fuel and/or High-Level Radioactive Waste - Appendix G and Annex A to Appendix G"
    }, {
      value: "OE-417",
      label: "OE-417",
      anchor: "oe-417",
      desc: "Electric Emergency Incident and Disturbance Report"
    }, {
      value: "OE-781R",
      label: "OE-781R",
      anchor: "oe-781r",
      desc: "Monthly Electricity Imports and Exports Report (Terminated)"
    }, {
      value: "FERC",
      label: "FERC",
      anchor: "ferc",
      desc: "Various Collections of Information on Electricity, Natural Gas, Hydroelectric Power, and Oil"
    }
  ];

  $("#project").autocomplete({
      minLength: 2,
      source: projects,
      focus: function(event, ui) {
        $("#project").val(ui.item.label);
        return false;
      },
      select: function(event, ui) {
        $("#project").val(ui.item.label);
        $("#project-id").val(ui.item.value);
        //       $("#project-description" ).html( ui.item.desc );
        $("#Go").attr("href","https://www.eia.gov/survey/index.php#" + ui.item.anchor);

        return false;
      }
    })
//     ;
    .autocomplete("instance")._renderItem = function(ul, item) {
      return $("<li>")
        .append("<div><strong>" + item.label +"</strong> - " + item.desc +"</div>")
        .appendTo(ul);
    };
});

  </script>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1>Comparison of Selected EIA-782 Data With Other Data Sources</h1>
<p class="date">December 12, 2012<br />
</p>
<p>This article compares annual average prices reported from the EIA-782 survey series for residential No. 2 distillate, on-highway diesel fuel, retail regular motor gasoline, refiner No. 2 fuel oil for resale, refiner No. 2 diesel fuel for resale, refiner regular motor gasoline for resale, and refiner kerosene-type jet fuel for resale with annual average prices reported by other sources. In terms of volume, it compares EIA-782C Prime Supplier annual volumes for motor gasoline (all grades), distillate fuel oil, kerosene-type jet fuel and residual fuel oil with annual volumes from other sources.
</p>
<p><a href="/petroleum/archive/price-comparison092012_article.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
 </div>
<div class="l-side-column">
<?php include('./includes/side-nav_782.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>





