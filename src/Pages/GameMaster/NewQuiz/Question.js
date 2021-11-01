import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { I18n } from "aws-amplify";
import "./Question.scss";
import { useFormInput } from "../../../Utils";

const Question = ({ editing, setEditing }) => {
  const title = useFormInput(I18n.get("Question") + " 1");
  const question = useFormInput(
    I18n.get("Tap on text to edit. Swipe to go to the next question.")
  );

  return (
    <div className="top half">
      <div className="glass-tile">
        {editing === "title" ? (
          <>
            <label htmlFor="title">Naam vraag: </label>
            <input
              autoFocus
              id="title"
              type="text"
              onBlur={() => {
                setEditing("");
              }}
              {...title}
            />
          </>
        ) : (
          <h2
            onClick={() => {
              setEditing("title");
            }}
          >
            {title.value}
          </h2>
        )}
        {editing === "question" ? (
          <>
            <label htmlFor="question">Vraag: </label>
            <TextareaAutosize
              autoFocus
              id="question"
              name="question"
              onBlur={() => {
                setEditing("");
              }}
              {...question}
            />
          </>
        ) : (
          <div
            onClick={() => {
              setEditing("question");
            }}
          >
            {question.value}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
