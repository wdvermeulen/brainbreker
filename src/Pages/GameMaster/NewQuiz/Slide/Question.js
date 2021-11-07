import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { I18n } from "aws-amplify";
import "./Question.scss";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import { useEditing } from "../hooks";
import { useQuestionDescription, useQuestionTitle } from "./hooks";

const Question = ({ onBlur }) => {
  const title = useQuestionTitle();
  const [editing, setEditing] = useEditing();
  const question = useQuestionDescription();

  console.log(title);

  return (
    <div id="Question" className="section">
      <div className="glass-tile">
        {editing === "title" ? (
          <>
            <label htmlFor="title">Naam vraag: </label>
            <AutosizeInput
              autoFocus
              id="title"
              type="text"
              onBlur={onBlur}
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
              onBlur={onBlur}
              {...question}
            />
          </>
        ) : (
          <div
            onClick={() => {
              setEditing("question");
            }}
          >
            {question.value ||
              I18n.get(
                "Tap on text to edit. Swipe to go to the next question."
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
