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
    useFormInput(I18n.get("Antwoord")),
  ];

  console.log(editing);

  return (
    <div className="bottom half">
      {answers.reduce((previous, answer, i, array) => {
        if (i % 2 === 1) {
          previous.push(
            <div className="row">
              <Button
                editing={editing}
                setEditing={setEditing}
                answer={array[i - 1]}
                i={i - 1}
                key={i - 1}
              />
              <Button
                editing={editing}
                setEditing={setEditing}
                answer={answer}
                i={i}
                key={i}
              />
            </div>
          );
        } else if (i === array.length - 1) {
          previous.push(
            <div className="row">
              <Button
                editing={editing}
                setEditing={setEditing}
                answer={answer}
                i={i}
                key={i}
              />
            </div>
          );
        }
        return previous;
      }, [])}
    </div>
  );
};

export default Answers;
