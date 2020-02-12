import React, { Component } from "react";
/*
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
*/
import {
  NavLink,
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from "./home"; // case sensitive
import Layouts from "./layouts/layouts";
import Base from "./base";
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/layouts">Layouts</NavLink></li>
          <li><NavLink to="/base">Base</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/layouts" component={Layouts}/>
          <Route path="/base" component={Base}/>
        </div>
      </div>
    </Router>
    );
  }
}
export default App;