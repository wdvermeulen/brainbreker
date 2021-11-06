import React from "react";
import "./Answers.scss";
import { useFormInput } from "../../../../Utils";
import AnswerButton from "./AnswerButton";
import { useEditing } from "../hooks";

const Answers = ({ onBlur }) => {
  const [, setEditing] = useEditing();

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
                  setEditing={setEditing}
                  onBlur={onBlur}
                  answer={array[i - 1]}
                  i={i - 1}
                />
                <AnswerButton
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
