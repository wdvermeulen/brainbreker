import { useDispatch, useSelector } from "react-redux";
import {
  setTitle,
  nextSlide,
  previousSlide,
  removeCurrentSlide,
  resetCurrentSlide,
  setAnswerDescription,
  setAnswerValue,
  setAutoCheck,
  setCurrentSlide,
  setEditing,
  setHasTimeLimit,
  setNumberOfOptions,
  setPointsForSpeed,
  setQuestionDescription,
  setQuestionTitle,
  setTimeLimit,
} from "./slice";

function useName() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.newQuiz.name);

  const handleChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useEditing() {
  const dispatch = useDispatch();
  return [
    useSelector((state) => state.newQuiz.editing),
    (s) => dispatch(setEditing(s)),
  ];
}

function useQuestionTitle() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.newQuiz.slides[state.newQuiz.currentSlide].question.title
  );

  const handleChange = (e) => {
    dispatch(setQuestionTitle(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useQuestionDescription() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) =>
      state.newQuiz.slides[state.newQuiz.currentSlide].question.description
  );

  const handleChange = (e) => {
    dispatch(setQuestionDescription(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useHasTimeLimit() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.newQuiz.slides[state.newQuiz.currentSlide].hasTimeLimit
  );

  const handleChange = () => {
    dispatch(setHasTimeLimit(!checked));
  };

  return { checked, onChange: handleChange };
}

function useTimeLimit() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.newQuiz.slides[state.newQuiz.currentSlide].timeLimit
  );

  const handleChange = (e) => {
    dispatch(setTimeLimit(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useAutoCheck() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.newQuiz.slides[state.newQuiz.currentSlide].autoCheck
  );

  const handleChange = () => {
    dispatch(setAutoCheck(!checked));
  };

  return { checked, onChange: handleChange };
}

function usePointsForSpeed() {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.newQuiz.slides[state.newQuiz.currentSlide].pointsForSpeed
  );

  const handleChange = () => {
    dispatch(setPointsForSpeed(!checked));
  };

  return { checked, onChange: handleChange };
}

function useNumberOfOptions() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.newQuiz.slides[state.newQuiz.currentSlide].numberOfOptions
  );

  const handleChange = (e) => {
    dispatch(setNumberOfOptions(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useAnswerValue() {
  const dispatch = useDispatch();
  const values = useSelector((state) =>
    state.newQuiz.slides[state.newQuiz.currentSlide].answers
      .slice(
        0,
        state.newQuiz.slides[state.newQuiz.currentSlide].numberOfOptions
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
      state.newQuiz.slides[state.newQuiz.currentSlide].answers[answerIndex]
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
  const slide = useSelector((state) => state.newQuiz.slide);
  const slides = useSelector((state) => state.newQuiz.slides);
  const currentSlide = useSelector((state) => state.newQuiz.currentSlide);

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
  return useSelector((state) => state.newQuiz.currentSlide);
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

export {
  useName,
  useEditing,
  useQuestionTitle,
  useQuestionDescription,
  useHasTimeLimit,
  useTimeLimit,
  useAutoCheck,
  usePointsForSpeed,
  useNumberOfOptions,
  useAnswerValue,
  useAnswerDescription,
  useSlideNavigation,
  useCurrentSlide,
  useResetSlide,
  useRemoveSlide,
  useSlideInput,
};
