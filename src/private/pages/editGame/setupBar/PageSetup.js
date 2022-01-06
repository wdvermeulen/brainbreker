import { Button, ButtonGroup, Divider, List, ListItem } from "@mui/material";
import React from "react";
import { useSetupBar } from "../editGameHooks";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import ScoreSettings from "./setupBarComponents/ScoreSettings";
import TimeLimit from "./setupBarComponents/TimeLimit";
import PageSettings from "./setupBarComponents/PageSettings";

const PageSetup = () => {
  const {
    questionTitle,
    pageType,
    hasTimeLimit,
    timeLimit,
    checkType,
    pointsForSpeed,
    numberOfOptions,
    answerValue,
    resetPage,
    removePage,
    currentPage,
  } = useSetupBar();

  const predefinedAnswer = checkType.value === "PREDEFINED_ANSWER";

  return (
    <List
      subheader={
        <h3>
          Instellingen voor vraag {currentPage + 1}. {questionTitle}
        </h3>
      }
      sx={{ width: "280px" }}
    >
      <Divider />
      <ListItem>
        <ButtonGroup variant="outlined" color="secondary">
          <Button onClick={resetPage} startIcon={<ReplayRoundedIcon />}>
            Reset
          </Button>
          <Button onClick={removePage} startIcon={<DeleteForeverRoundedIcon />}>
            Verwijderen
          </Button>
        </ButtonGroup>
      </ListItem>

      <Divider />

      <PageSettings pageType={pageType} numberOfOptions={numberOfOptions} />

      <Divider />

      <TimeLimit
        hasTimeLimit={hasTimeLimit}
        timeLimit={timeLimit}
        pointsForSpeed={pointsForSpeed}
      />

      <Divider />

      <ScoreSettings
        checkType={checkType}
        predefinedAnswer={predefinedAnswer}
        pointsForSpeed={pointsForSpeed}
        answerValue={answerValue}
      />
    </List>
  );
};

export default PageSetup;
