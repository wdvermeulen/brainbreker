import { Collapse, Drawer, Paper, useMediaQuery } from "@mui/material";
import React from "react";
import muiTheme from "../../../../sharedStyles/muiTheme";
import GameSetup from "./GameSetup";
import PageSetup from "./PageSetup";

const Drawers = ({ navigationAction, setNavigationAction }) => {
  const hasLargeScreen = useMediaQuery(muiTheme.breakpoints.up("md"));

  const closeAction = () => setNavigationAction(null);

  return (
    <>
      <Drawer
        variant="temporary"
        anchor="right"
        open={!hasLargeScreen && navigationAction === "gameSettings"}
        onClose={closeAction}
      >
        <GameSetup />
      </Drawer>
      <Drawer
        variant="temporary"
        anchor="right"
        open={!hasLargeScreen && navigationAction === "pageSettings"}
        onClose={closeAction}
      >
        <PageSetup />
      </Drawer>

      <Collapse
        orientation="horizontal"
        in={
          hasLargeScreen &&
          (navigationAction === "gameSettings" ||
            (Array.isArray(navigationAction) &&
              navigationAction.includes("gameSettings")))
        }
        component={Paper}
        sx={{ maxWidth: "280px" }}
      >
        <GameSetup />
      </Collapse>

      <Collapse
        orientation="horizontal"
        in={
          hasLargeScreen &&
          (navigationAction === "pageSettings" ||
            (Array.isArray(navigationAction) &&
              navigationAction.includes("pageSettings")))
        }
        component={Paper}
        sx={{ maxWidth: "280px" }}
      >
        <PageSetup />
      </Collapse>
    </>
  );
};

export default Drawers;
