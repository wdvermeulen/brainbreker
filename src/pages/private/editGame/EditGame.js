import React, { useState } from "react";
import "./EditGame.scss";
import Answers from "./gamePage/Answers";
import Questions from "./gamePage/Question";
import SetupBar from "./setupBar/SetupBar";
import { useParams, useRouteMatch } from "react-router-dom";

const EditGame = () => {
  const myPath = useRouteMatch();
  console.log(myPath);
  const [collapsed, setCollapsed] = useState(false);

  const { gameId } = useParams();

  console.log(gameId);

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
