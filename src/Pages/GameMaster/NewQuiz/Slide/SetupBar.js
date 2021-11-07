import React from "react";
import "./SetupBar.scss";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import { questionTypes } from "../../../../sharedResources/enum";
import {
  useHasTimeLimit,
  useTimeLimit,
  useAutoCheck,
  usePointsForSpeed,
} from "./hooks";

const SetupBar = () => {
  const hasTimeLimit = useHasTimeLimit();
  const timeLimit = useTimeLimit();
  const autoCheck = useAutoCheck();
  const pointsForSpeed = usePointsForSpeed();

  return (
    <div id="SetupBar">
      <h3>Instellingen voor Vraag 1</h3>
      <div className="row">
        <input type="checkbox" {...hasTimeLimit} />
        <label>Heeft een tijdslimiet</label>
      </div>
      {hasTimeLimit.checked && (
        <div className="row">
          <label>Tijd voor deze vraag: </label>
          <AutosizeInput text="number" min="1" max="1800" {...timeLimit} />{" "}
          seconden
        </div>
      )}
      <div className="row">
        <input type="checkbox" {...autoCheck} />
        <label>Automatisch controleren</label>
      </div>
      {hasTimeLimit.checked &&
        autoCheck.checked(
          <div className="row">
            <input type="checkbox" {...pointsForSpeed} />
            <label>Punten voor snelheid</label>
          </div>
        )}
      <div className="row">
        <label>Soort vraag: </label>
        <select>
          {Object.entries(questionTypes).map(([, type], i) => (
            <option key={i} value={i}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        <label>Aantal opties: </label>
        <AutosizeInput text="number" min="2" max="9" />
      </div>
      <div className="row">
        <label>Punten voor antwoord 1: </label>
        <AutosizeInput text="number" />
      </div>
      <div className="row">
        <label>Punten voor antwoord 2: </label>
        <AutosizeInput text="number" />
      </div>
      <div className="row">
        <label>Punten voor antwoord 3: </label>
        <AutosizeInput text="number" />
      </div>
      <div className="row">
        <label>Punten voor antwoord 4: </label>
        <AutosizeInput text="number" />
      </div>
    </div>
  );
};

export default SetupBar;
