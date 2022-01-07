import React from "react";
import { Divider, List } from "@mui/material";
import { useSetupBar } from "../editGameHooks";
import GameSettings from "./setupBarComponents/GameSettings";
import PageOverview from "./setupBarComponents/PageOverview";

const GameSetup = () => {
  const { name, addNewPage, gotoPage, pages } = useSetupBar();

  return (
    <List
      subheader={
        <>
          <h3>Instellingen voor spel</h3>
        </>
      }
      sx={{
        width: "280px",
        height: "100%",
        overflow: "auto",
        maxWidth: "90vw",
      }}
    >
      <Divider />
      <GameSettings name={name} />
      <Divider />
      <PageOverview pages={pages} gotoPage={gotoPage} addNewPage={addNewPage} />
    </List>
  );
};

export default GameSetup;
