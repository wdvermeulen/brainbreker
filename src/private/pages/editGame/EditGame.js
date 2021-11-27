import React, { useEffect, useState } from "react";
import "./EditGame.scss";
import Answers from "./gamePage/Answers";
import Questions from "./gamePage/Question";
import SetupBar from "./setupBar/SetupBar";
import { useParams } from "react-router-dom";
import PrivateGameService from "../../services/PrivateGameService";

const EditGame = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { gameID } = useParams();
  const gameService = new PrivateGameService();

  useEffect(() => {
    if (gameID) {
      const game = gameService.read(gameID);
      console.log(game);
    }
  });

  function collapse() {
    return setCollapsed(!collapsed);
  }

  return (
    <div id="EditGame" className="row">
      <div className="page column">
        <Questions />
        <Answers />
      </div>
      <SetupBar collapse={collapse} collapsed={collapsed} />
    </div>
  );
};

export default EditGame;
