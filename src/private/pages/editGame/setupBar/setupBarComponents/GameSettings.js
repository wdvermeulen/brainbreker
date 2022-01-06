import { PlayArrowRounded, SaveRounded } from "@mui/icons-material";
import { Button, ButtonGroup, ListItem, TextField } from "@mui/material";
import React from "react";

const GameSettings = ({ name, saveGame, playGame }) => (
  <>
    <ListItem>
      <TextField label="Naam van dit spel" fullWidth {...name} />
    </ListItem>

    <ListItem>
      <ButtonGroup variant="outlined" color="secondary" fullWidth>
        <Button onClick={saveGame} startIcon={<SaveRounded />}>
          Opslaan
        </Button>
        <Button onClick={playGame} startIcon={<PlayArrowRounded />}>
          Spelen
        </Button>
      </ButtonGroup>
    </ListItem>
  </>
);

export default GameSettings;
