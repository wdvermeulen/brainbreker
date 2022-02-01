import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GameLayout from "../../../components/gamePage/GameLayout";
// import { useHostGame } from "../hostGame/hostGameHooks";
import { usePage, useSaveGame } from "./editGameHooks";
import PrivateGameService from "../../services/PrivateGameService";
import { setGame } from "./editGameSlice";
import Lobby from "./Lobby";
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

const EditPage = () => {
  const [navigationAction, setNavigationAction] = useState(null);
  const params = useParams();
  const { gameID, currentPage } = params;
  const page = usePage();
  const dispatch = useDispatch();
  const saveGame = useSaveGame();
  // const { initGame, myID, game } = useHostGame();

  useEffect(() => {
    loadGame(gameID, (game) => dispatch(setGame(game)));
  }, [gameID, dispatch]);

  // Wait 5 seconds after edits to save the state
  useEffect(() => {
    const timer = setTimeout(saveGame, 5000);
    return () => clearTimeout(timer);
  }, [page, saveGame]);

  // useEffect(() => {
  //   if ((!game || game?.id !== gameID) && myID.length > 0) {
  //     initGame(myID);
  //   }
  // }, [myID, game, gameID, initGame]);

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
      {currentPage ? <GameLayout {...page} /> : <Lobby />}
    </Box>
  );
};

export default EditPage;
