import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import {
  Box,
  IconButton,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { url } from "../../../../SiteRoute";

export const navigationActionDefinitions = {
  GAME_SETTINGS: "gameSettings",
  PAGE_SETTINGS: "pageSettings",
  PLAYER_SETTINGS: "playerSettings",
};

const SideBar = ({ navigationAction, setNavigationAction }) => (
  <Paper
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
    }}
  >
    <Link to={url.GAME_TYPE_SELECTION}>
      <IconButton>
        <ArrowBackIosRoundedIcon />
      </IconButton>
    </Link>
    <ToggleButtonGroup
      exclusive
      value={navigationAction}
      onChange={(event, newNavigationAction) =>
        setNavigationAction(newNavigationAction)
      }
      color="secondary"
      orientation="vertical"
    >
      <ToggleButton
        value={navigationActionDefinitions.GAME_SETTINGS}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SettingsRoundedIcon />
        Spel
      </ToggleButton>
      <ToggleButton value={navigationActionDefinitions.PAGE_SETTINGS}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <QuizRoundedIcon />
          Pagina
        </Box>
      </ToggleButton>
      <ToggleButton value={navigationActionDefinitions.PLAYER_SETTINGS}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <GroupRoundedIcon />
          Spelers
        </Box>
      </ToggleButton>
    </ToggleButtonGroup>
  </Paper>
);

export default SideBar;
