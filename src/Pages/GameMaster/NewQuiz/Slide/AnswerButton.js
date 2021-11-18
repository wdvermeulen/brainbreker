import colors from "../../../../sharedResources/colors.json";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useEditing, useAnswerDescription } from "../hooks";

const AnswerButton = ({ onBlur, i }) => {
  const [editing, setEditing] = useEditing();

  const answerDescription = useAnswerDescription(i);

  function onKeyDown(e) {
    if (e.key === "Enter") setEditing("");
  }

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
            onBlur={onBlur}
            onKeyDown={onKeyDown}
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
