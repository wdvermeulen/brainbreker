import colors from "../../../enums/orderedAnswerAttributes.json";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const AnswerButton = ({ editing, setEditing, onBlur, answer, i }) => {
  function onKeyDown(e) {
    if (e.key === "Enter") setEditing("");
  }

  return (
    <button
      className="AnswerButton"
      onClick={() => {
        setEditing("answer" + i);
      }}
      style={{
        borderColor: colors[i % colors.length].color,
        boxShadow: "0 5px 0 0 " + colors[i % colors.length].color,
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
            {...answer}
          />
        </>
      ) : (
        answer.value
      )}
    </button>
  );
};

export default AnswerButton;
