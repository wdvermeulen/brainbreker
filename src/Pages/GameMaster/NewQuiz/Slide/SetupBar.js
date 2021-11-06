import React from "react";
import "./SetupBar.scss";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";

const SetupBar = () => (
  <div id="SetupBar">
    <h3>Instellingen voor Vraag 1</h3>
    <div className="row">
      <label>Soort vraag: </label>
      <select>
        <option selected>Multiple choice</option>
        <option>Open</option>
        <option>Benadering</option>
        <option>Puzzel</option>
      </select>
    </div>
    <div className="row">
      <label>Aantal opties: </label>
      <AutosizeInput text="number" min="2" max="9" value="4" />
    </div>
    <div className="row">
      <input type="checkbox" checked />
      <label>Automatisch controleren</label>
    </div>
    <div className="row">
      <input type="checkbox" />
      <label>
        Punten geven afhankelijk van de snelheid waarmee antwoord wordt gegeven
      </label>
    </div>
    <div className="row">
      <label>Punten voor antwoord 1: </label>
      <AutosizeInput text="number" value="0" />
    </div>
    <div className="row">
      <label>Punten voor antwoord 2: </label>
      <AutosizeInput text="number" value="0" />
    </div>
    <div className="row">
      <label>Punten voor antwoord 3: </label>
      <AutosizeInput text="number" value="0" />
    </div>
    <div className="row">
      <label>Punten voor antwoord 4: </label>
      <AutosizeInput text="number" value="0" />
    </div>
  </div>
);

export default SetupBar;
