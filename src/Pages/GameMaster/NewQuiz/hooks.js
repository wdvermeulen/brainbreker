import { useDispatch, useSelector } from "react-redux";
import { nextSlide, previousSlide, setCurrentSlide, setEditing } from "./slice";

function useEditing() {
  const dispatch = useDispatch();
  return [
    useSelector((state) => state.newQuiz.editing),
    (s) => dispatch(setEditing(s)),
  ];
}

function useCurrentSlide() {
  const dispatch = useDispatch();
  return [
    useSelector((state) => state.newQuiz.currentSlide),
    (i) => dispatch(setCurrentSlide(i)),
  ];
}

function useNextSlide() {
  const dispatch = useDispatch();
  return dispatch(nextSlide());
}

function usePreviousSlide() {
  const dispatch = useDispatch();
  return dispatch(previousSlide());
}

export { useEditing, useCurrentSlide, useNextSlide, usePreviousSlide };
