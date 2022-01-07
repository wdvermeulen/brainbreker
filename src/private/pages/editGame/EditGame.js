import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import GameLayout from "../../../components/gamePage/GameLayout";
import { useLoadGame, usePage } from "./editGameHooks";
import PrivateGameService from "../../services/PrivateGameService";
import Drawers from "./setupBar/Drawers";
import SideBar from "./setupBar/SideBar";

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
    <Box sx={{ display: "flex", height: "100%" }}>
      <Drawers
        navigationAction={navigationAction}
        setNavigationAction={setNavigationAction}
      />
      <SideBar
        navigationAction={navigationAction}
        setNavigationAction={setNavigationAction}
      />
      <GameLayout {...page} />
    </Box>
  );
};

export default EditGame;
