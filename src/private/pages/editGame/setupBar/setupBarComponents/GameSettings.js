import React from "react";
import { ListItem, TextField } from "@mui/material";

const GameSettings = ({ name }) => (
  <ListItem>
    <TextField label="Naam van dit spel" fullWidth {...name} />
  </ListItem>
);

export default GameSettings;
