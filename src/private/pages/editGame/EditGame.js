import React, { useEffect, useState } from "react";
import "./EditGame.scss";
import GameLayout from "../../../components/gamePage/GameLayout";
import {
  useAnswerDescription,
  useCurrentPage,
  useEditing,
  useNumberOfOptions,
  usePageInput,
  useQuestionDescription,
  useQuestionTitle,
} from "./hooks";
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
      <GameLayout
        useEditing={useEditing()}
        useAnswerDescription={useAnswerDescription}
        pageInput={usePageInput()}
        questionTitle={useQuestionTitle()}
        questionDescription={useQuestionDescription()}
        numberOfOptionsValue={useNumberOfOptions().value}
        currentPageValue={useCurrentPage().value}
      />
      <SetupBar collapse={collapse} collapsed={collapsed} />
    </div>
  );
};

export default EditGame;
