import React from "react";
import "../Answers.scss";
import MultipleChoiceButton from "./MultipleChoiceButton";

const MultipleChoice = ({ numberOfOptions: { value }, ...props }) => {
  const rows = [];

  for (let i = 0; i < value; i++) {
    if (i % 2 === 1) {
      rows.push(
        <div className="row" key={"AnswersRow" + i}>
          <MultipleChoiceButton i={i - 1} {...props} />
          <MultipleChoiceButton i={i} {...props} />
        </div>
      );
    } else if (i === value - 1) {
      rows.push(
        <div className="row" key={"AnswersRow" + i}>
          <MultipleChoiceButton i={i} {...props} />
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

export default MultipleChoice;
