import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import ModulesHome from "./Home";
import Accordions from "./Accordions";
import Banners from "./Banners";
import Contact from "./Contact";
import EnergyEducation from "./EnergyEducation";
import FancyBox from "./Fancybox";
import Forms from "./Forms";
import Images from "./Images";
import Lists from "./Lists";
import PageTitles from "./PageTitles";
import ReportHeaders from "./ReportHeaders";
import Tables from "./Tables";
import Tabs from "./Tabs";
import Visulizations from "./Visulizations";

class Modules extends Component {
	render() {
		return (
			<Router>
				<ul className="left-content">
					<li>
						<NavLink to="/modules/">Modules Home</NavLink>
					</li>
					<li>
						<NavLink to="/modules/accordions">Accordions</NavLink>
					</li>
					<li>
						<NavLink to="/modules/banners">Banners</NavLink>
					</li>
					<li>
						<NavLink to="/modules/contact">Contact</NavLink>
					</li>
					<li>
						<NavLink to="/modules/energy-education">Energy Education</NavLink>
					</li>
					<li>
						<NavLink to="/modules/fancybox">Fancybox</NavLink>
					</li>
					<li>
						<NavLink to="/modules/forms">Forms</NavLink>
					</li>
					<li>
						<NavLink to="/modules/images">Images</NavLink>
					</li>
					<li>
						<NavLink to="/modules/lists">Lists</NavLink>
					</li>
					<li>
						<NavLink to="/modules/page-titles">Page Titles</NavLink>
					</li>
					<li>
						<NavLink to="/modules/report-headers">Report Headers</NavLink>
					</li>

					<li>
						<NavLink to="/modules/tables">Tables</NavLink>
					</li>

					<li>
						<NavLink to="/modules/tabs">Tabs</NavLink>
					</li>
					<li>
						<NavLink to="/modules/visulizations">Visulizations</NavLink>
					</li>
				</ul>
				<Route
					exact
					path={`${this.props.match.path}/`}
					component={ModulesHome}
				/>

				<Route
					path={`${this.props.match.path}/Accordions`}
					component={Accordions}
				/>

				<Route path={`${this.props.match.path}/Banners`} component={Banners} />

				<Route path={`${this.props.match.path}/Contact`} component={Contact} />
				<Route
					path={`${this.props.match.path}/EnergyEducation`}
					component={EnergyEducation}
				/>
				<Route
					path={`${this.props.match.path}/Fancybox`}
					component={FancyBox}
				/>
				<Route path={`${this.props.match.path}/Forms`} component={Forms} />
				<Route path={`${this.props.match.path}/Images`} component={Images} />
				<Route path={`${this.props.match.path}/Lists`} component={Lists} />
				<Route
					path={`${this.props.match.path}/PageTitles`}
					component={PageTitles}
				/>
				<Route
					path={`${this.props.match.path}/ReportHeaders`}
					component={ReportHeaders}
				/>
				<Route path={`${this.props.match.path}/Tables`} component={Tables} />
				<Route path={`${this.props.match.path}/Tabs`} component={Tabs} />
				<Route
					path={`${this.props.match.path}/Visulizations`}
					component={Visulizations}
				/>
			</Router>
		);
	}
}
export default Modules;
