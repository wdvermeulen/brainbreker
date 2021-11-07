import React from "react";
import "./Answers.scss";
import AnswerButton from "./AnswerButton";
import { useNumberOfOptions } from "./hooks";

const Answers = ({ onBlur }) => {
  const { value } = useNumberOfOptions();
  const rows = [];

  for (let i = 0; i < value; i++) {
    if (i % 2 === 1) {
      rows.push(
        <div className="row" key={i}>
          <AnswerButton onBlur={onBlur} i={i - 1} />
          <AnswerButton onBlur={onBlur} i={i} />
        </div>
      );
    } else if (i === value - 1) {
      rows.push(
        <div className="row" key={i}>
          <AnswerButton onBlur={onBlur} i={i} />
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
