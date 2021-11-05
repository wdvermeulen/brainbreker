import React, { useState } from "react";
import "./NewQuiz.scss";
import Answers from "./Sections/Answers";
import Questions from "./Sections/Question";
import SetupBar from "./Sections/SetupBar";

const NewQuiz = () => {
  const [editing, setEditing] = useState("");

  function onBlur() {
    setEditing("");
  }

  return (
    <div id="NewQuiz" className="column">
      <Questions editing={editing} setEditing={setEditing} onBlur={onBlur} />
      <Answers editing={editing} setEditing={setEditing} onBlur={onBlur} />
      <SetupBar />
    </div>
  );
};

export default NewQuiz;
