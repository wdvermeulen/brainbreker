import { styled } from "@stitches/react";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { I18n } from "aws-amplify";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";

const StyledQuestion = styled("div", {
  flex: "1 1 auto",

  "input, textarea": {
    color: "#FFF",
    background: "none",
    width: "100%",
    borderColor: "#FFF",
  },

  // input: {
  //   "@include serif-header";
  // }
});

const Question = ({
  questionTitle,
  questionDescription,
  currentPage,
  useEditing = () => [],
  pageInput,
}) => {
  const [editing, setEditing] = useEditing();

  const onClickTitle = () => {
    if (setEditing) setEditing("title");
  };

  const onClickDescriptions = () => {
    if (setEditing) setEditing("question");
  };

  return (
    <StyledQuestion className="section">
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
          <h2 onClick={onClickTitle}>
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
          <div onClick={onClickDescriptions}>
            {questionDescription.value ||
              I18n.get(
                "Tap on text to edit. Swipe to go to the next question."
              )}
          </div>
        )}
      </div>
    </StyledQuestion>
  );
};

export default Question;
