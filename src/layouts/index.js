import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import LayoutsHome from "./Home";
import Default from "./Default";
import Rows from "./Rows";
import FullPage from "./FullPage";
import Nested from "./Nested";

class Layouts extends Component {
  render() {
    return (
      <Router>
        <ul className="left-content">
          <li>
            <NavLink to="/layouts/">Layouts Home</NavLink>
          </li>
          <li>
            <NavLink to="/layouts/Default">Default Layouts</NavLink>
          </li>
          <li>
            <NavLink to="/layouts/Rows">Rows</NavLink>
          </li>
          <li>
            <NavLink to="/layouts/FullPage">FullPage</NavLink>
          </li>
          <li>
            <NavLink to="/layouts/Nested">Nested Layouts</NavLink>
          </li>
        </ul>

        <Route
          exact
          path={`${this.props.match.path}/`}
          component={LayoutsHome}
        />
        <Route path={`${this.props.match.path}/Default`} component={Default} />
        <Route path={`${this.props.match.path}/Rows`} component={Rows} />
        <Route
          path={`${this.props.match.path}/FullPage`}
          component={FullPage}
        />
        <Route path={`${this.props.match.path}/Nested`} component={Nested} />
      </Router>
    );
  }
}

export default Layouts;
