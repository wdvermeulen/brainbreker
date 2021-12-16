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

const getRandomPassword = () => {
  const charset = "abcdefghjklmnpqrstwxyz23456789"; // Only non-confusing characters
  const maxLength = charset.length;
  let returnValue = "";
  for (let i = 0; i < 4; i++) {
    returnValue += charset.charAt(Math.random() * maxLength);
  }
  return returnValue;
};

export { useFormInput, getRandomName, getRandomPassword };
