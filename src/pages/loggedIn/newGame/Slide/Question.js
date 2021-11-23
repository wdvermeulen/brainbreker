import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { I18n } from "aws-amplify";
import "./Question.scss";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import {
  useCurrentSlide,
  useEditing,
  useQuestionDescription,
  useQuestionTitle,
  useSlideInput,
} from "../hooks";

const Question = () => {
  const title = useQuestionTitle();
  const [editing, setEditing] = useEditing();
  const question = useQuestionDescription();
  const currentSlide = useCurrentSlide();
  const slideInput = useSlideInput();

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
              {...slideInput}
              {...title}
            />
          </>
        ) : (
          <h2
            onClick={() => {
              setEditing("title");
            }}
          >
            {currentSlide + 1 + ". " + (title.value || "Titel")}
          </h2>
        )}
        {editing === "question" ? (
          <>
            <label htmlFor="question">Vraag: </label>
            <TextareaAutosize
              autoFocus
              id="question"
              name="question"
              {...slideInput}
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
