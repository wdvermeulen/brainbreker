import { useDispatch, useSelector } from "react-redux";
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
import GameService from "../../../services/GameService";

function useName() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.game.name);

  const handleChange = (e) => {
    dispatch(setName(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useEditing() {
  const dispatch = useDispatch();
  return [
    useSelector((state) => state.game.editing),
    (s) => dispatch(setEditing(s)),
  ];
}

function useQuestionTitle() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.game.pages[state.game.currentPage].title
  );

  const handleChange = (e) => {
    dispatch(setQuestionTitle(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useQuestionDescription() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.game.pages[state.game.currentPage].description
  );

  const handleChange = (e) => {
    dispatch(setQuestionDescription(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useQuestionType() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.game.type);

  const handleChange = (e) => {
    dispatch(setQuestionType(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useHasTimeLimit() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.game.pages[state.game.currentPage].hasTimeLimit
  );

  const handleChange = () => {
    dispatch(setHasTimeLimit(!checked));
  };
  return { checked, onChange: handleChange };
}

function useTimeLimit() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.game.pages[state.game.currentPage].timeLimit
  );

  const handleChange = (e) => {
    dispatch(setTimeLimit(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useCheckType() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.game.pages[state.game.currentPage].checkType
  );

  const handleChange = (e) => {
    dispatch(setCheckType(e.target.value));
  };

  return { value, onChange: handleChange };
}

function usePointsForSpeed() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.game.pages[state.game.currentPage].pointsForSpeed
  );

  const handleChange = () => {
    dispatch(setPointsForSpeed(!checked));
  };

  return { checked, onChange: handleChange };
}

function useNumberOfOptions() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.game.pages[state.game.currentPage].numberOfOptions
  );

  const handleChange = (e) => {
    dispatch(setNumberOfOptions(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useAnswerValue() {
  const dispatch = useDispatch();
  const values = useSelector((state) =>
    state.game.pages[state.game.currentPage].answers
      .slice(0, state.game.pages[state.game.currentPage].numberOfOptions)
      .map((answer) => answer.value)
  );

  const handleChange = (answerIndex, value) => {
    dispatch(
      setAnswerValue({
        answerIndex,
        value,
      })
    );
  };

  return {
    values,
    onChange: handleChange,
  };
}

function useAnswerDescription(answerIndex) {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) =>
      state.game.pages[state.game.currentPage].answers[answerIndex].description
  );

  const handleChange = (e) => {
    dispatch(
      setAnswerDescription({
        answerIndex,
        description: e.target.value,
      })
    );
  };

  return {
    value,
    onChange: handleChange,
  };
}

function usePageNavigation() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.game.page);
  const pages = useSelector((state) => state.game.pages);
  const currentPage = useSelector((state) => state.game.currentPage);

  const gotoNextPage = () => {
    dispatch(nextPage(page));
  };
  const gotoPreviousPage = () => {
    dispatch(previousPage(page));
  };
  const gotoPage = (pageNumber) => {
    dispatch(setCurrentPage({ page, pageNumber }));
  };

  return { gotoNextPage, gotoPreviousPage, gotoPage, pages, currentPage };
}

function useCurrentPage() {
  return useSelector((state) => state.game.currentPage);
}

function useResetPage() {
  const dispatch = useDispatch();
  const resetPage = () => {
    dispatch(resetCurrentPage());
  };
  return resetPage;
}

function useRemovePage() {
  const dispatch = useDispatch();
  const removePage = () => {
    dispatch(removeCurrentPage());
  };
  return removePage;
}

function usePageInput() {
  const dispatch = useDispatch();

  const onKeyDown = (e) => {
    if (e.key === "Enter") dispatch(setEditing(""));
  };

  const onBlur = () => {
    dispatch(setEditing(""));
  };

  return { onBlur, onKeyDown };
}

function useSaveGame() {
  const game = useSelector((state) => state.game);
  const gameService = new GameService();

  async function saveGame() {
    await gameService.create(game);
  }

  return saveGame;
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
};
