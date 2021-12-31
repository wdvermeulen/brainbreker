import { Box, Button } from "@mui/material";
import React from "react";
import colors from "../../../sharedResources/colors.json";
import TextareaAutosize from "react-textarea-autosize";
import { styled } from "../../../sharedStyles/theme";

const style = {
  borderStyle: "solid",
  borderWidth: "$2",
  borderBottomWidth: "$4",
  wordWrap: "break-word",
  padding: "$1 $2 $2 $2",
  flex: "1 1 100%",
  backgroundColor: "$answerBackground",
  color: "$textDark",
  margin: "$0",
  transition: "background-color .3s",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "$default",

  // "&:hover": {
  //   backgroundColor: "$answerBackgroundDark",
  //   cursor: "pointer",
  // },
  //
  // "&:active": {
  //   backgroundColor: "$light",
  // },

  textarea: {
    textAlign: "center",
  },

  ".label": {
    fontSize: "$3",
    marginBottom: "$2",
    marginRight: "$1",
    fontFamily: "$header",
  },

  "> :first-child": {
    marginTop: "$0",
  },

  "> :last-child": {
    marginBottom: "$0",
  },

  variants: {
    number: { ...colors.map((a) => ({ borderColor: a })) },
  },
};

const StyledMultipleChoiceDiv = styled(Box, style);

const MultipleChoiceButton = ({
  useAnswerDescription,
  i,
  useEditing = () => [],
  // giveAnswer,
  pageInput,
}) => {
  const [editing, setEditing] = useEditing();
  const answerDescription = useAnswerDescription(i);

  const onClickEdit = () => {
    if (setEditing) setEditing("answer" + i);
    // else if (giveAnswer) giveAnswer(i);
  };

  return (
    <StyledMultipleChoiceDiv
      className="answer"
      number={i % colors.length}
      key={i}
    >
      <span className="label">{i + 1}</span>
      {editing === "answer" + i ? (
        <>
          <label htmlFor={"answer" + i}>Antwoord {i + 1}: </label>
          <TextareaAutosize
            autoFocus
            id={"answer" + i}
            type="text"
            {...pageInput}
            {...answerDescription}
          />
        </>
      ) : (
        <Button variant="text" onClick={onClickEdit}>
          {answerDescription.value || "Antwoord " + (i + 1)}
        </Button>
      )}
    </StyledMultipleChoiceDiv>
  );
};

export default MultipleChoiceButton;
