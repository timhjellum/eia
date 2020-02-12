import React, { Component } from "react";

class Legend extends Component {
  render() {
    return (
      <ul class="_legend">
        <li>
          <div class="_page"></div>Page margin (Laptop or greater only)
        </li>
        <li>
          <div class="_row"></div> Row margin or padding
        </li>
        <li>
          <div class="_col"></div> Column margin or padding
        </li>
        <li>
          <div class="_module"></div> Module margin or padding
        </li>
      </ul>
    );
  }
}

export default Legend;
