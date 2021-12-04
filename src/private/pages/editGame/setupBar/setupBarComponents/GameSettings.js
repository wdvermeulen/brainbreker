import { faPlay, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AutosizeInput from "react-input-autosize";

const GameSettings = ({ name, saveGame, playGame }) => (
  <>
    <label htmlFor="title">Naam van dit spel: </label>
    <AutosizeInput
      id="numberOfOptions"
      name="numberOfOptions"
      aria-label="Aantal opties"
      type="text"
      {...name}
    />
    <button onClick={saveGame}>
      <FontAwesomeIcon icon={faSave} /> Opslaan
    </button>
    <button onClick={playGame}>
      <FontAwesomeIcon icon={faPlay} /> Spelen
    </button>
  </>
);

export default GameSettings;
