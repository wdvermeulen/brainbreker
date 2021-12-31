import { Box, Button, Drawer, List } from "@mui/material";
import React from "react";
import { useSetupBar } from "../editGameHooks";
import { useFormInput } from "../../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUndo } from "@fortawesome/free-solid-svg-icons";
import GameSettings from "./setupBarComponents/GameSettings";
import PageOverview from "./setupBarComponents/PageOverview";
import ScoreSettings from "./setupBarComponents/ScoreSettings";
import TimeLimit from "./setupBarComponents/TimeLimit";
import PageSettings from "./setupBarComponents/PageSettings";

const SetupBar = () => {
  const {
    name,
    questionTitle,
    pageType,
    hasTimeLimit,
    timeLimit,
    checkType,
    pointsForSpeed,
    numberOfOptions,
    answerValue,
    gotoNextPage,
    gotoPreviousPage,
    gotoPage,
    resetPage,
    removePage,
    saveGame,
    playGame,
    pages,
    currentPage,
  } = useSetupBar();

  const { setValue, ...selectAnswer } = useFormInput(0);

  if (selectAnswer.value >= numberOfOptions.value)
    setValue(numberOfOptions.value - 1);

  const predefinedAnswer = checkType.value === "PREDEFINED_ANSWER";

  return (
    <Drawer
      sx={{ display: { md: "block", xs: "none" } }}
      variant="persistent"
      anchor="right"
      open
    >
      <h3>
        Instellingen voor {currentPage + 1}. {questionTitle}
      </h3>

      <List>
        <Button
          variant="outlined"
          color="secondary"
          onClick={resetPage}
          startIcon={<FontAwesomeIcon icon={faUndo} />}
        >
          Reset
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={removePage}
          startIcon={<FontAwesomeIcon icon={faTrash} />}
        >
          Verwijderen
        </Button>

        <PageSettings pageType={pageType} numberOfOptions={numberOfOptions} />

        <TimeLimit hasTimeLimit={hasTimeLimit} timeLimit={timeLimit} />

        <ScoreSettings
          checkType={checkType}
          hasTimeLimit={hasTimeLimit}
          predefinedAnswer={predefinedAnswer}
          pointsForSpeed={pointsForSpeed}
          selectAnswer={selectAnswer}
          answerValue={answerValue}
          numberOfOptions={numberOfOptions}
        />

        <GameSettings name={name} saveGame={saveGame} playGame={playGame} />

        <PageOverview
          pages={pages}
          gotoPage={gotoPage}
          gotoPreviousPage={gotoPreviousPage}
          gotoNextPage={gotoNextPage}
        />
      </List>
    </Drawer>
  );
};

export default SetupBar;
