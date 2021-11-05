import React from "react";
import "./SetupBar.scss";

const SetupBar = () => (
  <div id="SetupBar">
    <label>Aantal antwoorden:</label>
    <input type="number" min="2" max="98" />
  </div>
);

export default SetupBar;
