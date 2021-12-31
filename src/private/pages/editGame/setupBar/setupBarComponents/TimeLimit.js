import { FormControlLabel, ListItem, Slider, Switch } from "@mui/material";
import React from "react";

const calculateValue = (value) => (value <= 12 ? 5 * value : (value - 12) * 60);

function valueLabelFormat(value) {
  const units = ["seconden", "minuten", "uur"];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 60 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 60;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

const TimeLimit = ({ hasTimeLimit, timeLimit }) => (
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
        min={1}
        step={1}
        max={42}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="auto"
        {...timeLimit}
      />
    )}
  </ListItem>
);

export default TimeLimit;
