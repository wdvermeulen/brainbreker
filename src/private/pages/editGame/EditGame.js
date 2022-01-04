import {
  faChevronLeft,
  faCog,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
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
  const [navigationAction, setNavigationAction] = useState([]);
  const { gameID } = useParams();
  const page = usePage();
  const loadGameToState = useLoadGame();
  const hasLargeScreen = useMediaQuery(muiTheme.breakpoints.up("md"));

  const closeAction = () => setNavigationAction([]);

  useEffect(() => {
    loadGame(gameID, loadGameToState);
  }, [gameID, loadGameToState]);

  return (
    <>
      <Box sx={{ display: "flex", height: "100%", overflow: "auto" }}>
        <Drawer
          variant={hasLargeScreen ? "persistent" : "temporary"}
          anchor="left"
          open={navigationAction.includes("gameSettings")}
          onClose={closeAction}
        >
          <GameSetup />
        </Drawer>
        <GameLayout {...page} />
        <Drawer
          variant={hasLargeScreen ? "persistent" : "temporary"}
          anchor="right"
          open={navigationAction.includes("pageSettings")}
          onClose={closeAction}
        >
          <PageSetup />
        </Drawer>
      </Box>
      <Paper>
        <IconButton>
          <FontAwesomeIcon icon={faChevronLeft} />
        </IconButton>
        <ToggleButtonGroup
          onChange={(event, value) => {
            setNavigationAction(value);
          }}
          value={navigationAction}
          size="small"
        >
          <ToggleButton value="gameSettings">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faCog} />
              Spel instellingen
            </Box>
          </ToggleButton>
          <ToggleButton value="pageSettings">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faQuestion} />
              Vraag instellingen
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
      {/*<Drawer*/}
      {/*  open={navigationAction === "gameSettings"}*/}
      {/*  onClose={() => setNavigationAction(null)}*/}
      {/*>*/}
      {/*  <GameSetup />*/}
      {/*</Drawer>*/}
      {/*<Drawer*/}
      {/*  open={navigationAction === "pageSettings"}*/}
      {/*  onClose={() => setNavigationAction(null)}*/}
      {/*  anchor="right"*/}
      {/*>*/}
      {/*  <PageSetup />*/}
      {/*</Drawer>*/}
    </>
  );
};

export default EditGame;
