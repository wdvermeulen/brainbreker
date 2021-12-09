import React, { useCallback, useEffect, useState } from "react";
import "./EditGame.scss";
import GameLayout from "../../../components/gamePage/GameLayout";
import { useLoadGame, usePage } from "./editGameHooks";
import SetupBar from "./setupBar/SetupBar";
import { useParams } from "react-router-dom";
import PrivateGameService from "../../services/PrivateGameService";

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
  const [collapsed, setCollapsed] = useState(false);
  const { gameID } = useParams();
  const page = usePage();
  const loadGameToState = useLoadGame();

  useEffect(() => {
    loadGame(gameID, loadGameToState);
  }, [gameID, loadGameToState]);

  const collapse = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <div id="EditGame" className="row">
      <GameLayout {...page} />
      <SetupBar collapse={collapse} collapsed={collapsed} />
    </div>
  );
};

export default EditGame;
