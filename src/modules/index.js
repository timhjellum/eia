import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import ModulesHome from "./Home";
import ModulesAccordion from "./accordion";
import ModulesBanners from "./banners";
import ModulesContact from "./contact";
import ModulesEnergyEducation from "./energy-education";
import ModulesFancyBox from "./fancybox";
import ModulesForms from "./forms";
import ModulesImages from "./images";
import ModulesLists from "./lists";
import ModulesPageTitles from "./page-titles";
import ModulesReportHeaders from "./report-headers";
import ModulesTables from "./tables";
import ModulesTabs from "./tabs";
/*
import TableRowBold from "./RowBold";
import TableHeadDouble from "./HeadDouble";
import TableFullWidth from "./FullWidth";
import TablesStacked from "./TablesStacked";
import TableColumnHide from "./ColumnHide";
import TableColumnHighlight from "./ColumnHighlight";
import TableRowIndent from "./RowIndent";
import TableRowSectionDivider from "./RowSectionDivider";
import TableRowSectionHeader from "./RowSectionHeader";
import TableRowTotal from "./RowTotal";
import TableDefault from "./TableDefault";
import TableIcons from "./TableIcons";
import TableRowSelected from "./RowSelected";
import TableRow from "./Row";
*/

class Modules extends Component {
	render() {
		return (
			<Router>
				<ul className="left-content">
					<li>
						<NavLink to="/modules/">Modules Home</NavLink>
					</li>
					<li>
						<NavLink to="/modules/accordion">Accordion</NavLink>
					</li>
					<li>
						<NavLink to="/modules/banners">Banners</NavLink>
					</li>
					<li>
						<NavLink to="/modules/contact">Contact</NavLink>
					</li>
					<li>
						<NavLink to="/modules/energy-education">
							Energy Education
						</NavLink>
					</li>
					<li>
						<NavLink to="/modules/fancybox">Fancybox</NavLink>
					</li>
					<li>
						<NavLink to="/modules/forms">Forms</NavLink>
					</li>
					<li>
						<NavLink to="/modules/images">mages</NavLink>
					</li>
					<li>
						<NavLink to="/modules/lists">Lists</NavLink>
					</li>
					<li>
						<NavLink to="/modules/page-titles">Page Titles</NavLink>
					</li>
					<li>
						<NavLink to="/modules/report-headers">
							Report Header
						</NavLink>
					</li>
					<li>
						<NavLink to="/modules/tables">Tables</NavLink>
					</li>
					<li>
						<NavLink to="/modules/tabs">Tabs</NavLink>
					</li>
				</ul>

				<Route
					exact
					path={`${this.props.match.path}/`}
					component={ModulesHome}
				/>
				<Route
					path={`${this.props.match.path}/accordion`}
					component={ModulesAccordion}
				/>
				<Route
					path={`${this.props.match.path}/banners`}
					component={ModulesBanners}
				/>
				<Route
					path={`${this.props.match.path}/contact`}
					component={ModulesContact}
				/>
				<Route
					path={`${this.props.match.path}/energy-education`}
					component={ModulesEnergyEducation}
				/>
				<Route
					path={`${this.props.match.path}/fancybox`}
					component={ModulesFancyBox}
				/>
				<Route
					path={`${this.props.match.path}/forms`}
					component={ModulesForms}
				/>
				<Route
					path={`${this.props.match.path}/images`}
					component={ModulesImages}
				/>
				<Route
					path={`${this.props.match.path}/lists`}
					component={ModulesLists}
				/>
				<Route
					path={`${this.props.match.path}/page-titles`}
					component={ModulesPageTitles}
				/>
				<Route
					path={`${this.props.match.path}/report-headers`}
					component={ModulesReportHeaders}
				/>
				<Route
					path={`${this.props.match.path}/tables`}
					component={ModulesTables}
				/>
				<Route
					path={`${this.props.match.path}/tabs`}
					component={ModulesTabs}
				/>
			</Router>
		);
	}
}
export default Modules;
