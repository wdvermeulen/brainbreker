import { faPlay, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ListItem, TextField } from "@mui/material";
import React from "react";
import AutosizeInput from "react-input-autosize";

const GameSettings = ({ name, saveGame, playGame }) => (
  <>
    <ListItem>
      <TextField label="Naam van dit spel" fullWidth {...name} />
    </ListItem>

    <Button
      variant="outlined"
      color="secondary"
      onClick={saveGame}
      startIcon={<FontAwesomeIcon icon={faSave} />}
    >
      Opslaan
    </Button>
    <Button
      variant="outlined"
      color="secondary"
      onClick={playGame}
      startIcon={<FontAwesomeIcon icon={faPlay} />}
    >
      Spelen
    </Button>
  </>
);

export default GameSettings;
