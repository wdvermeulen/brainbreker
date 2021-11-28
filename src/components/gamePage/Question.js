import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { I18n } from "aws-amplify";
import "./Question.scss";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";

const Question = ({
  questionTitle,
  questionDescription,
  currentPage,
  useEditing,
  pageInput,
}) => {
  const [editing, setEditing] = useEditing();

  return (
    <div id="Question" className="section">
      <div className="glass-tile">
        {editing === "title" ? (
          <>
            <label htmlFor="title">Titel: </label>
            <AutosizeInput
              autoFocus
              id="title"
              type="text"
              {...pageInput}
              {...questionTitle}
            />
          </>
        ) : (
          <h2
            onClick={() => {
              setEditing("title");
            }}
          >
            {currentPage + 1 + ". " + (questionTitle.value || "Titel")}
          </h2>
        )}
        {editing === "question" ? (
          <>
            <label htmlFor="question">Vraag: </label>
            <TextareaAutosize
              autoFocus
              id="question"
              name="question"
              {...pageInput}
              {...questionDescription}
            />
          </>
        ) : (
          <div
            onClick={() => {
              setEditing("question");
            }}
          >
            {questionDescription.value ||
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
