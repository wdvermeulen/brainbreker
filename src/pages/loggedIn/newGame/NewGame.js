import React, { useState } from "react";
import "./NewGame.scss";
import Answers from "./slide/Answers";
import Questions from "./slide/Question";
import SetupBar from "./setupBar/SetupBar";

const NewGame = () => {
  const [collapsed, setCollapsed] = useState(false);

  function collapse() {
    return setCollapsed(!collapsed);
  }

  return (
    <div id="NewGame" className="row">
      <div className="slide column">
        <Questions />
        <Answers />
      </div>
      <SetupBar collapse={collapse} collapsed={collapsed} />
    </div>
  );
};

export default NewGame;
