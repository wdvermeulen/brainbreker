import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import GameLayout from "../../../components/gamePage/GameLayout";
import PrivateGameService from "../../services/PrivateGameService";
import { useGame } from "./hooks";

const HostGame = () => {
  const { gameID } = useParams();
  const [game, setGame] = useGame();

  const privateGameService = new PrivateGameService();

  async function fetchGame() {
    setGame(await privateGameService.read(gameID));
  }

  useEffect(() => {
    if (!game) fetchGame();
  });

  console.log(game);
  return (
    <GameLayout
      useEditing={[undefined, undefined]}
      useAnswerDescription={["test", "test", "test", "test"]}
      pageInput={undefined}
      questionTitle={"Testi"}
      questionDescription={"Test"}
      numberOfOptionsValue={4}
      currentPageValue={0}
    />
  );
};
export default HostGame;
