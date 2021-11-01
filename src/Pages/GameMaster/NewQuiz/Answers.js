import React from "react";
import "./Answers.scss";
import { I18n } from "aws-amplify";
import { useFormInput } from "../../../Utils";
import Button from "./Button";

const Answers = ({ editing, setEditing }) => {
  const answers = [
    useFormInput(I18n.get("Antwoord")),
    useFormInput(I18n.get("Antwoord")),
    useFormInput(I18n.get("Antwoord")),
    useFormInput(I18n.get("Antwoord")),
  ];

  console.log(editing, answers);

  return (
    <div className="bottom half">
      {answers.map((answer, i) => {
        if (i % 2 === 1) {
          return (
            <div className="row">
              <Button
                editing={editing}
                setEditing={setEditing}
                answer={answer}
                i={i}
              />
              <Button
                editing={editing}
                setEditing={setEditing}
                answer={answer}
                i={i}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Answers;
