import React from "react";
import "./Answers.scss";
import AnswerButton from "./AnswerButton";

const Answers = ({ numberOfOptionsValue, ...props }) => {
  const rows = [];

  for (let i = 0; i < numberOfOptionsValue; i++) {
    if (i % 2 === 1) {
      rows.push(
        <div className="row" key={"AnswersRow" + i}>
          <AnswerButton i={i - 1} {...props} />
          <AnswerButton i={i} {...props} />
        </div>
      );
    } else if (i === numberOfOptionsValue - 1) {
      rows.push(
        <div className="row" key={"AnswersRow" + i}>
          <AnswerButton i={i} {...props} />
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
