import React, { useEffect, useState } from "react";
import "./EditGame.scss";
import GameLayout from "../../../components/gamePage/GameLayout";
import { useLoadGame, usePage } from "./editGameHooks";
import SetupBar from "./setupBar/SetupBar";
import { useParams } from "react-router-dom";
import PrivateGameService from "../../services/PrivateGameService";

const EditGame = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { gameID } = useParams();
  const gameService = new PrivateGameService();
  const page = usePage();
  const loadGameToState = useLoadGame();

  const loadGame = async () => {
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

  useEffect(() => {
    loadGame();
  });

  function collapse() {
    return setCollapsed(!collapsed);
  }

  return (
    <div id="EditGame" className="row">
      <GameLayout {...page} />
      <SetupBar collapse={collapse} collapsed={collapsed} />
    </div>
  );
};

export default EditGame;
