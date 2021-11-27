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
import PrivateGameService from "../../services/PrivateGameService";

function useName() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.editGame.name);

  const handleChange = (e) => {
    dispatch(setName(e.target.value));
  };

  return { value, onChange: handleChange };
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
  const value = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].title
  );

  const handleChange = (e) => {
    dispatch(setQuestionTitle(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useQuestionDescription() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].description
  );

  const handleChange = (e) => {
    dispatch(setQuestionDescription(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useQuestionType() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.editGame.type);

  const handleChange = (e) => {
    dispatch(setQuestionType(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useHasTimeLimit() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].hasTimeLimit
  );

  const handleChange = () => {
    dispatch(setHasTimeLimit(!checked));
  };
  return { checked, onChange: handleChange };
}

function useTimeLimit() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].timeLimit
  );

  const handleChange = (e) => {
    dispatch(setTimeLimit(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useCheckType() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].checkType
  );

  const handleChange = (e) => {
    dispatch(setCheckType(e.target.value));
  };

  return { value, onChange: handleChange };
}

function usePointsForSpeed() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].pointsForSpeed
  );

  const handleChange = () => {
    dispatch(setPointsForSpeed(!checked));
  };

  return { checked, onChange: handleChange };
}

function useNumberOfOptions() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.editGame.pages[state.editGame.currentPage].numberOfOptions
  );

  const handleChange = (e) => {
    dispatch(setNumberOfOptions(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useAnswerValue() {
  const dispatch = useDispatch();
  const values = useSelector((state) =>
    state.editGame.pages[state.editGame.currentPage].answers
      .slice(
        0,
        state.editGame.pages[state.editGame.currentPage].numberOfOptions
      )
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
      state.editGame.pages[state.editGame.currentPage].answers[answerIndex]
        .description
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
  const page = useSelector((state) => state.editGame.page);
  const pages = useSelector((state) => state.editGame.pages);
  const currentPage = useSelector((state) => state.editGame.currentPage);

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
  return useSelector((state) => state.editGame.currentPage);
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
  const game = useSelector((state) => state.editGame);
  const gameService = new PrivateGameService();

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
