import { useState } from "react";
import * as adjectives from "./sharedResources/adjectives/dutch.json";
import * as animals from "./sharedResources/animals/dutch.json";

function useFormInput(defaultState) {
  const [value, setValue] = useState(defaultState);

  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
    setValue,
  };
}

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomName = () =>
  adjectives.default[getRandomInt(0, adjectives.default.length)] +
  " " +
  animals.default[getRandomInt(0, animals.default.length)];

function secondsToAutoUnit(value) {
  const units = ["seconden", "minuten", "uur"];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 60 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 60;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

const getTimeToLive = Math.floor(new Date() / 1000) + 24 * 60 * 60 * 7;

export { useFormInput, getRandomName, getTimeToLive, secondsToAutoUnit };
