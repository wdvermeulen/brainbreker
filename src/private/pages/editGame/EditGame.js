import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GameLayout from "../../../components/gamePage/GameLayout";
import muiTheme from "../../../sharedStyles/muiTheme";
import { useLoadGame, usePage } from "./editGameHooks";
import { useParams } from "react-router-dom";
import PrivateGameService from "../../services/PrivateGameService";
import GameSetup from "./setupBar/GameSetup";
import PageSetup from "./setupBar/PageSetup";

const loadGame = async (gameID, loadGameToState) => {
  const gameService = new PrivateGameService();

  if (gameID) {
    try {
      const {
        data: { getPrivateGame },
      } = await gameService.read(gameID);
      loadGameToState(getPrivateGame);
    } catch (e) {
      console.error("EditGame.loadGame() error", e);
    }
  }
};

const EditGame = () => {
  const [navigationAction, setNavigationAction] = useState("");
  const { gameID } = useParams();
  const page = usePage();
  const loadGameToState = useLoadGame();
  const hasLargeScreen = useMediaQuery(muiTheme.breakpoints.up("md"));

  const closeAction = () => setNavigationAction("");

  useEffect(() => {
    loadGame(gameID, loadGameToState);
  }, [gameID, loadGameToState]);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Collapse
        orientation="horizontal"
        in={hasLargeScreen && navigationAction === "gameSettings"}
        component={Paper}
        sx={{ maxWidth: "280px" }}
      >
        <GameSetup />
      </Collapse>
      <Collapse
        orientation="horizontal"
        in={hasLargeScreen && navigationAction === "pageSettings"}
        component={Paper}
        sx={{ maxWidth: "280px" }}
      >
        <PageSetup />
      </Collapse>
      <Paper
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <IconButton>
          <ArrowBackIosRoundedIcon />
        </IconButton>
        <ToggleButtonGroup
          exclusive
          value={navigationAction}
          onChange={(event, newNavigationAction) =>
            setNavigationAction(newNavigationAction)
          }
          color="secondary"
          orientation="vertical"
        >
          <ToggleButton
            value="gameSettings"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SettingsRoundedIcon />
            Spel
          </ToggleButton>
          <ToggleButton value="pageSettings">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <QuizRoundedIcon />
              Pagina
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>

      <GameLayout {...page} />

      <Drawer
        variant="temporary"
        anchor="right"
        open={!hasLargeScreen && navigationAction === "gameSettings"}
        onClose={closeAction}
      >
        <GameSetup />
      </Drawer>

      <Drawer
        variant="temporary"
        anchor="right"
        open={!hasLargeScreen && navigationAction === "pageSettings"}
        onClose={closeAction}
      >
        <PageSetup />
      </Drawer>
    </Box>
  );
};

export default EditGame;
