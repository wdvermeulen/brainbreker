import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
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

const SideBar = ({ navigationAction, setNavigationAction }) => (
  <Paper
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
    }}
  >
    <IconButton component={Link} to={url.GAME_TYPE_SELECTION}>
      <ArrowBackIosRoundedIcon />
    </IconButton>
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
        value="gameSettings"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SettingsRoundedIcon />
        Spel
      </ToggleButton>
      <ToggleButton value="pageSettings">
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
    </ToggleButtonGroup>
  </Paper>
);

export default SideBar;
