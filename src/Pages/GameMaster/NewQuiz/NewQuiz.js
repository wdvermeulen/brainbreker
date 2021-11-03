import React, { useState } from "react";
import "./NewQuiz.scss";
import Answers from "./Answers";
import Questions from "./Question";

const NewQuiz = () => {
  const [editing, setEditing] = useState("");

  function onBlur() {
    setEditing("");
  }

  return (
    <div className="container">
      <Questions editing={editing} setEditing={setEditing} onBlur={onBlur} />
      <Answers editing={editing} setEditing={setEditing} onBlur={onBlur} />
    </div>
  );
};

export default NewQuiz;
