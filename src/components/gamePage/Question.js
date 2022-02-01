import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { I18n } from "aws-amplify";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import { styled } from "../../sharedStyles/theme";

const StyledQuestion = styled("div", {
  flex: "1 1 auto",

  "input, textarea": {
    color: "$textLightest",
    background: "none",
    width: "100%",
    borderColor: "$lightest",
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
      <Card variant="outlined">
        <CardContent>
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
            <h2>
              {parseInt(currentPage) + 1 + ". "}
              <Button
                variant="text"
                color="secondary"
                onClick={onClickTitle}
                className="header"
              >
                {questionTitle.value || "Titel"}
              </Button>
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
            <Button
              variant="text"
              onClick={onClickDescriptions}
              color="secondary"
            >
              {questionDescription.value ||
                I18n.get("Tap on text to edit. Swipe to go to the next page.")}
            </Button>
          )}
        </CardContent>
      </Card>
    </StyledQuestion>
  );
};

export default Question;
