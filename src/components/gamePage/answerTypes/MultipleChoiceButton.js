import colors from "../../../sharedResources/colors.json";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { styled } from "../../../sharedStyles/theme";

const StyledMultipleChoiceButton = styled("div", {
  borderStyle: "solid",
  borderWidth: "$2",
  borderBottomWidth: "$3",
  wordWrap: "break-word",
  padding: "$1 $2 $2 $2",
  flex: "1 1 100%",
  backgroundColor: "$answerBackground",
  color: "$textDark",
  margin: "$0",
  transition: "background-color .3s",

  "&:hover": {
    backgroundColor: "$answerBackgroundDark",
    cursor: "pointer",
  },

  textarea: {
    textAlign: "center",
  },

  ".header": {
    fontSize: "$3",
    marginBottom: "$2",
    float: "left",
    marginRight: "$1",
    fontFamily: "$header",
  },

  "> :first-child": {
    marginTop: "$0",
  },

  "> :last-child": {
    marginBottom: "$0",
  },
});

const MultipleChoiceButton = ({
  useAnswerDescription,
  i,
  useEditing = () => [],
  giveAnswer = () => {},
  pageInput,
}) => {
  const [editing, setEditing] = useEditing();
  const answerDescription = useAnswerDescription(i);

  const onClick = () => {
    if (setEditing) setEditing("answer" + i);
    else giveAnswer(i);
  };

  return (
    <StyledMultipleChoiceButton
      className="answer"
      onClick={onClick}
      style={{
        borderColor: colors[i % colors.length],
      }}
      key={i}
    >
      <span className="header">{i + 1}</span>
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
        <span>{answerDescription.value}</span>
      )}
    </StyledMultipleChoiceButton>
  );
};

export default MultipleChoiceButton;
