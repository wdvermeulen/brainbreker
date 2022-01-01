import {
  faChevronLeft,
  faCog,
  faPlay,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Drawer,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GameLayout from "../../../components/gamePage/GameLayout";
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
  const [navigationAction, setNavigationAction] = useState(null);
  const { gameID } = useParams();
  const page = usePage();
  const loadGameToState = useLoadGame();

  useEffect(() => {
    loadGame(gameID, loadGameToState);
  }, [gameID, loadGameToState]);

  return (
    <>
      <Box sx={{ display: "flex", height: "100%", overflow: "auto" }}>
        <Drawer
          sx={{ display: { md: "block", xs: "none" }, width: "280px" }}
          variant="persistent"
          anchor="left"
          open
        >
          <GameSetup />
        </Drawer>
        <GameLayout {...page} />
        <Drawer
          sx={{ display: { md: "block", xs: "none" }, width: "280px" }}
          variant="persistent"
          anchor="right"
          open
        >
          <PageSetup />
        </Drawer>
      </Box>
      <BottomNavigation
        showLabels
        value={navigationAction}
        onChange={(event, value) => {
          setNavigationAction(value);
        }}
        sx={{ display: { md: "none" } }}
      >
        <BottomNavigationAction
          label="Spel instellingen"
          value="gameSettings"
          icon={<FontAwesomeIcon icon={faCog} />}
        />
        <BottomNavigationAction
          label="Vraag instellingen"
          value="pageSettings"
          icon={<FontAwesomeIcon icon={faQuestion} />}
        />
      </BottomNavigation>
      <Drawer
        open={navigationAction === "gameSettings"}
        onClose={() => setNavigationAction(null)}
      >
        <GameSetup />
      </Drawer>
      <Drawer
        open={navigationAction === "pageSettings"}
        onClose={() => setNavigationAction(null)}
        anchor="right"
      >
        <PageSetup />
      </Drawer>
    </>
  );
};

export default EditGame;
