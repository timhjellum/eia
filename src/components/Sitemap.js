import React, { Component } from "react"
import Top from "./Placeholders/Top.js"
import Page from "./Page"

class Sitemap extends Component {
	render() {
		return (
			<Page title="Sitemap">
				<h1 className="_h1">Sitemap</h1>
				<div className="table-wrapper full-width sticky">
					<table className="basic-table full-width align-left-col-1 align-left-col-2 align-left-col-3 sticky sitemap">
						<thead>
							<tr>
								<th>Live &rsaquo; Production</th>
								<th>Ready for Review</th>
								<th>Development</th>
								<td className="in-development"></td>
							</tr>
						</thead>

						<tbody>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">In Progress</h2> <Top />
								</td>
							</tr>

							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Daily</h2>
								</td>
							</tr>

							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/dashboard/newengland/overview", "_blank")}>New England Dashboard</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/dashboard/newengland/overview", "_blank")}>New England Dashboard</td>
								<td>New England Dashboard</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/realtime_grid/#/status?end=20190205T12", "_blank")}>U.S. Electric System Operating Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/realtime_grid/#/status?end=20190205T12", "_blank")}>U.S. Electric System Operating Data</td>
								<td>U.S. Electric System Operating Data</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/todayinenergy/", "_blank")}>Today in Energy</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/todayinenergy/", "_blank")}>Today in Energy</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/todayinenergy/", "_blank")}>Today in Energy</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/special/disruptions/socal/winter/", "_blank")}>Southern California Daily Energy Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/special/disruptions/socal/winter/", "_blank")}>Southern California Daily Energy Report</td>
								<td>Southern California Daily Energy Report</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Weekly</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/markets/", "_blank")}>Coal Markets</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/markets/", "_blank")}>Coal Markets</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/coal/markets/", "_blank")}>Coal Markets</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/", "_blank")}>Gasoline and Diesel Fuel Update</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/", "_blank")}>Gasoline and Diesel Fuel Update</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/gasdiesel/", "_blank")}>Gasoline and Diesel Fuel Update</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/schedule.php", "_blank")}>schedule</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/schedule.php", "_blank")}>schedule</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/gasdiesel/schedule.php", "_blank")}>schedule</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/", "_blank")}>Heating Oil &amp; Propane Update (October-March)</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/", "_blank")}>Heating Oil &amp; Propane Update (October-March)</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/", "_blank")}>Heating Oil &amp; Propane Update (October-March)</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/storage/dashboard/", "_blank")}>Natural Gas Storage Dashboard</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/storage/dashboard/", "_blank")}>Natural Gas Storage Dashboard</td>
								<td>Natural Gas Storage Dashboard</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/weekly/", "_blank")}>Natural Gas Weekly Update</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/weekly/", "_blank")}>Natural Gas Weekly Update</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/naturalgas/weekly/", "_blank")}>Natural Gas Weekly Update</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/weekly/", "_blank")}>This Week in Petroleum</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/weekly/", "_blank")}>This Week in Petroleum</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/weekly/", "_blank")}>This Week in Petroleum</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/weekly/includes/schedule.php", "_blank")}>schedule</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/weekly/includes/schedule.php", "_blank")}>schedule</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/weekly/includes/schedule.php", "_blank")}>schedule</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/production/weekly/", "_blank")}>Weekly Coal Production</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/production/weekly/", "_blank")}>Weekly Coal Production</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/coal/production/weekly/", "_blank")}>Weekly Coal Production</td>
							</tr>

							<tr>
								<td onClick={() => window.open("https://www.eia.gov/oil_gas/natural_gas/ngs/schedule.html", "_blank")}>Schedule</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/oil_gas/natural_gas/ngs/schedule.html", "_blank")}>Schedule</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/oil_gas/natural_gas/ngs/schedule.html", "_blank")}>Schedule</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/weekly/", "_blank")}> Weekly Petroleum Status Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/weekly/", "_blank")}> Weekly Petroleum Status Report</td>
								<td> Weekly Petroleum Status Report</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/weekly/schedule.php", "_blank")}>Schedule</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/weekly/schedule.php", "_blank")}>Schedule</td>
								<td>n/a?</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Monthly</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/imports/companylevel/", "_blank")}>Company Level Imports (petroleum)</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/imports/companylevel/", "_blank")}>Company Level Imports (petroleum)</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/imports/companylevel/", "_blank")}>Company Level Imports (petroleum)</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/drilling/", "_blank")}>Drilling Productivity Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/drilling/", "_blank")}>Drilling Productivity Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/drilling/", "_blank")}>Drilling Productivity Report</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/forecasts/steo/", "_blank")}>Short-Term Energy Outlook</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/forecasts/steo/", "_blank")}>Short-Term Energy Outlook</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/forecasts/steo/", "_blank")}>Short-Term Energy Outlook</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/", "_blank")}>Electric Power Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/", "_blank")}>Electric Power Monthly</td>
								<td>Electric Power Monthly</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/", "_blank")}>Electricity Monthly Update</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/", "_blank")}>Electricity Monthly Update</td>
								<td>Electricity Monthly Update</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/production/", "_blank")}>Monthly Crude Oil and Natural Gas Production</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/production/", "_blank")}>Monthly Crude Oil and Natural Gas Production</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/production/", "_blank")}>Monthly Crude Oil and Natural Gas Production</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/biofuels/biodiesel/production/", "_blank")}>Monthly Biodiesel Production Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/biofuels/biodiesel/production/", "_blank")}>Monthly Biodiesel Production Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/biofuels/biodiesel/production/", "_blank")}>Monthly Biodiesel Production Report</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/biofuels/biomass/", "_blank")}>Monthly Densified Biomass Fuel Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/biofuels/biomass/", "_blank")}>Monthly Densified Biomass Fuel Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/biofuels/biomass/", "_blank")}>Monthly Densified Biomass Fuel Report</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/data/monthly/", "_blank")}>Monthly Energy Review</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/data/monthly/", "_blank")}>Monthly Energy Review</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/totalenergy/data/monthly/", "_blank")}>Monthly Energy Review</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/renewable/monthly/solar_photo/", "_blank")}>Monthly Solar Photovoltaic Module Shipments Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/renewable/monthly/solar_photo/", "_blank")}>Monthly Solar Photovoltaic Module Shipments Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/renewable/monthly/solar_photo/", "_blank")}>Monthly Solar Photovoltaic Module Shipments Report</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/monthly/", "_blank")}>Natural Gas Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/monthly/", "_blank")}>Natural Gas Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/naturalgas/monthly/", "_blank")}>Natural Gas Monthly</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/marketing/monthly/", "_blank")}>Petroleum Marketing Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/marketing/monthly/", "_blank")}>Petroleum Marketing Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/marketing/monthly/", "_blank")}>Petroleum Marketing Monthly</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/monthly/", "_blank")}>Petroleum Supply Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/monthly/", "_blank")}>Petroleum Supply Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/monthly/", "_blank")}>Petroleum Supply Monthly</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/marketing/prime/", "_blank")}>Prime Supplier Report (petroleum)</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/marketing/prime/", "_blank")}>Prime Supplier Report (petroleum)</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/marketing/prime/", "_blank")}>Prime Supplier Report (petroleum)</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/outlooks/steo/", "_blank")}>Short-Term Energy Outlook</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/outlooks/steo/", "_blank")}>Short-Term Energy Outlook</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/outlooks/steo/", "_blank")}>Short-Term Energy Outlook</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/finance/markets/crudeoil/ ", "_blank")}>Financial Supplement</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/finance/markets/crudeoil/ ", "_blank")}>Financial Supplement</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/finance/markets/crudeoil/ ", "_blank")}>Financial Supplement</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/state/", "_blank")}>State Energy Profiles</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/state/", "_blank")}>State Energy Profiles</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/state/", "_blank")}>State Energy Profiles</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/transportation/", "_blank")}>U.S. Movements of Crude Oil by Rail</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/transportation/", "_blank")}>U.S. Movements of Crude Oil by Rail</td>
								<td>U.S. Movements of Crude Oil by Rail</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Quarterly</h2>
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/quarterly/", "_blank")}>Domestic Uranium Production Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/quarterly/", "_blank")}>Domestic Uranium Production Report</td>
								<td>Domestic Uranium Production Report</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/finance/review/", "_blank")}>Financial Review</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/finance/review/", "_blank")}>Financial Review</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/finance/review/", "_blank")}>Financial Review</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/coal/production/quarterly/", "_blank")}>Quarterly Coal Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/production/quarterly/", "_blank")}>Quarterly Coal Report</td>
								<td>Quarterly Coal Report</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/coal/distribution/quarterly/", "_blank")}>Quarterly Coal Distribution Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/distribution/quarterly/", "_blank")}>Quarterly Coal Distribution Report</td>
								<td>Quarterly Coal Distribution Report</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h1>Annual</h1>
								</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">May 2020</h2>
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/", "_blank")}>Domestic Uranium Production Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/", "_blank")}>Domestic Uranium Production Report</td>
								<td>Domestic Uranium Production Report</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/storagecapacity/", "_blank")}>Underground Natural Gas Working Storage Capacity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/storagecapacity/", "_blank")}>Underground Natural Gas Working Storage Capacity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/naturalgas/storagecapacity/", "_blank")}>Underground Natural Gas Working Storage Capacity</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/", "_blank")}>Uranium Marketing Annual</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/", "_blank")}>Uranium Marketing Annual</td>
								<td>Uranium Marketing Annual</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/importsexports/annual/", "_blank")}>U.S. Natural Gas Imports &amp; Exports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/importsexports/annual/", "_blank")}>U.S. Natural Gas Imports &amp; Exports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/naturalgas/importsexports/annual/", "_blank")}>U.S. Natural Gas Imports &amp; Exports</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/storagecapacity/", "_blank")}>Working and Net Available Shell Storage Capacity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/storagecapacity/", "_blank")}>Working and Net Available Shell Storage Capacity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/storagecapacity/", "_blank")}>Working and Net Available Shell Storage Capacity</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">June 2020</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/refinerycapacity/", "_blank")}>Refinery Capacity Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/refinerycapacity/", "_blank")}>Refinery Capacity Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/refinerycapacity/", "_blank")}>Refinery Capacity Report</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/nuclear/spent_fuel/", "_blank")}>Spent Nuclear Fuel</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/nuclear/spent_fuel/", "_blank")}>Spent Nuclear Fuel</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/nuclear/spent_fuel/", "_blank")}>Spent Nuclear Fuel</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">July 2020</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/forecasts/ieo/", "_blank")}>forecasts/ieo</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/forecasts/ieo/", "_blank")}>forecasts/ieo</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/forecasts/ieo/", "_blank")}>forecasts/ieo</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/renewable/annual/solar_photo/", "_blank")}>Solar Photovoltaic Cell/Module Shipments Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/renewable/annual/solar_photo/", "_blank")}>Solar Photovoltaic Cell/Module Shipments Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/renewable/annual/solar_photo/", "_blank")}>Solar Photovoltaic Cell/Module Shipments Report</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">August 2020</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/ethanolcapacity/index.php", "_blank")}>U.S. Fuel Ethanol Plant Production Capacity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/ethanolcapacity/index.php", "_blank")}>U.S. Fuel Ethanol Plant Production Capacity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/ethanolcapacity/index.php", "_blank")}>U.S. Fuel Ethanol Plant Production Capacity</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/annual/volume1/", "_blank")}>Petroleum Supply Annual, Volume 1</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/annual/volume1/", "_blank")}>Petroleum Supply Annual, Volume 1</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/annual/volume1/", "_blank")}>Petroleum Supply Annual, Volume 1</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/annual/volume2/", "_blank")}>Petroleum Supply Annual, Volume 2</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/annual/volume2/", "_blank")}>Petroleum Supply Annual, Volume 2</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/annual/volume2/", "_blank")}>Petroleum Supply Annual, Volume 2</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">September 2020</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/forecasts/ieo/", "_blank")}>International Energy Outlook</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/forecasts/ieo/", "_blank")}>International Energy Outlook</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/forecasts/ieo/", "_blank")}>International Energy Outlook</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/annual/volume1/", "_blank")}>Petroleum Supply Annual, Volume 1</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/annual/volume1/", "_blank")}>Petroleum Supply Annual, Volume 1</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/annual/volume1/", "_blank")}>Petroleum Supply Annual, Volume 1</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/annual/volume2/", "_blank")}>Petroleum Supply Annual, Volume 2</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/annual/volume2/", "_blank")}>Petroleum Supply Annual, Volume 2</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/annual/volume2/", "_blank")}>Petroleum Supply Annual, Volume 2</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">October 2020</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/environment/emissions/carbon/", "_blank")}></td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/environment/emissions/carbon/", "_blank")}></td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/environment/emissions/carbon/", "_blank")}>...</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/annual/", "_blank")}>Natural Gas Annual</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/annual/", "_blank")}>Natural Gas Annual</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/naturalgas/annual/", "_blank")}>Natural Gas Annual</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">November 2020</h2>
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/coal/distribution/annual/", "_blank")}>Annual Coal Distribution Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/distribution/annual/", "_blank")}>Annual Coal Distribution Report</td>
								<td>Annual Coal Distribution Report</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/coal/annual/", "_blank")}>Annual Coal Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/annual/", "_blank")}>Annual Coal Report</td>
								<td>Annual Coal Report</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/electricity/annual/", "_blank")}>Electric Power Annual</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/annual/", "_blank")}>Electric Power Annual</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/electricity/annual/", "_blank")}>Electric Power Annual</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/environment/emissions/carbon/", "_blank")}>U.S. Energy-Related Carbon Dioxide Emissions</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/environment/emissions/carbon/", "_blank")}>U.S. Energy-Related Carbon Dioxide Emissions</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/environment/emissions/carbon/", "_blank")}>U.S. Energy-Related Carbon Dioxide Emissions</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/coal/reserves/", "_blank")}>U.S. Coal Reserves</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/reserves/", "_blank")}>U.S. Coal Reserves</td>
								<td>U.S. Coal Reserves</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/forecasts/aeo/retrospective/", "_blank")}>AEO Retrospective Review</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/forecasts/aeo/retrospective/", "_blank")}>AEO Retrospective Review</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/forecasts/aeo/retrospective/", "_blank")}>AEO Retrospective Review</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">December 2020</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/forecasts/aeo/retrospective/", "_blank")}>AEO Retrospective Review</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/forecasts/aeo/retrospective/", "_blank")}>AEO Retrospective Review</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/forecasts/aeo/retrospective/", "_blank")}>AEO Retrospective Review</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/fueloilkerosene/", "_blank")}>Fuel Oil and Kerosene Sales</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/fueloilkerosene/", "_blank")}>Fuel Oil and Kerosene Sales</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/fueloilkerosene/", "_blank")}>Fuel Oil and Kerosene Sales</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/electricity/state/", "_blank")}>State Electricity Profiles</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/state/", "_blank")}>State Electricity Profiles</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/electricity/state/", "_blank")}>State Electricity Profiles</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/wells/", "_blank")}>U.S. Oil and Natural Gas Wells by Production Rate</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/wells/", "_blank")}>U.S. Oil and Natural Gas Wells by Production Rate</td>
								<td>U.S. Oil and Natural Gas Wells by Production Rate</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/crudeoilreserves/", "_blank")}>U.S. Crude Oil and Natural Gas Proved Reserves</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/crudeoilreserves/", "_blank")}>U.S. Crude Oil and Natural Gas Proved Reserves</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/naturalgas/crudeoilreserves/", "_blank")}>U.S. Crude Oil and Natural Gas Proved Reserves</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">January 2021</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/outlooks/aeo/", "_blank")}>Annual Energy Outlook 2021</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/outlooks/aeo/", "_blank")}>Annual Energy Outlook 2021</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/outlooks/aeo/", "_blank")}>Annual Energy Outlook 2021</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/outlooks/aeo/assumptions/", "_blank")}>Assumptions to the Annual Energy Outlook</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/outlooks/aeo/assumptions/", "_blank")}>Assumptions to the Annual Energy Outlook</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/outlooks/aeo/assumptions/", "_blank")}>Assumptions to the Annual Energy Outlook</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/fieldcode/", "_blank")}>Oil and Gas County Code Master List</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/fieldcode/", "_blank")}>Oil and Gas County Code Master List</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/naturalgas/fieldcode/", "_blank")}>Oil and Gas County Code Master List</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Announcements &amp; News</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/about/new/", "_blank")}>What's New</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/about/new/", "_blank")}>What's New</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/about/new/", "_blank")}>What's New</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/tools/emailupdates/", "_blank")}>Sign up for email updates</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/emailupdates/", "_blank")}>Sign up for email updates</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/tools/emailupdates/", "_blank")}>Sign up for email updates</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">References</h2>
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/calendar/inventsched.html", "_blank")}>Publishing Priorities</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/calendar/inventsched.html", "_blank")}>Publishing Priorities</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/calendar/inventsched.html", "_blank")}>Publishing Priorities</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/", "_blank")}>Survey Forms</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/", "_blank")}>Survey Forms</td>
								<td>Survey Forms</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/kids/", "_blank")}>Energy Kids Page</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/kids/", "_blank")}>Energy Kids Page</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/adaptive/kids/", "_blank")}>Energy Kids Page</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/faqs/", "_blank")}>Frequently Asked Questions</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/faqs/", "_blank")}>Frequently Asked Questions</td>
								<td>Frequently Asked Questions</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/index.php", "_blank")}>Electricity &rsaquo; Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/index.php", "_blank")}>Electricity &rsaquo; Monthly</td>
								<td>Electricity &rsaquo; Monthly</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/index.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Backissues</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/index.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Backissues</td>
								<td>Electricity &rsaquo; Monthly &rsaquo; Backissues</td>
							</tr>

							{/* 
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/end-use.php", "_blank")}>End Use</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/end-use.php", "_blank")}>End Use</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/resource-use.php", "_blank")}>Resource Use</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/resource-use.php", "_blank")}>Resource Use</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/wholesale-markets.php", "_blank")}>Wholesale Markets</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/wholesale-markets.php", "_blank")}>Wholesale Markets</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/coal-stocks.php", "_blank")}>Coal Stocks</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/coal-stocks.php", "_blank")}>Coal Stocks</td><td className="in-development"></td>
</tr>

<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/contact-info.php", "_blank")}>Contact</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/contact-info.php", "_blank")}>Contact</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/correction.php", "_blank")}>Correction</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/correction.php", "_blank")}>Correction</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/data-tables.php", "_blank")}>Data Tables</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/data-tables.php", "_blank")}>Data Tables</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/inventory.php", "_blank")}>Inventory</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/inventory.php", "_blank")}>Inventory</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/methodology.php", "_blank")}>Methodology</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/methodology.php", "_blank")}>Methodology</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/print-version.php", "_blank")}>Print Version</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/print-version.php", "_blank")}>Print Version</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/regional-focus.php", "_blank")}>regional_focus</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/regional-focus.php", "_blank")}>regional_focus</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/report-overview.php", "_blank")}>report_overview</td><td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/report-overview.php", "_blank")}>report_overview</td><td className="in-development"></td>
</tr>
*/}

							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Home</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov", "_blank")}>Home</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov", "_blank")}>Home</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Analysis</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/analysis/", "_blank")}>Analysis</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/analysis/", "_blank")}>Analysis</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/analysis/projection-data.php", "_blank")}>Analysis &rsaquo; Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/analysis/projection-data.php", "_blank")}>Analysis &rsaquo; Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/analysis/reports.php", "_blank")}>Analysis &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/analysis/reports.php", "_blank")}>Analysis &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">BETA</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/beta", "_blank")}>Beta</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/beta/", "_blank")}>Beta</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/beta/about.php", "_blank")}>Beta &rsaquo; About</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/beta/about.php", "_blank")}>Beta &rsaquo; About</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Coal</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/coal/", "_blank")}>Coal &rsaquo; Home</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/", "_blank")}>Coal &rsaquo; Home</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/coal/data.php", "_blank")}>Coal &rsaquo; Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/data.php", "_blank")}>Coal &rsaquo; Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/coal/reports.php", "_blank")}>Coal &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/reports.php", "_blank")}>Coal &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/coal/browsebytag.php", "_blank")}>Coal &rsaquo; Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/browsebytag.php", "_blank")}>Coal &rsaquo; Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/annual/index.php", "_blank")}>Coal &rsaquo; Annual</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/annual/index.php", "_blank")}>Coal &rsaquo; Annual</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/annual/renew_sectors.php", "_blank")}>Coal &rsaquo; Annual &rsaquo; Renew Sectors</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/annual/renew_sectors.php", "_blank")}>Coal &rsaquo; Annual &rsaquo; Renew Sectors</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/annual/revision_notice.php", "_blank")}>Coal &rsaquo; Annual &rsaquo; Revision Notice</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/annual/revision_notice.php", "_blank")}>Coal &rsaquo; Annual &rsaquo; Revision Notice</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/distribution/annual/index.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Annual</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/distribution/annual/index.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Annual</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/distribution/annual/archive.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Annual &rsaquo; archive</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/distribution/annual/archive.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Annual &rsaquo; archive</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/distribution/annual/correction.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Annual &rsaquo; Correction</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/distribution/annual/correction.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Annual &rsaquo; Correction</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/distribution/annual/revision_notice.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Annual &rsaquo; Revision Notice</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/distribution/annual/revision_notice.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Annual &rsaquo; Revision Notice</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/distribution/quarterly/back_q_distributions.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Quarterly &rsaquo; back_q_distributions</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/distribution/quarterly/back_q_distributions.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Quarterly &rsaquo; back_q_distributions</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/distribution/quarterly/index.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Quarterly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/distribution/quarterly/index.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Quarterly</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/distribution/quarterly/revision_notice.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Quarterly &rsaquo; Revision Notice</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/distribution/quarterly/revision_notice.php", "_blank")}>Coal &rsaquo; Distribution &rsaquo; Quarterly &rsaquo; Revision Notice</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/production/quarterly/index.php", "_blank")}>Coal &rsaquo; Production &rsaquo; Quarterly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/production/quarterly/index.php", "_blank")}>Coal &rsaquo; Production &rsaquo; Quarterly</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/production/quarterly/revision_notice.php", "_blank")}>Coal &rsaquo; Production &rsaquo; Quarterly &rsaquo; Revision Notice</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/production/quarterly/revision_notice.php", "_blank")}>Coal &rsaquo; Production &rsaquo; Quarterly &rsaquo; Revision Notice</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/production/quarterly/correction.php", "_blank")}>Coal &rsaquo; Production &rsaquo; Quarterly &rsaquo; correction</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/production/quarterly/correction.php", "_blank")}>Coal &rsaquo; Production &rsaquo; Quarterly &rsaquo; correction</td>
								<td className="in-development"></td>
							</tr>

							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/production/quarterly/distribution/index.php", "_blank")}>Coal &rsaquo; Production &rsaquo; Quarterly &rsaquo; Distribution</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/production/quarterly/distribution/index.php", "_blank")}>Coal &rsaquo; Production &rsaquo; Quarterly &rsaquo; Distribution</td>
								<td className="in-development"></td>
							</tr>
							{/*
<tr><td onClick={() => window.open("https://www.eia.gov/coal/production/quarterly/distribution/annual-coal-distribution.html", "_blank")}>HTML</td><td onClick={() => window.open("https://wwwdev.eia.gov/coal/production/quarterly/distribution/annual-coal-distribution.php", "_blank")}>annual-coal-distribution</td><td onClick={() => window.open("https://wwwdev.eia.gov/coal/production/quarterly/distribution/annual-coal-distribution.html", "_blank")}>.HTML</td><td className="in-development"></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/coal/production/quarterly/distribution/back_q_distributions.html", "_blank")}>HTML</td><td onClick={() => window.open("https://wwwdev.eia.gov/coal/production/quarterly/distribution/back_q_distributions.php", "_blank")}>back_q_distributions</td><td onClick={() => window.open("https://wwwdev.eia.gov/coal/production/quarterly/distribution/back_q_distributions.html", "_blank")}>HTML</td><td className="in-development"></td>
</tr>
*/}
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/coal/reserves/index.php", "_blank")}>Coal &rsaquo; Reserves</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/coal/reserves/index.php", "_blank")}>Coal &rsaquo; Reserves</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Consumption &amp; Efficiency</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/consumption/", "_blank")}>Consumption &amp; Efficiency</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/", "_blank")}>Consumption &amp; Efficiency</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/consumption/data.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/data.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/consumption/reports.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/reports.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/consumption/browsebytag.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/browsebytag.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/2012-cbecs-building-sampling.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; 2012-cbecs-building-sampling</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/2012-cbecs-building-sampling.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; 2012-cbecs-building-sampling</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/2012-cbecs-building-sampling_old.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; 2012-cbecs-building-sampling_old</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/2012-cbecs-building-sampling_old.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; 2012-cbecs-building-sampling_old</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/about.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; about</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/about.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; about</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/browsebytag.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/browsebytag.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/building-type-definitions.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; building-type-definitions</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/building-type-definitions.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; building-type-definitions</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/comparison-between-years.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; comparison-between-years</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/comparison-between-years.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; comparison-between-years</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/data_categories2.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; data_categories2</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/data_categories2.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; data_categories2</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/estimation-enduse-consumption.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; estimation-enduse-consumption</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/estimation-enduse-consumption.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; estimation-enduse-consumption</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/estimation-of-standard-errors.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; estimation-of-standard-errors</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/estimation-of-standard-errors.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; estimation-of-standard-errors</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/faq.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/faq.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; FAQ's</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/faqcopytw.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; FAQ'scopytw</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/faqcopytw.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; FAQ'scopytw</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/index.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; index</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/index.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; index</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/index_03_18_2016.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; index_03_18_2016</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/index_03_18_2016.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; index_03_18_2016</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/mallchanges.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; mallchanges</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/mallchanges.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; mallchanges</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/maps.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; maps</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/maps.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; maps</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/relationship-to-EIA-supply-surveys.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; relationship-to-EIA-supply-surveys</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/relationship-to-EIA-supply-surveys.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; relationship-to-EIA-supply-surveys</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/reports.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/reports.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; reports</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/survey-background-technical-information.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; survey-background-technical-information</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/survey-background-technical-information.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; survey-background-technical-information</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/terminology.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; terminology</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/terminology.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; terminology</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/terminology_02162017.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; terminology 02162017</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/terminology_02162017.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; terminology 02162017</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/commercial/test.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; test</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/commercial/test.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; test</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/consumption_faqs.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; consumption faqs</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/consumption_faqs.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; consumption faqs</td>

								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/consumption/data.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/consumption/data.php", "_blank")}>Consumption &amp; Efficiency &rsaquo; Commercial &rsaquo; data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Electricity</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/", "_blank")}>Electricity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/", "_blank")}>Electricity</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/data.php", "_blank")}>Electricity &rsaquo; Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/data.php", "_blank")}>Electricity &rsaquo; Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/reports.php", "_blank")}>Electricity &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/reports.php", "_blank")}>Electricity &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/browsebytag.php", "_blank")}>Electricity Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/browsebytag.php", "_blank")}>Electricity Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/stakeholder.php", "_blank")}>Electricity &rsaquo; Stakeholder</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/stakeholder.php", "_blank")}>Electricity &rsaquo; Stakeholder</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/index.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Highlight (index.php)</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/index.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Highlight (index.php)</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/end-use.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; End Use</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/end-use.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; End Use</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/resource-use.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Resource Use</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/resource-use.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Resource Use</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/wholesale-markets.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Wholesale Markets</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/wholesale-markets.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Wholesale Markets</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/coal-stocks.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Coal Stocks</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/coal-stocks.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Coal Stocks</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/contact-info.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Contact</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/contact-info.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Contact</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/correction.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Correction</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/correction.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Correction</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/data-tables.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Data Tables</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/data-tables.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Data Tables</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/inventory.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Inventory</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/inventory.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Inventory</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/methodology.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Methodology</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/methodology.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Methodology</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/print-version.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Print Version</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/print-version.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; Print Version</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/regional-focus.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; regional focus</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/regional-focus.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; regional focus</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/electricity/monthly/update/report-overview.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; report overview</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/electricity/monthly/update/report-overview.php", "_blank")}>Electricity &rsaquo; Monthly &rsaquo; report overview</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Environment</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/environment/", "_blank")}>Environment</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/environment/", "_blank")}>Environment</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/environment/data.php", "_blank")}>Environment &rsaquo; Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/environment/data.php", "_blank")}>Environment &rsaquo; Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/environment/reports.php", "_blank")}>Environment &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/environment/reports.php", "_blank")}>Environment &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/environment/browsebytag.php", "_blank")}>Environment Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/environment/browsebytag.php", "_blank")}>Environment Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Finance</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/finance/", "_blank")}>Finance</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/finance/", "_blank")}>Finance</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/finance/data.php", "_blank")}>Finance &rsaquo; Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/finance/data.php", "_blank")}>Finance &rsaquo; Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/finance/reports.php", "_blank")}>Finance &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/finance/reports.php", "_blank")}>Finance &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/finance/browsebytag.php", "_blank")}>Finance &rsaquo; Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/finance/browsebytag.php", "_blank")}>Finance &rsaquo; Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Natural Gas</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/", "_blank")}>Natural Gas</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/", "_blank")}>Natural Gas</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/data.php", "_blank")}>Natural Gas &rsaquo; Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/data.php", "_blank")}>Natural Gas &rsaquo; Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/reports.php", "_blank")}>Natural Gas &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/reports.php", "_blank")}>Natural Gas &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/naturalgas/browsebytag.php", "_blank")}>Natural Gas Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/naturalgas/browsebytag.php", "_blank")}>Natural Gas Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Nuclear</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/nuclear/", "_blank")}>Nuclear</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/nuclear/", "_blank")}>Nuclear</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/nuclear/data.php", "_blank")}>Nuclear &rsaquo; Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/nuclear/data.php", "_blank")}>Nuclear &rsaquo; Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/nuclear/reports.php", "_blank")}>Nuclear &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/nuclear/reports.php", "_blank")}>Nuclear &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/nuclear/browsebytag.php", "_blank")}>Nuclear &rsaquo; Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/nuclear/browsebytag.php", "_blank")}>Nuclear &rsaquo; Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Outlooks</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/outlooks/aeo/nems/documentation/index.php", "_blank")}>Outlooks &rsaquo; AEO &rsaquo; NEWS &rsaquo; Documentation</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/outlooks/aeo/nems/documentation/index.php", "_blank")}>Outlooks &rsaquo; AEO &rsaquo; NEWS &rsaquo; Documentation</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Petroleum</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/", "_blank")}>Petroleum &amp; Other Liquids</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/", "_blank")}>Petroleum &amp; Other Liquids</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/data.php", "_blank")}>Petroleum &amp; Other Liquids &rsaquo; Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/data.php", "_blank")}>Petroleum &amp; Other Liquids &rsaquo; Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/reports.php", "_blank")}>Petroleum &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/reports.php", "_blank")}>Petroleum &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/browsebytag.php", "_blank")}>Petroleum &rsaquo; Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/browsebytag.php", "_blank")}>Petroleum &rsaquo; Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/accuracyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; accuracyindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/accuracyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; accuracyindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/art9904index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; art9904index</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/art9904index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; art9904index</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/capexpansionindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; capexpansionindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/capexpansionindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; capexpansionindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/capriceindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; capriceindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/capriceindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; capriceindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/compareindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; compareindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/compareindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; compareindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/contrastdistindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; contrastdistindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/contrastdistindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; contrastdistindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/crudeforecastindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; crudeforecastindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/crudeforecastindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; crudeforecastindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/dependenceindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; dependenceindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/dependenceindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; dependenceindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/distillateassessindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; distillateassessindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/distillateassessindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; distillateassessindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/distillateprodindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; distillateprodindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/distillateprodindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; distillateprodindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/exxonindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; exxonindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/exxonindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; exxonindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/ferganaindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; ferganaindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/ferganaindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; ferganaindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/futureansindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; futureansindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/futureansindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; futureansindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/gasanalaysis96index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasanalaysis96index</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/gasanalaysis96index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasanalaysis96index</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/gasassess97index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasassess97index</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/gasassess97index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasassess97index</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/gasassessindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasassessindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/gasassessindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasassessindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/gaspsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gaspsindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/gaspsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gaspsindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/hollyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; hollyindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/hollyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; hollyindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/exxonindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; exxonindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/exxonindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; exxonindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/ferganaindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; ferganaindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/ferganaindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; ferganaindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/futureansindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; futureansindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/futureansindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; futureansindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/gasanalaysis96index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasanalaysis96index</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/gasanalaysis96index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasanalaysis96index</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/gasassess97index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasassess97index</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/gasassess97index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasassess97index</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/gasassessindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasassessindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/gasassessindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gasassessindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/gaspsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gaspsindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/gaspsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; gaspsindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/hollyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; hollyindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/hollyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; hollyindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/index1.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; index1</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/index1.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; index1</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/issuestrendsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; issuestrendsindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/issuestrendsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; issuestrendsindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/longtermindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; longtermindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/longtermindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; longtermindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/lsdoutlookindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; lsdoutlookindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/lsdoutlookindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; lsdoutlookindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/mtbeindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; mtbeindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/mtbeindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; mtbeindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/northeastindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; northeastindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/northeastindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; northeastindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/oilgasdevindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilgasdevindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/oilgasdevindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilgasdevindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/oilgasexplindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilgasexplindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/oilgasexplindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilgasexplindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/oilsupplyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilsupplyindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/oilsupplyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilsupplyindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/passthroughindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; passthroughindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/passthroughindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; passthroughindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/pricecompareindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; pricecompareindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/pricecompareindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; pricecompareindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/profileindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; profileindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/profileindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; profileindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/propassessindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; propassessindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/propassessindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; propassessindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/reform95index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; reform95index</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/reform95index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; reform95index</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/reformindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; reformindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/reformindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; reformindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/refoutagesindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; refoutagesindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/refoutagesindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; refoutagesindex</td>
								<td></td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/siberiaindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; siberiaindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/siberiaindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; siberiaindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/sidewaysindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; sidewaysindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/sidewaysindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; sidewaysindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/spgmogasindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; spgmogasindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/spgmogasindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; spgmogasindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/stickyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; stickyindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/stickyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; stickyindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/stocklevelsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; stocklevelsindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/stocklevelsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; stocklevelsindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/utilizationindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; utilizationindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/utilizationindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; utilizationindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/vzimpactsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; vzimpactsindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/vzimpactsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; vzimpactsindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/index1.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; index1</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/index1.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; index1</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/issuestrendsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; issuestrendsindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/issuestrendsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; issuestrendsindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/longtermindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; longtermindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/longtermindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; longtermindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/lsdoutlookindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; lsdoutlookindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/lsdoutlookindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; lsdoutlookindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/mtbeindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; mtbeindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/mtbeindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; mtbeindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/northeastindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; northeastindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/northeastindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; northeastindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/oilgasdevindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilgasdevindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/oilgasdevindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilgasdevindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/oilgasexplindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilgasexplindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/oilgasexplindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilgasexplindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/oilsupplyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilsupplyindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/oilsupplyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; oilsupplyindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/passthroughindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; passthroughindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/passthroughindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; passthroughindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/pricecompareindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; pricecompareindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/pricecompareindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; pricecompareindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/profileindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; profileindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/profileindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; profileindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/propassessindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; propassessindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/propassessindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; propassessindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/reform95index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; reform95index</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/reform95index.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; reform95index</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/reformindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; reformindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/reformindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; reformindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/refoutagesindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; refoutagesindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/refoutagesindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; refoutagesindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/siberiaindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; siberiaindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/siberiaindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; siberiaindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/sidewaysindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; sidewaysindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/sidewaysindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; sidewaysindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/spgmogasindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; spgmogasindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/spgmogasindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; spgmogasindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/stickyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; stickyindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/stickyindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; stickyindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/stocklevelsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; stocklevelsindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/stocklevelsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; stocklevelsindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/utilizationindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; utilizationindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/utilizationindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; utilizationindex</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/articles/vzimpactsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; vzimpactsindex</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/articles/vzimpactsindex.php", "_blank")}>Petroleum &rsaquo; Articles &rsaquo; vzimpactsindex</td>
								<td className="in-development"></td>
							</tr>

							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/drilling/faqs.php", "_blank")}>Petroleum &rsaquo; Drilling &rsaquo; faqs</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/drilling/faqs.php", "_blank")}>Petroleum &rsaquo; Drilling &rsaquo; faqs</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/drilling/faqs.php", "_blank")}>
									Petroleum &rsaquo; Drilling &rsaquo; FAQ's
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/drilling/index.php", "_blank")}>Petroleum &rsaquo; Drilling</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/drilling/index.php", "_blank")}>Petroleum &rsaquo; Drilling</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/drilling/index.php", "_blank")}>
									Petroleum &rsaquo; Drilling
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/ethanolcapacity/index.php", "_blank")}>Petroleum &rsaquo; Ethanol Capacity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/ethanolcapacity/index.php", "_blank")}>Petroleum &rsaquo; Ethanol Capacity</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/ethanolcapacity/index.php", "_blank")}>
									Petroleum &rsaquo; Ethanol Capacity
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/fueloilkerosene/index.php", "_blank")}>Petroleum &rsaquo; Fueloil & Kerosene</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/fueloilkerosene/index.php", "_blank")}>
									Petroleum &rsaquo; Fueloil & Kerosene &rsaquo;
								</td>

								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/fueloilkerosene/index.php", "_blank")}>Petroleum &rsaquo; Fueloil & Kerosene</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/diesel_map.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_map</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/diesel_map.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_map</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/diesel_methodology_archive.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_methodology_archive</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/diesel_methodology_archive.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_methodology_archive</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/diesel_procedure.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_procedure</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/diesel_procedure.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_procedure</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/diesel_procedure_archive.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_procedure_archive</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/diesel_procedure_archive.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_procedure_archive</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/diesel_proc-methods.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_proc-methods</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/diesel_proc-methods.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_proc-methods</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/dieselpump_hist.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; dieselpump_hist</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/dieselpump_hist.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; dieselpump_hist</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/faq_eia878-noq.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; FAQ's EIA 878-noq</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/faq_eia878-noq.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; FAQ's EIA 878-noq</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/faq_eia878-wq.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; FAQ's EIA 878-wq</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/faq_eia878-wq.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; FAQ's EIA 878-wq</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/faq_eia888-noq.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; FAQ's EIA 888-noq</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/faq_eia888-noq.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; FAQ's EIA 888-noq</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/faq_eia888-wq.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; FAQ's EIA 888-wq</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/faq_eia888-wq.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; FAQ's EIA 888-wq</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/gas_geographies.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; gas_geographies</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/gas_geographies.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; gas_geographies</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/gas_proc-methods.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; gas_proc-methods</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/gas_proc-methods.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; gas_proc-methods</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/gasoline_taxes.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; gasoline_taxes</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/gasoline_taxes.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; gasoline_taxes</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/gaspump_hist.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; gaspump_hist</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/gaspump_hist.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; gaspump_hist</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/gdu_noticerev.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; gdu_noticerev</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/gdu_noticerev.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; gdu_noticerev</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/geographies.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; geographies</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/geographies.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; geographies</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/index.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/index.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/learnmore.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; learnmore</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/learnmore.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; learnmore</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/notice-changes.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; notice-changes</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/notice-changes.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; notice-changes</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/notice-revision.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; notice-revision</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/notice-revision.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; notice-revision</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/pump_methodology.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; pump_methodology</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/pump_methodology.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; pump_methodology</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/schedule.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; Holiday Schedule</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/schedule.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; Holiday Schedule</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete redirect">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/tgas_geographies.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; tgas_geographies</td>
								<td className="complete">tgas_geographies</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete redirect">
								<td className="complete">diesel_methodology</td>
								<td className="complete">diesel_methodology</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete redirect">
								<td onClick={() => window.open("https://www.eia.gov/petroleum/gasdiesel/diesel_taxes.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_taxes</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/gasdiesel/diesel_taxes.php", "_blank")}>Petroleum &rsaquo; Gas & Diesel &rsaquo; diesel_taxes</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete redirect">
								<td className="complete">gas_methodology</td>
								<td className="complete">gas_methodology</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete redirect">
								<td className="complete">gas_nyc_counties</td>
								<td className="complete">gas_nyc_counties</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete redirect">
								<td className="complete">gas_procedure</td>
								<td className="complete">gas_procedure</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete redirect">
								<td className="complete">reformulated_map</td>
								<td className="complete">reformulated_map</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete redirect">
								<td className="complete">sampling_error</td>
								<td className="complete">sampling_error</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete redirect">
								<td className="complete">sampling_error_report</td>
								<td className="complete">sampling_error_report</td>
								<td className="in-development"></td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/faq_datausers.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's datausers</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/faq_datausers.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's datausers</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/faq_datausers.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's datausers
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/faq_eia878.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's EIA 878</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/faq_eia878.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's EIA 878</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/faq_eia878.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's EIA 878
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/faq_respondents.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's respondents</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/faq_respondents.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's respondents</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/faq_respondents.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's respondents
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/faq_stateofficials.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's stateofficials</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/faq_stateofficials.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's stateofficials</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/faq_stateofficials.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo; FAQ's stateofficials
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/forstateofficials.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; forstateofficials</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/forstateofficials.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; forstateofficials</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/forstateofficials.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo; forstateofficials
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/index.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/index.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; index &rsaquo; Need new expand collapse styles</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/index.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo;
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/padd-state_maps.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; padd-state_maps</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/padd-state_maps.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; padd-state_maps</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/padd-state_maps.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo; padd-state_maps
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/revision_report.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; Revision Report</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/revision_report.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; Revision Report</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/revision_report.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo; Revision Report
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/schedule.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; Holiday Schedule</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/schedule.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; Holiday Schedule</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/schedule.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo; Holiday Schedule
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/webinar/confirm.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; Webinar &rsaquo; Confirm</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/webinar/confirm.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; Webinar &rsaquo; Confirm</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/webinar/confirm.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo; Webinar &rsaquo; Confirm
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/heatingoilpropane/webinar/index.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; Webinar</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/heatingoilpropane/webinar/index.php", "_blank")}>Petroleum &rsaquo; Heating Oil Propane &rsaquo; Webinar</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/heatingoilpropane/webinar/index.php", "_blank")}>
									Petroleum &rsaquo; Heating Oil Propane &rsaquo; Webinar
								</td>
							</tr>
							{/*
<tr className="_head"><td colSpan="3">
<h3 className="_h3">Petroleum &rsaquo; Imports &rsaquo; Browser &rsaquo; Data &rsaquo; Classes</h3>
</td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/petroleum/imports/browser/data/index.php", "_blank")}>index</td><td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/imports/browser/data/index.php", "_blank")}>index</td><td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/imports/browser/data/index.php", "_blank")}></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/petroleum/imports/browser/index.php", "_blank")}>index</td><td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/imports/browser/index.php", "_blank")}>index</td><td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/imports/browser/index.php", "_blank")}></td>
</tr>
<tr className="_head"><td colSpan="3">
<h3 className="_h3">Petroleum &rsaquo; companylevel</h3>
</td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/petroleum/imports/companylevel/cli_note.php", "_blank")}>cli_ Note</td><td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/imports/companylevel/cli_note.php", "_blank")}>cli_ Note</td><td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/imports/companylevel/cli_note.php", "_blank")}>
cli_note
</td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/petroleum/imports/companylevel/index.php", "_blank")}>index</td><td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/imports/companylevel/index.php", "_blank")}>index</td><td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/imports/companylevel/index.php", "_blank")}></td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/petroleum/imports/companylevel/summary.php", "_blank")}>summary</td><td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/imports/companylevel/summary.php", "_blank")}>summary</td><td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/imports/companylevel/summary.php", "_blank")}>
summary
</td>
</tr>
<tr><td onClick={() => window.open("https://www.eia.gov/petroleum/imports/samples/index.php", "_blank")}>index</td><td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/imports/samples/index.php", "_blank")}>index</td><td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/imports/samples/index.php", "_blank")}></td>
</tr>
*/}
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/weekly/index.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Weekly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/weekly/index.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Weekly</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/weekly/index.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Weekly
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/weekly/nehor.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; nehor</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/weekly/nehor.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; nehor</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/weekly/nehor.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; nehor.php
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/weekly/schedule.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; Holiday Schedule</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/weekly/schedule.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; Holiday Schedule</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/weekly/schedule.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; schedule.php
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/weekly/wpsr_notice.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; wpsr_notice</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/weekly/wpsr_notice.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; wpsr_notice</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/weekly/wpsr_notice.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; wpsr_notice.php
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/weekly/wpsr_notice_propane.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; wpsr_notice_propane</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/weekly/wpsr_notice_propane.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; wpsr_notice_propane</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/weekly/wpsr_notice_propane.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Weekly &rsaquo; wpsr_notice_propane.php
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/monthly/index.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/monthly/index.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/monthly/index.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Monthly
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/monthly/psm_biodieselnote.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; PSM Biodiesel Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/monthly/psm_biodieselnote.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; PSM Biodiesel Note</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/monthly/psm_biodieselnote.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; PSM Biodiesel Note
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/monthly/psm_railcarnote.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; PSM Bailcar Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/monthly/psm_railcarnote.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; PSM Bailcar Note</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/monthly/psm_railcarnote.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; PSM Bailcar Note
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/monthly/psm_revisionnote.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; PSM Bevision Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/monthly/psm_revisionnote.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; PSM Bevision Note</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/monthly/psm_revisionnote.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; PSM Bevision Note
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/monthly/releasenote.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; release Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/monthly/releasenote.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; release Note</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/monthly/releasenote.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; release Note
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/monthly/releasenote_09062017.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; Release Note 09062017</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/monthly/releasenote_09062017.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; Release Note 09062017</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/monthly/releasenote_09062017.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; Release Note 09062017
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/supply/monthly/releasenote_10062016.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; Release Note 10062016</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/supply/monthly/releasenote_10062016.php", "_blank")}>Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; Release Note 10062016</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/adaptive/petroleum/supply/monthly/releasenote_10062016.php", "_blank")}>
									Petroleum &rsaquo; Supply &rsaquo; Monthly &rsaquo; Release Note 10062016
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/marketing/monthly/index.php", "_blank")}>Petroleum &rsaquo; Marketing &rsaquo; Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/marketing/monthly/index.php", "_blank")}>Petroleum &rsaquo; Marketing &rsaquo; Monthly</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/petroleum/marketing/monthly/index.php", "_blank")}>
									Petroleum &rsaquo; Marketing &rsaquo; Monthly
								</td>
							</tr>
							<tr>
								<td onClick={() => window.open("https://www.eia.gov/petroleum/marketing/prime/index.php", "_blank")}>Petroleum &rsaquo; Marketing &rsaquo; Prime</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/petroleum/marketing/prime/index.php", "_blank")}>Petroleum &rsaquo; Marketing &rsaquo; Prime</td>
								<td className="in-development" onClick={() => window.open("https://wwwdev.eia.gov/petroleum/marketing/prime/index.php", "_blank")}>
									Petroleum &rsaquo; Marketing &rsaquo; Prime
								</td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Renewable</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/renewable/", "_blank")}>Renewable &amp; Alternative Fuels</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/renewable/", "_blank")}>Renewable &amp; Alternative Fuels</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/renewable/data.php", "_blank")}>Renewable &amp; Alternative Fuels &rsaquo; Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/renewable/data.php", "_blank")}>Renewable &amp; Alternative Fuels &rsaquo; Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/renewable/reports.php", "_blank")}>Renewable &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/renewable/reports.php", "_blank")}>Renewable &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/renewable/browsebytag.php", "_blank")}>Renewable Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/renewable/browsebytag.php", "_blank")}>Renewable Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Total Energy</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/", "_blank")}>Total Energy</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/", "_blank")}>Total Energy</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/data/annual/index.php", "_blank")}>Total Energy &rsaquo; Data Annual</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/data/annual/index.php", "_blank")}>Total Energy &rsaquo; Data Annual</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/data/monthly/index.php", "_blank")}>Total Energy &rsaquo; Data Monthly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/data/monthly/index.php", "_blank")}>Total Energy &rsaquo; Data Monthly</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/reports.php", "_blank")}>Total Energy &rsaquo; Reports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/reports.php", "_blank")}>Total Energy &rsaquo; Reports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/data/monthly/previous.php", "_blank")}>Total Energy &rsaquo; Monthly &rsaquo; Previous</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/data/monthly/previous.php", "_blank")}>Total Energy &rsaquo; Monthly &rsaquo; Previous</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/data/annual/previous.php", "_blank")}>Total Energy &rsaquo; Annual &rsaquo; Previous</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/data/annual/previous.php", "_blank")}>Total Energy &rsaquo; Annual &rsaquo; Previous</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/data/annual/about_the_data.php", "_blank")}>Total Energy Annual &rsaquo; About the Data</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/data/annual/about_the_data.php", "_blank")}>Total Energy Annual &rsaquo; About the Data</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/data/monthly/whatsnew.php", "_blank")}>Total Energy &rsaquo; Monthly &rsaquo; What's New</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/data/monthly/whatsnew.php", "_blank")}>Total Energy &rsaquo; Monthly &rsaquo; What's New</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/data/annual/whatsnew.php", "_blank")}>Total Energy &rsaquo; Annual &rsaquo; What's New</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/data/annual/whatsnew.php", "_blank")}>Total Energy &rsaquo; Annual &rsaquo; What's New</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/totalenergy/browsebytag.php", "_blank")}>Total Energy &rsaquo; Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/totalenergy/browsebytag.php", "_blank")}>Total Energy &rsaquo; Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Uranium</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/index.php", "_blank")}>Uranium &rsaquo; Marketing</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/index.php", "_blank")}>Uranium &rsaquo; Marketing</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/summarytable1a.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Summary Table 1a</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/summarytable1a.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Summary Table 1a</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/summarytable1b.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Summary Table 1b</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/summarytable1b.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Summary Table 1b</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/summarytable2.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Summary Table 2</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/summarytable2.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Summary Table 2</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/summarytable3a.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Summary Table 3a</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/summarytable3a.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Summary Table 3a</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/summarytable3b.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Summary Table 3b</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/summarytable3b.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Summary Table 3b</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table1.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 1</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table1.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 1</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table2.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 2</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table2.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 2</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table3.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 3</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table3.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 3</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table4.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 4</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table4.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 4</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table5.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 5</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table5.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 5</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table6a.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 6a</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table6a.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 6a</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table6b.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 6b</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table6b.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 6b</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table7.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 7</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table7.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 7</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table8.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 8</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table8.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 8</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table9.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 9</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table9.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 9</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table10.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 10</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table10.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 10</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table11.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 11</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table11.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 11</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table12.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 12</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table12.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 12</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table13.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 13</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table13.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 13</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table14.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 14</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table14.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 14</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table15.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 15</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table15.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 15</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table16.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 16</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table16.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 16</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table17.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 17</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table17.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 17</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table18.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 18</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table18.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 18</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table19.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 19</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table19.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 19</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table20.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 20</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table20.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 20</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table21.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 21</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table21.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 21</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table22.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 22</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table22.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 22</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table23.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 23</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table23.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 23</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table24.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 24</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table24.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 24</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/marketing/table25.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 25</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/marketing/table25.php", "_blank")}>Uranium &rsaquo; Marketing &rsaquo; Table 25</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/index.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/index.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/ufig1.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig1</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/ufig1.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig1</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/ufig2.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig2</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/ufig2.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig2</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/ufig3.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig3</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/ufig3.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig3</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/ufig4.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig4</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/ufig4.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig4</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/ufig5.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig5</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/ufig5.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig5</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/ufig6.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig6</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/ufig6.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig6</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/ufig7.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig7</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/ufig7.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ufig7</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/udrilling.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; udrilling</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/udrilling.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; udrilling</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/uemploycat.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; uemploycat</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/uemploycat.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; uemploycat</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/uemplystate.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; uemplystate</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/uemplystate.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; uemplystate</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/uexpenditures.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; uexpenditures</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/uexpenditures.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; uexpenditures</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/uisl.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; uisl</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/uisl.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; uisl</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/umills.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; umills</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/umills.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; umills</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/umine.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; umine</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/umine.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; umine</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/uprodship.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; uprodship</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/uprodship.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; uprodship</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/ureserve.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ureserve</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/ureserve.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; ureserve</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/annual/usummary.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; usummary</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/annual/usummary.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Annual &rsaquo; usummary</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/quarterly/index.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/quarterly/index.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/quarterly/qupdfigure1.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly &rsaquo; qupdfigure1</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/quarterly/qupdfigure1.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly &rsaquo; qupdfigure1</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/quarterly/qupdtable1.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly &rsaquo; qupdtable1</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/quarterly/qupdtable1.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly &rsaquo; qupdtable1</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/quarterly/qupdtable2.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly &rsaquo; qupdtable2</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/quarterly/qupdtable2.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly &rsaquo; qupdtable2</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/quarterly/qupdtable3.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly &rsaquo; qupdtable3</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/quarterly/qupdtable3.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly &rsaquo; qupdtable3</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/uranium/production/quarterly/qupdtable4.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly &rsaquo; qupdtable4</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/uranium/production/quarterly/qupdtable4.php", "_blank")}>Uranium &rsaquo; Production &rsaquo; Quarterly &rsaquo; qupdtable4</td>
								<td className="in-development"></td>
							</tr>
							{/*
<tr className="_head _section"><td className="in-development" colSpan="3">About</td>
</tr>

<tr><td onClick={()=> window.open("https://www.eia.gov/about/accomplishments.php", "_blank")}>accomplishments</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/accomplishments.php", "_blank")}>accomplishments</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/accomplishments.php", "_blank")}>accomplishments</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/announcement.php", "_blank")}>announcement</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/announcement.php", "_blank")}>announcement</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/announcement.php", "_blank")}>announcement</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/budget_performance.php", "_blank")}>budget_performance</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/budget_performance.php", "_blank")}>budget_performance</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/budget_performance.php", "_blank")}>budget_performance</td>
</tr>
<tr className="_head"><td className="in-development" colSpan="3"><h3 className="_h3">careers</h3></td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/careers/a_day_at_eia.php", "_blank")}>a_day_at_eia</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/a_day_at_eia.php", "_blank")}>a_day_at_eia</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/a_day_at_eia.php", "_blank")}>a_day_at_eia</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/careers/benefits.php", "_blank")}>benefits</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/benefits.php", "_blank")}>benefits</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/benefits.php", "_blank")}>benefits</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/careers/index.php", "_blank")}>index</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/index.php", "_blank")}>index</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/index.php", "_blank")}>index</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/careers/internships.php", "_blank")}>internships</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/internships.php", "_blank")}>internships</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/internships.php", "_blank")}>internships</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/careers/tips.php", "_blank")}>tips</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/tips.php", "_blank")}>tips</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/tips.php", "_blank")}>tips</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/careers/whyichose.php", "_blank")}>whyichose</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/whyichose.php", "_blank")}>whyichose</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/careers/whyichose.php", "_blank")}>whyichose</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/cipsea_reporting.php", "_blank")}>cipsea_reporting</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/cipsea_reporting.php", "_blank")}>cipsea_reporting</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/cipsea_reporting.php", "_blank")}>cipsea_reporting</td>
</tr>
<tr className="_head"><td className="in-development" colSpan="3"><h3 className="_h3">Home</h3></td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/coal.php", "_blank")}>coal</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/coal.php", "_blank")}>coal</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/coal.php", "_blank")}>coal</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/Home-template.php", "_blank")}>Home-template</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/Home-template.php", "_blank")}>Home-template</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/Home-template.php", "_blank")}>Home-template</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/economic.php", "_blank")}>economic</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/economic.php", "_blank")}>economic</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/economic.php", "_blank")}>economic</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/electric.php", "_blank")}>electric</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/electric.php", "_blank")}>electric</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/electric.php", "_blank")}>electric</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/electrictw.php", "_blank")}>electrictw</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/electrictw.php", "_blank")}>electrictw</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/electrictw.php", "_blank")}>electrictw</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/environmental.php", "_blank")}>environmental</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/environmental.php", "_blank")}>environmental</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/environmental.php", "_blank")}>environmental</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/forecasting.php", "_blank")}>forecasting</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/forecasting.php", "_blank")}>forecasting</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/forecasting.php", "_blank")}>forecasting</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/iea.php", "_blank")}>iea</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/iea.php", "_blank")}>iea</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/iea.php", "_blank")}>iea</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/index.php", "_blank")}>index</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/index.php", "_blank")}>index</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/index.php", "_blank")}>index</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/methods.php", "_blank")}>methods</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/methods.php", "_blank")}>methods</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/methods.php", "_blank")}>methods</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/multifc.php", "_blank")}>multifc</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/multifc.php", "_blank")}>multifc</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/multifc.php", "_blank")}>multifc</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/natgas.php", "_blank")}>natgas</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/natgas.php", "_blank")}>natgas</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/natgas.php", "_blank")}>natgas</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/ngl_virtualmeeting.php", "_blank")}>ngl_virtualmeeting</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/ngl_virtualmeeting.php", "_blank")}>ngl_virtualmeeting</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/ngl_virtualmeeting.php", "_blank")}>ngl_virtualmeeting</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/nuclear.php", "_blank")}>nuclear</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/nuclear.php", "_blank")}>nuclear</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/nuclear.php", "_blank")}>nuclear</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/petrol.php", "_blank")}>petrol</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/petrol.php", "_blank")}>petrol</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/petrol.php", "_blank")}>petrol</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/renew.php", "_blank")}>renew</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/renew.php", "_blank")}>renew</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/renew.php", "_blank")}>renew</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/state.php", "_blank")}>state</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/state.php", "_blank")}>state</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/state.php", "_blank")}>state</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/Home/totalenergy.php", "_blank")}>totalenergy</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/totalenergy.php", "_blank")}>totalenergy</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/Home/totalenergy.php", "_blank")}>totalenergy</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/copyrights_reuse.php", "_blank")}>copyrights_reuse</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/copyrights_reuse.php", "_blank")}>copyrights_reuse</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/copyrights_reuse.php", "_blank")}>copyrights_reuse</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/eia_explained.php", "_blank")}>eia_explained</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/eia_explained.php", "_blank")}>eia_explained</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/eia_explained.php", "_blank")}>eia_explained</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/eia_offices.php", "_blank")}>eia_offices</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/eia_offices.php", "_blank")}>eia_offices</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/eia_offices.php", "_blank")}>eia_offices</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/eia_standards.php", "_blank")}>eia_standards</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/eia_standards.php", "_blank")}>eia_standards</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/eia_standards.php", "_blank")}>eia_standards</td>
</tr>
<tr className="_head"><td className="in-development" colSpan="3"><h3 className="_h3">especiallyfor</h3></td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/especiallyfor/analysts.php", "_blank")}>analysts</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/especiallyfor/analysts.php", "_blank")}>analysts</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/especiallyfor/analysts.php", "_blank")}>analysts</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/especiallyfor/employees.php", "_blank")}>employees</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/especiallyfor/employees.php", "_blank")}>employees</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/especiallyfor/employees.php", "_blank")}>employees</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/especiallyfor/researchers.php", "_blank")}>researchers</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/especiallyfor/researchers.php", "_blank")}>researchers</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/especiallyfor/researchers.php", "_blank")}>researchers</td>
</tr>
<tr className="_head"><td className="in-development" colSpan="3"><h3 className="_h3">feedback</h3></td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/feedback/index.php", "_blank")}>index</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/feedback/index.php", "_blank")}>index</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/feedback/index.php", "_blank")}>index</td>
</tr>
<tr><td>
<a target="_blank" href="https://www.eia.gov/about/foia.php", "_blank")}>foia</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/foia.php", "_blank")}>foia</td><td>
<a  className="in-development"target="_blank" href="https://wwwdev.eia.gov/about/foia.php", "_blank")}>foia</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/ian_mead.php", "_blank")}>ian_mead</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/ian_mead.php", "_blank")}>ian_mead</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/ian_mead.php", "_blank")}>ian_mead</td>
</tr>
<tr><td>
<a target="_blank" href="https://www.eia.gov/about/index.php", "_blank")}>index</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/index.php", "_blank")}>index</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/index.php", "_blank")}>index</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/information_quality_guidelines.php", "_blank")}>information_quality_guidelines</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/information_quality_guidelines.php", "_blank")}>information_quality_guidelines</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/information_quality_guidelines.php", "_blank")}>information_quality_guidelines</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/legislative_timeline.php", "_blank")}>legislative_timeline</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/legislative_timeline.php", "_blank")}>legislative_timeline</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/legislative_timeline.php", "_blank")}>legislative_timeline</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/linda_capuano.php", "_blank")}>linda_capuano</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/linda_capuano.php", "_blank")}>linda_capuano</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/linda_capuano.php", "_blank")}>linda_capuano</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/michael_corriere.php", "_blank")}>michael_corriere</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/michael_corriere.php", "_blank")}>michael_corriere</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/michael_corriere.php", "_blank")}>michael_corriere</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/mission_overview.php", "_blank")}>mission_overview</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/mission_overview.php", "_blank")}>mission_overview</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/mission_overview.php", "_blank")}>mission_overview</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/organization_chart.php", "_blank")}>organization_chart</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/organization_chart.php", "_blank")}>organization_chart</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/organization_chart.php", "_blank")}>organization_chart</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/previous_administrators.php", "_blank")}>previous_administrators</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/previous_administrators.php", "_blank")}>previous_administrators</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/previous_administrators.php", "_blank")}>previous_administrators</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/printer_friendly_org_chart.pdf.png", "_blank")}>printer_friendly_org_chart.pdf.png</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/printer_friendly_org_chart.pdf.png", "_blank")}>printer_friendly_org_chart.pdf.png</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/printer_friendly_org_chart.pdf.png", "_blank")}>printer_friendly_org_chart.pdf.png</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/privacy_security_policy.php", "_blank")}>privacy_security_policy</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/privacy_security_policy.php", "_blank")}>privacy_security_policy</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/privacy_security_policy.php", "_blank")}>privacy_security_policy</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/products_services.php", "_blank")}>products_services</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/products_services.php", "_blank")}>products_services</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/products_services.php", "_blank")}>products_services</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/publishing_priorities_schedule.php", "_blank")}>publishing_priorities_schedule</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/publishing_priorities_schedule.php", "_blank")}>publishing_priorities_schedule</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/publishing_priorities_schedule.php", "_blank")}>publishing_priorities_schedule</td>
</tr>
<tr><td>
<a target="_blank" href="https://www.eia.gov/about/recruit.php", "_blank")}>recruit</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/recruit.php", "_blank")}>recruit</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/recruit.php", "_blank")}>recruit</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/scientific_integrity.php", "_blank")}>scientific_integrity</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/scientific_integrity.php", "_blank")}>scientific_integrity</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/scientific_integrity.php", "_blank")}>scientific_integrity</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/senior_executive_bios.php", "_blank")}>senior_executive_bios</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/senior_executive_bios.php", "_blank")}>senior_executive_bios</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/senior_executive_bios.php", "_blank")}>senior_executive_bios</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/stakeholders.php", "_blank")}>stakeholders</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/stakeholders.php", "_blank")}>stakeholders</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/stakeholders.php", "_blank")}>stakeholders</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/stephen_nalley.php", "_blank")}>stephen_nalley</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/stephen_nalley.php", "_blank")}>stephen_nalley</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/stephen_nalley.php", "_blank")}>stephen_nalley</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/strategic_plan.php", "_blank")}>strategic_plan</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/strategic_plan.php", "_blank")}>strategic_plan</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/strategic_plan.php", "_blank")}>strategic_plan</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/thomas_leckey.php", "_blank")}>thomas_leckey</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/thomas_leckey.php", "_blank")}>thomas_leckey</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/thomas_leckey.php", "_blank")}>thomas_leckey</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/about/writing-styleguide.php", "_blank")}>writing-styleguide</td><td onClick={()=> window.open("https://wwwdev.eia.gov/about/writing-styleguide.php", "_blank")}>writing-styleguide</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/about/writing-styleguide.php", "_blank")}>writing-styleguide</td>
</tr>
<tr className="_head _section"><td className="in-development" colSpan="3"><h3 className="_h3">About</h3></td>
</tr>
<tr className="_head _section"><td className="in-development" colSpan="3"><h3 className="_h3">Conference</h3></td>
</tr>
<tr className="_head"><td className="in-development" colSpan="3"><h3 className="_h3">conference &rsaquo; 2018</h3></td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/conference/2018/index.php", "_blank")}>index</td><td onClick={()=> window.open("https://wwwdev.eia.gov/conference/2018/index.php", "_blank")}>index</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/conference/2018/index.php", "_blank")}>index</td>
</tr>

<tr className="_head"><td className="in-development" colSpan="3"><h3 className="_h3">conference &rsaquo; EIA survey</h3></td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/conference/eia_survey/index.php", "_blank")}>index</td><td onClick={()=> window.open("https://wwwdev.eia.gov/conference/eia_survey/index.php", "_blank")}>index</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/conference/eia_survey/index.php", "_blank")}>index</td>
</tr>
<tr><td onClick={()=> window.open("https://www.eia.gov/conference/survey/index.php", "_blank")}>index</td><td onClick={()=> window.open("https://wwwdev.eia.gov/conference/survey/index.php", "_blank")}>index</td><td className="in-development" onClick={()=> window.open("https://wwwdev.eia.gov/conference/survey/index.php", "_blank")}>index</td>
</tr>
*/}
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Tools</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/", "_blank")}>Tools</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/", "_blank")}>Tools</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head">
								<td colSpan="3">
									<h3 className="_h3">Tools &rsaquo; A-Z</h3>
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/a-z/", "_blank")}>A-Z</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/a-z/", "_blank")}>A-Z</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head">
								<td colSpan="3">
									<h3 className="_h3">Tools &rsaquo; Glossary</h3>
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/glossary/", "_blank")}>Glossary</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/glossary/", "_blank")}>Glossary</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head">
								<td colSpan="3">
									<h3 className="_h3">Tools &rsaquo; FAQs</h3>
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/faqs/", "_blank")}>Faqs</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/faqs/", "_blank")}>Faqs</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/faqs/faq.php", "_blank")}>Faqs</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/faqs/faq.php", "_blank")}>Faqs</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/faqs/ask_q.php", "_blank")}>Faqs (ask question)</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/faqs/ask_q.php", "_blank")}>Faqs (ask question)</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/faqs/gasprimer.php", "_blank")}>Faqs (gasprimer)</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/faqs/gasprimer.php", "_blank")}>Faqs (gasprimer)</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head">
								<td colSpan="3">
									<h3 className="_h3">Tools &rsaquo; Email Updates</h3>
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/emailupdates/", "_blank")}>Sign-up</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/emailupdates/", "_blank")}>Sign-up</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/emailupdates/unsubscribe.php", "_blank")}>Unsubscribe</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/emailupdates/unsubscribe.php", "_blank")}>Unsubscribe</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/emailupdates/index_disabled.php", "_blank")}>Disabled</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/emailupdates/index_disabled.php", "_blank")}>Disabled</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/emailupdates/index_maintenance.php", "_blank")}>Maintenance</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/emailupdates/index_maintenance.php", "_blank")}>Maintenance</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head">
								<td colSpan="3">
									<h3 className="_h3">Tools &rsaquo; RSS Updates</h3>
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/tools/rssfeeds/", "_blank")}>RSS</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/tools/rssfeeds/", "_blank")}>RSS</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head">
								<td colSpan="3">
									<h3 className="_h3">Tools &rsaquo; Survey</h3>
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/index.php", "_blank")}>Survey</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/index.php", "_blank")}>Survey</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/changes/coal/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Coal</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/changes/coal/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Coal</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/changes/coal/2013/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; 2013</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/changes/coal/2013/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; 2013</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/changes/coal/2017/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; 2017</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/changes/coal/2017/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; 2017</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/changes/electricity/comments.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Electricity &rsaquo; Comments</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/changes/electricity/comments.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Electricity &rsaquo; Comments</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/changes/electricity/comments30day.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Electricity &rsaquo; Comments 30 day</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/changes/electricity/comments30day.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Electricity &rsaquo; Comments 30 day</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/changes/electricity/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Electricity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/changes/electricity/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Electricity</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/changes/electricity/2020/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Electricity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/changes/electricity/2020/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Electricity</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/changes/nuclear/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Nuclear</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/changes/nuclear/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Nuclear</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/changes/renewables/2018/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Renewables</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/changes/renewables/2018/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Renewables</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/changes/uranium/2018/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Uranium</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/changes/uranium/2018/index.php", "_blank")}>Survey &rsaquo; Changes &rsaquo; Uranium</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/faqs/bulk_terminal.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; bulk terminal</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/faqs/bulk_terminal.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; bulk terminal</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/faqs/eia914.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; EIA914</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/faqs/eia914.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; EIA914</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/faqs/electricity.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; Electricity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/faqs/electricity.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; Electricity</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/faqs/imports.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; Imports</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/faqs/imports.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; Imports</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/faqs/oxygenate.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; oxygenate</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/faqs/oxygenate.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; oxygenate</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/faqs/product_pipeline.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; product pipeline</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/faqs/product_pipeline.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; product pipeline</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/faqs/refinery.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; refinery</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/faqs/refinery.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; refinery</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/faqs/storage_capacity.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; storage capacity</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/faqs/storage_capacity.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; storage capacity</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/faqs/terminal_blenders.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; terminal blenders</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/faqs/terminal_blenders.php", "_blank")}>Survey &rsaquo; FAQ's &rsaquo; terminal blenders</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_14/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 14 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_14/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 14 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_14/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_14/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_176/efs176.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 176 &rsaquo; efs176</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_176/efs176.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 176 &rsaquo; efs176</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_182/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 182 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_182/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 182 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_182/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_182/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_23l/rigs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 23l &rsaquo; rigs</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_23l/rigs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 23l &rsaquo; rigs</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_3/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 3 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_3/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 3 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_63c/proposed/index.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed</td>
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_63c/proposed/index.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_782a/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 782a &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_782a/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 782a &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_782a/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_782a/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_782c/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 782c &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_782c/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 782c &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_782c/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_782c/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_7a/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 7a &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_7a/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 7a &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_821/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 821 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_821/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 821 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_821/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_821/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_826/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 826 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_826/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 826 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_856/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 856 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_856/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 856 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_856/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_856/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_857/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 857 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_857/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 857 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_861/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 861 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_861/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 861 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_861m/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 861m &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_861m/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 861m &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_863/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_863/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_878/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 878 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_878/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 878 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_878/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_878/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_888/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 888 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_888/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 888 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_888/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_888/proposed/frn_note.php", "_blank")}>Survey &rsaquo; Form &rsaquo; Proposed &rsaquo; Federal Register Notice Note</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_8a/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 8a &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/eia_8a/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 8a &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_914/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 914 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_914/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; EIA 914 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_914/2014/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; 2014 &rsaquo; FAQ's</td>
								<td onClick={() => window.open("https://www.eia.gov/survey/form/eia_914/2014/faqs.php", "_blank")}>Survey &rsaquo; Form &rsaquo; 2014 &rsaquo; FAQ's</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/form/pedro/index.php", "_blank")}>Survey &rsaquo; Form &rsaquo; pedro</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/form/pedro/index.php", "_blank")}>Survey &rsaquo; Form &rsaquo; pedro</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/meetings/coal1212/index.php", "_blank")}>Survey &rsaquo; meetings &rsaquo; Coal1212</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/meetings/coal1212/index.php", "_blank")}>Survey &rsaquo; meetings &rsaquo; Coal1212</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/meetings/coal1212/mail-wapp.php", "_blank")}>Survey &rsaquo; meetings &rsaquo; mail-wapp</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/meetings/coal1212/mail-wapp.php", "_blank")}>Survey &rsaquo; meetings &rsaquo; mail-wapp</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/meetings/elec-prelim0612/index.php", "_blank")}>Survey &rsaquo; meetings &rsaquo; elec-prelim0612</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/meetings/elec-prelim0612/index.php", "_blank")}>Survey &rsaquo; meetings &rsaquo; elec-prelim0612</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/consumption_mecs2014.php", "_blank")}>Survey &rsaquo; notice &rsaquo; consumption_mecs2014</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/consumption_mecs2014.php", "_blank")}>Survey &rsaquo; notice &rsaquo; consumption_mecs2014</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/marketing2013.php", "_blank")}>Survey &rsaquo; notice &rsaquo; marketing2013</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/marketing2013.php", "_blank")}>Survey &rsaquo; notice &rsaquo; marketing2013</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/marketing2014.php", "_blank")}>Survey &rsaquo; notice &rsaquo; marketing2014</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/marketing2014.php", "_blank")}>Survey &rsaquo; notice &rsaquo; marketing2014</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/marketing2017.php", "_blank")}>Survey &rsaquo; notice &rsaquo; marketing2017</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/marketing2017.php", "_blank")}>Survey &rsaquo; notice &rsaquo; marketing2017</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/marketing2019.php", "_blank")}>Survey &rsaquo; notice &rsaquo; marketing2019</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/marketing2019.php", "_blank")}>Survey &rsaquo; notice &rsaquo; marketing2019</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/ngdownstreamforms2015.php", "_blank")}>Survey &rsaquo; notice &rsaquo; ngdownstreamforms2015</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/ngdownstreamforms2015.php", "_blank")}>Survey &rsaquo; notice &rsaquo; ngdownstreamforms2015</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/ngdownstreamforms2018.php", "_blank")}>Survey &rsaquo; notice &rsaquo; ngdownstreamforms2018</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/ngdownstreamforms2018.php", "_blank")}>Survey &rsaquo; notice &rsaquo; ngdownstreamforms2018</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/ngforms2015.php", "_blank")}>Survey &rsaquo; notice &rsaquo; ngforms2015</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/ngforms2015.php", "_blank")}>Survey &rsaquo; notice &rsaquo; ngforms2015</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/petform806ngliquids.php", "_blank")}>Survey &rsaquo; notice &rsaquo; petform806ngliquids</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/petform806ngliquids.php", "_blank")}>Survey &rsaquo; notice &rsaquo; petform806ngliquids</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/petngproduction2017.php", "_blank")}>Survey &rsaquo; notice &rsaquo; petngproduction2017</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/petngproduction2017.php", "_blank")}>Survey &rsaquo; notice &rsaquo; petngproduction2017</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/petsupply2013.php", "_blank")}>Survey &rsaquo; notice &rsaquo; petsupply2013</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/petsupply2013.php", "_blank")}>Survey &rsaquo; notice &rsaquo; petsupply2013</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/survey/notice/petsupply2019.php", "_blank")}>Survey &rsaquo; notice &rsaquo; petsupply2019</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/survey/notice/petsupply2019.php", "_blank")}>Survey &rsaquo; notice &rsaquo; petsupply2019</td>
								<td className="in-development"></td>
							</tr>
							<tr className="_head _section">
								<td colSpan="3">
									<h2 className="_h2">Reports & Publications</h2> <Top />
								</td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/reports/upcoming.php", "_blank")}>Reports & Publications &rsaquo; Upcoming Reports & Publications</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/reports/upcoming.php", "_blank")}>Reports & Publications &rsaquo; Upcoming Reports & Publications</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/reports/index.php", "_blank")}>Reports & Publications &rsaquo; All Reports & Publications</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/reports/index.php", "_blank")}>Reports & Publications &rsaquo; All Reports & Publications</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/reports/browsebytag.php", "_blank")}>Reports & Publications &rsaquo; All Reports & Publications &rsaquo; Browse by Tag</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/reports/browsebytag.php", "_blank")}>Reports & Publications &rsaquo; All Reports & Publications &rsaquo; Browse by Tag</td>
								<td className="in-development"></td>
							</tr>
							<tr className="complete">
								<td onClick={() => window.open("https://www.eia.gov/reports/announcement.php", "_blank")}>Reports & Publications &rsaquo; All Reports & Publications &rsaquo; Announcements</td>
								<td onClick={() => window.open("https://wwwdev.eia.gov/reports/announcement.php", "_blank")}>Reports & Publications &rsaquo; All Reports & Publications &rsaquo; Announcements</td>
								<td className="in-development"></td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td className="in-development" colSpan="3">
									<Top />
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</Page>
		)
	}
}

export default Sitemap
