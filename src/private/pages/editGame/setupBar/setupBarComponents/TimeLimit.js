import { FormControlLabel, ListItem, Slider, Switch } from "@mui/material";
import React from "react";
import { timeSteps } from "../../../../../sharedResources/constants";
import { secondsToAutoUnit } from "../../../../../utils";

const TimeLimit = ({ hasTimeLimit, timeLimit, pointsForSpeed }) => (
  <>
    <ListItem>
      <FormControlLabel
        control={<Switch {...hasTimeLimit} />}
        label="Tijdslimiet"
      />
      {hasTimeLimit.checked && (
        <Slider
          id="timeLimit"
          name="timeLimit"
          aria-label="tijdslimiet in seconden"
          min={0}
          step={1}
          max={timeSteps.length - 1}
          scale={(value) => {
            return timeSteps[value];
          }}
          getAriaValueText={secondsToAutoUnit}
          valueLabelFormat={secondsToAutoUnit}
          valueLabelDisplay="auto"
          {...timeLimit}
        />
      )}
    </ListItem>

    <ListItem>
      <FormControlLabel
        control={<Switch {...pointsForSpeed} />}
        label="Punten voor snelheid"
        disabled={!hasTimeLimit.checked}
      />
    </ListItem>
  </>
);

export default TimeLimit;
