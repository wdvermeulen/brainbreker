import React from "react";
import "./SetupBar.scss";
import { useSetupBar } from "../editGameHooks";
import { useFormInputWithSet } from "../../../../Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTrash,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import GameSettings from "./setupBarComponents/GameSettings";
import PageOverview from "./setupBarComponents/PageOverview";
import ScoreSettings from "./setupBarComponents/ScoreSettings";
import TimeLimit from "./setupBarComponents/TimeLimit";
import PageSettings from "./setupBarComponents/PageSettings";

const SetupBar = ({ collapse, collapsed }) => {
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

  const { setValue, ...selectAnswer } = useFormInputWithSet(0);

  if (selectAnswer.value >= numberOfOptions.value)
    setValue(numberOfOptions.value - 1);

  const predefinedAnswer = checkType.value === "PREDEFINED_ANSWER";

  return (
    <div id="SetupBar">
      <button className="menubutton secondary" onClick={collapse}>
        <FontAwesomeIcon icon={collapsed ? faChevronLeft : faChevronRight} />
      </button>
      <div
        className="collapsible-container"
        style={{
          maxWidth: collapsed ? "0" : "340px",
        }}
      >
        <div className="glass-container">
          <h3>
            Instellingen voor {currentPage + 1}. {questionTitle}
          </h3>
          <button className="outline" onClick={resetPage}>
            <FontAwesomeIcon icon={faUndo} /> Reset
          </button>
          <button className="outline" onClick={removePage}>
            <FontAwesomeIcon icon={faTrash} /> Verwijderen
          </button>

          <hr />

          <PageSettings pageType={pageType} numberOfOptions={numberOfOptions} />

          <hr />

          <TimeLimit hasTimeLimit={hasTimeLimit} timeLimit={timeLimit} />

          <hr />

          <ScoreSettings
            checkType={checkType}
            hasTimeLimit={hasTimeLimit}
            predefinedAnswer={predefinedAnswer}
            pointsForSpeed={pointsForSpeed}
            selectAnswer={selectAnswer}
            answerValue={answerValue}
            numberOfOptions={numberOfOptions}
          />

          <hr />

          <GameSettings name={name} saveGame={saveGame} playGame={playGame} />

          <hr />

          <PageOverview
            pages={pages}
            gotoPage={gotoPage}
            gotoPreviousPage={gotoPreviousPage}
            gotoNextPage={gotoNextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default SetupBar;
