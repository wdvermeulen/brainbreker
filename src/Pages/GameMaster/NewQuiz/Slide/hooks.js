import { useDispatch, useSelector } from "react-redux";
import {
  setQuestionDescription,
  setQuestionTitle,
  setHasTimeLimit,
  setTimeLimit,
  setAutoCheck,
  setPointsForSpeed,
} from "./slice";

function useQuestionTitle() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.newQuiz.slide.question.title);

  const handleChange = (e) => {
    dispatch(setQuestionTitle(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useQuestionDescription() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.newQuiz.slide.question.description
  );

  const handleChange = (e) => {
    dispatch(setQuestionDescription(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useHasTimeLimit() {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.newQuiz.slide.hasTimeLimit);

  const handleChange = () => {
    dispatch(setHasTimeLimit(!checked));
  };

  return { checked, onChange: handleChange };
}

function useTimeLimit() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.newQuiz.slide.timeLimit);

  const handleChange = (e) => {
    dispatch(setTimeLimit(e.target.value));
  };

  return { value, onChange: handleChange };
}

function useAutoCheck() {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.newQuiz.slide.autoCheck);

  const handleChange = () => {
    dispatch(setAutoCheck(!checked));
  };

  return { checked, onChange: handleChange };
}

function usePointsForSpeed() {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.newQuiz.slide.pointsForSpeed);

  const handleChange = () => {
    dispatch(setPointsForSpeed(!checked));
  };

  return { checked, onChange: handleChange };
}

export {
  useQuestionTitle,
  useQuestionDescription,
  useHasTimeLimit,
  useTimeLimit,
  useAutoCheck,
  usePointsForSpeed,
};
