import React, { useEffect, useState } from "react";
import "./EditGame.scss";
import GameLayout from "../../../components/gamePage/GameLayout";
import { usePage } from "./hooks";
import SetupBar from "./setupBar/SetupBar";
import { useParams } from "react-router-dom";
import PrivateGameService from "../../services/PrivateGameService";

const EditGame = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { gameID } = useParams();
  const gameService = new PrivateGameService();
  const page = usePage();

  useEffect(() => {
    if (gameID) {
      const {
        data: {
          getPrivateGameQuery: { id },
        },
      } = gameService.read(gameID);
      console.log(id);
    }
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
