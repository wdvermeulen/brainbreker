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

const getTimeToLive = Math.floor(new Date() / 1000) + 24 * 60 * 60 * 7;

export { useFormInput, getRandomName, getTimeToLive };
