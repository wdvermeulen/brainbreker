import {
  Collapse,
  FormControlLabel,
  ListItem,
  Slider,
  Switch,
} from "@mui/material";
import React from "react";
import { timeSteps } from "../../../../../sharedResources/constants";
import { secondsToAutoUnit } from "../../../../../utils";

const TimeLimit = ({ hasTimeLimit, timeLimit, pointsForSpeed }) => (
  <>
    <ListItem>
      <FormControlLabel
        control={<Switch {...hasTimeLimit} />}
        label={
          hasTimeLimit.checked
            ? `Tijdslimiet: ${secondsToAutoUnit(timeSteps[timeLimit.value])}`
            : "Tijdslimiet"
        }
      />
    </ListItem>

    <Collapse in={hasTimeLimit.checked}>
      <ListItem>
        <Slider
          id="timeLimit"
          name="timeLimit"
          aria-label="Tijdslimiet"
          min={0}
          step={1}
          max={timeSteps.length - 1}
          scale={(value) => {
            return timeSteps[value];
          }}
          getAriaValueText={secondsToAutoUnit}
          marks
          {...timeLimit}
        />
      </ListItem>
    </Collapse>

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
