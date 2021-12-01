import colors from "../../sharedResources/colors.json";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const AnswerButton = ({
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
    <button
      className="button big answer"
      onClick={onClick}
      style={{
        borderColor: colors[i % colors.length],
      }}
      key={i}
    >
      <h3>{i + 1}</h3>
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
    </button>
  );
};

export default AnswerButton;