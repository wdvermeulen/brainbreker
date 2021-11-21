import React, { useState } from "react";
import "./NewQuiz.scss";
import Answers from "./Slide/Answers";
import Questions from "./Slide/Question";
import SetupBar from "./Slide/SetupBar";

const NewQuiz = () => {
  const [collapsed, setCollapsed] = useState(false);

  function collapse() {
    return setCollapsed(!collapsed);
  }

  return (
    <div id="NewQuiz" className="row">
      <div className="slide column">
        <Questions />
        <Answers />
      </div>
      <SetupBar collapse={collapse} collapsed={collapsed} />
    </div>
  );
};

export default NewQuiz;
