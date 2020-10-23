import React, { Component } from "react"
import Page from "./Page"
import { Tabs } from "@yazanaabed/react-tabs"

import IconSocial from "./IconSocial/IconSocial"
import IconConsumptionSurveys from "./IconSocial/IconConsumptionSurveys"
import IconNavigational from "./IconSocial/IconNavigational"
import AnalysisProjectionsIcons from "./IconSocial/AnalysisProjectionsIcons"
import IconInformative from "./IconInformative/IconInformative"
import GridIcons from "./Icons/GridIcons"
import GeneralIcons from "./Icons/GeneralIcons"
import ControlIcons from "./Icons/ControlIcons"
import ThisWeekIcons from "./Icons/ThisWeekIcons"

class BaseIcons extends Component {
	render() {
		return (
			<Page title="Icons">
				<span className="base">
					<h1 className="_h1">Icons</h1>
					<ThisWeekIcons />
					<IconInformative />
					<GridIcons />
					<ControlIcons />
					<GeneralIcons />

					{/*
						<div className="_source-icon">
							<span className="ico close-menu">
								<span>CLOSE MENU</span>
							</span>
						</div>
						<div className="_source-icon">
							<span className="ico search-submit">
								<span>SUBMIT</span>
							</span>
						</div>
						<div className="_source-icon">
							<span className="ico analysis">
								<span>analysis</span>
							</span>
						</div>
						<div className="_source-icon">
							<span className="ico cancel">
								<span>cancel</span>
							</span>
						</div>
						<div className="_source-icon">
							<span className="ico column-chart">
								<span>column-chart</span>
							</span>
						</div>
						<div className="_source-icon">
							<span className="ico compare">
								<span>compare</span>
							</span>
						</div>
						<div className="_source-icon">
							<span className="ico d-arrow">
								<span>DOWN ARROW</span>
							</span>
						</div>
						<div className="_source-icon">
							<span className="ico download">
								<span>download</span>
							</span>
						</div>
						<div className="_source-icon">
							<span className="ico edit">
								<span>edit</span>
							</span>
						</div>
						<div className="_source-icon">
							<span className="ico filter">
								<span>filter</span>
							</span>
						</div>
						<div className="_source-icon">
							<span className="ico grab-dot">
								<span>grab dotS</span>
							</span>
						</div>
						*/}

					<AnalysisProjectionsIcons />
					<IconNavigational />
					<IconConsumptionSurveys />
					<IconSocial />
				</span>
			</Page>
		)
	}
}

export default BaseIcons
