import React, { Component } from "react"
import Page from "./Page"
import ContainerLayout from "./Containers/ContainerLayout"
import Top from "./Placeholders/Top.js"
import BuildAnchorDescription from "./States/BuildAnchorDescription"
import BuildAnchorExample from "./States/BuildAnchorExample"

class StatesBuildAnchor extends Component {
  componentDidMount() {
    //import ElectricityMonthly from "../assets/scripts/modules/electricity-monthly"
    //new ElectricityMonthly()
    /* === ON DEMAND SCRIPT === */
    let buildAnchor
    var isBuildAnchor = document.getElementsByClassName("build-anchor")
    if (isBuildAnchor.length > 0) {
      if (typeof buildAnchor == "undefined") {
        import("../assets/scripts/modules/_build-anchor")
          .then(x => {
            buildAnchor = new x.default()
            setTimeout(() => buildAnchor.runBuildAnchor())
          })
          .catch(() => console.log("build anchor script didn't load."))
      } else {
        buildAnchor.runBuildAnchor()
      }
    }
  }
  render() {
    return (
      <Page title="States Build Anchor">
        <span className="right-content">
          <span className="states">
            <h1 className="_h1">Build Anchor</h1>
            <BuildAnchorDescription />
            <BuildAnchorExample />

            <ContainerLayout>
              <div className="accordion first-open">
                <h3>Executive Summary</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">ES1.A</span>
                      <span className="report-name">Total Electric Power Industry</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_es1a.xlsx" className="ico xls" title="ES1.A Total Electric Power Industry">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">ES1.B</span>
                      <span className="report-name">Total Electric Power Industry, Year-to-Date </span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_es1b.xlsx" className="ico xls" title="ES1.B Total Electric Power Industry, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">ES2.A</span>
                      <span className="report-name">Receipts and Cost of Fossil Fuels for the Electric Power Industry by Sector, Physical Units </span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_es2a.xlsx" className="ico xls" title="ES2.A Receipts and Cost of Fossil Fuels for the Electric Power Industry by Sector, Physical Units">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">ES2.B</span>
                      <span className="report-name">Receipts and Cost of Fossil Fuels for the Electric Power Industry by Sector, Btus </span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_es2b.xlsx" className="ico xls" title="ES2.B Receipts and Cost of Fossil Fuels for the Electric Power Industry by Sector, Btus">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Chapter 1. Net Generation</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>by</em>
                    </li>
                    <li>
                      <span className="number">1.1</span>
                      <span className="report-name">Energy Source: Total - All Sectors</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_01.xlsx" className="ico xls" title="1.1 Energy Source: Total - All Sectors">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.1.A</span>
                      <span className="report-name">Renewable Sources: Total - All Sectors</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_01_a.xlsx" className="ico xls" title="1.1.A Other Renewables: Total - All Sectors">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.2.A</span>
                      <span className="report-name">Energy Source: Electric Utilities</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_02_a.xlsx" className="ico xls" title="1.2.A Energy Source: Electric Utilities">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.2.B</span>
                      <span className="report-name">Energy Source: Independent Power Producers</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_02_b.xlsx" className="ico xls" title="1.2.B Energy Source: Independent Power Producers">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.2.C</span>
                      <span className="report-name">Energy Source: Commercial Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_02_c.xlsx" className="ico xls" title="1.2.C Energy Source: Commercial Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.2.D</span>
                      <span className="report-name">Energy Source: Industrial Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_02_d.xlsx" className="ico xls" title="1.2.D Energy Source: Industrial Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.2.E</span>
                      <span className="report-name">Energy Source: Residential Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_02_e.xlsx" className="ico xls" title="1.2.E Energy Source: Residential Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.3.A</span>
                      <span className="report-name">State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_03_a.xlsx" className="ico xls" title="1.3.A State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.3.B</span>
                      <span className="report-name">State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_03_b.xlsx" className="ico xls" title="1.3.B State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>from</em>
                    </li>
                    <li>
                      <span className="number">1.4.A</span>
                      <span className="report-name">Coal by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_04_a.xlsx" className="ico xls" title="1.4.A Coal by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.4.B</span>
                      <span className="report-name">Coal by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_04_b.xlsx" className="ico xls" title="1.4.B Coal by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.5.A</span>
                      <span className="report-name">Petroleum Liquids by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_05_a.xlsx" className="ico xls" title="1.5.A Petroleum Liquids by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.5.B</span>
                      <span className="report-name">Petroleum Liquids by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_05_b.xlsx" className="ico xls" title="1.5.B Petroleum Liquids by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.6.A</span>
                      <span className="report-name">Petroleum Coke by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_06_a.xlsx" className="ico xls" title="1.6.A Petroleum Coke by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.6.B</span>
                      <span className="report-name">Petroleum Coke by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_06_b.xlsx" className="ico xls" title="1.6.B Petroleum Coke by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.7.A</span>
                      <span className="report-name">Natural Gas by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_07_a.xlsx" className="ico xls" title="1.7.A Natural Gas by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.7.B</span>
                      <span className="report-name">Natural Gas by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_07_b.xlsx" className="ico xls" title="1.7.B Natural Gas by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.7.C</span>
                      <span className="report-name">Utility Scale Facility Net Generation from Natural Gas by Technology: Total (All Sectors)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_07_c.xlsx" className="ico xls" title="1.7.C Utility Scale Facility Net Generation from Natural Gas by Technology:  Total (All Sectors)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.8.A</span>
                      <span className="report-name">Other Gases by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_08_a.xlsx" className="ico xls" title="1.8.A Other Gases by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.8.B</span>
                      <span className="report-name">Other Gases by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_08_b.xlsx" className="ico xls" title="1.8.B Other Gases by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.9.A</span>
                      <span className="report-name">Nuclear Energy by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_09_a.xlsx" className="ico xls" title="1.9.A Nuclear Energy by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.9.B</span>
                      <span className="report-name">Nuclear Energy by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_09_b.xlsx" className="ico xls" title="1.9.B Nuclear Energy by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.10.A</span>
                      <span className="report-name">Hydroelectric (Conventional) Power by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_10_a.xlsx" className="ico xls" title="1.13.A Hydroelectric (Conventional) Power by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.10B</span>
                      <span className="report-name">Hydroelectric (Conventional) Power by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_10_b.xlsx" className="ico xls" title="1.10.B Hydroelectric (Conventional) Power by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.11.A</span>
                      <span className="report-name">Renewables Sources Excluding Hydroelectric by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_11_a.xlsx" className="ico xls" title="1.11.A Other Renewables by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.11.B</span>
                      <span className="report-name">Renewables Sources Excluding Hydroelectric by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_11_b.xlsx" className="ico xls" title="1.11.B Other Renewables by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.12.A</span>
                      <span className="report-name">Hydroelectric (Pumped Storage) Power by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_12_a.xlsx" className="ico xls" title="1.12.A Hydroelectric (Pumped Storage) Power by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.12.B</span>
                      <span className="report-name">Hydroelectric (Pumped Storage) Power by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_12_b.xlsx" className="ico xls" title="1.12.B Hydroelectric (Pumped Storage) Power by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.13.A</span>
                      <span className="report-name">Other Energy Sources by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_13_a.xlsx" className="ico xls" title="1.13.A Other Energy Sources by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.13.B</span>
                      <span className="report-name">Other Energy Sources by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_13_b.xlsx" className="ico xls" title="1.13.B Other Energy Sources by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.14.A</span>
                      <span className="report-name">Wind by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_14_a.xlsx" className="ico xls" title="1.14.A Net Generation from Wind by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.14.B</span>
                      <span className="report-name">Wind by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_14_b.xlsx" className="ico xls" title="1.14.B Net Generation from Wind by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.15.A</span>
                      <span className="report-name">Biomass by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_15_a.xlsx" className="ico xls" title="1.15.A Net Generation from Biomass by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.15.B</span>
                      <span className="report-name">Biomass by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_15_b.xlsx" className="ico xls" title="1.15.B Net Generation from Biomass by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.16.A</span>
                      <span className="report-name">Geothermal by Census Division by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_16_a.xlsx" className="ico xls" title="1.16.A Net Generation from Geothermal by Census Division by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.16.B </span>
                      <span className="report-name">Geothermal by Census Division by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_16_b.xlsx" className="ico xls" title="1.16.B Net Generation from Geothermal by Census Division by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.17.A</span>
                      <span className="report-name">Solar Photovoltaic by Census Division by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_17_a.xlsx" className="ico xls" title="1.17.A Solar Photovoltaic by Census Division by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.17.B</span>
                      <span className="report-name">Solar Photovoltaic by Census Division by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_17_b.xlsx" className="ico xls" title="1.17.B Solar Photovoltaic by Census Division by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.18.A</span>
                      <span className="report-name">Solar Thermal by Census Division by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_18_a.xlsx" className="ico xls" title="1.18.A Solar Thermal by Census Division by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">1.18.B</span>
                      <span className="report-name">Solar Thermal by Census Division by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_1_18_b.xlsx" className="ico xls" title="1.18.B Solar Thermal by Census Division by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Chapter 2. Consumption of Fossil Fuels</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Coal: Consumption for</em>
                    </li>
                    <li>
                      <span className="number">2.1.A</span>
                      <span className="report-name">Electricity Generation by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_01_a.xlsx" className="ico xls" title="2.1.A Electricity Generation by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.1.B</span>
                      <span className="report-name">Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_01_b.xlsx" className="ico xls" title="2.1.B Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.1.C</span>
                      <span className="report-name">Electricity Generation and Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_01_c.xlsx" className="ico xls" title="2.1.C Electricity Generation and Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Petroleum Liquids: Consumption for</em>
                    </li>
                    <li>
                      <span className="number">2.2.A</span>
                      <span className="report-name">Electricity Generation by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_02_a.xlsx" className="ico xls" title="2.2.A Electricity Generation by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.2.B</span>
                      <span className="report-name">Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_02_b.xlsx" className="ico xls" title="2.2.B Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.2.C</span>
                      <span className="report-name">Electricity Generation and Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_02_c.xlsx" className="ico xls" title="2.2.C Electricity Generation and Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Petroleum Coke: Consumption for</em>
                    </li>
                    <li>
                      <span className="number">2.3.A</span>
                      <span className="report-name">Electricity Generation by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_03_a.xlsx" className="ico xls" title="2.3.A Electricity Generation by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.3.B</span>
                      <span className="report-name">Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_03_b.xlsx" className="ico xls" title="2.3.B Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.3.C</span>
                      <span className="report-name">Electricity Generation and Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_03_c.xlsx" className="ico xls" title="2.3.C Electricity Generation and Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Natural Gas: Consumption for</em>
                    </li>
                    <li>
                      <span className="number">2.4.A</span>
                      <span className="report-name">Electricity Generation by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_04_a.xlsx" className="ico xls" title="2.4.A Electricity Generation by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.4.B</span>
                      <span className="report-name">Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_04_b.xlsx" className="ico xls" title="2.4.B Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.4.C</span>
                      <span className="report-name">Electricity Generation and Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_04_c.xlsx" className="ico xls" title="2.4.C Electricity Generation and Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Landfill Gas: Consumption for</em>
                    </li>
                    <li>
                      <span className="number">2.5.A</span>
                      <span className="report-name">Electricity Generation by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_05_a.xlsx" className="ico xls" title="2.5.A Electricity Generation by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.5.B</span>
                      <span className="report-name">Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_05_b.xlsx" className="ico xls" title="2.5.B Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.5.C</span>
                      <span className="report-name">Electricity Generation and Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_05_c.xlsx" className="ico xls" title="2.5.C Electricity Generation and Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Biogenic Municipal Solid Waste: Consumption for</em>
                    </li>
                    <li>
                      <span className="number">2.6.A</span>
                      <span className="report-name">Electricity Generation by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_06_a.xlsx" className="ico xls" title="2.6.A Electricity Generation by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.6.B</span>
                      <span className="report-name">Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_06_b.xlsx" className="ico xls" title="2.6.B Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.6.C</span>
                      <span className="report-name">Electricity Generation and Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_06_c.xlsx" className="ico xls" title="2.6.C Electricity Generation and Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Wood / Wood Waste Biomass: Consumption for</em>
                    </li>
                    <li>
                      <span className="number">2.7.A</span>
                      <span className="report-name">Electricity Generation by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_07_a.xlsx" className="ico xls" title="2.7.A Electricity Generation by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.7.B</span>
                      <span className="report-name">Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_07_b.xlsx" className="ico xls" title="2.7.B Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.7.C</span>
                      <span className="report-name">Electricity Generation and Useful Thermal Output by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_07_c.xlsx" className="ico xls" title="2.7.C Electricity Generation and Useful Thermal Output by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Consumption of Coal for</em>
                    </li>
                    <li>
                      <span className="number">2.8.A</span>
                      <span className="report-name">Electricity Generation by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_08_a.xlsx" className="ico xls" title="2.8.A Electricity Generation by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.8.B</span>
                      <span className="report-name">Electricity Generation by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_08_b.xlsx" className="ico xls" title="2.7.B Electricity Generation by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Consumption of Petroleum Liquids for</em>
                    </li>
                    <li>
                      <span className="number">2.9.A</span>
                      <span className="report-name">Electricity Generation by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_09_a.xlsx" className="ico xls" title="2.9.A Electricity Generation by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.9.B</span>
                      <span className="report-name">Electricity Generation by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_09_b.xlsx" className="ico xls" title="2.9.B Electricity Generation by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Consumption of Petroleum Coke for</em>
                    </li>
                    <li>
                      <span className="number">2.10.A</span>
                      <span className="report-name">Electricity Generation by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_10_a.xlsx" className="ico xls" title="2.10.A Electricity Generation by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.10.B</span>
                      <span className="report-name">Electricity Generation by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_10_b.xlsx" className="ico xls" title="2.10.B Electricity Generation by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Consumption of Natural Gas for</em>
                    </li>
                    <li>
                      <span className="number">2.11.A</span>
                      <span className="report-name">Electricity Generation by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_11_a.xlsx" className="ico xls" title="2.11.A Electricity Generation by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.11.B</span>
                      <span className="report-name">Electricity Generation by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_11_b.xlsx" className="ico xls" title="2.11.B Electricity Generation by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Consumption of Landfill Gas for</em>
                    </li>
                    <li>
                      <span className="number">2.12.A</span>
                      <span className="report-name">Electricity Generation by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_12_a.xlsx" className="ico xls" title="2.12.A Electricity Generation by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.12.B</span>
                      <span className="report-name">Electricity Generation by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_12_b.xlsx" className="ico xls" title="2.12.B Electricity Generation by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Consumption of Biogenic Municipal Solid Waste for</em>
                    </li>
                    <li>
                      <span className="number">2.13.A</span>
                      <span className="report-name">Electricity Generation by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_13_a.xlsx" className="ico xls" title="2.13.A Electricity Generation by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.13.B</span>
                      <span className="report-name">Electricity Generation by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_13_b.xlsx" className="ico xls" title="2.13.B Electricity Generation by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Consumption of Wood / Wood Waste Biomass for</em>
                    </li>
                  </ul>

                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.14.A</span>
                      <span className="report-name">Electricity Generation by State by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_14_a.xlsx" className="ico xls" title="2.14.A Electricity Generation by State by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">2.14.B</span>
                      <span className="report-name">Electricity Generation by State by Sector, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_2_14_b.xlsx" className="ico xls" title="2.14.B Electricity Generation by State by Sector, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Chapter 3. Fossil-Fuel Stocks for Electricity Generation</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Stocks of Coal, Petroleum Liquids, and Petroleum Coke:</em>
                    </li>
                    <li>
                      <span className="number">3.1</span>
                      <span className="report-name">Electric Power Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_3_01.xlsx" className="ico xls" title="3.1 Electric Power Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">3.2</span>
                      <span className="report-name">Electric Power Sector, by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_3_02.xlsx" className="ico xls" title="3.2 Electric Power Sector, by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">3.3</span>
                      <span className="report-name">Electric Power Sector, by Census Division</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_3_03.xlsx" className="ico xls" title="3.3 Electric Power Sector, by Census Division">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">3.4</span>
                      <span className="report-name">Stocks of Coal by Coal Rank</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_3_04.xlsx" className="ico xls" title="3.4 Stocks of Coal by Coal Rank">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Chapter 4. Receipts and Cost of Fossil-Fuels</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Receipts, Average Cost, and Quality of Fossil Fuels:</em>
                    </li>
                    <li>
                      <span className="number">4.1</span>
                      <span className="report-name">Total (All Sectors)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_01.xlsx" className="ico xls" title="4.1 Total (All Sectors)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.1</span>
                      <span className="report-name">Total (All Sectors) (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_01continued.xlsx" className="ico xls" title="4.1 Total (All Sectors, continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.2</span>
                      <span className="report-name">Electric Utilities</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_02.xlsx" className="ico xls" title="4.2 Electric Utilities">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.2</span>
                      <span className="report-name">Electric Utilities (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_02continued.xlsx" className="ico xls" title="4.2 Electric Utilities, continued">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.3</span>
                      <span className="report-name">Independent Power Producers</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_03.xlsx" className="ico xls" title="4.3 Independent Power Producers">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.3</span>
                      <span className="report-name">Independent Power Producers (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_03continued.xlsx" className="ico xls" title="4.3 Independent Power Producers continued">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.4</span>
                      <span className="report-name">Commercial Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_04.xlsx" className="ico xls" title="4.4 Commercial Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.4</span>
                      <span className="report-name">Commercial Sector (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_04continued.xlsx" className="ico xls" title="4.4 Commercial Sector continued ">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.5</span>
                      <span className="report-name">Industrial Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_05.xlsx" className="ico xls" title="4.5 Industrial Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.5</span>
                      <span className="report-name">Industrial Sector (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_05continued.xlsx" className="ico xls" title="4.5 Industrial Sector, continued">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Receipts of Coal Delivered for</em>
                    </li>
                    <li>
                      <span className="number">4.6.A</span>
                      <span className="report-name">Electricity Generation by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_06_a.xlsx" className="ico xls" title="4.6.A Electricity Generation by State, coal">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.6.B</span>
                      <span className="report-name">Generation by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_06_b.xlsx" className="ico xls" title="4.6.B Generation by State, Year-to-Date, coal">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Receipts of Petroleum Liquids Delivered for</em>
                    </li>
                    <li>
                      <span className="number">4.7.A</span>
                      <span className="report-name">Electricity Generation by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_07_a.xlsx" className="ico xls" title="4.7.A Electricity Generation by State, Petroleum Liquids ">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.7.B</span>
                      <span className="report-name">Generation by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_07_b.xlsx" className="ico xls" title="4.7.B Generation by State, Year-to-Date, Petroleum Liquids ">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Receipts of Petroleum Coke Delivered for</em>
                    </li>
                    <li>
                      <span className="number">4.8.A</span>
                      <span className="report-name">Electricity Generation by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_08_a.xlsx" className="ico xls" title="4.8.A Electricity Generation by State, Petroleum Coke">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.8.B</span>
                      <span className="report-name">Electricity Generation by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_08_b.xlsx" className="ico xls" title="4.8.B Electricity Generation by State, Year-to-Date, Petroleum Coke">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Receipts of Natural Gas Delivered for</em>
                    </li>
                    <li>
                      <span className="number">4.9.A</span>
                      <span className="report-name">Electricity Generation by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_09_a.xlsx" className="ico xls" title="4.9.A Electricity Generation by State, Natural Gas">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.9.B</span>
                      <span className="report-name">Electricity Generation by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_09_b.xlsx" className="ico xls" title="4.9.B Electricity Generation by State, Year-to-Date, Natural Gas">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Average Cost of Coal Delivered for</em>
                    </li>
                    <li>
                      <span className="number">4.10.A</span>
                      <span className="report-name">Electricity Generation by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_10_a.xlsx" className="ico xls" title="4.10.A Electricity Generation by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.10.B</span>
                      <span className="report-name">Electricity Generation by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_10_b.xlsx" className="ico xls" title="4.10.B Electricity Generation by State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Average Cost of Petroleum Liquids Delivered for</em>
                    </li>
                    <li>
                      <span className="number">4.11.A</span>
                      <span className="report-name">Electricity Generation by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_11_a.xlsx" className="ico xls" title="4.11.A Electricity Generation by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.11.B</span>
                      <span className="report-name">Electricity Generation by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_11_b.xlsx" className="ico xls" title="4.11.B Electricity Generation by State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Average Cost of Petroleum Coke Delivered for</em>
                    </li>
                    <li>
                      <span className="number">4.12.A</span>
                      <span className="report-name">Electricity Generation by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_12_a.xlsx" className="ico xls" title="4.12.A Electricity Generation by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.12.B</span>
                      <span className="report-name">Electricity Generation by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_12_b.xlsx" className="ico xls" title="4.12.B Electricity Generation by State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Average Cost of Natural Gas Delivered for</em>
                    </li>
                    <li>
                      <span className="number">4.13.A</span>
                      <span className="report-name">Electricity Generation by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_13_a.xlsx" className="ico xls" title="4.13.A Electricity Generation by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.13.B</span>
                      <span className="report-name">Electricity Generation by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_13_b.xlsx" className="ico xls" title="4.13.B Electricity Generation by State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Receipts and Quality of Coal by Rank Delivered for Electricity Generation</em>
                    </li>
                    <li>
                      <span className="number">4.14</span>
                      <span className="report-name">Total (All Sectors) by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_14.xlsx" className="ico xls" title="4.14 Total (All Sectors) by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.15</span>
                      <span className="report-name">Electric Utilities by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_15.xlsx" className="ico xls" title="4.15 Electric Utilities by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.16</span>
                      <span className="report-name">Independent Power Producers by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_16.xlsx" className="ico xls" title="4.16 Independent Power Producers by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.17</span>
                      <span className="report-name">Commercial Combined Heat and Power Producers by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_17.xlsx" className="ico xls" title="4.17 Commercial Combined Heat and Power Producers by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">4.18</span>
                      <span className="report-name">Industrial Combined Heat and Power Producers by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_4_18.xlsx" className="ico xls" title="4.18 Industrial Combined Heat and Power Producers by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Chapter 5. Sales, Revenue, and Average Retail Price of Electricity</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">5.1</span>
                      <span className="report-name">Sales of Electricity to Ultimate Customers: Total by End-Use Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_01.xlsx" className="ico xls" title="5.1  Sales of Electricity to Ultimate Customers: Total by End-Use Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">5.2</span>
                      <span className="report-name">Revenue from Sales of Electricity to Ultimate Customers: Total by End-Use Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_02.xlsx" className="ico xls" title="5.2 Revenue from  Sales of Electricity to Ultimate Customers: Total by End-Use Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Average Price of Electricity to Ultimate Customers:</em>
                    </li>
                    <li>
                      <span className="number">5.3</span>
                      <span className="report-name">Total by End-Use Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_03.xlsx" className="ico xls" title="5.3 Total by End-Use Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Sales of Electricity to Ultimate Customers by</em>
                    </li>
                    <li>
                      <span className="number">5.4.A</span>
                      <span className="report-name">End-Use Sector, by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_04_a.xlsx" className="ico xls" title="5.4.A End-Use Sector, by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">5.4.B</span>
                      <span className="report-name">End-Use Sector, by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_04_b.xlsx" className="ico xls" title="5.4.B End-Use Sector, by State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Revenue from Sales of Electricity to Ultimate Customers by</em>
                    </li>
                    <li>
                      <span className="number">5.5.A</span>
                      <span className="report-name">End-Use Sector, by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_05_a.xlsx" className="ico xls" title="5.5.A End-Use Sector, by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">5.5.B</span>
                      <span className="report-name">End-Use Sector, by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_05_b.xlsx" className="ico xls" title="5.5.B End-Use Sector, by State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Average Price of Electricity to Ultimate Customers by</em>
                    </li>
                    <li>
                      <span className="number">5.6.A</span>
                      <span className="report-name">End-Use Sector, by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_06_a.xlsx" className="ico xls" title="5.6.A End-Use Sector, by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">5.6.B</span>
                      <span className="report-name">End-Use Sector, by State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_06_b.xlsx" className="ico xls" title="5.6.B End-Use Sector, by State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Ultimate Customers by</em>
                    </li>
                    <li>
                      <span className="number">5.7</span>
                      <span className="report-name">Number of Ultimate Customers Served by Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_07.xlsx" className="ico xls" title="5.7. Number of Ultimate Customers Served by Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">5.8</span>
                      <span className="report-name">Number of Ultimate Customers Served by Sector and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_5_08.xlsx" className="ico xls" title="5.8. Number of Ultimate Customers Served by Sector and State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Chapter 6. Capacity</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">6.1</span>
                      <span className="report-name">Electric Generating Summer Capacity Changes</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_01.xlsx" className="ico xls" title="6.1 Electric Generating Summer Capacity Changes">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">6.1.A</span>
                      <span className="report-name">Net Summer Capacity for Utility Scale Solar Photovoltaic and Small Scale Solar Photovoltaic Capacity (Megawatts)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_01_a.xlsx" className="ico xls" title="6.1.A Net Summer Capacity for Utility Scale Solar Photovoltaic and Distributed Solar Photovoltaic Capacity (Megawatts) 2008 - September 2015">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">6.1.B</span>
                      <span className="report-name">Net Summer Capacity for Estimated Small Scale Solar Photovoltaic Capacity by Sector (Megawatts)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_01_b.xlsx" className="ico xls" title="6.1.B Net Summer Capacity for Estimated Distributed Solar Photovoltaic Capacity by Sector (Megawatts) 2014 - September 2015">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Net Summer Capacity:</em>
                    </li>
                    <li>
                      <span className="number">6.2A</span>
                      <span className="report-name">Net Summer Capacity of Utility Scale Units by Technology by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_02_a.xlsx" className="ico xls" title="6.2A Net Summer Capacity of Utility Scale Units by Technology by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">6.2B</span>
                      <span className="report-name">Net Summer Capacity Using Primarily Renewable Energy Sources by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_02_b.xlsx" className="ico xls" title="6.2b Net Summer Capacity Using Primarily Renewable Energy Sources by State xls">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">6.2C</span>
                      <span className="report-name">Net Summer Capacity of Utility Scale Units Using Primarily Fossil Fuels by State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_02_c.xlsx" className="ico xls" title="6.2C Net Summer Capacity of Utility Scale Units Using Primarily Fossil Fuels by State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Utility Scale Generating Units</em>
                    </li>
                    <li>
                      <span className="number">6.3</span>
                      <span className="report-name">New Utility Scale Generating Units by Operating Company, Plant, and Month</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_03.xlsx" className="ico xls" title="6.3 New Utility Scale Generating Units by Operating Company, Plant, and Month">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">6.4</span>
                      <span className="report-name">Retired Utility Scale Generating Units by Operating Company, Plant, and Month</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_04.xlsx" className="ico xls" title="6.4 Retired Utility Scale Generating Units by Operating Company, Plant, and Month">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Planned</em>
                    </li>
                    <li>
                      <span className="number">6.5</span>
                      <span className="report-name">Planned U.S. Electric Generating Unit Additions</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_05.xlsx" className="ico xls" title="6.5 Planned U.S. Electric Generating Unit Additions">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">6.6</span>
                      <span className="report-name">Planned U.S. Electric Generating Unit Retirements</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_06.xlsx" className="ico xls" title="6.6 Planned U.S. Electric Generating Unit Retirements">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Capacity Factors</em>
                    </li>
                    <li>
                      <span className="number">6.7.A</span>
                      <span className="report-name">Capacity Factors for Utility Scale Generators Primarily Using Fossil Fuels</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_07_a.xlsx" className="ico xls" title="6.7.A Capacity Factors for Utility Scale Generators Primarily Using Fossil Fuels">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">6.7.B</span>
                      <span className="report-name">Capacity Factors for Utility Scale Generators Not Primarily Using Fossil Fuels</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_07_b.xlsx" className="ico xls" title="6.7.B Capacity Factors for Utility Scale Generators Not Primarily Using Fossil Fuels">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">6.7.C</span>
                      <span className="report-name">Usage Factors for Utility Scale Storage</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_6_07_c.xlsx" className="ico xls" title="6.7.C Usage Factors for Utility Scale Storage">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Chapter 7. Imports and Exports of Electricity</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">7.1</span>
                      <span className="report-name">Electric Power Industry - U.S. Electricity Imports from and Electricity Exports to Canada and Mexico</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_7_01.xlsx" className="ico xls" title="Electric Power Industry - U.S. Electricity Imports from and Electricity Exports to Canada and Mexico">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Chapter 8. Puerto Rico</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">8.1</span>
                      <span className="report-name">Puerto Rico - Sales of Electricity to Ultimate Customers: Total by End-Use Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_8_01.xlsx" className="ico xls" title="Puerto Rico - Sales of Electricity to Ultimate Customers: Total by End-Use Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">8.2</span>
                      <span className="report-name">Puerto Rico - Revenue from Sales of Electricity to Ultimate Customers: Total by End-Use Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_8_02.xlsx" className="ico xls" title="Puerto Rico - Revenue from Sales of Electricity to Ultimate Customers: Total by End-Use Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">8.3</span>
                      <span className="report-name">Puerto Rico - Number of Ultimate Customers Served by Sector: Total by End-Use Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_8_03.xlsx" className="ico xls" title="Puerto Rico- Number of Ultimate Customers Served by Sector: Total by End-Use Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">8.4</span>
                      <span className="report-name">Puerto Rico - Average Price of Electricity to Ultimate Customers: Total by End-Use Sector</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_8_04.xlsx" className="ico xls" title="Puerto Rico- Average Price of Electricity to Ultimate Customers: Total by End-Use Sector">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">8.5</span>
                      <span className="report-name">Net Summer Capacity (MW) of Existing Utility Scale Units by Technology for Puerto Rico</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_8_05.xlsx" className="ico xls" title="Net Summer Capacity (MW) of Existing Utility Scale Units by Technology for Puerto Rico">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Appendix A. Relative Standard Error</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Relative Standard Error for Net Generatili:</em>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A1.A</span>
                      <span className="report-name">Total (All Sectors) by Census Division and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_1_a.xlsx" className="ico xls" title="A1.A Total (All Sectors) by Census Division and State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A1.A</span>
                      <span className="report-name">Total (All Sectors) by Census Division and State (Continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_1_acontinued.xlsx" className="ico xls" title="A1.A Total (All Sectors) by Census Division and State (Continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A1.B</span>
                      <span className="report-name">Total (All Sectors) by Census Division and State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_1_b.xlsx" className="ico xls" title="A1.B Total (All Sectors) by Census Division and State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A1.B</span>
                      <span className="report-name">Total (All Sectors) by Census Division and State, Year-to-Date (Continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_1_bcontinued.xlsx" className="ico xls" title="A1.B Total (All Sectors) by Census Division and State, Year-to-Date (Continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A1.C</span>
                      <span className="report-name">Small Scale Solar by Sector, Census Division and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_1_c.xlsx" className="ico xls" title="A1.C Small Scale Solar by Sector, Census Division and State, by Month and Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A2.A</span>
                      <span className="report-name">Electric Utilities by Census Division and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_2_a.xlsx" className="ico xls" title="A2.A Electric Utilities by Census Division and State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A2.A</span>
                      <span className="report-name">Electric Utilities by Census Division and State (Continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_2_acontinued.xlsx" className="ico xls" title="A2.A Electric Utilities by Census Division and State (Continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A2.B</span>
                      <span className="report-name">Electric Utilities by Census Division and State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_2_b.xlsx" className="ico xls" title="A2.B Electric Utilities by Census Division and State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A2.B</span>
                      <span className="report-name">Electric Utilities by Census Division and State, Year-to-Date (Continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_2_bcontinued.xlsx" className="ico xls" title="A2.B Electric Utilities by Census Division and State, Year-to-Date (Continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A3.A</span>
                      <span className="report-name">Independent Power Producers by Census Division and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_3_a.xlsx" className="ico xls" title="A3.A Independent Power Producers by Census Division and State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A3.A</span>
                      <span className="report-name">Independent Power Producers by Census Division and State (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_3_acontinued.xlsx" className="ico xls" title="A3.A Independent Power Producers by Census Division and State (Continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A3.B</span>
                      <span className="report-name">Independent Power Producers by Census Division and State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_3_b.xlsx" className="ico xls" title="A3.B Independent Power Producers by Census Division and State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A3.B</span>
                      <span className="report-name">Independent Power Producers by Census Division and State, Year-to-Date (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_3_bcontinued.xlsx" className="ico xls" title="A3.B Independent Power Producers by Census Division and State, Year-to-Date (Continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A4.A</span>
                      <span className="report-name">Commercial Sector by Census Division and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_4_a.xlsx" className="ico xls" title="A4.A Commercial Sector by Census Division and State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A4.A</span>
                      <span className="report-name">Commercial Sector by Census Division and State (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_4_acontinued.xlsx" className="ico xls" title="A4.A Commercial Sector by Census Division and State (Continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A4.B</span>
                      <span className="report-name">Commercial Sector by Census Division and State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_4_b.xlsx" className="ico xls" title="A4.B Commercial Sector by Census Division and State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A4.B</span>
                      <span className="report-name">Commercial Sector by Census Division and State, Year-to-Date (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_4_bcontinued.xlsx" className="ico xls" title="A4.B Commercial Sector by Census Division and State, Year-to-Date (Continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A5.A</span>
                      <span className="report-name">Industrial Sector by Census Division and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_5_a.xlsx" className="ico xls" title="A5.A Industrial Sector by Census Division and State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A5.A</span>
                      <span className="report-name">Industrial Sector by Census Division and State (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_5_acontinued.xlsx" className="ico xls" title="A5.A Industrial Sector by Census Division and State (Continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A5.B</span>
                      <span className="report-name">Industrial Sector by Census Division and State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_5_b.xlsx" className="ico xls" title="A5.B Industrial Sector by Census Division and State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A5.B</span>
                      <span className="report-name">Industrial Sector by Census Division and State, Year-to-Date (continued)</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_5_bcontinued.xlsx" className="ico xls" title="A5.B Industrial Sector by Census Division and State, Year-to-Date (Continued)">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Relative Standard Error for Retail Sales of Electricity to</em>
                    </li>
                    <li>
                      <span className="number">A6.A</span>
                      <span className="report-name">Ultimate Customers by End-Use Sector, Census Division, and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_6_a.xlsx" className="ico xls" title="A6.A Ultimate Customers by End-Use Sector, Census Division, and State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A6.B</span>
                      <span className="report-name">Ultimate Customers by End-Use Sector, Census Division, and State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_6_b.xlsx" className="ico xls" title="A6.B Ultimate Customers by End-Use Sector, Census Division, and State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Relative Standard Error for Revenue from Retail Sales of Electricity to</em>
                    </li>
                    <li>
                      <span className="number">A7.A</span>
                      <span className="report-name">Ultimate Customers by End-Use Sector, Census Division, and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_7_a.xlsx" className="ico xls" title="A7.A Ultimate Customers by End-Use Sector, Census Division, and State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A7.B</span>
                      <span className="report-name">Ultimate Customers by End-Use Sector, Census Division, and State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_7_b.xlsx" className="ico xls" title="A7.B Ultimate Customers by End-Use Sector, Census Division, and State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li className="head">
                      <em>Relative Standard Error for Average Retail Price of Electricity to</em>
                    </li>
                    <li>
                      <span className="number">A8.A</span>
                      <span className="report-name">Ultimate Customers by End-Use Sector, Census Division, and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_8_a.xlsx" className="ico xls" title="A8.A Ultimate Customers by End-Use Sector, Census Division, and State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">A8.B</span>
                      <span className="report-name">Ultimate Customers by End-Use Sector, Census Division, and State, Year-to-Date</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_a_8_b.xlsx" className="ico xls" title="A8.B Ultimate Customers by End-Use Sector, Census Division, and State, Year-to-Date">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Appendix B. Major Disturbances and Unusual Occurrences</h3>
                <div className="accordion-content">
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">B1</span>
                      <span className="report-name">Major Disturbances and Unusual Occurrences, Year-to-Date 2019</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_b_1.xlsx" className="ico xls" title="B1 Major Disturbances and Unusual Occurrences, 2010">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">B2</span>
                      <span className="report-name">Major Disturbances and Unusual Occurrences, 2018</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_b_2.xlsx" className="ico xls" title="B2 Major Disturbances and Unusual Occurrences, 2009">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Appendix C. Technical Notes</h3>
                <div className="accordion-content">
                  <ul className="calculated-numbered">
                    <li>Technical notes</li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="pdf/technotes.pdf" className="ico pdf" title="technical notes">
                        PDF
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">C1</span>
                      <span className="report-name">Average Heat Content of Fossil-Fuel Receipts</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_c_1.xlsx" className="ico xls" title="C1 Average Heat Content of Fossil-Fuel Receipts">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">C2</span>
                      <span className="report-name">Comparison of Preliminary Monthly Data Versus Final Monthly Data at the U.S. Level, 2012 Through 2014</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_c_2.xlsx" className="ico xls" title="C2 Comparison of Preliminary Monthly Data Versus Final Monthly Data at the U.S. Level, 2007 Through 2009">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">C3</span>
                      <span className="report-name">Comparison of Annual Monthly Estimates Versus Annual Data at the U.S. Level, All Sectors 2012 Through 2014</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_c_3.xlsx" className="ico xls" title="C3 Comparison of Annual Monthly Estimates Versus Annual Data at the U.S. Level, All Sectors 2007 Through 2009">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="numbered small build-anchor">
                    <li>
                      <span className="number">C4</span>
                      <span className="report-name">Unit-of-Measure Equivalents for Electricity</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="xls/table_c_4.xlsx" className="ico xls" title="C4 Unit-of-Measure Equivalents for Electricity">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="calculated-numbered">
                    <li className="head">Electric Power Data by Month and State, 2001 to the Present</li>
                    <li>
                      <span className="number"></span>
                      <span className="report-name">Net Generation by State by Type of Producer by Energy Source</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="/electricity/data/state/generation_monthly.xlsx" className="ico xls" title="2001 - Present Net Generation by State by Type of Producer by Energy Source">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="calculated-numbered">
                    <li>
                      <span className="number"></span>
                      <span className="report-name">Fossil Fuel Consumption for Electricity Generation by Year, Industry Type and State</span>
                    </li>
                    <li>
                      <span className="formats">Available formats:</span>{" "}
                      <a href="/electricity/data/state/consumption_monthly.xlsx" className="ico xls" title=" 2001 - Present Fossil Fuel Consumption for Electricity Generation by Year, Industry Type and State">
                        <span>XLS</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </ContainerLayout>
            <Top />
          </span>
        </span>
      </Page>
    )
  }
}

export default StatesBuildAnchor
