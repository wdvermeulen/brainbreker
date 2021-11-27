import React from "react";
import "./Answers.scss";
import { useNumberOfOptions } from "../hooks";
import AnswerButton from "./AnswerButton";

const Answers = () => {
  const { value } = useNumberOfOptions();
  const rows = [];

  for (let i = 0; i < value; i++) {
    if (i % 2 === 1) {
      rows.push(
        <div className="row" key={"AnswersRow" + i}>
          <AnswerButton i={i - 1} />
          <AnswerButton i={i} />
        </div>
      );
    } else if (i === value - 1) {
      rows.push(
        <div className="row" key={"AnswersRow" + i}>
          <AnswerButton i={i} />
        </div>
      );
    }
  }

  return (
    <div id="answers" className="section">
      {rows}
    </div>
  );
};

export default Answers;
