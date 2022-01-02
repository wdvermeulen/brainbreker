import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { url } from "../../../SiteRoute";
import {
  setName,
  addNewPage,
  removeCurrentPage,
  resetCurrentPage,
  setAnswerDescription,
  setAnswerValue,
  setCheckType,
  setCurrentPage,
  setEditing,
  setHasTimeLimit,
  setNumberOfOptions,
  setPointsForSpeed,
  setQuestionDescription,
  setQuestionTitle,
  setTimeLimit,
  setPageType,
  setGame,
} from "./editGameSlice";
import PrivateGameService from "../../services/PrivateGameService";

function usePage() {
  const dispatch = useDispatch();

  return {
    questionTitle: {
      value: useSelector(
        (state) => state.editGame.pages[state.editGame.currentPage].title
      ),
      onChange: (e) => {
        dispatch(setQuestionTitle(e.target.value));
      },
    },
    questionDescription: {
      value: useSelector(
        (state) => state.editGame.pages[state.editGame.currentPage].description
      ),
      onChange: (e) => {
        dispatch(setQuestionDescription(e.target.value));
      },
    },
    pageType: {
      value: useSelector((state) => state.editGame.type),
    },
    timeLimit: {
      value: useSelector(
        (state) => state.editGame.pages[state.editGame.currentPage].timeLimit
      ),
    },
    useAnswerDescription: function (answerIndex) {
      return {
        value: useSelector(
          (state) =>
            state.editGame.pages[state.editGame.currentPage].answers[
              answerIndex
            ].description
        ),
        onChange: (e) => {
          dispatch(
            setAnswerDescription({
              answerIndex,
              description: e.target.value,
            })
          );
        },
      };
    },
    pageInput: {
      onBlur: () => {
        dispatch(setEditing(""));
      },
      onKeyDown: (e) => {
        if (e.key === "Enter") dispatch(setEditing(""));
      },
    },
    numberOfOptions: {
      value: useSelector(
        (state) =>
          state.editGame.pages[state.editGame.currentPage].numberOfOptions
      ),
    },
    useEditing: () => [
      useSelector((state) => state.editGame.editing),
      (s) => dispatch(setEditing(s)),
    ],
    currentPage: useSelector((state) => state.editGame.currentPage),
  };
}

function useSetupBar() {
  const dispatch = useDispatch();
  const hasTimeLimitEnabled = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].hasTimeLimit
  );
  const pointsForSpeedEnabled = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].pointsForSpeed
  );
  const page = useSelector((state) => state.editGame.page);

  return {
    name: {
      value: useSelector((state) => state.editGame.name),
      onChange: (e) => {
        dispatch(setName(e.target.value));
      },
    },
    questionTitle: useSelector(
      (state) => state.editGame.pages[state.editGame.currentPage].title
    ),
    pageType: {
      value: useSelector(
        (state) => state.editGame.pages[state.editGame.currentPage].pageType
      ),
      onChange: (e) => {
        dispatch(setPageType(e.target.value));
      },
    },
    hasTimeLimit: {
      checked: hasTimeLimitEnabled,
      onChange: () => {
        dispatch(setHasTimeLimit(!hasTimeLimitEnabled));
      },
    },
    timeLimit: {
      value: useSelector(
        (state) => state.editGame.pages[state.editGame.currentPage].timeLimit
      ),
      onChange: (e) => {
        dispatch(setTimeLimit(e.target.value));
      },
    },
    checkType: {
      value: useSelector(
        (state) => state.editGame.pages[state.editGame.currentPage].checkType
      ),
      onChange: (e) => {
        dispatch(setCheckType(e.target.value));
      },
    },
    pointsForSpeed: {
      checked: pointsForSpeedEnabled,
      onChange: () => {
        dispatch(setPointsForSpeed(!pointsForSpeedEnabled));
      },
    },
    numberOfOptions: {
      value: useSelector(
        (state) =>
          state.editGame.pages[state.editGame.currentPage].numberOfOptions
      ),
      onChange: (e) => {
        dispatch(setNumberOfOptions(e.target.value));
      },
    },
    answerValue: {
      values: useSelector((state) =>
        state.editGame.pages[state.editGame.currentPage].answers
          .slice(
            0,
            state.editGame.pages[state.editGame.currentPage].numberOfOptions
          )
          .map((answer) => answer.value)
      ),
      onChange: (answerIndex, value) => {
        dispatch(
          setAnswerValue({
            answerIndex,
            value,
          })
        );
      },
    },
    addNewPage: () => {
      dispatch(addNewPage());
    },
    gotoPage: (pageNumber) => {
      dispatch(setCurrentPage({ page, pageNumber }));
    },
    resetPage: () => {
      dispatch(resetCurrentPage());
    },
    removePage: () => {
      dispatch(removeCurrentPage());
    },
    saveGame: useSaveGame(),
    playGame: usePlayGame(),
    pages: useSelector((state) => state.editGame.pages),
    currentPage: useSelector((state) => state.editGame.currentPage),
  };
}

function useSaveGame() {
  const game = useSelector((state) => state.editGame);
  const history = useHistory();
  const { gameID } = useParams();
  const gameService = new PrivateGameService();

  return async function () {
    try {
      if (gameID) {
        await gameService.update({ ...game, gameID });
      } else {
        const {
          data: {
            createPrivateGame: { id },
          },
        } = await gameService.create(game);
        history.push(`${url.EDIT_GAME}${id}`);
      }
    } catch (e) {
      console.error("editGameHooks.useSaveGame() error", e);
    }
  };
}

function useLoadGame() {
  const dispatch = useDispatch();

  return function (game) {
    dispatch(setGame(game));
  };
}

function usePlayGame() {
  const saveGame = useSaveGame();
  const history = useHistory();
  const { gameID } = useParams();

  return async function () {
    await saveGame();
    console.log("Going to play: ", gameID);
    if (gameID) {
      history.push(`${url.HOST_GAME}${gameID}`);
    }
  };
}

export { usePage, useSetupBar, useLoadGame };
