import React from "react";
import "./Answers.scss";
import { I18n } from "aws-amplify";
import { useFormInput } from "../../../../Utils";
import AnswerButton from "./AnswerButton";
import SetupBar from "./SetupBar";

const Answers = ({ editing, setEditing, onBlur }) => {
  const answers = [
    useFormInput(""),
    useFormInput(""),
    useFormInput(""),
    useFormInput(""),
  ];

  return (
    <>
      <div id="answers" className="section">
        {answers.reduce((previous, answer, i, array) => {
          if (i % 2 === 1) {
            previous.push(
              <div className="row" key={i}>
                <AnswerButton
                  editing={editing}
                  setEditing={setEditing}
                  onBlur={onBlur}
                  answer={array[i - 1]}
                  i={i - 1}
                />
                <AnswerButton
                  editing={editing}
                  setEditing={setEditing}
                  onBlur={onBlur}
                  answer={answer}
                  i={i}
                />
              </div>
            );
          } else if (i === array.length - 1) {
            previous.push(
              <div className="row" key={i}>
                <AnswerButton
                  editing={editing}
                  setEditing={setEditing}
                  onBlur={onBlur}
                  answer={answer}
                  i={i}
                />
              </div>
            );
          }
          return previous;
        }, [])}
      </div>
    </>
  );
};

export default Answers;
