import React from "react";
import "./NewQuiz.scss";
import Answers from "./Slide/Answers";
import Questions from "./Slide/Question";
import SetupBar from "./Slide/SetupBar";
import { useEditing } from "./hooks";

const NewQuiz = () => {
  const [, setEditing] = useEditing();

  function onBlur() {
    return setEditing("");
  }

  return (
    <div id="NewQuiz" className="column">
      <div className="slide column">
        <Questions onBlur={onBlur} />
        <Answers onBlur={onBlur} />
      </div>
      <SetupBar />
    </div>
  );
};

export default NewQuiz;
