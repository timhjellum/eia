console.log("Header jQuery UI Autocomplete checking in...")

$(document).ready(function() {
    var surveys = [
        {
            value: "EIA-1 - Weekly Coal Monitoring Report - General Industries and Blast Furnaces (Terminated)",
            label: "EIA-1 - Weekly Coal Monitoring Report - General Industries and Blast Furnaces (Terminated)",
            anchor: "eia-1",
            }, {
            value: "EIA-3 - Quarterly Survey of Industrial, Commercial & Institutional Coal Users",
            label: "EIA- - Quarterly Survey of Industrial, Commercial & Institutional Coal Users3",
            anchor: "eia-3",
      
            }, {
            value: "EIA-4 - Weekly Coal Monitoring Report - Coke Plants (Terminated)",
            label: "EIA-4 - Weekly Coal Monitoring Report - Coke Plants (Terminated)",
            anchor: "eia-4",
      
            }, {
            value: "EIA-5 - Quarterly Coal Consumption and Quality Report, Coke Plants (Terminated)",
            label: "EIA-5 - Quarterly Coal Consumption and Quality Report, Coke Plants (Terminated)",
            anchor: "eia-5",
      
            }, {
            value: "EIA-6 - Emergency Coal Supply Survey, formerly EIA-6Q, Quarterly Coal Report (Standby)",
            label: "EIA-6 - Emergency Coal Supply Survey, formerly EIA-6Q, Quarterly Coal Report (Standby)",
            anchor: "eia-6",
      
            }, {
            value: "EIA-7A - Annual Survey of Coal Production and Preparation",
            label: "EIA-7A - Annual Survey of Coal Production and Preparation",
            anchor: "eia-7a",
      
            }, {
            value: "EIA-8A - Annual Survey of Coal Stocks and Coal Exports",
            label: "EIA-8A - Annual Survey of Coal Stocks and Coal Exports",
            anchor: "eia-8a",
      
            }, {
            value: "EIA-14 - Refiners' Monthly Cost Report",
            label: "EIA-14 - Refiners' Monthly Cost Report",
            anchor: "eia-14",
      
            }, {
            value: "EIA-20 - Emergency Weekly Coal Monitoring Survey for Coal Burning Power Producers",
            label: "EIA-20 - Emergency Weekly Coal Monitoring Survey for Coal Burning Power Producers",
            anchor: "eia-20",
      
            }, {
            value: "EIA-22M - Monthly Biodiesel Production Survey",
            label: "EIA-22M - Monthly Biodiesel Production Survey",
            anchor: "eia-22m",
      
            }, {
            value: "EIA-23L - Annual Report of Domestic Oil and Gas Reserves (County Level Version)",
            label: "EIA-23L - Annual Report of Domestic Oil and Gas Reserves (County Level Version)",
            anchor: "eia-23l",
      
            }, {
            value: "EIA-23S - Annual Survey of Domestic Oil and Gas Reserves (Summary Version) (Suspended)",
            label: "EIA-23S - Annual Survey of Domestic Oil and Gas Reserves (Summary Version) (Suspended)",
            anchor: "eia-23s",
      
            }, {
            value: "EIA-28 - Financial Reporting System  (Suspended)",
            label: "EIA-28 - Financial Reporting System  (Suspended)",
            anchor: "eia-28",
      
            }, {
            value: "EIA-63A - Annual Solar Thermal Collector/Reflector Shipments Report (Terminated)",
            label: "EIA-63A - Annual Solar Thermal Collector/Reflector Shipments Report (Terminated)",
            anchor: "eia-63a",
      
            }, {
            value: "EIA-63B - Monthly/Annual Photovoltaic Module Shipments Report",
            label: "EIA-63B - Monthly/Annual Photovoltaic Module Shipments Report",
            anchor: "eia-63b",
      
            }, {
            value: "EIA-63C - Densified  Biomass Fuel Report",
            label: "EIA-63C - Densified  Biomass Fuel Report",
            anchor: "eia-63c",
      
            }, {
            value: "EIA-64A - Annual Report of the Origin of Natural Gas Liquids Production",
            label: "EIA-64A - Annual Report of the Origin of Natural Gas Liquids Production",
            anchor: "eia-64a",
      
            }, {
            value: "EIA-111 - Quarterly Electricity Imports and Exports Report",
            label: "EIA-111 - Quarterly Electricity Imports and Exports Report",
            anchor: "eia-111",
      
            }, {
            value: "EIA-176 - Annual Report of Natural and Supplemental Gas Supply and Disposition",
            label: "EIA-176 - Annual Report of Natural and Supplemental Gas Supply and Disposition",
            anchor: "eia-176",
      
            }, {
            value: "EIA-182 - Domestic Crude Oil First Purchase Report",
            label: "EIA-182 - Domestic Crude Oil First Purchase Report",
            anchor: "eia-182",
      
            }, {
            value: "EIA-191A - Annual Underground Gas Storage Report",
            label: "EIA-191A - Annual Underground Gas Storage Report",
            anchor: "eia-191a",
      
            }, {
            value: "EIA-191 - Monthly Underground Gas Storage Report",
            label: "EIA-191 - Monthly Underground Gas Storage Report",
            anchor: "eia-191",
      
            }, {
            value: "EIA-411 - Coordinated Bulk Power Supply Program Report",
            label: "EIA-411 - Coordinated Bulk Power Supply Program Report",
            anchor: "eia-411",
      
            }, {
            value: "EIA-412 - Annual Electric Industry Financial Report (Terminated)",
            label: "EIA-412 - Annual Electric Industry Financial Report (Terminated)",
            anchor: "eia-412",
      
            }, {
            value: "EIA-423 - Monthly Cost and Quality of Fuels for Electric Plants Report  (Terminated)",
            label: "EIA-423 - Monthly Cost and Quality of Fuels for Electric Plants Report  (Terminated)",
            anchor: "eia-423",
      
            }, {
            value: "EIA-457 (A-G) - Residential Energy Consumption Survey (RECS)",
            label: "EIA-457 (A-G) - Residential Energy Consumption Survey (RECS)",
            anchor: "eia-457",
      
            }, {
            value: "EIA-757 - Natural Gas Processing Plant Survey",
            label: "EIA-757 - Natural Gas Processing Plant Survey",
            anchor: "eia-757",
      
            }, {
            value: "EIA-767 - Steam-Electric Plant Operation and Design Report  (Terminated)",
            label: "EIA-767 - Steam-Electric Plant Operation and Design Report  (Terminated)",
            anchor: "eia-767",
      
            }, {
            value: "EIA-782A - Refiners'/Gas Plant Operators' Monthly Petroleum Product Sales Report",
            label: "EIA-782A - Refiners'/Gas Plant Operators' Monthly Petroleum Product Sales Report",
            anchor: "eia-782a",
      
            }, {
            value: "EIA-782B - Resellers'/Retailers' Monthly Petroleum Product Sales Report (Suspended)",
            label: "EIA-782B - Resellers'/Retailers' Monthly Petroleum Product Sales Report (Suspended)",
            anchor: "eia-782b",
      
            }, {
            value: "EIA-782C - Monthly Report of Prime Supplier Sales of Petroleum Products Sold for Local Consumption",
            label: "EIA-782C - Monthly Report of Prime Supplier Sales of Petroleum Products Sold for Local Consumption",
            anchor: "eia-782c",
      
            }, {
            value: "EIA-800 - Weekly Refinery and Fractionator Report",
            label: "EIA-800 - Weekly Refinery and Fractionator Report",
            anchor: "eia-800",
      
            }, {
            value: "EIA-801 - Weekly Bulk Terminal Report  (Discontinued)",
            label: "EIA-801 - Weekly Bulk Terminal Report  (Discontinued)",
            anchor: "eia-801",
      
            }, {
            value: "EIA-802 - Weekly Product Pipeline Report",
            label: "EIA-802 - Weekly Product Pipeline Report",
            anchor: "eia-802",
      
            }, {
            value: "EIA-803 - Weekly Crude Oil Stocks Report",
            label: "EIA-803 - Weekly Crude Oil Stocks Report",
            anchor: "eia-803",
      
            }, {
            value: "EIA-804 - Weekly Imports Report",
            label: "EIA-804 - Weekly Imports Report",
            anchor: "eia-804",
      
            }, {
            value: "EIA-805 - Weekly Bulk Terminal and Blender Report",
            label: "EIA-805 - Weekly Bulk Terminal and Blender Report",
            anchor: "eia-805",
      
            }, {
            value: "EIA-809 - Weekly Oxygenate Report",
            label: "EIA-809 - Weekly Oxygenate Report",
            anchor: "eia-809",
      
            }, {
            value: "EIA-810 - Monthly Refinery Report",
            label: "EIA-810 - Monthly Refinery Report",
            anchor: "eia-810",
      
            }, {
            value: "EIA-812 - Monthly Product Pipeline Report",
            label: "EIA-812 - Monthly Product Pipeline Report",
            anchor: "eia-812",
      
            }, {
            value: "EIA-813 - Monthly Crude Oil Report",
            label: "EIA-813 - Monthly Crude Oil Report",
            anchor: "eia-813",
      
            }, {
            value: "EIA-814 - Monthly Imports Report",
            label: "EIA-814 - Monthly Imports Report",
            anchor: "eia-814",
      
            }, {
            value: "EIA-815 - Monthly Bulk Terminal and Blender Report",
            label: "EIA-815 - Monthly Bulk Terminal and Blender Report",
            anchor: "eia-815",
      
            }, {
            value: "EIA-816 - Monthly Natural Gas Liquids Report",
            label: "EIA-816 - Monthly Natural Gas Liquids Report",
            anchor: "eia-816",
      
            }, {
            value: "EIA-817 - Monthly Tanker and Barge Movement Report",
            label: "EIA-817 - Monthly Tanker and Barge Movement Report",
            anchor: "eia-817",
      
            }, {
            value: "EIA-819 - Monthly Oxygenate Report",
            value: "EIA-819 - Monthly Oxygenate Report",
            anchor: "eia-819",
      
            }, {
            value: "EIA-820 - Annual Refinery Report",
            value: "EIA-820 - Annual Refinery Report",
            anchor: "eia-820",
      
            }, {
            value: "EIA-821 - Annual Fuel Oil and Kerosene Sales Report",
            value: "EIA-821 - Annual Fuel Oil and Kerosene Sales Report",
            anchor: "eia-821",
      
            }, {
            value: "EIA-826 - Monthly Electric Utility Sales and Revenue Report with State Distributions (Terminated)",
            value: "EIA-826 - Monthly Electric Utility Sales and Revenue Report with State Distributions (Terminated)",
            anchor: "eia-826",
      
            }, {
            value: "EIA-846(A,B) - Manufacturing Energy Consumption Survey (MECS)",
            value: "EIA-846(A,B) - Manufacturing Energy Consumption Survey (MECS)",
            anchor: "eia-846",
      
            }, {
            value: "EIA-851A - Domestic Uranium Production Report (Annual)",
            value: "EIA-851A - Domestic Uranium Production Report (Annual)",
            anchor: "eia-851a",
      
            }, {
            value: "EIA-851Q - Domestic Uranium Production Report (Quarterly)",
            value: "EIA-851Q - Domestic Uranium Production Report (Quarterly)",
            anchor: "eia-851q",
      
            }, {
            value: "EIA-856 - Monthly Foreign Crude Oil Acquisition Report",
            value: "EIA-856 - Monthly Foreign Crude Oil Acquisition Report",
            anchor: "eia-856",
      
            }, {
            value: "EIA-857 - Monthly Report of Natural Gas Purchases and Deliveries to Consumers",
            label: "EIA-857 - Monthly Report of Natural Gas Purchases and Deliveries to Consumers",
            anchor: "eia-857",
      
            }, {
            value: "EIA-858 - Uranium Marketing Annual Survey",
            label: "EIA-858 - Uranium Marketing Annual Survey",
            anchor: "eia-858",
      
            }, {
            value: "EIA-860 - Annual Electric Generator Report",
            label: "EIA-860 - Annual Electric Generator Report",
            anchor: "eia-860",
      
            }, {
            value: "EIA-860M - Monthly Update to the Annual Electric Generator Report",
            label: "EIA-860M - Monthly Update to the Annual Electric Generator Report",
            anchor: "eia-860m",
      
            }, {
            value: "EIA-861 - Annual Electric Power Industry Report",
            label: "EIA-861 - Annual Electric Power Industry Report",
            anchor: "eia-861",
      
            }, {
            value: "EIA-861M - Monthly Electric Power Industry Report",
            label: "EIA-861M - Monthly Electric Power Industry Report",
            anchor: "eia-861m",
      
            }, {
            value: "EIA-861S - Annual Electric Power Industry Report (Short Form)",
            label: "EIA-861S - Annual Electric Power Industry Report (Short Form)",
            anchor: "eia-861s",
      
            }, {
            value: "EIA-863 - Petroleum Product Sales Identification Survey",
            label: "EIA-863 - Petroleum Product Sales Identification Survey",
            anchor: "eia-863",
      
            }, {
            value: "EIA-871 - Commercial Buildings Energy Consumption Survey (CBECS)",
            label: "EIA-871 - Commercial Buildings Energy Consumption Survey (CBECS)",
            anchor: "eia-871",
      
            }, {
            value: "EIA-877 - Winter Heating Fuels Telephone Survey",
            label: "EIA-877 - Winter Heating Fuels Telephone Survey",
            anchor: "eia-877",
      
            }, {
            value: "EIA-878 - Motor Gasoline Price Survey",
            label: "EIA-878 - Motor Gasoline Price Survey",
            anchor: "eia-878",
      
            }, {
            value: "EIA-886 - Annual Survey of Alternative Fueled Vehicles",
            label: "EIA-886 - Annual Survey of Alternative Fueled Vehicles",
            anchor: "eia-886",
      
            }, {
            value: "EIA-888 - On-Highway Diesel Fuel Price Survey",
            label: "EIA-888 - On-Highway Diesel Fuel Price Survey",
            anchor: "eia-888",
      
            }, {
            value: "EIA-902 - Annual Geothermal Heat Pump Shipments Report (Terminated)",
            label: "EIA-902 - Annual Geothermal Heat Pump Shipments Report (Terminated)",
            anchor: "eia-902",
      
            }, {
            value: "EIA-906 - Power Plant Report  (Terminated)",
            label: "EIA-906 - Power Plant Report  (Terminated)",
            anchor: "eia-906",
      
            }, {
            value: "EIA-910 - Monthly Natural Gas Marketers Survey",
            label: "EIA-910 - Monthly Natural Gas Marketers Survey",
            anchor: "eia-910",
      
            }, {
            value: "EIA-912 - Weekly Underground Natural Gas Storage Report",
            label: "EIA-912 - Weekly Underground Natural Gas Storage Report",
            anchor: "eia-912",
      
            }, {
            value: "EIA-914 - Monthly Crude Oil, Lease Condensate, and Natural Gas Production Report",
            label: "EIA-914 - Monthly Crude Oil, Lease Condensate, and Natural Gas Production Report",
            anchor: "eia-914",
      
            }, {
            value: "EIA-915 - Monthly Gas Processing and Liquids Report (Proposed)",
            label: "EIA-915 - Monthly Gas Processing and Liquids Report (Proposed)",
            anchor: "eia-915",
      
            }, {
            value: "EIA-920 - Combined Heat and Power Plant Report  (Terminated)",
            label: "EIA-920 - Combined Heat and Power Plant Report  (Terminated)",
            anchor: "eia-920",
      
            }, {
            value: "EIA-923 - Power Plant Operations Report",
            label: "EIA-923 - Power Plant Operations Report",
            anchor: "eia-923",
      
            }, {
            value: "EIA-930 - Hourly and Daily Balancing Authority Operations Report",
            label: "EIA-930 - Hourly and Daily Balancing Authority Operations Report",
            anchor: "eia-930",
      
            }, {
            value: "EIA-1605 - Voluntary Reporting of Greenhouse Gases (Suspended)",
            label: "EIA-1605 - Voluntary Reporting of Greenhouse Gases (Suspended)",
            anchor: "eia-1605",
      
            }, {
            value: "FE-746R - Import and Export of Natural Gas",
            label: "FE-746R - Import and Export of Natural Gas",
            anchor: "fe-746r",
      
            }, {
            value: "GC-859 - Nuclear Fuel Data  Survey",
            label: "GC-859 - Nuclear Fuel Data  Survey",
            anchor: "gc-859",
      
            }, {
            value: "NWPA-830G - Standard Contract for Disposal of Spent Nuclear Fuel and/or High-Level Radioactive Waste - Appendix G and Annex A to Appendix G",
            label: "NWPA-830G - Standard Contract for Disposal of Spent Nuclear Fuel and/or High-Level Radioactive Waste - Appendix G and Annex A to Appendix G",
            anchor: "nwpa-830g",
      
            }, {
            value: "OE-417 - Electric Emergency Incident and Disturbance Report",
            label: "OE-417 - Electric Emergency Incident and Disturbance Report",
            anchor: "oe-417",
      
            }, {
            value: "OE-781R - Monthly Electricity Imports and Exports Report (Terminated)",
            label: "OE-781R - Monthly Electricity Imports and Exports Report (Terminated)",
            anchor: "oe-781r",
      
            }, {
            value: "FERC - Various Collections of Information on Electricity, Natural Gas, Hydroelectric Power, and Oil",
            label: "FERC - Various Collections of Information on Electricity, Natural Gas, Hydroelectric Power, and Oil",
            anchor: "ferc",
      
            }
        ];
    $("#survey").autocomplete({
        minLength: 2,
        source: surveys,
        focus: function(event, ui) {
            $("#survey").val(ui.item.label);
            return false;
        },
        select: function(event, ui) {
            $("#survey").val(ui.item.label);
            $("#survey-id").val(ui.item.value);
            $("a#Go").attr("href","https://www.eia.gov/survey/index.php#" + ui.item.anchor);   
            return false;
        },
        open: function(){
            setTimeout(function () {
                $('.ui-autocomplete').css('z-index', 9999);
            }, 0);
        }
    })
    .autocomplete("instance")._renderItem = function(ul, item) {
        return $("<li>")
        .append("<div>" + item.label +"</div>")
        .appendTo(ul);
    };
});

