import { Divider, List } from "@mui/material";
import React from "react";
import { useSetupBar } from "../editGameHooks";
import GameSettings from "./setupBarComponents/GameSettings";
import PageOverview from "./setupBarComponents/PageOverview";

const GameSetup = () => {
  const {
    name,
    gotoNextPage,
    gotoPreviousPage,
    gotoPage,
    saveGame,
    playGame,
    pages,
  } = useSetupBar();

  return (
    <>
      <h3>Instellingen voor spel</h3>

      <List>
        <GameSettings name={name} saveGame={saveGame} playGame={playGame} />
        <Divider />
        <PageOverview
          pages={pages}
          gotoPage={gotoPage}
          gotoPreviousPage={gotoPreviousPage}
          gotoNextPage={gotoNextPage}
        />
      </List>
    </>
  );
};

export default GameSetup;
