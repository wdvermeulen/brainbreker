import { Collapse, Drawer, Paper, useMediaQuery } from "@mui/material";
import React from "react";
import muiTheme from "../../../../sharedStyles/muiTheme";
import GameSetup from "./GameSetup";
import PageSetup from "./PageSetup";
import { navigationActionDefinitions } from "./SideBar";

const Drawers = ({ navigationAction, setNavigationAction }) => {
  const hasLargeScreen = useMediaQuery(muiTheme.breakpoints.up("md"));

  const closeAction = () => setNavigationAction(null);

  return (
    <>
      <Drawer
        variant="temporary"
        anchor="right"
        open={
          !hasLargeScreen &&
          navigationAction === navigationActionDefinitions.GAME_SETTINGS
        }
        onClose={closeAction}
      >
        <GameSetup />
      </Drawer>
      <Drawer
        variant="temporary"
        anchor="right"
        open={
          !hasLargeScreen &&
          navigationAction === navigationActionDefinitions.PAGE_SETTINGS
        }
        onClose={closeAction}
      >
        <PageSetup />
      </Drawer>

      <Collapse
        orientation="horizontal"
        in={
          hasLargeScreen &&
          (navigationAction === navigationActionDefinitions.GAME_SETTINGS ||
            (Array.isArray(navigationAction) &&
              navigationAction.includes(
                navigationActionDefinitions.GAME_SETTINGS
              )))
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
          (navigationAction === navigationActionDefinitions.PAGE_SETTINGS ||
            (Array.isArray(navigationAction) &&
              navigationAction.includes(
                navigationActionDefinitions.PAGE_SETTINGS
              )))
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
