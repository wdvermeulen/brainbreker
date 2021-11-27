import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { url } from "../../../SiteRoute";
import {
  setName,
  nextPage,
  previousPage,
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
  setQuestionType,
} from "./slice";
import PrivateGameService from "../../services/PrivateGameService";

function useName() {
  const dispatch = useDispatch();

  return {
    value: useSelector((state) => state.editGame.name),
    onChange: (e) => {
      dispatch(setName(e.target.value));
    },
  };
}

function useEditing() {
  const dispatch = useDispatch();
  return [
    useSelector((state) => state.editGame.editing),
    (s) => dispatch(setEditing(s)),
  ];
}

function useQuestionTitle() {
  const dispatch = useDispatch();

  return {
    value: useSelector(
      (state) => state.editGame.pages[state.editGame.currentPage].title
    ),
    onChange: (e) => {
      dispatch(setQuestionTitle(e.target.value));
    },
  };
}

function useQuestionDescription() {
  const dispatch = useDispatch();

  return {
    value: useSelector(
      (state) => state.editGame.pages[state.editGame.currentPage].description
    ),
    onChange: (e) => {
      dispatch(setQuestionDescription(e.target.value));
    },
  };
}

function useQuestionType() {
  const dispatch = useDispatch();

  return {
    value: useSelector((state) => state.editGame.type),
    onChange: (e) => {
      dispatch(setQuestionType(e.target.value));
    },
  };
}

function useHasTimeLimit() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].hasTimeLimit
  );

  return {
    checked,
    onChange: () => {
      dispatch(setHasTimeLimit(!checked));
    },
  };
}

function useTimeLimit() {
  const dispatch = useDispatch();

  return {
    value: useSelector(
      (state) => state.editGame.pages[state.editGame.currentPage].timeLimit
    ),
    onChange: (e) => {
      dispatch(setTimeLimit(e.target.value));
    },
  };
}

function useCheckType() {
  const dispatch = useDispatch();

  return {
    value: useSelector(
      (state) => state.editGame.pages[state.editGame.currentPage].checkType
    ),
    onChange: (e) => {
      dispatch(setCheckType(e.target.value));
    },
  };
}

function usePointsForSpeed() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].pointsForSpeed
  );

  return {
    checked,
    onChange: () => {
      dispatch(setPointsForSpeed(!checked));
    },
  };
}

function useNumberOfOptions() {
  const dispatch = useDispatch();

  return {
    value: useSelector(
      (state) =>
        state.editGame.pages[state.editGame.currentPage].numberOfOptions
    ),
    onChange: (e) => {
      dispatch(setNumberOfOptions(e.target.value));
    },
  };
}

function useAnswerValue() {
  const dispatch = useDispatch();

  return {
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
  };
}

function useAnswerDescription(answerIndex) {
  const dispatch = useDispatch();

  return {
    value: useSelector(
      (state) =>
        state.editGame.pages[state.editGame.currentPage].answers[answerIndex]
          .description
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
}

function usePageNavigation() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.editGame.page);

  return {
    gotoNextPage: () => {
      dispatch(nextPage(page));
    },
    gotoPreviousPage: () => {
      dispatch(previousPage(page));
    },
    gotoPage: (pageNumber) => {
      dispatch(setCurrentPage({ page, pageNumber }));
    },
    pages: useSelector((state) => state.editGame.pages),
    currentPage: useSelector((state) => state.editGame.currentPage),
  };
}

function useCurrentPage() {
  return useSelector((state) => state.editGame.currentPage);
}

function useResetPage() {
  const dispatch = useDispatch();

  return () => {
    dispatch(resetCurrentPage());
  };
}

function useRemovePage() {
  const dispatch = useDispatch();

  return () => {
    dispatch(removeCurrentPage());
  };
}

function usePageInput() {
  const dispatch = useDispatch();

  return {
    onBlur: () => {
      dispatch(setEditing(""));
    },
    onKeyDown: (e) => {
      if (e.key === "Enter") dispatch(setEditing(""));
    },
  };
}

function useSaveGame() {
  const game = useSelector((state) => state.editGame);
  const history = useHistory();
  const { gameID } = useParams();
  const gameService = new PrivateGameService();

  return async function () {
    if (gameID) {
      await gameService.update(game);
    } else {
      const id = await gameService.create(game);
      history.push(`${url.EDIT_GAME}${id}`);
    }
  };
}

function usePlayGame() {
  const saveGame = useSaveGame();
  const history = useHistory();
  const { gameID } = useParams();

  return async function () {
    await saveGame();
    if (gameID) {
      history.push(`${url.HOST_GAME}${gameID}`);
    }
  };
}

export {
  useName,
  useEditing,
  useQuestionTitle,
  useQuestionDescription,
  useQuestionType,
  useHasTimeLimit,
  useTimeLimit,
  useCheckType,
  usePointsForSpeed,
  useNumberOfOptions,
  useAnswerValue,
  useAnswerDescription,
  usePageNavigation,
  useCurrentPage,
  useResetPage,
  useRemovePage,
  usePageInput,
  useSaveGame,
  usePlayGame,
};
