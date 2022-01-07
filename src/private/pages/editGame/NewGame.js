import React, { useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { url } from "../../../SiteRoute";
import { useSaveGame } from "./editGameHooks";
import { reset, setName } from "./editGameSlice";

const NewGame = () => {
  const name = useSelector((state) => state.editGame.name);
  const dispatch = useDispatch();
  const saveGame = useSaveGame();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <Box
      sx={{
        margin: "0 auto",
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <h2>Nieuw spel</h2>
          <TextField
            label="Naam van dit spel"
            fullWidth
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={url.GAME_TYPE_SELECTION}
            color="secondary"
            variant="outlined"
          >
            Annuleren
          </Button>
          <Button
            variant="contained"
            disabled={name.length === 0}
            onClick={saveGame}
          >
            Aanmaken
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default NewGame;
