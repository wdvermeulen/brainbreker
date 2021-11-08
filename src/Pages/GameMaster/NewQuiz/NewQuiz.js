import React, { useState } from "react";
import "./NewQuiz.scss";
import Answers from "./Slide/Answers";
import Questions from "./Slide/Question";
import SetupBar from "./Slide/SetupBar";
import { useEditing } from "./hooks";

const NewQuiz = () => {
  const [, setEditing] = useEditing();
  const [collapsed, setCollapsed] = useState(false);

  function collapse() {
    return setCollapsed(!collapsed);
  }

  function onBlur() {
    return setEditing("");
  }

  return (
    <div id="NewQuiz" className="row">
      <div className="slide column">
        <Questions onBlur={onBlur} />
        <Answers onBlur={onBlur} />
      </div>
      <SetupBar collapse={collapse} collapsed={collapsed} />
    </div>
  );
};

export default NewQuiz;
