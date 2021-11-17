import { useDispatch, useSelector } from "react-redux";
import { nextSlide, previousSlide, setCurrentSlide, setEditing } from "./slice";

function useEditing() {
  const dispatch = useDispatch();
  return [
    useSelector((state) => state.newQuiz.current.editing),
    (s) => dispatch(setEditing(s)),
  ];
}

function useSlideNavigation() {
  const dispatch = useDispatch();
  const slide = useSelector((state) => state.newQuiz.slide);
  // const currentSlide = useSelector(
  //   (state) => state.current.slides[state.current.slideNumber]
  // );
  const gotoNextSlide = () => {
    dispatch(nextSlide(slide));
  };
  const gotoPreviousSlide = () => {
    dispatch(previousSlide(slide));
  };
  const gotoSlide = (slideNumber) => {
    dispatch(setCurrentSlide({ slide, slideNumber }));
  };
  return { gotoNextSlide, gotoPreviousSlide, gotoSlide /*, currentSlide */ };
}

export { useEditing, useSlideNavigation };
