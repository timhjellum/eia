import React, { Component } from "react";

import Home from "./Home";
import Default from "./Default";
import Rows from "./Rows";
import FullPage from "./FullPage";
import Nested from "./Nested";

class Layouts extends Component {
	render() {
		return (
			<ul className="style-guide">
				<Home />
				<Default />
				<Rows />
				<FullPage />
				<Nested />
			</ul>
		);
	}
}

export default Layouts;

/*
		<Router>
        <ul>
          <li>
            <NavLink to="/layouts/home">Layouts Home</NavLink>
          </li>
          <li>
            <NavLink to="/layouts/Default">Default</NavLink>
          </li>
          <li>
            <NavLink to="/layouts/Rows">Rows</NavLink>
          </li>
          <li>
            <NavLink to="/layouts/FullPage">Full Page</NavLink>
          </li>
          <li>
            <NavLink to="/layouts/Nested">Nested</NavLink>
          </li>
        </ul>
        <div className="mainContent">
          <Route path={`${this.props.match.path}/`} component={LayoutsHome} />
          <Route
            path={`${this.props.match.path}/default`}
            component={LayoutsDefault}
          />
          <Route
            path={`${this.props.match.path}/rows`}
            component={LayoutsRows}
          />
          <Route
            path={`${this.props.match.path}/full-page`}
            component={LayoutsFullPage}
          />
          <Route
            path={`${this.props.match.path}/nested`}
            component={LayoutsNested}
          />
        </div>
	  </Router>
	  */
