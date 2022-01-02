import { Button, ButtonGroup, Divider, List, ListItem } from "@mui/material";
import React from "react";
import { useSetupBar } from "../editGameHooks";
import { useFormInput } from "../../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUndo } from "@fortawesome/free-solid-svg-icons";
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
    <>
      <h3>
        Instellingen voor vraag {currentPage + 1}. {questionTitle}
      </h3>

      <List>
        <Divider />
        <ListItem>
          <ButtonGroup variant="outlined" color="secondary">
            <Button
              onClick={resetPage}
              startIcon={<FontAwesomeIcon icon={faUndo} />}
            >
              Reset
            </Button>
            <Button
              onClick={removePage}
              startIcon={<FontAwesomeIcon icon={faTrash} />}
            >
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
    </>
  );
};

export default PageSetup;
