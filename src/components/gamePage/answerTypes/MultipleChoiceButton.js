import colors from "../../../sharedResources/colors.json";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { styled } from "../../../sharedStyles/theme";

const StyledMultipleChoiceButton = styled("button", {
  borderRadius: "$3",
  borderStyle: "solid",
  borderWidth: "$2",
  borderBottomWidth: "$3",
  wordWrap: "break-word",
  padding: "$1 $2 $2 $2",
  flex: "1 1 100%",
  background: "$answerBackground",
  color: "$textDark",

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

  ":active": {
    boxShadow: "none",
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
  pageInput,
}) => {
  const [editing, setEditing] = useEditing();
  const answerDescription = useAnswerDescription(i);

  const onClick = () => {
    if (setEditing) setEditing("answer" + i);
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
      <div className="header">{i + 1}</div>
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
