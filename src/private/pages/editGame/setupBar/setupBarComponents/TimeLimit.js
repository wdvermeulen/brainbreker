import React from "react";
import AutosizeInput from "react-input-autosize";

const TimeLimit = ({ hasTimeLimit, timeLimit }) => (
  <>
    <div className="row">
      <input
        id="hasTimeLimit"
        name="hasTimeLimit"
        aria-label="heeft een tijdslimiet"
        type="checkbox"
        {...hasTimeLimit}
      />
      <label htmlFor="hasTimeLimit">Heeft een tijdslimiet</label>
    </div>
    <div className="row">
      {hasTimeLimit.checked && (
        <>
          <label htmlFor="timeLimit">Tijdslimiet: </label>
          <AutosizeInput
            id="timeLimit"
            name="timeLimit"
            aria-label="tijdslimiet in seconden"
            type="number"
            min="5"
            max="1800"
            {...timeLimit}
          />{" "}
          seconden
        </>
      )}
    </div>
  </>
);

export default TimeLimit;
