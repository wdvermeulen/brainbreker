import React, { useState } from "react";
import "./NewQuiz.scss";
import Answers from "./Answers";
import Questions from "./Question";

const NewQuiz = () => {
  const [editing, setEditing] = useState("");

  return (
    <div className="container">
      <Questions editing={editing} setEditing={setEditing} />
      <Answers editing={editing} setEditing={setEditing} />
    </div>
  );
};

export default NewQuiz;
