import colors from "../../../../sharedResources/colors.json";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useEditing, useAnswerDescription, useSlideInput } from "../hooks";

const AnswerButton = ({ i }) => {
  const [editing, setEditing] = useEditing();

  const answerDescription = useAnswerDescription(i);
  const slideInput = useSlideInput();

  return (
    <button
      className="button big answer"
      onClick={() => {
        setEditing("answer" + i);
      }}
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
            {...slideInput}
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
