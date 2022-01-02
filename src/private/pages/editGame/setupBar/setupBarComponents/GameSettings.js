import { faPlay, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, ListItem, TextField } from "@mui/material";
import React from "react";

const GameSettings = ({ name, saveGame, playGame }) => (
  <>
    <ListItem>
      <TextField label="Naam van dit spel" fullWidth {...name} />
    </ListItem>

    <ListItem>
      <ButtonGroup variant="outlined" color="secondary" fullWidth>
        <Button
          onClick={saveGame}
          startIcon={<FontAwesomeIcon icon={faSave} />}
        >
          Opslaan
        </Button>
        <Button
          onClick={playGame}
          startIcon={<FontAwesomeIcon icon={faPlay} />}
        >
          Spelen
        </Button>
      </ButtonGroup>
    </ListItem>
  </>
);

export default GameSettings;
