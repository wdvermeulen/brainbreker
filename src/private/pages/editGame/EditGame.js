import {
  faChevronLeft,
  faCog,
  faExclamation,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import GameLayout from "../../../components/gamePage/GameLayout";
import { useFormInput } from "../../../utils";
import { useLoadGame, usePage, useSetupBar } from "./editGameHooks";
import { useParams } from "react-router-dom";
import PrivateGameService from "../../services/PrivateGameService";
import SetupBar from "./setupBar/SetupBar";
import GameSettings from "./setupBar/setupBarComponents/GameSettings";
import PageSettings from "./setupBar/setupBarComponents/PageSettings";
import ScoreSettings from "./setupBar/setupBarComponents/ScoreSettings";
import TimeLimit from "./setupBar/setupBarComponents/TimeLimit";

const loadGame = async (gameID, loadGameToState) => {
  const gameService = new PrivateGameService();

  if (gameID) {
    try {
      const {
        data: { getPrivateGame },
      } = await gameService.read(gameID);
      loadGameToState(getPrivateGame);
    } catch (e) {
      console.error("EditGame.loadGame() error", e);
    }
  }
};

const EditGame = () => {
  const [navigationAction, setNavigationAction] = useState(null);
  const { gameID } = useParams();
  const page = usePage();
  const loadGameToState = useLoadGame();
  const {
    name,
    pageType,
    hasTimeLimit,
    timeLimit,
    checkType,
    pointsForSpeed,
    numberOfOptions,
    answerValue,
    saveGame,
    playGame,
  } = useSetupBar();

  useEffect(() => {
    loadGame(gameID, loadGameToState);
  }, [gameID, loadGameToState]);

  const { setValue, ...selectAnswer } = useFormInput(0);

  if (selectAnswer.value >= numberOfOptions.value)
    setValue(numberOfOptions.value - 1);

  const predefinedAnswer = checkType.value === "PREDEFINED_ANSWER";

  return (
    <>
      <Box sx={{ display: "flex", height: "100%" }}>
        <GameLayout {...page} />
        <SetupBar />
      </Box>
      <BottomNavigation
        showLabels
        value={navigationAction}
        onChange={(event, value) => {
          setNavigationAction(value);
        }}
        sx={{ display: { md: "none" } }}
      >
        <BottomNavigationAction
          label="Terug"
          value="goBack"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
        />
        <BottomNavigationAction
          label="Spel"
          value="gameSettings"
          icon={<FontAwesomeIcon icon={faCog} />}
        />
        <BottomNavigationAction
          label="Antwoord"
          value="answerSettings"
          icon={<FontAwesomeIcon icon={faExclamation} />}
        />
        <BottomNavigationAction
          label="Starten"
          value="startGame"
          icon={<FontAwesomeIcon icon={faPlay} />}
        />
      </BottomNavigation>
      <Dialog
        open={navigationAction === "gameSettings"}
        onClose={() => {
          setNavigationAction(null);
        }}
      >
        <DialogTitle>Spel instellingen</DialogTitle>
        <DialogContent>
          <GameSettings name={name} saveGame={saveGame} playGame={playGame} />
        </DialogContent>
      </Dialog>
      <Dialog
        open={navigationAction === "answerSettings"}
        onClose={() => {
          setNavigationAction(null);
        }}
      >
        <DialogTitle>Antwoord instellingen</DialogTitle>
        <DialogContent>
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
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditGame;
