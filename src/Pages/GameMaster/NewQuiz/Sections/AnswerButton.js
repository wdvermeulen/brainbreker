import colors from "../../../../orderedOptions/colors.json";
import symbols from "../../../../orderedOptions/symbols.json";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const AnswerButton = ({ editing, setEditing, onBlur, answer, i }) => {
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
      <h3>{symbols[i % symbols.length]}</h3>
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
        <span>{answer.value}</span>
      )}
    </button>
  );
};

export default AnswerButton;
