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

<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<div class="l-row">
<div class="l-main-column">



<table class="data">
          <thead onscroll="scroll_header();" style="margin:0px;">
            <tr>
              <th width="9%"><h5>Form Number</h5></th>
              <th width="62%"><h5>Title</h5></th>
              <th width="7"><h5>Forms</h5></th>
              <th width="15%"><h5>Survey Manager<br>
                  email and phone</h5></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a name="eia-1"></a><span style="color:#999">EIA-1</span></td>
              <td><p><strong>Weekly Coal Monitoring Report - General Industries and Blast Furnaces </strong><strong><strong style="color:#000">(Terminated)</strong></strong><br>
                  Collected information as a standby form to track coal and coke stocks, receipts and consumption in the manufacturing sector during coal supply   disruptions. </p>
                <p> <a href="/survey/form/eia_1/instructions.pdf" class="ico_pdf">Instructions</a></p>
                                <a class="show">[+] See more</a>
                <div class="more">
                  <p> In conjunction with data on Forms EIA-4 and EIA-20, EIA-1 data   was used for supply forecasts and to inform the public, the industry, and   the Government of aggregated coal consumption and inventories. Respondents would   be a selected sample of manufacturing plants that consume coal for all uses   other than coke production. </p>
                                  </div></td>
              <td><a href="/survey/form/eia_1/form.pdf" class="ico_pdf">PDF</a></td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td><a name="eia-3"></a>EIA-3</td>
              <td><p><strong>Quarterly Survey of Industrial, Commercial &amp; Institutional Coal Users</strong> <br>
                  Utilized to collect coal consumption data from   U.S. manufacturers, transformation and processing plants, and commercial and   institutional users. Information collected includes coal consumption, stocks,   and receipts.</p>
                <p><a href="/survey/form/eia_3/form.pdf" class="ico_pdf">Form</a> (includes instructions) &nbsp;
                                    | &nbsp; <a href="/survey/form/eia_3/faqs.cfm">Frequently Asked   Questions</a> </p>
               
                <a class="show">[+] See more </a>
                <div class="more">
                  <p>For coal received during  the quarter, origin, coal rank, type of purchase contract, quantity,  transportation mode, quality (i.e., Btu, sulfur, and ash contents), and cost  data are collected. For coal transformed during the quarter, data is  collected based on transformation type: Gasification, Liquefaction,  Refined Coal, Coking Coal. Facilities that consume in excess of 1,000  short tons of anthracite, bituminous, sub-bituminous coal or lignite are  required to submit a quarterly survey. Data from the Form EIA-3 appear in  EIA publications, such as the <em>Quarterly Coal Report</em>, <em>Monthly Energy Review</em>,  <em>Annual Energy Review</em>, and the <em>Annual Coal Report</em>. In addition, the EIA uses the  data for coal supply analyses and short-term modeling.&nbsp;<strong>For help in  determining coal origins&nbsp;</strong>(counties) for the EIA-3 form in east  Kentucky, west Kentucky, north West Virginia, and south West Virginia, see the  following maps:&nbsp; <a href="/survey/maps/kymap.jpg">East and West Kentucky  map</a>, <a href="/survey/maps/wvmap.jpg">North and South West  Virginia map</a>.</p>
                  <p>Respondents include manufacturing, institutional, commercial, and coal tranformation plants, and other industrial facilitates that consume in excess of 1,000 short tons of coal per year.  All U.S. coke plants must respond..</p>
                  <p>Frequency of  Collection: Quarterly<br>
                    Number of Respondents: 484<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b)</p></div></td>
              <td><a href="/survey/form/eia_3/form.pdf" class="ico_pdf">PDF</a><br></td>
              <td><a href="mailto:InfoCoal@eia.gov">Kimberly Palacios</a><br>
                (202) 287-6514</td>
            </tr>
            <tr>
              <td><a name="eia-4"></a><span style="color:#999">EIA-4</span></td>
              <td><p><strong>Weekly Coal Monitoring Report - Coke Plants (Terminated)</strong><br>
                  Standby form collected information used to track coal stocks, receipts and consumption, and coke stocks during a coal supply disruption. </p>
                                <p> <a href="/survey/form/eia_4/instructions.pdf" class="ico_pdf">Instructions</a> </p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>In conjunction with Forms EIA-1 and EIA-20 data, EIA-4 data was used for supply forecasts and to inform the public, the industry, and the Government of aggregated coal consumption and inventories. Respondents will be producers of coke. </p>
                </div></td>
              <td><a href="/survey/form/eia_4/form.pdf" class="ico_pdf">PDF</a></td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td><a name="eia-5"></a><span style="color:#999">EIA-5</span></td>
              <td><strong>Quarterly Coal Consumption and Quality Report, Coke Plants</strong> <strong style="color:#000">(Terminated)</strong><br>
                <em><strong>merged into <a href="#eia-3">EIA-3</a></strong></em>
                <p>Collected data on coal receipts, costs, carbonization,   and stocks, as well as coke and breeze production, distribution, stocks, and   total revenues from commercial sales at all U.S. coke plants.</p>
                <p> <a href="/survey/form/eia_5/instructions.pdf" class="ico_pdf">Instructions</a>&nbsp;&nbsp;
                   </p>
                                <a class="show">[+] See more</a>
                <div class="more">
                  <p> For coal received   during the quarter, information is collected on origin, quantity, transportation   mode, quality (i.e., volatility, sulfur, and ash contents), and cost. The data   are collected to provide basic statistics used by public and private analysts.   Respondents are all U.S. coke plants.
                    Data from the EIA-5 form appear in the EIA publications, Quarterly Coal Report, Monthly Energy Review, Annual Energy   Review, and the Annual Coal Report. In addition, EIA uses the data for coal   supply analyses and in short-term modeling efforts requested by Congress that   forecast coal supply, prices,
                    and environmental quality. <strong>For help in   determining coal origins </strong>(counties) for the EIA-5 form in east   Kentucky, west Kentucky, north West Virginia, and south West Virginia for the   EIA-5 forms, see the following maps. (<a href="/survey/maps/kymap.jpg">East and West Kentucky map</a>) (<a href="/survey/maps/wvmap.jpg">North and South West Virginia   map</a>)</p>
                                                    </div></td>
              <td><a href="/survey/form/eia_5/form.pdf" class="ico_pdf">PDF</a><br></td>
              <td>&nbsp;</td>
            </tr>

            <tr>
              <td><a name="eia-6"></a>EIA-6</td>
              <td><strong> Emergency Coal Supply Survey, <em>formerly EIA-6Q, Quarterly Coal Report</em> (Standby) </strong> <br>
                <p>                    Provides coal production and stocks data from U.S. coal mining companies and stocks data from distributors that do not produce coal.</p>
                <p>(Instructions are now included in the form.)</p>
                           <a class="show">[+] See more</a>
                <div class="more">
                  <p> The form will be used in an event of a coal supply disruption event. The information would be used for publications, analyses, and statistical reports. Data collected would include production and end-of-quarter stocks by state of origin. Respondents would be all companies that produced in excess of 25,000 short tons of coal during the year defined by the current reporting quarter and the previous three reporting quarters.</p>
                  <p>Number of Respondents: Standby form, number will be determined   at time of use<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
                  <p></p>
                </div></td>
              <td><a href="/survey/form/eia_6/form.pdf" class="ico_pdf">PDF<br>
                </a></td>
              <td><a href="mailto:InfoCoal@eia.gov">Rosalyn Berry</a><br>
                (202)  586-1026</td>
            </tr>
            <tr>
              <td><a name="eia-7a"></a>EIA-7A</td>
              <td><strong> Annual Survey of Coal Production and Preparation </strong> <br>
                <p>Collects data on coal production operations, characteristics of coalbeds mined, recoverable reserves, productive capacity, coal preparation and the disposition of the coal mined. For coal preparation, information collected includes operations, locations, productive capacity, disposition, and coal prepared. The information is disseminated in EIA reports and analyses used by public and private analysts.</p>
                <p> <a href="/survey/form/eia_7a/form.pdf" class="ico_pdf">Form (includes instructions)</a> &nbsp;&nbsp;
                  | &nbsp; <a href="/survey/form/eia_7a/datum_instructions.pdf" class="ico_pdf">Special Instructions for  Location Datum (PDF) </a> &nbsp;&nbsp;
                  | &nbsp; <a href="/survey/form/eia_7a/registration_guide.pdf" class="ico_pdf">EIA-7A SSO Registration Guide</a> &nbsp;&nbsp;
                  | &nbsp; <a href="/survey/form/eia_7a/users_guide.pdf" class="ico_pdf">EIA-7A Users Guide</a> &nbsp;
                  | &nbsp; <a href="/survey/form/eia_7a/faqs.cfm">Frequently Asked Questions</a>                    </p>
                               <a class="show">[+] See more</a>
                <div class="more">
                  <p> Respondents are all U.S. coal mining companies that owned a mining operation which produced 25,000 or more short tons of coal, or anthracite mines that produced 10,000 or more  short tons.  Stand-alone facilities (i.e., coal preparation plants, tipples, loading docks, and train loadout facilities) that recorded at least 5,000 person-hours of labor must also report. </p>
                  <p> Frequency of Collection: Annually<br>
                    Number of Respondents: 962<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b)</p>
                </div></td>
              <td><a href="/survey/form/eia_7a/form.pdf" class="ico_pdf">PDF</a><br>
                <br>
                <br></td>
              <td><a href="mailto:fadi.shadid@eia.gov">Fadi Shadid</a><br>
                (202) 586-6393</td>
            </tr>
            <tr>
              <td><a name="eia-8a"></a>EIA-8A</td>
              <td><strong>Annual Survey of Coal Stocks and Coal Exports</strong> <br>
                <p>Collects coal stocks data for publications, analyses, and statistical reports used by public and private analysts.
                  Data collected include coal stocks by state location, exported coal by origin state, and export revenue of coal sold during the reporting year.</p>
                <p> <a href="/survey/form/eia_8a/form.pdf" class="ico_pdf">Form (includes instructions)</a> &nbsp;
                  | &nbsp; <a href="/survey/form/eia_8a/faqs.cfm">Frequently Asked Questions</a></p>
                                             <a class="show">[+] See more</a>
                <div class="more">
                  <p>Respondents are U.S. coal brokers, coal traders and coal terminals that owned stocks of 10,000 or more tons of coal at the end of the reporting year  and/or exported coal during the reporting year.  Companies that take custody (physical possession) of the coal and transport but never own the coal need not report. </p>
                  <p> Frequency of Collection: Annually<br>
                    Number of Respondents: 94<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation to "Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b)</p>
                </div></td>
              <td><p><a href="/survey/form/eia_8a/form.pdf" class="ico_pdf">PDF</a><br>
                                  </p></td>
              <td><a href="mailto:InfoCoal@eia.gov">Brian Park</a><br>
                (202)  586-5661</td>
            </tr>
            <tr>
              <td><a name="eia-14"></a>EIA-14</td>
              <td><strong>Refiners' Monthly Cost Report </strong> <br>
                <p>Collects data on the weighted cost of crude oil at the regional Petroleum for Administration Defense District (PADD) level at which the crude oil is booked into a refinery. </p>
                <p> <a href="/survey/form/eia_14/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;
                  | &nbsp; <a href="/survey/form/eia_14/faqs.php">Frequently Asked Questions</a></p>

<!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/marketing2017.cfm">Comment on proposed survey form revisions:</a></strong><br />
                  <a href="/survey/frn/petroleum/FRN-60-Day-Marketing-April-3-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_14/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_14/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The resulting statistics are disseminated for use by public and private analysts. Respondents are petroleum refiners. </p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 70<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52; Public Law 94-163   (Energy Policy and Conservation Act), Sec. 507 </p>
                </div></td>
              <td><a href="/survey/form/eia_14/form.xlsx" class="ico_xls">XLS</a><br>
              <a href="/survey/form/eia_14/form.pdf" class="ico_pdf">PDF</a><br>
              <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a>
              </td>
              <td><a href="mailto:elizabeth.scott@eia.gov">Elizabeth Scott</a><br>
                (202) 586-1258 </td>
            </tr>
            <tr>
              <td><a name="eia-20"></a>EIA-20</td>
              <td><strong>Emergency                  Weekly Coal Monitoring Survey for Coal                  Burning Power Producers<br>
                  (formerly Weekly Coal Monitoring Report, Coal Burning Utilities and Independent Power Producers (Standby Form)</strong><br>
                <p> Would be used to collect information to track coal stocks, receipts, and consumption at electric utilities during coal supply disruptions. </p>
                <p> (Instructions now included in the form.) </p>

                              <a class="show">[+] See more</a>
                <div class="more">
                  <p>EIA-20 data would be used to inform the public, the industry, and the Government of aggregate coal data. Respondents would be coal burning power producers.</p>
                  <p>Frequency of Collection: Weekly when implemented<br>
                    Number of Respondents: Standby form, number will be determined   at time of use<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
                </div></td>
              <td><a href="/survey/form/eia_20/form.pdf" class="ico_pdf">PDF</a> <br></td>
              <td><a href="mailto:InfoCoal@eia.gov">Rosalyn Berry</a><br>
                (202)  586-1026</td>
            </tr>
            <tr>
              <td><a name="eia-22m"></a>EIA-22M</td>
              <td><strong>Monthly Biodiesel Production Survey </strong><br>
                <p>Form EIA-22M collects information on biodiesel production at U.S. plants. </p>
                <p> <a href="/survey/form/eia_22m/instructions.pdf" class="ico_pdf">Instructions</a> </p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
                  <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_22m/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_22m/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Information canvassed includes monthly B100 and co-product production, inputs to B100 production, B100 stocks, sales of B100 and blended biodiesel to end users and for resale, and end-use sales of biodiesel for on- and off-road transportation, heating, and other uses and annual plant production capacity. These data contribute to EIA's total energy accounting system and are used to track domestic biodiesel production as well as provide insight into industry production activities and trends. Data are published on a national, regional, and state level for Government and non-Government use. Respondents are producers of biodiesel that meets ASTM D 6751-07B specifications and used for commercial purposes. </p>
                  <p>Frequency of Collection: Monthly <br>
                    Number of Respondents: 135 <br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b); Public Law 109-58 (Energy Policy Act of 2005) </p>
                </div></td>
              <td><a href="https://eiadataxchange-c.force.com">E-file</a><br>
              <a href="/survey/form/eia_22m/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:chris.buckner@eia.gov">Chris Buckner</a> <br>
                (202) 586-6670 </td>
            </tr>
            <tr>
              <td><a name="eia-23l"></a>EIA-23L</td>
              <td><strong>Annual Report of Domestic Oil and Gas Reserves (County Level Version)</strong> <br>
                <p>Collects data on U.S. proved reserves of crude oil and natural gas. These data are used to develop national and regional estimates of proved reserves of domestic crude oil, natural gas, and lease condensate, and to facilitate national energy policy decisions.</p>
                <p> <a href="/survey/form/eia_23l/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; Appendix B. Table of county codes by state  <a href="/survey/form/eia_23l/appendixb.pdf" class="ico_pdf">PDF</a> <a href="/survey/form/eia_23l/appendixb.xlsx" class="ico_xls">XLS</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_23l/faqs.pdf" class="ico_pdf"> Frequently Asked Questions</a> </p>



                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
														<a href="/survey/frn/naturalgas/FRN-30Day-EIA23L-March-3-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_23l/proposed/2015/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_23l/proposed/2015/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p> Data are provided on proved reserves and production of crude oil, natural gas (associated-dissolved and nonassociated), and lease condensate. <!--Respondents are all well operators who produce annually at least 400,000 barrels of crude oil and/or 2 billion cubic feet of gas. These large and mid-size operators report on a field-level basis.--> </p>
                  <p> Frequency of Collection: Annually<br>
                    Number of Respondents: 500<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 15, 5(a), 5(b), 52 </p>
                </div></td>
              <td><a href="/survey/form/eia_23l/rigs.cfm" class="ico_sso">E-file</a><br>
                <a href="/survey/form/eia_23l/form.pdf" class="ico_pdf">PDF</a>
                </td>
              <td><a href="mailto:steven.grape@eia.gov">Steven G. Grape</a><br>
                (202) 586-1868<br>
                (For general form questions or to request a copy, call 1-800-879-1470) </td>
            </tr>


            <tr>
              <td><a name="eia-23s"></a>EIA-23S</td>
              <td><strong>Annual Survey of Domestic Oil and Gas Reserves (Summary Version)</strong> <strong>(Suspended)</strong><br>
                <p>Collects data from a sample of small operators on reserves of crude oil, natural gas, and natural gas liquids.
                  These data are summary reports at a State or geographic subdivision level. </p>
                <p> <a href="/survey/form/eia_23s/instructions.pdf" class="ico_pdf">Instructions</a> </p>

                
                <a class="show">[+] See more</a>
                <div class="more">
                  <p> Frequency of Collection: Annually<br>
                    Number of Respondents: 645<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 15, 5(a), 5(b), 52 </p>
                </div></td>
              <td><a href="/survey/form/eia_23s/form.pdf" class="ico_pdf">PDF</a><br>
                <!--a href="/survey/form/eia_23s/form.xls" class="ico_xls">XLS</a--></td>
              <td><a href="mailto:steven.grape@eia.gov">Steven G. Grape</a><br>
                (202) 586-1868<br>
                </td>
            </tr>


            <tr>
              <td><a name="eia-28"></a>EIA-28</td>
              <td><strong>Financial Reporting System </strong> <strong>(Suspended)</strong><br>

                
                <p> The Energy Information Administration has suspended Form EIA-28, "Financial Reporting System," and will not be collecting 2011 data on the currently approved form.  Historically, The Financial Reporting System (FRS) was designed to permit review of the functional performance of the major U.S. energy-producing companies in total, as well as by specific functions and geographic areas of operation. </p>
                <p> <a href="/survey/form/eia_28/instructions.pdf" class="ico_pdf">Instructions</a> </p>
                <a class="show">[+] See more</a>
                <div class="more">
                                    <p>Redesign of the form has begun and is expected to conclude in late 2012. Data collection is expected to resume in 2013 with the collection of 2012 data, following approval by the Office of Management and Budget.  Please watch the Federal Register for an announcement of the comment period prior to the redesigned form's approval. </p>
                </div></td>
              <td><a href="/survey/form/eia_28/form.pdf" class="ico_pdf">PDF<br>
                </a><a href="/survey/form/eia_28/eia28_ea.pdf" class="ico_pdf">Form EIA-28EA</a><br></td>
              <td><a href="mailto:neal.davis@eia.gov">Neal Davis</a><br>
                (202) 586-6581</td>
            </tr>
            <tr>
              <td><a name="eia-63a"></a><span style="color:#999">EIA-63A</span></td>
              <td><strong>Annual Solar Thermal Collector/Reflector Shipments Report <strong style="color:#000">(Terminated)</strong></strong><br>
                <p>Collects information on shipments of solar thermal collectors. </p>
                <p> <a href="/survey/form/eia_63a/instructions.pdf" class="ico_pdf">Instructions</a> </p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data   are collected by end use and market sector. Collector types include   low-temperature, medium-temperature air, medium-temperature liquid, high   temperature, and other. The resulting statistics are used by public and private   analysts. Respondents are manufacturers, importers, and exporters of solar   thermal collectors. </p>
                  <p> Frequency of Collection: Annually<br>
                    Number of Respondents: 111<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 5(b), 5(a), 52 </p>
                </div></td>
              <td><a href="https://signon.eia.doe.gov/ssoserver/login">E-file</a><br>
                <a href="/survey/form/eia_63a/form.pdf" class="ico_pdf">PDF</a></td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td><a name="eia-63b"></a>EIA-63B</td>
              <td><strong>Monthly/Annual Photovoltaic Module Shipments Report</strong> <br>
                <p>Collects information on shipments of photovoltaic modules/cells. </p>
                <p> <a href="/survey/form/eia_63b/instructions.pdf" class="ico_pdf">Instructions</a> </p>
                                
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data are collected by end use and market sector. Module/cell types include   crystalline silicon, thin film, concentrator, and other. The resulting   statistics are used by public and private analysts. Respondents are   manufacturers, importers, and exporters of photovoltaic modules/cells. </p>
                  <p> Frequency of Collection: Monthly/Annually<br>
                    Number of Respondents: Monthly - 12; Annual - 67<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 5(b), 5(a), 52 </p>
                </div></td>
              <td><a href="https://signon.eia.doe.gov/ssoserver/login">E-file</a><br>
                <a href="/survey/form/eia_63b/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:lolita.jamison@eia.gov">Lolita.Jamison</a><br>
                (202) 586-9567</td>
            </tr>
            <tr>
              <td><a name="eia-63c" id="eia-63c"></a>EIA-63C</td>
              <td><p><strong>Densified  Biomass Fuel Report</strong> <br>
                </p>
                <p>Data collected will be used to estimate densified biomass fuel consumption in the United States, as well as production, sales, and inventory at state, regional, and national levels.</p>
                <p><a href="/survey/form/eia_63c/form_final.xlsx" class="ico_xls"> Form </a> | &nbsp; <a href="/survey/form/eia_63c/instructions_f.xlsx" class="ico_xls">Instructions</a></p><p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><!---<strong>Comment on proposed survey form:</strong><br />
                    <a href="/survey/frn/electricity/electricity2015_12232013.pdf" class="ico_pdf">---><a href="/survey/frn/renewable/renewable2018_10202017.pdf" class="ico_pdf">Federal Register Notice</a> | &nbsp;<a href="/survey/form/eia_63c/proposed/2018/form.xlsx" class="ico_xls">Form </a> | &nbsp; <a href="/survey/form/eia_63c/proposed/2018/instructions.xlsx" class="ico_xls">Instructions</a> &nbsp;| &nbsp;  &nbsp;<a href="/survey/changes/renewables/2018/">Background information</a></p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Form EIA-63C was approved by the Office of Management and Budget (OMB) on August 28, 2015.  The Form will gather information on pellet fuel and other densified biomass fuel production, sales, and inventory levels from approximately 150 operators of U.S. pellet fuel manufacturing facilities. The data collected will be used to estimate densified biomass fuel consumption in the United States, as well as production, sales, and inventory at state, regional, and national levels.</p>
                  <p>The monthly form will tentatively begin data collection on February 1, 2016 for January 2016 data.  A summary of the data will be published on the EIA website and in various EIA publications, including the Monthly Energy Review. Users of the data will include Congress, other government agencies, state governments, business and industry, private analysts and forecasters, and the general public.</p>

                  Frequency of Collection: Monthly<br>
                  Number of Respondents: 150<br>
                  Reporting Requirement: Mandatory <br>
                  Legal Citation:  Federal Power Act, Sec. 202(C), 311; Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(b), 5(a); </div></td>
              <td><a href="https://www.eia4usa.eia.gov/">E-file</a><br>
              <a href="/survey/form/eia_63c/form_final.xlsx" class="ico_xls">XLS</a></td>
              <td><a href="mailto:channele.wirman@eia.gov">Channele Wirman</a><br>202-586-5356</td>
            </tr>
            <tr>
              <td><a name="eia-64a"></a>EIA-64A</td>
              <td><strong>Annual Report of the Origin of Natural Gas Liquids Production </strong> <br>
                <p>Form EIA-64A collects data that are used to estimate natural gas plant liquids production and reserves by State and region.</p>
                <p> <a href="/survey/form/eia_64a/instructions.pdf" class="ico_pdf">Instructions</a> </p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
														<a href="/survey/frn/naturalgas/FRN-30Day-EIA23L-March-3-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_64a/proposed/2015/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_64a/proposed/2015/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data collected are plant and respondent identification, origin of natural gas received, natural gas plant liquids produced, and gas shrinkage resulting from natural gas plant liquids   extraction. The resulting statistics are used by public and private analysts. Respondents are natural gas processing plant operators.</p>
                  <p>Frequency of Collection: Annually<br>
                    Number of Respondents: 527<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
                </div></td>
              <td><a href="/survey/form/eia_64a/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_64a/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:steven.grape@eia.gov">Steven Grape</a><br>
                (202) 586-1868</td>
            </tr>
            <tr>
              <td><a name="eia-111"></a>EIA-111</td>
              <td><strong>Quarterly Electricity Imports and Exports Report</strong> <br>
                <p>Form EIA-111 Collects import/export data from importers and exporters of electricity, border balancing authorities, and entities authorized to export electric energy and to construct, connect, operate or maintain facilities for the transmission of electric energy at an international boundary as required by 10 CFR 205.308 and 205.325.  </p>
                <p> <a href="/survey/form/eia_111/instructions.pdf" class="ico_pdf">Instructions</a> </p>

                <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey forms:</strong><br>
														<a href="/survey/frn/electricity/electricity2018_10202017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_111/proposed/2018/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_111/proposed/2018/form.pdf" class="ico_pdf">Form</a> &nbsp; &nbsp;|&nbsp; &nbsp;<a href="/survey/changes/electricity/2018/">Background&nbsp;information</a> </p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Respondents report monthly data quarterly. These data are used by the Department to track electricity being imported into and exported from the United States, and to furnish decisionmakers with accurate information on which to base trade policy. These data are also used for verifying that Presidential Permit holders have complied with the terms and conditions of the Permits. Data are used by EIA for publications. </p>
                  <p>Frequency of Collection: Quarterly<br>
                    Number of Respondents: 173<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Federal Power Act, Sec. 202(C), 311; Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(b), 5(a); Regulations, 10 CFR 205.302, .303, .304, .308, .322, .325, .327 </p>
                </div></td>
              <td><a href="/survey/form/eia_111/form.pdf" class="ico_pdf">PDF</a><br>
                </td>
              <td><a href="mailto:EIA4USA@eia.gov">Data Collection Team</a> <br>
                1-855-342-4872 <br>
                Monday – Friday, 8:00 a.m. – 6:00 p.m. ET</td>
            </tr>
            <tr>
              <td><a name="eia-176"></a>EIA-176</td>
              <td><strong>Annual Report of Natural and Supplemental Gas Supply and Disposition</strong><br>
                <p>Data collected include the origin of natural gas supplies and the disposition of   natural gas on a State basis. Respondents include natural and synthetic gas   producers, processors, distributors, storage. </p>
                <p> <a href="/survey/form/eia_176/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/eia176.pdf" class="ico_pdf"> Frequently Asked Questions</a></p>


                <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/ngdownstreamforms2018.php">Comment on proposed survey form revisions:</a></strong><br>
                  <a href="/survey/frn/naturalgas/FRN-30-Day-NG-October-27-2017.pdf" class="ico_pdf">Federal Register Notice</a>  &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_176/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_176/proposed/form.pdf" class="ico_pdf">Form</a>
                  </p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data collected are plant and respondent identification, origin of natural gas received, natural gas plant liquids produced, and gas shrinkage resulting from natural gas plant liquids   extraction. The resulting statistics are used by public and private analysts.   Respondents are natural gas processing plant operators. </p>
                  <p>Frequency of Collection: Annually<br>
                    Number of Respondents: 2,000<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
                </div></td>
              <td>
              	<a href="/survey/form/eia_176/efs176.cfm" class="ico_sso">E-file</a><br>
             	<a href="/survey/form/eia_176/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_176/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:jennifer.wade@eia.gov">Jennifer Wade</a><br>(202) 586-4749</td>
            </tr>
            <tr>
              <td><a name="eia-182"></a>EIA-182</td>
              <td><strong>Domestic Crude Oil First Purchase Report</strong><br>
                <p>Collects data on the first marketed price of domestic crude oil streams after production (i.e., wellhead price). </p>
                <p> <a href="/survey/form/eia_182/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;
                  | &nbsp; <a href="/survey/form/eia_182/faqs.php">Frequently Asked Questions</a> </p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/marketing2017.cfm">Comment on proposed survey form revisions:</a></strong><br />
                  <a href="/survey/frn/petroleum/FRN-60-Day-Marketing-April-3-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_182/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_182/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Federal agencies and market analysts incorporate the data in diverse time-series, models, and cost indices. State-level data are useful for estimating current and proposed tax revenues and crude oil production volumes. Corporate planners and industry consultants use the data to forecast market respons. Data are supplied by all firms that acquire domestic crude oil through a first purchase and assume (or retain) ownership of domestic crude oil as it leaves the lease on which it was produced.</p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 87<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52; Public Law 94-163 (Energy Policy and Conservation Act), Sec. 507 </p>
                </div></td>
              <td><a href="/survey/form/eia_182/form.xlsx" class="ico_xls">XLS</a><br>
               <a href="/survey/form/eia_182/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:David.Gatton@eia.gov">David Gatton</a><br>
                (202) 586-5995 </td>
            </tr>

            <!-- <tr>
							<td><a name="eia-191a"></a>EIA-191A</td>
							<td><strong>Annual Underground Gas Storage Report</strong><br />
								<p>Capacity, type and status of natural gas reservoirs are reported by operators of   all underground natural gas storage fields on an annual basis. </p>
								<p> <a href="/survey/form/eia_191a/instructions.pdf" class="ico_pdf">Instructions</a> </p>
								<a class="show">[+] See more</a>
								<div class="more">
									<p>Frequency of Collection: Annually<br />
										Number of Respondents: 122<br />
										Reporting Requirement: Mandatory<br />
										Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
								</div></td>
							<td ><a href="/survey/form/eia_191a/form.pdf" class="ico_pdf">PDF</a><br />
								<a href="/survey/form/eia_191a/form.xls" class="ico_xls">XLS</a></td>
							<td><strong></strong><a href="mailto:sharon.belcher@eia.gov">Sharon Belcher</a><br />
								(202) 586-6119 <br /></td>
						</tr>-->
            <tr>
              <td><a name="eia-191"></a>EIA-191</td>
              <td><strong>Monthly Underground Gas Storage Report </strong><br>
                <p> Working and base gas in reservoirs, injections, withdrawals, and location of   reservoirs are reported by operators of all underground natural gas storage   fields on a monthly basis. <br>
                </p>
                <p> <a href="/survey/form/eia_191/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;  <a href="/survey/form/eia_191/sft_instructions.pdf" class="ico_pdf">Secure File Transfer</a></p>


                <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/ngdownstreamforms2018.php">Comment on proposed survey form revisions:</a></strong><br>
                  <a href="/survey/frn/naturalgas/FRN-30-Day-NG-October-27-2017.pdf" class="ico_pdf">Federal Register Notice</a>  &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_191/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_191/proposed/form.pdf" class="ico_pdf">Form</a></p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 122<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
                </div></td>
              <td><a href="/survey/form/eia_191/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_191/form.pdf" class="ico_pdf">PDF</a></td>
              <td><strong></strong><a href="mailto:sharon.belcher@eia.gov">Sharon Belcher</a><br>
                (202) 586-6119 <br></td>
            </tr>
            <tr>
              <td><a name="eia-411"></a>EIA-411</td>
              <td><strong>Coordinated Bulk Power Supply Program Report </strong><br>
                <p> Collects information about regional electricity supply and demand projections for a 10-year advance period and information on the bulk power transmission system and supporting facilities. </p>
                <p> <a href="/survey/form/eia_411/instructions.pdf" class="ico_pdf">Instructions</a>  </p>
                                <p></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data collected are used to monitor the current status and trends of the electric power industry and to evaluate the future of the industry. Each of the Regional Entities of the North American Electric Reliability Corporation (NERC) is asked to submit Form EIA-411, compiled from data furnished by utilities and other electricity suppliers within their regional areas.</p>
                  <p>Frequency of Collection: Annually<br>
                    Number of Respondents: 8 North American Electric Reliability Corporation Regional Entities report for members participating in electrical system operations and high-voltage bulk power transmission<br>
                    Reporting Requirement: Mandatory for all schedules.  Where subregions exist, a subregional submittal is required.<br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b). </p>
                </div></td>
              <td><a href="/survey/form/eia_411/form.pdf" class="ico_pdf">PDF</a><br>
                </td>
              <td><a href="mailto:Tim.Shear@eia.gov">Tim Shear</a><br>
                (202) 586-0403<br></td>
            </tr>
            <tr>
              <td><a name="eia-412"></a><span style="color:#999">EIA-412</span></td>
              <td><strong>Annual Electric Industry Financial Report</strong> <strong style="color:#000">(Terminated)</strong><br>
                <br>
                <p>Collected income statements, balance sheets, sales and purchases, and transmission line data from various electric industry entities in the United States.</p>
                <p><a href="/survey/form/eia_412/instructions_form.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_412/instructions_form.doc" class="ico_doc">Instructions</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>This form was terminated in 2005 due to budget limitations.  The latest data collected were for 2003.</p>
                </div></td>
              <td><a href="/survey/form/eia_412/instructions_form.pdf" class="ico_pdf">PDF</a><br>
                <a href="/survey/form/eia_412/instructions_form.doc" class="ico_doc">Word</a></td>
              <td><br></td>
            </tr>
            <tr>
              <td><a name="eia-423"></a><span style="color:#999">EIA-423</span></td>
              <td><strong>Monthly Cost and Quality of Fuels for Electric Plants Report </strong> <strong style="color:#000">(Terminated)</strong><br>
                <em><strong>merged into <a href="#eia-923">EIA-923</a></strong></em><br>
                <p>Collected cost and quality data for fossil fuels delivered to nonutility plants to produce electricity.  These plants include independent power producers and combined heat and power (CHP) plants.<br>
                </p>
                <p> <a href="/survey/form/eia_423/instructions_form.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_423/instructions_form.doc" class="ico_doc">Instructions</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>In 2008, EIA consolidated six data collection forms into two forms — the EIA-860 and EIA-923. This benefitted electricity generators because it reduced the number of forms they were required to submit. It benefitted EIA and taxpayers because it streamlined the collection process for better efficiency.</p>
                </div></td>
              <td><a href="/survey/form/eia_423/instructions_form.pdf" class="ico_pdf">PDF</a><br>
                <a href="/survey/form/eia_423/instructions_form.doc" class="ico_doc">Word</a></td>
              <td><br></td>
            </tr>
            <tr>
              <td><a name="eia-457"></a>EIA-457 (A-G)</td>
              <td><strong>Residential Energy Consumption Survey (RECS)</strong><br>
                <p>Collects comprehensive national and regional data on energy use in the residential sector of the economy. For the 2015 RECS, respondents completed the household questionnaire by one of three modes: a computer-assisted personal interview (CAPI), a self-administered paper questionnaire, or a self-administered web questionnaire. The CAPI and paper questionnaires are provided here. The content and presentation for the Web questionnaire was nearly identical to the paper version, although Web respondents were automatically skipped through questions that did not apply to them. Also see: <a href="/consumption/residential/about.cfm">About the RECS</a></p>
                <a class="show">[+] See more including additional cycle years</a>
                <div class="more">
                  <p>Data are used for analyzing and forecasting residential energy consumption. Housing, appliance, and demographic characteristics data are collected via personal interviews with households, and consumption and expenditure billing data are collected from the energy suppliers. End-use intensities are produced for space heating, water heating, air conditioning,   refrigerators, and appliances. Rental agents are contacted by telephone to check   on fuels used in rented units. Surveys were conducted in 1978, 1979, 1980, 1981, 1982, 1984, 1987, 1990, 1993, 1997, 2001,  2005, and 2009. The next survey is scheduled for 2019. </p>
                  <p>Previous cycles                      </p>
                  <ul>
                    <li>2009
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/2009 RECS 457-A Household Survey.pdf" class="ico_pdf" title="2009 RECS 457-A Household Survey">457-A Household Survey</a></li>
                        <li><a href="/survey/form/eia_457/archive/2009 RECS 457-C Rental Agent Questionnaire.pdf" class="ico_pdf" title="2009 RECS 457-C Rental Agent Questionnaire">457-C Rental Agent Questionnaire</a></li>
                        <li><a href="/survey/form/eia_457/archive/2009 RECS 457-D Bottled Gas.pdf" class="ico_pdf" title="2009 RECS 457-D Bottled Gas Form">457-D Bottled Gas Form</a></li>
                        <li><a href="/survey/form/eia_457/archive/2009 RECS 457-E Electricity Usage Form.pdf" class="ico_pdf" title="2009 RECS 457-E Electricity Usage Form">457-E Electricity Usage Form</a></li>
                        <li><a href="/survey/form/eia_457/archive/2009 RECS 457-F Natural Gas Usage Form.pdf" class="ico_pdf" title="2009 RECS 457-F Natural Gas Usage Form">457-F Natural Gas Usage Form</a></li>
                        <li><a href="/survey/form/eia_457/archive/2009 RECS 457-G  Fuel Oil-kerosene Usage Form.pdf" class="ico_pdf" title="2009 RECS 457-G  Fuel Oil-kerosene Usage Form">457-G  Fuel Oil-kerosene Usage Form</a></li>
                        <li></li>
                      </ul>
                    </li>
                    <li>2005
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/2005 RECS 457-A Household Survey.pdf" class="ico_pdf" title="2005 RECS 457-A Household Survey">457-A Household Survey</a></li>
                        <li><a href="/survey/form/eia_457/archive/2005 RECS 457-D Bottled Gas.pdf" class="ico_pdf" title="2005 RECS 457-D Bottled Gas Form">457-D Bottled Gas Form</a></li>
                        <li><a href="/survey/form/eia_457/archive/2005 RECS 457-E Electricity Usage Form.pdf" class="ico_pdf" title="2005 RECS 457-E Electricity Usage Form">457-E Electricity Usage Form</a></li>
                        <li><a href="/survey/form/eia_457/archive/2005 RECS 457-F Natural Gas Usage Form.pdf" class="ico_pdf" title="2005 RECS 457-F Natural Gas Usage Form">457-F Natural Gas Usage Form</a></li>
                        <li><a href="/survey/form/eia_457/archive/2005 RECS 457-G  Fuel Oil-kerosene Usage Form.pdf" class="ico_pdf" title="2005 RECS 457-G  Fuel Oil-kerosene Usage Form">457-G  Fuel Oil-kerosene Usage Form</a></li>
                        <li></li>
                      </ul>
                    </li>
                    <li>2001
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/2001 RECS 457-A Household Survey.pdf" class="ico_pdf" title="2001 RECS 457-A Household Survey">457-A Household Survey</a></li>
                        <li><a href="/survey/form/eia_457/archive/2001 RECS 457-B Nationwide Household Mail Survey.pdf" class="ico_pdf" title="2001 RECS 457-B Nationwide Household Mail Survey">457-B Nationwide Household Mail Survey</a></li>
                        <li><a href="/survey/form/eia_457/archive/2001 RECS 457-C Rental Agent Questionnaire.pdf" class="ico_pdf" title="2001 RECS 457-C Rental Agent Questionnaire">457-C Rental Agent Questionnaire</a></li>
                        <li><a href="/survey/form/eia_457/archive/2001 RECS 457-D Bottled Gas.pdf" class="ico_pdf" title="2001 RECS 457-D Bottled Gas">457-D Bottled Gas</a></li>
                        <li><a href="/survey/form/eia_457/archive/2001 RECS 457-E Electricity Usage Form.pdf" class="ico_pdf" title="2001 RECS 457-E Electricity Usage Form">457-E Electricity Usage Form</a></li>
                        <li><a href="/survey/form/eia_457/archive/2001 RECS 457-F Natural Gas Usage Form.pdf" class="ico_pdf" title="2001 RECS 457-F Natural Gas Usage Form">457-F Natural Gas Usage Form</a></li>
                        <li><a href="/survey/form/eia_457/archive/2001 RECS 457-G Fuel Oil-kerosene Usage Form.pdf" class="ico_pdf" title="2001 RECS 457-G Fuel Oil-kerosene Usage Form">457-G Fuel Oil-kerosene Usage Form</a></li>
                      </ul>
                    </li>
                    <li>1997
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/1997 RECS 457-A Household Survey.pdf" class="ico_pdf" title="1997 RECS 457-A Household Survey">457-A Household Survey</a></li>
                        <li><a href="/survey/form/eia_457/archive/1997 RECS 457-B Nationwide Household Mail Survey.pdf" class="ico_pdf" title="1997 RECS 457-B Nationwide Household Mail Survey">457-B Nationwide Household Mail Survey</a></li>
                        <li><a href="/survey/form/eia_457/archive/1997 RECS 457-C Rental Agent Questionnaire.pdf" class="ico_pdf" title="1997 RECS 457-C Rental Agent Questionnaire">457-C Rental Agent Questionnaire</a></li>
                      </ul>
                    </li>
                    <li>1993
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/1993 RECS 457-A Household Survey.pdf" class="ico_pdf" title="1993 RECS 457-A Household Survey">457-A Household Survey</a></li>
                      </ul>
                    </li>
                    <li>1990
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/1990 RECS 457-A Household Survey.pdf" class="ico_pdf" title="1990 RECS 457-A Household Survey">457-A Household Survey</a></li>
                      </ul>
                    </li>
                    <li>1987
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/1987 RECS 457-B Nationwide Household Mail Survey.pdf" class="ico_pdf" title="1987 RECS 457-B Nationwide Household Mail Survey">457-B Nationwide Household Mail Survey</a></li>
                      </ul>
                    </li>
                    <li>1984
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/1984-85 RECS 457-B Nationwide Household Mail Survey.pdf" class="ico_pdf" title="1984-85 RECS 457-B Nationwide Household Mail Survey">457-B Nationwide Household Mail Survey</a></li>
                      </ul>
                    </li>
                    <li>1982
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/1982-83 RECS 457-B Nationwide Household Mail Survey.pdf" class="ico_pdf" title="1982-83 RECS 457-B Nationwide Household Mail Survey">457-B Nationwide Household Mail Survey</a></li>
                      </ul>
                    </li>
                    <li>1981
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/1981-82 RECS 457-B Nationwide Household Mail Survey.pdf" class="ico_pdf" title="1981-82 RECS 457-B Nationwide Household Mail Survey">457-B Nationwide Household Mail Survey</a></li>
                      </ul>
                    </li>
                    <li>1980
                      <ul>
                        <li><a href="/survey/form/eia_457/archive/1980-81 RECS 457-B Nationwide Household Mail Survey.pdf" class="ico_pdf" title="1980-81 RECS 457-B Nationwide Household Mail Survey">457-B Nationwide Household Mail Survey</a></li>
                      </ul>
                    </li>
                  </ul>
                  <p>Frequency of Collection: Quadrennially<br>
                    Number of Respondents: Number varies with each cycle<br>
                    Reporting Requirement: Voluntary (for households and their   rental agents, landlords, and apartment managers) and Mandatory (for energy   suppliers)<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
                </div></td>
              <td><a href="/survey/form/eia_457/2015_EIA-475A_CAPI.pdf" class="ico_pdf" title="2015 RECS 457-A Household Survey">457-A</a> - computer-assisted personal interview version<br>
                <a href="/survey/form/eia_457/2015_EIA-475A_paper.pdf" class="ico_pdf" title="2015 RECS 457-A Household Survey">457-A</a> - self-administered paper version <br>
                <a href="/survey/form/eia_457/EIA-475A-spanish.pdf" class="ico_pdf" title="2015 RECS 457 spanish version">Spanish version</a>     <br>

                <a href="/survey/form/eia_457/2015_EIA-475C.pdf" class="ico_pdf" title="2015 RECS 457-C Rental Agent Questionnaire">457-C</a><br>
                <a href="/survey/form/eia_457/2015_EIA-457D.pdf" class="ico_pdf" title="2015 RECS 457-D LPGPropane Usage Form">457-D</a><br>
                <a href="/survey/form/eia_457/2015_EIA-457E.pdf" class="ico_pdf" title="2015 RECS 457-E Electricity Usage Form">457-E</a><br>
                <a href="/survey/form/eia_457/2015_EIA-457F.pdf" class="ico_pdf" title="2015 RECS 457-F Natural Gas Usage Form">457-F</a><br>
                <a href="/survey/form/eia_457/2015_EIA-457G.pdf" class="ico_pdf" title="2015 RECS 457-G  Fuel Oil-kerosene Usage Form">457-G</a><br>

                </td>
              <td><a href="mailto:james.berry@eia.gov">James Berry</a><br>
                (202) 586-5543 <br></td>
            </tr>
            <tr>
              <td><a name="eia-757"></a>EIA-757</td>
              <td><strong>Natural Gas Processing Plant Survey </strong><br>
                <p> Detailed plant-level information is collected on the capacity, status, and operations of natural gas processing plants to monitor supply constraints during periods of disruption due to a natural disaster, such as a hurricane. </p>
                <p> <a href="/survey/form/eia_757/instructions.pdf" class="ico_pdf">Instructions</a> </p>



                <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/ngdownstreamforms2018.php">Comment on proposed survey form revisions:</a></strong><br>
                  <a href="/survey/frn/naturalgas/FRN-30-Day-NG-October-27-2017.pdf" class="ico_pdf">Federal Register Notice</a>  &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_757/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_757/proposed/form_a.pdf" class="ico_pdf"> Schedule A </a>&nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_757/proposed/form_b.pdf" class="ico_pdf"> Schedule B </a>
                </p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Schedule A:Detailed plant level information is collected on capacity, status, and operations of all natural gas processing plants in the United States at most every 3 years. </p>
                  <p>Schedule B: In the instance of a hurricane or acute natural disaster, information is collected on the operational status of natural gas processing plants located in the area of supply disruption.   The survey sample is selected based on plant capacity and proximity to the disaster. </p>
                  <p> Frequency of Collection: Schedule A: Every 3 years; Schedule B:   During an emergency situation<br>
                    Number of Respondents: Schedule A: 500; Schedule B: To be   determined<br>
                    Reporting Requirement: Schedule A and B: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b) </p>
                </div></td>
              <td valign="top"><p>Schedule A:<br>
                  <a href="/survey/form/eia_757/form_a.xls" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_757/form_a.pdf" class="ico_pdf">PDF</a></p>
                <p>Schedule B:<br>
                  <a href="/survey/form/eia_757/form_b.xls" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_757/form_b.pdf" class="ico_pdf">PDF</a></p></td>
              <td valign="top"><a href="mailto:michael.kopalek@eia.gov">Michael Kopalek</a><br>
                (202) 586-4001 </td>
            </tr>
            <tr>
              <td><a name="eia-767"></a><span style="color:#999">EIA-767</span></td>
              <td><strong>Steam-Electric Plant Operation and Design Report </strong> <strong style="color:#000">(Terminated)</strong><br>
                <em><strong>merged into <a href="#eia-923">EIA-923</a> and <a href="#eia-860">EIA-860</a><a href="#eia-923"></a></strong></em><br>
                <p>Collected plant configuration, byproduct disposition, financial information, fuel consumption and quality, and air emission standards and controls from all U.S. plants with a total existing or planned organic-fueled or combustible renewable steam electric unit that has a generator nameplate rating of 10 megawatts or larger </p>
                <p> <a href="/survey/form/eia_767/instructions_form.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_767/instructions_form.doc" class="ico_doc">Instructions</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>In 2008, EIA consolidated six data collection forms into two forms — the EIA-860 and EIA-923. This benefitted electricity generators because it reduced the number of forms they were required to submit. It benefitted EIA and taxpayers because it streamlined the collection process for better efficiency.</p>
                </div></td>
              <td><a href="/survey/form/eia_767/instructions_form.pdf" class="ico_pdf">PDF</a><br>
                <a href="/survey/form/eia_767/instructions_form.doc" class="ico_doc">Word</a></td>
              <td><br></td>
            </tr>
            <tr>
              <td><a name="eia-782a"></a>EIA-782A</td>
              <td><strong>Refiners'/Gas Plant Operators' Monthly Petroleum Product Sales Report</strong><br>
                <p>Price and volume data at the State level for 14 petroleum products for various retail and wholesale marketing categories are reported by the universe of refiners and gas plant operators. </p>
                <p> <a href="/survey/form/eia_782a/instructions.pdf" class="ico_pdf">Instructions</a>
                  &nbsp;|&nbsp; <a href="/survey/form/eia_782a/faqs.php">Frequently Asked Questions</a>
                  &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_782a/reference_guide.pdf" class="ico_pdf">Reference Guide (PDF)</a><br> &nbsp;|&nbsp;&nbsp; EIA-782A Exclusionary List <a href="/survey/form/eia_782a/exclusion_list.pdf" class="ico_pdf">PDF</a> <a href="/survey/form/eia_782a/exclusion_list.txt" class="ico_csv">TXT</a>  </p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/marketing2017.cfm">Comment on proposed survey form revisions:</a></strong><br />
                  <a href="/survey/frn/petroleum/FRN-60-Day-Marketing-April-3-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_782a/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_782a/proposed/form.pdf" class="ico_pdf">Form</a> &nbsp;&nbsp;| &nbsp;  <a href="/survey/form/eia_782a/proposed/reference_guide.pdf" class="ico_pdf">Reference Guide</a><br />
                      <a href="/survey/form/eia_782a/proposed/list782a.pdf" class="ico_pdf">Exclusionary List</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>This information is published at various aggregation   levels and is used by EIA to perform analyses and make projections related to energy supplies, demand, and prices.Form EIA-782A respondents include all refiners and gas plant operators. </p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 100<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration   Act of 1974), Sec. 13(b), 5(a), 5(b), 52; Public Law 94-163 (Energy Policy and   Conservation Act), Sec. 507; Public Law 102-486 (Energy Policy Act of 1992), Sec. 407(a)(3) </p>
                </div></td>
              <td>
                <a href="/survey/form/eia_782a/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_782a/form.pdf" class="ico_pdf">PDF</a><br>
                <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a></td>
              <td><a href="mailto:maureen.klein@eia.gov">Maureen Klein</a> <br>
                (202) 586-8013 </td>
            </tr>
            <tr>
              <td><a name="eia-782b"></a>EIA-782B</td>
              <td><strong>Resellers'/Retailers' Monthly Petroleum Product Sales Report </strong><strong>(Suspended)</strong><br>
                <p>Price and volume data at the State level for gasoline, No. 2 distillate, propane, and residual fuel are reported by a sample of distillate fuel oil resellers and retailers, motor gasoline wholesalers, and residual fuel oil resellers and retailers. </p>
                <p><a href="/survey/form/eia_782b/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_782b/reference_guide.pdf" class="ico_pdf"> Reference Guide (PDF)</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_782b/exclusion_list.pdf" class="ico_pdf">EIA-782B Exclusionary List</a> </p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>This information is published at various aggregate levels and is used by EIA to perform analyses and make   projections related to energy supplies, demand, and prices. Form EIA-782B is   collected from a sample of distillate fuel oil resellers and retailers, motor gasoline wholesalers, and residual fuel oil resellers and retailers. </p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 2,000<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration   Act of 1974), Sec. 13(b), 5(a), 5(b), 52; Public Law 94-163 (Energy Policy and   Conservation Act), Sec. 507; Public Law 102-486 (Energy Policy Act of 1992), Sec. 407(a)(3) </p>
                </div></td>
              <td>
                  <a href="/survey/form/eia_782b/form.xls" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_782b/form.pdf" class="ico_pdf">PDF</a><br>
                  <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a></td>
              <td><a href="mailto:maureen.klein@eia.gov">Maureen Klein</a> <br>
                (202) 586-8013 </td>
            </tr>
            <tr>
              <td><a name="eia-782c"></a>EIA-782C</td>
              <td><strong>Monthly Report of Prime Supplier Sales of Petroleum Products Sold for Local   Consumption</strong> <br>
                <p> Prime supplier sales of selected petroleum products into the local markets of ultimate consumption are reported by refiners, gas plant operators, importers, petroleum product resellers, and petroleum product retailers that produce, import, or transport product across State boundaries and local marketing areas and sell the product to local distributors, local retailers, or end users. </p>
                <p> <a href="/survey/form/eia_782c/instructions.pdf" class="ico_pdf">Instructions</a>
                  &nbsp;|&nbsp; <a href="/survey/form/eia_782c/faqs.php">Frequently Asked Questions</a>
                  &nbsp;|&nbsp;&nbsp; EIA-782C Exclusionary List <a href="/survey/form/eia_782c/exclusion_list.pdf" class="ico_pdf">PDF</a>
                  <a href="/survey/form/eia_782c/exclusion_list.txt" class="ico_csv">TXT</a> </p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/marketing2017.cfm">Comment on proposed survey form revisions:</a></strong><br />
                  <a href="/survey/frn/petroleum/FRN-60-Day-Marketing-April-3-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_782c/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_782c/proposed/form.pdf" class="ico_pdf">Form</a>  &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_782c/proposed/list782c.pdf" class="ico_pdf">Exclusionary List</a>  </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>This information is used by EIA to perform analyses and make projections related to   energy supplies and demand.A firm that produces, imports, or transports product   across State boundaries and local marketing areas and sells the product to local   distributors, local retailers, or end users must complete Form   EIA-782C.Respondents include refiners, gas plant operators, importers, petroleum   product resellers, and petroleum product retailers. </p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 195<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy   Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52; Public Law 94-163   (Energy Policy and Conservation Act), Sec. 507 </p>
                </div></td>
              <td>
                  <a href="/survey/form/eia_782c/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_782c/form.pdf" class="ico_pdf">PDF</a><br>
                  <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a>
                  </td>
              <td><a href="mailto:maureen.klein@eia.gov">Maureen Klein</a> <br>
                (202) 586-8013 </td>
            </tr>

            <tr>
              <td><a name="eia-800"></a>EIA-800</td>
              <td><strong>Weekly Refinery and Fractionator Report</strong><br>
                <p> Input and stocks of refinery feedstocks as well as inputs, production, and stocks of selected finished petroleum products are collected from a sample of operators of petroleum refineries and fractionators. </p>
                <p> <a href="/survey/form/eia_800/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/refinery.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
										<a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_800/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_800/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Collects data on the operations of petroleum refineries and   fractionators.Data include input and stocks of refinery feedstocks and net   production and stocks of selected finished petroleum products. The resulting   statistics are used by public and private analysts.Data are collected from a   sample of operators of petroleum refineries and fractionators. </p>
                  <p>Frequency of Collection:Weekly<br>
                    Number of Respondents: 129<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation:Public Law 93-275 (Federal Energy Administration   Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
                </div></td>
              <td>
              <a href="/survey/form/eia_800/form.xlsx" class="ico_xls">XLS</a><br>
              <a href="/survey/form/eia_800/form.pdf" class="ico_pdf">PDF</a><br>
               <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a>
              </td>
              <td><a href="mailto:robert.merriam@eia.gov">Robert Merriam</a> <br>
                (202) 586-4615</td>
            </tr>
            <tr>
              <td><a name="eia-801"></a>EIA-801</td>
              <td><strong>Weekly Bulk Terminal Report </strong> <strong>(Discontinued)</strong> <br>
                <p> End-of-week stocks levels of selected finished petroleum products which include NGPLs and LRGs (including propane/propylene), fuel ethanol, finished motor gasoline, motor gasoline blending components, kerosene-type jet fuel, kerosene, distillate fuel oil by sulphur content, residual fuel oil, and asphalt and road oil are collected from a sample of bulk terminal operators on a Petroleum Administration for Defense (PAD) District and sub-PAD District basis. </p>
                <!--p> <a href="/survey/form/eia_801/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp;
			<a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a></p-->

                                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The resulting statistics are used by public and private                 analysts.Data are collected from a sample of bulk terminal                 operators on a Petroleum Administration for Defense (PAD) District                 and sub-PAD District basis.</p>
                  <p> Frequency of Collection: Weekly<br>
                    Number of Respondents: 737<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal                 Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
                </div></td>
              <td><!--a href="/survey/form/eia_801/form.pdf" class="ico_pdf">PDF</a--> <br>
                <!--a href="/survey/form/eia_801/form.xls" class="ico_xls">XLS<br />
								</a--><!--a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a--></td>
              <td><a href="mailto:robert.merriam@eia.gov">Robert Merriam</a> <br>
                (202) 586-4615</td>
            </tr>
            <tr>
              <td><a name="eia-802"></a>EIA-802</td>
              <td><strong>Weekly Product Pipeline Report</strong> <br>
                <p>End-of-week stock levels of selected petroleum products which include stocks of NGPLs and LRGs (including propane/propylene), fuel ethanol, finished motor gasoline, motor gasoline blending components, kerosene-type jet fuel, kerosene, and distillate fuel oil by sulphur content are collected from a sample of petroleum product pipeline companies on a PAD and sub-PAD District basis.</p>
                <p><a href="/survey/form/eia_802/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/product_pipeline.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_802/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_802/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The resulting statistics are used by public and private analysts.Data are collected from a sample of petroleum product pipeline companies on a PAD and sub-PAD District basis. </p>
                  Frequency of Collection: Weekly <br>
                  Number of Respondents: 46 <br>
                  Reporting Requirement: Mandatory <br>
                  Legal Citation: Public Law 93-275 (Federal
                  Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</div></td>
              <td>
                <a href="/survey/form/eia_802/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_802/form.pdf" class="ico_pdf">PDF</a><br>
              	<a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a>
                </td>
              <td><a href="mailto:robert.merriam@eia.gov">Robert Merriam</a><br>
                (202) 586-4615</td>
            </tr>
            <tr>
              <td><a name="eia-803"></a>EIA-803</td>
              <td><strong>Weekly Crude Oil Stocks Report</strong> <br>
                <p>End-of-week crude oil stocks by PAD District, stocks of Alaskan crude oil in transit by water and stocks at Cushing, Oklahoma; are reported by a sample of gathering and trunk pipeline companies (interstate, intrastate, and intracompany pipelines), terminal operators, storers of crude oil (except refineries), and transporters of Alaskan crude oil by water.</p>
                <p> <a href="/survey/form/eia_803/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/storage_capacity.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>


                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			<a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_803/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_803/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data are reported on a custody basis. The resulting statistics are used by public and private analysts. Respondents are gathering and trunk pipeline companies (interstate, intrastate, and intracompany pipelines), terminal operators, storers of crude oil (except refineries), and transporters of Alaskan crude oil by water. Data are reported by a sample of companies that carry or store 1,000 barrels or more of crude oil. </p>
                  <p><a href="/survey/faqs/storage_capacity.cfm"></a> Frequency of Collection: Weekly <br>
                    Number of Respondents: 75 <br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
                </div></td>
              <td>
                <a href="/survey/form/eia_803/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_803/form.pdf" class="ico_pdf">PDF</a><br>
                <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a>
                </td>
              <td><a href="mailto:robert.merriam@eia.gov">Robert Merriam</a> <br>
                (202) 586-4615</td>
            </tr>
            <tr>
              <td><a name="eia-804"></a>EIA-804</td>
              <td><strong>Weekly Imports Report</strong> <br>
                <p> Imports of crude oil, (including imports for delivery to the SPR), NGPLs and LRGs (including propane/propylene), fuel ethanol, finished motor gasoline, motor gasoline blending components, kerosene-type jet fuel, kerosene, distillated fuel oil by sulphur content, residual fuel oil, and other petroleum products are provided by a sample of importers on a PAD and sub-PAD district. </p>
                <p> <a href="/survey/form/eia_804/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/imports.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_804/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_804/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The resulting statistics are used by public and private analysts.These data are provided by a sample of importers of record who import petroleum into the 50 States and the District of Columbia. </p>
                  <p>Frequency of Collection: Weekly<br>
                    Number of Respondents: 107<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal                 Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </p>
                </div></td>
              <td>

                  <a href="/survey/form/eia_804/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_804/form.pdf" class="ico_pdf">PDF</a><br>
                  <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a></td>
              <td><a href="mailto:robert.merriam@eia.gov">Robert Merriam</a> <br>
                (202) 586-4615</td>
            </tr>
            <tr>
              <td><a name="eia-805"></a>EIA-805</td>
              <td><strong>Weekly Bulk Terminal and Blender Report </strong> <br>
                <p>Input and production of oxygenates, renewable fuels (including fuel ethanol), NGPLs and LRGs, finished motor gasoline, motor gasoline blending components, kerosene-type jet fuel, kerosene, and distillate fuel oil by sulfur content, are collected from a sample of terminal blenders.</p>
                <p> <a href="/survey/form/eia_805/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/terminal_blenders.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_805/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_805/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The resulting statistics are used by public and private analysts to monitor the supply of finished motor gasoline and motor gasoline blending components. Respondents are a sample of operators of motor gasoline blending plants.</p>
                  <p>Frequency of Collection: Weekly<br>
                    Number of Respondents: 737<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
                  <a href="/survey/form/eia_805/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_805/form.pdf" class="ico_pdf">PDF</a><br>
                  <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a></td>
              <td><a href="mailto:robert.merriam@eia.gov">Robert Merriam</a> <br>
                (202) 586-4615</td>
            </tr>
            <tr>
              <td><a name="eia-809"></a>EIA-809</td>
              <td><strong>Weekly Oxygenate Report</strong> <br>
                <p> Denatured and undenatured fuel ethanol production and end-of-week stocks are reported by a sample of all facilities that produce fuel ethanol.</p>
                <p> <a href="/survey/form/eia_809/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/oxygenate.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_809/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_809/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Respondents are all operators of facilities that produce fuel ethanol located in the 50 States and the District of Columbia.</p>
                  <p>Frequency of Collection: Weekly<br>
                    Number of Respondents: 150<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
                  <a href="/survey/form/eia_809/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_809/form.pdf" class="ico_pdf">PDF</a><br>
                  <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a></td>
              <td><a href="mailto:robert.merriam@eia.gov">Robert Merriam</a> <br>
                (202) 586-4615</td>
            </tr>
            <tr>
              <td><a name="eia-810"></a>EIA-810</td>
              <td><strong>Monthly Refinery Report </strong> <br>
                <p>Collects information regarding the balance between the supply (beginning stocks, receipts, and production) and disposition (inputs, shipments, fuel use and losses, and ending stocks) of crude oil and refined products located at refineries. </p>
                <p> <a href="/survey/form/eia_810/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/refinery.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_810/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_810/proposed/form.pdf" class="ico_pdf">Form</a> </p-->


                <a class="show">[+] See more</a>
                <div class="more">
                  <p>In addition, storage capacity is collected for working, shell in operation, and shell idle for several major product groupings. The resulting statistics are used by public and private analysts. Data are provided by all operating and idle refineries, as well as blending terminals located in the 50 States, District of Columbia, Puerto Rico, Virgin Islands, Guam, and other U.S. possessions.</p>
                  <p>Frequency of Collection: Monthly <br>
                    Number of Respondents: 142 <br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
                <a href="/survey/form/eia_810/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_810/form.pdf" class="ico_pdf">PDF</a><br>
                 <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a>
                </td>
              <td><a href="mailto:julie.harris@eia.gov">Julie Harris</a><br>
                (202) 586-6281</td>
            </tr>
            <tr>
              <td><a name="eia-812"></a>EIA-812</td>
              <td><strong>Monthly Product Pipeline Report </strong> <br>
                <p> End-of-month stock levels and movements of petroleum products transported by pipeline are reported on a custody basis by all product pipeline companies. </p>
                <p> <a href="/survey/form/eia_812/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/product_pipeline.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/812tutorial/index.html"> Tutorial </a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_812/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_812/proposed/form.pdf" class="ico_pdf">Form</a> </p-->


                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data include stocks of products in pipelines and working tanks, as well as movements of products between PAD Districts. The resulting statistics are used by public and private analysts.Data are reported on a custody basis by all product pipeline companies.</p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 86<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal                 Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
                <a href="/survey/form/eia_812/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_812/form.pdf" class="ico_pdf">PDF</a><br>
                <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a>
                </td>
              <td><a href="mailto:john.duff@eia.gov">John Duff</a><br>
                (202) 586-9612</td>
            </tr>
            <tr>
              <td><a name="eia-813"></a>EIA-813</td>
              <td><strong>Monthly Crude Oil Report</strong> <br>
                <p> Collects information on end-of-month stocks of crude oil, by PAD District, at pipeline/tank farms, in Cushing Oklahoma and Alaskan crude oil in transit by water.  In addition, receipts of domestic crude oil by the Strategic Petroleum Reserve, movements of crude oil by pipeline between PAD Districts and storage capacity are collected for working, shell in operation, and shell idle. </p>
                <p> <a href="/survey/form/eia_813/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/storage_capacity.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>


                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_813/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_813/proposed/form.pdf" class="ico_pdf">Form</a> </p-->


                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The resulting statistics are used by public and private analysts.  Data are collected from all companies which carry or store 1,000 barrels or more of crude oil. Respondents are gathering and trunk pipeline companies (including interstate, intrastate, and intracompany pipelines), terminal operators, storers of crude oil (except refineries), and companies transporting crude oil by water in the 50 States and the District of Columbia.</p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 250<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal                 Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
                  <a href="/survey/form/eia_813/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_813/form.pdf" class="ico_pdf">PDF</a><br>
                  <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a></td>
              <td><a href="mailto:mark.mayo@eia.gov">Mark Mayo</a><br>
                (202) 586-3536</td>
            </tr>
            <tr>
              <td><a name="eia-814"></a>EIA-814</td>
              <td><strong>Monthly Imports Report </strong> <br>
                <p>Collects data on imports of crude oil and/or petroleum products. The resulting statistics are used by public and private analysts. </p>
                <p> <a href="/survey/form/eia_814/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/imports.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_814/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_814/proposed/form.pdf" class="ico_pdf">Form</a> </p-->


                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data are filed by each importer of record who imports crude oil or petroleum products into the 50 States, the District of Columbia, Puerto Rico, the Virgin Islands other U.S. possessions, and Foreign Trade Zones located in the 50 States and DC; and from Puerto Rico, the Virgin Islands, and U.S. possessions into the 50 States and the District of Columbia. </p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 396<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
                  <a href="/survey/form/eia_814/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_814/form.pdf" class="ico_pdf">PDF</a><br>
                  <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a></td>
              <td><a href="mailto:john.duff@eia.gov">John Duff</a><br>
                (202) 586-9612</td>
            </tr>
            <tr>
              <td><a name="eia-815"></a>EIA-815</td>
              <td><strong>Monthly Bulk Terminal and Blender Report</strong> <br>
                <p>Collects information on the balance between the supply (beginning stocks, receipts, and production), and disposition (inputs, shipments, fuel use and losses, and ending stocks) of refined products and renewable fuels from bulk terminals.  In addition, storage capacity is collected for working, shell in operation, and shell idle for several major product groupings.</p>
                <p> <a href="/survey/form/eia_815/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/terminal_blenders.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>


                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_815/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_815/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p> The resulting statistics are used by public and private analysts.  Respondents are operators of bulk terminals located in the 50 States, the District of Columbia, Puerto Rico, the Virgin Islands, Guam, and other U.S. possessions.  Bulk terminals are defined as primarily used for storage, marketing, and often blending of petroleum products and renewable fuels with a total bulk shell storage capacity of 50,000 barrels or more, and/or receives petroleum products by tanker, barge, or pipeline.</p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 1473<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal                 Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
                  <a href="/survey/form/eia_815/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_815/form.pdf" class="ico_pdf">PDF</a><br>
                  <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a></td>
              <td><a href="mailto:mark.mayo@eia.gov">Mark Mayo</a><br>(202) 586-3536</td>
            </tr>
            <tr>
              <td><a name="eia-816"></a>EIA-816</td>
              <td><strong>Monthly Natural Gas Liquids Report</strong> <br>
                <p> Collects information regarding the balance between the supply (beginning stocks, receipts, and production) and disposition (input, shipments, fuel use and losses, and ending stocks) of natural gas liquids. </p>
                <p> <a href="/survey/form/eia_816/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_816/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;<a href="/survey/form/eia_816/proposed/form.pdf" class="ico_pdf">Form</a></p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>In addition, conversion of normal butane to isobutane at isomerization plants is also reported. The data are used to report aggregate statistics on, and conduct analyses of, the operation of U.S. natural gas processing plants and fractionators. Data are reported by operators of all facilities designed to extract liquid hydrocarbons from a natural gas stream (natural gas processing plants) and/or to separate a liquid hydrocarbon stream into its component products (fractionators).</p>
                  <p>Frequency of Collection: Monthly <br>
                    Number of Respondents: 426<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal                 Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
                  <a href="/survey/form/eia_816/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_816/form.pdf" class="ico_pdf">PDF</a><br>
                  <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a></td>
              <td><a href="mailto:sasha.abdalla@eia.gov">Sasha Abdalla</a><br>
                (202) 287-6323</td>
            </tr>
            <tr>
              <td><a name="eia-817"></a>EIA-817</td>
              <td><strong>Monthly Tanker and Barge Movement Report</strong> <br>
                <p>Shipments of crude oil and petroleum products between PAD Districts are reported by all companies that have custody of crude oil or petroleum products transported by tanker or barge.</p>
                <p> <a href="/survey/form/eia_817/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>


                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_817/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_817/proposed/form.pdf" class="ico_pdf">Form</a> </p-->


                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Also, companies that have custody of crude oil or petroleum products originating from a PAD District and transported to the Panama Canal with the intent that the crude oil or petroleum products be further transported to another PAD District must report. The information is used in computing domestic demand for petroleum products by PAD Districts and to forecast short-term petroleum demand. Respondents are all companies that have custody of crude oil or petroleum products transported by tanker or barge between PAD Districts. </p>
                  <p>Frequency of Collection: Monthly <br>
                    Number of Respondents: 35<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation:  Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
               <a href="/survey/form/eia_817/form.xlsx" class="ico_xls">XLS</a><br>
               <a href="/survey/form/eia_817/form.pdf" class="ico_pdf">PDF</a><br>
                <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a>
               </td>
              <td><a href="mailto:jennifer.barrick@eia.gov">Jennifer Barrick</a><br>
                (202) 586-6254</td>
            </tr>
            <tr>
              <td><a name="eia-819"></a>EIA-819</td>
              <td><strong>Monthly Oxygenate Report </strong> <br>
                <p>Collects information on fuel ethanol production capacity (Nameplate), fuel ethanol production, ending stocks, gasoline blending at fuel ethanol plants and production and ending stocks of other oxygenates and storage capacity of fuel ethanol.</p>
                <p> <a href="/survey/form/eia_819/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/oxygenate.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>


                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_819/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_819/proposed/form.pdf" class="ico_pdf">Form</a> </p-->


                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The resulting statistics are used by public and private analysts. Respondents are all facilities that produce (manufacture or distill) oxygenates, including ethanol plants, MTBE plants, petrochemical plants, and refineries that produce oxygenates as part of their operations located in the 50 States and the District of Columbia.</p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 202<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
                  <a href="/survey/form/eia_819/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_819/form.pdf" class="ico_pdf">PDF</a><br>
                  <a href="/survey/form/pedro/index.html" class="ico_pedro">PEDRO</a></td>
              <td><a href="mailto:chris.buckner@eia.gov">Chris Buckner</a><br>
                (202) 586-6670</td>
            </tr>
            <tr>
              <td><a name="eia-820"></a>EIA-820</td>
              <td><strong>Annual Refinery Report</strong> <br>
                <p>Collects data on: fuel, electricity, and steam purchased for consumption at the refinery; refinery receipts of crude oil by method of transportation; current and projected capacities for atmospheric crude oil distillation, downstream charge, and production capacities. </p>
                <p> <a href="/survey/form/eia_820/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/refinery.cfm"> Frequently Asked Questions</a> &nbsp;|&nbsp;&nbsp; <a href="/petroleum/supply/monthly/pdf/psmdefs.pdf"> Definitions</a>  &nbsp;|&nbsp;&nbsp; <a href="/survey/faqs/petguidelinkingdata.pdf"> Guide to Linking Data</a></p>


                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br />
																			 <a href="/survey/frn/petroleum/FRN-30-Day-Supply-May-11-2016.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_820/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_820/proposed/form.pdf" class="ico_pdf">Form</a> </p-->


                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data are used to conduct analyses of the operation of U.S. petroleum refineries. Respondents are operators of all operating and idle petroleum refineries (including new refineries under construction) and refineries shut down during the previous year, located in the 50 States, the District of Columbia, Puerto Rico, the Virgin Islands, Guam, and other U.S. possessions. </p>
                  <p>Frequency of Collection:  Annually<br>
                    Number of Respondents: 151<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td><a href="/survey/form/eia_820/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_820/form.pdf" class="ico_pdf">PDF</a> <br></td>
              <td><a href="mailto:julie.harris@eia.gov">Julie Harris</a><br>
                (202) 586-6281</td>
            </tr>
            <tr>
              <td><a name="eia-821"></a>EIA-821</td>
              <td><strong>Annual Fuel Oil and Kerosene Sales Report</strong><br>
                <p> Sales of distillate and residual fuel oils and kerosene by end use and state of destination are reported by a sample of fuel oil dealers in the 50 States and the District of Columbia.  </p>
                <p> <a href="/survey/form/eia_821/instructions.pdf" class="ico_pdf">Instructions</a>
                  &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_821/faqs.php">Frequently Asked Questions</a>
                  &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_821/reference_guide.pdf" class="ico_pdf"> Reference Guide </a> </p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/marketing2017.cfm">Comment on proposed survey form revisions:</a></strong><br />
                  <a href="/survey/frn/petroleum/FRN-60-Day-Marketing-April-3-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_821/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_821/proposed/form.pdf" class="ico_pdf">Proposed Form</a><br />
                  <a href="/survey/form/eia_821/proposed/reference_guide.pdf" class="ico_pdf">Reference Guide</a>  </p-->


                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data are published and used by EIA to determine current and projected fuel oil needs on national, regional, and state levels. </p>
                  <p>Frequency of Collection: Annually <br>
                    Number of Respondents: 3,055 <br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td><a href="/survey/form/eia_821/form.xls" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_821/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:daniel.walzer@eia.gov">Daniel Walzer</a><br>
                (202) 586-3511</td>
            </tr>
            <tr>
              <td><a name="eia-826"><span style="color:#999">EIA-826</span></a></td>
              <td><p><strong>Monthly Electric Utility Sales and Revenue Report with State Distributions (Terminated)</strong><br>
                  <em>merged into <a href="#eia-861m">EIA-861M </a></em><br>
                </p>
                <p>Collects information from utilities and nonutility companies that sell or deliver electric power to end users, including electric utilities, energy service providers, and distribution companies. Data collected include retail sales and revenue for all end-use sectors (residential, commercial, industrial and transportation).</p>
                                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data from this form appear in the various EIA information products and are used by public and private analysts to monitor the current status and trends of the electric power industry and to evaluate the future of the industry. The Form EIA-826 is completed by a sample of electric utilities, energy service providers, and distribution companies that sell or distribute electric power to end users chosen from the respondent frame of the <a href="#eia-861">Form EIA-861</a>, Annual Electric Power Industry Report. <a href="#eia-861">Form EIA-861</a> collects retail sales of electricity and associated revenue from all electric utilities, energy service providers and distribution companies in the United States on an annual basis.</p>
                  <p>Survey respondents should submit data electronically                 using <a href="https://signon.eia.doe.gov/ssoserver/login">EIA’s secure Internet data collection system</a>. Not registered or having technical problems? Email <a href="mailto:EIA-826@eia.gov">EIA-826@eia.gov</a>.</p>
                  <p>Frequency of Collection: Monthly <br>
                    Number of Respondents: 500<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public  Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b).</p>
                </div></td>

              <td><a href="/survey/form/eia_826/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="https://signon.eia.doe.gov/ssoserver/login">E-file</a><br>
               <a href="/survey/form/eia_826/form.pdf" class="ico_pdf">PDF</a></td>
              <td></td>
            </tr>
            <tr>
              <td><a name="eia-846"></a>EIA-846(A,B)</td>
              <td><strong>Manufacturing Energy Consumption Survey (MECS)</strong> <br>
                <p> Collect information on energy consumption and, energy usage patternsof the manufacturing sector of the U.S. economy. The information from this survey is used to publish aggregate statistics on the consumption of energy for fuel and nonfuel purposes, as well as certain energy-related issues such as energy prices, on-site electricity generation, purchases of electricity from utilities and nonutilities, and, occasionally, the capability to switch fuels. Also see: <a href="/consumption/manufacturing/about.cfm">About the MECS</a></p>

                
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Since 1991,                 the survey has also collected information on end users of energy,                 participation in energy management programs, and penetration of                 new technologies.  Respondents are a sample of manufacturing                 establishments.</p>
                  <p>Previous editions:</p>
                  <ul>
                    <li><a href="/emeu/mecs/mecs2006/forms2006.html">2006</a></li>
                    <li><a href="/emeu/mecs/mecs2002/forms2002/mecs_forms.html">2002</a></li>
                    <li><a href="/emeu/mecs/mecs_forms.html">1998</a></li>
                  </ul>
                  <p>Frequency of Collection: Quadrennially<br>
                    Number of Respondents: 15,500<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal                 Energy Administration Act of 1974), Sec. 13(b), 5(b), 5(a), and                 52; Public Law 95-91 (Department of Energy Organization Act, Sec.                 205(i)</p>
                </div></td>
              <td><p><a href="/survey/form/eia_846/form_a.pdf" class="ico_pdf">EIA-846A</a><br>
                  <a href="/survey/form/eia_846/form_b.pdf" class="ico_pdf">EIA-846B</a><br>
                                  </p></td>
              <td><p>                  <a href="mailto:thomas.lorenz@eia.gov">Tom Lorenz</a><br>
                  (202) 586-3442<br>
                </p></td>
            </tr>
            <tr>
              <td><a name="eia-851a"></a>EIA-851A</td>
              <td><strong>Domestic Uranium Production Report (Annual)</strong> <br>
                <p>Collects data on uranium milling and processing, uranium feed sources, employment, drilling, expenditures (for drilling, production ,and land/other),                 and uranium mining. The data are used by public and private                 analysts to monitor the domestic uranium mining and milling industry.</p>
                <p><a href="/survey/form/eia_851a/instructions.pdf" class="ico_pdf">Instructions</a></p>
                <p></p>
                 <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form:</strong><br>
									 <a href="/survey/frn/uranium/2017-23872.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_851a/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_851a/proposed/form.pdf" class="ico_pdf"> Form </a>&nbsp;&nbsp;| &nbsp;<a href="/survey/changes/uranium/2018">More detailed information&nbsp;</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Form EIA-851A is completed by uranium producers and firms with uranium exploration, drilling, mining, and reclamation activities in the U.S. (that is, within the 50 States, District of Columbia, Puerto Rico, the Virgin Islands, Guam, and other U.S. possessions) during the survey year.</p>
                  <p>Frequency of Collection: Annually <br>
                    Number of Respondents: 76<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td><a href="/survey/form/eia_851a/form.pdf" class="ico_pdf">PDF</a><br></td>
              <td><a href="mailto:Tim.Shear@eia.gov">Tim Shear</a><br>
                (202) 586-0403</td>
            </tr>
            <tr>
              <td><a name="eia-851q"></a>EIA-851Q</td>
              <td><strong>Domestic Uranium Production Report (Quarterly) </strong> <br>
                <p>Collects data on monthly uranium production and sources (mines and other). The data are used by public and private analysts to monitor the domestic uranium in-situ-leach and milling industry. U.S. uranium producers report on the EIA-851Q.</p>
                <p><a href="/survey/form/eia_851q/instructions.pdf" class="ico_pdf">Instructions</a></p>
                <p></p>
               <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form:</strong><br>
									<a href="/survey/frn/uranium/2017-23872.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_851q/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_851q/proposed/form.pdf" class="ico_pdf"> Form </a>&nbsp;&nbsp;| &nbsp;<a href="/survey/changes/uranium/2018">More detailed information&nbsp;</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Frequency of Collection: Quarterly<br>
                    Number of Respondents: 15<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td><a href="/survey/form/eia_851q/form.pdf" class="ico_pdf">PDF</a><br></td>
              <td><a href="mailto:Tim.Shear@eia.gov">Tim Shear</a><br>
                (202) 586-0403</td>
            </tr>
            <tr>
              <td><a name="eia-856"></a>EIA-856</td>
              <td><strong>Monthly Foreign Crude Oil Acquisition Report </strong> <br>
                <p> Costs of foreign crude oil acquired for importation into the United States, its territories and possessions are reported by all firms reporting previously on Form ERA-51, "Transfer Pricing Report," as of June 1982, and all other firms importing 500,000 barrels of foreign crude oil during the report month. </p>
                <p> <a href="/survey/form/eia_856/instructions.pdf" class="ico_pdf">Instructions</a>
                  &nbsp;|&nbsp; <a href="/survey/form/eia_856/faqs.php">Frequently Asked Questions</a>
                  &nbsp;|&nbsp;&nbsp;<a href="/survey/form/eia_856/eia856appa.pdf">Appendix A Crude Stream Codes</a> <br>
                  &nbsp;|&nbsp;&nbsp;<a href="/survey/form/eia_856/eia856appb.pdf">Appendix B U.S. Port Codes</a>
                </p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/marketing2017.cfm">Comment on proposed survey form revisions:</a></strong><br />
                  <a href="/survey/frn/petroleum/FRN-60-Day-Marketing-April-3-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_856/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_856/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p> These data are used as follows: to calculate price indices by the Bureau of Labor Statistics; in analyses of consumption, production, and prices of fuels worldwide; and in modeling and forecasting. Data collected include crude oil transactions, country crude code, crude type, gravity, date of loading/landing, port of destination, vessel, volume purchased, purchase price, other costs, landed cost, number of days credit (reporting is optional), and name of vendor. </p>

                  <p>Frequency of Collection: Monthly <br>
                    Number of Respondents: 43<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52; Public Law 94-163 (Energy Policy and Conservation Act), Sec. 252, 253, 254 and 507</p>
                </div></td>
              <td><a href="/survey/form/eia_856/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_856/form.pdf" class="ico_pdf">PDF</a> <br></td>
              <td><a href="mailto:elizabeth.scott@eia.gov">Elizabeth Scott</a><br>
                (202) 586-1258</td>
            </tr>
            <tr>
              <td><a name="eia-857"></a>EIA-857</td>
              <td><strong>Monthly Report of Natural Gas Purchases and Deliveries to Consumers</strong> <br>
                <p>Volume and cost data on natural gas delivered to residential, commercial, and industrial consumers are reported by a sample of natural gas          companies that deliver to consumers in the United States. </p>
                <p> <a href="/survey/form/eia_857/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="https://www.youtube.com/playlist?list=PL2OD0gKF-sIULwpCNRF0wzz20GVou-gB3">Instructional Videos</a>&nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_857/faqs.cfm"> Frequently Asked Questions</a> &nbsp;&nbsp;| &nbsp;  <a href="/survey/form/eia_857/sft_instructions.pdf" class="ico_pdf">Secure File Transfer</a></p>


                <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/ngdownstreamforms2018.php">Comment on proposed survey form revisions:</a></strong><br>
                  <a href="/survey/frn/naturalgas/FRN-30-Day-NG-October-27-2017.pdf" class="ico_pdf">Federal Register Notice</a>  &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_857/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_857/proposed/form.pdf" class="ico_pdf">Form</a></p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data, which are published by EIA, are used to determine current and projected fuel oil needs on national, regional, and State levels. </p>
                  <p>Frequency of Collection: Monthly <br>
                    Number of Respondents: 310<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td><a href="/survey/form/eia_857/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_857/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:jennifer.wade@eia.gov">Jennifer Wade</a><br>
                (202) 586-4749</td>
            </tr>
            <tr>
              <td><a name="eia-858"></a>EIA-858</td>
              <td><strong>Uranium Marketing Annual Survey</strong> <br>
                <p>Collects data on contracts, deliveries (during the report year and projected for the next ten years), enrichment services purchased, inventories, use in fuel assemblies, feed deliveries to enrichers (during the report year and projected for the next ten years), and unfilled market requirements for the next ten years. </p>
                <p><a href="/survey/form/eia_858/instructions.pdf" class="ico_pdf">Instructions</a></p>
                <p></p>
                <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form:</strong><br>
									<a href="/survey/frn/uranium/2017-23872.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_858/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_858/proposed/form.pdf" class="ico_pdf"> Form </a>&nbsp;&nbsp;| &nbsp;<a href="/survey/changes/uranium/2018">More detailed information&nbsp;</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data are used by public and private analysts to monitor the domestic uranium market. Form EIA-858 is completed by uranium suppliers and owners and operators of U.S. civilian nuclear power reactors firms and individuals that were involved in the U.S. uranium industry (that is, within the 50 States, District of Columbia, Puerto Rico, the Virgin Islands, Guam, and other U.S. possessions) during the survey year.</p>
                  <p>Frequency of Collection: Annually<br>
                    Number of Respondents: 69 <br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52;
                    Public Law 102-486 (Energy Policy Act of 1992), Sec. 1015</p>
                </div></td>
              <td><a href="/survey/form/eia_858/form.pdf" class="ico_pdf">PDF</a><br></td>
              <td><a href="mailto:Tim.Shear@eia.gov">Tim Shear</a><br>
                (202) 586-0403</td>
            </tr>
            <tr>
              <td><a name="eia-860"></a>EIA-860</td>
              <td><strong>Annual Electric Generator Report</strong> <!-- <strong><a href="/survey/form/eia_860/what_new_860db.html">(2011 Survey Form Changes)</a></strong> --><br>
                <p>Collects data on the status of existing electric generating plants and   associated equipment in the United States, and those scheduled for initial   commercial operation within 10 years of the filing of this report.</p>
                <p> <a href="/survey/form/eia_860/instructions.pdf" class="ico_pdf">Instructions</a>  </p>
                                <p></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data are disseminated in various EIA information products. The data are used   by public and private analysts to monitor the current status and trends in the   electric power industry and to evaluate the future of the industry. Form EIA-860 is completed by all existing plants and  proposed (10-year plans) plants that: 1) have a total generator nameplate  capacity (sum for generators at a single site) of 1 megawatt (1,000 kW) or  greater; and 2) where the generator(s), or the facility in which the  generator(s) resides, is connected to the local or regional electric power grid  and has the ability to draw power from the grid or deliver power to the grid. </p>
                  <p>Survey respondents should submit data electronically                 using <a href="https://signon.eia.doe.gov/ssoserver/login">EIA’s secure Internet data collection system</a>. Not registered or having technical problems? Email  <a href="mailto:EIA-860@eia.gov">EIA-860@eia.gov</a>.</p>
                  <p>Frequency of Collection: Annually<br>
                    Number of Respondents: 4,315 <br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52;
                    Public Law 102-486 (Energy Policy Act of 1992), Sec. 1015</p>
                </div></td>
              <td>
                  <a href="https://signon.eia.doe.gov/ssoserver/login">E-file</a><br>
                  <a href="/survey/form/eia_860/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_860/form.pdf" class="ico_pdf">PDF</a></td>
              <td><p><a href="mailto:Suparna.Ray@eia.gov">Suparna Ray</a><br>
                  (202) 586-5077</p>
                <p><a href="mailto:Alexander.Mey@eia.gov">Alex Mey</a><br>
                  (202) 287-5868                  </p>
                <p><a href="mailto:Raymond.Chen@eia.gov">Raymond Chen</a><br>
                  (202) 287-6532<br>
                </p></td>
            </tr>
            <tr>
              <td><a name="eia-860m"></a>EIA-860M</td>
              <td><strong>Monthly Update to the Annual Electric Generator Report</strong> <br>
                <p>Collects data
                  on the status of proposed new generators within 12 months of the
                  generator beginning commercial and proposed changes to existing generators, within 12 months of the proposed change being effective
                  previously reported to EIA on the annual EIA-860. </p>
                <p> <a href="/survey/form/eia_860m/instructions.pdf" class="ico_pdf">Instructions</a> </p>
                
                 <p></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data
                    are used by public and private analysts to monitor the current status
                    and trends in the electric power industry and to evaluate the future
                    of the industry. </p>
                  <p>Survey respondents should submit data electronically                 using <a href="https://signon.eia.doe.gov/ssoserver/login">EIA’s secure Internet data collection system</a>. Not registered or having technical problems? Email <a href="mailto:EIA-860@eia.gov">EIA-860@eia.gov</a>.</p>
                  <p>Frequency of Collection: Monthly, as necessary<br>
                    Number of Respondents: 314<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation:Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td>
                <a href="https://signon.eia.doe.gov/ssoserver/login">E-file</a><br>
                <a href="/survey/form/eia_860m/form.pdf" class="ico_pdf">PDF</a></td>
              <td><p><a href="mailto:Raymond.Chen@eia.gov">Raymond Chen</a><br>
                  (202) 287-6532</p>
                <p><a href="mailto:Suparna.Ray@eia.gov">Suparna Ray</a><br>
                  (202) 586-5077</p>
                <p><a href="mailto:Alexander.Mey@eia.gov">Alex Mey</a><br>
                  (202) 287-5868 </p></td>
            </tr>
            <tr>
              <td><a name="eia-861"></a>EIA-861</td>
              <td><strong>Annual Electric Power Industry Report</strong> <br>
                <p>Collects information on the status of a sample of electric power industry participants involved in the generation, transmission, and distribution of electric energy in the United States, and its territories.</p>
                <p> <a href="/survey/form/eia_861/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_861/faqs.cfm">Frequently Asked Questions</a></p>
                
                 <p></p>

                                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data from this form appear in the various EIA information products and are used by public and private analysts to monitor the current status and trends of the electric power industry and to evaluate the future of the industry. The Form EIA-861 is used to collect retail sales of electricity and associated revenue from all electric utilities, energy service providers and distribution companies in the United States on an annual basis.</p>
                  <p>Survey respondents should submit data electronically                 using <a href="https://signon.eia.doe.gov/ssoserver/login">EIA’s secure Internet data collection system</a>. Not registered or having technical problems? Email <a href="mailto:EIA-861@eia.gov">EIA-861@eia.gov</a>.</p>
                  <p>Frequency of Collection: Annually<br>
                    Number of Respondents: Approximately  3,400<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy  Administration Act of 1974), Sec. 13(b) and Public Law 102-486 (Energy Policy  Act of 1992), Sec. 1015</p>
                </div></td>
              <td>
              <a href="https://signon.eia.doe.gov/ssoserver/login">E-file</a><br>
              <a href="/survey/form/eia_861/form.xlsx" class="ico_xls">XLS</a><br>
              <a href="/survey/form/eia_861/form.pdf" class="ico_pdf">PDF</a><br>
                              </td>

              <td><p>                </p><p><a href="mailto:stephen.scott@eia.gov">Stephen Scott</a><br>
                  202-586-5140 </p></td>
            </tr>
            <tr>
              <td><a name="eia-861m"></a>EIA-861M</td>
              <td><strong>Monthly Electric Power Industry Report</strong><br>
                    <p>Collects information from utilities and nonutility companies that sell or deliver electric power to end users, including electric utilities, energy service providers, and distribution companies. Data collected include retail sales and revenue for all end-use sectors (residential, commercial, industrial and transportation).</p>
<p> <a href="/survey/form/eia_861m/instructions.pdf" class="ico_pdf">Instructions</a>
&nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_861m/faqs.cfm">Frequently Asked Questions</a></p>
                    <a class="show">[+] See more</a>
                    <div class="more">
                  <p>The data from this form appear in the various EIA information products and are used by public and private analysts to monitor the current status and trends of the electric power industry and to evaluate the future of the industry. The Form EIA-826 is completed by a sample of electric utilities, energy service providers, and distribution companies that sell or distribute electric power to end users chosen from the respondent frame of the  <a href="/survey/#eia-861">Form EIA-861</a>, Annual Electric Power Industry Report. <a href="/survey/#eia-861">Form EIA-861 </a>collects retail sales of electricity and associated revenue from all electric utilities, energy service providers and distribution companies in the United States on an annual basis. Survey respondents should submit data electronically using </p>
                  <p>Survey respondents should submit data electronically                 using <a href="https://signon.eia.doe.gov/ssoserver/login">EIA’s secure Internet data collection system</a>. Not registered or having technical problems? Email <a href="mailto:EIA-826@eia.gov">EIA-826@eia.gov</a>.</p>
                  <p>Frequency of Collection: Monthly<br>
                    Number of Respondents: 500<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy  Administration Act of 1974), Sec. 13(b).</p>
                </div></td>
              <td>
              <a href="https://signon.eia.doe.gov/ssoserver/login">E-file</a><br>
              <a href="/survey/form/eia_861m/form.xlsx" class="ico_xls">XLS</a><br>
              <a href="/survey/form/eia_861m/form.pdf" class="ico_pdf">PDF</a></td>
              <td><p><a href="mailto:peter.wong@eia.gov">Peter Wong</a><br>
                  (202) 586-7574</p></td>
            </tr>
            <tr>
              <td><a name="eia-861s"></a>EIA-861S</td>
              <td><strong>Annual Electric Power Industry Report (Short Form)</strong><br>
                <p>Collects data from approximately 1,100 respondents that will no longer report on the Form EIA-861. The Form EIA-861S will collect a limited amount of sales, revenue, and customer count data and, for certain respondents, data on time-based rate customers and advanced meter reading.  </p>
                <p> <a href="/survey/form/eia_861s/instructions.pdf" class="ico_pdf">Instructions</a> </p>
                
                <p></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data from this form will appear in the various EIA information products and are used by public and private analysts to monitor the current status and trends of the electric power industry and to evaluate the future of the industry. Once every 8 years, the Form EIA-861S respondents will be asked to complete the Form EIA-861 in lieu of Form EIA-861S for sampling methodology purposes.</p>
                  <p>Survey respondents should submit data electronically                 using <a href="https://signon.eia.doe.gov/ssoserver/login">EIA’s secure Internet data collection system</a>. Not registered or having technical problems? Email <a href="mailto:EIA-861@eia.gov">EIA-861@eia.gov</a>.</p>
                  <p>Frequency of Collection: Annually<br>
                    Number of Respondents: Approximately 1,100 <br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy  Administration Act of 1974), Sec. 13(b) and Public Law 102-486 (Energy Policy  Act of 1992), Sec. 1015</p>
                </div></td>
              <td>
                  <a href="https://signon.eia.doe.gov/ssoserver/login">E-file</a><br>
                  <a href="/survey/form/eia_861s/form.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_861s/form.pdf" class="ico_pdf">PDF</a></td>
              <td><p><a href="mailto:stephen.scott@eia.gov">Stephen Scott</a><br>
                  202-586-5140 </p></td>
            </tr>
            <tr>
              <td><a name="eia-863"></a>EIA-863</td>
              <td><strong>Petroleum Product Sales Identification Survey</strong>
                <br>
                <p>Information is collected on size, type, and geographic location of No. 2 distillate and residual fuel oil dealers, motor gasoline resellers, and propane resellers. </p>
                <p> <a href="/survey/form/eia_863/instructions.pdf" class="ico_pdf">Instructions</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/marketing2017.cfm">Comment on proposed survey form revisions:</a></strong><br />
                  <a href="/survey/frn/petroleum/FRN-60-Day-Marketing-April-3-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_863/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_863/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The firms surveyed, along with their
                    associated volumetric data and tracking information, serve as the
                    sampling frame for Forms <a href="#eia-821">EIA-821</a> (Annual Fuel Oil and Kerosene Sales Report), <a href="#eia-782b">EIA-782B</a> (Resellers'/Retailers' Monthly Petroleum Products Sales Report), <a href="#eia-877">EIA-877</a> (Winter Heating Fuels Telephone Survey), <a href="#eia-878">EIA-878</a> (Daily Motor Gasoline Price Survey),
                    and other ad hoc surveys, such as the National Petroleum Council Surveys.</p>
                  <p>Frequency of Collection: Quadrennially<br>
                    Number of Respondents: 24,400<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52;
                    Public Law 94-163 (Energy Policy and Conservation Act), Sec. 507</p>
                </div></td>
              <td>
              	<!--a href="/survey/form/eia_863/form.xls" class="ico_xls">XLS</a><br /-->
                <a href="/survey/form/eia_863/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:amerine.woodyard@eia.gov">Amerine Woodyard</a><br>
                (202) 586-1256</td>
            </tr>
            <tr>
              <td><a name="eia-871"></a>EIA-871</td>
              <td><strong>Commercial Buildings Energy Consumption Survey (CBECS)</strong> <br>
                <p> The survey provides comprehensive national and regional information on the consumption of, and expenditures for, energy in the commercial buildings sector of the economy as well as the number and square footage of U.S. commercial buildings by various energy-related building characteristics. Also see: <a href="/consumption/commercial/about.cfm">About the CBECS</a> </p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data are used in EIA forecasting and energy end use intensity models and are published in statistical and analytical reports. The physical characteristics information for commercial buildings is collected using Form EIA-871A in interviews with owners, managers, or tenants of buildings. The building respondents are also asked to provide energy consumption and expenditures information, if available. In cases where the building respondent is unable to provide energy consumption and expenditure data, the information is collected by mail from individual energy suppliers by using Forms EIA-871C through F (depending upon the energy source). The survey was renamed CBECS in 1989. Previously it was conducted under the name of Nonresidential Buildings Energy Consumption Survey. Surveys were conducted in 1979, 1983, 1986, 1989, 1992, 1995, 1999, 2003, 2007, and 2012. The next CBECS is scheduled for 2017.</p>
                  <p>Frequency of Collection: Quadrennially<br>
                    Number of Respondents: 7,900<br>
                    Reporting Requirement: Voluntary (commercial buildings) and Mandatory (energy suppliers)<br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                  <p>Previous Cycles</p>
                  <ul>
                    <li>2007
                      <ul>
                        <li><a href="form/eia_871/2007/2007 CBECS EIA-871A Buildings Questionnaire.pdf" class="ico_pdf">Building Questionnaire (2007) EIA-871A</a></li>
                        <li><a href="form/eia_871/2007/2007 CBECS EIA-871C Natural Gas Usage.pdf" class="ico_pdf">Natural Gas Usage (2007) EIA-871C</a></li>
                        <li><a href="form/eia_871/2007/2007 CBECS EIA-871D District Heat Usage.pdf" class="ico_pdf">District Heat Usage (2007) EIA-871D</a></li>
                        <li><a href="form/eia_871/2007/2007 CBECS EIA-871E Electricity Usage.pdf" class="ico_pdf">Electricity Usage (2007) EIA-871E</a></li>
                        <li><a href="form/eia_871/2007/2007 CBECS EIA-871F Fuel Oil Usage.pdf" class="ico_pdf">Fuel Oil Usage (2007) EIA-871F</a></li>
                      </ul>
                    </li>
                    <li>2003
                      <ul>
                        <li><a href="form/eia_871/2003/cbecs2003-871A-building-ques.pdf" class="ico_pdf">Building Questionnaire (2003) EIA-871A</a></li>
                        <li><a href="form/eia_871/2003/cbecs2003-871C-natural-gas-usage.pdf" class="ico_pdf">Natural Gas Usage (2003) EIA-871C</a></li>
                        <li><a href="form/eia_871/2003/cbecs2003-871E-electricity-usage.pdf" class="ico_pdf">Electric Usage (2003) EIA-871E</a></li>
                      </ul>
                    </li>
                    <li>1999
                      <ul>
                        <li><a href="form/eia_871/1999/cbecs1999-871A-building-ques.pdf" class="ico_pdf">Building Questionnaire (1999) EIA-871A</a></li>
                        <li><a href="form/eia_871/1999/cbecs1999-871C-natural-gas-usage.pdf" class="ico_pdf">Natural Gas Usage (1999) EIA-871C</a></li>
                        <li><a href="form/eia_871/1999/cbecs1999-871D(s)-district-steam.pdf" class="ico_pdf">District Steam Usage (1999) EIA-871D (s)</a></li>
                        <li><a href="form/eia_871/1999/cbecs1999-871D(hw)-district-hot-water.pdf" class="ico_pdf">District Hot Water Usage (1999) EIA-871D (hw)</a></li>
                        <li><a href="form/eia_871/1999/cbecs1999-871E-electricity-usage.pdf" class="ico_pdf">Electric Usage (1999) EIA-871E</a></li>
                        <li><a href="form/eia_871/1999/cbecs1999-871F-fuel-oil-usage.pdf" class="ico_pdf">Fuel Oil Usage (1999) EIA-871F</a></li>
                      </ul>
                    </li>
                    <li>1995
                      <ul>
                        <li><a href="form/eia_871/1995/cbecs1995-871A-building-ques.pdf" class="ico_pdf">Building Questionnaire (1995) EIA-871A</a></li>
                        <li><a href="form/eia_871/1995/cbecs1995-871C-A-natural-gas.pdf" class="ico_pdf">Natural Gas Usage (1995) EIA-871C-A</a></li>
                        <li><a href="form/eia_871/1995/cbecs1995-871C-B-natural-gas-dsm-instructions.pdf" class="ico_pdf">Natural Gas Usage DSM Program Participation (1995) EIA-871C-B</a></li>
                        <li><a href="form/eia_871/1995/cbecs1995-871C-natural-gas-instructions.pdf" class="ico_pdf">Natural Gas Usage and DSM Instructions (1995) EIA-871C-A and B</a></li>
                        <li><a href="form/eia_871/1995/cbecs1995-871D-dist-heat-usage.pdf" class="ico_pdf">District Heat Usage (1995) EIA-871-D</a></li>
                        <li><a href="form/eia_871/1995/cbecs1995-871E-A-electric-usage.pdf" class="ico_pdf">Electricity Usage (1995) EIA-871E-A</a></li>
                        <li><a href="form/eia_871/1995/cbecs1995-871E-B-electricity-usage-dsm-instructions.pdf" class="ico_pdf">DSM Program Participation (1995) EIA-871E-B</a></li>
                        <li><a href="form/eia_871/1995/cbecs1995-871E-electricity-instructions.pdf" class="ico_pdf">Electricity Usage and DSM Instructions (1995) EIA-871E-A and B</a></li>
                        <li><a href="form/eia_871/1995/cbecs1995-871E-F-fueloil.pdf" class="ico_pdf">Fuel Oil Usage (1995) EIA-871F</a></li>
                      </ul>
                    </li>

                    <li>1992
                      <ul>
                        <li><a href="/survey/form/eia_871/1992/EIA-871A_1992.pdf" class="ico_pdf">Building Questionnaire (1992) EIA-871A</a></li>
                        <li><a href="/survey/form/eia_871/1992/EIA-871C_1992.pdf" class="ico_pdf">Natural Gas Usage and IRP Program Participation (1992) Form EIA-871C</a></li>
                        <li><a href="/survey/form/eia_871/1992/EIA-871D_1992.pdf" class="ico_pdf">District Heating and Cooling (1992) Form EIA-871D</a></li>
                        <li><a href="/survey/form/eia_871/1992/EIA-871E_1992.pdf" class="ico_pdf">Electricity Usage and DSM Program Participation (1992) Form  EIA-871E</a></li>
                        <li><a href="/survey/form/eia_871/1992/EIA-871F_1992.pdf" class="ico_pdf">Fuel Oil Usage (1992)  Form EIA-871F</a>
                      </li></ul>
                  </li></ul>
                  

                </div></td>
              <td>                <p><a href="/survey/form/eia_871/2012/EIA-871A_2012.pdf" class="ico_pdf" title="2012 CBECS 871-A Survey">871-A</a><br>
                  <a href="/survey/form/eia_871/2012/EIA-871C_2012.pdf" class="ico_pdf" title="2012 CBECS 871-C Survey">871-C</a><br>
                  <a href="/survey/form/eia_871/2012/EIA-871D_2012.pdf" class="ico_pdf" title="2012 CBECS 871-D Survey">871-D</a><br>
                  <a href="/survey/form/eia_871/2012/EIA-871E_2012.pdf" class="ico_pdf" title="2012 CBECS 871-E Survey">871-E</a><br>
                  <a href="/survey/form/eia_871/2012/EIA-871F_2012.pdf" class="ico_pdf" title="2012 CBECS 871-F Survey">871-F</a>
                </p></td>
              <td><a href="mailto:joelle.michaels@eia.gov">Joelle Michaels</a><br>
                (202) 586-8952<br></td>
            </tr>
            <tr>
              <td><a name="eia-877"></a>EIA-877</td>
              <td><strong>Winter Heating Fuels Telephone Survey</strong><br>
                <p>Residential prices of No. 2 heating oil are reported by selected retailers in PAD Districts 1 and 2 residential propane prices are reported by selected retailers of PAD Districts 1, 2, 3 and 4.</p>
                <p> <a href="/survey/form/eia_877/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/petroleum/heatingoilpropane/faq_respondents.php">Frequently Asked Questions</a> </p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/marketing2017.cfm">Comment on proposed survey form revisions:</a></strong><br />
                  <a href="/survey/frn/petroleum/FRN-60-Day-Marketing-April-3-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_877/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_877/proposed/form.pdf" class="ico_pdf">Form</a> </p-->

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>These data are used to monitor No. 2 heating oil and propane during the heating season (October through March) and to report to the Congress and others. Respondents are selected retailers of heating oil in PAD Districts 1 and 2 and propane in PAD Districts 1, 2, 3 and 4.</p>
                  <p>Frequency of Collection: Weekly from October through March<br>
                    Number of Respondents: 1,500<br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(b), 5(a), 52; Public Law 94-163 (Energy Policy and Conservation Act), Sec. 507</p>
                </div></td>
              <td><a href="/survey/form/eia_877/form.pdf" class="ico_pdf">PDF</a><br></td>
              <td><a href="mailto:marcela.rourk@eia.gov">Marcela Rourk</a><br>
                (202) 586-4412</td>
            </tr>
            <tr>
              <td><a name="eia-878"></a>EIA-878</td>
              <td><strong>Motor Gasoline Price Survey</strong><br>
                <p>The retail cash price of self-serve, unleaded gasoline by regular, midgrade, and premium grades are reported by a sample of retail motor gasoline stations.</p>
                <p> <a href="/survey/form/eia_878/instructions.pdf" class="ico_pdf">Instructions </a> | <a href="/survey/form/eia_878/faqs.php">Frequently Asked Questions</a>
                  | <a href="/survey/form/eia_878/reference_guide.pdf" class="ico_pdf"> Reference Guide </a>
                </p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/marketing2017.cfm">Comment on proposed survey form revisions:</a></strong><br />
                  <a href="/survey/frn/petroleum/FRN-60-Day-Marketing-April-3-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_878/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_878/proposed/form.pdf" class="ico_pdf">Form</a> </p-->


                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data are used by EIA to monitor trends in gasoline markets and to analyze price impacts of new legislative requirements. Respondents are a scientifically selected sample of retail motor gasoline stations.</p>
                  <p>Frequency of Collection: Weekly<br>
                    Number of Respondents: 800<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(b), 5(a), 52;
                    Public Law 94-163 (Energy Policy and Conservation Act), Sec. 507</p>
                </div></td>
             <td valign="top"><p>Schedule A:<br>
                  <a href="/survey/form/eia_878/form_a.pdf" class="ico_pdf">PDF</a></p>
                <p>Schedule B:<br>
                  <a href="/survey/form/eia_878/form_b.xlsx" class="ico_xls">XLS</a><br>
                  <a href="/survey/form/eia_878/form_b.pdf" class="ico_pdf">PDF</a></p></td>
              <td><a href="mailto:amerine.woodyard@eia.gov">Amerine Woodyard</a><br>
                (202) 586-1256</td>
            </tr>
                        <tr>
              <td><a name="eia-886"></a>EIA-886</td>
              <td><strong>Annual Survey of Alternative Fueled Vehicles</strong> <br>
                <p>Collecting information on the number of alternative fuel vehicles (AFVs) made available, the distribution of AFVs in use, and alternative transportation fuels (ATFs) consumed.</p>
                <p><a href="/survey/form/eia_886/form.pdf" class="ico_pdf">Form</a> (includes instructions)</p>
                                                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data are used to track the AFV/ATF supply situation for Federal agencies, state governments, electricity fuel providers, propane fuel providers, natural gas fuel providers, and transit agencies.</p>
                  <p>Frequency of Collection: Annually<br>
                    Number of Respondents: 2,491<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(b), 5(a); Public
                    Law 102-486 (Energy Policy Act of 1992), Sec. 503(b)(2)</p>
                </div></td>
              <td><a href="/survey/form/eia_886/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:cynthia.sirk@eia.gov">Cynthia Sirk</a><br>
                202-586-1658</td>
            </tr>
            <tr>
              <td><a name="eia-888"></a>EIA-888</td>
              <td><strong>On-Highway Diesel Fuel Price Survey</strong><br>
                <p>The retail cash price of self-serve, No. 2 ultra-low sulfur diesel fuel and low sulfur diesel fuel sold for on-highway use are reported by a sample of companies which sell diesel fuel through truck stops and service stations.</p>
                <p> <a href="/survey/form/eia_888/instructions.pdf" class="ico_pdf">Instructions</a> | <a href="/survey/form/eia_888/faqs.php">Frequently Asked Questions</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/marketing2017.cfm">Comment on proposed survey form revisions:</a></strong><br />
                  <a href="/survey/frn/petroleum/FRN-60-Day-Marketing-April-3-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_888/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_888/proposed/form.pdf" class="ico_pdf">Form</a> </p-->


                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data are used to monitor changes in motor vehicle diesel fuel prices and to report to the Congress and others when requested. Respondents are a scientifically selected sample of companies owning retail outlets which sell motor vehicle diesel fuel.</p>
                  <p>Frequency of Collection: Weekly<br>
                    Number of Respondents: 403<br>
                    Reporting Requirement: Mandatory<br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52;
                    Public Law 94-163 (Energy Policy and Conservation Act), Sec. 507</p>
                </div></td>
              <td><a href="/survey/form/eia_888/form.pdf" class="ico_pdf">PDF</a><br></td>
              <td><a href="mailto:amerine.woodyard@eia.gov">Amerine Woodyard</a><br>
                (202) 586-1256</td>
            </tr>
                        <tr>
              <td><a name="eia-902"></a><span style="color:#999">EIA-902</span></td>
              <td><strong>Annual Geothermal Heat Pump Shipments Report</strong> <strong style="color:#000">(Terminated)</strong><br>
                <p>Collects information on the emerging geothermal heat pump industry. Data collected include pumps by type, by destination, by consumer type, and by economic sector.</p>
                <p> <a href="/survey/form/eia_902/instructions.pdf" class="ico_pdf">Instructions</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Data are published for use by public and private analysts. Respondents are all U.S. geothermal heat pump manufacturers. </p>
                  <p>Survey respondents should submit data electronically                 using <a href="https://signon.eia.doe.gov/ssoserver/login">EIA’s secure Internet data collection system</a>. Not registered or having technical problems? Email <a href="mailto:EIA-902@eia.gov">EIA-902@eia.gov</a>.</p>
                  Frequency of Collection: Annually<br>
                  Number of Respondents: 28 <br>
                  Reporting Requirement: Mandatory <br>
                  Legal Citation: Public Law 93-275 (Federal
                  Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52 </div></td>
              <td><a href="https://signon.eia.doe.gov/ssoserver/login">E-file</a><br>
              <a href="/survey/form/eia_902/form.pdf" class="ico_pdf">PDF</a></td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td><a name="eia-906"></a><span style="color:#999">EIA-906</span></td>
              <td><strong>Power Plant Report </strong> <strong style="color:#000">(Terminated)</strong><br>
                <em><strong>merged into <a href="#eia-923">EIA-923</a></strong></em><br>
                <br>
                <p>Collected electric power generation, fuel consumption, fuel heat content, and fossil fuel stocks from all electric power plants in the United States except combined heat and power (CHP) plants.<br>
                </p>
                <p> <a href="/survey/form/eia_906/instructions_form.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_906/instructions_form.doc" class="ico_doc">Instructions</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>In 2008, EIA consolidated six data collection forms into two forms — the EIA-860 and EIA-923. This benefitted electricity generators because it reduced the number of forms they were required to submit. It benefitted EIA and taxpayers because it streamlined the collection process for better efficiency.</p>
                </div></td>
              <td><a href="/survey/form/eia_906/instructions_form.pdf" class="ico_pdf">PDF</a><br>
                <a href="/survey/form/eia_906/instructions_form.doc" class="ico_doc">Word</a></td>
              <td><br></td>
            </tr>
            <tr>
              <td><a name="eia-910"></a>EIA-910</td>
              <td><strong>Monthly Natural Gas Marketers Survey</strong><br>
                <p>Collects information on natural gas sales from marketers in selected States that have active customer choice programs. Information on the volume and revenue for natural gas commodity sales, and any receipts for distribution charges and taxes associated with the sale of natural gas is requested.</p>
                <p> <a href="/survey/form/eia_910/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;  <a href="/survey/form/eia_910/sft_instructions.pdf" class="ico_pdf">Secure File Transfer</a></p>


                <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/ngdownstreamforms2018.php">Comment on proposed survey form revisions:</a></strong><br>
                  <a href="/survey/frn/naturalgas/FRN-30-Day-NG-October-27-2017.pdf" class="ico_pdf">Federal Register Notice</a>  &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_910/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_910/proposed/form.pdf" class="ico_pdf">Form</a>

                </p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data are used in EIA information products, analyses, and modeling.   Respondents are all natural gas marketers selling to residential and/or   commercial customers in selected States. </p>
                  <p>Frequency of Collection: Monthly <br>
                    Number of Respondents: 104 <br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal
                    Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</p>
                </div></td>
              <td><a href="/survey/form/eia_910/form.xlsx" class="ico_xls">XLS<br>
              </a><a href="/survey/form/eia_910/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:vicki.spangler@eia.gov">Vicki Spangler</a><br>
                (202) 586-8555</td>
            </tr>
            <tr>
              <td><a name="eia-912"></a>EIA-912</td>
              <td><strong>Weekly Underground Natural Gas Storage Report</strong><br>
                <p>Collects information on natural gas inventories held in U.S. underground storage facilities. Storage estimates will be collected for three multi-state regions comprising the lower 48 States.</p>
                <p> <a href="/survey/form/eia_912/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;  <a href="/survey/form/eia_912/sft_instructions.pdf" class="ico_pdf">Secure File Transfer</a></p>


                <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/ngdownstreamforms2018.php">Comment on proposed survey form revisions:</a></strong><br>
                  <a href="/survey/frn/naturalgas/FRN-30-Day-NG-October-27-2017.pdf" class="ico_pdf">Federal Register Notice</a>  &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_912/proposed/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;&nbsp;| &nbsp;
                  <a href="/survey/form/eia_912/proposed/form.pdf" class="ico_pdf">Form</a></p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The information is disseminated for use by public and private analysts. Respondents are a sample of U.S. underground natural gas storage operators. </p>
                  Frequency of Collection: Weekly <br>
                  Number of Respondents: 85 <br>
                  Reporting Requirement: Mandatory <br>
                  Legal Citation: Public Law 93-275 (Federal
                  Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</div></td>
              <td><a href="/survey/form/eia_912/form.xls" class="ico_xls">XLS<br>
              </a><a href="/survey/form/eia_912/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:Jose.Villar@eia.gov">Jose Villar</a><br>(202) 586-9613</td>
            </tr>
            <tr>
              <td><a name="eia-914"></a>EIA-914</td>
              <td><strong>Monthly Crude Oil, Lease Condensate, and Natural Gas Production Report</strong><br>
                <p>A sample survey to collect State-level crude oil production, API gravity, and natural gas production and sales information from well operators on a monthly basis. Submission of January 2015, and later, data should be done using the new form and using the EIA Data xChange Community Portal <a href="https://eiadataxchange-c.force.com/">http://www.eia4usa.eia.gov/</a>.</p>
                <p><a href="/survey/form/eia_914/faqs.cfm">Frequently Asked Questions</a></p>

                <!--p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Old form, used to collect December 2014, and earlier data:</strong><br />
							 The old EIA-914 survey should ONLY be used to submit or resubmit data for December 2014, and earlier. The old form and frequently asked questions related to the old form are available via the linked files below. Submission of January 2015, and later, data should be done using the new form and using the EIA Data xChange Community Portal <a href="https://eiadataxchange-c.force.com/">http://www.eia4usa.eia.gov/</a>.<br /><br />
									<a href="/survey/form/eia_914/2014/faqs.cfm">Frequently Asked Questions</a> &nbsp;&nbsp;| &nbsp;
								<a href="/survey/form/eia_914/2014/instructions.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp;
								<a href="/survey/form/eia_914/2014/form.pdf" class="ico_pdf">Form</a> &nbsp;&nbsp;| &nbsp;
								<a href="/survey/form/eia_914/2014/form.xls" class="ico_xls">XLS</a>
								</p-->

                <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong><a href="/survey/notice/petngproduction2017.php">Comment on proposed survey form revisions:</a></strong><br>
                  <a href="/survey/frn/naturalgas/FRN-30-Day-EIA-914-October-2-2017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_914/proposed/form.pdf" class="ico_pdf">Form</a>&nbsp;&nbsp;| &nbsp; <a href="/survey/form/eia_914/proposed/instructions.pdf" class="ico_pdf">Instructions</a></p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Primary quantities to be measured are "gross withdrawals (wet)," which is full-bore wellstream gas minus lease condensate, oil and water; and "natural gas lease production," (sometimes referred to as "sales production" or "gas available for sales"), which indicates the net amount of produced gas that leaves the lease to go to natural gas processing plants or directly to end-users.</p>

                  <p>Additionally, as of the reporting of January 2015 data and onward, are crude oil and lease condensate production, and crude oil and lease condensate volumes by API gravity category (which may be proxied using sales volumes collected from run tickets). </p>

                  <p>Respondents will be a sample of well operators. The gross gas estimates resulting from the survey are the basis for marketed natural gas production reported on the EIA website in the Natural Gas Monthly and the Natural Gas Navigator.</p>

                  Frequency of Collection: Monthly <br>
                  Number of Respondents: 500 <br>
                  Reporting Requirement: Mandatory <br>
                  Legal Citation: Public Law 93-275 (Federal
                  Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52</div></td>
              <td><a href="/survey/form/eia_914/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:jeffrey.little@eia.gov">Jeffrey Little</a><br>
                (202) 586-6284<br><br>
                Data submission and related technical questions <br>
                <a href="mailto:eia4usa@eia.gov">EIA4USA</a></td>
            </tr>

            <!--tr>
											<td><a name="eia-915"></a>EIA-915</td>
											<td><strong>Monthly Gas Processing and Liquids Report</strong> <em><strong>(Proposed)</strong></em><br />
												<p>Collects data from natural gas processing plants on monthly inlet volumes and the disposition of their final product.  Data are used to estimate production of marketed natural gas, dry natural gas, and gas plant liquids.</p>
												<p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form:</strong><br />
													<a href="/survey/frn/naturalgas/FRN-60-Day-EIA-915.pdf" class="ico_pdf">Federal Register Notice</a> | &nbsp; <a href="/survey/form/eia_915/proposed/form.pdf" class="ico_pdf"> Form </a> | &nbsp; <a href="/survey/form/eia_915/proposed/maps.pdf" class="ico_pdf"> Maps </a></p>
												<a class="show">[+] See more</a>
												<div class="more">
													<p>Collects inlet data of natural gas volumes, the final disposition of all plant products including fuel and nonhydrocarbons, and end-of-month plant liquid stocks from natural gas processing plants and fractionators. The data collected are used to estimate production of marketed natural gas, dry natural gas, and natural gas plant liquids by geographic region. </p>
													Frequency of Collection: Monthly <br />
													Number of Respondents: 550 <br />
													Reporting Requirement: Mandatory <br />
													Legal Citation: Section 13(b) of the Federal Energy Administration Act of 1974, P.L. 93-275, codified at 15 U.S.C. 772(b)</div></td>
											<td></td>
											<td><a href="mailto:jeffrey.little@eia.gov">Jeffrey Little</a><br />
												(202) 586-6284</td>
										</tr-->

            <tr>
              <td><a name="eia-920"></a><span style="color:#999">EIA-920</span></td>
              <td><strong>Combined Heat and Power Plant Report </strong> <strong style="color:#000">(Terminated)</strong><br>
                <em><strong>merged into <a href="#eia-923">EIA-923</a></strong></em><br>
                <br>
                <p>Collected electric power generation, fuel consumption, fuel heat content, and fossil fuel stocks for combined heat and power (CHP) plants in the United States.</p>
                <p> <a href="/survey/form/eia_920/instructions_form.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/eia_920/instructions_form.doc" class="ico_doc">Instructions</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>In 2008, EIA consolidated six data collection forms into two forms — the EIA-860 and EIA-923. This benefitted electricity generators because it reduced the number of forms they were required to submit. It benefitted EIA and taxpayers because it streamlined the collection process for better efficiency.<br>
                  </p>
                </div></td>
              <td><a href="/survey/form/eia_920/instructions_form.pdf" class="ico_pdf">PDF</a><br>
                <a href="/survey/form/eia_920/instructions_form.doc" class="ico_doc">Word</a></td>
              <td><br></td>
            </tr>
            <tr>
              <td><a name="eia-923"></a>EIA-923</td>
              <td><strong>Power Plant Operations Report  </strong> <br>
                
                <p>Collects information from regulated and unregulated electric power plants in the United States. Data collected include electric power generation, energy source consumption, end of reporting period fossil fuel stocks, as well as the quality and cost of fossil fuel receipts. Data are published for use by public and private analysts.  </p>

                <p><a href="/survey/form/eia_923/instructions.pdf" class="ico_pdf">Instructions</a>&nbsp;| <a href="/survey/form/eia_923/instructions_schedule8d.pdf" class="ico_pdf">Instructions for reporting water data</a><br>
                </p>
                
                 <p></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Survey respondents should submit data electronically                 using <a href="https://signon.eia.doe.gov/ssoserver/login">EIA’s secure Internet data collection system</a>. Not registered or having technical problems? Email <a href="mailto:EIA-923@eia.gov">EIA-923@eia.gov</a>.</p>
                  <p>Frequency of Collection: Monthly and Annually<br>
                    Number of Respondents: Monthly - 1,757; Annually  5,678 <br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b).</p>
                </div></td>
              <td>                <a href="https://signon.eia.doe.gov/ssoserver/login">E-file</a><br>
                <a href="/survey/form/eia_923/form.xlsx" class="ico_xls">XLS</a><br>
                <a href="/survey/form/eia_923/form.pdf" class="ico_pdf">PDF</a></td>
              <td><p><a href="mailto:EIA-923@eia.gov">EIA-923@eia.gov</a><br>
                   </p></td>
            </tr>
            <tr>
              <td><a name="eia-930" id="eia-930"></a>EIA-930</td>
              <td><strong>Hourly and Daily Balancing Authority Operations Report </strong><br>
                <p>Collects hourly electric system  operating data from electricity Balancing Authorities in the contiguous United States.  Data collected include system demand, net generation, and interchange and is submitted on an hourly (for demand) and daily (for all data types) basis.</p>
                <p><a href="/survey/form/eia_930/instructions.pdf" class="ico_pdf">Instructions</a>
                                    
                  </p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The data collected on the EIA-930 are:
                  </p><ul>
                    <li>Hourly system  demand<br>
                    </li>
                    <li>Hourly selected sub-regional demand  (starting 7/1/2018) </li>
                    <li>Hourly next-day demand forecast</li>
                    <li>Hourly system net generation<br>
                    </li>
                    <li>Hourly net generation by fuel source  (starting 7/1/2018) </li>
                    <li>Hourly total net actual interchange</li>
                    <li>Hourly net actual interchange with each interconnected BA</li></ul>
                  <p></p>
                  <p>The survey uses an electronic and automated data collection method.    There is no survey data form in a traditional sense.</p>
                  <p>There are two types of required data postings each day:</p>
                  <ul><li>Respondents post hourly demand data within sixty minutes of the end of the reported hour.</li>
                    <li>Respondents also post separately the prior day's hourly demand, demand forecast, net generation and total net actual interchange, and net actual interchange data with each interconnected BA from two days prior, by 7:00 a.m. Eastern Time.</li></ul>
                  Frequency of Collection: Hourly and daily<br>
                  Number of Respondents: 66<br>
                  Reporting Requirement: Mandatory<br>
                  Legal Citation:  Federal Power Act, Sec. 202(C), 311; Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(b), 5(a); Regulations, 10 CFR 205.302, .303, .304, .308, .322, .325, .327</div></td>
              <td></td>
              <td><a href="mailto:EIA4USA@eia.gov">Data Collection Team</a> <br>
                1-855-342-4872 <br>
                Monday – Friday, 8:00 a.m. – 6:00 p.m. ET</td>
            </tr>
            <tr>
              <td><a name="eia-1605"></a>EIA-1605</td>
              <td><strong>Voluntary Reporting of Greenhouse Gases</strong> <strong>(Suspended)</strong><br>
                <p>Provides the means by which an "entity" may participate in the EIA Voluntary Reporting of Greenhouse Gas Emissions Program. </p>
                <p> <a href="/survey/form/eia_1605/instructions.pdf" class="ico_pdf">Instructions</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>An entity can report (on a purely voluntary basis) if they initiate,
                    control, or in some other way, participate in a domestic or foreign
                    activity that results in the emissions of greenhouse gases, reductions
                    (or expected reductions) in emissions of greenhouse gases, or increases
                    in carbon sequestration. A reporter must also be a legal U.S.
                    person; i.e., a U.S. citizen or resident alien; a company; organization;
                    or group recognized by U.S. law; or a Federal, State, or local government
                    agency. The Form EIA-1605 can be used by reporters who wish
                    to: </p>
                  <p> 1. Create an in-depth public record of their
                    emission reduction efforts that will be more useful for <br>
                    information exchange purposes; <br>
                    2. Report emissions, reductions, or sequestration
                    for their entire organization; <br>
                    3. Report information for years prior to the
                    current reporting cycle year; <br>
                    4. Include information on activities conducted
                    outside the United States; and <br>
                    5. Report on commitments to reduce future greenhouse
                    gas emissions. </p>
                  Frequency of Collection: Annually<br>
                  Number of Respondents: 150<br>
                  Reporting Requirement: Voluntary<br>
                  Legal Citation: Public Law 102-486 (Energy
                  Policy Act of 1992), Sec. 1605(b)</div></td>
              <td>
                <a href="https://signon.eia.doe.gov/upload/notice1605.jsp">E-file</a><br>
                <a href="/survey/form/eia_1605/index.html">HTML</a><br>
                <a href="/survey/form/eia_1605/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:paul.mcardle@eia.gov">Paul McArdle</a><br>
                (202) 586-4445</td>
            </tr>
            <tr>
              <td><a name="fe-746r" id="fe-746r2"></a>FE-746R</td>
              <td><strong>Import and Export of Natural Gas</strong> <br>
                <p>Section 3 of the Natural Gas Act of 1938, as amended, requires anyone who wants to import or export natural gas from or to a foreign country must first obtain an authorization from the Department of Energy. </p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>There are
                    two types of authorizations, blanket and long-term authorizations.
                    The blanket authorization enables importing or exporting on a short-term
                    or spot market basis for a period of two years. Under this
                    type of authorization, an entity is authorized to import and/or
                    export natural gas for itself or act as a marketing agent for a
                    third party. The entity is not obligated to import or export
                    natural gas when it gets a blanket authorization and contracts are
                    not required to be filed with the application. The long-term
                    authorization is used when an entity has, or intends to have, a
                    signed gas purchase or sales agreement/contract for a period of
                    time longer than two years. Within 30 days following the end
                    of each month, basic information on the monthly imports/exports
                    must be reported to DOE. Within 30 days following the end
                    of each calendar quarter, importers and exporters must file more
                    detailed reports describing import/export activity for the quarter.
                    Data are made available by DOE's Office of Fossil Energy and are
                    also used by EIA for publications.</p>
                  Frequency of Collection: Annually<br>
                  Number of Respondents: 150<br>
                  Reporting Requirement: Voluntary<br>
                  Legal Citation: Public Law 102-486 (Energy
                  Policy Act of 1992), Sec. 1605(b)</div></td>

              <td>

                <!--a href="http://fossil.energy.gov/programs/gasregulation/">HTML </a-->
                <a href="https://energy.gov/fe/services/natural-gas-regulation/guidelines-filing-monthly-reports">HTML</a>
              </td>


              <td><a href="mailto:marc.talbert@hq.doe.gov">Marc Talbert</a><br>
                (202) 586-7991</td>
            </tr>
            <tr>
              <td><a name="gc-859" id="gc-859"></a>GC-859</td>
              <td><strong>Nuclear Fuel Data  Survey</strong>

                <p>The Nuclear Fuel Data Survey collects data on spent nuclear fuel from all utilities that operate commercial nuclear reactors and from all others that possess irradiated fuel from commercial nuclear reactors. Data are collected on all discharged nuclear fuel assemblies, projected assembly discharges, nuclear fuel storage capacities and inventories, reactor operating history, other fuel and nonfuel radioactive waste, and low-level waste resulting from decommissioning operations.</p>
                <p style="border:1px solid #CCCCCC;padding:8px; margin-right:75px;"><strong>Comment on proposed survey form revisions:</strong><br>
                <a href="/survey/frn/nuclear/gc856_07272017.pdf" class="ico_pdf">Federal Register Notice</a> &nbsp;&nbsp;| &nbsp; <a href="/survey/form/gc_859/proposed/2017/form.pdf" class="ico_pdf">Form</a> </p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Information from the Nuclear Fuel Data Survey is  published on the <a href="/nuclear/spent_fuel/">EIA website</a>.  The data collection provides public and private analysts with detailed information concerning the spent nuclear fuel generated by commercial reactors in the United States.  The data are primarily used by various offices within the DOE and the national laboratories, other Federal agencies, nuclear industry associations, and the general public.</p>
                  <p>Frequency of Collection: To be determined, probably once every five years <br>
                    Number of Respondents: 120 commercial nuclear reactors, plus approximately 20 other owners of spent nuclear fuel <br>
                    Reporting Requirement: Mandatory <br>
                    Legal Citations: Public Law 93-275, Federal Energy Administration Act of 1974,  Section 13(b);  Public Law 97-425, Nuclear Waste Policy Act of 1982, as amended, Section 302 </p>
                </div></td>
              <td><a href="/survey/form/gc_859/form.pdf" class="ico_pdf">PDF</a></td>
              <td><a href="mailto:marta.gospodarczyk@eia.gov">Marta Gospodarczyk </a><br>
                (202) 586-0527</td>
            </tr>
            <tr>
              <td><a name="nwpa-830g"></a>NWPA-830G</td>
              <td><strong>Standard Contract for Disposal of Spent Nuclear Fuel and/or High-Level Radioactive Waste - Appendix G and Annex A to Appendix G</strong> <br>
                <p>Form NWPA-830G, Appendix G - Standard Remittance Advice for Payment of Fees and Annex A to Appendix G - Standard Remittance Advice for Payment of Fees, are part of the Standard Contract signed by commercial nuclear utilities and other owners of spent nuclear fuel.  These forms are designed to transmit data to DOE concerning quarterly payments into the Nuclear Waste Fund of ongoing fees for spent nuclear fuel disposal. </p>
                <p><a href="/survey/form/nwpa_830g/annex_a_appendix_g_instructions.pdf" class="ico_pdf">Annex A to Appendix G Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="/survey/form/nwpa_830g/appendix_g_instructions.pdf" class="ico_pdf">Appendix G Instructions</a></p>
                
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Appendix G serves as the transmittal document for quarterly ongoing fee payments.  Annex A contains supporting data on net electricity generated and on a number of adjustment factors used to calculate the amount of net electricity that is actually sold to ultimate consumers or for resale.  Ongoing fee payments are based on net electricity generated and sold.</p>
                  Frequency of Collection: Quarterly<br>
                  Number of Respondents: 99<br>
                  Reporting Requirement: Mandatory<br>
                  Legal Citation: 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(a), 5(b), 52; Public Law 97-425, (Nuclear Waste Policy Act of 1982, as amended), Sec 302(a), 302(c)</div></td>
              <td><a href="/survey/form/nwpa_830g/annex_a_appendix_g.pdf" class="ico_pdf">Annex A to Appendix G</a><br>
                <a href="/survey/form/nwpa_830g/appendix_g.pdf" class="ico_pdf">Appendix G</a></td>
              <td><a href="mailto:marta.gospodarczyk@eia.gov">Marta Gospodarczyk </a><br>
                (202) 586-0527</td>
            </tr>
            <tr>
              <td><a name="oe-417"></a>OE-417</td>
              <td><strong>Electric Emergency Incident and Disturbance Report</strong><br>
                <p> Sponsored and collected by DOE's Office of Electricity Delivery and Energy Reliability. The form collects information on electric emergency incidents and disturbances for DOE's use in fulfilling its overall national security and other energy management responsibilities.</p>
                <p> <a href="https://www.oe.netl.doe.gov/docs/OE417_Instructions_03312018.pdf" class="ico_pdf">Instructions</a> &nbsp;|&nbsp;&nbsp; <a href="https://www.oe.netl.doe.gov/docs/OE417_Instructions_03312018.docx" class="ico_doc">Instructions</a></p>
                <a class="show">[+] See more</a>
                <div class="more">
                  <p>The information is also used by DOE for analytical purposes. Electric utilities that operate as Control Area Operators and/or Reliability Authorities as well as other electric utilities, as appropriate, file the form. The form is a mandatory filing whenever an electrical incident or disturbance is sufficiently large enough to cross the reporting thresholds. The information reported includes: (1) Uncontrolled loss of 300 MW or more of firm system load for more than 15 minutes; (2) Load shedding of 100 MW or more; (3) System-wide voltage reductions of 3 percent or more affecting more than 50,000 customers; (4) Public appeal to reduce the use of electricity for purposes of maintaining the continuity of the electric power system; (4) Actual or suspected physical attacks that could impact electric power system adequacy or reliability, or vandalism which target components of any security systems; (5) Actual or suspected cyber or communications attacks that could impact electric power system adequacy or vulnerability; (6) Fuel supply emergencies that could impact electric power system adequacy or reliability; (7) Loss of electric service to more than 50,000 customers for 1 hour or more; and (8) Complete operational failure or shut-down of the transmission and/or distribution electrical system.</p>
                  Frequency of Collection: On occasion<br>
                  Number of Respondents: 175<br>
                  Reporting Requirement: Mandatory<br>
                  Legal Citation: Public Law 93-275 (Federal Energy Administration Act of 1974), Sec. 13(b), 5(b), 5(a), 52; Public Law 95-317 (Public Utility Regulatory Policies Act of 1978); Federal Power Act </div></td>
              <td>
              <a href="https://www.oe.netl.doe.gov/OE417">E-file</a><br>
              <a href="https://www.oe.netl.doe.gov/docs/OE417_Form_03312018.pdf">PDF</a><br>
              <a href="https://www.oe.netl.doe.gov/docs/OE417_Form_03312018.doc">Word</a></td>
              <td><p><a href="mailto:oe417@oe.netl.doe.gov">Eric Rollison</a><br>
                  202-586-4093<br>
                </p></td>
            </tr>
            <tr>
              <td><a name="oe-781r" id="oe-781r"></a><span style="color:#999">OE-781R</span></td>
              <td><strong>Monthly Electricity Imports and Exports Report</strong> <strong>(<em>Terminated</em>)</strong><br>
                <p><strong>The OE-781R, Monthly Electricity Imports and Exports  Report has been terminated with the approval of the EIA-111, Quarterly Electricity Imports and Exports Report.&nbsp; </strong></p>
                <p>Collected electrical import/export data from entities authorized to export electric energy, and to construct, connect, operate or maintain facilities for the transmission of electric energy at an international boundary as required by 10 CFR 205.308 and 205.325.
                                  </p>

                <a class="show">[+] See more</a>
                <div class="more">
                  <p>Actual imports and
                    exports of electricity are reported in detail by month. Export
                    authorization holders report quarterly while Presidential Permit
                    holders report annually. These data are used by the Department
                    to track electricity being imported into and exported from the United States, and
                    to furnish decisionmakers with accurate information on which to
                    base trade policy.  These data are also used for verifying
                    that Presidential Permit holders have complied with the terms and
                    conditions of the Permits. Data are used by EIA for publications.</p>
                  Frequency of Collection: Annually<br>
                  Number of Respondents: 65<br>
                  Reporting Requirement: Mandatory<br>
                  Legal Citation: Federal Power Act, Sec.
                  202(C), 311; Public Law 93-275 (Federal Energy Administration Act
                  of 1974), Sec. 13(b), 5(b), 5(a); Regulations, 10 CFR 205.302, .303,
                  .304, .308, .322, .325, .327</div></td>
              <td></td>
              <td>&nbsp;</td>
            </tr>
                        <tr>
              <td><a name="ferc" id="ferc"></a>FERC</td>
              <td><strong>Various Collections of Information on Electricity, Natural Gas, Hydroelectric Power, and Oil</strong> <br>
                <p>The Federal Energy Regulatory
                  Commission is an independent regulatory agency within the Department
                  of Energy that: (1) regulates the transmission and sale for
                  resale of natural gas in interstate commerce; (2) regulates the
                  transmission of oil by pipeline in interstate commerce; (3) regulates
                  the transmission and wholesale sales of electricity in interstate
                  commerce; (4) licenses and inspects private, municipal and state
                  hydroelectric projects; (5) oversees related environmental matters;
                  and (6) administers accounting and financial reporting regulations
                  and the conduct of jurisdictional companies. FERC collects
                  information necessary for it to fulfill these duties. EIA
                  uses some information collected by FERC for EIA's analyses and publications.
                  More information about FERC is available at <a href="http://www.ferc.gov">FERC's Home Page</a>. </p></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>

 

</div>
<div class="l-side-column">
<?php include('./includes/side-nav_782.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>





