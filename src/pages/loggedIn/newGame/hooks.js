import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  nextSlide,
  previousSlide,
  removeCurrentSlide,
  resetCurrentSlide,
  setAnswerDescription,
  setAnswerValue,
  setCheckType,
  setCurrentSlide,
  setEditing,
  setHasTimeLimit,
  setNumberOfOptions,
  setPointsForSpeed,
  setQuestionDescription,
  setQuestionTitle,
  setTimeLimit,
  setQuestionType,
} from "./slice";
import QuizService from "../../../services/QuizService";

function useName() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.newGame.name);

  const handleChange = (e) => {
    dispatch(setName(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useEditing() {
  const dispatch = useDispatch();
  return [
    useSelector((state) => state.newGame.editing),
    (s) => dispatch(setEditing(s)),
  ];
}

function useQuestionTitle() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.newGame.slides[state.newGame.currentSlide].title
  );

  const handleChange = (e) => {
    dispatch(setQuestionTitle(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useQuestionDescription() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.newGame.slides[state.newGame.currentSlide].description
  );

  const handleChange = (e) => {
    dispatch(setQuestionDescription(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useQuestionType() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.newGame.type);

  const handleChange = (e) => {
    dispatch(setQuestionType(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useHasTimeLimit() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.newGame.slides[state.newGame.currentSlide].hasTimeLimit
  );

  const handleChange = () => {
    dispatch(setHasTimeLimit(!checked));
  };
  return { checked, onChange: handleChange };
}

function useTimeLimit() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.newGame.slides[state.newGame.currentSlide].timeLimit
  );

  const handleChange = (e) => {
    dispatch(setTimeLimit(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useCheckType() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.newGame.slides[state.newGame.currentSlide].checkType
  );

  const handleChange = (e) => {
    dispatch(setCheckType(e.target.value));
  };

  return { value, onChange: handleChange };
}

function usePointsForSpeed() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.newGame.slides[state.newGame.currentSlide].pointsForSpeed
  );

  const handleChange = () => {
    dispatch(setPointsForSpeed(!checked));
  };

  return { checked, onChange: handleChange };
}

function useNumberOfOptions() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.newGame.slides[state.newGame.currentSlide].numberOfOptions
  );

  const handleChange = (e) => {
    dispatch(setNumberOfOptions(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useAnswerValue() {
  const dispatch = useDispatch();
  const values = useSelector((state) =>
    state.newGame.slides[state.newGame.currentSlide].answers
      .slice(
        0,
        state.newGame.slides[state.newGame.currentSlide].numberOfOptions
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
      state.newGame.slides[state.newGame.currentSlide].answers[answerIndex]
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

function useSlideNavigation() {
  const dispatch = useDispatch();
  const slide = useSelector((state) => state.newGame.slide);
  const slides = useSelector((state) => state.newGame.slides);
  const currentSlide = useSelector((state) => state.newGame.currentSlide);

  const gotoNextSlide = () => {
    dispatch(nextSlide(slide));
  };
  const gotoPreviousSlide = () => {
    dispatch(previousSlide(slide));
  };
  const gotoSlide = (slideNumber) => {
    dispatch(setCurrentSlide({ slide, slideNumber }));
  };

  return { gotoNextSlide, gotoPreviousSlide, gotoSlide, slides, currentSlide };
}

function useCurrentSlide() {
  return useSelector((state) => state.newGame.currentSlide);
}

function useResetSlide() {
  const dispatch = useDispatch();
  const resetSlide = () => {
    dispatch(resetCurrentSlide());
  };
  return resetSlide;
}

function useRemoveSlide() {
  const dispatch = useDispatch();
  const removeSlide = () => {
    dispatch(removeCurrentSlide());
  };
  return removeSlide;
}

function useSlideInput() {
  const dispatch = useDispatch();

  const onKeyDown = (e) => {
    if (e.key === "Enter") dispatch(setEditing(""));
  };

  const onBlur = () => {
    dispatch(setEditing(""));
  };

  return { onBlur, onKeyDown };
}

function useSaveQuiz() {
  const quiz = useSelector((state) => state.newGame);
  const quizService = new QuizService();

  async function saveQuiz() {
    await quizService.post(quiz);
  }

  return saveQuiz;
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
  useSlideNavigation,
  useCurrentSlide,
  useResetSlide,
  useRemoveSlide,
  useSlideInput,
  useSaveQuiz,
};
